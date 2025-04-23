<template>
    <div class="bg-primary-500 -mt-14  px-5  md:px-12">
        <div class="container">

            <div class="bg-black   sm:-mt-12    lg:-mt-28  px-5 z-40 relative rounded-lg">

                <div class="mx-0   px-0 sm:px-5">
                    <div class="flex flex-col py-10">
                        <h2 class="sm:text-[42px] text-[36px] text-center font-bold  font-jakarta text-white">Our Services </h2>
                        <div class="sm:w-[10%] w-[25%]  h-[1px] mt-[10px]   bg-customPrimary-yellow mx-auto  "></div>
                        <h3 class="sm:text-[24px] text-[20px] text-center font-[400] mt-2  font-jakarta  text-white">Services That Fit
                            Your Needs</h3>
                        <p></p>
                        <div
                            class="grid grid-cols-1 px-0 sm:px-5 md:px-0 md:grid-cols-2  text-white   gap-5  my-10 sm:my-14">

                            <div class="bg-[#171820] text-white  border-0 rounded-sm ring-0">
                                <div class="flex flex-col p-[10px] sm:p-4 xl:flex-row h-full gap-1">
                                    <div class="card-img  h-72">
                                        <img alt="Commercial Moving"
                                            class="lazy-image opacity-0 transition-opacity duration-500 ease-in-out w-full h-full object-cover  rounded-[5px]"
                                            v-lazy="'assets/card1.webp'" />
                                    </div>
                                    <div class="flex flex-col   xl:w-1/2 p-4   text-start text-xl text-white">
                                        <div class=" lg:min-h-[135px] min-h-[200px]">
                                            <h2 class="font-jakarta  font-[600] leading-[35px] text-[24px]">Commercial Moving</h2>
                                            <p
                                                class="text-[16px]  font-[300] tracking-[.3px]  text-wrap font-rubik mt-5">
                                                Relocate your business with minimal downtime. Our professional moving
                                                services ensure a smooth, efficient transition.
                                            </p>
                                        </div>
                                        <ULink to="/services/commercial-moving-service"
                                        class="text-center rounded-[10px] text-sm font-jakarta mb-3 mt-[25px] bg-black hover:bg-primary-500 hover:text-black transition-all px-12 md:px-16 lg:px-4 xl:px-8 py-3 font-bold w-full lg:w-auto">
                                            View Details
                                        </ULink>
                                    </div>

                                </div>
                            </div>

                            <div class="bg-[#171820] text-white   border-0 rounded-none ring-0">
                                <div class="flex flex-col p-[10px] sm:p-4 xl:flex-row h-full gap-1">
                                    <div class="card-img  h-72">
                                        <img alt="Furniture Disassembly"
                                            class="lazy-image opacity-0 transition-opacity duration-500 ease-in-out w-full h-full object-cover  rounded-[5px]"
                                            v-lazy="'assets/card5.webp'" />
                                    </div>
                                    <div class="flex flex-col   xl:w-1/2 p-4   text-start text-xl text-white">
                                        <div class=" lg:min-h-[135px] min-h-[200px]">
                                            <h2 class="font-jakarta  font-[600] leading-[35px]  text-[24px]">Furniture Disassembly</h2>
                                            <p
                                                class="text-[16px]  font-[300] tracking-[.3px]  text-wrap font-rubik mt-5">
                                                We carefully disassemble and reassemble your <b><ULink  target="_blank" to="/services/furniture-assembly-and-disassembly-service"
            class="font-[500]  underline ">
            furniture</ULink></b> for a hassle-free
                                                move, providing safety and efficiency. </p>
                                        </div>
                                        <ULink to="/services/furniture-assembly-and-disassembly-service"
                                        class="text-center rounded-[10px] text-sm font-jakarta mb-3 mt-[25px] bg-black hover:bg-primary-500 hover:text-black transition-all px-12 md:px-16 lg:px-4 xl:px-8 py-3 font-bold w-full lg:w-auto">
                                            View Details
                                        </ULink>
                                    </div>

                                </div>
                            </div>





                            <div class="bg-[#171820] text-white border-0 rounded-none ring-0">
                                <div class="flex flex-col p-[10px] sm:p-4 xl:flex-row h-full gap-1">
                                    <div class="card-img  h-72">
                                        <img alt="Home Movers"
                                            class="lazy-image opacity-0 transition-opacity duration-500 ease-in-out w-full h-full object-cover  rounded-[5px]"
                                            v-lazy="'assets/card3.webp'" />
                                    </div>
                                    <div class="flex flex-col   xl:w-1/2 p-4   text-start text-xl text-white">
                                        <div class=" lg:min-h-[135px] min-h-[200px]">
                                            <h2 class="font-jakarta  font-[600] leading-[35px] text-[24px]">Home Movers</h2>
                                            <p
                                                class="text-[16px]  font-[300] tracking-[.3px]  text-wrap font-rubik mt-5">
                                                From packing to transport, our full-service moving company makes home
                                                relocations easy and stress-free.</p>
                                        </div>
                                        <ULink to="/services"
                                        class="text-center rounded-[10px] text-sm font-jakarta mb-3 mt-[25px] bg-black hover:bg-primary-500 hover:text-black transition-all px-12 md:px-16 lg:px-4 xl:px-8 py-3 font-bold w-full lg:w-auto">
                                            View Details
                                        </ULink>
                                    </div>

                                </div>
                            </div>

                            <div class="bg-[#171820] text-white border-0 rounded-none ring-0">
                                <div class="flex flex-col p-[10px] sm:p-4 xl:flex-row h-full gap-1">
                                    <div class="card-img  h-72">
                                        <img alt="Long Term Storage"
                                            class="lazy-image opacity-0 transition-opacity duration-500 ease-in-out w-full h-full object-cover  rounded-[5px]"
                                            v-lazy="'assets/card4.webp'" />
                                    </div>
                                    <div class="flex flex-col   xl:w-1/2 p-4   text-start text-xl text-white">
                                        <div class=" lg:min-h-[135px] min-h-[200px]">
                                            <h2 class="font-jakarta  font-[600] leading-[35px]  text-[24px]">Long Term Storage</h2>
                                            <p
                                                class="text-[16px]  font-[300] tracking-[.3px]  text-wrap font-rubik mt-5">
                                                Need extra space? Our <b><ULink  target="_blank" to="/services/storage-service"
            class="font-[500]  underline ">
            secure storage solutions</ULink></b> keep your belongings safe
                                                for as long as you need.
                                            </p>
                                        </div>
                                        <ULink to="/services"
                                        class="text-center rounded-[10px] text-sm font-jakarta mb-3 mt-[25px] bg-black hover:bg-primary-500 hover:text-black transition-all px-12 md:px-16 lg:px-4 xl:px-8 py-3 font-bold w-full lg:w-auto">
                                            View Details
                                        </ULink>
                                    </div>

                                </div>
                            </div>

                            <div class="bg-[#171820] text-white  border-0 rounded-sm ring-0">
                                <div class="flex flex-col p-[10px] sm:p-4 xl:flex-row h-full gap-1">
                                    <div class="card-img  h-72">
                                        <img alt="Office Moving"
                                            class="lazy-image opacity-0 transition-opacity duration-500 ease-in-out w-full h-full object-cover  rounded-[5px]"
                                            v-lazy="'assets/card2.webp'" />
                                    </div>
                                    <div class="flex flex-col   xl:w-1/2 p-4   text-start text-xl text-white">
                                        <div class=" lg:min-h-[135px] min-h-[200px]">
                                            <h2 class="font-jakarta  font-[600] leading-[35px]  text-[24px]">Office Moving</h2>
                                            <p
                                                class="text-[16px]  font-[300] tracking-[.3px]  text-wrap font-rubik mt-5">
                                                We handle office relocations precisely, so your team can return to work
                                                quickly and efficiently. </p>
                                        </div>
                                        <ULink to="/services"
                                        class="text-center rounded-[10px] text-sm  font-jakarta mb-3 mt-[25px] bg-black hover:bg-primary-500 hover:text-black transition-all px-12 md:px-16 lg:px-4 xl:px-8 py-3 font-bold w-full lg:w-auto">
                                            View Details
                                        </ULink>
                                    </div>

                                </div>
                            </div>

                            <div class="bg-[#171820] text-white  border-0 rounded-sm ring-0">
                                <div class="flex flex-col p-[10px] sm:p-4 xl:flex-row h-full gap-1">
                                    <div class="card-img  h-72">
                                        <img alt="Packing"
                                            class="lazy-image opacity-0 transition-opacity duration-500 ease-in-out w-full h-full object-cover  rounded-[5px]"
                                            v-lazy="'assets/card81.webp'" />
                                    </div>
                                    <div class="flex flex-col   xl:w-1/2 p-4   text-start text-xl text-white">
                                        <div class=" lg:min-h-[135px] min-h-[200px]">
                                            <h2 class="font-jakarta  font-[600] leading-[35px]  text-[24px]">Packing</h2>
                                            <p
                                                class="text-[16px]  font-[300] tracking-[.3px]  text-wrap font-rubik mt-5">
                                                Leave the <b><ULink  target="_blank" to="/services/packing-and-unpacking-service"
            class="font-[500]  underline ">
            packing</ULink></b>  to us! Our experts use high-quality materials to
                                                protect your belongings during the move. </p>
                                        </div>
                                        <ULink to="/services/packing-and-unpacking-service"
                                           class="text-center rounded-[10px] text-sm font-jakarta mb-3 mt-[25px] bg-black hover:bg-primary-500 hover:text-black transition-all px-12 md:px-16 lg:px-4 xl:px-8 py-3 font-bold w-full lg:w-auto">
                                            View Details
                                        </ULink>
                                    </div>

                                </div>
                            </div>
                            <div class="bg-[#171820] text-white border-0 rounded-none ring-0">
                                <div class="flex flex-col p-[10px] sm:p-4 xl:flex-row h-full gap-1">
                                    <div class="card-img  h-72">
                                        <img alt="Long Distance Moving"
                                            class="lazy-image opacity-0 transition-opacity duration-500 ease-in-out w-full h-full object-cover  rounded-[5px]"
                                            v-lazy="'assets/card7.webp'" />
                                    </div>
                                    <div class="flex flex-col   xl:w-1/2 p-4   text-start text-xl text-white">
                                        <div class=" lg:min-h-[135px] min-h-[200px]">
                                            <h2 class="font-jakarta  font-[600] leading-[35px]  text-[24px]">Long Distance Moving
                                            </h2>
                                            <p
                                                class="text-[16px]  font-[300] tracking-[.3px]  text-wrap font-rubik mt-5">
                                                Moving <b><ULink  target="_blank" to="/services/long-distance-moving-service"
            class="font-[500]  underline ">
            across states</ULink></b>? Our professional staff ensures safe, on-time
                                                delivery wherever you're headed.</p>
                                        </div>
                                        <ULink to="/services/long-distance-moving-service"
                                        class="text-center rounded-[10px] text-sm font-jakarta mb-3 mt-[25px] bg-black hover:bg-primary-500 hover:text-black transition-all px-12 md:px-16 lg:px-4 xl:px-8 py-3 font-bold w-full lg:w-auto">
                                            View Details
                                        </ULink>
                                    </div>

                                </div>
                            </div>
                            <div class="bg-[#171820] text-white border-0 rounded-none ring-0">
    <div class="flex flex-col p-[10px] sm:p-4 xl:flex-row h-full gap-1">
        <div class="card-img   h-72">
            <img alt="Equipment Relocation"
                class="lazy-image opacity-0 transition-opacity duration-500 ease-in-out w-full h-full object-cover rounded-[5px]"
                v-lazy="'assets/card92.webp'" />
        </div>
        <div class="flex flex-col  xl:w-1/2 p-4 text-start text-xl text-white ">
            <div class="lg:min-h-[135px] min-h-[200px]">
                <h2 class="font-jakarta font-[600] leading-[35px] text-[24px]">Equipment Relocation</h2>
                <p class="text-[16px] font-[300] tracking-[.3px] text-wrap font-rubik mt-5">
                    We specialize in moving heavy and delicate equipment with precision and
                    care to prevent damage.
                </p>
            </div>
            <ULink to="/services"
                class="text-center rounded-[10px] text-sm font-jakarta mb-3 mt-[25px] bg-black hover:bg-primary-500 hover:text-black transition-all px-12 md:px-16 lg:px-4 xl:px-8 py-3 font-bold w-full lg:w-auto">
                View Details
            </ULink>
        </div>
    </div>
</div>


                        </div>


                    </div>
                </div>
            </div>

            <div class="mt-10 px-5 p-6 bg-black rounded-[10px] shadow-md">
                <div class=" sm:m-5 p-6 bg-[#171820]">
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
                    <UButton size="xl" label="
                        About us " to="/about-us" type="about us"
                        class=" mt-6 bg-black text-white px-7 py-2 transition-all  font-jakarta rounded-[10px] text-lg font-bold hover:text-black border border-black hover:bg-primary-500 " />



                </div>
            </div>

            <div class="sm:py-20 py-10">
                <!-- <h2 class="md:px-16 px-5 md:text-5xl text-4xl text-start font-bold  font-jakarta text-black my-16 sm:my-20">Where to find
                us</h2> -->
                <div class="flex flex-col-reverse lg:flex-row gap-16">
    <!-- <div> -->
                    <!-- <UForm @submit="submit" class="p-8 flex flex-col bg-black max-w-full xl:max-w-[550px] md:max-w-[400px] rounded-[10px] w-full"> -->
        <!-- <h2 class="text-primary-500 font-jakarta text-2xl font-bold">Contact us</h2> -->

        <!-- Name Input -->
        <!-- <UFormGroup class="my-2" label="Name"> -->
    <!-- <UInput v-model="data.name"
            icon="i-heroicons-user"
            @blur="validateName"
            :inputClass="`rounded-[10px] placeholder:text-white bg-[#171820] text-white ${errors.name ? 'ring-red-500' : 'ring-gray-800'} h-14`"
            size="xl"
            <!-- placeholder="Enter your full name" />
    <span v-if="errors.name" class="text-red-500 text-sm mt-1 block">
        {{ errors.name }}
    </span>
</UFormGroup> -->

        <!-- Phone Input -->
        <!-- <UFormGroup class="my-2" label="Phone Number">
            <UInput v-model="data.mobile" icon="i-heroicons-phone"
                :inputClass="`rounded-[10px] bg-[#171820] placeholder:text-white text-white ${errors.mobile ? 'ring-red-500' : 'ring-gray-800'} h-14`"
                size="xl" placeholder="Enter your phone number" />
            <span v-if="errors.mobile" class="text-red-500 text-sm mt-1 block">{{ errors.mobile }}</span>
        </UFormGroup> -->

        <!-- Email Input -->
        <!-- <UFormGroup class="my-2" label="E-mail">
            <UInput v-model="data.email" icon="i-heroicons-envelope"
                :inputClass="`rounded-[10px] bg-[#171820] placeholder:text-white text-white ${errors.email ? 'ring-red-500' : 'ring-gray-800'} h-14`"
                size="xl" placeholder="Enter your email" />
            <span v-if="errors.email" class="text-red-500 text-sm mt-1 block">{{ errors.email }}</span>
        </UFormGroup> -->

        <!-- Message Input -->
        <!-- <UFormGroup class="my-2" label="Message">
            <UTextarea v-model="data.message"
                :textareaClass="`bg-[#171820] text-white placeholder:text-white rounded-[10px] ring-gray-800 h-32 ${errors.message ? 'ring-red-500' : 'ring-gray-800'}`"
                placeholder="Type your inquiry" />
            <span v-if="errors.message" class="text-red-500 text-sm mt-1 block">{{ errors.message }}</span>
        </UFormGroup> -->

        <!-- <UButton size="xl" label="Submit" type="submit"
            class="py-2 justify-self-end px-3 md:px-7 rounded-[10px] border border-primary-500 hover:bg-black hover:text-white mt-10 ml-auto text-black font-bold" />
    </UForm> -->
<!-- </div> -->
<div class="p-8 flex flex-col bg-black max-w-full xl:max-w-[550px] rounded-[10px] w-full">
              <div class="flex flex-col">
                  <h2 class=" text-4xl text-center font-bold text-white  ">
               Free Moving Quote
                  </h2>

                  <div class="md:px-10 sm:px-5  px-1 flex justify-around mt-10">
    <!-- Step 1 -->
    <div class="flex flex-col gap-5 flex-1 items-center">
        <div :class="{
            'bg-primary-500 text-black': step === 1,
            'bg-primary-500 text-white': step !== 1
        }" class="lg:h-20 lg:w-20 md:h-18 md:w-18 h-16 w-16 flex justify-center items-center font-bold text-3xl rounded-[10px]">
            1
        </div>
        <h2 class="text-[14px]  text-center font-jakarta font-bold text-white">
            Moving info
        </h2>
    </div>

    <div class="flex-1 pip md:translate-y-10 translate-y-8 mx-2 rounded-xl h-2 bg-primary-500"></div>

    <!-- Step 2 -->
    <div class="flex flex-col gap-5 flex-1 items-center">
        <div :class="{
            'bg-primary-500 text-black': step === 2,
            'bg-primary-500 text-white': step !== 2,
            'opacity-50': step < 2
        }" class="lg:h-20 lg:w-20 md:h-18 md:w-18 h-16 w-16 flex justify-center items-center font-bold text-3xl rounded-[10px]">
            2
        </div>
        <h2 class="text-[14px]  font-jakarta text-center  font-bold text-white">
            Personal Detail
        </h2>
    </div>

    <div class="flex-1 pip md:translate-y-10 translate-y-8 mx-2 rounded-xl h-2 bg-primary-500"></div>

    <!-- Step 3 -->
    <div class="flex flex-col gap-5 flex-1 font-jakarta items-center">
        <div :class="{
            'bg-primary-500 text-white': step === 3,
            'bg-primary-500 text-gray-100': step !== 3,
            'opacity-50': step < 3
        }" class="lg:h-20 lg:w-20 md:h-18 md:w-18 h-16 w-16 flex justify-center items-center font-bold text-3xl rounded-[10px]">
            3
        </div>
        <h2 class="text-[14px] font-jakarta text-center font-bold text-white">
            Job done
        </h2>
    </div>
</div>
              </div>

                  <!-- Step 3: Success Message -->
                  <div class="flex flex-col items-center justify-center gap-5 mt-5" v-if="isDone">
                      <DotLottieVue  class="w-full h-auto sm:w-[300px] sm:h-[300px]"  autoplay loop
                          src="https://lottie.host/5985b015-e571-4f7b-b9ac-212322831da2/vej1PvvYj0.json" />
                      <h4 class="text-primary-500  text-[18px] sm:text-[32px] text-center  font-jakarta sm:px-10 font-bold">Thank you for choosing us</h4>
                      <p class="text-gray-400 text-xl  font-jakarta text-center font-bold">We will contact you shortly!</p>
                  </div>

                  <!-- Step 1: Moving Info -->
                  <div v-else-if="step === 1" class="bg-black  flex flex-col lg:flex-row justify-center items-center md:p-5 flex-1 h-full">
                      <div class="p-4 flex w-full    px-2 flex-col gap-6 bg-black rounded-none">
                          <div class="flex flex-col gap-5">
                              <!-- Property Type Select -->


                              <!-- ZIP Code Inputs -->
                              <div class="flex gap-6  flex-col justify-between">
                                  <div class="flex md:flex-row flex-col gap-2   md:items-baseline w-full">
                                      <label class="block   w-16 font-bold text-gray-100 font-jakarta text-xl">From</label>
                                      <div class="flex-1">
                                          <UInput
                                              type="text"
                                              v-model="quoteForm.fromZIP"
                                              @blur="validateField('fromZIP')"
                                              @input="handleZipInput('fromZIP')"
                                              class="relative w-full"
                                              icon="i-carbon-location-heart-filled"

                                              :inputClass="`
                                                  flex-1 rounded-[10px] placeholder:font-jakarta bg-[#171820] text-slate-300 ring-0 h-14
                                                  ${errors.fromZIP.status ? 'border-2  !border-red-500 focus:ring-red-500' : 'focus:ring-primary'}
                                              `"
                                              size="xl"
                                              placeholder="ZIP code"
                                              maxlength="5" />
                                          <span v-if="errors.fromZIP.status" class="text-red-500 font-jakarta text-sm mt-1 block">
                                              {{ errors.fromZIP.message }}
                                          </span>
                                      </div>
                                  </div>

                                  <div class="flex md:flex-row flex-col gap-2 md:items-baseline  w-full justify-between">
                                      <label class="block  w-16 font-bold font-jakarta text-gray-100 text-xl">To</label>
                                      <div class="flex-1">
                                          <UInput
                                              type="text"
                                              v-model="quoteForm.toZIP"
                                              @blur="validateField('toZIP')"
                                              @input="handleZipInput('toZIP')"
                                              class="relative w-full"
                                              icon="i-carbon-location-heart-filled"
                                              :inputClass="`
                                                  flex-1 rounded-[10px] placeholder:font-jakarta bg-[#171820] text-slate-300 ring-0 h-14
                                                  ${errors.toZIP.status ? 'border-2 !border-red-500 focus:ring-red-500' : 'focus:ring-primary'}
                                              `"
                                              size="xl"
                                              placeholder="ZIP code"
                                              maxlength="5" />
                                          <span v-if="errors.toZIP.status" class="text-red-500 font-jakarta text-sm mt-1 block">
                                              {{ errors.toZIP.message }}
                                          </span>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div class="flex md:flex-row flex-col gap-2 md:items-baseline  w-full">
                                  <label class="block  w-16 font-bold font-jakarta text-gray-100 text-xl">Size</label>
                                  <div class="flex-1">
                                 <div class="!font-jakarta">   <USelectMenu
    :selectClass="`${showErrors && errors.type.status ? 'border-2 !border-red-500 focus:ring-red-500' : ''} flex-1 rounded-[10px] bg-[#171820] text-slate-300 ring-0 h-14`"
    @update:model-value="quoteForm.type ? errors.type.status = false : null"
    v-model="quoteForm.type"
    :options="houseTypes"
    class="flex-1 relative universal-placeholder"
    icon="i-carbon-building"
    size="xl"
    placeholder="Select type"
  />

<span v-if="showErrors && errors.type.status" class="text-red-500  font-jakarta text-sm mt-1 block">
  {{ errors.type.message }}
</span>
</div>
                                  </div>
                              </div>
                              <div class="flex md:flex-row flex-col gap-2 md:items-center w-full">
    <label class="block w-16 font-bold text-gray-100 text-xl">Date</label>
    <div class="flatpickr-wrapper flex-1 relative">
      <div class="relative">
        <input
          ref="dateInput"
          type="text"
          placeholder="Select moving date"
          :class="[
            showErrors && errors.date.status ? '!border-2 !border-red-500' : 'border border-gray-700',
            'flex-1 rounded-[10px] placeholder:font-jakarta bg-[#171820] text-slate-300 px-4 py-3 pl-12',
            'focus:ring-2 focus:ring-primary-500 focus:border-primary-500 focus:outline-none',
            'w-full '
          ]"
        />
        <div
          class="absolute left-3 top-[56%] transform -translate-y-1/2 text-gray-400 pointer-events-none"
          tabindex="-1"
        >
          <UIcon name="i-heroicons-calendar-days" class="w-9 h-[27px]" />
        </div>
      </div>
      <span
        v-if="showErrors && errors.date.status"
        class="text-red-500 font-jakarta text-sm mt-1 block"
      >
        {{ errors.date.message }}
      </span>
    </div>
  </div>
                          <!-- Navigation Buttons -->
                          <div class="flex gap-2 md:gap-10 lg:gap-28 md:items-center w-full">
                              <div class="flex-1">
                                  <!-- Back button disabled on first step -->
                                  <UButton
                                  aria-label="back"
                                      disabled
                                      class="h-12 w-12 rounded-[10px] border border-primary-500 font-jakarta hover:bg-black hover:text-slate-300 text-black font-bold flex justify-center items-center opacity-50"
                                      icon="i-carbon-arrow-left" />
                              </div>
                              <div class="flex-1 flex justify-end">
                                  <UButton
                                      @click="nextStep(1)"
                                      size="xl"
                                      :label="'Next'"
                                      class="px-3 md:px-7 rounded-[10px]  border border-primary-500 font-jakarta hover:bg-black hover:text-slate-300 flex justify-center items-center ml-auto lg:ml-0 text-black font-bold" />
                              </div>
                          </div>
                      </div>
                  </div>

                  <!-- Step 2: Personal Details -->
                  <div v-else-if="step === 2" class="bg-black flex flex-col lg:flex-row justify-center items-center md:p-5 flex-1 h-full">
                      <div class="p-4 flex w-full  flex-col gap-10 bg-black rounded-none">
                          <div class="flex flex-col gap-5">
                              <!-- Name Inputs -->
                              <div class="flex     md:flex-row flex-col gap-2   md:items-baseline w-full">
                                  <label class="block   w-20  font-bold font-jakarta text-gray-100 text-xl">Name</label>
                                  <div class="flex  gap-6 flex-1 flex-col">
                                      <div class="flex-1 font-jakarta">
                                          <UInput
                                              :inputClass="`font-jakarta placeholder:font-jakarta ${errors.firstName.status ? 'border-2 placeholder:font-jakarta !border-red-500 focus:ring-red-500' : ''} flex-1 rounded-[10px] bg-[#171820] text-slate-300 ring-0 h-14`"
                                              @blur="validateField('firstName')"
                                              v-model="quoteForm.firstName"
                                              class="flex-1 relative"
                                              icon="i-carbon-user"
                                              size="xl"
                                              placeholder="First name" />
                                          <span v-if="errors.firstName.status" class="text-red-500  font-jakarta text-sm mt-1 block">
                                              {{ errors.firstName.message }}
                                          </span>
                                      </div>
                                      <div class="flex-1">
                                          <UInput
                                              :inputClass="`font-jakarta placeholder:font-jakarta ${errors.lastName.status ? 'border-2 placeholder:font-jakarta  font-jakarta !border-red-500 focus:ring-red-500' : ''} flex-1 rounded-[10px] bg-[#171820] text-slate-300 ring-0 h-14`"
                                              @blur="validateField('lastName')"
                                              v-model="quoteForm.lastName"
                                              class="flex-1 relative"
                                              icon="i-carbon-user"
                                              size="xl"
                                              placeholder="Last name" />
                                          <span v-if="errors.lastName.status" class="text-red-500 font-jakarta text-sm mt-1 block">
                                              {{ errors.lastName.message }}
                                          </span>
                                      </div>
                                  </div>
                              </div>

                              <!-- Email Input -->
                              <div class="flex md:flex-row flex-col gap-2  md:items-center w-full">
                                  <label class="block   w-20 font-bold font-jakarta text-gray-100 text-xl">E-mail</label>
                                  <div class="flex-1">
                                      <UInput
                                          @blur="validateField('email')"
                                          v-model="quoteForm.email"
                                          class="flex-1 relative"
                                          icon="i-carbon-email"
                                          :inputClass="` font-jakarta placeholder:font-jakarta ${errors.email.status ? 'border-2 placeholder:font-jakarta !border-red-500 focus:ring-red-500' : ''} flex-1 rounded-[10px] bg-[#171820] text-slate-300 ring-0 h-14`"
                                          size="xl"
                                          placeholder="Someone@example.com" />
                                      <span v-if="errors.email.status" class="text-red-500 font-jakarta text-sm mt-1 block">
                                          {{ errors.email.message }}
                                      </span>
                                  </div>
                              </div>

                              <!-- Mobile Input -->
                              <div class="flex md:flex-row flex-col gap-2   md:items-center w-full">
                                  <label class="block   w-20 font-bold font-jakarta text-gray-100 text-xl">Mobile</label>
                                  <div class="flex-1">
                                    <UInput
                            type="tel"
                       v-model="quoteForm.mobile"
                        @blur="validateField('mobile')"
                          @input="handleMobileInput"
                            class="relative w-full"
                             icon="i-carbon-phone-filled"
                                    :inputClass="`
                               flex-1 rounded-[10px] font-jakarta placeholder:font-jakarta bg-[#171820] text-slate-300 ring-0 h-14
                               ${errors.mobile.status ? 'border-2 !border-red-500 focus:ring-red-500' : 'focus:ring-primary'}
                                     `"
                                            size="xl"
                                            placeholder="Enter Mobile Number"
                                         maxlength="15"
                                                  />
                                      <span v-if="errors.mobile.status" class="text-red-500 font-jakarta text-sm mt-1 block">
                                          {{ errors.mobile.message }}
                                      </span>
                                  </div>
                              </div>
                          </div>

                          <!-- Navigation Buttons -->
                          <div class="flex gap-2 md:gap-10  md:items-center w-full">
                              <div class="flex-1">
                                  <UButton
                                      @click="step -= 1"
                                      class="h-12 w-12 rounded-[10px] border border-primary-500 font-jakarta hover:bg-black hover:text-slate-300 text-black font-bold flex justify-center items-center"
                                      icon="i-carbon-arrow-left" />
                              </div>
                              <div class="flex-1 flex justify-end">
                                  <UButton
                                      :loading="isLoading"
                                      @click="submit"
                                      size="xl"
                                      :label="'Submit'"
                                      class="px-3 md:px-7 rounded-[10px]  border border-primary-500 font-jakarta hover:bg-black hover:text-slate-300 flex justify-center items-center ml-auto lg:ml-0 text-black font-bold" />
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

    <div class="rounded-[10px] md:block hidden card-img xl:min-w-[450px] sm:min-w-96 min-w-0 h-96 md:h-auto overflow-hidden border-4 border-gray-500 w-full">
        <img alt="goodview contact us"
            class="lazy-image opacity-0 transition-opacity duration-500 ease-in-out w-full h-full object-cover rounded-none"
            v-lazy="'/assets/contact_us.webp'" />
    </div>
</div>

                <Trusted />
            </div>
        </div>

    </div>
</template>

<script setup>

// const data = reactive({
//     name: '',
//     mobile: '',
//     email: '',
//     message: ''
// });

// const errors = reactive({
//     name: '',
//     mobile: '',
//     email: '',
//     message: ''
// });

// // Validation functions
// const validateName = () => {
//     if (!data.name.trim()) {
//         errors.name = 'Name is required';
//         return false;
//     }
//     else if (/\d/.test(data.name)) {  // Check for any numbers
//         errors.name = 'Name should not contain numbers';
//         return false;
//     }
//     else if (data.name.length < 3) {
//         errors.name = 'Name too short (min 3 letters)';
//         return false;
//     }

//     errors.name = '';
//     return true;
// };
// const validateMobile = () => {
//     // Allows:
//     // - Optional + at start
//     // - Spaces, hyphens, or dots as separators
//     // - 8-15 digits (standard for international numbers)
//     const phoneRegex = /^\+?[\d\s\-\.]{8,15}$/;

//     if (!data.mobile?.trim()) {
//         errors.mobile = 'Phone number is required';
//         return false;
//     }

//     // Remove all non-digit characters to check length
//     const digitsOnly = data.mobile.replace(/\D/g, '');

//     if (digitsOnly.length < 8 || digitsOnly.length > 15) {
//         errors.mobile = 'Phone number must be 8-15 digits long';
//         return false;
//     }

//     if (!phoneRegex.test(data.mobile)) {
//         errors.mobile = 'Please enter a valid international phone number (e.g., +1 973-782-1339)';
//         return false;
//     }

//     errors.mobile = '';
//     return true;
// };

// const validateEmail = () => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!data.email.trim()) {
//         errors.email = 'Email is required';
//         return false;
//     } else if (!emailRegex.test(data.email)) {
//         errors.email = 'Please enter a valid email address';
//         return false;
//     }
//     errors.email = '';
//     return true;
// };

// const validateMessage = () => {
//     if (!data.message.trim()) {
//         errors.message = 'Message is required';
//         return false;
//     } else if (data.message.length < 10) {
//         errors.message = 'Message must be at least 10 characters';
//         return false;
//     }
//     errors.message = '';
//     return true;
// };

// const submit = () => {
//     const isNameValid = validateName();
//     const isMobileValid = validateMobile();
//     const isEmailValid = validateEmail();
//     const isMessageValid = validateMessage();

//     if (isNameValid && isMobileValid && isEmailValid && isMessageValid) {
//         // Form is valid, submit the data
//         console.log('Form submitted:', data);
//         // Add your form submission logic here
//     }
// };
import Pikaday from 'pikaday';
import 'pikaday/css/pikaday.css';
import { ref, onMounted, onBeforeUnmount, watch, nextTick } from 'vue';
import {  reactive } from "vue";
import { useRoute } from "vue-router";
import { DotLottieVue } from "@lottiefiles/dotlottie-vue";

const step = ref(1);
const isDone = ref(false);
const isLoading = ref(false);
const showErrors = ref(false);

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
{ value: "other", label: "Other" },
];

const route = useRoute();

const quoteForm = ref({
firstName: "",
lastName: "",
email: "",
mobile: "",
customer_id: "",
type: "",
size: "",
rooms: "",
floor: "",
quote_id: "",
state: "",
city: "",
elevator: false,
fromStreet: "",
fromZIP: route.query.from || "",
toStreet: "",
toZIP: route.query.to || "",
date: new Date(),
});

const errors = reactive({
firstName: { status: false, message: "Please enter a valid first name (letters only)" },
lastName: { status: false, message: "Please enter a valid last name (letters only)" },
email: { status: false, message: "Please enter a valid email address" },
mobile: { status: false, message: "Please enter a valid mobile number" },
type: { status: false, message: "Please select a property type" },
fromZIP: { status: false, message: "Please enter a 5-digit ZIP code" },
toZIP: { status: false, message: "Please enter a 5-digit ZIP code" },
date: { status: false, message: "Please select a valid date" }
});

const handleZipInput = (field) => {
quoteForm.value[field] = quoteForm.value[field].replace(/\D/g, '').slice(0, 5);
};

const validateName = (name) => {
const nameRegex = /^[A-Za-z]+$/;
return nameRegex.test(name);
};
const handleMobileInput = () => {
  // Preserve + at start if present
  if (quoteForm.value.mobile.startsWith('+')) {
    quoteForm.value.mobile = '+' + quoteForm.value.mobile.slice(1).replace(/\D/g, '');
  } else {
    quoteForm.value.mobile = quoteForm.value.mobile.replace(/\D/g, '');
  }
};

const dateInput = ref(null);
let picker = null;

onMounted(() => {
  // Initialize Pikaday when the component is mounted
  initPikaday();
});

onBeforeUnmount(() => {
  // Destroy Pikaday instance before the component is unmounted
  if (picker) {
    picker.destroy();
    picker = null;
  }
});

watch(step, (newStep) => {
  // Re-initialize Pikaday when step changes back to 1
  if (newStep === 1) {
    nextTick(() => {
      if (picker) picker.destroy();
      initPikaday();
    });
  }
});

// Initialize Pikaday
function initPikaday() {
  picker = new Pikaday({
    field: dateInput.value, // Bind to the input field
    format: 'MM/DD/YYYY',  // Date format (MM/DD/YYYY)
    minDate: new Date(),    // Disable past dates
    setDefaultDate: true,   // Set the default date as current or passed value
    defaultDate: quoteForm.value.date || new Date(),
    onSelect: function (date) {
      // Update form with selected date
      quoteForm.value.date = date;
      quoteForm.value.day = false;
      errors.date.status = false;
    },
    onClose: function () {
      // Set error if no date is selected
      setTimeout(() => {
        if (!quoteForm.value.date) {
          errors.date.status = true;
        }
      }, 50);
    }
  });
}

const validateEmail = (email) => {
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
return emailRegex.test(email);
};

const validateMobile = (mobile) => {
  if (!mobile) return false;

  // Clean the input by removing all non-digit characters except leading +
  const cleaned = mobile.startsWith('+')
    ? '+' + mobile.slice(1).replace(/\D/g, '')
    : mobile.replace(/\D/g, '');

  // Check for international format (+ followed by 10-15 digits total)
  if (cleaned.startsWith('+')) {
    const digitCount = cleaned.slice(1).length;
    return digitCount >= 10 && digitCount <= 15;
  }

  // Check for regular 10-digit format
  return cleaned.length === 10 && /^\d+$/.test(cleaned);
};

const validateZIP = (zip) => {
return zip.length === 5 && /^\d+$/.test(zip);
};
const validateField = (field) => {
  switch(field) {
    case 'firstName':
      errors.firstName.status = !validateName(quoteForm.value.firstName);
      break;
    case 'lastName':
      errors.lastName.status = !validateName(quoteForm.value.lastName);
      break;
    case 'email':
      errors.email.status = !validateEmail(quoteForm.value.email);
      break;
    case 'mobile':
      errors.mobile.status = !validateMobile(quoteForm.value.mobile);
      break;
    case 'type':
      errors.type.status = !quoteForm.value.type;
      break;
    case 'fromZIP':
      errors.fromZIP.status = !validateZIP(quoteForm.value.fromZIP);
      break;
    case 'toZIP':
      errors.toZIP.status = !validateZIP(quoteForm.value.toZIP);
      break;
    case 'date':
      // Simple validation like other fields - just check if exists
      errors.date.status = !quoteForm.value.date;
      break;
  }
};

const nextStep = (currentStep) => {
  showErrors.value = true;

  // Validate all required fields for this step
  validateField('type');
  validateField('fromZIP');
  validateField('toZIP');
  validateField('date');

  // Only proceed if no errors
  if (!errors.type.status &&
      !errors.fromZIP.status &&
      !errors.toZIP.status &&
      !errors.date.status) {
    step.value += 1;
    showErrors.value = false;
  }
};
const submit = async () => {
// Validate all fields
validateField('firstName');
validateField('lastName');
validateField('email');
validateField('mobile');

// Check if any errors exist
const hasErrors = Object.values(errors).some(error => error.status);
if (hasErrors) {
  return;
}

isLoading.value = true;

try {
  const response = await $fetch("https://api.goodview-moving.com/api/quote", {
    method: "POST",
    body: {
      firstName: quoteForm.value.firstName,
      lastName: quoteForm.value.lastName,
      email: quoteForm.value.email,
      mobile: quoteForm.value.mobile,
      type: quoteForm.value.type,
      note: quoteForm.value.note || "",
      elevator: quoteForm.value.elevator,
      floor: quoteForm.value.floor || "",
      customer_id: quoteForm.value.customer_id || "",
      inOut: quoteForm.value.inOut || "",
      state: quoteForm.value.state || "",
      from_zip: quoteForm.value.fromZIP,
      to_zip: quoteForm.value.toZIP,
      from_address: quoteForm.value.fromStreet || "",
      to_address: quoteForm.value.toStreet || "",
      date: quoteForm.value.date,
    },
  });

  if (response) {
    isDone.value = true;
    step.value = 3;
  }
} catch (error) {
  console.error("Error submitting the form:", error);
} finally {
  isLoading.value = false;
}
};
watch(() => quoteForm.date, (newDate) => {
  if (flatpickrInstance) {
    flatpickrInstance.setDate(newDate, false);
  }
});
</script>
