'use client';

import { initCartFromLocalStorage } from '@/features/cart/cartSlice';
import { store } from '@/features/store';
import { useEffect } from 'react';
import { Provider } from 'react-redux';

export const ReduxProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    useEffect(() => {
        store.dispatch(initCartFromLocalStorage());
    }, []);

    return <Provider store={store}>{children}</Provider>;
};
