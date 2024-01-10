import React from 'react';
import { FaFacebook, FaTwitter, FaGithub } from 'react-icons/fa';
import { BsInstagram } from "react-icons/bs";
const Footer = () => {
    return (

        <div className="bg-white pt-10 pb-6">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16  pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">

                    <article className="flex max-w-xl flex-col items-start justify-between">
                        <div className="flex items-center gap-x-4 text-xs">
                            <p  className="text-gray-500">Green Book</p>
                        </div>
                        <div className="group relative">
                            <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                <a href="/">
                                    <span className="absolute inset-0"></span>
                                    Boost your conversion rate
                                </a>
                            </h3>
                            <p className="mt-5 line-clamp-3 text-md leading-6 text-gray-600">Making the world a better place through constructing elegant hierarchies.</p>
                        </div>
                        <div className="relative mt-8 flex items-center gap-x-4 text-2xl text-gray-500 space-x-3">
                            <a className='transition-colors duration-300 hover:text-blue-500' href="/"><FaFacebook /></a>
                            <a className='transition-colors duration-300 hover:text-blue-500' href="/"> <BsInstagram /></a>
                            <a className='transition-colors duration-300 hover:text-blue-500' href="/">  <FaTwitter /></a>
                            <a className='transition-colors duration-300 hover:text-blue-500' href="/"> <FaGithub /></a>
                        </div>
                    </article>
                    <div className="grid grid-cols-3 gap-4 text-center">
                        <div className='ft-1 text-center leading-loose'>
                            <h1 className='font-bold mb-[14px]'>Support</h1>
                            <h1>footer</h1>
                            <h1>footer</h1>
                            <h1>footer</h1>
                            <h1>footer</h1>
                            <h1>footer</h1>

                        </div>
                        <div className='ft-2 text-center leading-loose'>
                            <h1 className='font-bold mb-[14px]'>Company</h1>
                            <h1>footer</h1>
                            <h1>footer</h1>
                            <h1>footer</h1>
                            <h1>footer</h1>
                            <h1>footer</h1>

                        </div>
                        <div className='ft-3 text-center leading-loose'>
                            <h1 className='font-bold mb-[14px]'>Footer</h1>
                            <h1>footer</h1>
                            <h1>footer</h1>
                            <h1>footer</h1>
                            <h1>footer</h1>
                            <h1>footer</h1>

                        </div>

                    </div>
                </div>
                <div className='border-t border-gray-200 mt-[60px]'>
                    <p className='my-5 text-sm text-gray-500'>© 2023 Your Company, Inc. All rights reserved.</p>
                </div>

            </div>
        </div>
    )
}

export default Footer
