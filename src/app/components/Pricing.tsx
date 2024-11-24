import Link from "next/link";
import React from "react";

function Pricing() {
  return (
    <div className="px-2 sm:px-12 py-10">
      <div className="text-center flex flex-col items-center">
        <h2 className="font-black text-[34px] p-2">
          Designed for business teams like yours
        </h2>
        <p className="py-2 px-5 sm:px-14 text-gray-400 text-[18px]">
          Here at Landwind we focus on markets where technology, innovation, and
          capital can unlock long-term value and drive economic growth.
        </p>
      </div>
      <div className="py-10 flex justify-between flex-nowrap max-lg:flex-wrap max-lg:justify-center">
        <div className="w-[360px] max-sm:w-full mx-2 mt-2 shadow-md border border-gray-200 px-8 py-5 rounded-lg">
          <h2 className="text-center text-2xl py-1 font-bold">Starter</h2>
          <p className="text-center text-gray-500 px-3 py-2">
            Best option for personal use & for your next project.
          </p>
          <h1 className="text-center text-[50px] font-black py-2">
            $29
            <sub className="font-normal text-[18px] text-gray-500">/month</sub>
          </h1>
          <ul>
            <li className="py-1.5 flex">
              <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
              <p className="px-2">
                Individual configuration
              </p>
            </li>
            <li className="py-1.5 flex">
              <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
              <p className="px-2">
                No setup, or hidden fees
              </p>
            </li>
            <li className="py-1.5 flex">
              <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
              <p className="px-2">
                Team size: <strong>1 developer</strong>
              </p>
            </li>
            <li className="py-1.5 flex">
              <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
              <p className="px-2">
                Premium support: <strong>6 months</strong>
              </p>
            </li>
            <li className="py-1.5 flex">
              <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
              <p className="px-2">
                Free updates: <strong>6 months</strong>
              </p>
            </li>
            
          </ul>
          <div className="my-5 bg-purple-700 p-2 rounded-lg text-center hover:bg-purple-800">
            <Link href={""} className="text-white ">
              Get Started
            </Link>
          </div>
        </div>
        <div className="w-[360px] max-sm:w-full mx-2 mt-2 shadow-md border border-gray-200 px-8 py-5 rounded-lg">
          <h2 className="text-center text-2xl py-1 font-bold">Company</h2>
          <p className="text-center text-gray-500 px-3 py-2">
            Best option for personal use & for your next project.
          </p>
          <h1 className="text-center text-[50px] font-black py-2">
            $99
            <sub className="font-normal text-[18px] text-gray-500">/month</sub>
          </h1>
          <ul>
            <li className="py-1.5 flex">
              <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
              <p className="px-2">
                Individual configuration
              </p>
            </li>
            <li className="py-1.5 flex">
              <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
              <p className="px-2">
                No setup, or hidden fees
              </p>
            </li>
            <li className="py-1.5 flex">
              <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
              <p className="px-2">
                Team size: <strong>1 developer</strong>
              </p>
            </li>
            <li className="py-1.5 flex">
              <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
              <p className="px-2">
                Premium support: <strong>6 months</strong>
              </p>
            </li>
            <li className="py-1.5 flex">
              <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
              <p className="px-2">
                Free updates: <strong>6 months</strong>
              </p>
            </li>
            
          </ul>
          <div className="my-5 bg-purple-700 p-2 rounded-lg text-center hover:bg-purple-800">
            <Link href={""} className="text-white ">
              Get Started
            </Link>
          </div>
        </div>
        <div className="w-[360px] max-sm:w-full mx-2 mt-2 shadow-md border border-gray-200 px-8 py-5 rounded-lg">
          <h2 className="text-center text-2xl py-1 font-bold">Enterprise</h2>
          <p className="text-center text-gray-500 px-3 py-2">
            Best option for personal use & for your next project.
          </p>
          <h1 className="text-center text-[50px] font-black py-2">
            $499
            <sub className="font-normal text-[18px] text-gray-500">/month</sub>
          </h1>
          <ul>
            <li className="py-1.5 flex">
              <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
              <p className="px-2">
                Individual configuration
              </p>
            </li>
            <li className="py-1.5 flex">
              <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
              <p className="px-2">
                No setup, or hidden fees
              </p>
            </li>
            <li className="py-1.5 flex">
              <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
              <p className="px-2">
                Team size: <strong>1 developer</strong>
              </p>
            </li>
            <li className="py-1.5 flex">
              <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
              <p className="px-2">
                Premium support: <strong>6 months</strong>
              </p>
            </li>
            <li className="py-1.5 flex">
              <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
              <p className="px-2">
                Free updates: <strong>6 months</strong>
              </p>
            </li>
            
          </ul>
          <div className="my-5 bg-purple-700 p-2 rounded-lg text-center hover:bg-purple-800">
            <Link href={""} className="text-white ">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
