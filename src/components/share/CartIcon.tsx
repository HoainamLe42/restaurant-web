import {
    removeFromCart,
    selectCartItems,
    selectTotalQuantity,
} from '@/features/cart/cartSlice';
import { AppDispatch } from '@/features/store';
import { ShoppingCart, Trash2 } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from './Button';

const CartIcon = () => {
    const dispatch = useDispatch<AppDispatch>();
    const [isOpenCartIcon, setIsOpenCartIcon] = useState<boolean>(false);

    const totalQuantity = useSelector(selectTotalQuantity);
    const cartItems = useSelector(selectCartItems);

    const handleRemoveItem = (productId: string) => {
        dispatch(removeFromCart(productId));
    };

    return (
        <div className="relative inline-block text-black group">
            <ShoppingCart
                onClick={() => setIsOpenCartIcon(!isOpenCartIcon)}
                className="w-5 h-5 cursor-pointer text-primary"
            />
            {totalQuantity > 0 && (
                <span className="absolute -top-2 -right-2 text-xs bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center">
                    {totalQuantity}
                </span>
            )}

            <div
                className={`absolute p-5 left-0 -top-[100%] min-w-[300px] group-hover:block group-hover:opacity-100 group-hover:top-[100%] transition-all duration-200 opacity-0 ${
                    isOpenCartIcon
                        ? 'block opacity-100 top-[100%]'
                        : 'hidden opacity-0'
                }`}
            >
                <div className="p-4 bg-white flex flex-col max-h-[600px] justify-between">
                    {cartItems.length > 0 ? (
                        <ul className="flex flex-col gap-2 h-auto overflow-y-auto scrollbar-hide">
                            {cartItems.map((item) => (
                                <li
                                    key={item.id}
                                    className="flex items-end justify-between gap-1"
                                >
                                    <div className="flex gap-1">
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            width={50}
                                            height={50}
                                        />
                                        <h4 className="text-sm">{item.name}</h4>
                                    </div>
                                    <div>
                                        <Trash2
                                            onClick={() =>
                                                handleRemoveItem(item.id)
                                            }
                                            className="text-gray-400 w-4 h-4 cursor-pointer"
                                        />
                                        <p>x{item.quantity}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-gray-400">Chưa có sản phẩm nào.</p>
                    )}
                    <p className="border-t border-t-gray-300 mt-4 pt-2 flex justify-between font-semibold text-gray-500">
                        Total:{' '}
                        <span className="text-primary font-normal">
                            x{totalQuantity}
                        </span>
                    </p>
                    <Button to={'/cart'} size="small" className="mt-5">
                        Đến giỏ hàng
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default CartIcon;
