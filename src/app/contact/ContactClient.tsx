'use client';

import { footerData } from '@/data/footerData';
import { Mail, MapPin, Phone } from 'lucide-react';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

import Container from '@/components/Container';
import Button from '@/components/share/Button';

interface Contact {
    name: string;
    email: string;
    message: string;
}

const ContactClient = () => {
    const [formData, setFormData] = useState<Contact>({
        name: '',
        email: '',
        message: '',
    });
    const handleChangeInput = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log(formData);
        toast.success('Gửi thành công!');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className="pt-30 pb-3 md:pt-[170px] md:pb-20">
            <Container>
                <div className="grid gap-10 grid-cols-1 items-center md:grid-cols-2">
                    {/* Info */}
                    <section className="w-full md:max-w-[470px]">
                        <h3 className="text-4xl md:text-[40px] capitalize font-semibold">
                            Liên hệ với chúng tôi
                        </h3>
                        <p className="text-white80 text-sm md:text-base mt-4 md:mt-5">
                            Nullam dictum felis eu pede mollis pretium. Integer
                            tincidunt. Cras dapibus. Vivamus elementum semper
                            nisi. Aenean vulputate eleifend tellus. Aenean leo
                            ligula, porttitor eu.
                        </p>
                        <ul className="flex flex-col gap-4 md:gap-7.5 mt-9.5 md:mb-14">
                            <li className="flex items-center gap-4.5">
                                <MapPin />
                                {footerData.companyInfo.contact.address}
                            </li>
                            <li className="flex items-center gap-4.5 text-primary cursor-pointer">
                                <Mail />
                                {footerData.companyInfo.contact.email}
                            </li>
                            <li className="flex items-center gap-4.5 cursor-pointer">
                                <Phone />
                                {footerData.companyInfo.contact.phone}
                            </li>
                        </ul>

                        <Button size="small" className="mt-9 md:mt-11">
                            View in google map
                        </Button>
                    </section>

                    {/* Form */}
                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-7"
                    >
                        <div className="relative py-3 border-b border-b-white/40 focus-within:text-primary">
                            <label
                                htmlFor="name"
                                className="absolute top-[-10px] left-0 cursor-pointer"
                            >
                                Your name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChangeInput}
                                placeholder="Enter your name"
                                className="w-full h-full py-3 focus:outline-none text-white placeholder:text-sm"
                            />
                        </div>

                        <div className="relative py-3 border-b border-b-white/40 focus-within:text-primary">
                            <label
                                htmlFor="email"
                                className="absolute top-[-10px] left-0 cursor-pointer"
                            >
                                Email address
                            </label>
                            <input
                                type="text"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChangeInput}
                                placeholder="Enter your email"
                                className="w-full h-full py-3 focus:outline-none text-white placeholder:text-sm"
                            />
                        </div>

                        <div className="relative py-3 border-b border-b-white/40 focus-within:text-primary">
                            <label
                                htmlFor="message"
                                className="absolute top-[-10px] left-0 cursor-pointer"
                            >
                                Write review
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChangeInput}
                                className="min-h-15px h-full resize-none w-full text-white focus:outline-none mt-2"
                            ></textarea>
                        </div>
                        <Button
                            type="submit"
                            size="small"
                            className="max-w-[116px]"
                        >
                            Gửi
                        </Button>
                    </form>
                </div>

                <div className="bg-amber-100 h-[150px] w-full mt-10 md:mt-20 flex items-center justify-center text-black">
                    <p className="text-5xl">Map....SOON</p>
                </div>
            </Container>
        </div>
    );
};

export default ContactClient;
