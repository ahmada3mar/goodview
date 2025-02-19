<template>
  <NuxtLayout>
    <div>
      <NuxtPage />
      <NuxtLink href="tel:+19737821339" role="button" class="flex items-center justify-center 
          rounded-full  
          fixed bottom-10 right-5 z-50 
          bg-white
          border
          p-1
          group
          ">
          <div class="transition-all overflow-hidden group-hover:w-auto whitespace-nowrap w-0 px-0 group-hover:px-5 " >Call Us</div>
          <img class="w-11 h-11 z-10" :src="phone" />
      </NuxtLink>
    </div>
    <USlideovers />
  </NuxtLayout>
</template>

<script setup>
import phone from './assets/UIHere.png'

</script>

