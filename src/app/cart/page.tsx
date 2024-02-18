import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import React from 'react'
import { FcLeft } from 'react-icons/fc';
import Cart from '@/components/user/cart';
import Saved from '@/components/user/saved';

const CartPage = () => {
    return (
        <div className='container h-full py-4 px-12'>
            <div className="flex items-center justify-between my-3">
                <span className="flex items-center">
                    <h1 className="font-semibold text-xl mr-2">
                        Shopping Bag
                    </h1>
                    <p className="text-lg">
                        your bag contains {1} item and comes to a total of <span className="underline underline-offset-4">$700</span>
                    </p>
                </span>
                <div className="flex items-center gap-4">
                    <Button variant="link" size="sm"><FcLeft className='mr-3' /> Shop More</Button>
                    <Button variant="secondary" className='bg-green-600 uppercase' size="sm">go to checkout</Button>
                </div>
            </div>
            <Cart />
            <div className="flex items-center gap-4 justify-between my-3">
                <Button variant="link" size="sm"><FcLeft className='mr-3' /> Shop More</Button>
                <Button variant="secondary" className='bg-green-600 uppercase' size="sm">go to checkout</Button>
            </div>

            <Separator className='my-4' />

            <h1 className="font-semibold">Your Saved For Later Items(1 Item)</h1>
            <Saved />
            <Separator className='my-4' />

            <div>
                <h1 className="font-semibold">Recently viewed items</h1>
                <div className="flex-1 h-40 bg-gray-300"></div>
            </div>

            <Separator className='my-4' />

            <div>
                <h1 className="font-semibold">Our social media</h1>
                <div className="flex-1 h-40 bg-gray-300"></div>
            </div>
        </div>
    )
}

export default CartPage;