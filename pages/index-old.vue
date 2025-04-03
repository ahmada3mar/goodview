<template>
    <div>
      <div class="flex flex-col">
        <Banner />

        <!-- Trusted by Companies Section -->
        <div class="flex flex-col md:flex-row bg-gray-100 dark:bg-gray-900 gap-10 md:gap-5 h-auto py-5 px-4 md:px-14 items-center justify-center">
          <h2 class="text-customPrimary-100 font-bold text-3xl md:text-5xl w-full md:w-72 border-black border-b-2 md:border-b-0 md:border-r-2 text-center p-5">
            Trusted by
          </h2>
          <div class="flex flex-wrap justify-center gap-4">
            <img class="h-24" src="~/assets/banner1.png" alt="www.goodview-moving.com">
            <img class="h-24" src="~/assets/banner2.jpeg" alt="www.goodview-moving.com">
            <img class="h-24" src="~/assets/banner3.png" alt="www.goodview-moving.com">
            <img class="h-24" src="~/assets/banner4.png" alt="www.goodview-moving.com">
          </div>
        </div>

        <Intro />
        <Services />
        <Details />

        <!-- Residential Movers Section -->
        <div class="bg-primary-50">
          <div class="container mx-auto">
            <div class="flex flex-col md:flex-row flex-wrap gap-10 md:gap-20 items-center py-10 md:py-20 px-4">
              <div class="img1 relative bg-primary-500 rounded-2xl p-2">
                <img class="w-full h-full rounded-none" src="~/assets/home2.png" alt="Residential Movers">
                <div class="dot"></div>
                <div class="dot"></div>
              </div>
              <div class="flex flex-col gap-5 flex-1">
                <h2 class="text-4xl md:text-6xl mb-5">Residential Movers</h2>
                <p class="text-lg md:text-xl">Whether it’s a room, a flat, or a whole house, we have you covered. We can tag all of the boxes so that your unpacking process isn't slowed down by having to open every box to locate what you're looking for.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Commercial Movers Section -->
        <div class="container mx-auto">
          <div class="flex flex-col md:flex-row flex-wrap gap-10 md:gap-20 items-center py-10 md:py-20 px-4">
            <div class="flex flex-col gap-5 flex-1">
              <h2 class="text-4xl md:text-6xl mb-5">Commercial Movers</h2>
              <p class="text-lg md:text-xl">Transferring an office is not a simple job. It requires no small amount of preparation to ensure everything is labeled and organized for proper delivery.</p>
              <p class="text-lg md:text-xl">We realize that our customers need their companies moved swiftly to minimize downtime because time is money.</p>
            </div>
            <div class="img1 relative bg-primary-500 rounded-2xl p-2">
              <img class="w-full h-full rounded-none" src="~/assets/home3.png" alt="Commercial Movers">
              <div class="dot"></div>
              <div class="dot"></div>
            </div>
          </div>
        </div>

        <Affordable />
        <Location />
      </div>
    </div>
  </template>

  <style scoped>

  </style>
