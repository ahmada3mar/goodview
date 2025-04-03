<template>
  <div class="flex flex-col h-full">
      <Banner background="/assets/quote.webp" class="h-[25rem] md:h-[30rem]" title="Request a free quote"
          text="Get a quick, no-obligation quote from our team. Simply fill out the form, and we'll provide a personalized estimate based on your needs." />

      <div class="w-full flex flex-col bg-primary-500 justify-center p-5 sm:p-10 mb-96">
          <div class="container">
              <div class="flex flex-col">
                  <h2 class="md:px-16 px-5 lg:text-6xl text-4xl text-start font-bold text-black my-5 md:my-10">
                      Fill Out The Form
                  </h2>

                  <div class="xl:px-56 md:px-10 px-5 flex justify-around my-10">
                      <div class="flex flex-col gap-5 flex-1 items-center">
                          <div :class="{
                              'text-primary-500 bg-black': step === 1,
                              'bg-black text-primary-500': step !== 1
                          }" class="lg:h-20 lg:w-20 md:h-18 md:w-18 h-16 w-16 flex justify-center items-center font-bold text-3xl">
                              1</div>
                          <h2 class="md:text-lg text-sm text-start font-jakarta font-bold text-black">
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
                          <h2 class="md:text-lg text-sm font-jakarta text-start font-bold text-black">
                              Personal Detail
                          </h2>
                      </div>

                      <div class="flex-1 pip md:translate-y-10 translate-y-8 mx-2 rounded-xl h-2 bg-black"></div>

                      <div class="flex flex-col gap-5 flex-1 items-center">
                          <div :class="{
                              'text-primary-500 bg-black': step === 3,
                              'bg-black   text-primary-500': step !== 3,
                              'opacity-50': step < 3
                          }" class="lg:h-20 lg:w-20 md:h-18 md:w-18 h-16 w-16 flex justify-center items-center font-bold text-3xl">
                              3</div>
                          <h2 class="md:text-lg text-sm font-jakarta text-start font-bold text-black">
                              Job done
                          </h2>
                      </div>
                  </div>
              </div>

              <div class="bg-black w-full -mb-72 min-h-96 flex justify-center items-center">
                  <!-- Step 3: Success Message -->
                  <div class="flex flex-col items-center justify-center gap-5 mt-5" v-if="isDone">
                      <DotLottieVue style="height: 400px; width: 400px" autoplay loop
                          src="https://lottie.host/5985b015-e571-4f7b-b9ac-212322831da2/vej1PvvYj0.json" />
                      <h4 class="text-primary-500 text-5xl font-bold">Thank you for choosing us</h4>
                      <p class="text-gray-400 text-xl pb-5 mb-16 font-bold">We will contact you shortly!</p>
                  </div>

                  <!-- Step 1: Moving Info -->
                  <div v-else-if="step === 1" class="bg-black flex flex-col lg:flex-row justify-center items-center md:p-5 flex-1 h-full">
                      <div class="p-8 flex w-full lg:w-3/4 pl-8 md:pl-18 xl:pl-36 flex-col gap-10 bg-black rounded-none">
                          <div class="flex flex-col gap-5">
                              <!-- Property Type Select -->


                              <!-- ZIP Code Inputs -->
                              <div class="flex gap-10 justify-between">
                                  <div class="flex md:flex-row flex-col gap-2   md:items-baseline w-full">
                                      <label class="block w-20 font-bold text-gray-100 font-jakarta text-xl">From</label>
                                      <div class="flex-1">
                                          <UInput
                                              type="text"
                                              v-model="quoteForm.fromZIP"
                                              @blur="validateField('fromZIP')"
                                              @input="handleZipInput('fromZIP')"
                                              class="relative w-full"
                                              icon="i-carbon-location-heart-filled"

                                              :inputClass="`
                                                  flex-1 rounded-[10px] bg-[#171820] text-slate-300 ring-0 h-14
                                                  ${errors.fromZIP.status ? 'border-2 !border-red-500 focus:ring-red-500' : 'focus:ring-primary'}
                                              `"
                                              size="xl"
                                              placeholder="ZIP code"
                                              maxlength="5" />
                                          <span v-if="errors.fromZIP.status" class="text-red-500 text-sm mt-1 block">
                                              {{ errors.fromZIP.message }}
                                          </span>
                                      </div>
                                  </div>

                                  <div class="flex md:flex-row flex-col gap-2 md:items-baseline  w-full justify-between">
                                      <label class="block w-20 font-bold font-jakarta text-gray-100 text-xl">To</label>
                                      <div class="flex-1">
                                          <UInput
                                              type="text"
                                              v-model="quoteForm.toZIP"
                                              @blur="validateField('toZIP')"
                                              @input="handleZipInput('toZIP')"
                                              class="relative w-full"
                                              icon="i-carbon-location-heart-filled"
                                              :inputClass="`
                                                  flex-1 rounded-[10px] bg-[#171820] text-slate-300 ring-0 h-14
                                                  ${errors.toZIP.status ? 'border-2 !border-red-500 focus:ring-red-500' : 'focus:ring-primary'}
                                              `"
                                              size="xl"
                                              placeholder="ZIP code"
                                              maxlength="5" />
                                          <span v-if="errors.toZIP.status" class="text-red-500 text-sm mt-1 block">
                                              {{ errors.toZIP.message }}
                                          </span>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div class="flex md:flex-row flex-col gap-2 md:items-baseline  w-full">
                                  <label class="block w-20 font-bold font-jakarta text-gray-100 text-xl">Size</label>
                                  <div class="flex-1">
                                      <USelectMenu
  :selectClass="`${showErrors && errors.type.status ? 'border-2 !border-red-500 focus:ring-red-500' : ''} flex-1 rounded-[10px] bg-[#171820] text-slate-300 ring-0 h-14`"
  @update:model-value="quoteForm.type ? errors.type.status = false : null"
  v-model="quoteForm.type"
  :options="houseTypes"
  class="flex-1 relative"
  icon="i-carbon-building"
  size="xl"
  placeholder="Select type" />
<span v-if="showErrors && errors.type.status" class="text-red-500 text-sm mt-1 block">
  {{ errors.type.message }}
</span>

                                  </div>
                              </div>
                              <div class="flex md:flex-row flex-col gap-2 md:items-center w-full">
  <label class="block w-20 font-bold text-gray-100  text-xl">Date</label>
  <div class="flatpickr-wrapper flex-1 relative" :key="'date-input-'+step">
    <div class="relative">
      <input
        ref="dateInput"
        :class="[
          showErrors && errors.date.status ? '!border-2 !border-red-500' : 'border border-gray-700',
          'flex-1 rounded-[10px] bg-[#171820] text-slate-300 px-4 py-3 pl-12',
          'focus:ring-2 focus:ring-primary-500 focus:border-primary-500 focus:outline-none',
          'w-full min-w-[200px] md:[600px] lg:w-[727px]'
        ]"
        type="text"
        placeholder="Select moving date"
        data-input
      />
      <div class="absolute left-3 top-[56%] transform -translate-y-1/2 text-gray-400">
        <UIcon name="i-heroicons-calendar-days" class=" w-9 h-[27px]" />
      </div>
    </div>
    <span v-if="showErrors && errors.date.status" class="text-red-500 text-sm mt-1 block">
      {{ errors.date.message }}
    </span>
  </div>
</div>
                          <!-- Navigation Buttons -->
                          <div class="flex gap-2 md:gap-10 lg:gap-28 md:items-center w-full">
                              <div class="flex-1">
                                  <!-- Back button disabled on first step -->
                                  <UButton
                                      disabled
                                      class="h-12 w-12 rounded-[10px] border border-primary-500 hover:bg-black hover:text-slate-300 text-black font-bold flex justify-center items-center opacity-50"
                                      icon="i-carbon-arrow-left" />
                              </div>
                              <div class="flex-1 flex justify-end">
                                  <UButton
                                      @click="nextStep(1)"
                                      size="xl"
                                      :label="'Next'"
                                      class="px-3 md:px-7 rounded-[10px] border border-primary-500 hover:bg-black hover:text-slate-300 flex justify-center items-center ml-auto lg:ml-0 text-black font-bold" />
                              </div>
                          </div>
                      </div>
                  </div>

                  <!-- Step 2: Personal Details -->
                  <div v-else-if="step === 2" class="bg-black flex flex-col lg:flex-row justify-center items-center md:p-5 flex-1 h-full">
                      <div class="p-8 flex w-full lg:w-3/4 pl-8 md:pl-18 xl:pl-36 flex-col gap-10 bg-black rounded-none">
                          <div class="flex flex-col gap-5">
                              <!-- Name Inputs -->
                              <div class="flex md:flex-row flex-col gap-2 md:gap-10 lg:gap-28 md:items-center w-full">
                                  <label class="block w-20 font-bold text-gray-100 text-xl">Name</label>
                                  <div class="flex gap-10 flex-1 md:flex-row flex-col">
                                      <div class="flex-1">
                                          <UInput
                                              :inputClass="`${errors.firstName.status ? 'border-2 !border-red-500 focus:ring-red-500' : ''} flex-1 rounded-[10px] bg-[#171820] text-slate-300 ring-0 h-14`"
                                              @blur="validateField('firstName')"
                                              v-model="quoteForm.firstName"
                                              class="flex-1 relative"
                                              icon="i-carbon-user"
                                              size="xl"
                                              placeholder="First name" />
                                          <span v-if="errors.firstName.status" class="text-red-500 text-sm mt-1 block">
                                              {{ errors.firstName.message }}
                                          </span>
                                      </div>
                                      <div class="flex-1">
                                          <UInput
                                              :inputClass="`${errors.lastName.status ? 'border-2 !border-red-500 focus:ring-red-500' : ''} flex-1 rounded-[10px] bg-[#171820] text-slate-300 ring-0 h-14`"
                                              @blur="validateField('lastName')"
                                              v-model="quoteForm.lastName"
                                              class="flex-1 relative"
                                              icon="i-carbon-user"
                                              size="xl"
                                              placeholder="Last name" />
                                          <span v-if="errors.lastName.status" class="text-red-500 text-sm mt-1 block">
                                              {{ errors.lastName.message }}
                                          </span>
                                      </div>
                                  </div>
                              </div>

                              <!-- Email Input -->
                              <div class="flex md:flex-row flex-col gap-2 md:gap-10 lg:gap-28 md:items-center w-full">
                                  <label class="block w-20 font-bold text-gray-100 text-xl">E-mail</label>
                                  <div class="flex-1">
                                      <UInput
                                          @blur="validateField('email')"
                                          v-model="quoteForm.email"
                                          class="flex-1 relative"
                                          icon="i-carbon-email"
                                          :inputClass="`${errors.email.status ? 'border-2 !border-red-500 focus:ring-red-500' : ''} flex-1 rounded-[10px] bg-[#171820] text-slate-300 ring-0 h-14`"
                                          size="xl"
                                          placeholder="someone@example.com" />
                                      <span v-if="errors.email.status" class="text-red-500 text-sm mt-1 block">
                                          {{ errors.email.message }}
                                      </span>
                                  </div>
                              </div>

                              <!-- Mobile Input -->
                              <div class="flex md:flex-row flex-col gap-2 md:gap-10 lg:gap-28 md:items-center w-full">
                                  <label class="block w-20 font-bold text-gray-100 text-xl">Mobile</label>
                                  <div class="flex-1">
                                      <UInput
                                          type="text"
                                          v-model="quoteForm.mobile"
                                          @blur="validateField('mobile')"
                                          @input="quoteForm.mobile = quoteForm.mobile.replace(/\D/g, '').slice(0, 10)"
                                          class="relative w-full"
                                          icon="i-carbon-phone-filled"
                                          :inputClass="`
                                              flex-1 rounded-[10px] bg-[#171820] text-slate-300 ring-0 h-14
                                              ${errors.mobile.status ? 'border-2 !border-red-500 focus:ring-red-500' : 'focus:ring-primary'}
                                          `"
                                          size="xl"
                                          placeholder="Mobile Number"
                                          maxlength="10" />
                                      <span v-if="errors.mobile.status" class="text-red-500 text-sm mt-1 block">
                                          {{ errors.mobile.message }}
                                      </span>
                                  </div>
                              </div>
                          </div>

                          <!-- Navigation Buttons -->
                          <div class="flex gap-2 md:gap-10 lg:gap-28 md:items-center w-full">
                              <div class="flex-1">
                                  <UButton
                                      @click="step -= 1"
                                      class="h-12 w-12 rounded-[10px] border border-primary-500 hover:bg-black hover:text-slate-300 text-black font-bold flex justify-center items-center"
                                      icon="i-carbon-arrow-left" />
                              </div>
                              <div class="flex-1 flex justify-end">
                                  <UButton
                                      :loading="isLoading"
                                      @click="submit"
                                      size="xl"
                                      :label="'Submit'"
                                      class="px-3 md:px-7 rounded-[10px] border border-primary-500 hover:bg-black hover:text-slate-300 flex justify-center items-center ml-auto lg:ml-0 text-black font-bold" />
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
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { ref, reactive } from "vue";
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
mobile: { status: false, message: "Please enter a 10-digit mobile number" },
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

const dateInput = ref(null);
let flatpickrInstance = null;
onMounted(() => {
  initFlatpickr();
});

// Reinitialize Flatpickr when step changes back to 1
watch(step, (newStep) => {
  if (newStep === 1) {
    nextTick(() => {
      if (flatpickrInstance) {
        flatpickrInstance.destroy();
      }
      initFlatpickr();
    });
  }
});

function initFlatpickr() {
  flatpickrInstance = flatpickr(dateInput.value, {
    minDate: 'today',
    dateFormat: 'm/d/Y',
    static: true,
    clickOpens: true,
    defaultDate: quoteForm.value.date, // Set initial date from form
    onChange: (selectedDates) => {
      quoteForm.value.date = selectedDates[0] ? selectedDates[0] : null;
      errors.date.status = false;
    },
    onClose: () => {
      setTimeout(() => {
        if (!quoteForm.value.date) {
          errors.date.status = true;
        }
      }, 50);
    }
  });
}

// Clean up
onBeforeUnmount(() => {
  if (flatpickrInstance) {
    flatpickrInstance.destroy();
  }
});
const validateEmail = (email) => {
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
return emailRegex.test(email);
};

const validateMobile = (mobile) => {
return mobile.length === 10 && /^\d+$/.test(mobile);
};

const validateZIP = (zip) => {
return zip.length === 5 && /^\d+$/.test(zip);
};
const validateField = (field) => {
  switch(field) {
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

<style lang="css" scoped>
.flatpickr-wrapper {
    display: block;
    position: relative;
    width: 100%;
}

.flatpickr-calendar {
  position: absolute !important;
  width: 100% !important;
  max-width: 320px !important;
  margin-top: 5px !important;
  z-index: 999 !important;
}

/* Rest of your custom styles */
.flatpickr-calendar {
  background: #171820 !important;
  border: 1px solid #1e293b !important;
  border-radius: 10px !important;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15) !important;
}
.step {
  position: relative;
}

.step::after {
  position: absolute;
  top: 50%;
  left: 100%;
  content: '';
  height: 10px;
  width: 100px;
  border-radius: 15px;
  display: block;
  background: black;
  transform: translate(50%, -50%);
}
.dp__theme_dark {
--dp-background-color: #1f2937 !important;
--dp-text-color: #f3f4f6 !important;
--dp-primary-color: #3b82f6 ;
--dp-primary-text-color: #ffffff;
--dp-border-color: #374151;
--dp-border-radius: 10px !important;
--dp-cell-size: 2.5rem;
}


.dp__input {
background-color: var(--dp-background-color);
color: var(--dp-text-color);
height: 3.5rem;
border: none !important;
padding-left: 2.5rem;
border-radius: 10px !important;
width: 100%;
}
.dp__theme_light {
  --dp-border-color: #1f2937!important;
  --dp-background-color: #1f2937!important;
  border-radius: 10px !important;
  --dp-text-color: #cbd5e1 !important;
  --dp-icon-color: #9ca3af !important;
}
.dp__input_icon {
left: 0.75rem;
color: #9ca3af;
}

.dp__input {
  background-color: var(--dp-background-color);
  border: 1px solid var(--dp-border-color);
  border-radius:10px !important;
  box-sizing: border-box;
  color: var(--dp-text-color);
  font-family: var(--dp-font-family);
  font-size: var(--dp-font-size);
  line-height: calc(var(--dp-font-size)* 1.5);
  outline: none;
  padding: var(--dp-input-padding);
  transition: border-color .2s cubic-bezier(.645,.045,.355,1);
  width: 100%;
}

.dp__menu {
background-color: var(--dp-background-color);
box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.dp__calendar_header_item {
color: #d1d5db;
}

.dp__month_year_row {
color: #f3f4f6;
}

.dp__calendar_item {
color: #e5e7eb;
}

.dp__calendar_item:hover {
background-color: #374151;
}

.dp__today {
border: 1px solid #3b82f6;
}

.dp__active_date {
background-color: #3b82f6;
color: white;
}

.dp__cell_disabled {
color: #6b7280;
opacity: 0.5;
cursor: not-allowed;
}

</style>