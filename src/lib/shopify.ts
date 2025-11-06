import { createStorefrontApiClient } from '@shopify/storefront-api-client';

const client = createStorefrontApiClient({
  storeDomain: import.meta.env.VITE_SHOPIFY_STORE_DOMAIN,
  apiVersion: '2024-10',
  publicAccessToken: import.meta.env.VITE_SHOPIFY_STOREFRONT_ACCESS_TOKEN,
});

export interface ShopifyProduct {
  id: string;
  title: string;
  description: string;
  handle: string;
  priceRange: {
    minVariantPrice: {
      amount: string;
      currencyCode: string;
    };
  };
  images: {
    edges: Array<{
      node: {
        url: string;
        altText: string | null;
      };
    }>;
  };
  variants: {
    edges: Array<{
      node: {
        id: string;
        title: string;
        priceV2: {
          amount: string;
          currencyCode: string;
        };
        availableForSale: boolean;
      };
    }>;
  };
}

export interface ShopifyCart {
  id: string;
  checkoutUrl: string;
  lines: {
    edges: Array<{
      node: {
        id: string;
        quantity: number;
        merchandise: {
          id: string;
          title: string;
          priceV2: {
            amount: string;
            currencyCode: string;
          };
          product: {
            title: string;
            images: {
              edges: Array<{
                node: {
                  url: string;
                  altText: string | null;
                };
              }>;
            };
          };
        };
      };
    }>;
  };
  cost: {
    totalAmount: {
      amount: string;
      currencyCode: string;
    };
  };
}

const PRODUCTS_QUERY = `
  query GetProducts($first: Int!) {
    products(first: $first) {
      edges {
        node {
          id
          title
          description
          handle
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
          }
          images(first: 1) {
            edges {
              node {
                url
                altText
              }
            }
          }
          variants(first: 10) {
            edges {
              node {
                id
                title
                priceV2 {
                  amount
                  currencyCode
                }
                availableForSale
              }
            }
          }
        }
      }
    }
  }
`;

const CREATE_CART_MUTATION = `
  mutation CreateCart($lines: [CartLineInput!]!) {
    cartCreate(input: { lines: $lines }) {
      cart {
        id
        checkoutUrl
        lines(first: 10) {
          edges {
            node {
              id
              quantity
              merchandise {
                ... on ProductVariant {
                  id
                  title
                  priceV2 {
                    amount
                    currencyCode
                  }
                  product {
                    title
                    images(first: 1) {
                      edges {
                        node {
                          url
                          altText
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
        cost {
          totalAmount {
            amount
            currencyCode
          }
        }
      }
    }
  }
`;

const ADD_TO_CART_MUTATION = `
  mutation AddToCart($cartId: ID!, $lines: [CartLineInput!]!) {
    cartLinesAdd(cartId: $cartId, lines: $lines) {
      cart {
        id
        checkoutUrl
        lines(first: 10) {
          edges {
            node {
              id
              quantity
              merchandise {
                ... on ProductVariant {
                  id
                  title
                  priceV2 {
                    amount
                    currencyCode
                  }
                  product {
                    title
                    images(first: 1) {
                      edges {
                        node {
                          url
                          altText
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
        cost {
          totalAmount {
            amount
            currencyCode
          }
        }
      }
    }
  }
`;

export async function getProducts(count = 10): Promise<ShopifyProduct[]> {
  const { data, errors } = await client.request(PRODUCTS_QUERY, {
    variables: { first: count },
  });

  if (errors) {
    console.error('Shopify API errors:', errors);
    throw new Error('Failed to fetch products');
  }

  return data?.products?.edges?.map((edge: any) => edge.node) || [];
}

export async function createCart(variantId: string, quantity = 1): Promise<ShopifyCart> {
  const { data, errors } = await client.request(CREATE_CART_MUTATION, {
    variables: {
      lines: [
        {
          merchandiseId: variantId,
          quantity,
        },
      ],
    },
  });

  if (errors) {
    console.error('Shopify API errors:', errors);
    throw new Error('Failed to create cart');
  }

  return data?.cartCreate?.cart;
}

export async function addToCart(cartId: string, variantId: string, quantity = 1): Promise<ShopifyCart> {
  const { data, errors } = await client.request(ADD_TO_CART_MUTATION, {
    variables: {
      cartId,
      lines: [
        {
          merchandiseId: variantId,
          quantity,
        },
      ],
    },
  });

  if (errors) {
    console.error('Shopify API errors:', errors);
    throw new Error('Failed to add to cart');
  }

  return data?.cartLinesAdd?.cart;
}
