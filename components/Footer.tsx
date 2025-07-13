import { SITE_NAME } from '@/constants';
import { Instagram, Twitter, Facebook, Youtube } from 'lucide-react'
import React, { useState } from 'react'

const Footer = () => {
    const [footerEmail, setFooterEmail] = useState('');

    const handleFooterSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Footer email submitted:', footerEmail);
        setFooterEmail('');
    };

    return <footer className="bg-gray-900 text-white py-12" role="contentinfo">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                {/* Company Info */}
                <div className="md:col-span-1">
                    <h3 className="text-lg font-semibold mb-4 text-orange-500">{SITE_NAME}</h3>
                    <address className="text-gray-400 text-sm not-italic">
                        <p>305 King St. W.</p>
                        <p>Suite 502</p>
                        <p>Kitchener, ON</p>
                        <p>Canada</p>
                    </address>
                </div>

                {/* Quick Links */}
                <div className="md:col-span-1">
                    <h3 className="text-lg font-semibold mb-4 text-orange-500">QUICK LINKS</h3>
                    <nav>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li><a href="#" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded">Home</a></li>
                            <li><a href="#" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded">How it Works</a></li>
                            <li><a href="#products" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded">Shop</a></li>
                            <li><a href="#" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded">Download</a></li>
                        </ul>
                    </nav>
                </div>

                {/* Help */}
                <div className="md:col-span-1">
                    <h3 className="text-lg font-semibold mb-4 text-orange-500">HELP</h3>
                    <nav>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li><a href="#" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded">FAQs</a></li>
                            <li><a href="#" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded">Support Center</a></li>
                            <li><a href="#" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded">Shipping and Sales</a></li>
                        </ul>
                    </nav>
                </div>

                {/* Information */}
                <div className="md:col-span-1">
                    <h3 className="text-lg font-semibold mb-4 text-orange-500">INFORMATION</h3>
                    <nav>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li><a href="#" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded">About Us</a></li>
                            <li><a href="#" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded">Work with us</a></li>
                            <li><a href="#" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded">Terms of Use</a></li>
                            <li><a href="#" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded">Terms of Sale</a></li>
                            <li><a href="#" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded">Press Kit</a></li>
                        </ul>
                    </nav>
                </div>

                {/* Newsletter */}
                <div className="md:col-span-1">
                    <h3 className="text-lg font-semibold mb-4 text-orange-500">SUBSCRIBE TO {SITE_NAME}</h3>
                    <p className="text-gray-400 text-sm mb-4">
                        Master productivity with Creative Console and get all the latest {SITE_NAME} news.
                    </p>
                    <div className="mb-4">
                        <label htmlFor="footer-email" className="sr-only">Email address for newsletter</label>
                        <input
                            id="footer-email"
                            type="email"
                            value={footerEmail}
                            onChange={(e) => setFooterEmail(e.target.value)}
                            placeholder="Email Address"
                            className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded text-white text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 mb-2"
                            required
                        />
                        <button
                            type="submit"
                            onClick={handleFooterSubmit}
                            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded font-semibold text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 focus:ring-offset-gray-900"
                        >
                            SUBMIT
                        </button>
                    </div>
                    <nav aria-label="Social media links">
                        <div className="flex space-x-3">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded p-1" aria-label="Follow us on Instagram">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded p-1" aria-label="Follow us on Twitter">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded p-1" aria-label="Follow us on Facebook">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded p-1" aria-label="Follow us on YouTube">
                                <Youtube size={20} />
                            </a>
                        </div>
                    </nav>
                </div>
            </div>

            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
                <p>© {SITE_NAME} {new Date().getFullYear()}</p>
            </div>
        </div>
    </footer>
}

export default Footer