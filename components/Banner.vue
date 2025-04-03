<template>
  <div v-lazy:background-image="props.background" :class="`home-background bg-cover bg-center relative`">
    <div class="absolute inset-0 bg-gradient-to-t to-black from-primary-500/50"></div>

    <div class="relative flex flex-col max-w-[1360px] mx-auto items-center justify-center gap-10 px-5 py-10 h-full">
      <!-- Text Content -->
      <div class="flex flex-col items-center gap-5 w-full text-center">
        <h1 :class="{
          'opacity-100 translate-y-0': isVisible,
          'opacity-0 -translate-y-5': !isVisible,
        }"
          class="transition-all duration-700 ease-in-out text-primary-500 text-3xl md:text-4xl lg:text-5xl font-extrabold font-jakarta">
          {{ props.title }}
        </h1>
        <span v-if="props.subtitle" :class="{
          'opacity-100 translate-y-0': isVisible,
          'opacity-0 -translate-y-5': !isVisible,
        }"
          class="transition-all duration-700 ease-in-out text-primary-500 text-3xl md:text-4xl lg:text-5xl font-extrabold font-jakarta">
          {{ props.subtitle }}
        </span>

        <h2 :class="{
          'opacity-100': isVisible,
          'opacity-0': !isVisible,
        }"
          class="max-w-3xl transition-all duration-1000 delay-150 font-jakarta ease-in-out text-xl  leading-[36px] md:text-[24px] font-[300] lg:text-[24px] text-white">
          {{ props.text }}
        </h2>
        <h2 :class="{
          'opacity-100': isVisible,
          'opacity-0': !isVisible,
        }"
          class="max-w-3xl transition-all duration-1000 delay-150 font-jakarta ease-in-out text-xl  leading-[36px] md:text-[24px] font-[300] lg:text-[24px] text-white">
          {{ props.subtext }}
        </h2>
      </div>

      <!-- Input Fields and Button -->
      <slot name="body" :isVisible="isVisible" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const isVisible = ref(false);

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true;
  }, 400);
});

const props = defineProps({
  background: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    default: "",
  },
  subtitle: { // New optional subtitle prop
    type: String,
    default: "",
  },
  text: {
    type: String,
    default: "",
  },
  subtext: {
    type: String,
    default: "",
  },
});
</script>

<style scoped>
.home-background {
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
</style>
