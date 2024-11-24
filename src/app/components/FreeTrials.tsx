import React from 'react'

function FreeTrials() {
  return (
    <div className='py-[60px] px-12 bg-gray-100 flex flex-col justify-center items-center'>
        <h2 className='font-black text-[28px] pb-3'>Start your free trial today</h2>
        <p className='text-gray-500 pb-3 text-[17px]'>Try Landwind Platform for 30 days. No credit card required.</p>
        <div className="sm:w-[40%] md:w-[30%] w-full flex justify-center items-center">
        <button className="py-2.5 px-4 text-white rounded-lg max-sm:w-full bg-purple-700 hover:bg-purple-800 text-sm font-bold">Free Trial For 30 Days</button>
      </div>
    </div>
  )
}

export default FreeTrials