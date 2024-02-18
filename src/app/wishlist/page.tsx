import Product from '@/components/common/product';
import React from 'react'

const WishlistPage = () => {
    return (
        <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
            <h1 className="text-2xl font-serif mb-2">Your wishlist</h1>
            <div className="grid grid-cols-5 gap-5 gap-y-8 col-span-5">
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
        </section>
    )
}

export default WishlistPage;