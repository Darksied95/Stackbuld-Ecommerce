import React, { useState } from 'react'
import { SITE_NAME } from '@/constants';

const Newsletter = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Email submitted:', email);
        setEmail('');
    };
    return (
        <section className="bg-gray-900 text-white py-16" aria-labelledby="newsletter-heading">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 id="newsletter-heading" className="text-3xl font-bold mb-4">Stay Updated</h2>
                <p className="text-xl text-gray-300 mb-8">
                    Get the latest updates on new products and exclusive offers.
                </p>
                <div className="max-w-md mx-auto flex gap-4">
                    <label htmlFor="newsletter-email" className="sr-only">Email address</label>
                    <input
                        id="newsletter-email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        required
                        aria-describedby="newsletter-description"
                    />
                    <button
                        type="submit"
                        onClick={handleSubmit}
                        className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 focus:ring-offset-gray-900"
                    >
                        Subscribe
                    </button>
                </div>
                <div id="newsletter-description" className="sr-only">
                    Subscribe to receive updates about new products and exclusive offers from  {SITE_NAME}.
                </div>
            </div>
        </section>
    )
}

export default Newsletter