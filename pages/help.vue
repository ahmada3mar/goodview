<template>
    <div class="flex flex-col h-full">
        <Banner :background="background" class="h-[25rem] md:h-[35rem]" title="Help Center"
            text="Our Help section provides answers to common questions and offers guidance for a smooth moving and storage experience. Whether you need assistance with booking, packing tips, or understanding our services, you'll find helpful resources to make your process easier. We're here to support you every step of the way!" />

        <div class="w-full flex flex-col bg-primary-500 justify-center p-5 sm:p-10">

            <div class="flex flex-col ">
                <h2 class="md:px-16  px-5 lg:text-6xl text-4xl text-start font-bold  text-black my-5 md:my-10">
                    How can we help you?
                </h2>
            </div>

                <div class="bg-black flex flex-col lg:flex-row justify-center items-center md:p-5  h-full ">

                    <UForm
                        class="p-8 flex w-full lg:w-3/4 pl-8 md:pl-18 xl:pl-36 flex-col gap-10 bg-black   rounded-lg  ">

                            <!-- Name Input -->
                            <div class="flex md:flex-row flex-col gap-2 md:gap-10 lg:gap-28 md:items-center w-full">
                                <label class="block w-20 font-bold text-gray-100 text-xl">Name</label>
                                <UInput class="flex-1 relative" icon="i-carbon-user"
                                    inputClass="flex-1 rounded-none bg-[#171820] text-slate-300 ring-0 h-14" size="xl"
                                    placeholder="Enter space" />
                            </div>


                            <div class="flex md:flex-row flex-col gap-2 md:gap-10 lg:gap-28 md:items-center w-full">
                                <label class="block w-20 font-bold text-gray-100 text-xl">E-mail</label>
                                <UInput class="flex-1 relative" icon="i-carbon-email"
                                    inputClass="flex-1 rounded-none bg-[#171820] text-slate-300 ring-0 h-14" size="xl"
                                    placeholder="Enter space" />
                            </div>

                            <!-- Phone Number Input -->
                            <div class="flex md:flex-row flex-col gap-2 md:gap-10 lg:gap-28 md:items-center w-full">
                                <label class="block w-20 font-bold text-gray-100 text-xl">Mobile</label>
                                <UInput class="flex-1 relative" icon="i-carbon-phone"
                                    inputClass="flex-1 rounded-none bg-[#171820] text-slate-300 ring-0 h-14" size="xl"
                                    placeholder="Enter space" />
                            </div>


                            <!--Question Input -->
                            <div class="flex md:flex-row flex-col gap-2 md:gap-10 lg:gap-28 md:items-center w-full">
                                <label class="block w-20 font-bold text-gray-100 text-xl">Message</label>
                                <UTextarea  class="flex-1  relative" icon="i-carbon-phone"
                                textareaClass="flex-1 rounded-none bg-[#171820] text-slate-300 ring-0 h-64" size="xl"
                                    placeholder="Type your question" />
                            </div>




                        <div class="flex  justify-center gap-2 md:gap-10 lg:gap-28 md:items-center w-full">


                                <UButton  size="xl" label="Submit" class=" px-3 md:px-7 rounded-sm border border-primary-500 hover:bg-black hover:text-slate-300 
                    flex justify-center items-center
                                ml-auto
                                lg:ml-0
                    text-black font-bold" />
                            </div>


                        <!-- Submit Button -->
                    </UForm>

            </div>

        </div>
        <Trusted />

    </div>
</template>

<script setup>

import background from "/assets/help.avif"


</script>

