import { IProduct } from '@/types';
import Link from 'next/link';
import React from 'react'
import Image from 'next/image';

const ProductCard = ({ product }: { product: IProduct }) => {

    return (
        <article key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all hover:scale-105   duration-300">
            <div className="aspect-square bg-gray-200 flex items-center justify-center" role="img" aria-label={`${product.name} product image`}>
                <Image
                    src={product.image.url}
                    alt={product.image.alt}
                    width={1600}
                    height={1600}
                    className='w-full h-full object-cover'
                    loading="lazy"
                />
            </div>
            <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
                <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-gray-900" aria-label={`Price: ₦${product.price_naira}`}>₦{product.price_naira.toLocaleString()}</span>
                    <Link
                        href={`/product/${product.id}`}
                        className="bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 rounded-lg font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2"
                    >
                        SHOP NOW
                    </Link>
                </div>
            </div>
        </article>
    )
}

export default ProductCard