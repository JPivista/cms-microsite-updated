'use client'
import React, { useState } from 'react'
import '../app/globals.css'

const NoblePlasticForm = () => {
    const [formData, setFormData] = useState({
        full_name: '',
        email: '',
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
        if (!formData.full_name) newErrors.full_name = 'Full Name is required'
        if (!formData.email) newErrors.email = 'Email Address is required'
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email format is invalid'
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
                const response = await fetch('https://docs.cms.org.in/wp-json/contact-form-7/v1/contact-forms/10382/feedback', {
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
                    full_name: '',
                    email: '',
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
                <div className='lg:w-[1140px] flex flex-col py-10 w-full'>
                    <h1 className='text-white text-start text-[26px] font-bold'>
                        Send Us a Message
                    </h1>
                    <form className='w-full' onSubmit={handleSubmit}>
                        {/* Full Name Row */}
                        <div className="my-4">
                            <label htmlFor="full_name" className="block mb-2 text-sm font-medium text-white text-18px">
                                Full Name <span className="text-white">*</span>
                            </label>
                            <input
                                type="text"
                                id="full_name"
                                required
                                className="bg-transparent border border-white text-white text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                value={formData.full_name}
                                onChange={handleChange}
                            />
                            {errors.full_name && (
                                <p className="text-red-500 text-sm">{errors.full_name}</p>
                            )}
                        </div>
                        {/* Email Row */}
                        <div className="my-4">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-white text-18px">
                                Email Address <span className="text-white">*</span>
                            </label>
                            <input
                                type="email"
                                id="email"
                                required
                                className="bg-transparent border border-white text-white text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            {errors.email && (
                                <p className="text-red-500 text-sm">{errors.email}</p>
                            )}
                        </div>
                        {/* Message Row */}
                        <div className="my-4">
                            <label htmlFor="message" className="block mb-2 text-sm font-medium text-white text-18px">
                                Message <span className="text-white">*</span>
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
                                className="py-2 p-8 rounded-md font-semibold bg-[#7F3F97] text-white text-xl"
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

export default NoblePlasticForm
