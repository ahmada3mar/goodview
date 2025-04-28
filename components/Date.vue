<script setup lang="js">
import { format } from 'date-fns'
import { ref } from 'vue';

import { defineEmits } from 'vue';

const props = defineProps({
  modelValue: {
    default:new Date()

  }, // Automatically linked to v-model
});

const emit = defineEmits(['update:modelValue']);

const updateValue = (event) => {
  emit('update:modelValue', event);
};


</script>

<template>
  <UPopover :ui="{trigger:'inline-flex w-full h-full'}" :popper="{ placement: 'bottom-start' }">
    <UButton :ui="{block:'w-full flex items-center h-full' ,

      color:{
        black:{
        solid:'hadow-sm text-white dark:text-gray-900 bg-[#171820] hover:bg-gray-800 disabled:bg-[#171820] aria-disabled:bg-[#171820] dark:bg-white dark:hover:bg-gray-100 dark:disabled:bg-white dark:aria-disabled:bg-white focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400'
      }
    }
    }" block color="black"  :label="format(modelValue, 'd MMM, yyy')"  icon="i-heroicons-calendar-days-20-solid"  />

    <template #panel="{ close }">
      <DatePicker @update:model-value="e=>updateValue(e)"  :model-value="props.modelValue" is-required @close="close" />
    </template>
  </UPopover>
</template>

