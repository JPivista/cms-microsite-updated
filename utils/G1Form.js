'use client'
import React, { useState } from 'react'

const G1Form = () => {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        message: '',
    })

    const [errors, setErrors] = useState({})
    const [successMessage, setSuccessMessage] = useState('')

    const handleChange = (e) => {
        const { id, value } = e.target
        setFormData({
            ...formData,
            [id]: value,
        })
    }

    const validateForm = () => {
        const newErrors = {}
        if (!formData.firstname) newErrors.firstname = 'First Name is required'
        if (!formData.lastname) newErrors.lastname = 'Last Name is required'
        if (!formData.email) newErrors.email = 'Email Address is required'
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email format is invalid'
        if (!formData.phone) newErrors.phone = 'Contact Number is required'
        else if (!/^\d+$/.test(formData.phone)) newErrors.phone = 'Contact Number must be numeric'
        if (!formData.message) newErrors.message = 'Message is required'

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (validateForm()) {
            const formDataToSend = new FormData()
            for (const key in formData) {
                formDataToSend.append(key, formData[key])
            }
            try {
                const response = await fetch('https://docs.cms.org.in/wp-json/contact-form-7/v1/contact-forms/10380/feedback', {
                    method: 'POST',
                    body: formDataToSend,
                    headers: {
                        'Accept': 'application/json',
                    },
                })
                if (!response.ok) {
                    throw new Error('Network response was not ok')
                }
                setSuccessMessage('Thank you for submitting')
                setFormData({
                    firstname: '',
                    lastname: '',
                    email: '',
                    phone: '',
                    message: '',
                })
                setErrors({})
            } catch (error) {
                console.error('Error submitting form', error)
            }
        }
    }

    return (
        <>
            <style>
                {`
                .bg-custom-green {
                    background: #05AC8D !important;
                }
                `}
            </style>
            <div className='flex justify-center bg-custom-green p-4 lg:p-6'>
                <div className='lg:w-[1140px] flex flex-col items-center py-10 w-full'>
                    <h1 className='text-white text-center text-[26px] lg:text-[40px] font-bold'>
                        If you would like to know more about the investment  <br className='lg:flex hidden' />
                        opportunity, fill out the form below.


                    </h1>


                    <form className='w-full' onSubmit={handleSubmit}>
                        {/* First Row */}
                        <div className="flex lg:flex-row flex-col gap-4 my-4">
                            <div className="w-full lg:w-1/2">
                                <label htmlFor="firstname" className="block mb-2 text-sm font-medium text-white">
                                    First Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="firstname"
                                    required
                                    className="bg-transparent border border-white text-white text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    value={formData.firstname}
                                    onChange={handleChange}
                                />
                                {errors.firstname && (
                                    <p className="text-red-500 text-sm">{errors.firstname}</p>
                                )}
                            </div>
                            <div className="w-full lg:w-1/2">
                                <label htmlFor="lastname" className="block mb-2 text-sm font-medium text-white">
                                    Last Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="lastname"
                                    required
                                    className="bg-transparent border border-white text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    value={formData.lastname}
                                    onChange={handleChange}
                                />
                                {errors.lastname && (
                                    <p className="text-red-500 text-sm">{errors.lastname}</p>
                                )}
                            </div>
                        </div>

                        {/* Second Row */}
                        <div className="flex lg:flex-row flex-col gap-4 my-4">
                            <div className="w-full lg:w-1/2">
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">
                                    Email Address <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    className="bg-transparent border border-white text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                {errors.email && (
                                    <p className="text-red-500 text-sm">{errors.email}</p>
                                )}
                            </div>
                            <div className="w-full lg:w-1/2">
                                <label htmlFor="phone" className="block mb-2 text-sm font-medium text-white">
                                    Contact Number <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    required
                                    className="bg-transparent border border-white text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                                {errors.phone && (
                                    <p className="text-red-500 text-sm">{errors.phone}</p>
                                )}
                            </div>
                        </div>

                        {/* Message Row */}
                        <div className="my-4">
                            <label htmlFor="message" className="block mb-2 text-sm font-medium text-white">
                                Message <span className="text-red-500">*</span>
                            </label>
                            <textarea
                                id="message"
                                required
                                className="bg-transparent border border-white text-white text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                value={formData.message}
                                onChange={handleChange}
                                rows={5}
                            />
                            {errors.message && (
                                <p className="text-red-500 text-sm">{errors.message}</p>
                            )}
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="py-2 px-6 rounded-lg font-bold bg-[#7F3F97] text-white"
                            >
                                Submit
                            </button>
                        </div>
                        <div className="flex justify-center items-center mb-4">
                            {successMessage && (
                                <p className="text-white text-xl">{successMessage}</p>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default G1Form
