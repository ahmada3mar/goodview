<template>
    <div class="flex flex-col h-full">
        <Banner background="/assets/services.jpg" class="  md:h-[25rem]" title="Our Moving Services"
            text="Whether you're moving across the street or across the state, our moving services are designed to take the stress out of your relocation." />

        <Intro img="/assets/new_truck.png" title="Moving Services for Every Need"
            text="No two moves are the same, and that's why we offer a variety of moving services to fit every situation. Whether you're planning a residential move, a commercial relocation, or need help with packing and unpacking, we have you covered." />

        <div :ref="el => (scrollElements[0] = el)" :class="{
            'opacity-100 translate-y-0': isVisible[0],
            'opacity-0 translate-y-20': !isVisible[0],
        }" class="transition-all duration-1000 ease-in-out bg-primary-500 w-full p-3 md:p-10  rounded-none z-10">
            <div class="grid grid-cols-1  container  xl:grid-cols-4  gap-5     lg:-mt-32 ">
                <div
                    class="bg-black col-span-1 lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 rounded-[10px]   p-5">


                    <div class="flex  flex-col  bg-zinc-900 md:gap-5 gap-2 rounded-none ">
                        <!-- <div class="card-img  h-40">
                                    <img alt="Commercial Moving" class="lazy-image opacity-0 transition-opacity duration-500 ease-in-out w-full h-full object-cover  rounded-none"
                                        v-lazy="'assets/card1.webp'" />
                                </div> -->
                              <div
                                 class="flex flex-col p-4   text-start text-xl text-white">
                                 <div class=" h-[135px]  sm:h-[87px] md:h-[135px] lg:h-[170px] xl:h-[135px]">
                        <h2 class="text-xl font-jakarta  md:text-2xl font-extrabold text-stone-300">Residential Moving</h2>
                        <p class="text-sm font-rubik mt-[10px] md:text-md text-stone-300">
                            Stress-free home relocation services tailored to your needs, ensuring your belongings are
                            safely transported to your new home.
                        </p></div>
                        <ULink to="/services/residential-moving-service"
                                        class=" text-center text-sm mb-3 mt-[25px] text-white rounded-[10px] bg-black hover:bg-primary-500 hover:text-black transition-all px-12  xl:px-20 py-3  font-bold">
                                        READ MORE
                                    </ULink>

                              </div>


                    </div>

                    <div class="flex  flex-col bg-primary-500 md:gap-5 gap-2 rounded-none ">
                        <!-- <div class="card-img h-40">
                                    <img alt="Furniture Disassembly" class="lazy-image opacity-0 transition-opacity duration-500 ease-in-out w-full h-full object-cover  rounded-none"
                                        v-lazy="'assets/card5.webp'" />
                                </div> -->
                              <div
                                 class="flex flex-col p-4   text-start text-xl text-black">
                                 <div class=" h-[135px]  sm:h-[87px] md:h-[135px] lg:h-[170px] xl:h-[135px]">
                        <h2 class="text-xl md:text-2xl  font-jakarta font-extrabold ">Commercial Moving</h2>

                        <p class="text-sm md:text-md mt-[10px] font-rubik ">
                            Expert business relocation solutions designed to minimize downtime and keep your operations
                            running smoothly.
                        </p>
                        </div>
                        <ULink to="/services/commercial-moving-service"
                                        class=" text-center text-sm mb-3 mt-[25px] text-white rounded-[10px] bg-black hover:bg-primary-500 hover:text-black transition-all  px-12 xl:px-20 py-3  font-bold">
                                        READ MORE
                                    </ULink>
                                    </div>


                    </div>

                    <div class="flex  flex-col  bg-zinc-900 md:gap-5 gap-2 rounded-none">
                        <!-- <div class="card-img  h-40">
                                    <img alt="Home Movers" class="lazy-image opacity-0 transition-opacity duration-500 ease-in-out w-full h-full object-cover  rounded-none"
                                        v-lazy="'assets/card3.webp'" />
                                </div> -->
                              <div class="flex flex-col p-4   text-start text-xl text-white">
                                <div class=" h-[135px]  sm:h-[87px] md:h-[135px] lg:h-[170px] xl:h-[135px]">
                        <h2 class="text-xl md:text-2xl font-extrabold font-jakarta text-stone-300">Packing and Unpacking</h2>
                        <p class="text-sm md:text-md font-rubik mt-[10px] text-stone-300">
                            Professional packing and unpacking services with premium materials to protect your valuables
                            every step of the way.
                        </p></div>
                        <ULink to="/services/packing-and-unpacking-service"
                                        class=" text-center text-sm mb-3 mt-[25px] text-white rounded-[10px] bg-black hover:bg-primary-500 hover:text-black transition-all px-12 xl:px-20 py-3  font-bold">
                                        READ MORE
                                    </ULink>
                                    </div>


                    </div>


                    <div class="flex  flex-col bg-primary-500 lg:bg-zinc-900 md:gap-5 gap-2 rounded-none ">
                        <!-- <div class="card-img h-40">
                                    <img alt="Long Term Storage" class="lazy-image opacity-0 transition-opacity duration-500 ease-in-out w-full h-full object-cover  rounded-none"
                                        v-lazy="'assets/card4.webp'" />
                                </div> -->
                                <div class="flex flex-col p-4   text-start text-xl text-white">
                                    <div class=" h-[135px]  sm:h-[87px] md:h-[135px] lg:h-[170px] xl:h-[135px]">
                        <h2 class="text-xl md:text-2xl font-extrabold font-jakarta text-black lg:text-stone-300">Furniture Assembly
                            and Disassembly</h2>
                        <p class="text-sm md:text-md mt-[10px] text-black lg:text-stone-300 font-rubik">
                            Skilled technicians handle the disassembly and reassembly of your furniture to ensure a
                            hassle-free move.
                        </p>

 </div>
                        <ULink to="/services/furniture-assembly-and-disassembly-service"
                                        class=" text-center text-sm mb-3 mt-[25px] text-white rounded-[10px] bg-black hover:bg-primary-500 hover:text-black transition-all px-12 xl:px-20 py-3  font-bold">
                                        READ MORE
                                    </ULink>
                                    </div>

                    </div>

                    <div class="flex  flex-col bg-zinc-900 lg:bg-primary-500 md:gap-5 gap-2 rounded-none ">
                        <!-- <div class="card-img h-40">
                                    <img alt="Office Moving" class="lazy-image opacity-0 transition-opacity duration-500 ease-in-out w-full h-full object-cover  rounded-none"
                                        v-lazy="'assets/card2.webp'" />
                                </div> -->
                                <div
                                 class="flex flex-col   p-4  text-start text-xl text-white">
                                 <div class=" h-[135px]  sm:h-[87px] md:h-[135px] lg:h-[170px] xl:h-[135px]">
                        <h2 class="text-xl md:text-2xl font-extrabold lg:text-black text-stone-300 font-jakarta ">Long Distance Moving
                        </h2>

                        <p class="text-sm mt-[10px] md:text-md lg:text-black text-stone-300 font-rubik">
                            Reliable and efficient long-distance moving services to help you transition seamlessly to
                            your new location.
                        </p>
</div>
                        <ULink  to="/services/long-distance-moving-service"
                                        class=" text-center text-sm mb-3 mt-[25px] text-white rounded-[10px] bg-black hover:bg-primary-500 hover:text-black transition-all px-12 xl:px-20 py-3  font-bold">
                                        READ MORE
                                    </ULink>
                                    </div>

                    </div>

                    <div class="flex  flex-col  bg-primary-500 lg:bg-zinc-900 md:gap-5 gap-2 rounded-none ">
                        <!-- <div class="card-img h-40">
                                    <img alt="Home Movers" class="lazy-image opacity-0 transition-opacity duration-500 ease-in-out w-full h-full object-cover  rounded-none"
                                        v-lazy="'assets/card3.webp'" />
                                </div> -->
                                <div
                                 class="flex flex-col   p-4  text-start text-xl text-white">
                                 <div class=" h-[135px]  sm:h-[87px] md:h-[135px] lg:h-[170px] xl:h-[135px]">
                        <h2 class="text-xl md:text-2xl font-extrabold text-black font-jakarta lg:text-stone-300">Specialty Moving
                        </h2>
                        <p class="text-sm mt-[10px] md:text-md text-black lg:text-stone-300 font-rubik">
                            Customized solutions for moving delicate, oversized, or specialty items like pianos,
                            antiques, and artwork with precision and care.
                        </p></div>
                        <ULink to="/services/specialty-moving-service"
                                        class=" text-center text-sm mb-3 mt-[25px] text-white rounded-[10px] bg-black hover:bg-primary-500 hover:text-black transition-all px-12 xl:px-20 py-3  font-bold">
                                        READ MORE
                                    </ULink>
                                </div>



                    </div>


                </div>

                <div class="bg-black flex flex-col justify-center items-center py-10 rounded-[10px] ">
                    <h2 class="text-2xl md:text-3xl font-extrabold text-primary-500 font-jakarta ">Get free quote</h2>

                <div class="p-8 flex flex-col bg-black max-w-full md:max-w-[650px] w-full">
    <!-- Mobile Number Input -->
    <UFormGroup :ui='{
        label: {
            base: "block font-bold text-gray-100 text-xl dark:text-gray-200",
        },
        error: "text-red-500 text-sm mt-1"
    }' class="my-2" label="Your mobile number" :error="errorMessages.mobile">
        <UInput @update:modelValue="errors.mobile = false; errorMessages.mobile = ''"
            :inputClass="`rounded-[10px] bg-[#171820] text-slate-300 ring-gray-800 h-14 ${errors.mobile ? '!ring-red-500 focus:ring-red-500' : ''}`"
            v-model="data.mobile" icon="i-carbon-phone" size="xl"
            placeholder="Your mobile number" />
    </UFormGroup>

    <!-- Zip Code Input -->
    <UFormGroup :ui='{
        label: {
            base: "block font-bold text-gray-100 text-xl dark:text-gray-200",
        },
        error: "text-red-500 text-sm mt-1"
    }' class="my-2" label="Current zip code" :error="errorMessages.to">
        <UInput type="text" @update:modelValue="errors.to = false; errorMessages.to = ''"
            :inputClass="`rounded-[10px] bg-[#171820] text-slate-300 ring-gray-800 h-14 ${errors.to ? '!ring-red-500 focus:ring-red-500' : ''}`"
            v-model="data.to" icon="i-carbon-location" size="xl"
            placeholder="Enter your zip code" maxlength="5" />
    </UFormGroup>

    <!-- Submit Button -->
    <UButton @click="getQuote" size="xl" label="Continue"
        class="px-3 md:px-7 rounded-[10px] border border-primary-500 hover:bg-black hover:text-slate-300 mt-10 mx-auto text-black font-bold" />
</div>
                    <div class="flex justify-center items-center gap-2">
                        <UIcon name="i-carbon-question-answering" class="w-10 h-10 text-slate-300" />
                        <div>
                            <h3 class="text-slate-300 font-jakarta font-bold">
                                Questions about the quote?
                            </h3>
                            <ULink to="/faq" class="text-slate-300 font-rubik underline underline-offset-2">
                                Check out our FAQ section
                            </ULink>
                        </div>
                    </div>

                </div>

            </div>


        </div>
        <!--end-->




        <!--end-->

        <Trusted />

    </div>
</template>
<script setup>
const data = ref({
    mobile: "",
    to: ""
})
const errors = reactive({
    mobile: null,
    to: null
})
const errorMessages = reactive({
    mobile: "",
    to: ""
})

const getQuote = () => {
    // Reset errors and messages
    errors.mobile = null
    errors.to = null
    errorMessages.mobile = ""
    errorMessages.to = ""

    // Validate mobile number
    if (!data.value.mobile) {
        errors.mobile = true
        errorMessages.mobile = "Mobile number is required"
    } else if (!/^\d{10,15}$/.test(data.value.mobile)) {
        errors.mobile = true
        errorMessages.mobile = "Please enter a valid mobile number"
    }

    // Validate zip code
    if (!data.value.to) {
        errors.to = true
        errorMessages.to = "Zip code is required"
    } else if (!/^\d{5}(-\d{4})?$/.test(data.value.to)) {
        errors.to = true
        errorMessages.to = "Please enter a valid zip code"
    }

    console.log(errors)
    if (errors.mobile || errors.to) return;

    useRouter().push({ path: '/quote', query: { mobile: data.value.mobile, to: data.value.to } })
}

const isVisible = ref([false, false, false])
const scrollElements = ref([])

const handleIntersection = (entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            isVisible.value[index] = true
        }
    })
}

onMounted(() => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            const index = scrollElements.value.indexOf(entry.target)
            if (entry.isIntersecting && index !== -1) {
                isVisible.value[index] = true
            }
        })
    }, { threshold: 0.1 })

    scrollElements.value.forEach(el => {
        if (el) observer.observe(el)
    })
})

onUnmounted(() => {
    scrollElements.value.forEach(el => {
        if (el) observer.unobserve(el)
    })
})
</script>
