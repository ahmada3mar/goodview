<template>
    <div class="flex flex-col h-full">
        <Banner background="/assets/services.jpg" class="h-[20rem] md:h-[25rem]" title="Services"
            text="We have many services to help you with your move. We can move your things from one place to another with reliable nationwide moving services. We can also store your things, and assemble furniture for you." />

        <Intro img="/assets/new_truck.png" title="MOVING SERVICES"
            text="We can help you with moving your things for you, whether they are for your home or your business. We can pack and unpack your things, and transport them safely to your new place. We have boxes and materials to pack your things, and insurance to protect them. We can move any kind of things, like furniture, computers, documents, pianos, safes, machines, art objects, and antiques." />

        <div :ref="el => (scrollElements[0] = el)" :class="{
            'opacity-100 translate-y-0': isVisible[0],
            'opacity-0 translate-y-20': !isVisible[0],
        }" class="transition-all duration-1000 ease-in-out bg-primary-500 w-full p-3 md:p-10  rounded-sm z-10">
            <div class="grid grid-cols-1  lg:grid-cols-4  gap-5 -mt-48 ">
                <div
                    class="bg-black col-span-1 lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 rounded-md   p-5">


                    <div class="flex  flex-col  bg-zinc-900 md:gap-5 gap-2 rounded-sm p-2 md:p-5">
                        <h2 class="text-xl md:text-2xl font-extrabold text-stone-300">Residential Moving</h2>
                        <p class="text-sm md:text-md text-stone-300">
                            Stress-free home relocation services tailored to your needs, ensuring your belongings are
                            safely transported to your new home.
                        </p>



                    </div>

                    <div class="flex  flex-col bg-primary-500 md:gap-5 gap-2 rounded-sm p-2 md:p-5 ">
                        <h2 class="text-xl md:text-2xl font-extrabold ">Commercial Moving</h2>

                        <p class="text-sm md:text-md ">
                            Expert business relocation solutions designed to minimize downtime and keep your operations
                            running smoothly.
                        </p>


                    </div>

                    <div class="flex  flex-col  bg-zinc-900 md:gap-5 gap-2 rounded-sm p-2 md:p-5">
                        <h2 class="text-xl md:text-2xl font-extrabold text-stone-300">Packing and Unpacking</h2>
                        <p class="text-sm md:text-md text-stone-300">
                            Professional packing and unpacking services with premium materials to protect your valuables
                            every step of the way.
                        </p>



                    </div>


                    <div class="flex  flex-col bg-primary-500 lg:bg-zinc-900 md:gap-5 gap-2 rounded-sm p-2 md:p-5">
                        <h2 class="text-xl md:text-2xl font-extrabold text-black lg:text-stone-300">Furniture Assembly
                            and Disassembly</h2>
                        <p class="text-sm md:text-md text-black lg:text-stone-300">
                            Skilled technicians handle the disassembly and reassembly of your furniture to ensure a
                            hassle-free move.
                        </p>



                    </div>

                    <div class="flex  flex-col bg-zinc-900 lg:bg-primary-500 md:gap-5 gap-2 rounded-sm p-2 md:p-5 ">
                        <h2 class="text-xl md:text-2xl font-extrabold lg:text-black text-stone-300">Long Distance Moving
                        </h2>

                        <p class="text-sm md:text-md lg:text-black text-stone-300">
                            Reliable and efficient long-distance moving services to help you transition seamlessly to
                            your new location.
                        </p>


                    </div>

                    <div class="flex  flex-col  bg-primary-500 lg:bg-zinc-900 md:gap-5 gap-2 rounded-sm p-2 md:p-5">
                        <h2 class="text-xl md:text-2xl font-extrabold text-black lg:text-stone-300">Specialty Moving
                        </h2>
                        <p class="text-sm md:text-md text-black lg:text-stone-300">
                            Customized solutions for moving delicate, oversized, or specialty items like pianos,
                            antiques, and artwork with precision and care.
                        </p>



                    </div>


                </div>

                <div class="bg-black flex flex-col justify-center items-center py-10  h-full ">
                    <h2 class="text-2xl md:text-3xl font-extrabold text-primary-500">Get free quote</h2>

                    <div class="p-8 flex flex-col bg-black max-w-full md:max-w-[650px]  rounded-lg w-full ">

                        <!-- Name Input -->
                        <UFormGroup :ui='{
                            label: {
                                base: "block font-bold text-gray-100 text-xl dark:text-gray-200",
                            }
                        }' class="my-2" label="Your mobile number">
                            <UInput @update:modelValue="errors.mobile = false"
                                :inputClass="`rounded-none bg-[#171820] text-slate-300 ring-gray-800 h-14 ${errors.mobile ? '!ring-red-500 focus:ring-red-500' : ''}`"
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
                                :inputClass="`rounded-none bg-[#171820] text-slate-300 ring-gray-800 h-14 ${errors.to ? '!ring-red-500 focus:ring-red-500' : ''}`"
                                v-model="data.to" icon="i-carbon-location" size="xl"
                                placeholder="Enter your zip code" />
                        </UFormGroup>


                        <!-- Submit Button -->
                        <UButton @click="getQuote" size="xl" label="Continue"
                            class=" px-3 md:px-7 rounded-sm border border-primary-500 hover:bg-black hover:text-slate-300 mt-10 mx-auto text-black font-bold" />
                    </div>
                    <div class="flex justify-center items-center gap-2">
                        <UIcon name="i-carbon-question-answering" class="w-10 h-10 text-slate-300" />
                        <div>
                            <h3 class="text-slate-300 font-bold">
                                Questions about the quote?
                            </h3>
                            <ULink to="/faq" class="text-slate-300 underline underline-offset-2">
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
