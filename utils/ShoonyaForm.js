'use client'
import React, { useState } from 'react'

const ShoonyaForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        enterprise: '',
        owner: '',
        phone: '',
        enterpriseType: '',
        sector: '',
        terms: false,
    })

    const [errors, setErrors] = useState({})
    const [successMessage, setSuccessMessage] = useState('')

    const handleChange = (e) => {
        const { id, value, type, checked } = e.target
        setFormData({
            ...formData,
            [id]: type === 'checkbox' ? checked : value,
        })
    }

    const validateForm = () => {
        const newErrors = {}
        if (!formData.email) newErrors.email = 'Email Address is required'
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email format is invalid'
        if (!formData.enterprise) newErrors.enterprise = 'Enterprise Name is required'
        if (!formData.owner) newErrors.owner = 'Owner/Business Head Name is required'
        if (!formData.phone) newErrors.phone = 'Contact Number is required'
        else if (!/^\d+$/.test(formData.phone)) newErrors.phone = 'Contact Number must be numeric'
        if (!formData.enterpriseType) newErrors.enterpriseType = 'Enterprise Type is required'
        if (!formData.sector) newErrors.sector = 'Sectors Operated is required'
        if (!formData.terms) newErrors.terms = 'You must agree to the terms'

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
                const response = await fetch('https://docs.cms.org.in/wp-json/contact-form-7/v1/contact-forms/10379/feedback', {
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
                    email: '',
                    enterprise: '',
                    owner: '',
                    phone: '',
                    enterpriseType: '',
                    sector: '',
                    terms: false,
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
                {
                    `
            .bg-custom-green {
            background: #05AC8D !important;
            }
            `
                }
            </style>
            <div className=' flex justify-center bg-custom-green p-4 lg:p-6 '>
                <div className='lg:w-[1140px] flex flex-col items-center py-10 w-full '>
                    <h1 className='text-white text-center text-[26px] lg:text-[40px] font-bold'>
                        Take the Assessment for a Free Consultation
                    </h1>

                    <div className="flex justify-center items-center mb-4">
                        {successMessage && (
                            <p className="text-green-500 text-xl">{successMessage}</p>
                        )}
                    </div>
                    <form className='w-full' onSubmit={handleSubmit}>
                        {/* First Row */}
                        <div className="flex lg:flex-row flex-col gap-4 my-4">
                            <div className="w-full lg:w-1/2 ">
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">
                                    Email Address <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    className="bg-transparent border border-white text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    // placeholder="name@example.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                {errors.email && (
                                    <p className="text-red-500 text-sm">{errors.email}</p>
                                )}
                            </div>
                            <div className="w-full lg:w-1/2 ">
                                <label htmlFor="enterprise" className="block mb-2 text-sm font-medium text-white">
                                    Enterprise Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="enterprise"
                                    required
                                    className="bg-transparent border border-white text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    // placeholder="Enterprise Name"
                                    value={formData.enterprise}
                                    onChange={handleChange}
                                />
                                {errors.enterprise && (
                                    <p className="text-red-500 text-sm">{errors.enterprise}</p>
                                )}
                            </div>
                        </div>



                        {/* Second Row */}
                        <div className="flex lg:flex-row flex-col gap-4 my-4">
                            <div className="w-full lg:w-1/2 ">
                                <label
                                    htmlFor="owner"
                                    className="block mb-2 text-sm font-medium text-white"
                                >
                                    Owner/Business Head Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="owner"
                                    required
                                    className="bg-transparent border border-white text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    // placeholder="Owner/Business Head Name"
                                    value={formData.owner}
                                    onChange={handleChange}
                                />
                                {errors.owner && (
                                    <p className="text-red-500 text-sm">{errors.owner}</p>
                                )}
                            </div>

                            <div className="w-full lg:w-1/2 ">
                                <label
                                    htmlFor="phone"
                                    className="block mb-2 text-sm font-medium text-white"
                                >
                                    Contact Number <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    required
                                    className="bg-transparent border border-white text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    // placeholder="123-456-7890"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                                {errors.phone && (
                                    <p className="text-red-500 text-sm">{errors.phone}</p>
                                )}
                            </div>
                        </div>

                        {/* Third Row */}
                        <div className="flex lg:flex-row flex-col gap-4 my-4">
                            <div className="lg:w-[50%] w-full">
                                <label
                                    htmlFor="enterpriseType"
                                    className="block mb-2 text-sm font-medium text-white"
                                >
                                    Enterprise Type <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="enterpriseType"
                                    required
                                    className="bg-transparent border border-white text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    // placeholder="Enterprise Type"
                                    value={formData.enterpriseType}
                                    onChange={handleChange}
                                />
                                {errors.enterpriseType && (
                                    <p className="text-red-500 text-sm">{errors.enterpriseType}</p>
                                )}
                            </div>
                            <div className="lg:w-[50%] w-full">
                                <label
                                    htmlFor="sector"
                                    className="block mb-2 text-sm font-medium text-white"
                                >
                                    Sectors Operated <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="sector"
                                    required
                                    className="bg-transparent border border-white text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    // placeholder="Sectors Operated"
                                    value={formData.sector}
                                    onChange={handleChange}
                                />
                                {errors.sector && (
                                    <p className="text-red-500 text-sm">{errors.sector}</p>
                                )}
                            </div>
                        </div>

                        {/* Terms Checkbox */}
                        <div className="flex items-center mb-5">
                            <input
                                id="terms"
                                type="checkbox"
                                required
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                                checked={formData.terms}
                                onChange={handleChange}
                            />
                            <label
                                htmlFor="terms"
                                className="ml-2 text-sm font-medium text-gray-900 text-white"
                            >
                                Agree to the T&C <span className="text-red-500">*</span>
                            </label>
                            {errors.terms && (
                                <p className="text-red-500 text-sm">{errors.terms}</p>
                            )}
                        </div>
                        <div>
                            <button
                                type="submit"
                                disabled={!formData.terms}
                                className={`py-2 px-6 rounded-lg font-bold ${formData.terms ? 'bg-[#7F3F97] text-white' : 'bg-white text-black cursor-not-allowed'}`}
                            >
                                Submit
                            </button>
                            {!formData.terms && (
                                <div className="absolute left-0 -bottom-6 opacity-0 group-hover:opacity-100">
                                    <p className="text-red-500 text-sm">Please select T & C</p>
                                </div>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ShoonyaForm
