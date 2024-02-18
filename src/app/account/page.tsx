import OrdersView from '@/components/account/orders-view';
import View from '@/components/account/view';
import BackButton from '@/components/auth/back-button';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import React from 'react'

const AccountPage = () => {
    return (
        <section className='container h-screen'>
            <Tabs defaultValue='orders' className='h-screen w-full'>
                <div className="h-screen flex space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0 md:py-4">
                    <aside className="-mx-4 lg:w-1/5 px-4 border border-r-black border-l-0 border-t-0 border-b-0">
                        <h2 className='font-semibold text-center text-lg py-2'>My Account</h2>
                        <Separator />
                        <TabsList className='w-full h-fit flex flex-col items-start gap-4 justify-start py-3 bg-transparent'>
                            <TabsTrigger value='orders' className='w-full h-10 font-medium text-start'>Orders</TabsTrigger>
                            <TabsTrigger value='cards' className='w-full h-10 font-medium text-start'>My Cards</TabsTrigger>
                            <TabsTrigger value='details' className='w-full h-10 font-medium text-start'>Change Details</TabsTrigger>
                            <TabsTrigger value='address' className='w-full h-10 font-medium text-start'>My Addreses</TabsTrigger>
                            <TabsTrigger value='authentication' className='w-full h-10 font-medium text-start'>2 Factor Authentication</TabsTrigger>
                        </TabsList>
                        <Separator />
                        {/* @ts-ignore */}
                        <Button type="button" className="w-full mt-4" variant="default">Continue Shopping</Button>
                        <Button type="button" className="w-full mt-4 rounded-md" variant="destructive">Sign Out</Button>
                    </aside>
                    <div className="flex-1 px-4">
                        <TabsContent value='orders' className=' w-full' >
                            <View title='Your orders' children={<p>Your orders</p>} />
                        </TabsContent>
                        <TabsContent value='cards' className=' w-full'>
                            <View title='Your cards' children={<p>Your cards</p>} />
                        </TabsContent>
                        <TabsContent value='details' className=' w-full'>
                            <View title='Your details' children={<p>Your details</p>} />
                        </TabsContent>
                        <TabsContent value='address' className=' w-full'>
                            <View title='Your address' children={<p>Your address</p>} />
                        </TabsContent>
                        <TabsContent value='authentication' className=' w-full'>
                            <View title='2 Factor Authentication' children={<p>2 Factor Authentication</p>} />
                        </TabsContent>
                    </div>
                </div>
            </Tabs>
        </section>
    )
}

export default AccountPage;