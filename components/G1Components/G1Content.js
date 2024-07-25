'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'

import { Accordion, Carousel } from "flowbite-react";



const G1Content = () => {


    return (
        <>
            <div className=' flex justify-center bg-white p-4 lg:p-6 '>
                <div className='grid gap-16 lg:w-[1140px] flex-col justify-center w-full align-middle text-center mt-16'>
                    <div className='flex justify-center'>
                        <p className='lg:text-3xl text-2xl text-[#5c5c5c] leading-relaxed lg:w-[80%] w-full'>
                            For many, the dream of financial security is hindered by low credit scores, a lack of essential documents, and high interest rates. These challenges often seem insurmountable, trapping families in a vicious cycle of vulnerability and hardship.
                        </p>
                    </div>

                    <div className='flex-col justify-center items-center align-middle'>
                        <div className='flex justify-center'>
                            <Image src="/g1-image/g1-you-hold-the-key.png" alt='' width={600} height={200} className='lg:w-[90%] w-full lg:block hidden' />
                            <Image src="/g1-image/g1-you-hold-the-key-mobile.png" alt='' width={600} height={200} className='w-[70%] lg:hidden block' />
                        </div>

                        <div className='flex justify-center items-center mt-10 lg:hidden '>
                            <p className='lg:text-3xl text-2xl text-[#7F3F97] font-semibold leading-relaxed lg:w-[80%] w-full'>
                                You hold the key to change.
                            </p>
                        </div>
                        <div className='flex justify-center items-center mt-4 lg:hidden'>
                            <p className='lg:text-3xl text-xl text-[#5c5c5c] lg:w-[80%] w-full'>
                                Through G1 you can help every vulnerable Indian join the path to progress. By lending a portion of your surplus income to families in need, you not only provide them with a lifeline but also receive your contribution back in a year. Together we can break these barriers to financial resilience, one family at a time.
                            </p>
                        </div>

                        <div className='flex justify-center items-center mt-10'>
                            <Link href="#" className="text-white bg-[#02AF8B] text-xl py-2 px-6 rounded-md">
                                Drive Change with Us
                            </Link>
                        </div>

                        <div className='flex justify-center items-center mt-10 text-[#7F3F97] lg:text-4xl text-3xl font-semibold'>
                            A Circle of Support, A Circle of Growth
                        </div>

                        <p className='text-xl text-[#5c5c5c] mt-3'>
                            Each investment enables families to start businesses, clear debts, <br className='lg:block hidden' />
                            and build sustainable futures.
                        </p>

                        <Image src="/g1-image/circle-of-support.png" alt='' width={600} height={200} className='lg:w-[100%] w-full lg:block hidden' />

                        <div id="default-carousel" class="relative w-full lg:hidden block p-16" data-carousel="slide">
                            <div class="relative h-[50vh] overflow-hidden rounded-lg ">
                                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                                    <img src="/g1-image/circle-1.png" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                                </div>
                                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                                    <img src="/g1-image/circle-2.png" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                                </div>
                                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                                    <img src="/g1-image/circle-3.png" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                                </div>
                            </div>
                            <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                                <button type="button" class="w-3 h-3 rounded-full bg-black active:bg-gray-500" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                                <button type="button" class="w-3 h-3 rounded-full bg-black active:bg-gray-500" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                                <button type="button" class="w-3 h-3 rounded-full bg-black active:bg-gray-500" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className='bg-[#249F79] flex w-100 justify-center items-center'>
                <div className='lg:w-[1140px] w-full flex-col justify-center align-middle items-center text-center p-10 text-white grid gap-16'>
                    <div>
                        <p className='lg:text-7xl text-3xl text-center'>
                            Join the Movement of Change
                        </p>
                    </div>
                    <p className='text-3xl leading-10'>
                        Giving can be easier than you imagine, with a significant and meaningful impact. This is more than investing; it’s elevating lives, together.
                    </p>

                    <div className='flex justify-center text-xl'>
                        <Link href="#" className="text-[#02AF8B] bg-[white] block py-2 px-6 rounded-md">
                            Invest with G1
                        </Link>
                    </div>
                </div>
            </div>


            <div className='flex w-100 justify-center items-center'>
                <div className='lg:w-[1140px] w-full flex-col justify-center align-middle items-center text-center p-10 text-white grid gap-16'>
                    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
                        <Carousel leftControl="left" rightControl="right">
                            <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />
                            <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
                            <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
                            <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
                            <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
                        </Carousel>
                    </div>
                    <div className="">
                        {/* <Carousel slideInterval={5000}>
                            <img src="/g1-image/community-1.png" alt="..." />
                            <img src="/g1-image/community-2.png" alt="..." />
                            <img src="/g1-image/community-3.png" alt="..." />
                            <img src="/g1-image/community-4.png" alt="..." />
                        </Carousel> */}

                    </div>
                    {/* <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
                        <Carousel slideInterval={5000}>
                            <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />
                            <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
                            <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
                            <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
                            <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
                        </Carousel>
                    </div> */}
                </div>
            </div>
            <div className="lg:bg-[url('/g1-image/cms-backed-experience.png')] bg-[url('/g1-image/cms-backed-experience.png')] lg:h-[500px] h-[80vh] bg-cover bg-center flex justify-center lg:items-center">
                <div className="lg:w-[1140px] grid grid-cols-1 lg:grid-cols-12 w-full align-middle text-center">
                    <div className="lg:col-span-5 flex gap-4 items-center justify-center">
                        <img src="/g1-image/cms-logo.svg" alt="..." className="object-contain w-[50%]" />
                    </div>
                    <div className="lg:col-span-7 text-white flex flex-col justify-center items-center lg:items-start lg:text-left gap-7">
                        <p className="text-3xl font-semibold">
                            Backed by Experience, <br />
                            Driven by Compassion
                        </p>
                        <p className="text-xl lg:w-[60%]">
                            G1 is an initiative of the Catalyst Group, leveraging over 30 years of expertise, impactful partnerships, and a deep commitment to health and well-being. Our knowledge in the social development sector uniquely positions us to ensure that your support reaches those who need it most when they are most in need.
                        </p>
                    </div>
                </div>
            </div>


            <div className=" lg:h-auto h-auto bg-cover bg-center flex-col justify-center text-center items-center py-16">
                <p className=' text-4xl font-semibold text-[#7F3F97] pb-16'>
                    FAQs
                </p>
                <div className=" grid grid-cols-1 lg:grid-cols-12 w-full align-middle text-center">
                    <div className="lg:col-span-5 flex gap-4 items-center justify-center">
                        <img src="/g1-image/fqs.png" alt="..." className="object-contain w-full" />
                    </div>
                    <div className="lg:col-span-7 text-white flex flex-col justify-center items-center lg:items-start lg:text-left gap-7 p-4">
                        <Accordion>
                            <Accordion.Panel>
                                <Accordion.Title className='bg-[#7F3F97] hover:bg-[#7F3F97] text-white lg:text-[33px] text-[18px]'>
                                    Will I get my money back?
                                </Accordion.Title>
                                <Accordion.Content className='text-[#5C5C5C] lg:text-[20px] text-[16px]'>
                                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                                        Your investment is locked in for 2 years. If you stay put for more than 2 years, the SROI will be exponential!
                                    </p>
                                </Accordion.Content>
                            </Accordion.Panel>
                            <Accordion.Panel>
                                <Accordion.Title className='bg-[#7F3F97] hover:bg-[#7F3F97] text-white lg:text-[33px] text-[18px]'>
                                    How is SROI calculated?
                                </Accordion.Title>
                                <Accordion.Content className='text-[#5C5C5C] lg:text-[20px] text-[16px]'>
                                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                                        SROI (Social Return on Investments) are calculated through industry-approved methodology and will be verified by a trusted third party as we scale G1.
                                    </p>
                                </Accordion.Content>
                            </Accordion.Panel>
                            <Accordion.Panel>
                                <Accordion.Title className='bg-[#7F3F97] hover:bg-[#7F3F97] text-white lg:text-[33px] text-[18px]'>
                                    Will I know the journey of my investment?
                                </Accordion.Title>
                                <Accordion.Content className='text-[#5C5C5C] lg:text-[20px] text-[16px]'>
                                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                                        Tracability of your investment at the individual family level is unavailable, as G1 is a pool of money. Your investment joins the exsisting fund, and is deployed to vulnerable families at large. Impact is also calculated at a community level.
                                    </p>
                                </Accordion.Content>
                            </Accordion.Panel>
                            <Accordion.Panel>
                                <Accordion.Title className='bg-[#7F3F97] hover:bg-[#7F3F97] text-white lg:text-[33px] text-[18px]'>
                                    In what forms can I make the payments?
                                </Accordion.Title>
                                <Accordion.Content className='text-[#5C5C5C] lg:text-[20px] text-[16px]'>
                                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                                        Currently, you can make payments via cheque and/or direct bank transfer to Catalyst Group entities. For more details, please reach out at (email)
                                    </p>
                                </Accordion.Content>
                            </Accordion.Panel>
                            <Accordion.Panel>
                                <Accordion.Title className='bg-[#7F3F97] hover:bg-[#7F3F97] text-white lg:text-[33px] text-[18px]'>
                                    Is my money insured?
                                </Accordion.Title>
                                <Accordion.Content className='text-[#5C5C5C] lg:text-[20px] text-[16px]'>
                                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                                        Like all investments, G1 is also carries moderate risks.
                                    </p>
                                </Accordion.Content>
                            </Accordion.Panel>
                        </Accordion>
                    </div>
                </div>
            </div>

            <div className='bg-[#02AF8B] flex justify-center '>
                <div className='lg:w-[1140px] w-full flex-col justify-center align-middle items-center text-center p-10 text-white grid gap-16'>
                    <p className='text-white text-4xl'>
                        If you would like to know more about the investment opportunity, fill out the form below.
                    </p>
                </div>
            </div>



            <div className='text-center p-16'>
                <p className='text-4xl text-[#5C5C5C] font-bold'>
                    Get in touch
                </p>
                <p className='text-black text-[24px] mt-2'>
                    <span className='text-[#00AF8B] text-[24px]'>  Email:</span>
                    <Link href="mailto:contactus@catalysts.org">contactus@catalysts.org</Link>
                </p>
            </div>



        </>
    )
}

export default G1Content
