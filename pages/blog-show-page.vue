<template>
    <div>
      <!-- Hero Section -->
      <div class="relative w-full h-[20rem] md:h-[20rem] overflow-hidden "
      style="background: linear-gradient(26deg, rgb(2 2 2), rgb(0 0 0), rgb(255 211 78));">
        <div class="absolute inset-0 bg-black/20"></div>
  
        <!-- Animated Header -->
        <div
          class="relative z-10 flex flex-col justify-center text-left px-5 py-10 h-full max-w-[1100px] mx-auto gap-4 transition-all duration-700 ease-in-out"
          :class="{
            'opacity-100 translate-y-0': isVisible,
            'opacity-0 translate-y-5': !isVisible
          }"
        >
          <h1 class="text-white text-3xl md:text-4xl font-bold font-jakarta">
            Show Blog Page
          </h1>
  
          <!-- Breadcrumb -->
          <nav class="text-white text-[22px] font-rubik space-x-1 mt-2">
            <span><NuxtLink to="/" class="hover:underline">Home</NuxtLink></span> /
            <span><NuxtLink to="/blogs" class="hover:underline">Blogs</NuxtLink></span> /
            <span class="text-white">ShowBlog</span>
          </nav>
          <div class="flex items-start flex-col">
                  <p class="font-semibold text-white">Michael Nash</p>
                  <p class="text-sm text-white">Published Date: Apr 17th, 2025</p>
                  </div>
        </div>
      </div>
    </div>
  
      <!-- Main Content -->
      <div class="max-w-[1120px] mx-auto px-4 py-10">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          <!-- Main Blog Content -->
          <div class="lg:col-span-8 flex flex-col gap-8">
            <!-- Blog Banner -->
            <img
              src="/assets/Furniture-Assembly-and-Disassembly2.webp"
              alt="Blog Banner"
              class="w-full h-[400px] rounded-lg shadow-md object-cover"
            />
  
            <!-- Table of Contents -->
            <div class="bg-[#f2f2f2] font-jakarta p-5 rounded-lg shadow-md">
              <h2 class="text-xl font-semibold text-black mb-3">Table of Contents</h2>
              <ul class="space-y-2 list-disc list-inside text-black">
  <li><a href="#section1" class="hover:underline">Introduction</a></li>
  <li><a href="#section2" class="hover:underline">Steps to Move</a></li>
  <li><a href="#section3" class="hover:underline">Tips and Tricks</a></li>
</ul>

            </div>
  
            <!-- Blog Content -->
            <div class="text-gray-800 space-y-6">
              <h1 id="section1" class="text-3xl font-jakarta font-bold">Show Blog Page</h1>
              <p class="text-lg">
                Relocating a business is more than just moving desks and chairs—it's about minimizing downtime and keeping operations running smoothly throughout the transition...
              </p>
  
              <h2 id="section2" class="text-2xl font-jakarta font-semibold mt-6">Steps to Move</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Creating a detailed timeline and assigning responsibilities...
              </p>
  
              <h2 id="section3" class=" font-jakarta text-2xl font-semibold mt-6">Tips and Tricks</h2>
              <p>
                Quisquam deleniti fugiat explicabo quae labore rem. Consider hiring professional movers who specialize in commercial relocations...
              </p>
            </div>
            <section class="bg-black font-jakarta text-white py-12 px-4 rounded-xl">
  <h2 class="text-3xl font-bold mb-8 text-start">Frequently Asked Questions</h2>

  <div class="space-y-6 max-w-4xl mx-auto">
    
    <!-- FAQ Item 1 -->
    <details class="group bg-white text-black p-5 rounded-lg transition-all duration-300">
      <summary class="cursor-pointer text-lg font-semibold group-open:text-black flex justify-between items-center">
        What areas do you serve?
        <!-- Down Arrow (▼) when collapsed, Up Arrow (▲) when expanded -->
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" class="w-6 h-6 ml-2 transition-transform group-open:rotate-180 text-black">
          <path d="M7 10l5 5 5-5H7z"></path> <!-- Down Arrow -->
        </svg>
      </summary>
      <p class="mt-3 text-black">
        We offer moving services across all major U.S. states, with local and long-distance options available.
      </p>
    </details>

    <!-- FAQ Item 2 -->
    <details class="group bg-white text-black p-5 rounded-lg transition-all duration-300">
      <summary class="cursor-pointer text-lg font-semibold group-open:text-black flex justify-between items-center">
        How do I get a moving quote?
        <!-- Down Arrow (▼) when collapsed, Up Arrow (▲) when expanded -->
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" class="w-6 h-6 ml-2 transition-transform group-open:rotate-180 text-black">
          <path d="M7 10l5 5 5-5H7z"></path> <!-- Down Arrow -->
        </svg>
      </summary>
      <p class="mt-3 text-black">
        Just enter your zip codes in the form on this page and click "Get a free quote" — it's quick and easy!
      </p>
    </details>

    <!-- FAQ Item 3 -->
    <details class="group bg-white text-black p-5 rounded-lg transition-all duration-300">
      <summary class="cursor-pointer text-lg font-semibold group-open:text-black flex justify-between items-center">
        Are there any hidden fees?
        <!-- Down Arrow (▼) when collapsed, Up Arrow (▲) when expanded -->
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" class="w-6 h-6 ml-2 transition-transform group-open:rotate-180 text-black">
          <path d="M7 10l5 5 5-5H7z"></path> <!-- Down Arrow -->
        </svg>
      </summary>
      <p class="mt-3 text-black">
        No hidden fees. All charges are upfront and transparent during the estimate process.
      </p>
    </details>

  </div>
</section>




          </div>
  
          <!-- Sidebar -->
          <aside class="lg:col-span-4">
            <QuoteInputs :isVisible="isVisible" />
          </aside>
        </div>
      </div>
    
  </template>
  
  <script setup>
import { ref, onMounted } from 'vue';

const activeSection = ref('');

onMounted(() => {
  const sections = document.querySelectorAll('h1, h2');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeSection.value = entry.target.id;
        }
      });
    },
    { threshold: 0.5 }
  );

  sections.forEach((section) => observer.observe(section));
});


  import QuoteInputs from '@/components/QuoteInputs.vue' // Ensure this import is correct
  
  const isVisible = ref(false)
  
  onMounted(() => {
    setTimeout(() => {
      isVisible.value = true
    }, 400)
  })
  </script>
  