<template>
  <div class="mx-auto container px-5 overflow-hidden bg-white">
    <div class="flex flex-wrap p-0 gap-1 lg:gap-10 justify-between">
      <!-- Left Column: Text content with spans and paragraphs -->
      <div ref="scrollElement" :class="{
        'opacity-100 translate-x-0': isVisible,
        'opacity-0 -translate-x-36': !isVisible,
      }" class="transition-all delay-300 duration-1000 ease-in-out flex flex-col gap-2 md:pb-56 pb-8 pt-16 flex-1">
        <h2 class="text-3xl font-jakarta md:text-4xl mb-5 font-extrabold">
          {{ props.title }}
        </h2>
        <p class="text-lg font-rubik md:text-[18px] md:font-[300] md:leading-8">
          {{ props.text }}
        </p>

        <!-- Grouping span and text together -->
        <div class="text-lg font-rubik md:text-[18px]  md:font-[300] md:leading-8">
          <span class="font-semibold md:text-[18px] md:font-[400] md:leading-8">
            {{ props.spantext }}
          </span>
          <span>{{ props.subtext }}</span>
        </div>

        <div class="text-lg font-rubik md:text-[18px]  md:font-[300] md:leading-8">
          <span class="font-semibold md:text-[18px] md:font-[400] md:leading-8">
            {{ props.spantext2 }}
          </span>
          <span>{{ props.subtext2 }}</span>
        </div>

        <div class="text-lg font-rubik md:text-[18px]  md:font-[300] md:leading-8">
          <span class="font-semibold md:text-[18px] md:font-[400] md:leading-8">
            {{ props.spantext3 }}
          </span>
          <span>{{ props.subtext3 }}</span>
        </div>

        <div class="text-lg font-rubik md:text-[18px]  md:font-[300] md:leading-8">
          <span class="font-semibold md:text-[18px] md:font-[400] md:leading-8">
            {{ props.spantext4 }}
          </span>
          <span>{{ props.subtext4 }}</span>
        </div>

        <div class="text-lg font-rubik md:text-[18px] md:font-[300] md:leading-8">
          <span class="font-semibold md:text-[18px] md:font-[400] md:leading-8">
            {{ props.spantext5 }}
          </span>
          <span>{{ props.subtext5 }}</span>
        </div>

        <div class="text-lg font-rubik md:text-[18px]  md:font-[300] md:leading-8">
          <span class="font-semibold md:text-[18px] md:font-[400] md:leading-8">
            {{ props.spantext6 }}
          </span>
          <span>{{ props.subtext6 }}</span>
        </div>
      </div>

      <!-- Right Column: Image section -->
      <div :class="{
        'opacity-100 translate-x-0': isVisible,
        'opacity-0 translate-x-36': !isVisible,
      }"
        class="transition-all delay-300 duration-1000 ease-in-out relative rounded-2xl p-2 lg:w-1/2 flex pb-24 lg:pb-2 md:hidden flex-col justify-center lg:flex">
        <img
          class="lazy-image opacity-0 translate-x-36 transition-all duration-1000 ease-in-out w-full h-auto rounded-none"
          v-lazy="props.img" alt="Moving Company Image" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isVisible = ref(false);

const props = defineProps({
  title: { type: String, default: '' },
  text: { type: String, default: '' },
  subtext: { type: String, default: '' },
  subtext2: { type: String, default: '' },
  subtext3: { type: String, default: '' },
  subtext4: { type: String, default: '' },
  subtext5: { type: String, default: '' },
  subtext6: { type: String, default: '' },
  spantext: { type: String, default: '' },
  spantext2: { type: String, default: '' },
  spantext3: { type: String, default: '' },
  spantext4: { type: String, default: '' },
  spantext5: { type: String, default: '' },
  spantext6: { type: String, default: '' },
  img: { default: '' },
});

const scrollElement = ref(null);

const handleIntersection = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      isVisible.value = true;
    }
  });
};

onMounted(() => {
  const observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.1,
  });
  if (scrollElement.value) observer.observe(scrollElement.value);
});

onUnmounted(() => {
  if (scrollElement.value) observer.unobserve(scrollElement.value);
});
</script>
