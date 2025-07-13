import { getProductById, getProducts } from "@/services/products.service";
import { IProduct } from "@/types";
import { useQuery } from "@tanstack/react-query";

export function useGetProductById(id: string) {
    return useQuery<{ product: IProduct }>({
        queryKey: ['product', id],
        queryFn: () => getProductById(id),
        enabled: !!id
    })
}

export function useGetProducts() {
    return useQuery<{ products: IProduct[] }>({
        queryKey: ['products'],
        queryFn: getProducts,
    })
}
