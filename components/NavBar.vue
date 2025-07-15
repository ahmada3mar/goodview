<template>
  <div class="flex flex-col h-20 text-lg z-50">
    <!-- Top Contact Bar -->
    <div class="w-full bg-black fixed py-0 top-0 z-50 px-5 md:px-[1.5rem]">
      <div
        class="container flex flex-row md:flex-row h-20 justify-between items-center"
      >
        <!-- Logo -->
        <ULink
          @click="expand = false"
          to="/"
          class="flex h-full w-[224px] mx-0 md:mx-0 items-center"
        >
          <img
            class="my-5"
            src="/imgs/good-view-logo-white.png"
            alt="good view logo"
          />
        </ULink>

        <div
          class="hidden h-full lg:flex items-center gap-1 lg:gap-[6px] xl:gap-10 text-sm font-bold text-white"
        >
          <!-- <ULink to="/about-us/"
            class="flex items-center font-jakarta hover:bg-primary-500 h-full hover:text-black py-2 px-2 md:py-4 lg:px-3">
            About us</ULink> -->
          <div
            class="relative"
            @mouseenter="showDropdown1 = true"
            @mouseleave="showDropdown1 = false"
          >
            <ULink
              to="/services/"
              class="flex items-center font-jakarta with-icon hover:bg-primary-500 h-full hover:text-black py-2 px-2 md:py-4 lg:px-3"
            >
              <div class="flex items-center">
                Services
                <UIcon
                  role="button"
                  name="i-carbon-add"
                  class="w-5 h-5 text-primary-500"
                />
              </div>
            </ULink>

            <div
              v-if="showDropdown1"
              class="absolute left-0 gap-2 w-[250px] bg-primary-500 text-black shadow-lg z-50"
            >
              <ULink
                to="/services/commercial-moving-service/"
                class="block px-4 py-2 hover:bg-black hover:text-white text-[16px] font-jakarta"
                >Commerical Moving
              </ULink>
              <ULink
                to="/services/long-distance-moving-service/"
                class="block px-4 py-2 hover:bg-black hover:text-white text-[16px] font-jakarta"
                >Long Distance Moving
              </ULink>
              <ULink
                to="/services/residential-moving-service/"
                class="block px-4 py-2 hover:bg-black hover:text-white text-[16px] font-jakarta"
              >
                Residential Moving
              </ULink>
              <ULink
                to="/services/packing-and-unpacking-service/"
                class="block px-4 py-2 hover:bg-black hover:text-white text-[16px] font-jakarta"
                >Packing and Unpacking Service
              </ULink>
              <ULink
                to="/services/furniture-assembly-and-disassembly-service/"
                class="block px-4 py-2 hover:bg-black hover:text-white text-[16px] font-jakarta"
              >
                Furniture Assembly and Disassembly Service
              </ULink>
              <ULink
                to="/services/specialty-moving-service/"
                class="block px-4 py-2 hover:bg-black hover:text-white text-[16px] font-jakarta"
              >
                Specialty Moving
              </ULink>
              <ULink
                to="/services/storage-service/"
                class="block px-4 py-2 hover:bg-black hover:text-white text-[16px] font-jakarta"
              >
                Storage Units
              </ULink>
            </div>
          </div>

          <!-- Dropdown Menu (Only Shows on Hover) -->
          <div
            class="relative"
            @mouseenter="showDropdown2 = true"
            @mouseleave="showDropdown2 = false"
          >
            <div
              class="flex items-center font-jakarta with-icon hover:bg-primary-500 h-full hover:text-black py-2 px-2 md:py-4 lg:px-3"
            >
              <div class="flex items-center">
                Routes
                <UIcon
                  role="button"
                  name="i-carbon-add"
                  class="w-5 h-5 text-primary-500"
                />
              </div>
            </div>

            <!-- Dropdown Menu (Only Shows on Hover) -->
            <div
              v-if="showDropdown2"
              class="absolute left-0 gap-2 w-[250px] bg-primary-500 text-black shadow-lg z-50"
            >
              <ULink
                to="/california/"
                class="block px-4 py-2 hover:bg-black hover:text-white text-[16px] font-jakarta"
              >
                California
              </ULink>
              <ULink
                to="/north-carolina/"
                class="block px-4 py-2 hover:bg-black hover:text-white text-[16px] font-jakarta"
                >North Carolina
              </ULink>
              <ULink
                to="/new-jersey/"
                class="block px-4 py-2 hover:bg-black hover:text-white text-[16px] font-jakarta"
              >
                New Jersey
              </ULink>
              <ULink
                to="/new-york/"
                class="block px-4 py-2 hover:bg-black hover:text-white text-[16px] font-jakarta"
              >
                New York
              </ULink>
            </div>
          </div>
          <ULink
            to="/blogs/"
            class="flex items-center font-jakarta hover:bg-primary-500 h-full hover:text-black py-2 px-2 md:py-4 lg:px-3"
          >
            Blogs</ULink
          >
          <ULink
            to="/help/"
            class="flex items-center with-icon hover:bg-primary-500 h-full hover:text-black py-2 px-2 md:py-4 lg:px-3"
          >
            <div class="flex items-center">Help</div>
          </ULink>
          <a
            class="text-gray-100 font-jakarta font-semibold"
            href="tel:+19737821339"
            >+1 973-782-1339</a
          >
          <ULink
            to="/quote/"
            class="bg-primary-500 py-2 font-jakarta px-3 lg:px-3 xl:px-7 rounded-[10px] border border-primary-500 hover:bg-black hover:text-white text-black font-bold"
          >
            Get a free quote</ULink
          >
        </div>

        <!-- Burger Menu Icon for Mobile -->
        <UIcon
          @click="useSlideover().open(SideBar)"
          role="button"
          name="i-iconamoon-menu-burger-horizontal"
          class="block lg:hidden w-8 h-8 text-white"
        />
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
      showDropdown1: false, // First dropdown visibility
      showDropdown2: false, // Second dropdown visibility
    };
  },
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
