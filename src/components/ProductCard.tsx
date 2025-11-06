import { ShopifyProduct } from '../lib/shopify';

interface ProductCardProps {
  product: ShopifyProduct;
  onAddToCart: (variantId: string) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const price = product.priceRange.minVariantPrice;
  const image = product.images.edges[0]?.node;
  const defaultVariant = product.variants.edges[0]?.node;

  const handleAddToCart = () => {
    if (defaultVariant) {
      onAddToCart(defaultVariant.id);
    }
  };

  return (
    <div className="bg-black/50 backdrop-blur-sm border border-gold/20 rounded-lg overflow-hidden hover:border-gold/40 transition-all transform hover:scale-105">
      {image && (
        <div className="aspect-square overflow-hidden bg-neutral-900">
          <img
            src={image.url}
            alt={image.altText || product.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="font-heading text-xl text-gold mb-2">{product.title}</h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-heading text-white">
            £{parseFloat(price.amount).toFixed(2)}
          </span>
          <button
            onClick={handleAddToCart}
            disabled={!defaultVariant?.availableForSale}
            className="relative bg-gold text-black font-heading px-6 py-2 rounded-md hover:bg-opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {defaultVariant?.availableForSale ? 'Add to Cart' : 'Sold Out'}
          </button>
        </div>
      </div>
    </div>
  );
}
