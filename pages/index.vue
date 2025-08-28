<template>
  <div class="flex flex-col h-full">
    <Banner background="/imgs/banner-mini.webp" class="lg:h-[652px] "
      title="Reliable, Affordable, and Hassle-" subtitle="Free Moving Services!" text="Make every step seamless & professional.
      We offer affordable moving with transparent costs to fit your budget.">

      <template #body="isVisible">
        <QuoteInputs :isVisible="isVisible.isVisible" />
      </template>


    </Banner>

    <div class="mx-auto container px-5  my-[40px] itmes-center overflow-hidden bg-white">
      <Trusted2 />
      <div class="flex flex-wrap p-0 gap-1 lg:gap-10 justify-between">
        <!-- Image Left -->
        <div :class="{
          'opacity-100 translate-x-0': isVisible,
          'opacity-0 translate-x-36': !isVisible,
        }"
          class="transition-all delay-300 duration-1000 ease-in-out relative rounded-2xl p-2 w-full lg:w-1/2 flex pb-8 lg:pb-[4.5rem] flex-col justify-center">
          <img alt="truck image" class="w-full h-auto rounded-none" v-lazy="'/imgs/new_truck.webp'" />
        </div>
        <!-- Text Right -->
        <div ref="scrollElement" :class="{
          'opacity-100 translate-x-0': isVisible,
          'opacity-0 -translate-x-36': !isVisible,
        }"
          class="transition-all delay-300 duration-1000 ease-in-out flex flex-col gap-2 w-full lg:w-1/2 md:pb-56 pb-8 lg:pt-16 flex-1">
          <h2 class=" font-outfit md:text-[52px] leading-[1.2em] mb-5 font-[700]">Decades of Moving Experience, Built on
            Trust</h2>
          <p class="text-lg font-rubik md:text-[18px] md:font-[300] md:leading-8">
            Good View Moving & Storage started as a family business in New Jersey and is now a third-generation
            full-service moving company. With years of experience in professional moving services, we've built a
            reputation
            for
            reliable moves, both local and long-distance.
          </p>
          <p class="text-lg font-rubik md:text-[18px] md:font-[300] md:leading-8">
            Our expert team ensures a smooth moving process, offering everything from packing to secure storage
            solutions. But don't just take our word for it—our Good View Moving reviews speak for themselves.
          </p>

        </div>
      </div>
    </div>
    <Services />

  </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

useHead({
  title: " Reliable and Efficient Moving Services",
  meta: [
    {
      name: "description",
      content:
        "Good View Moving offers reliable and efficient moving services for every type of move. Trust our experienced team to ensure a smooth move. "
    }
  ]
})

const isVisible = ref(false)
const scrollElement = ref(null)
let observer = null

const handleIntersection = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      isVisible.value = true
      // Optional: Unobserve after first appearance
      observer.unobserve(entry.target)
    }
  })
}

onMounted(() => {
  observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.1
  })
  if (scrollElement.value) {
    observer.observe(scrollElement.value)
  }
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})
</script>