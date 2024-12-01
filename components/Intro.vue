<template>
    <div class=" md:mx-28 mx-5  px-5 overflow-hidden bg-white">
  
      <div class="flex flex-wrap p-0 gap-1 lg:gap-10 justify-between ">
        <div
        ref="scrollElement"
        :class="{
        'opacity-100 translate-x-0': isVisible,
        'opacity-0 -translate-x-36': !isVisible,
      }"
        class="transition-all delay-300 duration-1000 ease-in-out flex flex-col gap-2 md:pb-56 pb-8  pt-16 flex-1">
          <h2 class="text-3xl md:text-4xl mb-5 font-extrabold">
            {{ props.title }}
          </h2>
          <p class="text-lg md:text-xl">
            {{ props.text }}
          </p>
        </div>
        
        <div
        :class="{
        'opacity-100 translate-x-0': isVisible,
        'opacity-0 translate-x-36': !isVisible,
      }"
        class="transition-all delay-300 duration-1000 ease-in-out relative rounded-2xl p-2 lg:w-1/2 flex pb-24 lg:pb-2 md:hidden flex-col justify-center lg:flex">
            <img class="lazy-image opacity-0 translate-x-36 transition-all duration-1000 ease-in-out w-full h-auto rounded-lg" v-lazy="props.img" alt="Moving Company Image">
        </div>
      </div>
  
    </div>
  </template>
  
  <script setup>
  const isVisible = ref(false)

  const props = defineProps({
  title:{
    type:String,
    default:''
  },
  text:{
    type:String,
    default:''
  },
  img:{
    default:''
  },

})


const scrollElement = ref(null)

const handleIntersection = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      isVisible.value = true
    }
  })
}

  
onMounted(() => {
  const observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.1,
  })
  if (scrollElement.value) observer.observe(scrollElement.value)
})

  onUnmounted(() => {
  if (scrollElement.value) observer.unobserve(scrollElement.value)
})
  
  </script>
  