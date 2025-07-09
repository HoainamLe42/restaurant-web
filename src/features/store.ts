import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './products/productSlice';
import cartReducer from './cart/cartSlice';
// import { saveCartToLocalStorage } from '@/utils/localStorage';
import blogsReducer from './blogs/blogSlice';

export const store = configureStore({
    reducer: {
        products: productsReducer,
        cart: cartReducer,
        blogs: blogsReducer,
    },
});

// Lưu cart vào localStorage mỗi khi thay đổi
store.subscribe(() => {
    const state = store.getState();
    console.log(state);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
