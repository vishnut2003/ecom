'use client';
import { RiSearchLine } from '@remixicon/react'
import React, { useState } from 'react'

const Header = () => {

    const [searchPopup, setSearchPopup] = useState(false);

  return (
    <header className='bg-white px-3 py-4 flex justify-center'>
        <div className='max-w-screen-2xl w-full flex flex-nowrap items-center'>
            <div className='w-32'>
                <h2 className='text-3xl font-bold'>LOGO</h2>
            </div>
            <div className='w-full' >
                <div className='flex justify-start items-center gap-2 w-full bg-slate-200 py-0 px-2 rounded-md relative'>
                    <RiSearchLine widths={15} />
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
        </div>
    </header>
  )
}

export default Header