import { IProduct } from "@/types";

export const getProducts = async () => {
    const res = await fetch('/products.json');

    if (!res.ok) {
        throw new Error('Failed to fetch products');
    }
    const products: IProduct[] = await res.json();

    return products
}

export const getProductById = async (id: string) => {
    const res = await fetch('/products.json')

    if (!res.ok) {
        throw new Error('Failed to fetch product');
    }
    const products: IProduct[] = await res.json();

    const product = products.find(p => p.id === id);

    if (!product) {
        throw new Error(`Product with id ${id} not found`);
    }
    return { product };
}