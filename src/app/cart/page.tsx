'use client';

import axios from 'axios';
import { Trash2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';

import Container from '@/components/Container';
import CartTotalSection from '@/components/cart/CartTotalSection';
import Button from '@/components/share/Button';
import {
    addToCart,
    applyCoupon,
    clearCart,
    coupons,
    decreaseQuantity,
    removeFromCart,
    selectCartDiscount,
    selectCartItems,
    selectCartTotalAfterDiscount,
    selectLabelCoupon,
    selectShippingFee,
    selectTotalPrice,
} from '@/features/cart/cartSlice';
import { AppDispatch } from '@/features/store';
import { CartItem } from '@/types/cartItem';
import { CustomerInfo, Order } from '@/types/order';
import { validateCustomerInfo } from '@/utils/validators';

const page = () => {
    const dispatch = useDispatch<AppDispatch>();
    const cartItems = useSelector(selectCartItems);
    const [couponCode, setCouponCode] = useState<string>('');
    const [couponStatus, setCouponStatus] = useState<'success' | 'error' | ''>(
        '',
    );

    // OrderSummary
    const subTotal = useSelector(selectTotalPrice);
    const discount = useSelector(selectCartDiscount);
    const labelCoupon = useSelector(selectLabelCoupon);
    const shippingFee = useSelector(selectShippingFee);
    const cartTotalAfter = useSelector(selectCartTotalAfterDiscount);

    const [formData, setFormData] = useState<CustomerInfo>({
        name: '',
        email: '',
        phone: '',
        address: '',
        note: '',
    });
    const [isSending, setIsSending] = useState(false);
    const [errors, setErrors] = useState<Partial<CustomerInfo>>({});

    const handleAddToCart = (product: CartItem) => {
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

    const handleRemoveItem = (productId: string) => {
        dispatch(removeFromCart(productId));
    };

    const handleClearAll = () => {
        dispatch(clearCart());
    };

    const handleApplyCoupon = () => {
        if (coupons[couponCode.trim().toLowerCase()]) {
            dispatch(applyCoupon(couponCode));
            setCouponStatus('success');
        } else {
            setCouponStatus('error');
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const isValid = validateCustomerInfo(formData, setErrors);

        if (isValid) {
            try {
                setIsSending(true);

                const generateId = () => String(Date.now());
                const order: Order = {
                    id: generateId(),
                    customerInfo: formData,
                    cartItems: cartItems,
                    summary: {
                        subtotal: subTotal,
                        discount: discount,
                        shippingFee: shippingFee,
                        total: cartTotalAfter,
                    },
                    createdAt: new Date().toISOString(),
                    status: 'pending',
                };

                const createResponse = await axios.post(
                    'http://localhost:3010/orders',
                    order,
                );

                if (createResponse) {
                    toast.success('Đã gửi đơn hàng!');
                    console.log('✅ Đơn hàng đã gửi:', createResponse.data);
                    setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        address: '',
                        note: '',
                    });
                    dispatch(clearCart());
                    localStorage.removeItem('cartItems');
                }
            } catch (error) {
                console.error('❌ Gửi thất bại:', error);
                toast.error('Có lỗi xảy ra!');
            } finally {
                setIsSending(false);
            }
        }
    };

    return (
        <div className="pt-[110px]">
            <Container>
                <section className="my-6 md:my-[60px]">
                    {cartItems.length > 0 ? (
                        <>
                            {/* In pc */}
                            <div className="hidden md:block">
                                <div className="text-end">
                                    <Button
                                        onClick={handleClearAll}
                                        variant="outline"
                                        className=""
                                    >
                                        Xoá tất cả
                                    </Button>
                                </div>
                                <table className="table-auto w-full border border-gray-600 text-left bg-white/10">
                                    <thead>
                                        <tr>
                                            <th className="px-4 py-2"></th>
                                            <th className="px-4 py-2">Tên</th>
                                            <th className="px-4 py-2">Giá</th>
                                            <th className="px-4 py-2">
                                                Số lượng
                                            </th>
                                            <th className="px-4 py-2">Tổng</th>
                                        </tr>
                                    </thead>
                                    <tbody className="border border-gray-600">
                                        {cartItems.map((item) => (
                                            <tr key={item.id}>
                                                <td className="px-6 py-2 mx-auto w-10 text-center">
                                                    <Trash2
                                                        onClick={() =>
                                                            handleRemoveItem(
                                                                item.id,
                                                            )
                                                        }
                                                        className="cursor-pointer w-5 h-5"
                                                    />
                                                </td>
                                                <td className="pr-4 py-2 flex items-center gap-4">
                                                    <Image
                                                        src={item.image}
                                                        alt={item.name}
                                                        width={80}
                                                        height={80}
                                                        className="w-[80px] h-[80px] rounded object-cover"
                                                    />
                                                    <span>{item.name}</span>
                                                </td>
                                                <td className="px-4 py-2">
                                                    {item.price.toLocaleString()}
                                                    ₫
                                                </td>
                                                <td className="px-4 py-2 text-center">
                                                    <div className="flex items-center">
                                                        <span
                                                            onClick={() =>
                                                                handleDecrease(
                                                                    item.id,
                                                                )
                                                            }
                                                            className="h-[42px] w-[42px] border border-gray-500 text-2xl flex items-center justify-center cursor-pointer"
                                                        >
                                                            -
                                                        </span>
                                                        <p className="px-7 border-y border-gray-500 h-[42px] flex items-center">
                                                            {item.quantity}
                                                        </p>
                                                        <span
                                                            onClick={() =>
                                                                handleAddToCart(
                                                                    item,
                                                                )
                                                            }
                                                            className="h-[42px] w-[42px] border border-gray-500 text-2xl flex items-center justify-center cursor-pointer"
                                                        >
                                                            +
                                                        </span>
                                                    </div>
                                                </td>
                                                <td className="px-4 py-2 font-semibold">
                                                    {(
                                                        item.price *
                                                        item.quantity
                                                    ).toLocaleString()}
                                                    ₫
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            {/* In mobile */}
                            <div className="block md:hidden">
                                <div className="border border-gray-500 bg-white/10">
                                    {cartItems.map((item) => (
                                        <div
                                            key={item.id}
                                            className="flex flex-col gap-7 p-5 border-b border-b-gray-500 last:border-b-0"
                                        >
                                            <Trash2
                                                onClick={() =>
                                                    handleRemoveItem(item.id)
                                                }
                                                className="cursor-pointer w-5 h-5 mx-auto"
                                            />
                                            <p className="flex justify-between text-lg font-semibold">
                                                Food:
                                                <span className="font-normal text-base">
                                                    {item.name}
                                                </span>
                                            </p>
                                            <p className="flex justify-between text-lg font-semibold">
                                                Price:
                                                <span className="font-normal text-base">
                                                    {item.price.toLocaleString()}
                                                    ₫
                                                </span>
                                            </p>
                                            <div className="flex justify-between text-lg font-semibold">
                                                Quantity:
                                                <div className="flex items-center">
                                                    <span
                                                        onClick={() =>
                                                            handleDecrease(
                                                                item.id,
                                                            )
                                                        }
                                                        className="h-[42px] w-[42px] border border-gray-500 text-2xl flex items-center justify-center cursor-pointer"
                                                    >
                                                        -
                                                    </span>
                                                    <p className="px-7 border-y border-gray-500 h-[42px] flex items-center">
                                                        {item.quantity}
                                                    </p>
                                                    <span
                                                        onClick={() =>
                                                            handleAddToCart(
                                                                item,
                                                            )
                                                        }
                                                        className="h-[42px] w-[42px] border border-gray-500 text-2xl flex items-center justify-center cursor-pointer"
                                                    >
                                                        +
                                                    </span>
                                                </div>
                                            </div>
                                            <p className="flex justify-between text-lg font-semibold">
                                                Subtotal:
                                                <span className="font-normal text-base">
                                                    {(
                                                        item.price *
                                                        item.quantity
                                                    ).toLocaleString()}
                                                    ₫
                                                </span>
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Enter CODE COUPON */}
                            <div className="py-6 px-5 md:px-10 border border-gray-600 border-t-0 bg-white/10">
                                <div className="flex gap-3 md:gap-6">
                                    <input
                                        type="text"
                                        placeholder="Coupon code"
                                        value={couponCode}
                                        onChange={(e) =>
                                            setCouponCode(e.target.value)
                                        }
                                        className="max-w-[300px] w-full px-2 text-white80 border border-gray-500 bg-white/20 text-sm focus:outline-none"
                                    />
                                    <Button
                                        size="small"
                                        className="font-normal w-full max-w-[140px]"
                                        onClick={handleApplyCoupon}
                                    >
                                        Áp dụng
                                    </Button>
                                </div>
                                {couponStatus === 'success' && (
                                    <p className="text-green-400 text-sm mt-2">
                                        Áp dụng mã thành công! Bạn được giảm{' '}
                                        {labelCoupon}
                                    </p>
                                )}
                                {couponStatus === 'error' && (
                                    <p className="text-red-400 text-sm mt-2">
                                        Mã không hợp lệ. Vui lòng thử lại.
                                    </p>
                                )}
                            </div>

                            {/* Cart total */}
                            <CartTotalSection
                                handleSubmit={handleSubmit}
                                formData={formData}
                                setFormData={setFormData}
                                errors={errors}
                            />
                        </>
                    ) : (
                        <p className="text-gray-400">
                            Chưa có sản phẩm nào.{' '}
                            <Link
                                href={'/order'}
                                className="text-primary hover:underline"
                            >
                                Mua ngay!
                            </Link>
                        </p>
                    )}
                </section>
            </Container>
        </div>
    );
};

export default page;
