"use client";

import { useCartStore } from '@/store/cart.store';
import { Calendar, CheckCircle, Mail, Truck } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect } from 'react'


function generateDateOrderNumber(): string {
    const date = new Date().toISOString().slice(0, 10).replace(/-/g, '');
    const random = Math.random().toString(36).substring(2, 8).toUpperCase();
    return `ORD-${date}-${random}`;
}

const randomOrderNumber = generateDateOrderNumber();

const Page = () => {
    const clearCart = useCartStore(state => state.clearCart);

    useEffect(() => {
        clearCart();
    }, []);

    return (
        <div className='bg-white min-h-screen pt-20 text-black'>
            <div className="max-w-2xl mx-auto text-center px-4">
                {/* Success Status */}
                <div className="mb-8">
                    <div
                        className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
                        role="img"
                        aria-label="Order successful"
                    >
                        <CheckCircle className="w-12 h-12 text-green-600" aria-hidden="true" />
                    </div>
                    <h1 className="text-3xl font-bold text-slate-800 mb-4">
                        Thank You for Your Order!
                    </h1>
                    <p className="text-lg text-gray-600 mb-8">
                        Your order has been successfully placed and is being processed.
                    </p>
                </div>

                {/* Order Details */}
                <section
                    className="bg-gray-50 rounded-lg p-8 mb-8"
                    aria-labelledby="order-details-heading"
                >
                    <h2 id="order-details-heading" className="sr-only">Order Details</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="text-left">
                            <h3 className="font-semibold text-slate-800 mb-2">Order Number</h3>
                            <p className="text-lg font-mono bg-white text-black px-4 py-2 rounded border">
                                <span className="sr-only">Order number: </span>
                                {randomOrderNumber}
                            </p>
                        </div>
                        <div className="text-left">
                            <h3 className="font-semibold text-slate-800 mb-2">Order Date</h3>
                            <p className="text-lg">
                                <time dateTime={new Date().toISOString()}>
                                    {new Date().toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}
                                </time>
                            </p>
                        </div>
                    </div>
                </section>

                {/* What's Next */}
                <section
                    className="bg-blue-50 rounded-lg p-8 mb-8"
                    aria-labelledby="whats-next-heading"
                >
                    <h2 id="whats-next-heading" className="font-semibold text-slate-800 mb-6">
                        What happens next?
                    </h2>
                    <ol className="space-y-4">
                        <li className="flex items-center space-x-4">
                            <div
                                className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center"
                                aria-hidden="true"
                            >
                                <Mail className="w-4 h-4 text-blue-600" />
                            </div>
                            <div className="text-left">
                                <p className="font-medium text-slate-800">Order Confirmation</p>
                                <p className="text-sm text-gray-600">You'll receive an email confirmation shortly</p>
                            </div>
                        </li>
                        <li className="flex items-center space-x-4">
                            <div
                                className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center"
                                aria-hidden="true"
                            >
                                <Calendar className="w-4 h-4 text-blue-600" />
                            </div>
                            <div className="text-left">
                                <p className="font-medium text-slate-800">Processing</p>
                                <p className="text-sm text-gray-600">Your order will be processed within 1-2 business days</p>
                            </div>
                        </li>
                        <li className="flex items-center space-x-4">
                            <div
                                className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center"
                                aria-hidden="true"
                            >
                                <Truck className="w-4 h-4 text-blue-600" />
                            </div>
                            <div className="text-left">
                                <p className="font-medium text-slate-800">Shipping</p>
                                <p className="text-sm text-gray-600">You'll receive tracking information once shipped</p>
                            </div>
                        </li>
                    </ol>
                </section>

                {/* Actions */}
                <section
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                    aria-labelledby="actions-heading"
                >
                    <h2 id="actions-heading" className="sr-only">Order Actions</h2>
                    <Link
                        href="/"
                        className="px-8 py-3 bg-slate-800 text-white rounded font-semibold hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 transition-colors"
                    >
                        Continue Shopping
                    </Link>
                    <button
                        className="px-8 py-3 border border-slate-800 text-slate-800 rounded font-semibold hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 transition-colors"
                        aria-describedby="track-order-desc"
                    >
                        Track Your Order
                    </button>
                    <span id="track-order-desc" className="sr-only">
                        Track your order using the order number provided above
                    </span>
                </section>

                {/* Support */}
                <section
                    className="mt-12 pt-8 border-t border-gray-200"
                    aria-labelledby="support-heading"
                >
                    <h2 id="support-heading" className="sr-only">Customer Support</h2>
                    <p className="text-gray-600 mb-4">
                        Need help with your order? Contact our support team.
                    </p>
                    <nav
                        className="flex flex-col sm:flex-row gap-4 justify-center text-sm"
                        aria-label="Support contact options"
                    >
                        <a
                            href="mailto:support@stackbuld.com"
                            className="text-slate-800 hover:underline focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 rounded"
                        >
                            support@stackbuld.com
                        </a>
                        <span className="hidden sm:inline text-gray-400" aria-hidden="true">|</span>
                        <a
                            href="tel:1-800-STACKBULD"
                            className="text-slate-800 hover:underline focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 rounded"
                            aria-label="Call support at 1-800-STACKBULD"
                        >
                            1-800-STACKBULD
                        </a>
                        <span className="hidden sm:inline text-gray-400" aria-hidden="true">|</span>
                        <a
                            href="/help"
                            className="text-slate-800 hover:underline focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 rounded"
                        >
                            Help Center
                        </a>
                    </nav>
                </section>
            </div>
        </div>
    )
}

export default Page;