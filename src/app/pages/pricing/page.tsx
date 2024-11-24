import Footer from '@/app/components/Footer'
import Navbar from '@/app/components/Navbar'
import Pricing from '@/app/components/Pricing'
import React from 'react'

function page() {
  return (
        <div className='bg-white'>
            <Navbar/>
            <div className='h-40 flex justify-center items-center bg-purple-700'>
                <h1 className='text-5xl font-black text-white'>PRICING</h1>
            </div>
            <Pricing/>
            <Footer/>
        </div>
  )
}

export default page