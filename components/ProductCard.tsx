import { IProduct } from '@/types';
import React from 'react'
import { toast } from 'sonner';

const ProductCard = ({ product }: { product: IProduct }) => {

    const handleAddToCart = (productName: string) => {
        toast.success(`${productName} added to cart`);
        // Add screen reader announcement
        const announcement = document.createElement('div');
        announcement.setAttribute('aria-live', 'polite');
        announcement.setAttribute('aria-atomic', 'true');
        announcement.className = 'sr-only';
        announcement.textContent = `${productName} added to cart`;
        document.body.appendChild(announcement);
        setTimeout(() => document.body.removeChild(announcement), 1000);
    };

    return (
        <article key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative">
                <div className="aspect-square bg-gray-200 flex items-center justify-center" role="img" aria-label={`${product.name} product image`}>
                    {product.id === '1' ? (
                        <div className="w-32 h-20 bg-gray-900 rounded-lg relative">
                            <div className="absolute top-2 right-2 w-2 h-8 bg-orange-500 rounded"></div>
                        </div>
                    ) : (
                        <div className="w-32 h-32 bg-gradient-to-br from-orange-400 to-orange-500 rounded-lg flex items-center justify-center">
                            <div className="w-16 h-16 bg-gray-900 rounded-lg flex items-center justify-center">
                                <div className="text-white font-bold text-xs">MODULE</div>
                            </div>
                            {/* <Image src={product.image.url} alt={product.image.alt} width={300} height={300} /> */}
                        </div>
                    )}
                </div>
            </div>
            <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
                <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-gray-900" aria-label={`Price: ₦${product.price_naira}`}>₦{product.price_naira.toLocaleString()}</span>
                    <button
                        className="bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 rounded-lg font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2"
                        onClick={() => handleAddToCart(product.name)}
                        aria-label={`Add ${product.name} to cart for $${product.price_naira}`}
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </article>
    )
}

export default ProductCard