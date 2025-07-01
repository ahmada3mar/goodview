<template>
  <div>
    <div class="min-h-screen bg-black text-white">
      <div class="max-w-4xl mx-auto px-6 py-8">
        <!-- Breadcrumb -->
        <nav class="flex items-center space-x-2 text-sm text-gray-400 mb-8">
          <NuxtLink to="/" class="hover:text-white transition-colors">Home</NuxtLink>
          <span>/</span>
          <NuxtLink to="/ca" class="hover:text-white transition-colors">ca</NuxtLink>
          <span>/</span>
          <span v-if="city" class="text-white">Durham</span>
        </nav>

        <!-- Category Badge -->
        <div class="mb-6">
          <span
            class="inline-block bg-[#ffd343] text-black font-[600] px-3 py-1 rounded text-sm uppercase tracking-wide">
            Popular Routes
          </span>
        </div>

        <!-- Main Title -->
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Popular Routes in Durham
        </h1>

        <p class="font-[300] max-w-3xl font-rubik leading-[1.6rem] mb-8">
          Looking for reliable movers in North Carolina? Good View Moving and Storage is here to make
          your next move safe and stress-free.
        </p>

        <!-- Popular Moving Routes Section -->
        <div class="mb-12">
          <div class="mb-8">
            <div class="flex items-center mb-6 mt-6">
              <div class="w-6 h-6 mr-3 flex-shrink-0">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" fill="#ffd343" />
                </svg>
              </div>
              <h3 class="text-xl font-bold" style="color: #ffd343;">Durham</h3>
            </div>

            <!-- Routes List -->
            <div class="space-y-0">
              <div v-for="route in losAngelesRoutes" :key="route.slug" class="group">
                <NuxtLink
                  class="flex items-center py-3 px-4 rounded-lg hover:bg-gray-900 transition-colors duration-200">
                  <div class="w-5 h-5 mr-4 flex-shrink-0">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M8 6H21V8H8V6ZM8 11H21V13H8V11ZM8 16H21V18H8V16ZM5 4V6H3V4H5ZM5 9V11H3V9H5ZM5 14V16H3V14H5Z"
                        fill="#ffd343" />
                    </svg>
                  </div>
                  <span class="group-hover:text-white transition-colors duration-200">
                    Dhram
                  </span>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>

</script>
