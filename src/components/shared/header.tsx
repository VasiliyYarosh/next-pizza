import { cn } from '@/lib/utils';
import { FC } from 'react';
import { Container } from './container';
import Image from 'next/image';
import { Button } from '../ui';
import { ArrowRight, ShoppingCart, User } from 'lucide-react';

interface headerProps {
    className?: string;
}

export const Header: FC<headerProps> = ({className}) => {
  return (
    <>
        <header className={cn('boreder border-b', className)}>
            <Container className='flex items-center justify-between py-8'>

            {/* Ліва частина */}
            <div className='flex items-center gap-4'>
                <Image src="/logo.png" alt='Logo' width={35} height={35} />
                <div>
                    <h1 className='text-2xl uppercase font-black'>Next Pizza</h1>
                    <p className='text-sm text-gray-400 leading-3'>смачніше вже не буде</p>
                </div>
            </div>

            {/* Права частина */}
            <div>
                <Button variant={'outline'} className="flex item-center gap-1">
                <User size={16} />
                    Увійти
                </Button>

                <div>
                    <Button className='group relative'>
                        <b>520 грн</b>
                        <span className='h-full w-[1px] bg-white/30 mx-3'></span>
                        <div className='flex item-center gap-1 transition duration-300 group-hover:opacity-0'>
                            <ShoppingCart className='h-4 w-4 relative' strokeWidth={2} />
                            <b>3</b>
                        </div>
                        <ArrowRight className='w-5 absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0' />
                    </Button>
                </div>
            </div>

            </Container>
        </header>
    </>
)
}