'use client'

import ContactForm from "@/components/ContactForm";
import Link from "next/link"
import { useState } from "react";

export default function AboutUs() {

    const [hamburgerIsOpen, setHamburgerIsOpen] = useState(false);

    const toggleHamburgerMenu = () => {
        setHamburgerIsOpen(!hamburgerIsOpen);
    };

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // For now, we'll just log the data. You can replace this with an API call.
        console.log('Form Data Submitted:', formData);
        // Reset form after submission
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
        });
    };

    return (
        <div>

            {/**----- HEADER ----- */}

            <header class="font-Poppins">
                <nav class="bg-zinc-500 flex items-center py-2">
                    <h1 class="font-bold text-white text-2xl pl-12"><Link href="/">TRUVIEW</Link></h1>
                    <ul class="hidden sm:flex flex-1 justify-end items-center gap-12 text-bookmark-blue uppercase text-xs pr-12">
                        <li class="cursor-pointer text-white"><Link href="/about">About Us</Link></li>
                        <li class="cursor-pointer text-white"><Link href="/contact">Contact Us</Link></li>
                        <button type="button" class="bg-bookmark-red text-white rounded-md px-7 py-3 uppercase">LOGIN</button>
                    </ul>
                    <div class="flex sm:hidden flex-1 justify-end pr-8">
                        <i
                            class="text-2xl fa-solid fa-bars cursor-pointer"
                            onClick={toggleHamburgerMenu}
                        ></i>
                    </div>
                </nav>

                {/* Mobile Menu */}
                {hamburgerIsOpen && (
                    <ul class="flex flex-col items-center bg-zinc-500 text-white text-center sm:hidden">
                        <li class="py-2 cursor-pointer text-white">About Us</li>
                        <li class="py-2 cursor-pointer text-white"><Link href="https://www.linkedin.com/company/truview1/">Contact Us</Link></li>

                        <button type="button" class="bg-bookmark-red text-white rounded-md px-7 py-3 mt-1 mb-3 uppercase">LOGIN</button>

                    </ul>
                )}
            </header>

            <section class="bg-zinc-200 text-black py-20">
                <div class="container mx-auto px-6">
                    <h1 class="text-4xl font-bold mb-4">Contact TruView</h1>
                    <p class="text-lg">Building the Future with Transparency and Trust</p>
                </div>
            </section>

            <section className="container  mx-auto mt-8">
                <div className="bg-zinc-100 rounded-lg shadow-lg p-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">How Can We Assist You?</h2>
                    <p className="text-gray-600 mb-8">
                        At TruView, we're committed to revolutionizing the construction industry with our cutting-edge blockchain technology and BIM integration. Contact us for any inquiries, support, or opportunities.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* General Inquiries */}
                        <div>
                            <h3 className="text-xl font-semibold text-gray-800">General Inquiries</h3>
                            <p className="text-gray-600 mt-2">
                                Want to know more about TruView? Reach out to our team for any general questions or information.
                            </p>
                        </div>

                        {/* Technical Support */}
                        <div>
                            <h3 className="text-xl font-semibold text-gray-800">Technical Support</h3>
                            <p className="text-gray-600 mt-2">
                                Experiencing an issue or need help with our platform? Our support team is ready to assist you.
                            </p>
                        </div>

                        {/* Partnership Opportunities */}
                        <div>
                            <h3 className="text-xl font-semibold text-gray-800">Partnership Opportunities</h3>
                            <p className="text-gray-600 mt-2">
                                Interested in partnering with TruView? Let’s explore how we can work together to drive innovation in the construction industry.
                            </p>
                        </div>

                        {/* Media & Press */}
                        <div>
                            <h3 className="text-xl font-semibold text-gray-800">Media & Press</h3>
                            <p className="text-gray-600 mt-2">
                                For media inquiries or to request a press kit, please contact our media relations team.
                            </p>
                        </div>
                    </div>

                    <div className="mt-12">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Information</h2>
                        <ul className="text-gray-600">
                            <li className="mb-4">
                                <strong>Email:</strong> <a href="mailto:harisw95@gmail.com" className="text-blue-600 hover:underline">harisw95@gmail.com</a>
                            </li>
                            <li className="mb-4">
                                <strong>Phone:</strong> <a href="tel:+18001234567" className="text-blue-600 hover:underline">+92 334 810 3028</a>
                            </li>
                            <li className="mb-4">
                                <strong>Address: </strong>NUST Institute Of Civil Engineering, NUST, H12, Islamabad 44000
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section class="container rounded-md mb-10">
                <ContactForm />
            </section>

            {/* ----- Footer ----- */}

            <section class="bg-zinc-500 py-8">
                <div class="container flex flex-col md:flex-row items-center">
                    <div class="flex flex-1 flex-wrap items-center justify-center md:justify-start gap-12">
                        {/* <img src="/images/logo-bookmark-white.png" alt="" /> */}
                        <h1 class="font-bold text-white text-2xl pl-12"><Link href="/">TRUVIEW</Link></h1>
                        <ul class="flex text-white uppercase gap-12 text-xs">
                            <li class="cursor-pointer text-white"><Link href="/about">About Us</Link></li>
                            <li class="cursor-pointer text-white">Contact Us</li>
                        </ul>
                    </div>
                    <div class="flex gap-10 mt-12 md:mt-0">
                        <li><Link href="https://www.linkedin.com/company/truview1/"><i class="text-white text-2xl fa-brands fa-linkedin"></i></Link></li>
                    </div>
                </div>
            </section>
        </div>
    )
}