import {cva, VariantProps} from 'class-variance-authority';
import Button from './Button';
import { ButtonHTMLAttributes, HtmlHTMLAttributes } from 'react';
import cn from ''

export const ButtonVariants = cva(
    'bg-gray-100',{
        variants: {
            variant: {
                primary: 'bg-pink-500 border-pink-500 text-white',
                secondary: 'bg-gray-200 border-gray-200 text-gray-800',
                error: 'bg-red-500 border-red-500 text-white'
            },
            size: {
                default: 'px-4 py-2',
                md: 'px-6 py-3',
                lg: 'px-8 py-4',
                sm: 'px-2 py-1',
            },
        },
        defaultVariants: {
            variant: 'error',
            size: 'default',
        },
    });

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ButtonVariants>{
        className?: string;
        children: React.ReactNode;
    }

function Button2({
    variant,
    size,
    className,
    children,
    ...props
}: ButtonProps){
    return(
        <button
        className={cn(ButtonVariants({ variant,size,...props, className}))}>
            {children}
        </button>
    );
}

export default Button2;
