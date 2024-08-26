'use client'

import Link from "next/link"
import { useState } from "react";

export default function AboutUs() {

  const [hamburgerIsOpen, setHamburgerIsOpen] = useState(false);

  const toggleHamburgerMenu = () => {
    setHamburgerIsOpen(!hamburgerIsOpen);
  };

  return (
    <div>

      {/**----- HEADER ----- */}

      <header class="font-Poppins">
        <nav class="bg-zinc-500 flex items-center py-2">
          <h1 class="font-bold text-white text-2xl pl-12"><Link href="/">TRUVIEW</Link></h1>
          <ul class="hidden sm:flex flex-1 justify-end items-center gap-12 text-bookmark-blue uppercase text-xs pr-12">
            <li class="cursor-pointer text-white">About Us</li>
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
            <li class="py-2 cursor-pointer text-white"><Link href="/contact">Contact Us</Link></li>

            <button type="button" class="bg-bookmark-red text-white rounded-md px-7 py-3 mt-1 mb-3 uppercase">LOGIN</button>

          </ul>
        )}
      </header>

      <section class="bg-zinc-200 text-black py-20">
        <div class="container mx-auto px-6">
          <h1 class="text-4xl font-bold mb-4">About TruView</h1>
          <p class="text-lg">Building the Future with Transparency and Trust</p>
        </div>
      </section>

      {/* {<!-- Content Section -->} */}
      <section class="container mx-auto px-6 py-16">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* {<!-- Who We Are -->} */}
          <div>
            <h2 class="text-2xl font-bold mb-4">Who We Are</h2>
            <p class="text-gray-700 leading-relaxed">TruView was founded by a team of civil engineers who recognized
              the challenges and inefficiencies that plague the construction sector. With backgrounds in
              construction management, blockchain technology, and software development, our team is uniquely
              positioned to address these challenges head-on.</p>
          </div>

          {/* { <!-- What We Do -->} */}
          <div>
            <h2 class="text-2xl font-bold mb-4">What We Do</h2>
            <p class="text-gray-700 leading-relaxed">TruView integrates blockchain technology with BIM to create a
              platform that ensures every aspect of a construction project is transparent, verifiable, and secure.
              Our platform offers a comprehensive solution for project management, dispute resolution, and
              stakeholder collaboration.</p>
          </div>
        </div>

        <div class="grid grid-cols-1 gap-12 mt-12">
          {/* {<!-- Why We Do It -->} */}
          <div>
            <h2 class="text-2xl font-bold mb-4">Why We Do It</h2>
            <p class="text-gray-700 leading-relaxed">We understand the complexities of construction
              projects—miscommunication, disputes, and delays can derail even the best-laid plans. At TruView, we
              believe that by introducing a new level of transparency and accountability, we can help prevent
              these issues and ensure that every project is completed on time, within budget, and to the highest
              standards.</p>
          </div>

          {/* {<!-- Our Values -->} */}
          <div>
            <h2 class="text-2xl font-bold mb-4">Our Values</h2>
            <ul class="list-disc pl-5 text-gray-700">
              <li class="mb-2"><strong>Transparency:</strong> Providing a clear and verifiable record of every
                project activity.</li>
              <li class="mb-2"><strong>Innovation:</strong> Continuously seeking out and implementing cutting-edge
                technologies.</li>
              <li class="mb-2"><strong>Collaboration:</strong> Enhancing communication and cooperation among all
                project participants.</li>
              <li><strong>Integrity:</strong> Holding ourselves to the highest ethical standards.</li>
            </ul>
          </div>
        </div>

        <div class="mt-12 text-center">
          <h2 class="text-2xl font-bold mb-4">Join Us on Our Journey</h2>
          <p class="text-gray-700 leading-relaxed max-w-2xl mx-auto">We invite you to join us on our mission to
            transform the construction industry. Whether you’re a project manager, architect, contractor, or
            stakeholder, TruView is here to help you build better, together.</p>
        </div>

        {/* {<!-- Meet the Team -->} */}
        <div class="mt-16">
          <h2 class="text-2xl font-bold mb-6 text-center">Meet the Team</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* {<!-- Example team member -->} */}
            <div class="bg-white shadow-md rounded-lg p-6 text-center">
              <Link href='https://www.linkedin.com/in/bhatti25/'><img src="/haris_truview.jpeg" alt="Team Member" class="w-32 h-32 mx-auto rounded-full mb-4" /></Link>
              <h3 class="text-xl font-bold mb-2">Haris Waheed Bhatti</h3>
              <p class="text-gray-600">CEO & Co-Founder</p>
            </div>
            {/*-- Add more team members as needed --*/}
            <div class="bg-white shadow-md rounded-lg p-6 text-center">
              <Link href='https://www.linkedin.com/in/abdullahbinsajjad/'><img src="/candy_truview.jpeg" alt="Team Member" class="w-32 h-32 mx-auto rounded-full mb-4" /></Link>
              <h3 class="text-xl font-bold mb-2">Abdullah Bin Sajjad</h3>
              <p class="text-gray-600">Co-Founder</p>
            </div>
            <div class="bg-white shadow-md rounded-lg p-6 text-center">
              <Link href='https://www.linkedin.com/in/malaika-ijaz-120048214/'><img src="/malaika_truview.jpeg" alt="Team Member" class="w-32 h-32 mx-auto rounded-full mb-4" /></Link>
              <h3 class="text-xl font-bold mb-2">Malaika Ijaz</h3>
              <p class="text-gray-600 mt-9">Co-Founder</p>
            </div>
            <div class="bg-white shadow-md rounded-lg p-6 text-center">
              <Link href='https://www.linkedin.com/in/wasifk1/'><img src="/wasif_truview.jpeg" alt="Team Member" class="w-32 h-32 mx-auto rounded-full mb-4" /></Link>
              <h3 class="text-xl font-bold mb-2">Wasif Khan</h3>
              <p class="text-gray-600 mt-9">Co-Founder</p>
            </div>
          </div>
        </div>

        <div class="mt-16 text-center">

          <button type="button" class="btn btn-zinc hover:bg-zinc-200 hover:text-black"><Link href="/contact">Contact Us</Link></button>

        </div>
      </section>

      {/* ----- Footer ----- */}

      <section class="bg-zinc-500 py-8">
        <div class="container flex flex-col md:flex-row items-center">
          <div class="flex flex-1 flex-wrap items-center justify-center md:justify-start gap-12">
            {/* <img src="/images/logo-bookmark-white.png" alt="" /> */}
            <h1 class="font-bold text-white text-2xl pl-12"><Link href="/">TRUVIEW</Link></h1>
            <ul class="flex text-white uppercase gap-12 text-xs">
              <li class="cursor-pointer text-white">About Us</li>
              <li class="cursor-pointer text-white"><Link href="/contact">Contact Us</Link></li>
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