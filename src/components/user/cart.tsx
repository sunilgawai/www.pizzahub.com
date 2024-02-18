import React from 'react'
import { Separator } from '../ui/separator';
import CartItem from './cart-item';
import { Button } from '../ui/button';
import { FcPlus } from 'react-icons/fc';

const Cart = () => {
    return (
        <div className="flex-1 mx-12 my-4">
            <div className="grid grid-cols-6 gap-4 py-2 px-4">
                <h2 className='font-medium font-sans text-gray-700 col-span-2'>Items</h2>
                <h2 className='font-medium font-sans text-gray-700'>Size</h2>
                <h2 className='font-medium font-sans text-gray-700'>Quantity</h2>
                <h2 className='font-medium font-sans text-gray-700'>Availability</h2>
                <h2 className='font-medium font-sans text-gray-700 text-right'>Order Value</h2>
            </div>
            <Separator />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <div className="grid grid-cols-4 gap-4 px-8 py-4 items-end">
                <div>
                    <Button variant="link" size="sm"><FcPlus className='mr-3' /> Load Full Items</Button>
                </div>
                <div></div>
                <div className='col-span-2'>
                    {/* <div></div> */}
                    <div className="flex items-center justify-between my-4">
                        <h1 className='font-semibold'>Order Value</h1>
                        <h1 className='font-semibold'>$ 208.00</h1>
                    </div>
                    <div>
                        <p className='font-semibold text-sm font-sans'>
                            Excluding UK Standard Delivery (Normally £4.95)
                            Free Delivery To Store (Subject To Availability)
                            FREE Delivery With
                        </p>
                    </div>
                </div>
            </div>
            <Separator />
        </div>
    )
}

export default Cart;