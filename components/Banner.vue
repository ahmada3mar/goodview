<template>
  <div v-lazy:background-image="props.background"
  :class="`home-background  bg-cover bg-center relative`"
   >
    <div class="absolute inset-0 bg-gradient-to-t to-black from-primary-500/50"></div> <!-- Overlay for darkening -->

    <div class="relative flex flex-col items-center justify-center gap-10 px-5 py-10 h-full">
      
      <!-- Text Content -->
      <div class="flex flex-col items-center gap-5 w-full text-center">
        <h2
        :class="{
        'opacity-100 translate-y-0': isVisible,
        'opacity-0 -translate-y-5': !isVisible,
      }"        
        class="transition-all duration-700 ease-in-out text-primary-500 text-3xl md:text-4xl lg:text-5xl font-extrabold">
         {{ props.title }}
        </h2>
        <h2 
        :class="{
        'opacity-100': isVisible,
        'opacity-0': !isVisible,
      }"   
        class="max-w-3xl transition-all duration-1000 delay-150 ease-in-out text-xl md:text-2xl lg:text-3xl text-white">
        {{ props.text }}
        </h2>
      </div>

      <!-- Input Fields and Button -->

      <slot name="body" :isVisible="isVisible"/>

    </div>
  </div>
</template>

<script setup>
import background from "../public/assets/banner-mini.webp"


const isVisible = ref(false)

onMounted(() => {
  // Trigger the animation after the component is mounted
  setTimeout(() => {
    isVisible.value = true
  }, 400) // Delay to simulate the transition trigger
})


const props = defineProps({
  background:{
    default:background
  },
  title:{
    type:String,
    default:''
  },
  text:{
    type:String,
    default:''
  },

})




</script>

<style scoped>
.home-background {
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover; /* Ensures the background covers the entire section */
}
</style>

