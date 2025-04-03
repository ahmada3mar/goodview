<template>
    <div class="bg-primary-500 -mt-14  px-5  md:px-12">
        <div class="container">

            <div class="bg-black   -mt-12 sm:-mt-16   px-5 z-40 relative rounded-lg">

                <div class="mx-0   px-0 sm:px-5">
                    <div class="flex flex-col py-10">
                        <h2 class="text-[42px] text-center font-bold  font-jakarta text-white">Our Services </h2>
                        <div class="w-[10%]  h-[1px] mt-[10px]   bg-customPrimary-yellow mx-auto  "></div>
                        <h3 class="text-[24px] text-center font-[400] mt-2  font-jakarta  text-white">Services That Fit
                            Your Needs</h3>
                        <p></p>
                        <div
                            class="grid grid-cols-1 px-0 sm:px-5 md:px-0 md:grid-cols-2  text-white  lg:grid-cols-3  gap-5  my-10 sm:my-14">

                            <div class="bg-[#171820] text-white  border-0 rounded-sm ring-0">
                                <div class="flex flex-col h-full gap-1     ">

                                    <div class="card-img h-64">
                                        <img alt="Commercial Moving"
                                            class="lazy-image opacity-0 transition-opacity duration-500 ease-in-out w-full h-full object-cover  rounded-none"
                                            v-lazy="'assets/card1.webp'" />
                                    </div>
                                    <div class="flex flex-col p-4   text-start text-xl text-white">
                                        <div class=" h-[135px]">
                                            <h2 class="font-jakarta  font-[600]  text-[24px]">Commercial Moving</h2>
                                            <p
                                                class="text-[16px]  font-[300] tracking-[.3px]  text-wrap font-rubik mt-5">
                                                Relocate your business with minimal downtime. Our professional moving
                                                services ensure a smooth, efficient transition.
                                            </p>
                                        </div>
                                        <ULink to="/services"
                                            class=" text-center text-sm mb-3 mt-[25px] rounded-[10px] bg-black hover:bg-primary-500 hover:text-black transition-all   px-16  md:px-20  lg:px-20  xl:px-28 py-3  font-bold">
                                            READ MORE
                                        </ULink>
                                    </div>

                                </div>
                            </div>

                            <div class="bg-[#171820] text-white   border-0 rounded-none ring-0">
                                <div class="flex flex-col h-full gap-1     ">
                                    <div class="card-img h-64">
                                        <img alt="Furniture Disassembly"
                                            class="lazy-image opacity-0 transition-opacity duration-500 ease-in-out w-full h-full object-cover  rounded-none"
                                            v-lazy="'assets/card5.webp'" />
                                    </div>
                                    <div class="flex flex-col  p-4  text-start text-xl text-white">
                                        <div class=" h-[135px]">
                                            <h2 class="font-jakarta  font-[600]  text-[24px]">Furniture Disassembly</h2>
                                            <p
                                                class="text-[16px]  font-[300] tracking-[.3px]  text-wrap font-rubik mt-5">
                                                We carefully disassemble and reassemble your furniture for a hassle-free
                                                move, providing safety and efficiency. </p>
                                        </div>
                                        <ULink to="/services"
                                            class=" text-center rounded-[10px] text-sm mb-3 mt-[25px] bg-black hover:bg-primary-500 hover:text-black transition-all   px-16  md:px-20  lg:px-20  xl:px-28 py-3  font-bold">
                                            READ MORE
                                        </ULink>
                                    </div>

                                </div>
                            </div>





                            <div class="bg-[#171820] text-white border-0 rounded-none ring-0">
                                <div class="flex flex-col h-full gap-1     ">
                                    <div class="card-img h-64">
                                        <img alt="Home Movers"
                                            class="lazy-image opacity-0 transition-opacity duration-500 ease-in-out w-full h-full object-cover  rounded-none"
                                            v-lazy="'assets/card3.webp'" />
                                    </div>
                                    <div class="flex flex-col  p-4 text-start text-xl text-white">
                                        <div class=" h-[135px]">
                                            <h2 class="font-jakarta  font-[600]  text-[24px]">Home Movers</h2>
                                            <p
                                                class="text-[16px]  font-[300] tracking-[.3px]  text-wrap font-rubik mt-5">
                                                From packing to transport, our full-service moving company makes home
                                                relocations easy and stress-free.</p>
                                        </div>
                                        <ULink to="/services"
                                            class=" text-center rounded-[10px] text-sm mb-3 mt-[25px] bg-black hover:bg-primary-500 hover:text-black transition-all   px-16  md:px-20  lg:px-20  xl:px-28 py-3  font-bold">
                                            READ MORE
                                        </ULink>
                                    </div>

                                </div>
                            </div>

                            <div class="bg-[#171820] text-white border-0 rounded-none ring-0">
                                <div class="flex flex-col h-full gap-1     ">
                                    <div class="card-img h-64">
                                        <img alt="Long Term Storage"
                                            class="lazy-image opacity-0 transition-opacity duration-500 ease-in-out w-full h-full object-cover  rounded-none"
                                            v-lazy="'assets/card4.webp'" />
                                    </div>
                                    <div class="flex flex-col   p-4  text-start text-xl text-white">
                                        <div class=" h-[135px]">
                                            <h2 class="font-jakarta  font-[600]  text-[24px]">Long Term Storage</h2>
                                            <p
                                                class="text-[16px]  font-[300] tracking-[.3px]  text-wrap font-rubik mt-5">
                                                Need extra space? Our secure storage solutions keep your belongings safe
                                                for as long as you need.
                                            </p>
                                        </div>
                                        <ULink to="/services"
                                            class=" text-center rounded-[10px] text-sm mb-3 mt-[25px] bg-black hover:bg-primary-500 hover:text-black transition-all  px-16  md:px-20  lg:px-20  xl:px-28 py-3  font-bold">
                                            READ MORE
                                        </ULink>
                                    </div>

                                </div>
                            </div>

                            <div class="bg-[#171820] text-white  border-0 rounded-sm ring-0">
                                <div class="flex flex-col h-full gap-1     ">
                                    <div class="card-img h-64">
                                        <img alt="Office Moving"
                                            class="lazy-image opacity-0 transition-opacity duration-500 ease-in-out w-full h-full object-cover  rounded-none"
                                            v-lazy="'assets/card2.webp'" />
                                    </div>
                                    <div class="flex flex-col   p-4  text-start text-xl text-white ">
                                        <div class=" h-[135px]">
                                            <h2 class="font-jakarta  font-[600]  text-[24px]">Office Moving</h2>
                                            <p
                                                class="text-[16px]  font-[300] tracking-[.3px]  text-wrap font-rubik mt-5">
                                                We handle office relocations precisely, so your team can return to work
                                                quickly and efficiently. </p>
                                        </div>
                                        <ULink to="/services"
                                            class=" text-center rounded-[10px] text-sm mb-3 mt-[25px] bg-black hover:bg-primary-500 hover:text-black transition-all  px-16  md:px-20  lg:px-20  xl:px-28 py-3  font-bold">
                                            READ MORE
                                        </ULink>
                                    </div>

                                </div>
                            </div>

                            <div class="bg-[#171820] text-white  border-0 rounded-sm ring-0">
                                <div class="flex flex-col h-full gap-1     ">
                                    <div class="card-img h-64">
                                        <img alt="Packing"
                                            class="lazy-image opacity-0 transition-opacity duration-500 ease-in-out w-full h-full object-cover  rounded-none"
                                            v-lazy="'assets/card8.webp'" />
                                    </div>
                                    <div class="flex flex-col  p-4   text-start text-xl text-white">
                                        <div class=" h-[135px]">
                                            <h2 class="font-jakarta  font-[600]  text-[24px]">Packing</h2>
                                            <p
                                                class="text-[16px]  font-[300] tracking-[.3px]  text-wrap font-rubik mt-5">
                                                Leave the packing to us! Our experts use high-quality materials to
                                                protect your belongings during the move. </p>
                                        </div>
                                        <ULink to="/services"
                                            class=" text-center rounded-[10px] text-sm mb-3 mt-[25px] bg-black hover:bg-primary-500 hover:text-black transition-all   px-16  md:px-20  lg:px-20  xl:px-28 py-3  font-bold">
                                            READ MORE
                                        </ULink>
                                    </div>

                                </div>
                            </div>



                        </div>
                        <div
                            class="mx-auto max-w-[886.6px] items-center sm:px-5 gap-5 grid-cols-1 grid md:grid-cols-2 ">
                            <div class="bg-[#171820] text-white border-0 rounded-none ring-0">
                                <div class="flex flex-col h-full gap-1     ">
                                    <div class="card-img h-64">
                                        <img alt="Long Distance Moving"
                                            class="lazy-image opacity-0 transition-opacity duration-500 ease-in-out w-full h-full object-cover  rounded-none"
                                            v-lazy="'assets/card7.webp'" />
                                    </div>
                                    <div class="flex flex-col  p-4   text-start text-xl text-white">
                                        <div class=" h-[135px]">
                                            <h2 class="font-jakarta  font-[600]  text-[24px]">Long Distance Moving
                                            </h2>
                                            <p
                                                class="text-[16px]  font-[300] tracking-[.3px]  text-wrap font-rubik mt-5">
                                                Moving across states? Our professional staff ensures safe, on-time
                                                delivery wherever you're headed.</p>
                                        </div>
                                        <ULink to="/services"
                                            class=" text-center rounded-[10px] text-sm mb-3 mt-[25px] bg-black hover:bg-primary-500 hover:text-black transition-all   px-16  md:px-20  lg:px-20  xl:px-28 py-3  font-bold">
                                            READ MORE
                                        </ULink>
                                    </div>

                                </div>
                            </div>



                            <div class="bg-[#171820] text-white  border-0 rounded-none ring-0">
                                <div class="flex flex-col h-full gap-1     ">
                                    <div class="card-img h-64">
                                        <img alt="Equipment Relocation"
                                            class="lazy-image opacity-0 transition-opacity duration-500 ease-in-out w-full h-full object-cover  rounded-none"
                                            v-lazy="'assets/card9.webp'" />
                                    </div>
                                    <div class="flex flex-col  p-4   text-start text-xl text-white">
                                        <div class=" h-[135px]">
                                            <h2 class="font-jakarta  font-[600]  text-[24px]">Equipment Relocation
                                            </h2>
                                            <p
                                                class="text-[16px]   font-[300] tracking-[.3px]  text-wrap font-rubik mt-5">
                                                We specialize in moving heavy and delicate equipment with precision
                                                and
                                                care to prevent damage.</p>
                                        </div>
                                        <ULink to="/services"
                                            class=" text-center rounded-[10px]  text-sm mb-3 mt-[25px] bg-black hover:bg-primary-500 hover:text-black transition-all   px-16  md:px-20  lg:px-20  xl:px-28 py-3  font-bold">
                                            READ MORE
                                        </ULink>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div class="mt-10 px-5 p-6 bg-black rounded-[10px] shadow-md">
                <div class="m-5 p-6 bg-[#171820]">
                    <h2 class="text-2xl text-white font-jakarta md:text-4xl mb-5 font-extrabold">Trusted by Thousands –
                        Here’s Why
                        Customers Love Us</h2>
                    <p class="text-lg text-white font-rubik md:text-[18px] md:font-[300] md:leading-8">At Good View
                        Moving &
                        Storage,
                        we don’t just move boxes—we move
                        lives. As a full-service moving company, we’ve built a reputation for delivering professional
                        moving
                        services that make relocation smooth and stress-free.</p>
                    <p class="text-lg text-white font-rubik md:text-[18px] md:font-[300] md:leading-8">Why do customers
                        choose us?
                        Because we offer:</p>
                    <ul
                        class="list-disc list-inside md:text-[18px] text-white md:font-[300] md:leading-8  font-rubik mt-4 space-y-2">
                        <li><span class="font-semibold">Experienced & Professional Movers:</span> Our skilled team
                            provides
                            a hassle-free move, handling everything with care.</li>
                        <li><span class="font-semibold">Affordable Moving Costs:</span> Transparent pricing with no
                            hidden
                            fees.</li>
                        <li><span class="font-semibold">Packing and Unpacking Services:</span> We do the heavy lifting,
                            so
                            you don't have to.</li>
                        <li><span class="font-semibold">Secure Storage Solutions:</span> Short-term and long-term
                            options
                            for your convenience.</li>
                        <li><span class="font-semibold">Highly Rated Service:</span> Don’t just take our word for it—our
                            Good View Moving reviews speak for themselves!</li>
                    </ul>
                    <UButton size="xl" label="Learn
                        more about us" to="/about-us" type="about us"
                        class=" mt-6 bg-black text-white px-7 py-2 transition-all  font-jakarta rounded-[10px] text-lg font-bold hover:text-black border border-black hover:bg-primary-500 " />



                </div>
            </div>

            <div class="sm:py-20 py-10">
                <!-- <h2 class="md:px-20 px-5 md:text-5xl text-4xl text-start font-bold  font-jakarta text-black my-16 sm:my-20">Where to find
                us</h2> -->
                <div class="flex flex-col-reverse md:flex-row  gap-16">
                    <UForm @submit="submit"
                        class="p-8 flex flex-col bg-black max-w-full xl:max-w-[550px] md:max-w-[400px] rounded-[10px] w-full ">
                        <h2 class="text-primary-500 font-jakarta text-2xl font-bold">Contact us</h2>

                        <!-- Name Input -->
                        <UFormGroup :error="errors.name" :ui='{
                            label: {
                                base: "block font-bold text-white dark:text-gray-200",
                            }
                        }' class="my-2" label="Name">
                            <UInput v-model="data.name" icon="i-heroicons-user"
                                :inputClass="`rounded-[10px] placeholder:text-white bg-[#171820] text-white ${errors.name ? 'ring-red-500' : 'ring-gray-800'} h-14`"
                                size="xl" placeholder="Enter your name" />
                        </UFormGroup>

                        <!-- Phone Number Input -->
                        <UFormGroup :error="errors.mobile" :ui='{
                            label: {
                                base: "block font-bold text-white dark:text-gray-200",
                            }
                        }' class="my-2" label="Phone Number">
                            <UInput v-model="data.mobile" icon="i-heroicons-phone"
                                :inputClass="`rounded-[10px] bg-[#171820] placeholder:text-white text-white ${errors.name ? 'ring-red-500' : 'ring-gray-800'} h-14`"
                                size="xl" placeholder="Enter your phone number" />
                        </UFormGroup>

                        <!-- Email Input -->
                        <UFormGroup :error="errors.email" :ui='{
                            label: {
                                base: "block font-bold text-white  dark:text-gray-200",
                            }
                        }' class="my-2" label="E-mail">
                            <UInput v-model="data.email" icon="i-heroicons-envelope"
                                :inputClass="`rounded-[10px] bg-[#171820] placeholder:text-white text-white ${errors.name ? 'ring-red-500' : 'ring-gray-800'} h-14`"
                                size="xl" placeholder="Enter your email" />
                        </UFormGroup>

                        <!-- Message Input -->
                        <UFormGroup :error="errors.message" :ui='{
                            label: {
                                base: "block font-bold text-white dark:text-gray-200",
                            }
                        }' class="my-2" label="Message">
                            <UTextarea v-model="data.message"
                                :textareaClass="`bg-[#171820] text-white placeholder:text-white rounded-[10px] ring-gray-800 h-32 ${errors.name ? 'ring-red-500' : 'ring-gray-800'} `"
                                placeholder="Type your inquiry" />
                        </UFormGroup>

                        <!-- Submit Button -->
                        <UButton size="xl" label="Submit" type="submit"
                            class="py-2 justify-self-end px-3 md:px-7 rounded-[10px] border border-primary-500 hover:bg-black hover:text-white mt-10 ml-auto text-black font-bold" />
                    </UForm>


                    <div
                        class="rounded-[10px] md:block hidden card-img  xl:min-w-[450px] sm:min-w-96 min-w-0 h-96  md:h-auto overflow-hidden border-4 border-gray-500  w-full ">
                        <img alt="goodview contact us"
                            class="lazy-image opacity-0 transition-opacity duration-500 ease-in-out w-full h-full object-cover  rounded-none"
                            v-lazy="'/assets/contact_us.avif'" />

                    </div>
                </div>

                <Trusted />
            </div>
        </div>

    </div>
</template>

<script setup>

const data = ref({
    name: '',
    mobile: '',
    email: '',
    message: ''
})

const errors = reactive({
    name: false,
    mobile: false,
    email: false,
    message: false
})


const submit = () => {

    if (!data.value.name) {
        errors.name = true
    }

    if (!data.value.mobile) {
        errors.mobile = true
    }

    if (!data.value.email) {
        errors.email = true
    }

    if (!data.value.message) {
        errors.message = true
    }

    console.log(errors)
    if (Object.values(errors).filter(r => r)) {
        return
    }




}

</script>
