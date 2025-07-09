import Image from 'next/image';
import { User, X } from 'lucide-react';

import { navData } from '@/data/navData';
import { usePathname, useRouter } from 'next/navigation';

type MobileMenuProps = {
    isOpen: boolean;
    onClose: React.Dispatch<React.SetStateAction<boolean>>;
};

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
    const pathname = usePathname();
    const router = useRouter();
    return (
        <div
            className={`fixed z-50 top-0 left-0 right-0 ${
                isOpen ? 'h-[100vh]' : 'h-0'
            } transition-all duration-300 bg-gray-700`}
        >
            {isOpen && (
                <div className="h-[66px] flex items-center justify-between py-3 px-5">
                    <X data-aos="zoom-in" onClick={() => onClose(false)} />

                    {/* Logo */}
                    <Image
                        src="/images/logo.svg"
                        alt="Restaurant Logo - Your favorite restaurant"
                        width={55}
                        height={53}
                        className="h-[41px] w-[39px] md:h-[53px] md:w-[53px]"
                    />

                    <span className="block md:hidden">
                        <User />
                    </span>
                </div>
            )}

            {isOpen && (
                <nav className="relative z-[999] p-4 shadow-lg h-full">
                    {/* Menu */}
                    <ul
                        data-aos="zoom-in-down"
                        className={`flex flex-col md:hidden gap-5 mt-5 ${
                            isOpen ? 'mt-[45%]' : 'h-0'
                        } `}
                    >
                        {navData.map((nav) => (
                            <li
                                key={nav.id}
                                className={`text-2xl ${
                                    pathname === nav.path
                                        ? 'text-primary font-semibold'
                                        : ''
                                }`}
                                onClick={() => {
                                    router.push(nav.path);
                                    onClose(false);
                                }}
                            >
                                {nav.title}
                            </li>
                        ))}
                    </ul>

                    {/* Sign-in & Sign-up */}
                </nav>
            )}
        </div>
    );
};

export default MobileMenu;
