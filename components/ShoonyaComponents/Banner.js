import Image from 'next/image'
import React from 'react'

const Banner = () => {
    return (
        <>
            <div className=" lg:bg-[url('/shoonya/shoonya_banner.png')] bg-[url('/shoonya/shoonya-mobile-banner.png')] lg:h-[120vh] h-[100vh] bg-cover  bg-no-repeat bg-center flex p-10">
                {/* <div className='lg:w-[1140px] flex justify-center lg:justify-start w-full'> */}
                <div className=" grid grid-cols-1 lg:grid-cols-12 w-full text-start">
                    <div className="lg:col-span-7 flex flex-col gap-4 text-start lg:items-start items-center">
                        <Image src='/shoonya/shoonya-logo.svg' alt='' width={240} height={100} className='object-contain' />
                        <p className='text-white lg:text-[40px] text-2xl leading-snug font-bold lg:hidden flex text-center'>
                            Empower Your Business with Tailored Net Zero Solutions
                        </p>
                    </div>
                    <div className="lg:col-span-5  flex-col gap-4 text-start justify-center lg:flex hidden lg:-mt-20">
                        <p className='text-white lg:text-[40px] text-2xl leading-snug font-bold'>
                            Empower Your Business with Tailored Net Zero Solutions
                        </p>
                    </div>
                </div>
                {/* </div> */}
            </div>
        </>
    )
}

export default Banner
