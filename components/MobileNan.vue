<template>
    <div class="h-full bg-black w-full overflow-y-auto">
      <div class="flex justify-between p-5 sticky top-0 bg-black z-10">
        <img class="h-10" src="/imgs/good-view-logo-white.png" alt="good view logo">
        <button @click="slideover.close()" class="text-white">
          <UIcon name="i-heroicons-x-mark-20-solid" class="w-6 h-6" />
        </button>
      </div>

      <div class="flex flex-col pb-10">
        <!-- Home -->
        <ULink @click="slideover.close()" to="/"
          class="hover:bg-primary-500 hover:text-black text-slate-300 text-start p-5 text-xl flex items-center gap-4">
          <UIcon name="i-carbon-home" class="w-5 h-5 text-s text-inherit" />
          Home
        </ULink>

        <!-- About Us -->
        <ULink @click="slideover.close()" to="/about-us"
          class="hover:bg-primary-500 hover:text-black text-slate-300 text-start p-5 text-xl flex items-center gap-4">
          <UIcon name="i-carbon-information" class="w-5 h-5 text-inherit" />
          About us
        </ULink>

        <!-- Services Dropdown -->
        <div>
          <div class="flex items-center hover:bg-primary-500 hover:text-black text-slate-300">
            <!-- Services Link -->
            <ULink @click="navigateToServices" to="/services"
              class="flex-1 text-start p-5 text-xl flex items-center gap-4">
              <UIcon name="i-carbon-delivery-truck" class="w-5 h-5 text-inherit" />
              Services
            </ULink>

            <!-- Dropdown Toggle Button -->
            <button @click.stop="toggleServicesDropdown"
                    class="p-5 pr-6 focus:outline-none">
              <UIcon :name="servicesDropdownOpen ? 'i-carbon-chevron-up' : 'i-carbon-chevron-down'"
                     class="w-5 h-5 text-inherit transition-transform duration-200" />
            </button>
          </div>

          <Transition name="slide">
            <div v-if="servicesDropdownOpen" class="overflow-hidden">
              <ULink @click="handleLinkClick" to="/services/commercial-moving-service"
                class="hover:bg-primary-500 hover:text-black text-slate-300 text-start p-4  text-lg flex items-center gap-4">

                Commercial Moving
              </ULink>
              <ULink @click="handleLinkClick" to="/services/long-distance-moving-service"
                class="hover:bg-primary-500 hover:text-black text-slate-300 text-start p-4  text-lg flex items-center gap-4">

                Long Distance Moving
              </ULink>
              <ULink @click="handleLinkClick" to="/services/residential-moving-service"
                class="hover:bg-primary-500 hover:text-black text-slate-300 text-start p-4  text-lg flex items-center gap-4">

                Residential Moving
              </ULink>
              <ULink @click="handleLinkClick" to="/services/packing-and-unpacking-service"
                class="hover:bg-primary-500 hover:text-black text-slate-300 text-start p-4  text-lg flex items-center gap-4">

                Packing and Unpacking
              </ULink>
              <ULink @click="handleLinkClick" to="/services/furniture-assembly-and-disassembly-service"
                class="hover:bg-primary-500 hover:text-black text-slate-300 text-start p-4  text-lg flex items-center gap-4">

                Furniture Assembly and Disassembly
              </ULink>
              <ULink @click="handleLinkClick" to="/services/specialty-moving-service"
                class="hover:bg-primary-500 hover:text-black text-slate-300 text-start p-4  text-lg flex items-center gap-4">

                Specialty Moving
              </ULink>
              <ULink @click="handleLinkClick" to="/services/storage-service"
                class="hover:bg-primary-500 hover:text-black text-slate-300 text-start p-4  text-lg flex items-center gap-4">

                Storage Units
              </ULink>
            </div>
          </Transition>
        </div>

        <!-- Tips -->
        <ULink @click="slideover.close()" to="/tips"
          class="hover:bg-primary-500 hover:text-black text-slate-300 text-start p-5 text-xl flex items-center gap-4">
          <UIcon name="i-carbon-idea" class="w-5 h-5 text-md text-inherit" />
          Tips for the move
        </ULink>


        <ULink @click="slideover.close()" to="/blogs"
          class="hover:bg-primary-500 hover:text-black text-slate-300 text-start p-5 text-xl flex items-center gap-4">
          <UIcon name="i-carbon-idea" class="w-5 h-5 text-md text-inherit" />
          Blogs
        </ULink>

        <!-- Help -->
        <ULink @click="slideover.close()" to="/help"
          class="hover:bg-primary-500 hover:text-black text-slate-300 text-start p-5 text-xl flex items-center gap-4">
          <UIcon name="i-carbon-idea" class="w-5 h-5 text-md text-inherit" />
          Help
        </ULink>

        <!-- Phone Number -->
        <a href="tel:+19737821339" @click="slideover.close()"
          class="hover:bg-primary-500 hover:text-black text-slate-300 text-start p-5 text-xl flex items-center gap-4">
          <UIcon name="i-carbon-phone" class="w-5 h-5 text-inherit" />
          +1 973-782-1339
        </a>

        <!-- Get a Quote -->
        <ULink @click="slideover.close()" to="/quote"
          class="mx-5 mt-4 bg-primary-500 hover:bg-primary-600 text-black text-center p-3 text-xl font-bold rounded-[10px]">
          Get a free quote
        </ULink>
      </div>
    </div>
  </template>

  <script setup>
  const slideover = useSlideover()
  const servicesDropdownOpen = ref(false)

  const toggleServicesDropdown = () => {
    servicesDropdownOpen.value = !servicesDropdownOpen.value
  }

  const navigateToServices = (e) => {
    // Only navigate if dropdown is closed
    if (!servicesDropdownOpen.value) {
      slideover.close()
      return true // Allow default navigation
    }
    // If dropdown is open, prevent navigation and just close dropdown
    e.preventDefault()
    servicesDropdownOpen.value = false
  }

  const handleLinkClick = () => {
    servicesDropdownOpen.value = false
    slideover.close()
  }
  </script>

  <style>
  .slide-enter-active,
  .slide-leave-active {
    transition: all 0.3s ease;
    max-height: 500px;
  }

  .slide-enter-from,
  .slide-leave-to {
    opacity: 0;
    max-height: 0;
    transform: translateY(-10px);
  }
  </style>