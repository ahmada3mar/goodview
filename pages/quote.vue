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

            <div class="bg-black  w-full -mb-72">
                <div class="bg-black flex flex-col lg:flex-row justify-center items-center md:p-5  h-full ">

                    <div
                        class="p-8 flex w-full lg:w-3/4 pl-8 md:pl-18 xl:pl-36 flex-col gap-10 bg-black   rounded-lg  ">

                        <div class="flex flex-col gap-5" v-if="step == 1">
                            <!-- Name Input -->
                            <div class="flex md:flex-row flex-col gap-2 md:gap-10 lg:gap-28 md:items-center w-full">
                                <label class="block w-20 font-bold text-gray-100 text-xl">Name</label>
                                <UInput
                                    :inputClass="`${errors.fullname ? 'border-2 !border-red-500 focus:ring-red-500' : ''} flex-1 rounded-none bg-[#171820] text-slate-300 ring-0 h-14`"
                                    @update:model-value="errors.fullname = false" v-model="quoteForm.fullname"
                                    class="flex-1 relative" icon="i-carbon-user" size="xl"
                                    placeholder="Enter your full name" />
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
                                <label class="block w-20 font-bold text-gray-100 text-xl">Size</label>
                                <UInput class="flex-1 relative" icon="i-carbon-ruler"
                                    :inputClass="`${errors.size ? 'border-2 !border-red-500 focus:ring-red-500' : ''} flex-1 rounded-none bg-[#171820] text-slate-300 ring-0 h-14`"
                                    @update:model-value="errors.size = false" v-model="quoteForm.size" size="xl"
                                    type="number" placeholder="Enter the size (m²)" />
                            </div>

                            <div class="flex md:flex-row flex-col gap-2 md:gap-10 lg:gap-28 md:items-center w-full">
                                <label class="block w-20 font-bold text-gray-100 text-xl">Rooms</label>
                                <UInput class="flex-1 relative" icon="i-carbon-character-whole-number"
                                    :inputClass="`${errors.rooms ? 'border-2 !border-red-500 focus:ring-red-500' : ''} flex-1 rounded-none bg-[#171820] text-slate-300 ring-0 h-14`"
                                    @update:model-value="errors.rooms = false" v-model="quoteForm.rooms" size="xl"
                                    type="number" placeholder="Enter room/s number" />
                            </div>


                            <div class="flex md:flex-row flex-col gap-2 md:gap-10 lg:gap-28 md:items-center w-full">
                                <label class="block w-20 font-bold text-gray-100 text-xl">Floor</label>
                                <UInput class="flex-1 relative" icon="i-carbon-character-whole-number"
                                    :inputClass="`${errors.floor ? 'border-2 !border-red-500 focus:ring-red-500' : ''} flex-1 rounded-none bg-[#171820] text-slate-300 ring-0 h-14`"
                                    @update:model-value="errors.floor = false" v-model="quoteForm.floor" size="xl"
                                    type="number" placeholder="Enter floor" />
                            </div>

                            <!-- Phone Number Input -->
                            <div class="flex md:flex-row flex-col gap-2 md:gap-10 lg:gap-28 md:items-center w-full">
                                <label class="block w-20 font-bold text-gray-100 text-xl">Elevator</label>
                                <UCheckbox inputClass="flex-1 rounded-none bg-[#171820] text-slate-300 ring-0 h-10 w-10"
                                    name="Elevator" />

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
                                <UInput
                                    type="number"
                                    :inputClass="`${errors.fromZIP ? 'border-2 !border-red-500 focus:ring-red-500' : ''} flex-1 rounded-none bg-[#171820] text-slate-300 ring-0 h-14`"
                                    @update:model-value="errors.fromZIP = false" v-model="quoteForm.fromZIP"
                                    class="flex-1 relative" icon="i-carbon-location-heart-filled"
                                    inputClass="flex-1 rounded-none bg-[#171820] text-slate-300 ring-0 h-14" size="xl"
                                    placeholder="From ZIP code" />
                            </div>

                            <!-- Phone Number Input -->
                            <div class="flex md:flex-row flex-col gap-2 md:gap-10 lg:gap-28 md:items-center w-full">
                                <label class="block w-20 font-bold text-gray-100 text-xl">To</label>
                                <UInput
                                    type="number"
                                    :inputClass="`${errors.toZIP ? 'border-2 !border-red-500 focus:ring-red-500' : ''} flex-1 rounded-none bg-[#171820] text-slate-300 ring-0 h-14`"
                                    @update:model-value="errors.toZIP = false" v-model="quoteForm.toZIP"
                                    class="flex-1 relative"  icon="i-carbon-location-heart-filled" size="xl" placeholder="To ZIP code" />
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
                            <div class="flex-1">

                                <UButton @click="submit" size="xl" :label="step < 3 ? 'Continue' :  'Submit'"
                                 class=" px-3 md:px-7 rounded-sm border border-primary-500 hover:bg-black hover:text-slate-300 
                    flex justify-center items-center
                                ml-auto
                                lg:ml-0
                    text-black font-bold" />
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


const step = ref(1)

const houseTypes = [
    "Single-Family Home",
    "Townhouse",
    "Condominium (Condo)",
    "Apartment",
    "Duplex",
    "Triplex",
    "Quadplex",
    "Mobile Home",
    "Modular Home",
    "Bungalow",
    "Ranch-Style Home",
    "Victorian Home",
    "Colonial Home",
    "Cape Cod Home",
    "Tudor Home",
    "Craftsman Home",
    "Contemporary Home",
    "Mid-Century Modern Home",
    "Log Cabin",
    "Farmhouse",
    "Cottage",
    "Mansion",
    "Tiny Home",
    "Split-Level Home",
    "Coach House",
    "Carriage House",
    "Other"
];

const usStates = [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming"
];


const quoteForm = ref({

    fullname: '',
    email: '',
    mobile: '',
    type: '',
    size: '',
    rooms: '',
    floor: '',
    state: '',
    fromStreet: '',
    fromZIP: '',
    toStreet: '',
    toZIP: '',
})


const errors = reactive({

    fullname: false,
    email: false,
    mobile: false,

    type: false,
    size: false,
    rooms: false,
    floor: false,

    state: false,
    fromZIP: false,
    toZIP: false,

});



const submit = () => {

    const isError = {
        1: false,
        2: false,
        3: false,
    };

    switch (step.value) {
        case 1:

            if (!quoteForm.value.fullname) {
                errors.fullname = true
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
            if (!quoteForm.value.size) {
                errors.size = true
                isError[2] = true
            }
            if (!quoteForm.value.rooms) {
                errors.rooms = true
                isError[2] = true
            }
            if (!quoteForm.value.floor) {
                errors.floor = true
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


            break;

        default:
            break;
    }

    if (isError[step.value]) {
        return
    }



    step.value < 3 ? step.value += 1 : null


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