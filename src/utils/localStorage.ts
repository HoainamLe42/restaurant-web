import { CartItem } from '@/types/order';

export const loadCartFromLocalStorage = (): CartItem[] => {
    if (typeof window !== 'undefined') {
        const data = localStorage.getItem('cart');
        return data ? JSON.parse(data) : [];
    }
    return [];
};
