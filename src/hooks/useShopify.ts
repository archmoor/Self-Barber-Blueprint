import { useState, useEffect } from 'react';
import { getProducts, createCart, addToCart, ShopifyProduct, ShopifyCart } from '../lib/shopify';

export function useProducts() {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        const data = await getProducts(10);
        setProducts(data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load products');
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  return { products, loading, error };
}

export function useCart() {
  const [cart, setCart] = useState<ShopifyCart | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const addItemToCart = async (variantId: string, quantity = 1) => {
    try {
      setLoading(true);
      setError(null);

      let updatedCart: ShopifyCart;
      if (!cart) {
        updatedCart = await createCart(variantId, quantity);
        localStorage.setItem('shopify_cart_id', updatedCart.id);
      } else {
        updatedCart = await addToCart(cart.id, variantId, quantity);
      }
      setCart(updatedCart);
      return updatedCart;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to add item to cart');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const checkout = () => {
    if (cart?.checkoutUrl) {
      window.location.href = cart.checkoutUrl;
    }
  };

  const cartCount = cart?.lines?.edges?.reduce((total, edge) => total + edge.node.quantity, 0) || 0;

  useEffect(() => {
    const savedCartId = localStorage.getItem('shopify_cart_id');
    if (savedCartId) {
      // Cart ID is saved for potential future cart retrieval
    }
  }, []);

  return { cart, cartCount, addItemToCart, checkout, loading, error };
}
