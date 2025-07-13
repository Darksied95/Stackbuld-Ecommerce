export interface IProduct {
    id: string;
    name: string;
    price_naira: number;
    image: {
        url: string;
        alt: string;
    };
    description: string;
    category: string;
    in_stock: boolean;
}