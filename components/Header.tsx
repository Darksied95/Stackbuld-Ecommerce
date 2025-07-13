import { Search, ShoppingCart } from 'lucide-react';
import React, { useState } from 'react'

const Header = ({ isScrolled }: { isScrolled: boolean }) => {
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <header className={`bg-white shadow-sm fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-lg' : ''}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <a href="/" aria-label="Stackbuld homepage">
                            <span className="p-2 bg-gray-900 flex items-center justify-center">
                                <span className="text-white font-bold text-sm">SB</span>
                            </span>
                        </a>
                    </div>

                    {/* Search Bar */}
                    <div className="flex-1 max-w-md mx-8">
                        <div role="search">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} aria-hidden="true" />
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder="Search products..."
                                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white text-sm"
                                    aria-label="Search products"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Navigation */}
                    <nav className="flex items-center space-x-4">
                        <button
                            className="p-2 text-gray-700 hover:text-gray-900 transition-colors"
                            aria-label="Shopping cart"
                        >
                            <ShoppingCart size={20} />
                        </button>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header