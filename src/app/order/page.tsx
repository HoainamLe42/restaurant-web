import Container from '@/components/Container';
import SidebarFilter from '@/components/order/ProductFilter/SidebarFilter';
import ProductList from '@/components/order/ProductList';
import { Metadata } from 'next';

// Metadata
export const metadata: Metadata = {
    title: 'Trang Order | My Restaurant',
    description: 'Browse and filter your items to make an order.',
};

const page = () => {
    return (
        <div className="pt-[50px] pb-0 md:py-[100px]">
            <Container>
                <div className="flex flex-col md:flex-row gap-4 mt-[65px]">
                    <SidebarFilter />
                    <ProductList />
                </div>
            </Container>
        </div>
    );
};

export default page;
