import { useState } from 'react';
import { Check, Star, Instagram } from 'lucide-react';
import { useProducts, useCart } from './hooks/useShopify';
import { ProductCard } from './components/ProductCard';
import { Cart } from './components/Cart';

function App() {
  const { products, loading: productsLoading } = useProducts();
  const { cart, cartCount, addItemToCart, checkout, loading: cartLoading } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleGetAccess = async () => {
    if (products.length > 0) {
      const firstProduct = products[0];
      const defaultVariant = firstProduct.variants.edges[0]?.node;
      if (defaultVariant) {
        const updatedCart = await addItemToCart(defaultVariant.id);
        if (updatedCart?.checkoutUrl) {
          window.location.href = updatedCart.checkoutUrl;
        }
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-neutral-900 to-[#D4AF37] text-white font-body">
      {/* Header/Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-neutral-900 to-[#D4AF37]/50"></div>
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <h1 className="font-heading text-5xl md:text-7xl mb-6 leading-tight animate-fade-in">
            Cut Like a Pro.<br />No Barber Needed.
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
            The Self-Barber Blueprint — Confidence Delivered by Discipline.
          </p>
          <div className="relative inline-block">
            <div className="absolute -inset-1 bg-gradient-to-r from-gold via-amber-400 to-gold rounded-md opacity-75 blur animate-glow"></div>
            <button
              onClick={handleGetAccess}
              disabled={productsLoading || products.length === 0}
              className="relative bg-gold text-black font-heading text-lg px-12 py-4 rounded-md hover:bg-opacity-90 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Get Instant Access
            </button>
          </div>
        </div>
      </header>

      {/* Section 1 - Problem/Pain Point */}
      <section className="py-20 px-6 bg-gradient-to-br from-black via-neutral-900 to-[#D4AF37]/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-4xl md:text-5xl mb-8 text-gold">
            Tired of Waiting for Someone Else to Make You Look Sharp?
          </h2>
          <div className="text-lg md:text-xl leading-relaxed space-y-4 text-gray-300">
            <p>
              You've booked the barber. You waited your time. But the fade didn't hit like you needed it to. Or worse — you left feeling like you paid more than the cut delivered.
            </p>
            <p className="text-white font-semibold">
              Here's the truth: If someone else is in control of your fade, your confidence is on their schedule.
            </p>
            <p className="text-gold font-heading text-2xl mt-6">
              It's time to flip that script.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2 - The Offer/Solution */}
      <section className="py-20 px-6 bg-gradient-to-br from-black via-neutral-900 to-[#D4AF37]/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl mb-8 text-center text-gold">
            Master Your Own Look. From Home.
          </h2>
          <div className="text-lg md:text-xl leading-relaxed space-y-4 text-gray-300 mb-10">
            <p>
              Introducing the Self-Barber Blueprint — your complete digital system to cut your own hair, sharpen your line-ups, and build real confidence.
            </p>
            <p>
              This isn't a basic PDF. It's a 65-page illustrated manual built for men with Afro-textured hair, packed with guard charts, mirror tricks, fade workflows, and pro-level drills.
            </p>
            <p className="text-white font-semibold text-xl">
              You'll go from paying for your look... to owning it.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {[
              'Set up mirror + lighting like a pro',
              'Taper fades broken down (Low • Mid • High)',
              'Skin fades explained step by step',
              'Guide to understanding afro hair',
              'Line-ups + enhancements included',
              'Tool care, routine, mindset — all covered',
            ].map((item, index) => (
              <div key={index} className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-gold to-amber-500 rounded-lg opacity-50 group-hover:opacity-100 blur transition duration-500 animate-pulse"></div>
                <div className="relative flex items-start space-x-4 bg-gradient-to-br from-neutral-900 to-black p-6 rounded-lg">
                  <Check className="text-gold flex-shrink-0 w-6 h-6 mt-1" />
                  <span className="text-white text-lg">{item}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 - What You'll Get */}
      <section className="py-20 px-6 bg-gradient-to-br from-black via-neutral-900 to-[#D4AF37]/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl mb-8 text-center text-gold">
            Your Blueprint – Everything Included
          </h2>
          <p className="text-xl text-center text-gray-300 mb-12">
            When you grab the Self-Barber Blueprint, you get:
          </p>

          <div className="space-y-6">
            {[
              '65-page eBook (PDF) with full visuals',
              'Diagrams for each fade, lever, and guard',
              'Weekly practice roadmap to level up fast',
              'Bonus enhancement guide',
              'Lifetime access + future updates',
            ].map((item, index) => (
              <div key={index} className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-gold via-amber-400 to-gold rounded-lg opacity-40 group-hover:opacity-75 transition duration-300"></div>
                <div className="relative flex items-center space-x-4 bg-gradient-to-r from-neutral-900 via-black to-neutral-900 p-6 rounded-lg border-l-4 border-gold">
                  <Star className="text-gold flex-shrink-0 w-8 h-8" fill="#D4AF37" />
                  <span className="text-white text-xl">{item}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 - Proof/Why It Works */}
      <section className="py-20 px-6 bg-gradient-to-br from-black via-neutral-900 to-[#D4AF37]/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-4xl md:text-5xl mb-8 text-gold">
            Crafted by a Self-Barber for Self-Barbers
          </h2>
          <div className="text-lg md:text-xl leading-relaxed space-y-6 text-gray-300">
            <p>
              I've cut my own fade. Weekly. For years.
            </p>
            <p>
              The mistakes, the lessons, the moments where the mirror didn't lie… all of it went into this blueprint.
            </p>
            <p className="text-white font-semibold text-xl">
              When you follow this system, your fade gets cleaner, your line-up sharper, and your confidence firmer.
            </p>
            <p className="text-gold font-heading text-2xl mt-8">
              Because real change happens when you stop depending on others and start executing yourself.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5 - Testimonials */}
      <section className="py-20 px-6 bg-gradient-to-br from-black via-neutral-900 to-[#D4AF37]/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl mb-12 text-center text-gold">
            Guys Who Took Control
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              "I was paying £40 every two weeks. Now I cut myself – and the line-ups look better than my last shop visit.",
              "I've got Afro curls. No one at the shop understood how my crown worked. This guide did, and now I'm saving time and money."
            ].map((testimonial, index) => (
              <div key={index} className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-gold via-amber-500 to-gold rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-glow-border"></div>
                <div className="relative bg-gradient-to-br from-neutral-900 to-black p-8 rounded-lg border-2 border-gold/50">
                  <div className="flex items-center mb-4">
                    <img src="/ChatGPT Image Oct 29, 2025, 08_08_22 PM.png" alt="Logo" className="w-16 h-16" />
                  </div>
                  <p className="text-white text-lg leading-relaxed italic">
                    "{testimonial}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6 - FAQ */}
      <section className="py-20 px-6 bg-gradient-to-br from-black via-neutral-900 to-[#D4AF37]/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl mb-12 text-center text-gold">
            Frequently Asked Questions
          </h2>

          <div className="space-y-8">
            {[
              {
                q: 'Do I need any experience?',
                a: 'None. Every module starts at foundation level and builds up.',
              },
              {
                q: 'Can I apply this to my Afro-texture hair?',
                a: '100%. This guide is built specifically for those curls, coils, and growth patterns.',
              },
              {
                q: 'Do I need expensive equipment?',
                a: 'Not at all. We show Low-Budget, Mid-Budget, and Pro setups. You can start with basic gear and still get elite results.',
              },
              {
                q: 'What if it\'s my first time cutting my own hair?',
                a: 'Perfect. We\'ve got a practice roadmap built for your first 30 days. Progress = guaranteed.',
              },
            ].map((faq, index) => (
              <div key={index} className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-gold to-amber-600 rounded-lg opacity-30 group-hover:opacity-60 blur-sm transition duration-300"></div>
                <div className="relative bg-gradient-to-r from-neutral-900 to-black p-8 rounded-lg border-l-4 border-gold">
                  <h3 className="font-heading text-xl md:text-2xl text-gold mb-4">
                    {faq.q}
                  </h3>
                  <p className="text-white text-lg leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7 - Products */}
      <section className="py-20 px-6 bg-gradient-to-br from-black via-neutral-900 to-[#D4AF37]/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl mb-6 text-center text-gold">
            Your Fade. Your Time. Your Control.
          </h2>
          <p className="text-xl text-center text-gray-300 mb-12">
            Get everything you need to master self-barbering
          </p>

          {productsLoading ? (
            <div className="text-center py-12">
              <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-gold border-r-transparent"></div>
              <p className="text-gray-400 mt-4">Loading products...</p>
            </div>
          ) : products.length > 0 ? (
            <div className="flex justify-center w-full">
              {products.map((product) => (
                <div key={product.id} className="max-w-md w-full">
                  <ProductCard
                    product={product}
                    onAddToCart={addItemToCart}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-400 text-xl">No products available yet.</p>
              <p className="text-gray-500 mt-2">Check back soon!</p>
            </div>
          )}

          <div className="relative group mt-16 max-w-3xl mx-auto">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-gold via-amber-400 to-gold rounded-lg opacity-50 blur group-hover:opacity-75 transition duration-300"></div>
            <div className="relative p-6 bg-gradient-to-r from-neutral-900 to-black rounded-lg border border-gold/30">
              <p className="text-white text-lg text-center">
                <span className="font-heading text-gold">30-day self-cut challenge.</span>{' '}
                You'll see visible improvement within your first month or your money back.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-black to-black border-t border-gold/30 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
            <div className="flex items-center space-x-2">
              <img src="/ChatGPT Image Oct 29, 2025, 08_08_22 PM.png" alt="Logo" className="w-10 h-10" />
              <span className="font-heading text-2xl text-gold">Self-Barber Blueprint</span>
            </div>

            <nav className="flex flex-wrap justify-center gap-6 text-gray-400">
              <a href="#" className="hover:text-gold transition-colors">Home</a>
              <a href="#" className="hover:text-gold transition-colors">About</a>
              <a href="#" className="hover:text-gold transition-colors">Contact</a>
              <a href="#" className="hover:text-gold transition-colors">Support</a>
            </nav>

            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gold transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-white hover:text-gold transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
            <p className="mb-2">
              © 2025 The Self-Barber Blueprint. All rights reserved.
            </p>
            <div className="flex justify-center gap-4">
              <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
              <span>•</span>
              <a href="#" className="hover:text-gold transition-colors">Terms of Use</a>
            </div>
          </div>
        </div>
      </footer>

      <Cart
        cart={cart}
        cartCount={cartCount}
        onCheckout={checkout}
        isOpen={isCartOpen}
        onToggle={() => setIsCartOpen(!isCartOpen)}
      />

      <style>{`
        @keyframes glow {
          0%, 100% {
            opacity: 0.5;
          }
          50% {
            opacity: 1;
          }
        }

        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }

        @keyframes glow-border {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-glow-border {
          background-size: 200% 200%;
          animation: glow-border 3s ease infinite;
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  );
}

export default App;
