<template>
  <div class="flex flex-col h-full">
    <Banner background="/imgs/banner-mini.webp" class="lg:h-[calc(71dvh-2rem)] "
      title="Reliable, Affordable, and Hassle-Free Moving Services!"
      text="Make every step seamless & professional.
      We offer affordable moving with transparent costs to fit your budget.">

      <template #body="isVisible">
        <QuoteInputs :isVisible="isVisible.isVisible" />
      </template>


    </Banner>

    <div class="mx-auto container px-5 overflow-hidden bg-white">
  <div class="flex flex-wrap p-0 gap-1 lg:gap-10 justify-between">
    <!-- Text Section -->
    <div ref="scrollElement" :class="{
      'opacity-100 translate-x-0': isVisible,
      'opacity-0 -translate-x-36': !isVisible,
    }" class="transition-all delay-300 duration-1000 ease-in-out flex flex-col gap-2 md:pb-56 pb-8 pt-16 flex-1">
      <h2 class=" font-jakarta md:text-4xl mb-5 font-extrabold">Decades of Moving Experience, Built on Trust</h2>
      <p class="text-lg font-rubik md:text-[18px] md:font-[300] md:leading-8">
        Good View Moving & Storage started as a family business in New Jersey and is now a third-generation full-service moving company. With years of experience in professional moving services, we've built a reputation for reliable moves, both local and long-distance.
      </p>
      <p class="text-lg font-rubik md:text-[18px] md:font-[300] md:leading-8">
        Our expert team ensures a smooth moving process, offering everything from packing to secure storage solutions. But don't just take our word for it—our Good View Moving reviews speak for themselves.
      </p>
      <p class="text-lg font-rubik md:text-[18px] md:font-[300] md:leading-8">
        <b>Need a stress-free move</b> ?  <b><ULink  target="_blank" to="/quote"
            class="font-[500]  underline ">
            Get a free moving quote today!</ULink></b>
      </p>
    </div>

    <!-- Image Section -->
    <div :class="{
      'opacity-100 translate-x-0': isVisible,
      'opacity-0 translate-x-36': !isVisible,
    }" class="transition-all delay-300 duration-1000 ease-in-out relative rounded-2xl p-2 lg:w-1/2 flex pb-24 lg:pb-2 md:hidden flex-col justify-center lg:flex">
      <img alt="truck image"
           class="w-full h-auto rounded-none"
           v-lazy="'/imgs/new_truck.webp'" />
    </div>
  </div>
</div>
    <Services />

  </div>
</template>
<script>
import { ref, onMounted, onUnmounted } from 'vue';

export default {
  setup() {
    const isVisible = ref(false);
    const scrollElement = ref(null);
    let observer = null;

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isVisible.value = true;
          // Optional: Unobserve after first appearance
          observer.unobserve(entry.target);
        }
      });
    };

    onMounted(() => {
      observer = new IntersectionObserver(handleIntersection, {
        threshold: 0.1,
      });
      if (scrollElement.value) {
        observer.observe(scrollElement.value);
      }
    });

    onUnmounted(() => {
      if (observer) {
        observer.disconnect();
      }
    });

    return {
      isVisible,
      scrollElement
    };
  }
};
</script>