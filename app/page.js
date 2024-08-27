'use client'

// just a comment
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import { useState } from 'react';
import { collection, getDocs, query, doc, getDoc, setDoc, deleteDoc, serverTimestamp } from 'firebase/firestore';
import { db } from "./firebase.js";
import Link from "next/link.js";

export default function LandingPage() {

  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = async (e) => {
    //returns if empty form is passed
    e.preventDefault();
    try {
      if (!email) return
      const docRef = doc(collection(db, 'emails'))
      console.log(email)
      await setDoc(docRef, { email: email, time: serverTimestamp() })
      setMessage('Thank you! Your email has been recorded.');
      setEmail('');
      setSubmitted(true)
    }

    catch {
      console.error('Error adding document: ', error);
      setMessage('An error occurred. Please try again.');

    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Analytics />
      <SpeedInsights />
      {/* ----- HEADER ----- */}
      <header class="font-Poppins">
        <nav class="bg-zinc-500 flex items-center py-2">
          <h1 class="font-bold text-white text-2xl pl-12">TRUVIEW</h1>
          <ul class="hidden sm:flex flex-1 justify-end items-center gap-12 text-bookmark-blue uppercase text-xs pr-12">
            <li class="cursor-pointer text-white"><Link href="/about">About Us</Link></li>
            <li class="cursor-pointer text-white"><Link href="/contact">Contact Us</Link></li>
            <button type="button" class="bg-bookmark-red text-white rounded-md px-7 py-3 uppercase">LOGIN</button>
          </ul>
          <div></div>
          <div class="flex sm:hidden flex-1 justify-end pr-8">
            <i
              class="text-2xl fa-solid fa-bars cursor-pointer"
              onClick={toggleMenu}
            ></i>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <ul class="flex flex-col items-center bg-zinc-500 text-white text-center sm:hidden">
            <li class="py-2 cursor-pointer text-white"><Link href="/about">About Us</Link></li>
            <li class="py-2 cursor-pointer text-white"><Link href="https://www.linkedin.com/company/truview1/">Contact Us</Link></li>

            <button type="button" class="bg-bookmark-red text-white rounded-md px-7 py-3 mt-1 mb-3 uppercase">LOGIN</button>

          </ul>
        )}
      </header>

      {/* ----- HERO ----- */}

      <section class="relative">
        <div class="lg:bg-none bg-civil-3 bg-center pb-64 lg:hidden"></div>
        <div class="bg-none lg:bg-civil-3 lg:bg-center lg:pb-48 pb-24">
          <div class="container flex flex-col items-center lg:flex-row lg:justify-items-end gap-12 pt-14 lg:pt-64 lg:pb-64 ">
            {/* ----- Image ----- */}
            {/* <div class="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10">
            <img class="w-5/6 h-5/6 sm:w-3/4 sm:h3/4 md:w-full md:h-full" src="/images/hero-bg.png" alt="" />
          </div> */}
            {/* ----- Content ----- */}
            <div class="flex flex-col justify-center lg:justify-items-end items-center lg:items-end max-w-md lg:ml-auto">
              <h2 class="text-bookmark-blue text-3xl md:text-4 lg:text-5xl lg:text-right mb-6">
                Your Partner In Disputes
              </h2>
              <p class="text-bookmark-grey text-lg text-center lg:text-right mb-6">
                Manage your disputes effortlessly with our innovative dispute manager aided with BIM.
              </p>
              <div class="flex justify-center flex-wrap gap-6">
                <button type="button" class="btn btn-white hover:bg-zinc-500 hover:text-white"><Link href="/contact">Contact Us</Link></button>
              </div>
            </div>
          </div>
          {/* ----- ROUNDED RECTANGLE ----- */}
          {/* <div class="hidden md:block overflow-hidden bg-slate-700 rounded-l-full absolute h-80 w-2/4 top-32 right-0 lg:-bottom-28 lg:-right-36">
        </div> */}
        </div>
      </section>

      {/* ----- FEATURES ----- */}

      <section class="bg-bookmark-white py-20 ">
        {/* ----- Heading ----- */}
        <div class="sm:w-3/4 lg:w-5/12 mx-auto px-2">
          <h1 class="text-3xl text-center text-bookmark-blue ">Features</h1>
          <p class="text-center text-bookmark-grey mt-4 ">
            Our platform leverages the power of blockchain technology to ensure that every project is managed with unparalleled transparency, efficiency, and security. Say goodbye to disputes, inefficiencies, and trust issues—TruView is here to transform how you build, one project at a time.
          </p>
        </div>
        {/* ----- Feature # 1 ----- */}
        <div class="relative mt-20 lg:mt-24">
          <div class="container flex flex-col lg:flex-row items-center justify-center gap-x-24 ">
            {/* ----- Image ----- */}
            <div class="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10">
              <img class="w-5/6 h-5/6 sm:w-3/4 sm:h3/4 md:w-full md:h-full" src="/images/illustration-features-tab-1.png" alt="" />
            </div>
            {/* ----- Content ----- */}
            <div class="flex flex-1 flex-col items-center lg:items-start">
              <h1 class="text-bookmark-blue text-3xl md:text-4 lg:text-5xl text-center lg:text-left mb-6">
                Blockchain-Backed BIM Integration
              </h1>
              <p class="text-bookmark-grey my-4 text-lg text-center lg:text-left sm:w-3/4 lg:w-full">
                Seamlessly combine the robust transparency of blockchain with the precision of BIM. TruView ensures every detail of your project is securely recorded and tamper-proof.</p>
              {/* <div class="flex justify-center flex-wrap gap-6">
                <button type="button" class="btn btn-zinc hover:bg-bookmark-white hover:text-black">More Info</button>
              </div> */}
            </div>
            {/* ----- ROUNDED RECTANGLE ----- */}
            <div class="hidden lg:block overflow-hidden bg-zinc-500 rounded-r-full absolute h-80 w-2/4 lg:-bottom-24 lg:-left-36">
            </div>
          </div>
        </div>
        {/* ----- Feature # 2 ----- */}
        <div class="relative mt-20 lg:mt-52">
          <div class="container flex flex-col lg:flex-row-reverse items-center justify-center gap-x-24 ">
            {/* ----- Image ----- */}
            <div class="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10">
              <img class="w-5/6 h-5/6 sm:w-3/4 sm:h3/4 md:w-full md:h-full" src="/images/illustration-features-tab-2.png" alt="" />
            </div>
            {/* ----- Content ----- */}
            <div class="flex flex-1 flex-col items-center lg:items-start">
              <h1 class="text-bookmark-blue text-3xl md:text-4 lg:text-5xl text-center lg:text-left mb-6">
                Efficient Dispute Resolution
              </h1>
              <p class="text-bookmark-grey my-4 text-lg text-center lg:text-left sm:w-3/4 lg:w-full">
                Resolve disputes faster and more effectively with a transparent, verifiable trail of project activities. TruView provides a clear, indisputable record to streamline arbitration processes.</p>
              {/* <div class="flex justify-center flex-wrap gap-6">
                <button type="button" class="btn btn-zinc hover:bg-bookmark-white hover:text-black">More Info</button>
              </div> */}
            </div>
            {/* ----- ROUNDED RECTANGLE ----- */}
            <div class="hidden lg:block overflow-hidden bg-zinc-500 rounded-l-full absolute h-80 w-2/4 lg:-bottom-24 lg:-right-36">
            </div>
          </div>
        </div>
        {/* ----- Feature # 3 ----- */}
        <div class="relative mt-20 lg:mt-52 ">
          <div class="container flex flex-col lg:flex-row items-center justify-center gap-x-24 ">
            {/* ----- Image ----- */}
            <div class="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10">
              <img class="w-5/6 h-5/6 sm:w-3/4 sm:h3/4 md:w-full md:h-full" src="/images/illustration-features-tab-3.png" alt="" />
            </div>
            {/* ----- Content ----- */}
            <div class="flex flex-1 flex-col items-center lg:items-start">
              <h1 class="text-bookmark-blue text-3xl md:text-4 lg:text-5xl text-center lg:text-left mb-6">
                Enhanced Stakeholder Trust
              </h1>
              <p class="text-bookmark-grey my-4 text-lg text-center lg:text-left sm:w-3/4 lg:w-full">
                Build trust among all project participants with a platform that guarantees accountability and transparency, reducing risks and fostering a collaborative environment.</p>
              {/* <div class="flex justify-center flex-wrap gap-6">
                <button type="button" class="btn btn-zinc hover:bg-bookmark-white hover:text-black">More Info</button>
              </div> */}
            </div>
            {/* ----- ROUNDED RECTANGLE ----- */}
            <div class="hidden lg:block overflow-hidden bg-zinc-500 rounded-r-full absolute h-80 w-2/4 lg:-bottom-24 lg:-left-36">
            </div>
          </div>
        </div>
      </section>

      {/* ----- FAQ ----- */}

      <section class="bg-bookmark-white py-20">
        <div class="container">
          {/* ----- Header ----- */}
          <div class="sm:w-3/4 lg:w-5/12 mx-auto px-2">
            <h1 class="text-3xl text-center text-bookmark-blue ">Frequently Asked Questions</h1>
            <p class="text-center text-bookmark-grey mt-4 ">
              Everything You Need to Know About TruView
            </p>
          </div>
          {/* ----- FAQ Items ----- */}
          <div class="flex flex-col sm:w-3/4 lg:w-5/12 mt-12 mx-auto">
            <details class="flex items-center border-b py-4">
              <summary class="flex-1 outline-none cursor-pointer flex justify-start">
                What is TruView?
                <i class="text-zinc-500 ml-auto justify-end fa-solid fa-chevron-down"></i>
              </summary>
              <div class="py-1 px-1 font-light text-sm">
                <p>TruView is a blockchain-backed project management platform designed to enhance transparency, efficiency, and trust in the construction industry by integrating with Building Information Modeling.</p>
              </div>
            </details>
            <details class="flex items-center border-b py-4">
              <summary class="flex-1 outline-none cursor-pointer flex justify-start">
                How does TruView improve dispute resolution?
                <i class="text-zinc-500 ml-auto justify-end fa-solid fa-chevron-down"></i>
              </summary>
              <div class="py-1 px-1 font-light text-sm">
                <p>TruView keeps an immutable, verifiable record of all project data, which can be used to resolve disputes quickly and fairly, reducing the need for lengthy litigation.</p>
              </div>
            </details>
            <details class="flex items-center border-b py-4">
              <summary class="flex-1 outline-none cursor-pointer flex justify-start">
                Can TruView be integrated with my current systems?
                <i class="text-zinc-500 ml-auto justify-end fa-solid fa-chevron-down"></i>
              </summary>
              <div class="py-1 px-1 font-light text-sm">
                <p>Yes, TruView is designed to seamlessly integrate with existing BIM systems and project management tools, ensuring a smooth transition and enhanced functionality.</p>
              </div>
            </details>
            <details class="flex items-center border-b py-4">
              <summary class="flex-1 outline-none cursor-pointer flex justify-start">
                Is my data secure with TruView?
                <i class="text-zinc-500 ml-auto justify-end fa-solid fa-chevron-down"></i>
              </summary>
              <div class="py-1 px-1 font-light text-sm">
                <p>Absolutely. TruView leverages blockchain technology, making all data stored on the platform immutable and tamper-proof, ensuring maximum security and integrity.</p>
              </div>
            </details>
            <details class="flex items-center border-b py-4">
              <summary class="flex-1 outline-none cursor-pointer flex justify-start">
                Who can benefit from using TruView?
                <i class="text-zinc-500 ml-auto justify-end fa-solid fa-chevron-down"></i>
              </summary>
              <div class="py-1 px-1 font-light text-sm">
                <p>TruView is ideal for construction companies, project managers, architects, and all stakeholders involved in large-scale construction projects who want to ensure transparency and efficiency.</p>
              </div>
            </details>
            <details class="flex items-center border-b py-4">
              <summary class="flex-1 outline-none cursor-pointer flex justify-start">
                How can I get started with TruView?
                <i class="text-zinc-500 ml-auto justify-end fa-solid fa-chevron-down"></i>
              </summary>
              <div class="py-1 px-1 font-light text-sm">
                <p>Getting started with TruView is easy. Contact us today to schedule a demo or to speak with one of our experts about how TruView can transform your next project.</p>
              </div>
            </details>

            {/* <button type="button" class="flex self-center mt-4 btn btn-zinc hover:bg-bookmark-white hover:text-black">More Info</button> */}
          </div>
        </div>
      </section>

      {/* ----- Contact Us ----- */}

      <section class="bg-zinc-700 text-white py-20">
        <div class="container">
          <div class="sm:w-3/4 lg:w-2/4 mx-auto">
            {/* <p class="font-light uppercase text-center mb-8">35,000+ ALREADY JOINED</p> */}
            <h1 class="text-3xl text-center"> Stay up-to-date with what we're doing</h1>
            <div class="flex flex-col md:flex-row gap-6 mt-8 justify-center">
              {!submitted ? (
                <form onSubmit={handleSubmit}>
                  <input
                    class="focus:outline-none flex-1 px-2 py-3 rounded-md text-black"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                  />
                  <button type="submit" class="btn btn-red hover:bg-bookmark-white hover:text-black ml-2">Subscribe</button>
                </form>
              ) : (
                message && <p>{message}</p>
              )}
              {/* <input type="text" placeholder="Enter your email address" class="focus:outline-none flex-1 px-2 py-3 rounded-md text-black" />
              <button type="button" class="btn btn-red hover:bg-bookmark-white hover:text-black">Contact Us</button> */}
            </div>
          </div>
        </div>
      </section>

      {/* ----- Footer ----- */}

      <section class="bg-zinc-500 py-8">
        <div class="container flex flex-col md:flex-row items-center">
          <div class="flex flex-1 flex-wrap items-center justify-center md:justify-start gap-12">
            {/* <img src="/images/logo-bookmark-white.png" alt="" /> */}
            <h1 class="font-bold text-white text-2xl pl-12"><Link href="/">TRUVIEW</Link></h1>
            <ul class="flex text-white uppercase gap-12 text-xs">
              <li class="cursor-pointer text-white"><Link href="/about">About Us</Link></li>
              <li class="cursor-pointer text-white"><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>
          <div class="flex gap-10 mt-12 md:mt-0">
            <li><Link href="https://www.linkedin.com/company/truview1/"><i class="text-white text-2xl fa-brands fa-linkedin"></i></Link></li>
          </div>
        </div>
      </section>
    </div>
  );
};

