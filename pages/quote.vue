<template>
    <div class="flex flex-col h-full">
        <Banner background="/assets/quote.webp" class="h-[25rem] md:h-[30rem]" title="Request a free quote"
            text="Get a quick, no-obligation quote from our team. Simply fill out the form, and we’ll provide a personalized estimate based on your needs." />

        <div class="w-full flex flex-col bg-primary-500 justify-center p-5 sm:p-10 mb-96">

            <div class="flex flex-col ">
                <h2 class="md:px-16  px-5 lg:text-6xl text-4xl text-start font-bold  text-black my-5 md:my-10">
                    FILL OUT THE FORM
                </h2>

                <div class="xl:px-56 md:px-10 px-5 flex justify-around  my-10">
                    <div class="flex flex-col gap-5 flex-1  items-center">
                        <div
                            class=" bg-black text-primary-500 lg:h-20  lg:w-20 md:h-18 md:w-18 h-16 w-16 flex justify-center items-center font-bold text-3xl">
                            1</div>
                        <h2 class="md:text-lg text-sm text-start font-bold  text-black">
                            Personal info
                        </h2>
                    </div>

                    <div class="flex-1 pip md:translate-y-10 translate-y-8 mx-2 rounded-xl h-2   bg-black">
                    </div>
                    <div :class="{
                        'opacity-65': step < 2
                    }" class="flex flex-col gap-5 flex-1  items-center  ">
                        <div
                            class=" bg-black text-primary-500 lg:h-20  lg:w-20 md:h-18 md:w-18 h-16 w-16 flex justify-center items-center font-bold text-3xl">
                            2</div>
                        <h2 class="md:text-lg text-sm text-start font-bold  text-black">
                            About the move
                        </h2>
                    </div>
                    <div class="flex-1 pip md:translate-y-10 translate-y-8 mx-2 rounded-xl h-2  bg-black">
                    </div>
                    <div class="flex flex-col gap-5 flex-1  items-center  ">
                        <div :class="{
                            'opacity-65': step < 3
                        }"
                            class=" bg-black text-primary-500 lg:h-20  lg:w-20 md:h-18 md:w-18 h-16 w-16 flex justify-center items-center font-bold text-3xl">
                            3</div>
                        <h2 class="md:text-lg text-sm text-start font-bold  text-black">
                            Address
                        </h2>
                    </div>
                </div>


            </div>

            <div class="bg-black  w-full -mb-72 min-h-96 flex justify-center items-center">
                <div class="flex flex-col items-center justify-center gap-5 mt-5"  v-if="isDone" >
                    <DotLottieVue style="height: 400px; width: 400px" autoplay 
                    loop src="https://lottie.host/5985b015-e571-4f7b-b9ac-212322831da2/vej1PvvYj0.json" />
                    <h4 class="text-primary-500 text-5xl   font-bold" >Thank you for choosing us</h4>
                    <p class="text-gray-400 text-xl pb-5 mb-16 font-bold" >We will contact you shortly!</p>
                </div>

                <div v-else  class="bg-black flex flex-col lg:flex-row justify-center items-center md:p-5 flex-1  h-full ">

                    <div
                        class="p-8 flex w-full lg:w-3/4 pl-8 md:pl-18 xl:pl-36 flex-col gap-10 bg-black   rounded-lg  ">

                        <div class="flex flex-col gap-5" v-if="step == 1">
                            <!-- Name Input -->
                            <div class="flex md:flex-row flex-col gap-2 md:gap-10 lg:gap-28 md:items-center w-full">
                                <label class="block w-20 font-bold text-gray-100 text-xl">Name</label>
                                <div class="flex gap-10 flex-1 md:flex-row flex-col">
                                    <UInput
                                        :inputClass="`${errors.firstName ? 'border-2 !border-red-500 focus:ring-red-500' : ''} flex-1 rounded-none bg-[#171820] text-slate-300 ring-0 h-14`"
                                        @update:model-value="errors.firstName = false" v-model="quoteForm.firstName"
                                        class="flex-1 relative" icon="i-carbon-user" size="xl"
                                        placeholder="Sure name" />
                                    <UInput
                                        :inputClass="`${errors.lastName ? 'border-2 !border-red-500 focus:ring-red-500' : ''} flex-1 rounded-none bg-[#171820] text-slate-300 ring-0 h-14`"
                                        @update:model-value="errors.lastName = false" v-model="quoteForm.lastName"
                                        class="flex-1 relative" icon="i-carbon-user" size="xl"
                                        placeholder="Given name" />
                                </div>
                            </div>


                            <div class="flex md:flex-row flex-col gap-2 md:gap-10 lg:gap-28 md:items-center w-full">
                                <label class="block w-20 font-bold text-gray-100 text-xl">E-mail</label>
                                <UInput @update:model-value="errors.email = false" v-model="quoteForm.email"
                                    class="flex-1 relative" icon="i-carbon-email"
                                    :inputClass="`${errors.email ? 'border-2 !border-red-500 focus:ring-red-500' : ''} flex-1 rounded-none bg-[#171820] text-slate-300 ring-0 h-14`"
                                    size="xl" placeholder="someone@example.com" />
                            </div>

                            <!-- Phone Number Input -->
                            <div class="flex md:flex-row flex-col gap-2 md:gap-10 lg:gap-28 md:items-center w-full">
                                <label class="block w-20 font-bold text-gray-100 text-xl">Mobile</label>
                                <UInput @update:model-value="errors.mobile = false" v-model="quoteForm.mobile"
                                    class="flex-1 relative" icon="i-carbon-phone"
                                    :inputClass="`${errors.mobile ? 'border-2 !border-red-500 focus:ring-red-500' : ''} flex-1 rounded-none bg-[#171820] text-slate-300 ring-0 h-14`"
                                    size="xl" placeholder="+1234567891" />
                            </div>
                        </div>

                        <div class="flex flex-col gap-5" v-if="step == 2">
                            <!-- Name Input -->
                            <div class="flex md:flex-row flex-col gap-2 md:gap-10 lg:gap-28 md:items-center w-full">
                                <label class="block w-20 font-bold text-gray-100 text-xl">Type</label>

                                <USelectMenu
                                    :selectClass="`${errors.type ? 'border-2 !border-red-500 focus:ring-red-500' : ''} flex-1 rounded-none bg-[#171820] text-slate-300 ring-0 h-14`"
                                    @update:model-value="errors.type = false" v-model="quoteForm.type"
                                    :options="houseTypes" class="flex-1 relative" icon="i-carbon-building" size="xl"
                                    placeholder="Select type" />
                            </div>

                            <div class="flex md:flex-row flex-col gap-2 md:gap-10 lg:gap-28 md:items-center w-full">
                                <label class="block w-20 font-bold text-gray-100 text-xl">Moving: </label>
                                <URadioGroup class="flex relative items-center" v-model="quoteForm.inOut" :options="[
                                    'Moving In',
                                    'Moving Out',
                                ]" @update:model-value="errors.inOut = false" :ui="{
                wrapper: 'relative items-center flex flex-row',
                fieldset: `flex gap-5 ${errors.inOut ? 'border-2 !border-red-500 focus:ring-red-500' : ''}`,
                legend: 'text-white',
            }">

                                    <template class="items-center" #label="{ option }">
                                        <p class="text-gray-400 text-lg">
                                            {{ option.label }}
                                        </p>
                                    </template>
                                </URadioGroup>


                            </div>



                            <div class="flex md:flex-row flex-col gap-2 md:gap-10 lg:gap-28 md:items-center w-full">
                                <label class="block w-20 font-bold text-gray-100 text-xl">Floor</label>
                                <div class="flex flex-1 gap-10 justify-between">

                                    <UInput class="flex-1 relative" icon="i-carbon-character-whole-number"
                                        :inputClass="`${errors.floor ? 'border-2 !border-red-500 focus:ring-red-500' : ''} flex-1 rounded-none bg-[#171820] text-slate-300 ring-0 h-14`"
                                        @update:model-value="errors.floor = false" v-model="quoteForm.floor" size="xl"
                                        type="number" placeholder="Enter floor" />

                                    <div class="flex md:flex-row flex-col gap-5  md:items-center ">
                                        <UCheckbox
                                            inputClass="flex-1 rounded-none bg-[#171820] text-slate-300 ring-0 h-10 w-10"
                                            v-model="quoteForm.elevator" name="Elevator" />
                                        <label class="block w-20 font-bold text-gray-100 text-xl">Elevator</label>

                                    </div>
                                </div>

                            </div>

                            <div class="flex md:flex-row flex-col gap-2 md:gap-10 lg:gap-28 md:items-center w-full">
                                <label class="block w-20 font-bold text-gray-100 text-xl">Date</label>



                                <Date @update:modelValue="e => quoteForm.date = e" :model-value="quoteForm.date" />

                            </div>


                            <div class="flex md:flex-row flex-col gap-2 md:gap-10 lg:gap-28 md:items-center w-full">
                                <label class="block w-20 font-bold text-gray-100 text-xl">Note</label>
                                <UTextarea v-model="quoteForm.note"
                                    :textareaClass="`flex-1 rounded-none bg-[#171820] text-slate-300 ring-0 `"
                                    :placeholder="'Write a note'" :rows="5" class="flex-1 relative"
                                    icon="i-carbon-earth-americas-filled" size="xl" />
                            </div>



                        </div>


                        <div class="flex flex-col gap-5" v-if="step == 3">
                            <!-- Name Input -->
                            <div class="flex md:flex-row flex-col gap-2 md:gap-10 lg:gap-28 md:items-center w-full">
                                <label class="block w-20 font-bold text-gray-100 text-xl">Country</label>
                                <USelectMenu
                                    :selectClass="`flex-1 rounded-none bg-[#171820] text-slate-300 ring-0 h-14`"
                                    :options="['United state']" :modelValue="'United state'" class="flex-1 relative"
                                    icon="i-carbon-earth-americas-filled" size="xl" :disabled="true" />
                            </div>

                            <div class="flex md:flex-row flex-col gap-2 md:gap-10 lg:gap-28 md:items-center w-full">
                                <label class="block w-20 font-bold text-gray-100 text-xl">State</label>
                                <USelectMenu
                                    :selectClass="`${errors.state ? 'border-2 !border-red-500 focus:ring-red-500' : ''} flex-1 rounded-none bg-[#171820] text-slate-300 ring-0 h-14`"
                                    @update:model-value="errors.state = false" v-model="quoteForm.state"
                                    :options="usStates" class="flex-1 relative" placeholder="Select your state"
                                    icon="i-carbon-earth-americas-filled"
                                    selectClass="flex-1 rounded-none bg-[#171820] text-slate-300 ring-0 h-14"
                                    size="xl" />
                            </div>


                            <div class="flex md:flex-row flex-col gap-2 md:gap-10 lg:gap-28 md:items-center w-full">
                                <label class="block w-20 font-bold text-gray-100 text-xl">From</label>
                                <div class="flex gap-4 flex-1" >

                                <UInput type="text"
                                    :inputClass="`${errors.fromZIP ? 'border-2 !border-red-500 focus:ring-red-500' : ''} flex-1 rounded-none bg-[#171820] text-slate-300 ring-0 h-14`"
                                    @update:model-value="errors.fromZIP = false" v-model="quoteForm.fromZIP"
                                    class=" relative" icon="i-carbon-location-heart-filled"
                                    inputClass=" rounded-none bg-[#171820] text-slate-300 ring-0 h-14" size="xl"
                                    placeholder="ZIP code" />
                                <UInput type="text"
                                    :inputClass="`${errors.from_address ? 'border-2 !border-red-500 focus:ring-red-500' : ''} flex-1 rounded-none bg-[#171820] text-slate-300 ring-0 h-14`"
                                    @update:model-value="errors.from_address = false" v-model="quoteForm.from_address"
                                    class="flex-1 relative" icon="i-carbon-location-heart-filled"
                                    inputClass="flex-1 rounded-none bg-[#171820] text-slate-300 ring-0 h-14" size="xl"
                                    placeholder="Address" />
                                </div>

                            </div>

                            <div class="flex md:flex-row flex-col gap-2 md:gap-10 lg:gap-28 md:items-center w-full">
                                <label class="block w-20 font-bold text-gray-100 text-xl">To</label>
                                <div class="flex flex-1 gap-4" >
                                <UInput type="text"
                                    :inputClass="`${errors.toZIP ? 'border-2 !border-red-500 focus:ring-red-500' : ''} flex-1 rounded-none bg-[#171820] text-slate-300 ring-0 h-14`"
                                    @update:model-value="errors.toZIP = false" v-model="quoteForm.toZIP"
                                    class="relative" icon="i-carbon-location-heart-filled" size="xl"
                                    placeholder="ZIP code" />
                                <UInput type="text"
                                    :inputClass="`${errors.to_address ? 'border-2 !border-red-500 focus:ring-red-500' : ''} flex-1 rounded-none bg-[#171820] text-slate-300 ring-0 h-14`"
                                    @update:model-value="errors.to_address = false" v-model="quoteForm.to_address"
                                    class="flex-1 relative" icon="i-carbon-location-heart-filled" size="xl"
                                    placeholder="Address" />
                                </div>

                            </div>
                        </div>



                        <div class="flex flex-col bg-black lg:w-1/4 w-full rounded-lg justify-center items-center">

                            <div class="lg:hidden flex w-full gap-2 justify-center items-center">
                                <UIcon name="i-carbon-question-answering" class="w-10 h-10 text-slate-300" />
                                <div>
                                    <h3 class="text-slate-300 font-bold">
                                        Questions about damaged goods?
                                    </h3>
                                    <ULink to="/faq" class="text-slate-300 underline underline-offset-2">
                                        Check out our FAQ section
                                    </ULink>
                                </div>
                            </div>
                        </div>
                        <div class="flex  gap-2 md:gap-10 lg:gap-28 md:items-center w-full">

                            <div class="flex-1">
                                <UButton @click="step > 1 ? step -= 1 : null" class="h-12 w-12  rounded-sm border border-primary-500 hover:bg-black hover:text-slate-300 
            text-black font-bold
            flex justify-center items-center" icon="i-carbon-arrow-left" />
                            </div>
                            <div class="flex-1 flex justify-end">

                                <UButton :loading="isLoading" @click="submit" size="xl" 
                                :label="step < 3 ? 'Continue' : 'Submit'" 
                                class=" px-3 md:px-7 rounded-sm border border-primary-500 hover:bg-black hover:text-slate-300 
flex justify-center items-center
            ml-auto
            lg:ml-0
text-black font-bold
" />
                            </div>
                        </div>


                        <!-- Submit Button -->
                    </div>
                    <div
                        class="lg:flex hidden  flex-col bg-black lg:w-1/4 w-full rounded-lg justify-center items-center">

                        <div class="flex w-full gap-2 justify-center items-center">
                            <UIcon name="i-carbon-question-answering" class="w-10 h-10 text-slate-300" />
                            <div>
                                <h3 class="text-slate-300 font-bold">
                                    Questions about damaged goods?
                                </h3>
                                <ULink to="/faq" class="text-slate-300 underline underline-offset-2">
                                    Check out our FAQ section
                                </ULink>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>

    </div>
</template>

<script setup>

import { DotLottieVue } from '@lottiefiles/dotlottie-vue'

const step = ref(1)
const isDone = ref(false)
const isLoading = ref(false)


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
    { value: "other", label: "Other" }
];

const usStates = [
    { value: "AL", label: "Alabama" },
    { value: "AK", label: "Alaska" },
    { value: "AS", label: "American" },
    { value: "AZ", label: "Arizona" },
    { value: "AR", label: "Arkansas" },
    { value: "CA", label: "California" },
    { value: "CO", label: "Colorado" },
    { value: "CT", label: "Connecticut" },
    { value: "DC", label: "District Of Columbia" },
    { value: "DE", label: "Delaware" },
    { value: "FL", label: "Florida" },
    { value: "GA", label: "Georgia" },
    { value: "GU", label: "Guam" },
    { value: "HI", label: "Hawaii" },
    { value: "IA", label: "Iowa" },
    { value: "ID", label: "Idaho" },
    { value: "IL", label: "Illinois" },
    { value: "IN", label: "Indiana" },
    { value: "KS", label: "Kansas" },
    { value: "KY", label: "Kentucky" },
    { value: "LA", label: "Louisiana" },
    { value: "MA", label: "Massachusetts" },
    { value: "MD", label: "Maryland" },
    { value: "ME", label: "Maine" },
    { value: "MI", label: "Michigan" },
    { value: "MN", label: "Minnesota" },
    { value: "MO", label: "Missouri" },
    { value: "MS", label: "Mississippi" },
    { value: "MT", label: "Montana" },
    { value: "NC", label: "North Carolina" },
    { value: "ND", label: "North Dakota" },
    { value: "NE", label: "Nebraska" },
    { value: "NH", label: "New Hampshire" },
    { value: "NJ", label: "New Jersey" },
    { value: "NM", label: "New Mexico" },
    { value: "NV", label: "Nevada" },
    { value: "NY", label: "New York" },
    { value: "OH", label: "Ohio" },
    { value: "OK", label: "Oklahoma" },
    { value: "OR", label: "Oregon" },
    { value: "PA", label: "Pennsylvania" },
    { value: "PR", label: "Puerto Rico" },
    { value: "RI", label: "Rhode Island" },
    { value: "SC", label: "South Carolina" },
    { value: "SD", label: "South Dakota" },
    { value: "TN", label: "Tennessee" },
    { value: "TX", label: "Texas" },
    { value: "UT", label: "Utah" },
    { value: "VA", label: "Virginia" },
    { value: "VI", label: "Virgin Islands" },
    { value: "WA", label: "Washington" },
    { value: "WI", label: "Wisconsin" },
    { value: "WV", label: "West Virginia" },
    { value: "WY", label: "Wyoming" },
    { value: "MP", label: "Northern Mariana Islands" },
];

const route = useRoute()

const quoteForm = ref({

    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    customer_id: '',
    type: '',
    size: '',
    rooms: '',
    floor: '',
    quote_id: '',
    state: '',
    city: '',
    elevator: false,
    fromStreet: '',
    fromZIP: route.query.from,
    toStreet: '',
    toZIP: route.query.to,
    date: new Date(),
})


const errors = reactive({

    firstName: false,
    lastName: false,
    email: false,
    mobile: false,

    type: false,
    size: false,
    rooms: false,
    floor: false,
    elevator: false,


    state: false,
    city: false,
    fromZIP: false,
    toZIP: false,

    from_address: false,
    to_address: false,


});



const submit = async () => {

    const isError = {
        1: false,
        2: false,
        3: false,
    };

    switch (step.value) {
        case 1:

            if (!quoteForm.value.firstName) {
                errors.firstName = true
                isError[1] = true
            }
            if (!quoteForm.value.lastName) {
                errors.lastName = true
                isError[1] = true
            }

            if (!quoteForm.value.email) {
                errors.email = true
                isError[1] = true
            }
            if (!quoteForm.value.mobile) {
                errors.mobile = true
                isError[1] = true
            }

            break;

        case 2:

            if (!quoteForm.value.type) {
                errors.type = true
                isError[2] = true
            }


            if (!quoteForm.value.floor) {
                errors.floor = true
                isError[2] = true
            }
            if (!quoteForm.value.inOut) {
                errors.inOut = true
                isError[2] = true
            }

            break;

        case 3:

            if (!quoteForm.value.state) {
                errors.state = true
                isError[3] = true
            }


            if (!quoteForm.value.fromZIP) {
                errors.fromZIP = true
                isError[3] = true
            }
            if (!quoteForm.value.toZIP) {
                errors.toZIP = true
                isError[3] = true
            }

            if (!quoteForm.value.from_address) {
                errors.from_address = true
                isError[3] = true
            }
            if (!quoteForm.value.to_address) {
                errors.to_address = true
                isError[3] = true
            }


            break;

        default:
            break;
    }

    if (isError[step.value]) {
        return
    }

    console.log(quoteForm.value)

    switch (step.value) {
        case 1:
        case 2:
            step.value < 3 ? step.value += 1 : null
            break;
        case 3:
            isLoading.value = true
            $fetch('https://api.goodview-moving.com/api/quote/' + quoteForm.value.quote_id, {
                method: 'POST',
                body: {
                    firstName: quoteForm.value.firstName,
                    lastName: quoteForm.value.lastName,
                    email: quoteForm.value.email,
                    mobile: quoteForm.value.mobile,
                    type: quoteForm.value.type,
                    note: quoteForm.value.note,
                    elevator: quoteForm.value.elevator,
                    floor: quoteForm.value.floor,
                    customer_id: quoteForm.value.customer_id,
                    inOut: quoteForm.value.inOut,
                    state: quoteForm.value.state,
                    from_zip: quoteForm.value.fromZIP,
                    to_zip: quoteForm.value.toZIP,
                    from_address: quoteForm.value.from_address,
                    to_address: quoteForm.value.to_address,
                    date: quoteForm.value.date,
                }
            }).then(res => {
                step.value < 3 ? step.value += 1 : (isDone.value = true)
            })
            break;

        default:
            break;
    }








}






</script>

<style lang="css" scoped>
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
</style>