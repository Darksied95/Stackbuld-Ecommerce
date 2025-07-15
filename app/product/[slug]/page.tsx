"use client";

import React, { useState } from 'react';
import { Star } from 'lucide-react';
import { useGetProductById } from '@/queries/products.queries';
import ProductsList from '@/components/Products';
import { toast } from 'sonner';
import { useCartStore } from '@/store/cart.store';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Error from '@/components/Error';

const renderStars = () => {
    const rating = Math.floor(Math.random() * 5);
    return Array.from({ length: 5 }, (_, i) => (
        <Star
            key={i}
            className={`w-4 h-4 ${i < Math.floor(rating)
                ? 'fill-yellow-400 text-yellow-400'
                : i < rating
                    ? 'fill-yellow-400/50 text-yellow-400'
                    : 'text-gray-300'
                }`}
        />
    ));
};

const stars = renderStars();

const reviewersCount = Math.floor(Math.random() * 100)

const ProductPage = ({ params: { slug } }: { params: { slug: string } }) => {
    const [quantity, setQuantity] = useState(1);
    const addItemToCart = useCartStore(state => state.addItem)

    const { data: productData, isPending, isError } = useGetProductById(slug);

    if (isPending) {
        return <div className='text-white'>Loading...</div>
    }

    if (isError) {

        return <Error />
    }

    const product = productData?.product

    function handleAddToCart({ productName, quantity, id, price, image }: { productName: string, quantity: number, id: string, price: number, image: { url: string, alt: string } }) {
        addItemToCart({ id, name: productName, price, image }, quantity);
        toast.success(`${productName} added to cart!`, {
            duration: 2000,
        });
    }

    return (
        <div className=" bg-white mt-12">
            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                    {/* Product Image */}
                    <div
                        className="aspect-square w-[300px] bg-gray-200 flex items-center justify-center"
                        role="img"
                        aria-label={`${product.name} product image`}>
                        <Image
                            src={product.image.url}
                            alt={product.image.alt}
                            width={600}
                            height={600}
                            className='w-full h-full object-cover'
                        />
                    </div>



                    {/* Product Details */}
                    <div>
                        <h1 className="text-3xl font-bold text-slate-800 mb-4">
                            {product.name}
                        </h1>
                        <div className="flex items-center space-x-4 mb-4">
                            <span className="text-2xl font-bold text-slate-800">₦{product.price_naira.toLocaleString()}</span>
                            <div className="flex items-center space-x-2">
                                <div className="flex items-center">
                                    {stars}
                                </div>
                                <span className="text-sm text-gray-600">{reviewersCount}</span>
                            </div>
                        </div>


                        {/* Quantity and Add to Cart */}
                        <div className="flex items-center space-x-4 mb-3">
                            <div className="flex items-center border border-gray-300 rounded">
                                <button
                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                    className="px-3 py-2 text-black hover:bg-black hover:text-white  transition duration-200"
                                >
                                    -
                                </button>
                                <span className="px-4 py-2 border-x border-gray-300 text-black">{quantity}</span>
                                <button
                                    onClick={() => setQuantity(quantity + 1)}
                                    className="px-3 py-2 text-black hover:bg-black hover:text-white  transition duration-200"
                                >
                                    +
                                </button>
                            </div>
                            <button
                                className="bg-slate-800 text-white px-8 py-3 rounded font-semibold hover:bg-slate-700 transition-colors"
                                aria-describedby={`Add ${product.name} to cart for ₦${product.price_naira.toLocaleString()}`}
                                onClick={() => handleAddToCart({
                                    productName: product.name,
                                    quantity,
                                    id: product.id,
                                    price: product.price_naira,
                                    image: {
                                        url: product.image.url,
                                        alt: product.image.alt
                                    }
                                })}
                            >
                                ADD TO CART
                            </button>
                        </div>

                        {/* Product Description */}
                        <p className="text-gray-700 mb-4">
                            {product.description}
                        </p>
                    </div>
                </div>

                {/* Related Products */}
                <section>
                    <h2 className="text-2xl font-bold text-slate-800 mb-8">ALSO RECOMMENDED</h2>
                    <ProductsList />
                </section>
            </main>
        </div>
    );
};

export default ProductPage;