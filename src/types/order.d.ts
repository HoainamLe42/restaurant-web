export interface CustomerInfo {
    name: string;
    email: string;
    phone: string;
    address: string;
    note?: string;
}

export interface CartItem {
    id: string;
    name: string;
    price: number;
    image: string;
    quantity: number;
}

export interface OrderSummary {
    subtotal: number;
    discount: number;
    shippingFee: number;
    total: number;
    couponCode?: string;
    paymentMethod?: 'cod' | 'bank' | 'momo';
}

export interface Order {
    id: string;
    customerInfo: CustomerInfo;
    cartItems: CartItem[];
    summary: OrderSummary;
    createdAt: string;
    status?: 'pending' | 'confirmed' | 'shipped' | 'delivered' | 'cancelled';
}
