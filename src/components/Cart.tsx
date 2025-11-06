import { ShoppingCart, X } from 'lucide-react';
import { ShopifyCart } from '../lib/shopify';

interface CartProps {
  cart: ShopifyCart | null;
  cartCount: number;
  onCheckout: () => void;
  isOpen: boolean;
  onToggle: () => void;
}

export function Cart({ cart, cartCount, onCheckout, isOpen, onToggle }: CartProps) {
  return (
    <>
      <button
        onClick={onToggle}
        className="fixed top-6 right-6 z-50 bg-gold text-black p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
      >
        <ShoppingCart className="w-6 h-6" />
        {cartCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-black text-gold w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">
            {cartCount}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-end">
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onToggle}
          />
          <div className="relative bg-gradient-to-br from-black via-neutral-900 to-[#D4AF37]/30 w-full max-w-md h-full shadow-2xl overflow-hidden flex flex-col">
            <div className="p-6 border-b border-gold/20">
              <div className="flex items-center justify-between">
                <h2 className="font-heading text-2xl text-gold">Your Cart</h2>
                <button
                  onClick={onToggle}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {!cart || cart.lines.edges.length === 0 ? (
                <div className="text-center text-gray-400 py-12">
                  <ShoppingCart className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p>Your cart is empty</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {cart.lines.edges.map(({ node }) => {
                    const image = node.merchandise.product.images.edges[0]?.node;
                    return (
                      <div
                        key={node.id}
                        className="flex gap-4 bg-black/30 p-4 rounded-lg border border-gold/10"
                      >
                        {image && (
                          <img
                            src={image.url}
                            alt={image.altText || ''}
                            className="w-20 h-20 object-cover rounded"
                          />
                        )}
                        <div className="flex-1">
                          <h3 className="font-heading text-white">
                            {node.merchandise.product.title}
                          </h3>
                          <p className="text-sm text-gray-400">
                            {node.merchandise.title}
                          </p>
                          <div className="flex items-center justify-between mt-2">
                            <span className="text-sm text-gray-400">
                              Qty: {node.quantity}
                            </span>
                            <span className="text-gold font-heading">
                              £{parseFloat(node.merchandise.priceV2.amount).toFixed(2)}
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {cart && cart.lines.edges.length > 0 && (
              <div className="p-6 border-t border-gold/20 bg-black/50">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-heading text-lg text-white">Total</span>
                  <span className="font-heading text-2xl text-gold">
                    £{parseFloat(cart.cost.totalAmount.amount).toFixed(2)}
                  </span>
                </div>
                <button
                  onClick={onCheckout}
                  className="w-full bg-gold text-black font-heading text-lg py-4 rounded-md hover:bg-opacity-90 transition-all transform hover:scale-105"
                >
                  Checkout
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
