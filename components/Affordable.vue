<template>
    <div class="bg-primary-50">
      <div class="container mx-auto">
  
        <!-- Heading Section -->
        <div class="flex flex-col my-16 md:my-36 justify-center items-center px-4 md:px-36">
          <h2 class="text-4xl md:text-6xl mb-5 px-4 text-center">Get An Affordable Moving Service Estimate</h2>
          <p class="text-lg md:text-xl px-4 text-center">
            Sometimes you have to move out of a place but can't bring all your stuff with you at the moment. We'll continue to keep your belongings safe and secure until you are ready for them.
          </p>
        </div>
  
        <!-- Cards Section -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-5 px-4">
          <UCard :ui="{  rounded: 'rounded-2xl'}">
            <div class="flex flex-col gap-5">
              <div class="h-16 w-16 md:h-20 md:w-20 rounded-full p-1 border border-primary-500 flex justify-center items-center">
                <div class="bg-primary-500 h-full w-full rounded-full flex justify-center items-center">
                  <UIcon size="xl" name="i-mdi-file-document" class="w-8 h-8 md:w-10 md:h-10 bg-white" />
                </div>
              </div>
              <h2 class="text-2xl md:text-3xl font-bold">Affordable Rates</h2>
              <p class="text-lg md:text-xl">
                Give us a call to discuss the many options for your move and learn more about moving packages that include personalized customer service.
              </p>
            </div>
          </UCard>
  
          <UCard :ui="{  rounded: 'rounded-2xl'}">
            <div class="flex flex-col gap-5">
              <div class="h-16 w-16 md:h-20 md:w-20 rounded-full p-1 border border-primary-500 flex justify-center items-center">
                <div class="bg-primary-500 h-full w-full rounded-full flex justify-center items-center">
                  <UIcon size="xl" name="i-mdi-file-document" class="w-8 h-8 md:w-10 md:h-10 bg-white" />
                </div>
              </div>
              <h2 class="text-2xl md:text-3xl font-bold">Detailed Estimates</h2>
              <p class="text-lg md:text-xl">
                There are never any hidden fees when you plan your relocation using GOODVIEW MOVING AND STORAGE. Our accurate estimates include your total costs calculated during a detailed consultation.
              </p>
            </div>
          </UCard>
  
          <UCard :ui="{  rounded: 'rounded-2xl'}">
            <div class="flex flex-col gap-5">
              <div class="h-16 w-16 md:h-20 md:w-20 rounded-full p-1 border border-primary-500 flex justify-center items-center">
                <div class="bg-primary-500 h-full w-full rounded-full flex justify-center items-center">
                  <UIcon size="xl" name="i-mdi-file-document" class="w-8 h-8 md:w-10 md:h-10 bg-white" />
                </div>
              </div>
              <h2 class="text-2xl md:text-3xl font-bold">Pro Moving Crews</h2>
              <p class="text-lg md:text-xl">
                Our staff, including sales advisers, packers, and vehicle operators, are well trained and experienced in handling local or long-distance moves in USA.
              </p>
            </div>
          </UCard>
  
          <UCard :ui="{  rounded: 'rounded-2xl'}">
            <div class="flex flex-col gap-5">
              <div class="h-16 w-16 md:h-20 md:w-20 rounded-full p-1 border border-primary-500 flex justify-center items-center">
                <div class="bg-primary-500 h-full w-full rounded-full flex justify-center items-center">
                  <UIcon size="xl" name="i-mdi-file-document" class="w-8 h-8 md:w-10 md:h-10 bg-white" />
                </div>
              </div>
              <h2 class="text-2xl md:text-3xl font-bold">Guaranteed Protection</h2>
              <p class="text-lg md:text-xl">
                Fully insured and bonded, GoodView Moving And Storage provides protected storage options, quality moving materials, and specialized solutions to ensure your possessions are protected.
              </p>
            </div>
          </UCard>
        </div>
  
        <!-- Footer Section -->
        <div class="flex flex-col my-16 md:my-36 justify-center items-center px-4 md:px-36">
          <p class="text-lg md:text-xl px-4 text-center">
            For local or long-distance moves in USA, exceptional residential or commercial services, protected storage, and more, check out the moving professionals at GOOD VIEW MOVING AND STORAGE.
          </p>
          <UButton class="mt-10 p-3 px-7 rounded-full" size="xl" type="submit" label="Get a quote" />
        </div>
  
      </div>
    </div>
  </template>
  
  <style scoped>
  .img1 img {
    border-radius: 15px;
  }
  
  .img1 {
    width: 617px;
    height: 515px;
  }
  

  </style>
  