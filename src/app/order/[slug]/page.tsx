import React from 'react';

import ProductDetail from '@/components/order/ProductDetail';
import { getProductBySlug } from '@/lib/api';

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const product = await getProductBySlug(slug);
    console.log('>>Check: ', product);

    return (
        <div>
            <ProductDetail product={product} />
        </div>
    );
}
