"use client";

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Newsletter from '@/components/Newsletter';
import ProductsList from '@/components/Products';


const StackbuldEcommerce: React.FC = () => {

  return (
    <div className="min-h-screen bg-white">
      {/* Skip to main content link for screen readers */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-orange-500 text-white px-4 py-2 z-50 focus:outline-none focus:ring-2 focus:ring-orange-600"
      >
        Skip to main content
      </a>

      <Header />

      <main id="main-content">

        <Hero />

        <section id="products" className="py-16 bg-gray-50" aria-labelledby="products-heading">

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <h2 id="products-heading" className="text-3xl font-bold text-center mb-12 text-gray-900">Our Products</h2>

            <ProductsList />

          </div>

        </section>

      </main>

      <Newsletter />

      <Footer />

    </div>
  );
};

export default StackbuldEcommerce;