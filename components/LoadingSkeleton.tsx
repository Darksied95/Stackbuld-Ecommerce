import React from 'react'

const LoadingSkeletonCard = () => {
    return (
        <article className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
            <div className="relative">
                <div className="aspect-square bg-gray-200 flex items-center justify-center">
                    <div className="w-32 h-32 bg-gray-300 rounded-lg" />
                </div>
                <div className="absolute top-4 left-4 bg-gray-300 h-6 w-20 rounded" />
            </div>
            <div className="p-6">
                <div className="h-6 bg-gray-300 rounded w-3/4 mb-4" />
                <div className="flex items-center justify-between">
                    <div className="h-8 w-20 bg-gray-300 rounded" />
                    <div className="h-10 w-24 bg-gray-300 rounded-lg" />
                </div>
            </div>
        </article>

    )
}

export const LoadingSkeleton = () => {
    return <section id="products" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {Array.from({ length: 6 }).map((_, i) => (
                    <LoadingSkeletonCard key={i} />
                ))}
            </div>
        </div>
    </section>
}