<template>
    <div class="bg-primary-500 -mt-14 px-5 md:px-12">
        <div class="bg-black -mt-36 px-5 z-40 relative rounded-lg">

            <div class="mx-0 md:mx-10 lg:mx-16  px-0 sm:px-5">
                <div class="flex flex-col py-10">
                    <h2 class="text-4xl text-start font-bold  text-white">We do more than just move!</h2>
                    <div
                        class="grid grid-cols-1 px-0 sm:px-5 md:px-0 md:grid-cols-2  gap-5 md:gap-8 lg:gap-16 my-10 sm:my-14">

                        <div class="bg-[#171820] text-white p-7 border-0 rounded-sm ring-0">
                            <div class="grid grid-cols-1 xl:grid-cols-2 h-full gap-1 sm:gap-10 justify-between ">
                                <div class="card-img h-64">
                                    <img alt="Commercial Moving" class="lazy-image opacity-0 transition-opacity duration-500 ease-in-out w-full h-full object-cover  rounded-sm"
                                        v-lazy="'assets/card1.webp'" />
                                </div>
                                <div
                                    class="flex flex-col gap-1 md:gap-16 justify-between  mt-2 text-start text-xl text-white">
                                    <div>
                                        <h2>Commercial Moving</h2>
                                        <p class="text-sm text-wrap mt-5">Efficient and reliable solutions for
                                            relocating businesses, ensuring minimal downtime and seamless transitions.
                                        </p>
                                    </div>
                                    <ULink to="/services"
                                        class="md:mr-auto text-sm lg:mr-0 bg-black hover:bg-primary-500 hover:text-black transition-all px-7 py-3 ml-auto font-bold">
                                        READ MORE
                                    </ULink>
                                </div>

                            </div>
                        </div>

                        <div :ui="{ base: 'h-100' }" class="bg-[#171820] text-white p-7 border-0 rounded-sm ring-0">
                            <div class="grid grid-cols-1 xl:grid-cols-2 h-full gap-1 sm:gap-10  justify-between ">
                                <div class="card-img h-64">
                                    <img alt="Furniture Disassembly" class="lazy-image opacity-0 transition-opacity duration-500 ease-in-out w-full h-full object-cover  rounded-sm"
                                        v-lazy="'assets/card5.webp'" />
                                </div>
                                <div class="flex flex-col gap-16 justify-between  mt-2 text-start text-xl text-white">
                                    <div>
                                        <h2>Furniture Disassembly</h2>
                                        <p class="text-sm mt-5">Professional disassembly and reassembly of furniture for
                                            safe and convenient transport.</p>
                                    </div>
                                    <ULink to="/services"
                                        class="md:mr-auto text-sm lg:mr-0 bg-black hover:bg-primary-500 hover:text-black transition-all px-7 py-3 ml-auto font-bold">
                                        READ MORE
                                    </ULink>
                                </div>

                            </div>
                        </div>





                        <div :ui="{ base: 'h-100' }" class="bg-[#171820] text-white p-7 border-0 rounded-sm ring-0">
                            <div class="grid grid-cols-1 xl:grid-cols-2 h-full gap-1 sm:gap-10  justify-between ">
                                <div class="card-img h-64">
                                    <img alt="Home Movers" class="lazy-image opacity-0 transition-opacity duration-500 ease-in-out w-full h-full object-cover  rounded-sm"
                                        v-lazy="'assets/card3.webp'" />
                                </div>
                                <div class="flex flex-col gap-16 justify-between  mt-2 text-start text-xl text-white">
                                    <div>
                                        <h2>Home Movers</h2>
                                        <p class="text-sm mt-5">Trusted home relocation services, carefully handling
                                            your belongings to ensure a stress-free move.</p>
                                    </div>
                                    <ULink to="/services"
                                        class="md:mr-auto text-sm lg:mr-0 bg-black hover:bg-primary-500 hover:text-black transition-all px-7 py-3 ml-auto font-bold">
                                        READ MORE
                                    </ULink>
                                </div>

                            </div>
                        </div>

                        <div :ui="{ base: 'h-100' }" class="bg-[#171820] text-white p-7 border-0 rounded-sm ring-0">
                            <div class="grid grid-cols-1 xl:grid-cols-2 h-full gap-1 sm:gap-10  justify-between ">
                                <div class="card-img h-64">
                                    <img alt="Long Term Storage" class="lazy-image opacity-0 transition-opacity duration-500 ease-in-out w-full h-full object-cover  rounded-sm"
                                        v-lazy="'assets/card4.webp'" />
                                </div>
                                <div class="flex flex-col gap-16 justify-between  mt-2 text-start text-xl text-white">
                                    <div>
                                        <h2>Long Term Storage</h2>
                                        <p class="text-sm mt-5">Secure and climate-controlled storage options to protect
                                            your items for extended periods.
                                        </p>
                                    </div>
                                    <ULink to="/services"
                                        class="md:mr-auto text-sm lg:mr-0 bg-black hover:bg-primary-500 hover:text-black transition-all px-7 py-3 ml-auto font-bold">
                                        READ MORE
                                    </ULink>
                                </div>

                            </div>
                        </div>

                        <div :ui="{ base: 'h-100' }" class="bg-[#171820] text-white p-7 border-0 rounded-sm ring-0">
                            <div class="grid grid-cols-1 xl:grid-cols-2 h-full gap-1 sm:gap-10  justify-between ">
                                <div class="card-img h-64">
                                    <img alt="Office Moving" class="lazy-image opacity-0 transition-opacity duration-500 ease-in-out w-full h-full object-cover  rounded-sm"
                                        v-lazy="'assets/card2.webp'" />
                                </div>
                                <div class="flex flex-col gap-16 justify-between  mt-2 text-start text-xl text-white">
                                    <div>
                                        <h2>Office Moving</h2>
                                        <p class="text-sm mt-5">Comprehensive office relocation services, including
                                            packing, transport, and setup at your new workspace.</p>
                                    </div>
                                    <ULink to="/services"
                                        class="md:mr-auto text-sm lg:mr-0 bg-black hover:bg-primary-500 hover:text-black transition-all px-7 py-3 ml-auto font-bold">
                                        READ MORE
                                    </ULink>
                                </div>

                            </div>
                        </div>

                        <div :ui="{ base: 'h-100' }" class="bg-[#171820] text-white p-7 border-0 rounded-sm ring-0">
                            <div class="grid grid-cols-1 xl:grid-cols-2 h-full gap-1 sm:gap-10  justify-between ">
                                <div class="card-img h-64">
                                    <img alt="Packing" class="lazy-image opacity-0 transition-opacity duration-500 ease-in-out w-full h-full object-cover  rounded-sm"
                                        v-lazy="'assets/card8.webp'" />
                                </div>
                                <div class="flex flex-col gap-16 justify-between  mt-2 text-start text-xl text-white">
                                    <div>
                                        <h2>Packing</h2>
                                        <p class="text-sm mt-5">Expert packing services to safeguard your valuables with
                                            high-quality materials and meticulous care.</p>
                                    </div>
                                    <ULink to="/services"
                                        class="md:mr-auto text-sm lg:mr-0 bg-black hover:bg-primary-500 hover:text-black transition-all px-7 py-3 ml-auto font-bold">
                                        READ MORE
                                    </ULink>
                                </div>

                            </div>
                        </div>

                        <div :ui="{ base: 'h-100' }" class="bg-[#171820] text-white p-7 border-0 rounded-sm ring-0">
                            <div class="grid grid-cols-1 xl:grid-cols-2 h-full gap-1 sm:gap-10  justify-between ">
                                <div class="card-img h-64">
                                    <img alt="Long Distance Moving" class="lazy-image opacity-0 transition-opacity duration-500 ease-in-out w-full h-full object-cover  rounded-sm"
                                        v-lazy="'assets/card7.webp'" />
                                </div>
                                <div class="flex flex-col gap-16 justify-between  mt-2 text-start text-xl text-white">
                                    <div>
                                        <h2>Long Distance Moving</h2>
                                        <p class="text-sm mt-5">Specialized long-distance moving services to make your
                                            transition to a new city or state hassle-free.</p>
                                    </div>
                                    <ULink to="/services"
                                        class="md:mr-auto text-sm lg:mr-0 bg-black hover:bg-primary-500 hover:text-black transition-all px-7 py-3 ml-auto font-bold">
                                        READ MORE
                                    </ULink>
                                </div>

                            </div>
                        </div>



                        <div :ui="{ base: 'h-100' }" class="bg-[#171820] text-white p-7 border-0 rounded-sm ring-0">
                            <div class="grid grid-cols-1 xl:grid-cols-2 h-full gap-1 sm:gap-10  justify-between ">
                                <div class="card-img h-64">
                                    <img alt="Equipment Relocation" class="lazy-image opacity-0 transition-opacity duration-500 ease-in-out w-full h-full object-cover  rounded-sm"
                                        v-lazy="'assets/card9.webp'" />
                                </div>
                                <div class="flex flex-col gap-16 justify-between  mt-2 text-start text-xl text-white">
                                    <div>
                                        <h2>Equipment Relocation</h2>
                                        <p class="text-sm mt-5">Safe and precise transportation of heavy and sensitive
                                            equipment for businesses and individuals.</p>
                                    </div>
                                    <ULink to="/services"
                                        class="md:mr-auto text-sm lg:mr-0 bg-black hover:bg-primary-500 hover:text-black transition-all px-7 py-3 ml-auto font-bold">
                                        READ MORE
                                    </ULink>
                                </div>

                            </div>
                        </div>



                    </div>

                </div>
            </div>
        </div>

        <div class="sm:py-20 py-10">
            <h2 class="md:px-20 px-5 md:text-5xl text-4xl text-start font-bold  text-black my-16 sm:my-20">Where to find
                us</h2>
            <div class="flex flex-col-reverse md:flex-row  gap-16">
                <UForm @submit="submit"
                    class="p-8 flex flex-col bg-black max-w-full xl:max-w-[550px] md:max-w-[400px] rounded-lg w-full ">
                    <h2 class="text-primary-500 text-2xl font-bold">Contact us</h2>

                    <!-- Name Input -->
                    <UFormGroup :error="errors.name" :ui='{
                        label: {
                            base: "block font-bold text-gray-700 dark:text-gray-200",
                        }
                    }' class="my-2" label="Name">
                        <UInput v-model="data.name" icon="i-heroicons-user" 
                        :inputClass="`rounded-none bg-[#171820] text-white ${errors.name ? 'ring-red-500' : 'ring-gray-800'} h-14`"
                            size="xl" placeholder="Enter your name" />
                    </UFormGroup>

                    <!-- Phone Number Input -->
                    <UFormGroup :error="errors.mobile" :ui='{
                        label: {
                            base: "block font-bold text-gray-700 dark:text-gray-200",
                        }
                    }' class="my-2" label="Phone Number">
                        <UInput v-model="data.mobile" icon="i-heroicons-phone" 
                        :inputClass="`rounded-none bg-[#171820] text-white ${errors.name ? 'ring-red-500' : 'ring-gray-800'} h-14`"
                            size="xl" placeholder="Enter your phone number" />
                    </UFormGroup>

                    <!-- Email Input -->
                    <UFormGroup :error="errors.email" :ui='{
                        label: {
                            base: "block font-bold text-gray-700 dark:text-gray-200",
                        }
                    }' class="my-2" label="E-mail">
                        <UInput v-model="data.email" icon="i-heroicons-envelope"
                        :inputClass="`rounded-none bg-[#171820] text-white ${errors.name ? 'ring-red-500' : 'ring-gray-800'} h-14`"    
                        size="xl"
                            placeholder="Enter your email" />
                    </UFormGroup>

                    <!-- Message Input -->
                    <UFormGroup  :error="errors.message" :ui='{
                        label: {
                            base: "block font-bold text-gray-700 dark:text-gray-200",
                        }
                    }' class="my-2" label="Message">
                        <UTextarea v-model="data.message" 
                        :textareaClass="`bg-[#171820] text-white rounded-none ring-gray-800 h-32 ${errors.name ? 'ring-red-500' : 'ring-gray-800'} `"
                            placeholder="Type your inquiry" />
                    </UFormGroup>

                    <!-- Submit Button -->
                    <UButton size="xl" label="Submit"
                    type="submit"
                        class="py-2 justify-self-end px-3 md:px-7 rounded-lg border border-primary-500 hover:bg-black hover:text-white mt-10 ml-auto text-black font-bold" />
                </UForm>


                <div
                    class="rounded-lg md:block hidden card-img  xl:min-w-[450px] sm:min-w-96 min-w-0 h-96  md:h-auto overflow-hidden border-4 border-gray-500  w-full ">
                    <img alt="goodview contact us" class="lazy-image opacity-0 transition-opacity duration-500 ease-in-out w-full h-full object-cover  rounded-sm"
                    v-lazy="'/assets/contact_us.avif'" />

                </div>
            </div>

            <Trusted />
        </div>

    </div>
</template>

<script setup>

const data = ref({
  name:'',
  mobile:'',
  email:'',
  message:''
})

const errors = reactive({
  name:false,
  mobile:false,
  email:false,
  message:false
})


const submit = ()=>{

if(!data.value.name){
  errors.name = true
}

if(!data.value.mobile){
  errors.mobile = true
}

if(!data.value.email){
  errors.email = true
}

if(!data.value.message){
  errors.message = true
}

console.log(errors)
if(Object.values(errors).filter(r=>r)){
  return
}




}

</script>

