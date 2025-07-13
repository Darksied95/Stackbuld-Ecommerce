import React from 'react'

const Hero = () => {
    return (
        <section className="relative bg-gradient-to-r from-gray-900 to-gray-700 text-white py-24 mt-16" aria-labelledby="hero-heading">
            <div className="absolute inset-0 bg-black opacity-50" aria-hidden="true"></div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 id="hero-heading" className="text-4xl md:text-6xl font-bold mb-6 tracking-wider">
                    YOUR ONE STOP SHOP<br />
                    FOR EVERYTHING ELECTRONICS
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-gray-300">
                    Discover the perfect item just for you.
                </p>
                <a
                    href="#products"
                    className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 focus:ring-offset-gray-900"
                >
                    Shop Now
                </a>
            </div>
        </section>
    )
}

export default Hero