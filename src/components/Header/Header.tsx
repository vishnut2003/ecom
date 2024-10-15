'use client';
import { RiArrowDropDownLine, RiHeartLine, RiSearchLine, RiShoppingCartLine, RiUser3Line } from '@remixicon/react'
import Link from 'next/link';
import React, { useState } from 'react'

const Header = () => {

    const [searchPopup, setSearchPopup] = useState(false);
    const [headerpopupBox, setHeaderPopupBox] = useState({
        user: false,
        cart: false,
        wishlist: false
    })

    const closeAllPopup = () => setHeaderPopupBox({ user: false, cart: false, wishlist: false })

    return (
        <header className='bg-white px-3 py-4 flex justify-center'>
            <div className='max-w-screen-2xl w-full flex gap-5 flex-nowrap items-center'>
                <div className='w-32'>
                    <h2 className='text-3xl font-bold'>LOGO</h2>
                </div>
                <div className='w-full' >
                    <div className='flex justify-start items-center gap-2 w-full bg-blue-50 py-0 px-2 rounded-md relative'>
                        <RiSearchLine widths={15} className='text-slate-500' />
                        <input
                            onFocus={() => setSearchPopup(true)}
                            onBlur={() => setSearchPopup(false)}
                            type="text"
                            placeholder='Search products...'
                            className='bg-transparent border-0 py-2 w-full outline-none text-base' />

                        {/* live search popup */
                            searchPopup &&
                            <div className='absolute top-10 left-0 bg-white p-4 w-full rounded-md shadow-md'>
                                <p>Please type something...</p>
                            </div>
                        }
                    </div>
                </div>

                <div className='flex flex-nowrap w-max gap-2 justify-end'>

                    {/* Desktop Login/SignUp Btn */}
                    <div className='w-max flex flex-nowrap gap-2 items-center justify-start mr-4'>
                        <RiUser3Line size={25} className='text-lg' />
                        <div
                            onClick={() => {
                                setHeaderPopupBox({
                                    user: !headerpopupBox.user,
                                    cart: false,
                                    wishlist: false
                                })
                            }}
                            className='text-base flex flex-col gap-0 cursor-pointer'>
                            <p className='m-0 font-semibold'>Login</p>
                            <span className='text-xs'>or SignUp</span>
                        </div>
                        {
                            headerpopupBox.user &&
                            <div className='absolute top-16 bg-white rounded shadow-md'>
                                <div className='flex flex-nowrap font-medium text-base'>
                                    <p onClick={closeAllPopup} className='py-2 px-4 text-blue-500 bg-blue-50'><Link href={'/users/login'}>Login</Link></p>
                                    <p onClick={closeAllPopup} className='py-2 px-4 bg-blue-500 text-white'><Link href={'/users/signup'}>SignUp</Link></p>
                                </div>
                            </div>
                        }

                    </div>

                    {/* Cart Icon */}
                    <div className={`w-max flex flex-nowrap gap-2 items-center justify-start hover:bg-blue-50 py-1 px-3 rounded-md`}>
                        <RiShoppingCartLine size={25} className='text-lg' />
                        <div
                            onClick={() => {
                                setHeaderPopupBox({
                                    cart: !headerpopupBox.cart,
                                    wishlist: false,
                                    user: false
                                })
                            }}
                            className='text-base flex flex-nowrap gap-0 cursor-pointer'>
                            <p className='m-0 font-semibold'>Cart</p>
                            <RiArrowDropDownLine size={20} />
                        </div>
                        {
                            headerpopupBox.cart &&
                            <div className='absolute top-16 p-5 bg-white rounded shadow-md'>
                                <h2>Cart Box</h2>
                            </div>
                        }
                    </div>

                    {/* Wishlist Icon */}
                    <div className={`w-max flex flex-nowrap gap-2 items-center justify-start hover:bg-blue-50 py-1 px-3 rounded-md`}>
                        <RiHeartLine size={25} className='text-lg' />
                        <div
                            onClick={() => {
                                setHeaderPopupBox({
                                    wishlist: !headerpopupBox.wishlist,
                                    cart: false,
                                    user: false
                                })
                            }}
                            className='text-base flex flex-nowrap gap-0 cursor-pointer'>
                            <p className='m-0 font-semibold'>Wishlist</p>
                            <RiArrowDropDownLine size={20} />
                        </div>
                        {
                            headerpopupBox.wishlist &&
                            <div className='absolute top-16 p-5 bg-white rounded shadow-md text-black'>
                                <h2>Wishlist box</h2>
                            </div>
                        }

                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header