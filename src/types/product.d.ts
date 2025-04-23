export interface Product {
    id: string;
    name: string;
    slug?: string;
    price: number;
    description?: string;
    category: string[];
    image: string;
    rating?: number;
    isPopular: boolean;
}
