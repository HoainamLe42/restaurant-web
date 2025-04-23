'use client';

import React, { useEffect, useState } from 'react';
import Container from '../Container';
import Image from 'next/image';
import { Product } from '@/types/product';
import RatingDisplay from '../share/RatingDisplay';
import Button from '../share/Button';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '@/features/store';
import {
    addToCart,
    decreaseQuantity,
    selectCartItems,
} from '@/features/cart/cartSlice';
import toast from 'react-hot-toast';

const ProductDetail: React.FC<{ product: Product }> = ({ product }) => {
    const dispatch = useDispatch<AppDispatch>();
    const cartItems = useSelector(selectCartItems);
    const [formattedPrice, setFormattedPrice] = useState('');

    useEffect(() => {
        setFormattedPrice(product.price.toLocaleString('vi-VN'));
    }, [product.price]);

    console.log('Check: ', cartItems);

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
        <div className="pt-[170px] h-screen">
            <Container>
                <div className="grid gap-x-7.5 gap-y-10 md:grid-cols-2">
                    <div className="relative h-[336px] md:h-[616px]">
                        <Image
                            src={product.image}
                            alt="Hero Background"
                            fill
                            className="object-cover h-auto w-auto"
                            priority
                        />
                    </div>

                    <section>
                        <h2 className="text-[34px] md:text-h2">
                            {product.name}
                        </h2>
                        <RatingDisplay rating={product.rating ?? 0} />
                        <span className="text-3xl py-5 block text-primary font-bold font-libre-bodoni">
                            {formattedPrice}₫
                        </span>
                        <p className="text-sm md:text-base text-white80">
                            Aliquam quaerat voluptatem. Ut enim ad minima
                            veniam, quis nostrum exercitationem ullam corporis
                            suscipit laboriosam, nisi ut aliquid ex ea commodi
                            consequatur uis autem vel eum iure reprehenderit.{' '}
                        </p>

                        {/* Button */}
                        <div className="flex gap-4 mt-[42px] md:mt-[52px]">
                            <div className="flex items-center">
                                <span
                                    onClick={() => handleDecrease(product.id)}
                                    className="h-[42px] w-[42px] border text-2xl flex items-center justify-center cursor-pointer"
                                >
                                    -
                                </span>
                                <p className="px-7 border-y h-[42px] flex items-center">
                                    {currentQuantity}
                                </p>
                                <span
                                    onClick={handleAddToCart}
                                    className="h-[42px] w-[42px] border text-2xl flex items-center justify-center cursor-pointer"
                                >
                                    +
                                </span>
                            </div>
                            <Button size="small">ADD TO CART</Button>
                        </div>
                        <div className="flex flex-col gap-3 mt-10">
                            <p>
                                CATEGORY:{' '}
                                <span className="text-white/60">Lunch</span>
                            </p>
                            <p>
                                <span className="text-white/60">PT322</span>
                            </p>{' '}
                            <p>
                                TAGS:
                                <span className="text-white/60">
                                    Sweets,Ghevar
                                </span>
                            </p>
                        </div>
                    </section>
                </div>
            </Container>
        </div>
    );
};

export default ProductDetail;
