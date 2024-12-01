<template>
    <div class="flex flex-col h-full">
        <Banner :background="background" class="h-[25rem] md:h-[30rem]" title="Request a free quote"
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

                    <div class="flex-1 pip md:translate-y-10 translate-y-8 mx-2 rounded-xl h-2  opacity-65 bg-black">
                    </div>
                    <div class="flex flex-col gap-5 flex-1  items-center  opacity-65">
                        <div
                            class=" bg-black text-primary-500 lg:h-20  lg:w-20 md:h-18 md:w-18 h-16 w-16 flex justify-center items-center font-bold text-3xl">
                            2</div>
                        <h2 class="md:text-lg text-sm text-start font-bold  text-black">
                            About the move
                        </h2>
                    </div>
                    <div class="flex-1 pip md:translate-y-10 translate-y-8 mx-2 rounded-xl h-2  opacity-65 bg-black">
                    </div>
                    <div class="flex flex-col gap-5 flex-1  items-center  opacity-65">
                        <div
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

                    <UForm
                        class="p-8 flex w-full lg:w-3/4 pl-8 md:pl-18 xl:pl-36 flex-col gap-10 bg-black   rounded-lg  ">

                        <div class="flex flex-col gap-5" v-if="step == 1">
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
                        </div>

                        <div class="flex flex-col gap-5" v-if="step == 2">
                            <!-- Name Input -->
                            <div class="flex md:flex-row flex-col gap-2 md:gap-10 lg:gap-28 md:items-center w-full">
                                <label class="block w-20 font-bold text-gray-100 text-xl">Type</label>
                                <UInput class="flex-1 relative" icon="i-carbon-user"
                                    inputClass="flex-1 rounded-none bg-[#171820] text-slate-300 ring-0 h-14" size="xl"
                                    placeholder="Enter space" />
                            </div>

                            <div class="flex md:flex-row flex-col gap-2 md:gap-10 lg:gap-28 md:items-center w-full">
                                <label class="block w-20 font-bold text-gray-100 text-xl">Size</label>
                                <UInput class="flex-1 relative" icon="i-carbon-user"
                                    inputClass="flex-1 rounded-none bg-[#171820] text-slate-300 ring-0 h-14" size="xl"
                                    placeholder="Enter space" />
                            </div>

                            <div class="flex md:flex-row flex-col gap-2 md:gap-10 lg:gap-28 md:items-center w-full">
                                <label class="block w-20 font-bold text-gray-100 text-xl">Rooms</label>
                                <UInput class="flex-1 relative" icon="i-carbon-user"
                                    inputClass="flex-1 rounded-none bg-[#171820] text-slate-300 ring-0 h-14" size="xl"
                                    placeholder="Enter space" />
                            </div>


                            <div class="flex md:flex-row flex-col gap-2 md:gap-10 lg:gap-28 md:items-center w-full">
                                <label class="block w-20 font-bold text-gray-100 text-xl">Floor</label>
                                <UInput class="flex-1 relative" icon="i-carbon-email"
                                    inputClass="flex-1 rounded-none bg-[#171820] text-slate-300 ring-0 h-14" size="xl"
                                    placeholder="Enter space" />
                            </div>

                            <!-- Phone Number Input -->
                            <div class="flex md:flex-row flex-col gap-2 md:gap-10 lg:gap-28 md:items-center w-full">
                                <label class="block w-20 font-bold text-gray-100 text-xl">Elevator</label>
                                <UInput class="flex-1 relative" icon="i-carbon-phone"
                                    inputClass="flex-1 rounded-none bg-[#171820] text-slate-300 ring-0 h-14" size="xl"
                                    placeholder="Enter space" />
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
                                <UButton @click="step >1 ? step -= 1 : null" class="h-12 w-12  rounded-sm border border-primary-500 hover:bg-black hover:text-slate-300 
                                text-black font-bold
                                flex justify-center items-center" icon="i-carbon-arrow-left" />
                            </div>
                            <div class="flex-1">

                                <UButton @click="step <2 ? step += 1:  null" size="xl" label="Continue" class=" px-3 md:px-7 rounded-sm border border-primary-500 hover:bg-black hover:text-slate-300 
                    flex justify-center items-center
                                ml-auto
                                lg:ml-0
                    text-black font-bold" />
                            </div>
                        </div>


                        <!-- Submit Button -->
                    </UForm>
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

import background from "/assets/quote.webp"

const step = ref(1)

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