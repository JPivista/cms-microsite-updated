import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <>
            <div className=' flex justify-center bg-white p-4 lg:p-6 '>
                <div className='lg:w-[1140px] flex justify-between w-full'>
                    <div>
                        <Image src="/g1-image/g1_logo.svg" alt='' width={100} height={100} className='object-contain' />
                    </div>
                    <div className='flex justify-center items-center '>
                        <Link href="#" className="text-white bg-[#02AF8B] py-2 px-6 rounded-md">
                            Invest with G1
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
