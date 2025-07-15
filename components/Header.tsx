"use client";

import { SITE_NAME } from '@/constants';
import { useCartStore } from '@/store/cart.store';
import { useGlobalSearch } from '@/store/search.store';
import { Search, ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect } from 'react'

const Header = () => {
    const itemsInCart = useCartStore(state => state.items);
    const { keyword, setKeyword } = useGlobalSearch(state => state);

    useEffect(() => {
        const cartState = localStorage.getItem('cart-storage');
        if (cartState) {
            const parsedCart = JSON.parse(cartState);
            if (parsedCart.state) {
                useCartStore.setState(parsedCart.state);
            }
        }
    }, [])

    return (
        <header className="bg-slate-800 text-white px-6 py-4 md:fixed top-0 right-0 left-0 z-50 transition-all duration-300">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                        <div className="w-6 h-6 bg-slate-800 rounded-sm flex items-center justify-center">
                            <div className="w-3 h-3 border border-white"></div>
                        </div>
                    </div>
                    <Link
                        href={`/`}
                        className="text-xl font-semibold tracking-wide"
                    >
                        {SITE_NAME}
                    </Link>
                </div>

                <div className="hidden md:block flex-1 max-w-md mx-8">
                    <div role="search">
                        <div className="relative text-black">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} aria-hidden="true" />
                            <input
                                type="text"
                                value={keyword}
                                onChange={(e) => setKeyword(e.target.value)}
                                placeholder="Search products..."
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white text-sm"
                                aria-label="Search products..."
                            />
                        </div>
                    </div>
                </div>

                <Link
                    href={`/cart`}
                    className="flex items-center space-x-4">
                    <span className="relative">
                        <ShoppingCart className="w-6 h-6" />
                        {
                            itemsInCart.length > 0 && <span className="absolute -top-2 -right-2 bg-amber-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                                {itemsInCart.length}
                            </span>
                        }
                    </span>
                    <span className="text-sm">NGN</span>
                </Link>

            </div>
        </header>
    )
}

export default Header