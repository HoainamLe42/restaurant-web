import { VariantProps, cva } from 'class-variance-authority';
import Link from 'next/link';
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

export const buttonStyles = cva(['transition-colors'], {
    variants: {
        variant: {
            default: [
                'bg-primary/80',
                'text-white',
                'text-base',
                'font-semibold',
                'inline-flex',
                'items-center',
                'justify-center',
                'hover:bg-primary',
                'hover:cursor-pointer',
                'hover:scale-105',
                'transition-all',
                'duration-150',
                'text-nowrap',
            ],
            ghost: ['hover:underline'],
            dark: [
                'bg-secondary-dark',
                'hover:bg-secondary-dark-hover',
                'text-secondary',
            ],
            outline: [
                'hover:cursor-pointer',
                'hover:text-primary',
                'hover:underline',
            ],
            borderOnly: [
                'flex',
                'items-center',
                'justify-center',
                'border',
                'border-primary/80',
                'hover:border-primary',
                'font-semibold',
                'text-primary',
                // 'hover:bg-primary',
                'hover:text-white',
                'hover:cursor-pointer',
                'capitalize',
            ],
            underline: [
                'flex',
                'items-center',
                'justify-center',
                'border-b',
                'hover:border-primary',
                'font-semibold',
                'hover:text-primary',
                'hover:cursor-pointer',
                'capitalize',
            ],
        },
        size: {
            default: ['md:h-[56px]', 'md:px-7', 'h-[42px]', 'px-4'],
            small: ['md:py-[9px]', 'md:px-6', 'h-[42px]', 'px-4'],
            underline: ['px-0', 'py-1.5'],
            icon: [
                'rounded-full',
                'w-10',
                'h-10',
                'flex',
                'items-center',
                'justify-center',
                'p-2.5',
                'text-white',
            ],
        },
    },
    defaultVariants: {
        variant: 'default',
        size: 'default',
    },
});

type ButtonProps = VariantProps<typeof buttonStyles> & {
    to?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ size, variant, className, to, ...props }: ButtonProps) => {
    const buttonClassName = twMerge(buttonStyles({ size, variant }), className);

    if (to) {
        return (
            <Link
                href={to}
                {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
                className={buttonClassName}
            ></Link>
        );
    }

    return <button {...props} className={buttonClassName} />;
};

export default Button;
