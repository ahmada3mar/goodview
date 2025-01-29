<template>
  <div>

    <div :class="{
      'opacity-100 translate-y-0': props.isVisible,
      'opacity-0 translate-y-36': !props.isVisible,
    }" class="transition-all duration-1000 delay-150 ease-in-out flex flex-wrap flex-col md:flex-row gap-4 md:gap-2 w-full 
        md:items-start
        justify-center items-center">
      <div class="flex flex-col">
        <UInput :inputClass="errors.from ? '!border-red-500 focus:ring-red-500' : ''"
          @update:modelValue="errors.from = false" type="text" v-model="fromZIP" size="lg" placeholder="From zip code"
          :ui="{ base: 'relative block w-80  focus:border-primary-500 disabled:cursor-not-allowed disabled:opacity-75 border-4 border-primary-500', placeholder: 'placeholder-gray-500' }">
          <template #trailing>
            <UIcon role="button" name="i-carbon-location" class="w-5 h-5 text-gray-500" />
          </template>
        </UInput>
        <span v-if="errors.from" class="text-red-500 font-bold">Please enter a valid ZIP code</span>
      </div>

      <div class="flex flex-col">

        <UInput @update:modelValue="errors.to = false"
          :inputClass="errors.to ? '!border-red-500 focus:ring-red-500' : ''" v-model="toZIP" size="lg"
          placeholder="To zip code" type="text"
          :ui="{ base: 'relative block w-80 focus:border-primary-500 disabled:cursor-not-allowed disabled:opacity-75 border-4 border-primary-500', placeholder: 'placeholder-gray-500' }">
          <template #trailing>
            <UIcon role="button" name="i-carbon-location" class="w-5 h-5 text-gray-500" />
          </template>
        </UInput>
        <span v-if="errors.to" class="text-red-500 font-bold">Please enter a valid ZIP code</span>
      </div>
      <UButton @click="getQuote" label="Get a free quote"
        class="font-bold text-center justify-center  px-10 text-black border-1 border-gray-900 h-12 w-80 md:w-[40rem] lg:w-auto" />

      <div :class="{
        'opacity-100 translate-y-0': props.isVisible,
        'opacity-0 translate-y-36': !props.isVisible,
      }" class="transition-all duration-1000 delay-150 ease-in-out flex flex-wrap flex-col md:flex-row gap-4 md:gap-2 w-full 
        md:items-start
        justify-center items-center">

        <a class="text-black font-semibold" href="">Call us now +1 973-782-1339</a>

      </div>

      
    </div>

  </div>
</template>


<script setup>



const props = defineProps({

  isVisible: {
    type: Boolean,
    default: false
  },
})


const fromZIP = ref('')
const toZIP = ref('')
const errors = reactive({
  to: null,
  from: null
})


const getQuote = () => {

  if (!fromZIP.value) {
    errors.from = true
  }

  if (!toZIP.value) {
    errors.to = true
  }

  if (!toZIP.value || !fromZIP.value) return;


  useRouter().push({ path: '/quote', query: { from: fromZIP.value, to: toZIP.value } })
}

</script>