"use client"

import { FileQuestion, Home, ExternalLink } from 'lucide-react'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';

const Page = () => {
    const [countdown, setCountdown] = useState(15);
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
        if (countdown === 0) {
            router.push('/');
        }
        return () => {
            clearTimeout(timer);
        }
    }, [countdown, router]);

    return (
        <main className="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-8 mt-14">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gray-100 rounded-full opacity-30 blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-50 rounded-full opacity-30 blur-3xl"></div>
            </div>

            <div className="relative z-10 text-center max-w-4xl mx-auto">
                <div className="mb-8 ">
                    <div className="inline-flex items-center justify-center w-32 h-32 bg-gray-100 rounded-full mb-8 shadow-lg">
                        <FileQuestion className="w-16 h-16 text-gray-400" aria-hidden="true" />
                    </div>
                    <h1 className="text-8xl md:text-9xl font-black text-gray-900 mb-4 tracking-tight">
                        404
                    </h1>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 tracking-tight">
                        Well, this is awkward...
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">

                        Seriously though, how did you even get here?
                    </p>
                </div>

                {/* Enhanced Countdown Timer */}
                <div className="mb-10 p-6 bg-gray-50 rounded-2xl shadow-xl border border-gray-200 inline-block">
                    <div className="flex items-center justify-center gap-3">
                        <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
                        <p className="text-lg text-gray-700">
                            Rescuing you in{' '}
                            <span className="inline-flex items-center justify-center w-8 h-8 bg-orange-500 text-white rounded-full font-bold text-sm">
                                {countdown}
                            </span>
                            {' '}seconds (you&apos;re welcome)
                        </p>
                    </div>
                </div>


                <Link
                    href="/"
                    className="w-full group relative flex items-center  justify-center px-8 py-4 bg-gray-800 hover:bg-orange-600 text-white rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-orange-300 focus:ring-offset-2"
                    aria-label="Go to homepage"
                >
                    <Home className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform duration-300 mb-3" aria-hidden="true" />
                    Go Home
                    <div className="absolute inset-0 rounded-2xl bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </Link>


                {/* Helpful Links */}
                <div className="bg-gray-50 rounded-3xl p-8 shadow-xl border border-gray-200 max-w-2xl mx-auto">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center justify-center gap-2">
                        <ExternalLink className="w-6 h-6 text-orange-500" />
                        Places That Actually Exist
                    </h3>
                    <nav>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <li>
                                <Link
                                    href="/"
                                    className="flex items-center justify-center p-4 bg-white hover:bg-gray-50 text-orange-500 hover:text-orange-600 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-orange-300 focus:ring-offset-2 border border-gray-200"
                                >
                                    Shop All Products
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/cart"
                                    className="flex items-center justify-center p-4 bg-white hover:bg-gray-50 text-orange-500 hover:text-orange-600 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-orange-300 focus:ring-offset-2 border border-gray-200"
                                >
                                    Your Cart
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/checkout"
                                    className="flex items-center justify-center p-4 bg-white hover:bg-gray-50 text-orange-500 hover:text-orange-600 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-orange-300 focus:ring-offset-2 border border-gray-200"
                                >
                                    Checkout
                                </Link>
                            </li>

                        </ul>
                    </nav>
                </div>
            </div>
        </main>
    )
}

export default Page