<template>
    <div class="text-center py-20">
      <h1 class="text-4xl text-red-600">Oops! {{ error.statusCode }}</h1>
      <p class="text-lg">{{ error.message }}</p>
      <NuxtLink to="/" class="text-blue-500 underline mt-4 block">Back to Home</NuxtLink>
    </div>
  </template>
  
  <script setup>
  defineProps(['error'])
  </script>
  