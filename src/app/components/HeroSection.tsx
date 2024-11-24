import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import HeroImg from "../../assets/hero.png"

function HeroSection() {
  return (
    <div className='flex py-[60px] px-12'>
        <div className='w-[50%] flex flex-col justify-center max-lg:w-full'>
            <h1 className='font-black text-6xl max-sm:text-5xl text-black text-spacing-1'>Building digital products & brands.</h1>
            <p className='py-5 text-xl text-gray-500'>This free and open-source landing page template was built using the utility classes from Tailwind CSS and based on the components from the Flowbite Library and the Blocks System.</p>
            <div className='py-3 flex max-sm:flex-col'>
                <Link href={""} className='p-3 shadow-md border mr-2 max-sm:mr-0 hover:bg-gray-200 font-bold text-[15px] transition ease-in-out duration-200'>View on GitHub</Link>
                <Link href={""} className='p-3 shadow-md border mx-2 max-sm:mx-0 max-sm:mt-3 hover:bg-gray-200 font-bold text-[15px] transition ease-in-out duration-200'>Get Figma File</Link>
            </div>
        </div>
        <div className='w-[50%] max-lg:hidden flex justify-end'>
            <Image src={HeroImg} alt='hero' style={{width:"80%"}} className='my-auto'/>
        </div>
    </div>
  )
}

export default HeroSection