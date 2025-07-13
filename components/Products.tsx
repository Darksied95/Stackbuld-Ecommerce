import React from 'react'
import ProductCard from './ProductCard';
import { useGetProducts } from '@/queries/products.queries';
import { LoadingSkeleton } from './LoadingSkeleton';


interface Product {
    id: string;
    name: string;
    price: number;
    image: string;
    isPreOrder: boolean;
}


// const products: Product[] = [
//     {
//         id: '1',
//         name: 'MONOGRAM CARRYING CASE',
//         price: 59,
//         image: '/api/placeholder/300/300',
//         isPreOrder: true
//     },
//     {
//         id: '2',
//         name: 'MONOGRAM CORE',
//         price: 159,
//         image: '/api/placeholder/300/300',
//         isPreOrder: true
//     },
//     {
//         id: '3',
//         name: 'SLIDER MODULE',
//         price: 159,
//         image: '/api/placeholder/300/300',
//         isPreOrder: true
//     },
//     {
//         id: '4',
//         name: 'ESSENTIAL KEYS MODULE',
//         price: 129,
//         image: '/api/placeholder/300/300',
//         isPreOrder: true
//     },
//     {
//         id: '5',
//         name: 'ORBITER MODULE',
//         price: 159,
//         image: '/api/placeholder/300/300',
//         isPreOrder: true
//     },
//     {
//         id: '6',
//         name: 'DIAL MODULE',
//         price: 129,
//         image: '/api/placeholder/300/300',
//         isPreOrder: true
//     }
// ];

const ProductsList = () => {
    const { data: products, isPending, isError } = useGetProducts();

    return (
        <section id="products" className="py-16 bg-gray-50" aria-labelledby="products-heading">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 id="products-heading" className="text-3xl font-bold text-center mb-12 text-gray-900">Our Products</h2>

                {
                    isPending
                        ? <LoadingSkeleton />
                        : <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {(products || []).map((product) => <ProductCard key={product.id} product={product} />)}
                        </div>
                }
            </div>
        </section>
    )
}

export default ProductsList