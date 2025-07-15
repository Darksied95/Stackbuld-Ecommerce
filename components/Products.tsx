import React from 'react'
import ProductCard from './ProductCard';
import { useGetProducts } from '@/queries/products.queries';
import { LoadingSkeleton } from './LoadingSkeleton';
import { useGlobalSearch } from '@/store/search.store';

const ProductsList = () => {
    const { data: products, isPending, isError } = useGetProducts();
    const searcKeyword = useGlobalSearch(state => state.keyword);

    const filteredProducts = (products || []).filter(product =>
        product.name.toLowerCase().includes(searcKeyword.toLowerCase())
    );
    return (
        isPending
            ? <LoadingSkeleton />
            : <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {(filteredProducts).map((product) => <ProductCard key={product.id} product={product} />)}
            </div>


    )
}

export default ProductsList