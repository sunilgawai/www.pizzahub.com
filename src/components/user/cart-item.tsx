import React from 'react'
import cartImg from "@/assets/pizza.png"
import Image from 'next/image';
import { Button } from '../ui/button';
import { FcDownload, FcRight } from 'react-icons/fc';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { ArrowDownToLine, XCircle } from 'lucide-react';
const CartItem = () => {
    return (
        <div className="grid grid-cols-7 border border-b border-t-0 border-l-0 border-r-0 px-4">
            <div className="flex flex-row items-center justify-between col-span-2 py-2">
                <Image width={100} src={cartImg} alt="item" className='py-2 px-1' />
                <div className="flex flex-col items-center justify-center">
                    <h1 className='text-base font-semibold  text-center'>Washed Blue Bootcut Belted Authentic Jeans</h1>
                    <p className='text-base font-semibold  text-center'>200 - 479</p>
                    <Button variant="link" size="sm" className='text-xs font-semibold  text-center'>
                        View More Details
                        <FcRight className='mr-3' />
                    </Button>
                </div>
            </div>
            <div className="flex items-center justify-center text-center">
                <Select>
                    <SelectTrigger className="w-[140px]">
                        <SelectValue placeholder="Select Size" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value='sm'>sm</SelectItem>
                        <SelectItem value='md'>md</SelectItem>
                        <SelectItem value='lg'>lg</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className="flex items-center justify-end text-right">
                <Select>
                    <SelectTrigger className="w-[140px]">
                        <SelectValue placeholder="Select Quantity" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value='sm'>sm</SelectItem>
                        <SelectItem value='md'>md</SelectItem>
                        <SelectItem value='lg'>lg</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className="flex items-center justify-center">
                <h2 className="font-semibold text-medium">In Stock</h2>
            </div>
            <div className="flex items-center justify-end text-right col-span-2">
                <div className="flex flex-col">
                    <h1 className="font-semibold mx-5">$90.00</h1>
                    <Button variant="link" size="sm" className='text-xs font-semibold text-gray-600'>
                        Save Item For Later
                        <ArrowDownToLine className='ml-3 text-black' />
                    </Button>
                    <Button variant="link" size="sm" className='text-xs font-semibold text-gray-600'>
                        Remove From Items
                        <XCircle className='ml-3 text-black' />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default CartItem;