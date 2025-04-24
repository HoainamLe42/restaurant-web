import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { loadCartFromLocalStorage } from '@/utils/localStorage';
import { CartItem } from '@/types/order';

interface CartState {
    items: CartItem[];
    coupon: string | null;
    discount: number;
    labelCoupon: string;
    shippingFee: number;
}

export const coupons: Record<string, { label: string; value: number }> = {
    giam10k: { label: 'Giảm 10K', value: 10000 },
    giam50k: { label: 'Giảm 50K', value: 50000 },
};

const initialState: CartState = {
    items: loadCartFromLocalStorage(),

    coupon: null,
    discount: 0,
    labelCoupon: '',
    shippingFee: 30000,
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<CartItem>) {
            const existingItem = state.items.find(
                (item) => item.id === action.payload.id,
            );

            if (existingItem) {
                existingItem.quantity += action.payload.quantity;
            } else {
                state.items.push(action.payload);
            }
        },

        decreaseQuantity(state, action: PayloadAction<string>) {
            const item = state.items.find((item) => item.id === action.payload);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
            } else {
                state.items = state.items.filter(
                    (item) => item.id !== action.payload,
                );
            }
        },

        removeFromCart(state, action: PayloadAction<string>) {
            state.items = state.items.filter(
                (item) => item.id !== action.payload,
            );
        },

        clearCart(state) {
            state.items = [];
        },

        applyCoupon(state, action: PayloadAction<string>) {
            const code = action.payload.toLowerCase();

            if (coupons[code]) {
                state.coupon = code;

                state.discount = coupons[code].value;
                state.labelCoupon = coupons[code].label;
            } else {
                state.coupon = null;
                state.discount = 0;
            }
        },
    },
});
export const {
    addToCart,
    decreaseQuantity,
    removeFromCart,
    clearCart,
    applyCoupon,
} = cartSlice.actions;

export default cartSlice.reducer;

// selectors
export const selectCartItems = (state: RootState) => state.cart.items;
export const selectTotalQuantity = (state: RootState) =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0);

export const selectTotalPrice = (state: RootState) =>
    state.cart.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0,
    );

export const selectCartDiscount = (state: RootState) => state.cart.discount;
export const selectLabelCoupon = (state: RootState) => state.cart.labelCoupon;

export const selectCartTotalAfterDiscount = (state: RootState) =>
    selectTotalPrice(state) -
    selectCartDiscount(state) -
    selectShippingFee(state);
export const selectShippingFee = (state: RootState) => state.cart.shippingFee;
