<template>
  <div class="flex flex-col  h-20 text-lg z-50">
    <!-- Top Contact Bar -->
    <div class="w-full bg-black fixed py-0 top-0 z-50 px-5 md:px-10">
      <div class="container  flex flex-row md:flex-row h-20 justify-between items-center">
        <!-- Logo -->
        <ULink @click="expand = false" to="/" class="flex h-full  w-[224px] mx-0 md:mx-0 items-center">
          <img class="my-5" src="~/assets/good-view-logo-white.png" alt="good view logo" />
        </ULink>

        <!-- Social Icons / Navigation Links -->
        <div class="hidden h-full lg:flex items-center gap-1 lg:gap-[10px] xl:gap-10 text-sm font-bold text-white">
          <ULink to="/about-us"
            class="flex items-center font-jakarta hover:bg-primary-500 h-full hover:text-black py-2 px-2 md:py-4 lg:px-3">
            About us</ULink>
          <div class="relative" @mouseenter="showDropdown = true" @mouseleave="showDropdown = false">
            <ULink to="/services"
              class="flex items-center font-jakarta with-icon hover:bg-primary-500 h-full hover:text-black py-2 px-2 md:py-4 lg:px-3">
              <div class="flex items-center">
                Services
                <UIcon role="button" name="i-carbon-add" class="w-5 h-5 text-primary-500" />
              </div>
            </ULink>

            <!-- Dropdown Menu (Only Shows on Hover) -->
            <div v-if="showDropdown"
              class="absolute left-0   w-[250px] bg-primary-500 text-black  rounded-md shadow-lg z-50">
              <ULink to="/services/commercial-service"
                class="block px-4 py-2 hover:bg-black hover:text-white text-[16px] font-jakarta">Commerical Moving
              </ULink>
              <ULink to="/services/long-distance-moving"
                class="block px-4 py-2 hover:bg-black hover:text-white text-[16px] font-jakarta">Long Distance Moving
              </ULink>
              <ULink to="/services/residential-moving"
                class="block px-4 py-2 hover:bg-black hover:text-white text-[16px] font-jakarta">Residential Moving
              </ULink>

            </div>
          </div>

          <ULink to="/tips"
            class="flex items-center font-jakarta hover:bg-primary-500 h-full hover:text-black py-2 px-2 md:py-4 lg:px-3">
            Tips for the move</ULink>
          <ULink to="/help"
            class="flex items-center with-icon hover:bg-primary-500 h-full hover:text-black py-2 px-2 md:py-4 lg:px-3">
            <div class="flex items-center">Help
              <UIcon role="button" name="i-carbon-add" class="w-5 h-5 text-primary-500" />
            </div>
          </ULink>
          <a class="text-gray-100 font-jakarta font-semibold" href="tel:+19737821339">+1 973-782-1339</a>
          <ULink to="/quote"
            class="bg-primary-500 py-2 font-jakarta px-3 lg:px-3 xl:px-7 rounded-[10px] border border-primary-500 hover:bg-black hover:text-white text-black font-bold">
            Get a free quote</ULink>
        </div>

        <!-- Burger Menu Icon for Mobile -->
        <UIcon @click="useSlideover().open(SideBar)" role="button" name="i-iconamoon-menu-burger-horizontal"
          class="block lg:hidden w-8 h-8 text-white" />
      </div>
    </div>
  </div>
</template>

<script>
import { markRaw } from "vue";
import { SideBar } from "#components";

export default {
  data() {
    return {
      expand: false,
      SideBar: markRaw(SideBar),
      showDropdown: false, // Dropdown visibility state
    };
  }
};
</script>

<style scoped>
.home-nave::after {
  content: "";
  display: block;
  width: 0px;
  height: 0px;
  border: 48px solid transparent;
  border-top-color: #e4722b;
  border-right-color: #e4722b;
  left: -96px;
  position: absolute;
}

@media (max-width: 921px) {
  .home-nave::after {
    border: 32px solid transparent;
    border-top-color: #e4722b;
    border-right-color: #e4722b;
    left: -64px;
  }
}
</style>
