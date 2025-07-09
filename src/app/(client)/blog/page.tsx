'use client';

import Container from '@/components/Container';
import Button from '@/components/share/Button';
import { fetchBlogs, selectAllBlogs } from '@/features/blogs/blogSlice';
import { AppDispatch } from '@/features/store';
import { formatDate } from '@/utils/CurrencyFormatter';
import Image from 'next/image';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Page = () => {
    const dispatch = useDispatch<AppDispatch>();
    const blogs = useSelector(selectAllBlogs);

    useEffect(() => {
        dispatch(fetchBlogs());
    }, [dispatch]);

    const sortedBlogs = [...blogs].sort(
        (a, b) => new Date(b.date).getTime() - new Date(b.date).getTime(),
    );

    // Tách bài viết mới nhất và phần còn lại
    const [latestPost, ...otherPosts] = sortedBlogs;

    console.log('Data: =>>>', latestPost);

    return (
        <div className="py-[100px]">
            <Container>
                <div>
                    <h2 className="text-center text-[32px] md:text-[64px] my-7 border-y border-y-gray-500">
                        Restaurant Management & Growth Blog
                    </h2>

                    {/* Bài viết mới nhất */}
                    <div className="mb-10 border-b border-b-gray-500 pb-12.5">
                        <div className="w-full flex flex-col md:flex-row">
                            <Image
                                src={latestPost?.thumbnail}
                                alt={latestPost?.title}
                                height={491}
                                width={670}
                                className="w-[670px] h-[280px] md:h-[491px] object-cover"
                            />
                            <div className="p-6">
                                <h2 className="text-3xl md:text-[40px] font-bold mb-2">
                                    {latestPost?.title}
                                </h2>

                                <div className="flex gap-2 text-white80 mt-4">
                                    <p>{formatDate(latestPost?.date)}</p>
                                    <p>{latestPost?.author}</p>
                                </div>

                                <p className="mt-7 text-white80">
                                    {latestPost?.excerpt}
                                </p>
                                <Button
                                    variant="underline"
                                    size="underline"
                                    className="mt-8.5 md:mt-11"
                                >
                                    Xem thêm
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Các bài viết còn lại */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {otherPosts.map((item) => (
                            <div
                                key={item.id}
                                className="h-full flex-col flex border-b border-b-gray-500 pb-4"
                            >
                                <Image
                                    src={item?.thumbnail}
                                    alt={item?.title}
                                    height={534}
                                    width={570}
                                    className="w-[570px] h-[534px] object-cover"
                                />
                                <h4 className="sm:text-3xl text-[40px] mt-4">
                                    {item.title}
                                </h4>

                                <div className="flex gap-2 text-white80 mt-4">
                                    <p>{formatDate(item.date)}</p>
                                    <p>{item.author}</p>
                                </div>
                                <div className="mt-auto">
                                    <Button
                                        variant="underline"
                                        size="underline"
                                        className="mt-3 md:mt-5"
                                    >
                                        Xem thêm
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Page;
