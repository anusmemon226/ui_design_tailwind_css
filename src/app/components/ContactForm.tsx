import React from "react";

function ContactForm() {
  return (
    <div className="py-12 max-sm:px-8 px-12 flex flex-col items-center">
        <div className="w-full sm:w-[90%] md:w-[70%] pb-4">
            <h2 className="text-3xl font-bold">Contact Us</h2>
            <p>Please fill this form in decent manner</p>
        </div>
        <div className="w-full sm:w-[90%] md:w-[70%] mt-4 flex flex-col items-center">
            <div className="flex max-sm:flex-col w-full justify-between">
                <div className="flex flex-col max-sm:py-2 flex-1 sm:mr-1">
                    <label className="font-bold py-1">First Name</label>
                    <input type="text" placeholder="Enter First Name" className="p-2 border border-gray-300"/>
                </div>
                <div className="flex flex-col max-sm:py-2 flex-1 sm:ml-1">
                    <label className="font-bold py-1">Last Name</label>
                    <input type="text" placeholder="Enter Last Name" className="p-2 border border-gray-300"/>
                </div>
            </div>
            <div className="flex flex-col py-2 w-full">
                <label htmlFor="" className="font-bold py-1">Email</label>
                <input type="text" placeholder="Enter Email Address" className="p-2 border border-gray-300 w-full"/>
            </div>
            <div className="flex flex-col py-2 w-full">
                <label htmlFor="" className="font-bold py-1">Message</label>
                <textarea name="" id="" rows={4} className="p-2 border border-gray-300"></textarea>
            </div>
            <div className="mt-2">
                <button className="py-2 px-8 rounded-md bg-purple-800 font-bold text-white uppercase hover:bg-purple-900">Submit</button>
            </div>
        </div>
    </div>
  )
}

export default ContactForm;
