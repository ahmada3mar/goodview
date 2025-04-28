<template>
    <div class="flex flex-col h-full">
        <Banner background="/imgs/help.avif" class=" md:h-[35rem]" title="Help Center"
            text="Our Help section provides answers to common questions and offers guidance for a smooth moving and storage experience. Whether you need assistance with booking, packing tips, or understanding our services, you'll find helpful resources to make your process easier. We're here to support you every step of the way!" />

        <div class="w-full flex flex-col bg-primary-500 justify-center p-5 sm:p-10">
<div class="container">
            <div class="flex flex-col ">
                <h2 class="md:px-16  px-5 lg:text-6xl text-4xl text-start font-bold  text-black my-5 md:my-10">
                    How can we help you?
                </h2>
            </div>

            <div class="bg-black flex flex-col lg:flex-row justify-center items-center md:p-5  h-full ">

                <UForm class="p-8 flex w-full lg:w-3/4 pl-8 md:pl-18 xl:pl-36 flex-col gap-10 bg-black   rounded-none  ">

                    <!-- Name Input -->
                    <div class="flex md:flex-row flex-col gap-2 md:gap-10 lg:gap-28 md:items-center w-full">
                        <label class="block w-20 font-bold text-gray-100 text-xl">Name</label>
                        <UInput @update:modelValue="errors.name = false"
                            :inputClass="`flex-1 rounded-none bg-[#171820] text-slate-300 ring-gray-800 h-14 ${errors.name ? '!ring-red-500 focus:ring-red-500' : ''}`"
                            v-model="data.name" class="flex-1 relative" icon="i-carbon-user" size="xl"
                            placeholder="Enter your name" />
                    </div>


                    <div class="flex md:flex-row flex-col gap-2 md:gap-10 lg:gap-28 md:items-center w-full">
                        <label class="block w-20 font-bold text-gray-100 text-xl">E-mail</label>
                        <UInput class="flex-1 relative" icon="i-carbon-email" @update:modelValue="errors.email = false"
                            :inputClass="`flex-1 rounded-none bg-[#171820] text-slate-300 ring-gray-800 h-14 ${errors.email ? '!ring-red-500 focus:ring-red-500' : ''}`"
                            v-model="data.email" size="xl" placeholder="Enter your email" />
                    </div>

                    <!-- Phone Number Input -->
                    <div class="flex md:flex-row flex-col gap-2 md:gap-10 lg:gap-28 md:items-center w-full">
                        <label class="block w-20 font-bold text-gray-100 text-xl">Mobile</label>
                        <UInput class="flex-1 relative" icon="i-carbon-phone" @update:modelValue="errors.mobile = false"
                            :inputClass="`flex-1 rounded-none bg-[#171820] text-slate-300 ring-gray-800 h-14 ${errors.mobile ? '!ring-red-500 focus:ring-red-500' : ''}`"
                            v-model="data.mobile" size="xl" placeholder="Enter your mobile" />
                    </div>


                    <!--Question Input -->
                    <div class="flex md:flex-row flex-col gap-2 md:gap-10 lg:gap-28 md:items-center w-full">
                        <label class="block w-20 font-bold text-gray-100 text-xl">Message</label>
                        <UTextarea @update:modelValue="errors.message = false"
                            :textareaClass="`flex-1 rounded-none bg-[#171820] text-slate-300 ring-gray-800 h-64 ${errors.message ? '!ring-red-500 focus:ring-red-500' : ''}`"
                            v-model="data.message" class="flex-1  relative" icon="i-carbon-phone" size="xl"
                            placeholder="Type your question" />
                    </div>




                    <div class="flex  justify-center gap-2 md:gap-10 lg:gap-28 md:items-center w-full">


                        <UButton @click="getQuote" size="xl" label="Submit" class=" px-3 md:px-7 rounded-none border border-primary-500 hover:bg-black hover:text-slate-300
                    flex justify-center items-center
                                ml-auto
                                lg:ml-0
                    text-black font-bold" />
                    </div>


                    <!-- Submit Button -->
                </UForm>

            </div>
        </div>
        </div>
        <Trusted />

    </div>
</template>





<script setup>




const data = ref({
    name: "",
    email: "",
    mobile: "",
    message: ""
})
const errors = reactive({
    name: false,
    email: false,
    mobile: false,
    message: false
})


const getQuote = () => {

    if (!data.value.mobile) {
        errors.mobile = true
    }

    if (!data.value.email) {
        errors.email = true
    }
    if (!data.value.name) {
        errors.name = true
    }

    if (!data.value.message) {
        errors.message = true
    }

    console.log(errors)


    if (Object.values(errors).filter(r => r).length) return;


    useRouter().push({ path: '/' })
}


</script>
