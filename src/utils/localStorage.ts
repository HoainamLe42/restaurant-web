import { CartItem } from '@/types/order';

export const saveCartToLocalStorage = (cartItems: CartItem[]) => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
};

export const loadCartFromLocalStorage = () => {
    try {
        const data = localStorage.getItem('cartItems');
        return data ? JSON.parse(data) : [];
    } catch {
        return [];
    }
};
