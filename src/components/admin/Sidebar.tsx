'use client';

import { navItems } from '@/data/admin/navData';
import { LogOut } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';

const Sidebar = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div>
            {/* Sidebar */}
            <aside
                className={`fixed top-0 left-0 h-screen bg-gray-800 text-white w-64 transform transition-transform md:translate-x-0 ${
                    isOpen ? 'translate-x-0' : '-translate-x-full'
                } md:static z-40`}
            >
                <div className="p-4 text-2xl font-bold border-b border-gray-700">
                    <Link href={'/'}>Admin Panel</Link>
                </div>
                <nav className="mt-4">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`flex items-center p-4 hover:bg-gray-700 ${
                                pathname === item.href ? 'bg-gray-700' : ''
                            }`}
                            onClick={() => setIsOpen(false)}
                        >
                            <item.icon className="w-5 h-5 mr-3" />
                            {item.name}
                        </Link>
                    ))}
                    <button
                        className="flex items-center p-4 w-full text-left hover:bg-gray-700"
                        onClick={() => console.log('Logout')}
                    >
                        <LogOut className="w-5 h-5 mr-2" />
                        Logout
                    </button>
                </nav>
            </aside>
        </div>
    );
};

export default Sidebar;
