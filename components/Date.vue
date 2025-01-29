<script setup lang="js">
import { format } from 'date-fns'
import { ref } from 'vue';

import { defineProps, defineEmits } from 'vue';

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
  <UPopover :popper="{ placement: 'bottom-start' }">
    <UButton size="xl" color="black"  :label="format(modelValue, 'd MMM, yyy')"  icon="i-heroicons-calendar-days-20-solid"  />

    <template #panel="{ close }">
      <DatePicker @update:model-value="e=>updateValue(e)"  :model-value="props.modelValue" is-required @close="close" />
    </template>
  </UPopover>
</template>

