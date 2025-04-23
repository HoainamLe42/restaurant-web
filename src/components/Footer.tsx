import React from 'react';
import Container from './Container';
import Image from 'next/image';
import { footerData } from '@/data/footerData';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className=" pt-[50px] pb-10">
            <Container>
                <div className="flex flex-wrap gap-x-5 gap-y-7 md:gap-[77px]">
                    {/* Colum 1 */}
                    <div className="flex flex-col justify-between">
                        <div>
                            <div className="flex items-center gap-2">
                                <Image
                                    src="/images/logo.svg"
                                    alt="Restaurant Logo - Your favorite restaurant"
                                    width={46}
                                    height={48}
                                    className="h-auto w-[46px] object-cover"
                                />
                                <h2 className="text-3xl font-semibold">
                                    WowWraps
                                </h2>
                            </div>

                            <p className="text-white80 mb-4.5 max-w-[220px] my-5 text-sm">
                                {footerData.companyInfo.description}
                            </p>
                        </div>

                        <div>
                            <p className="text-white80 mb-4.5 max-w-[211px]">
                                Download the WowWraps app today.
                            </p>
                            <ul className="flex flex-wrap gap-4.5">
                                {footerData.companyInfo.downloadApp.map(
                                    (item) => (
                                        <li
                                            key={item.name}
                                            className="bg-black border border-white80 rounded"
                                        >
                                            <Image
                                                src={item.image}
                                                alt={item.name}
                                                width={121}
                                                height={26}
                                                className="h-[36px] w-[121px] object-cover"
                                            />
                                        </li>
                                    ),
                                )}
                            </ul>
                        </div>
                    </div>
                    {/* Colum 2 */}
                    <div>
                        <p className="text-xl font-semibold mb-6">
                            Usefull Link
                        </p>
                        <ul>
                            {footerData.quickLinks.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-white80 py-2 block hover:underline hover:text-primary"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* Colum 3 */}
                    <div>
                        <p className="text-xl font-semibold mb-6">
                            Contact Info
                        </p>
                        <ul className="flex flex-col gap-4">
                            <li className="text-white80 max-w-[197px]">
                                {footerData.companyInfo.contact.address}
                            </li>
                            <li className="text-primary max-w-[197px]">
                                {footerData.companyInfo.contact.email}
                            </li>
                            <li className="text-white80 max-w-[197px]">
                                {footerData.companyInfo.contact.phone}
                            </li>
                        </ul>
                    </div>
                    {/* Colum 4 */}
                    <div>
                        <p className="text-xl font-semibold mb-6">Services</p>
                        <ul className="flex flex-col gap-2">
                            {footerData.services.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-white80 py-2 block hover:underline hover:text-primary"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Colum 5 */}
                    <div>
                        <p className="text-xl font-semibold mb-6">Follow us</p>
                        <ul className="flex gap-3 text-gray-600">
                            {footerData.socialMedia.map((item) => (
                                <li
                                    key={item.name}
                                    className={`h-9 w-9 flex items-center ring-2 justify-center rounded-md hover:text-primary transition-all duration-100`}
                                    style={{ backgroundColor: item.color }}
                                >
                                    <Link href={item.href}>
                                        <img
                                            src={item.icon}
                                            alt=""
                                            className="w-3"
                                        />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                {/* Copyright */}
                <div className="sm:mt-6 mt-4 text-center text-sm pt-6 border-t-[1px] border-gray-400">
                    <p>{footerData.copyright}</p>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
