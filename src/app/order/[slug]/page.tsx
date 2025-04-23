import React from 'react';

import ProductDetail from '@/components/order/ProductDetail';
import { getProductBySlug } from '@/lib/api';

const page = async ({ params }: { params: { slug: string } }) => {
    const product = await getProductBySlug(params.slug);
    console.log('>>Check: ', product);

    return (
        <div>
            <ProductDetail product={product} />
        </div>
    );
};

export default page;
