import { Product } from '@/types/product';
import React from 'react';
import RatingDisplay from '../share/RatingDisplay';
import Image from 'next/image';
import Link from 'next/link';
import {
    addToCart,
    decreaseQuantity,
    selectCartItems,
} from '@/features/cart/cartSlice';
import toast from 'react-hot-toast';
import { AppDispatch } from '@/features/store';
import { useDispatch, useSelector } from 'react-redux';

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
    const dispatch = useDispatch<AppDispatch>();
    const cartItems = useSelector(selectCartItems);

    const handleAddToCart = () => {
        dispatch(
            addToCart({
                id: product.id,
                name: product.name,
                image: product.image,
                price: product.price,
                quantity: 1,
            }),
        );
        toast.success('Đã thêm vào giỏ hàng!');
    };

    const handleDecrease = (productId: string) => {
        dispatch(decreaseQuantity(productId));
    };

    const productInCart = cartItems.find((item) => item.id === product.id);
    const currentQuantity = productInCart ? productInCart.quantity : 0;
    return (
        <div className="relative bg-gray-800 rounded-xl shadow p-4 hover:shadow-md transition">
            <Link href={`/order/${product.slug}`}>
                <Image
                    src={product.image}
                    alt={product.name}
                    width={200}
                    height={160}
                    loading="lazy"
                    className="w-full h-40 object-cover rounded cursor-pointer"
                />
            </Link>
            <h3 className="mt-2 font-semibold text-lg">{product.name}</h3>
            <div className="flex justify-between items-end group">
                <p className="text-sm text-gray-500 capitalize">
                    {product.category}
                </p>
                <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-150">
                    <span
                        onClick={() => handleDecrease(product.id)}
                        className="h-[30px] w-[30px] border text-2xl flex items-center justify-center cursor-pointer hover:border-primary hover:text-primary transition-all duration-150"
                    >
                        -
                    </span>
                    {currentQuantity > 0 && <p>{currentQuantity}</p>}
                    <span
                        onClick={handleAddToCart}
                        className="h-[30px] w-[30px] border text-2xl flex items-center justify-center cursor-pointer hover:border-primary hover:text-primary transition-all duration-150"
                    >
                        +
                    </span>
                </div>
            </div>
            <div className="flex items-end flex-wrap justify-between gap-2">
                <RatingDisplay rating={product.rating ?? 0} size="small" />
                <p className="mt-1 text-primary font-bold font-libre-bodoni">
                    {product.price.toLocaleString()}₫
                </p>
            </div>
        </div>
    );
};

export default ProductCard;
