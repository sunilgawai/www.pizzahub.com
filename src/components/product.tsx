import demoImg from '@/assets/corousel-img-1.jpg'
import Image from 'next/image'
import Link from "next/link"
import { Button } from './ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'

const Product = () => {
    return (
        <Link href={"/products"}>
            <Card className='pt-2 rounded-none border-none bg-transparent'>
                <CardHeader className='w-full flex flex-row items-center justify-between'>
                    <div className="border-2">
                        <div className="bg-green-500 w-3 h-3 rounded-full"></div>
                    </div>
                    Asian | Mexican
                </CardHeader>
                <CardContent className='w-full'>
                    <Image src={demoImg} alt='demo' className='hover:animate-in w-11/12 self-center' />
                    <CardTitle className='py-2 font-semibold text-base'>
                        This is a pizza.
                    </CardTitle>
                    <CardDescription className='font-normal text-base'>
                        This is description of this pizza.
                    </CardDescription>
                </CardContent>
                <CardFooter className='flex items-center justify-between'>
                    <div className="flex flex-col text-xl font-semibold">
                        <div className=' flex flex-row'>
                            <h1 className='text-xl font-semibold'>$999</h1>
                            <span className="line-through text-sm font-normal ml-4">$20</span>
                        </div>
                        <h2 className='text-sm mt-2 font-semibold'>50% OFF</h2>
                    </div>
                    <Button variant={"outline"} className='border border-gray-300' size="sm">Add to cart</Button>
                </CardFooter>
            </Card>
        </Link>
    )
}

export default Product