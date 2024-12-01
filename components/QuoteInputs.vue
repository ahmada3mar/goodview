<template>
  <div :class="{
    'opacity-100 translate-y-0': props.isVisible,
    'opacity-0 translate-y-36': !props.isVisible,
  }" class="transition-all duration-1000 delay-150 ease-in-out flex flex-wrap flex-col md:flex-row gap-4 md:gap-2 w-full 
      md:items-start
      justify-center items-center">
    <UInput size="lg" placeholder="From address"
      :ui="{ base: 'relative block w-80 focus:border-primary-500 disabled:cursor-not-allowed disabled:opacity-75 border-4 border-primary-500', placeholder: 'placeholder-gray-500' }">
      <template #trailing>
        <UIcon role="button" name="i-carbon-location" class="w-5 h-5 text-gray-500" />
      </template>
    </UInput>

    <UInput size="lg" placeholder="To address"
      :ui="{ base: 'relative block w-80 focus:border-primary-500 disabled:cursor-not-allowed disabled:opacity-75 border-4 border-primary-500', placeholder: 'placeholder-gray-500' }">
      <template #trailing>
        <UIcon role="button" name="i-carbon-location" class="w-5 h-5 text-gray-500" />
      </template>
    </UInput>

    <UButton label="Get a free quote"
      class="font-bold text-center justify-center  px-10 text-black border-1 border-gray-900 h-12 w-80 md:w-auto" />
  </div>
</template>


<script setup>



const props = defineProps({

  isVisible:{
    type:Boolean,
    default:false
  },
})

console.log(props)


</script>