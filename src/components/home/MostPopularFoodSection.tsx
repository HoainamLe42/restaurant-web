import React from 'react';
import Container from '../Container';
import Title from '../share/Title';
import Link from 'next/link';
import { MoveRight } from 'lucide-react';
import PopularFoodSection from './PopularFoodCard';
import { Product } from '@/types/product';

const MostPopularFoodSection: React.FC<{ data: Product[] }> = ({ data }) => {
    return (
        <section className="py-5.5 md:py-12">
            <Container>
                <Title
                    title="Most popular food"
                    description=" A list of most popular Bangladeshi food including mains, drinks,
                    and deserts you must try while in Bangladesh, for an authentic
                    experience. Check now!"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7.5 mt-10 md:mt-14">
                    {data.map((item) => (
                        <PopularFoodSection key={item.id} item={item} />
                    ))}
                </div>

                <div className="flex justify-center mt-7">
                    <Link
                        href={''}
                        className="inline-flex items-center gap-2 border-b pb-1.5 border-b-primary text-primary"
                    >
                        Explore All Food <MoveRight />
                    </Link>
                </div>
            </Container>
        </section>
    );
};

export default MostPopularFoodSection;
