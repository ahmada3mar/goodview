<template>
    <div class="flex flex-col h-full">
        <Banner background="/assets/services.jpg" class="h-[20rem] md:h-[25rem]" title="Services"
            text="We have many services to help you with your move. We can move your things from one place to another with reliable nationwide moving services. We can also store your things, and assemble furniture for you." />

        <Intro img="/assets/new_truck.png" title="Moving Services"
            text="We can help you with moving your things for you, whether they are for your home or your business. We can pack and unpack your things, and transport them safely to your new place. We have boxes and materials to pack your things, and insurance to protect them. We can move any kind of things, like furniture, computers, documents, pianos, safes, machines, art objects, and antiques." />

        <div :ref="el => (scrollElements[0] = el)" :class="{
            'opacity-100 translate-y-0': isVisible[0],
            'opacity-0 translate-y-20': !isVisible[0],
        }" class="transition-all duration-1000 ease-in-out bg-primary-500 w-full p-3 md:p-10  rounded-none z-10">
            <div class="grid grid-cols-1  container  xl:grid-cols-4  gap-5  -mt-28  sm:-mt-36 ">
                <div
                    class="bg-black col-span-1 lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 rounded-[10px]   p-5">


                    <div class="flex  flex-col  bg-zinc-900 md:gap-5 gap-2 rounded-none ">
                        <div class="card-img  h-40">
                            <img alt="Commercial Moving"
                                class="lazy-image opacity-0 transition-opacity duration-500 ease-in-out w-full h-full object-cover  rounded-none"
                                v-lazy="'assets/card1.webp'" />
                        </div>
                        <div class="flex flex-col p-4   text-start text-xl text-white">
                            <div class=" h-[135px]  sm:h-[87px] md:h-[135px] lg:h-[170px] xl:h-[135px]">
                                <h2 class="text-xl font-jakarta  md:text-2xl font-extrabold text-stone-300">Residential
                                    Moving</h2>
                                <p class="text-sm font-rubik mt-[10px] md:text-md text-stone-300">
                                    Stress-free home relocation services tailored to your needs, ensuring your
                                    belongings are
                                    safely transported to your new home.
                                </p>
                            </div>
                            <ULink to="/services"
                                class=" text-center text-sm mb-3 mt-[25px] text-white rounded-[10px] bg-black hover:bg-primary-500 hover:text-black transition-all px-12  xl:px-20 py-3  font-bold">
                                READ MORE
                            </ULink>

                        </div>


                    </div>

                    <div class="flex  flex-col bg-primary-500 md:gap-5 gap-2 rounded-none ">
                        <div class="card-img h-40">
                            <img alt="Furniture Disassembly"
                                class="lazy-image opacity-0 transition-opacity duration-500 ease-in-out w-full h-full object-cover  rounded-none"
                                v-lazy="'assets/card5.webp'" />
                        </div>
                        <div class="flex flex-col p-4   text-start text-xl text-black">
                            <div class=" h-[135px]  sm:h-[87px] md:h-[135px] lg:h-[170px] xl:h-[135px]">
                                <h2 class="text-xl md:text-2xl  font-jakarta font-extrabold ">Commercial Moving</h2>

                                <p class="text-sm md:text-md mt-[10px] font-rubik ">
                                    Expert business relocation solutions designed to minimize downtime and keep your
                                    operations
                                    running smoothly.
                                </p>
                            </div>
                            <ULink to="/services"
                                class=" text-center text-sm mb-3 mt-[25px] text-white rounded-[10px] bg-black hover:bg-primary-500 hover:text-black transition-all  px-12 xl:px-20 py-3  font-bold">
                                READ MORE
                            </ULink>
                        </div>


                    </div>

                    <div class="flex  flex-col  bg-zinc-900 md:gap-5 gap-2 rounded-none">
                        <div class="card-img  h-40">
                            <img alt="Home Movers"
                                class="lazy-image opacity-0 transition-opacity duration-500 ease-in-out w-full h-full object-cover  rounded-none"
                                v-lazy="'assets/card3.webp'" />
                        </div>
                        <div class="flex flex-col p-4   text-start text-xl text-white">
                            <div class=" h-[135px]  sm:h-[87px] md:h-[135px] lg:h-[170px] xl:h-[135px]">
                                <h2 class="text-xl md:text-2xl font-extrabold font-jakarta text-stone-300">Packing and
                                    Unpacking</h2>
                                <p class="text-sm md:text-md font-rubik mt-[10px] text-stone-300">
                                    Professional packing and unpacking services with premium materials to protect your
                                    valuables
                                    every step of the way.
                                </p>
                            </div>
                            <ULink to="/services"
                                class=" text-center text-sm mb-3 mt-[25px] text-white rounded-[10px] bg-black hover:bg-primary-500 hover:text-black transition-all px-12 xl:px-20 py-3  font-bold">
                                READ MORE
                            </ULink>
                        </div>


                    </div>


                    <div class="flex  flex-col bg-primary-500 lg:bg-zinc-900 md:gap-5 gap-2 rounded-none ">
                        <div class="card-img h-40">
                            <img alt="Long Term Storage"
                                class="lazy-image opacity-0 transition-opacity duration-500 ease-in-out w-full h-full object-cover  rounded-none"
                                v-lazy="'assets/card4.webp'" />
                        </div>
                        <div class="flex flex-col p-4   text-start text-xl text-white">
                            <div class=" h-[135px]  sm:h-[87px] md:h-[135px] lg:h-[170px] xl:h-[135px]">
                                <h2
                                    class="text-xl md:text-2xl font-extrabold font-jakarta text-black lg:text-stone-300">
                                    Furniture Assembly
                                    and Disassembly</h2>
                                <p class="text-sm md:text-md mt-[10px] text-black lg:text-stone-300 font-rubik">
                                    Skilled technicians handle the disassembly and reassembly of your furniture to
                                    ensure a
                                    hassle-free move.
                                </p>

                            </div>
                            <ULink to="/services"
                                class=" text-center text-sm mb-3 mt-[25px] text-white rounded-[10px] bg-black hover:bg-primary-500 hover:text-black transition-all px-12 xl:px-20 py-3  font-bold">
                                READ MORE
                            </ULink>
                        </div>

                    </div>

                    <div class="flex  flex-col bg-zinc-900 lg:bg-primary-500 md:gap-5 gap-2 rounded-none ">
                        <div class="card-img h-40">
                            <img alt="Office Moving"
                                class="lazy-image opacity-0 transition-opacity duration-500 ease-in-out w-full h-full object-cover  rounded-none"
                                v-lazy="'assets/card2.webp'" />
                        </div>
                        <div class="flex flex-col   p-4  text-start text-xl text-white">
                            <div class=" h-[135px]  sm:h-[87px] md:h-[135px] lg:h-[170px] xl:h-[135px]">
                                <h2
                                    class="text-xl md:text-2xl font-extrabold lg:text-black text-stone-300 font-jakarta ">
                                    Long Distance Moving
                                </h2>

                                <p class="text-sm mt-[10px] md:text-md lg:text-black text-stone-300 font-rubik">
                                    Reliable and efficient long-distance moving services to help you transition
                                    seamlessly to
                                    your new location.
                                </p>
                            </div>
                            <ULink to="/services"
                                class=" text-center text-sm mb-3 mt-[25px] text-white rounded-[10px] bg-black hover:bg-primary-500 hover:text-black transition-all px-12 xl:px-20 py-3  font-bold">
                                READ MORE
                            </ULink>
                        </div>

                    </div>

                    <div class="flex  flex-col  bg-primary-500 lg:bg-zinc-900 md:gap-5 gap-2 rounded-none ">
                        <div class="card-img h-40">
                            <img alt="Home Movers"
                                class="lazy-image opacity-0 transition-opacity duration-500 ease-in-out w-full h-full object-cover  rounded-none"
                                v-lazy="'assets/card3.webp'" />
                        </div>
                        <div class="flex flex-col   p-4  text-start text-xl text-white">
                            <div class=" h-[135px]  sm:h-[87px] md:h-[135px] lg:h-[170px] xl:h-[135px]">
                                <h2
                                    class="text-xl md:text-2xl font-extrabold text-black font-jakarta lg:text-stone-300">
                                    Specialty Moving
                                </h2>
                                <p class="text-sm mt-[10px] md:text-md text-black lg:text-stone-300 font-rubik">
                                    Customized solutions for moving delicate, oversized, or specialty items like pianos,
                                    antiques, and artwork with precision and care.
                                </p>
                            </div>
                            <ULink to="/services"
                                class=" text-center text-sm mb-3 mt-[25px] text-white rounded-[10px] bg-black hover:bg-primary-500 hover:text-black transition-all px-12 xl:px-20 py-3  font-bold">
                                READ MORE
                            </ULink>
                        </div>



                    </div>


                </div>

                <div class="bg-black flex flex-col justify-center items-center py-10 rounded-[10px] xl:h-[58%] ">
                    <h2 class="text-2xl md:text-3xl font-extrabold text-primary-500 font-jakarta ">Get free quote</h2>

                    <div class="p-8 flex flex-col bg-black max-w-full md:max-w-[650px]   w-full ">

                        <!-- Name Input -->
                        <UFormGroup :ui='{
                            label: {
                                base: "block font-bold text-gray-100 text-xl dark:text-gray-200",
                            }
                        }' class="my-2" label="Your mobile number">
                            <UInput @update:modelValue="errors.mobile = false"
                                :inputClass="`rounded-[10px] bg-[#171820] text-slate-300 ring-gray-800 h-14 ${errors.mobile ? '!ring-red-500 focus:ring-red-500' : ''}`"
                                v-model="data.mobile" icon="i-carbon-phone" size="xl"
                                placeholder="Your mobile number" />
                        </UFormGroup>

                        <!-- Phone Number Input -->
                        <UFormGroup :ui='{
                            label: {
                                base: "block font-bold text-gray-100 text-xl dark:text-gray-200",
                            }
                        }' class="my-2" label="Current zip code">
                            <UInput type="number" @update:modelValue="errors.to = false"
                                :inputClass="`rounded-[10px] bg-[#171820] text-slate-300 ring-gray-800 h-14 ${errors.to ? '!ring-red-500 focus:ring-red-500' : ''}`"
                                v-model="data.to" icon="i-carbon-location" size="xl"
                                placeholder="Enter your zip code" />
                        </UFormGroup>


                        <!-- Submit Button -->
                        <UButton @click="getQuote" size="xl" label="Continue"
                            class=" px-3 md:px-7 rounded-[10px] border border-primary-500 hover:bg-black hover:text-slate-300 mt-10 mx-auto text-black font-bold" />
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


const getQuote = () => {

    if (!data.value.mobile) {
        errors.mobile = true
    }

    if (!data.value.to) {
        errors.to = true
    }


    console.log(errors)
    if (!data.value.to || !data.value.mobile) return;


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
