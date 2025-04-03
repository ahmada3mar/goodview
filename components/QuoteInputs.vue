<template>
  <div class="bg-[#f2f2f2]  px-[20px] sm:px-[40px] rounded-[10px] py-[20px]">
    <h2 class="font-jakarta font-[600] text-center sm:text-start  text-[28px]  mb-[10px] text-black">Free Moving
      Estimate</h2>
    <div :class="{
      'opacity-100 translate-y-0': props.isVisible,
      'opacity-0 translate-y-36': !props.isVisible,
    }" class="transition-all duration-1000 delay-150 ease-in-out flex flex-wrap flex-col md:flex-row gap-4 md:gap-2 w-full
    mb-5
        md:items-start
        justify-center items-center">
      <div class="flex flex-col">
        <UInput :inputClass="errors.from ? '!border-red-500 focus:ring-red-500' : ''"
          @update:modelValue="errors.from = false" type="text" v-model="fromZIP" size="lg" placeholder="From zip code"
          maxlength="5"
          :ui="{ base: 'relative block md:w-80   focus:border-primary-500 h-12 disabled:cursor-not-allowed bg-[#f2f2f2] disabled:opacity-75 border-0 border-primary-500 !rounded-[10px]', placeholder: 'placeholder-gray-500' }">
          <template #trailing>
            <UIcon role="button" name="i-carbon-location" class="w-5  h-5 font-jakarta  text-black-400" />
          </template>
        </UInput>
        <span v-if="errors.from" class="text-red-500 font-jakarta font-bold">Please enter a valid ZIP code</span>
      </div>

      <div class="flex flex-col">

        <UInput @update:modelValue="errors.to = false"
          :inputClass="errors.to ? '!border-red-500 focus:ring-red-500' : ''" v-model="toZIP" size="lg"
          placeholder="To zip code" type="text" maxlength="5"
          :ui="{ base: 'relative block md:w-80  focus:border-primary-500 h-12 bg-[#f2f2f2]  disabled:cursor-not-allowed disabled:opacity-75 border-0 border-primary-500 !rounded-[10px]', placeholder: 'placeholder-gray-500' }">
          <template #trailing>
            <UIcon role="button" name="i-carbon-location" class="w-5 h-5 font-jakarta  text-black-400" />
          </template>
        </UInput>
        <span v-if="errors.to" class="text-red-500 font-jakarta  font-bold">Please enter a valid ZIP code</span>
      </div>
      <UButton @click="getQuote"
        class="font-bold text-center justify-center rounded-[10px]  font-jakarta px-10 text-black border-1 border-gray-900 h-12 w-auto md:w-[40rem] lg:w-auto">
        Get a free quote
        <UIcon name="i-carbon-arrow-right" class="w-5 h-5 " />

      </UButton>



    </div>
    <!-- <div :class="{
        'opacity-100 translate-y-0': props.isVisible,
        'opacity-0 translate-y-36': !props.isVisible,
      }" class="transition-all duration-1000 delay-150 ease-in-out flex flex-wrap flex-col md:flex-row gap-4 md:gap-2
        md:items-start
        justify-center items-center">

        <ULink to="tel:+19737821339"
        class="font-bold text-center font-jakarta
         justify-center  px-10  items-center flex rounded-none
          border-1 text-black border-primary
          h-12 w-full bg-gray-100">
          <UIcon name="i-carbon-phone" class="w-5 h-5 mx-2" />
          Get free quote by phone
        </ULink>
      </div> -->

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