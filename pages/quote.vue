<template>
  <div class="flex flex-col h-full">
    <Banner background="/imgs/get-quote-page-banner.jpg1.webp" class="h-[25rem] md:h-[30rem]"
      title="Request a free quote"
      text="Get a quick, no-obligation quote from our team. Simply fill out the form, and we'll provide a personalized estimate based on your needs." />

    <div class="w-full flex flex-col bg-primary-500 justify-center p-5 sm:p-10 ">
      <div class="container">
        <div class="flex flex-col">
          <h2 class="md:px-16 px-5 text-center font-bold text-black my-5 md:my-10">
            Fill Out The Form
          </h2>

          <div class="xl:px-56 md:px-10 px-5 flex justify-around my-10">
            <div class="flex flex-col gap-5 flex-1 items-center">
              <div :class="{
                'text-primary-500 bg-black': step === 1,
                'bg-black text-primary-500': step !== 1
              }" class="lg:h-20 lg:w-20 md:h-18 md:w-18 h-16 w-16 flex justify-center items-center font-bold text-3xl">
                1</div>
              <h2 class=" text-start font-jakarta font-bold text-black">
                Moving info
              </h2>
            </div>

            <div class="flex-1 pip md:translate-y-10 translate-y-8 mx-2 rounded-xl h-2 bg-black"></div>

            <div class="flex flex-col gap-5 flex-1 items-center">
              <div :class="{
                'text-primary-500 bg-black': step === 2,
                'bg-black text-primary-500': step !== 2,
                'opacity-50': step < 2
              }" class="lg:h-20 lg:w-20 md:h-18 md:w-18 h-16 w-16 flex justify-center items-center font-bold text-3xl">
                2</div>
              <h2 class="font-jakarta text-start font-bold text-black">
                Personal Detail
              </h2>
            </div>

            <div class="flex-1 pip md:translate-y-10 translate-y-8 mx-2 rounded-xl h-2 bg-black"></div>

            <div class="flex flex-col gap-5 flex-1  font-jakarta items-center">
              <div :class="{
                'text-primary-500 bg-black': step === 3,
                'bg-black   text-primary-500': step !== 3,
                'opacity-50': step < 3
              }" class="lg:h-20 lg:w-20 md:h-18 md:w-18 h-16 w-16 flex justify-center items-center font-bold text-3xl">
                3</div>
              <h2 class=" font-jakarta text-start font-bold text-black">
                Job done
              </h2>
            </div>
          </div>
        </div>

        <div class="bg-black w-full  lg:max-w-[880px] mx-auto rounded-md min-h-96 flex justify-center items-center">
          <!-- Step 3: Success Message -->
          <div class="flex flex-col items-center justify-center  gap-5 mt-5" v-if="isDone">
            <DotLottieVue class="w-full h-auto sm:w-[300px] sm:h-[300px]" autoplay loop
              src="https://lottie.host/5985b015-e571-4f7b-b9ac-212322831da2/vej1PvvYj0.json" />
            <h4
              class="text-primary-500  text-[18px] sm:text-4xl md:text-5xl text-center  font-jakarta sm:px-10 font-bold">
              Thank you for choosing us</h4>
            <p class="text-gray-400 text-xl sm:pb-5  sm:mb-16 font-jakarta font-bold">We will contact you shortly!</p>
          </div>

          <!-- Step 1: Moving Info -->
          <div v-else-if="step === 1"
            class=" flex flex-col lg:flex-row justify-center items-center md:p-5 flex-1 h-full">
            <div class="p-4 flex w-full   py-7  px-5 lg:px-2 flex-col gap-10 bg-black rounded-none">
              <div class="flex flex-col gap-5">
                <!-- Property Type Select -->


                <!-- ZIP Code Inputs -->
                <div class="flex gap-10  flex-col sm:flex-row justify-between">
                  <div class="flex md:flex-row flex-col gap-2   md:items-baseline w-full">
                    <label class="block   w-16 font-bold text-gray-100 font-jakarta text-xl">From</label>
                    <div class="flex-1">
                      <UInput type="text" v-model="quoteForm.fromZIP" @blur="validateField('fromZIP')"
                        @input="handleZipInput('fromZIP')" class="relative w-full" icon="i-carbon-location-heart-filled"
                        :inputClass="`
                                                  flex-1 rounded-[10px] placeholder:font-jakarta bg-[#171820] text-slate-300 ring-0 h-14
                                                  ${errors.fromZIP.status ? 'border-2  !border-red-500 focus:ring-red-500' : 'focus:ring-primary'}
                                              `" size="xl" placeholder="ZIP code" maxlength="5" />
                      <span v-if="errors.fromZIP.status" class="text-red-500 font-jakarta text-sm mt-1 block">
                        {{ errors.fromZIP.message }}
                      </span>
                    </div>
                  </div>

                  <div class="flex md:flex-row flex-col gap-2 md:items-baseline  w-full justify-between">
                    <label class="block  w-12 font-bold font-jakarta text-gray-100 text-xl">To</label>
                    <div class="flex-1">
                      <UInput type="text" v-model="quoteForm.toZIP" @blur="validateField('toZIP')"
                        @input="handleZipInput('toZIP')" class="relative w-full" icon="i-carbon-location-heart-filled"
                        :inputClass="`
                                                  flex-1 rounded-[10px] placeholder:font-jakarta bg-[#171820] text-slate-300 ring-0 h-14
                                                  ${errors.toZIP.status ? 'border-2 !border-red-500 focus:ring-red-500' : 'focus:ring-primary'}
                                              `" size="xl" placeholder="ZIP code" maxlength="5" />
                      <span v-if="errors.toZIP.status" class="text-red-500 font-jakarta text-sm mt-1 block">
                        {{ errors.toZIP.message }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex md:flex-row flex-col gap-2 md:items-baseline  w-full">
                <label class="block  w-16 font-bold font-jakarta text-gray-100 text-xl">Size</label>
                <div class="flex-1">
                  <div class="!font-jakarta">
                    <USelectMenu
                      :selectClass="`${showErrors && errors.type.status ? 'border-2 !border-red-500 focus:ring-red-500' : ''} flex-1 rounded-[10px] bg-[#171820] text-slate-300 ring-0 h-14`"
                      @update:model-value="quoteForm.type ? errors.type.status = false : null" v-model="quoteForm.type"
                      :options="houseTypes" class="flex-1 relative universal-placeholder" icon="i-carbon-building"
                      size="xl" placeholder="Select type" />

                    <span v-if="showErrors && errors.type.status" class="text-red-500  font-jakarta text-sm mt-1 block">
                      {{ errors.type.message }}
                    </span>
                  </div>
                </div>
              </div>
              <div class="flex md:flex-row flex-col gap-2 md:items-center w-full h-14">
                <label class="block w-16 font-bold text-gray-100 text-xl">Date</label>
                <Date v-model="quoteForm.date" class="w-full h-full" />

              </div>
              <!-- Navigation Buttons -->
              <div class="flex gap-2 md:gap-10 lg:gap-28 md:items-center w-full">
                <div class="flex-1">
                  <!-- Back button disabled on first step -->
                  <UButton aria-label="back" disabled
                    class="h-12 w-12 rounded-[10px] border border-primary-500 font-jakarta hover:bg-black hover:text-slate-300 text-black font-bold flex justify-center items-center opacity-50"
                    icon="i-carbon-arrow-left" />
                </div>
                <div class="flex-1 flex justify-end">
                  <UButton @click="nextStep(1)" size="xl" :label="'Next'"
                    class="px-3 md:px-7 rounded-[10px]  border border-primary-500 font-jakarta hover:bg-black hover:text-slate-300 flex justify-center items-center ml-auto lg:ml-0 text-black font-bold" />
                </div>
              </div>
            </div>
          </div>

          <!-- Step 2: Personal Details -->
          <div v-else-if="step === 2"
            class="bg-black flex flex-col lg:flex-row justify-center items-center md:p-5 flex-1 h-full">
            <div class="p-4 flex w-full  flex-col gap-10 bg-black rounded-none">
              <div class="flex flex-col gap-5">
                <!-- Name Inputs -->
                <div class="flex md:flex-row flex-col gap-2   md:items-center w-full">
                  <label class="block   w-20  font-bold font-jakarta text-gray-100 text-xl">Name</label>
                  <div class="flex gap-10 flex-1 md:flex-row flex-col">
                    <div class="flex-1 font-jakarta">
                      <UInput
                        :inputClass="`font-jakarta placeholder:font-jakarta ${errors.firstName.status ? 'border-2 placeholder:font-jakarta !border-red-500 focus:ring-red-500' : ''} flex-1 rounded-[10px] bg-[#171820] text-slate-300 ring-0 h-14`"
                        @blur="validateField('firstName')" v-model="quoteForm.firstName" class="flex-1 relative"
                        icon="i-carbon-user" size="xl" placeholder="First name" />
                      <span v-if="errors.firstName.status" class="text-red-500  font-jakarta text-sm mt-1 block">
                        {{ errors.firstName.message }}
                      </span>
                    </div>
                    <div class="flex-1">
                      <UInput
                        :inputClass="`font-jakarta placeholder:font-jakarta ${errors.lastName.status ? 'border-2 placeholder:font-jakarta  font-jakarta !border-red-500 focus:ring-red-500' : ''} flex-1 rounded-[10px] bg-[#171820] text-slate-300 ring-0 h-14`"
                        @blur="validateField('lastName')" v-model="quoteForm.lastName" class="flex-1 relative"
                        icon="i-carbon-user" size="xl" placeholder="Last name" />
                      <span v-if="errors.lastName.status" class="text-red-500 font-jakarta text-sm mt-1 block">
                        {{ errors.lastName.message }}
                      </span>
                    </div>
                  </div>
                </div>

                <!-- Email Input -->
                <div class="flex md:flex-row flex-col gap-2  md:items-center w-full">
                  <label class="block   w-20 font-bold font-jakarta text-gray-100 text-xl">E-mail</label>
                  <div class="flex-1">
                    <UInput @blur="validateField('email')" v-model="quoteForm.email" class="flex-1 relative"
                      icon="i-carbon-email"
                      :inputClass="` font-jakarta placeholder:font-jakarta ${errors.email.status ? 'border-2 placeholder:font-jakarta !border-red-500 focus:ring-red-500' : ''} flex-1 rounded-[10px] bg-[#171820] text-slate-300 ring-0 h-14`"
                      size="xl" placeholder="Someone@example.com" />
                    <span v-if="errors.email.status" class="text-red-500 font-jakarta text-sm mt-1 block">
                      {{ errors.email.message }}
                    </span>
                  </div>
                </div>

                <!-- Mobile Input -->
                <div class="flex md:flex-row flex-col gap-2   md:items-center w-full">
                  <label class="block   w-20 font-bold font-jakarta text-gray-100 text-xl">Mobile</label>
                  <div class="flex-1">
                    <UInput type="tel" v-model="quoteForm.mobile" @blur="validateField('mobile')"
                      @input="handleMobileInput" class="relative w-full" icon="i-carbon-phone-filled" :inputClass="`
                               flex-1 rounded-[10px] font-jakarta placeholder:font-jakarta bg-[#171820] text-slate-300 ring-0 h-14
                               ${errors.mobile.status ? 'border-2 !border-red-500 focus:ring-red-500' : 'focus:ring-primary'}
                                     `" size="xl" placeholder="Enter Mobile Number" maxlength="15" />
                    <span v-if="errors.mobile.status" class="text-red-500 font-jakarta text-sm mt-1 block">
                      {{ errors.mobile.message }}
                    </span>
                  </div>
                </div>
              </div>

              <!-- Navigation Buttons -->
              <div class="flex gap-2 md:gap-10  md:items-center w-full">
                <div class="flex-1">
                  <UButton @click="step -= 1"
                    class="h-12 w-12 rounded-[10px] border border-primary-500 font-jakarta hover:bg-black hover:text-slate-300 text-black font-bold flex justify-center items-center"
                    icon="i-carbon-arrow-left" />
                </div>
                <div class="flex-1 flex justify-end">
                  <UButton :loading="isLoading" @click="submit" size="xl" :label="'Submit'"
                    class="px-3 md:px-7 rounded-[10px]  border border-primary-500 font-jakarta hover:bg-black hover:text-slate-300 flex justify-center items-center ml-auto lg:ml-0 text-black font-bold" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: "Get a Free Moving Quote - Instant Estimates for Your Move",
  meta: [
    { name: "description", content: " Request a free moving quote online in minutes. Get fast, accurate estimates for local or long-distance moves. No obligation. Start your move today. " },
  ]
})


import { ref, onMounted, onBeforeUnmount, watch, nextTick } from 'vue';
import { reactive } from "vue";
import { useRoute } from "vue-router";
import { DotLottieVue } from "@lottiefiles/dotlottie-vue";

const step = ref(1);
const isDone = ref(false);
const isLoading = ref(false);
const showErrors = ref(false);

const houseTypes = [
  { value: "studio", label: "Studio" },
  { value: "one", label: "One bedroom" },
  { value: "two", label: "Two bedrooms" },
  { value: "three", label: "Three bedrooms" },
  { value: "four", label: "Four bedrooms" },
  { value: "five", label: "Five bedrooms" },
  { value: "six", label: "Six bedrooms" },
  { value: "seven", label: "Seven bedrooms" },
  { value: "office", label: "Office" },
  { value: "few", label: "Few Items" },
  { value: "20ft", label: "20 ft Container" },
  { value: "40ft", label: "40 ft Container" },
  { value: "other", label: "Other" },
];

const route = useRoute();

const quoteForm = ref({
  firstName: "",
  lastName: "",
  email: "",
  mobile: "",
  customer_id: "",
  type: "",
  size: "",
  rooms: "",
  floor: "",
  quote_id: "",
  state: "",
  city: "",
  elevator: false,
  fromStreet: "",
  fromZIP: route.query.from || "",
  toStreet: "",
  toZIP: route.query.to || "",
  date: new Date(),
});

const errors = reactive({
  firstName: { status: false, message: "Please enter a valid first name (letters only)" },
  lastName: { status: false, message: "Please enter a valid last name (letters only)" },
  email: { status: false, message: "Please enter a valid email address" },
  mobile: { status: false, message: "Please enter a valid mobile number" },
  type: { status: false, message: "Please select a property type" },
  fromZIP: { status: false, message: "Please enter a 5-digit ZIP code" },
  toZIP: { status: false, message: "Please enter a 5-digit ZIP code" },
  date: { status: false, message: "Please select a valid date" }
});

const handleZipInput = (field) => {
  quoteForm.value[field] = quoteForm.value[field].replace(/\D/g, '').slice(0, 5);
};

const validateName = (name) => {
  const nameRegex = /^[A-Za-z]+$/;
  return nameRegex.test(name);
};
const handleMobileInput = () => {
  // Preserve + at start if present
  if (quoteForm.value.mobile.startsWith('+')) {
    quoteForm.value.mobile = '+' + quoteForm.value.mobile.slice(1).replace(/\D/g, '');
  } else {
    quoteForm.value.mobile = quoteForm.value.mobile.replace(/\D/g, '');
  }
};




const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validateMobile = (mobile) => {
  if (!mobile) return false;

  // Clean the input by removing all non-digit characters except leading +
  const cleaned = mobile.startsWith('+')
    ? '+' + mobile.slice(1).replace(/\D/g, '')
    : mobile.replace(/\D/g, '');

  // Check for international format (+ followed by 10-15 digits total)
  if (cleaned.startsWith('+')) {
    const digitCount = cleaned.slice(1).length;
    return digitCount >= 10 && digitCount <= 15;
  }

  // Check for regular 10-digit format
  return cleaned.length === 10 && /^\d+$/.test(cleaned);
};

const validateZIP = (zip) => {
  return zip.length === 5 && /^\d+$/.test(zip);
};
const validateField = (field) => {
  switch (field) {
    case 'firstName':
      errors.firstName.status = !validateName(quoteForm.value.firstName);
      break;
    case 'lastName':
      errors.lastName.status = !validateName(quoteForm.value.lastName);
      break;
    case 'email':
      errors.email.status = !validateEmail(quoteForm.value.email);
      break;
    case 'mobile':
      errors.mobile.status = !validateMobile(quoteForm.value.mobile);
      break;
    case 'type':
      errors.type.status = !quoteForm.value.type;
      break;
    case 'fromZIP':
      errors.fromZIP.status = !validateZIP(quoteForm.value.fromZIP);
      break;
    case 'toZIP':
      errors.toZIP.status = !validateZIP(quoteForm.value.toZIP);
      break;
    case 'date':
      // Simple validation like other fields - just check if exists
      errors.date.status = !quoteForm.value.date;
      break;
  }
};

const nextStep = (currentStep) => {
  showErrors.value = true;

  // Validate all required fields for this step
  validateField('type');
  validateField('fromZIP');
  validateField('toZIP');
  validateField('date');

  // Only proceed if no errors
  if (!errors.type.status &&
    !errors.fromZIP.status &&
    !errors.toZIP.status &&
    !errors.date.status) {
    step.value += 1;
    showErrors.value = false;
  }
};
const submit = async () => {
  // Validate all fields
  validateField('firstName');
  validateField('lastName');
  validateField('email');
  validateField('mobile');

  // Check if any errors exist
  const hasErrors = Object.values(errors).some(error => error.status);
  if (hasErrors) {
    return;
  }

  isLoading.value = true;

  try {
    const response = await $fetch("https://api.goodview-moving.com/api/quote", {
      method: "POST",
      body: {
        firstName: quoteForm.value.firstName,
        lastName: quoteForm.value.lastName,
        email: quoteForm.value.email,
        mobile: quoteForm.value.mobile,
        type: quoteForm.value.type,
        note: quoteForm.value.note || "",
        elevator: quoteForm.value.elevator,
        floor: quoteForm.value.floor || "",
        customer_id: quoteForm.value.customer_id || "",
        inOut: quoteForm.value.inOut || "",
        state: quoteForm.value.state || "",
        from_zip: quoteForm.value.fromZIP,
        to_zip: quoteForm.value.toZIP,
        from_address: quoteForm.value.fromStreet || "",
        to_address: quoteForm.value.toStreet || "",
        date: quoteForm.value.date,
      },
    });

    if (response) {
      isDone.value = true;
      step.value = 3;
    }
  } catch (error) {
    console.error("Error submitting the form:", error);
  } finally {
    isLoading.value = false;
  }
};
watch(() => quoteForm.date, (newDate) => {
  if (flatpickrInstance) {
    flatpickrInstance.setDate(newDate, false);
  }
});

</script>
