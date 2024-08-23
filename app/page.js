'use client'

import Link from "next/link";

export default function LandingPage() {

  return (
    <div>
      {/* ----- HEADER ----- */}
      <header class="font-Poppins">
        <nav class=" bg-zinc-500 flex items-center py-2">
          {/* <div class="py-1"><img src="/images/truview-logo.svg" alt="logo" /></div> */}
          <h1 class="font-bold text-white text-2xl pl-12">TRUVIEW</h1>
          <ul class="hidden sm:flex flex-1 justify-end items-center gap-12 text-bookmark-blue uppercase text-xs pr-12">
            <Link href="/features"><li class="cursor-pointer text-white">Features</li></Link>
            <li class="cursor-pointer text-white">About Us</li>
            <li class="cursor-pointer text-white">Contact</li>
            <button type="button" class="bg-bookmark-red text-white rounded-md px-7 py-3 uppercase">LOGIN</button>
          </ul>
          <div class="flex sm:hidden flex-1 justify-end pr-8">
            <i class="text-2xl fa-solid fa-bars"></i>
          </div>
        </nav>
      </header>

      {/* ----- HERO ----- */}
      
      <section class="relative">
      <div class="bg-none lg:bg-civil-3 lg:bg-center pb-48">
        <div class="container flex flex-col items-center lg:flex-row lg:justify-items-end gap-12 pt-14 lg:pt-28 ">
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
              <button type="button" class="btn btn-zinc hover:bg-zinc-200 hover:text-black">More Info</button>
              <button type="button" class="btn btn-white hover:bg-zinc-500 hover:text-white">Contact Us</button>
            </div>
          </div>
        </div>
        {/* ----- ROUNDED RECTANGLE ----- */}
        {/* <div class="hidden md:block overflow-hidden bg-slate-700 rounded-l-full absolute h-80 w-2/4 top-32 right-0 lg:-bottom-28 lg:-right-36">
        </div> */}
        </div>
      </section>
      {/* ----- FEATURES ----- */}
      <section class="bg-bookmark-white py-20 mt:20 lg:mt-60 md:mt-10">
        {/* ----- Heading ----- */}
        <div class="sm:w-3/4 lg:w-5/12 mx-auto px-2">
          <h1 class="text-3xl text-center text-bookmark-blue ">Features</h1>
          <p class="text-center text-bookmark-grey mt-4 ">
            Manage your bookmarks effortlessly with our simple bookmark manager. Organize your favorite websites, categorize them with tags, and easily access them whenever you need.
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
                Bookmark in One Click
              </h1>
              <p class="text-bookmark-grey my-4 text-lg text-center lg:text-left sm:w-3/4 lg:w-full">
                Manage your bookmarks effortlessly with our simple bookmark manager. Organize your favorite websites, categorize them with tags, and easily access them whenever you need.
              </p>
              <div class="flex justify-center flex-wrap gap-6">
                <button type="button" class="btn btn-purple hover:bg-bookmark-white hover:text-black">More Info</button>
              </div>
            </div>
            {/* ----- ROUNDED RECTANGLE ----- */}
            <div class="hidden lg:block overflow-hidden bg-bookmark-purple rounded-r-full absolute h-80 w-2/4 lg:-bottom-24 lg:-left-36">
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
                Intelligent Search
              </h1>
              <p class="text-bookmark-grey my-4 text-lg text-center lg:text-left sm:w-3/4 lg:w-full">
                Manage your bookmarks effortlessly with our simple bookmark manager. Organize your favorite websites, categorize them with tags, and easily access them whenever you need.
              </p>
              <div class="flex justify-center flex-wrap gap-6">
                <button type="button" class="btn btn-purple hover:bg-bookmark-white hover:text-black">More Info</button>
              </div>
            </div>
            {/* ----- ROUNDED RECTANGLE ----- */}
            <div class="hidden lg:block overflow-hidden bg-bookmark-purple rounded-l-full absolute h-80 w-2/4 lg:-bottom-24 lg:-right-36">
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
                Share Your Bookmark
              </h1>
              <p class="text-bookmark-grey my-4 text-lg text-center lg:text-left sm:w-3/4 lg:w-full">
                Manage your bookmarks effortlessly with our simple bookmark manager. Organize your favorite websites, categorize them with tags, and easily access them whenever you need.
              </p>
              <div class="flex justify-center flex-wrap gap-6">
                <button type="button" class="btn btn-purple hover:bg-bookmark-white hover:text-black">More Info</button>
              </div>
            </div>
            {/* ----- ROUNDED RECTANGLE ----- */}
            <div class="hidden lg:block overflow-hidden bg-bookmark-purple rounded-r-full absolute h-80 w-2/4 lg:-bottom-24 lg:-left-36">
            </div>
          </div>
        </div>
      </section>
      {/* ----- DOWNLOAD ----- */}
      <section class="py-20 mt-20">
        <div class="sm:w-3/4 lg:w-5/12 mx-auto px-2">
          <h1 class="text-3xl text-center text-bookmark-blue ">Download</h1>
          <p class="text-center text-bookmark-grey mt-4 ">
            Manage your bookmarks effortlessly with our simple bookmark manager. Organize your favorite websites, categorize them with tags, and easily access them whenever you need.
          </p>
        </div>
        {/* ----- Cards ----- */}
        <div class="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 max-w-screen-lg mt-16">
          {/* ----- Card # 1 ----- */}
          <div class="flex flex-col rounded-md shadow-md lg:mb-16">
            <div class="p-6 flex flex-col items-center">
              <img src="/images/logo-chrome.svg" alt="" />
              <h3 class="mt-5 mb-2 text-bookmark-blue text-lg">Add to Chrome</h3>
              <p class="mb-2 text-bookmark-grey font-light">Minimum version 62</p>
            </div>
            <hr class="border-b border-bookmark-white"></hr>
            <div class="flex p-6">
              <button type="button" class="flex-1 btn btn-purple hover:bg-bookmark-white hover:text-black">Add and Install Extension</button>
            </div>
          </div>
          {/* ----- Card # 2 ----- */}
          <div class="flex flex-col rounded-md shadow-md lg:my-8">
            <div class="p-6 flex flex-col items-center">
              <img src="/images/logo-firefox.svg" alt="" />
              <h3 class="mt-5 mb-2 text-bookmark-blue text-lg">Add to Firefox</h3>
              <p class="mb-2 text-bookmark-grey font-light">Minimum version 62</p>
            </div>
            <hr class="border-b border-bookmark-white"></hr>
            <div class="flex p-6">
              <button type="button" class="flex-1 btn btn-purple hover:bg-bookmark-white hover:text-black">Add and Install Extension</button>
            </div>
          </div>
          {/* ----- Card # 3 ----- */}
          <div class="flex flex-col rounded-md shadow-md lg:mt-16">
            <div class="p-6 flex flex-col items-center">
              <img src="/images/logo-opera.svg" alt="" />
              <h3 class="mt-5 mb-2 text-bookmark-blue text-lg">Add to Opera</h3>
              <p class="mb-2 text-bookmark-grey font-light">Minimum version 62</p>
            </div>
            <hr class="border-b border-bookmark-white"></hr>
            <div class="flex p-6">
              <button type="button" class="flex-1 btn btn-purple hover:bg-bookmark-white hover:text-black">Add and Install Extension</button>
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
              Manage your bookmarks effortlessly with our simple bookmark manager. Organize your favorite websites, categorize them with tags, and easily access them whenever you need.
            </p>
          </div>
          {/* ----- FAQ Items ----- */}
          <div class="flex flex-col sm:w-3/4 lg:w-5/12 mt-12 mx-auto">
            <div class="flex items-center border-b py-4">
              <span class="flex-1">What is a Bookmark?</span>
              <i class="text-bookmark-purple fa-solid fa-chevron-down"></i>
            </div>
            <div class="flex items-center border-b py-4">
              <span class="flex-1">What is a Bookmark?</span>
              <i class="text-bookmark-purple fa-solid fa-chevron-down"></i>
            </div>
            <div class="flex items-center border-b py-4">
              <span class="flex-1">What is a Bookmark?</span>
              <i class="text-bookmark-purple fa-solid fa-chevron-down"></i>
            </div>
            <div class="flex items-center border-b py-4">
              <span class="flex-1">What is a Bookmark?</span>
              <i class="text-bookmark-purple fa-solid fa-chevron-down"></i>
            </div>
            <button type="button" class="flex self-center mt-4 btn btn-purple hover:bg-bookmark-white hover:text-black">More Info</button>
          </div>
        </div>
      </section>
      {/* ----- Contact Us ----- */}
      <section class="bg-bookmark-purple text-white py-20">
        <div class="container">
          <div class="sm:w-3/4 lg:w-2/4 mx-auto">
            <p class="font-light uppercase text-center mb-8">35,000+ ALREADY JOINED</p>
            <h1 class="text-3xl text-center"> Stay up-to-date with what we're doing</h1>
            <div class="flex flex-col sm:flex-row gap-6 mt-8">
              <input type="text" placeholder="Enter your email address" class="focus:outline-none flex-1 px-2 py-3 rounded-md text-black" />
              <button type="button" class="btn btn-red hover:bg-bookmark-white hover:text-black">Contact Us</button>
            </div>
          </div>
        </div>
      </section>
      {/* ----- Footer ----- */}
      <section class="bg-bookmark-blue py-8">
        <div class="container flex flex-col md:flex-row items-center">
          <div class="flex flex-1 flex-wrap items-center justify-center md:justify-start gap-12">
            <img src="/images/logo-bookmark-white.png" alt="" />
            <ul class="flex text-white uppercase gap-12 text-xs">
              <li class="cursor-pointer">Features</li>
              <li class="cursor-pointer">Pricing</li>
              <li class="cursor-pointer">Contact</li>
            </ul>
          </div>
          <div class="flex gap-10 mt-12 md:mt-0">
            <li><i class="text-white text-2xl fa-brands fa-facebook"></i></li>
            <li><i class="text-white text-2xl fa-brands fa-twitter"></i></li>
          </div>
        </div>
      </section>
    </div>
  );
};

