<template>
    <div>
        <div class="bg-primary-500 -mt-14  px-5 pt-[40px]  md:px-12">
            <div class="container">

                <div class="bg-black   sm:-mt-12    lg:-mt-40    px-5 z-40  rounded-lg">

                    <div class="mx-0   px-0 sm:px-5">
                        <div class="flex flex-col py-10">
                            <h2 class=" text-[36px] text-center font-bold  font-jakarta text-white">Our
                                Services </h2>
                            <div class="sm:w-[10%] w-[25%]  h-[1px] mt-[10px]   bg-customPrimary-yellow mx-auto  ">
                            </div>
                            <h3 class=" text-center font-[400] mt-2  font-jakarta  text-white">
                                Services That Fit
                                Your Needs</h3>
                            <p></p>
                            <div
                                class="grid grid-cols-1 px-0 sm:px-5 md:px-0 md:grid-cols-2  text-white   gap-5  my-10 sm:my-14">

                                <div class="bg-[#171820] text-white  border-0 rounded-sm ring-0">
                                    <div class="flex flex-col p-[10px] sm:p-4 xl:flex-row h-full gap-1">
                                        <div class="card-img  ">
                                            <img alt="Commercial Moving"
                                                class="lazy-image opacity-0 transition-opacity duration-500 ease-in-out w-full h-full object-cover  rounded-[5px]"
                                                v-lazy="'/imgs/card1.webp'" />
                                        </div>
                                        <div class="flex flex-col   xl:w-1/2 p-4   text-start text-xl text-white">
                                            <div class=" lg:min-h-[135px] min-h-[200px] mb-[12px]">
                                                <h2 class="font-jakarta  font-[600] leading-[46px]">Commercial
                                                    Moving</h2>
                                                <p
                                                    class="text-[16px]  font-[300] tracking-[.3px]  text-wrap font-rubik mt-5">
                                                    Relocate your business with minimal downtime. Our professional
                                                    moving
                                                    services ensure a smooth, efficient transition.
                                                </p>
                                            </div>
                                            <ULink to="/services/commercial-moving-service"
                                                class="text-center rounded-[10px] text-sm font-jakarta mb-3 mt-auto bg-black hover:bg-primary-500 hover:text-black transition-all px-12 md:px-16 lg:px-4 xl:px-8 py-3 font-bold w-full lg:w-auto">
                                                View Details
                                            </ULink>
                                        </div>

                                    </div>
                                </div>

                                <div class="bg-[#171820] text-white   border-0 rounded-none ring-0">
                                    <div class="flex flex-col p-[10px] sm:p-4 xl:flex-row h-full gap-1">
                                        <div class="card-img  ">
                                            <img alt="Furniture Disassembly"
                                                class="lazy-image opacity-0 transition-opacity duration-500 ease-in-out w-full h-full object-cover  rounded-[5px]"
                                                v-lazy="'/imgs/card5.webp'" />
                                        </div>
                                        <div class="flex flex-col   xl:w-1/2 p-4   text-start text-xl text-white">
                                            <div class=" lg:min-h-[135px] min-h-[200px] mb-[12px]">
                                                <h2 class="font-jakarta  font-[600] leading-[46px]">Furniture
                                                    Disassembly</h2>
                                                <p
                                                    class="text-[16px]  font-[300] tracking-[.3px]  text-wrap font-rubik mt-5">
                                                    We carefully disassemble and reassemble your

                                                    furniture for a hassle-free
                                                    move, providing safety and efficiency. </p>
                                            </div>
                                            <ULink to="/services/furniture-assembly-and-disassembly-service"
                                                class="text-center rounded-[10px] text-sm font-jakarta mb-3 mt-auto bg-black hover:bg-primary-500 hover:text-black transition-all px-12 md:px-16 lg:px-4 xl:px-8 py-3 font-bold w-full lg:w-auto">
                                                View Details
                                            </ULink>
                                        </div>

                                    </div>
                                </div>





                                <div class="bg-[#171820] text-white border-0 rounded-none ring-0">
                                    <div class="flex flex-col p-[10px] sm:p-4 xl:flex-row h-full gap-1">
                                        <div class="card-img  ">
                                            <img alt="Home Movers"
                                                class="lazy-image opacity-0 transition-opacity duration-500 ease-in-out w-full h-full object-cover  rounded-[5px]"
                                                v-lazy="'/imgs/card3.webp'" />
                                        </div>
                                        <div class="flex flex-col   xl:w-1/2 p-4   text-start text-xl text-white">
                                            <div class=" lg:min-h-[135px] min-h-[200px] mb-[12px]">
                                                <h2 class="font-jakarta  font-[600] leading-[46px]">Residential Moving
                                                </h2>
                                                <p
                                                    class="text-[16px]  font-[300] tracking-[.3px]  text-wrap font-rubik mt-5">
                                                    From packing to transport, our full-service moving company makes
                                                    home
                                                    relocations easy and stress-free.</p>
                                            </div>
                                            <ULink to="/services/residential-moving-service"
                                                class="text-center rounded-[10px] text-sm font-jakarta mb-3 mt-auto bg-black hover:bg-primary-500 hover:text-black transition-all px-12 md:px-16 lg:px-4 xl:px-8 py-3 font-bold w-full lg:w-auto">
                                                View Details
                                            </ULink>
                                        </div>

                                    </div>
                                </div>

                                <div class="bg-[#171820] text-white border-0 rounded-none ring-0">
                                    <div class="flex flex-col p-[10px] sm:p-4 xl:flex-row h-full gap-1">
                                        <div class="card-img  ">
                                            <img alt="Long Term Storage"
                                                class="lazy-image opacity-0 transition-opacity duration-500 ease-in-out w-full h-full object-cover  rounded-[5px]"
                                                v-lazy="'/imgs/card4.webp'" />
                                        </div>
                                        <div class="flex flex-col   xl:w-1/2 p-4   text-start text-xl text-white">
                                            <div class=" lg:min-h-[135px] min-h-[200px] mb-[12px]">
                                                <h2 class="font-jakarta  font-[600] leading-[46px]">Storage Units</h2>
                                                <p
                                                    class="text-[16px]  font-[300] tracking-[.3px]  text-wrap font-rubik mt-5">
                                                    Need extra space ? Our secure storage solutions
                                                    keep your belongings safe
                                                    for as long as you need.
                                                </p>
                                            </div>
                                            <ULink to="/services/storage-service"
                                                class="text-center rounded-[10px] text-sm font-jakarta mb-3 mt-auto bg-black hover:bg-primary-500 hover:text-black transition-all px-12 md:px-16 lg:px-4 xl:px-8 py-3 font-bold w-full lg:w-auto">
                                                View Details
                                            </ULink>
                                        </div>

                                    </div>
                                </div>

                                <div class="bg-[#171820] text-white  border-0 rounded-sm ring-0">
                                    <div class="flex flex-col p-[10px] sm:p-4 xl:flex-row h-full gap-1">
                                        <div class="card-img  ">
                                            <img alt="Office Moving"
                                                class="lazy-image opacity-0 transition-opacity duration-500 ease-in-out w-full h-full object-cover  rounded-[5px]"
                                                v-lazy="'/imgs/card2.webp'" />
                                        </div>
                                        <div class="flex flex-col   xl:w-1/2 p-4   text-start text-xl text-white">
                                            <div class=" lg:min-h-[135px] min-h-[200px] mb-[12px]">
                                                <h2 class="font-jakarta  font-[600] leading-[46px]">Office
                                                    Moving</h2>
                                                <p
                                                    class="text-[16px]  font-[300] tracking-[.3px]  text-wrap font-rubik mt-5">
                                                    We handle office relocations precisely, so your team can return to
                                                    work
                                                    quickly and efficiently. </p>
                                            </div>
                                            <ULink to="/quote"
                                                class="text-center rounded-[10px] text-sm  font-jakarta mb-3 mt-auto bg-black hover:bg-primary-500 hover:text-black transition-all px-12 md:px-16 lg:px-4 xl:px-8 py-3 font-bold w-full lg:w-auto">
                                                View Details
                                            </ULink>
                                        </div>

                                    </div>
                                </div>
                                <div class="bg-[#171820] text-white  border-0 rounded-sm ring-0">
                                    <div class="flex flex-col p-[10px] sm:p-4 xl:flex-row h-full gap-1">
                                        <div class="card-img  ">
                                            <img alt="Packing"
                                                class="lazy-image opacity-0 transition-opacity duration-500 ease-in-out w-full h-full object-cover  rounded-[5px]"
                                                v-lazy="'/imgs/card81.webp'" />
                                        </div>
                                        <div class="flex flex-col   xl:w-1/2 p-4   text-start text-xl text-white">
                                            <div class=" lg:min-h-[135px] min-h-[200px] mb-[12px]">
                                                <h2 class="font-jakarta  font-[600] leading-[46px]">Packing and
                                                    Unpacking
                                                </h2>
                                                <p
                                                    class="text-[16px]  font-[300] tracking-[.3px]  text-wrap font-rubik mt-5">
                                                    Leave the
                                                    packing to us! Our experts use high-quality materials to
                                                    protect your belongings during the move. </p>
                                            </div>
                                            <ULink to="/services/packing-and-unpacking-service"
                                                class="text-center rounded-[10px] text-sm font-jakarta mb-3 mt-auto bg-black hover:bg-primary-500 hover:text-black transition-all px-12 md:px-16 lg:px-4 xl:px-8 py-3 font-bold w-full lg:w-auto">
                                                View Details
                                            </ULink>
                                        </div>

                                    </div>
                                </div>
                                <div class="bg-[#171820] text-white border-0 rounded-none ring-0">
                                    <div class="flex flex-col p-[10px] sm:p-4 xl:flex-row h-full gap-1">
                                        <div class="card-img  ">
                                            <img alt="Long Distance Moving"
                                                class="lazy-image opacity-0 transition-opacity duration-500 ease-in-out w-full h-full object-cover  rounded-[5px]"
                                                v-lazy="'/imgs/card7.webp'" />
                                        </div>
                                        <div class="flex flex-col   xl:w-1/2 p-4   text-start text-xl text-white">
                                            <div class=" lg:min-h-[135px] min-h-[200px] mb-[12px]">
                                                <h2 class="font-jakarta  font-[600] leading-[46px]">Long
                                                    Distance Moving
                                                </h2>
                                                <p
                                                    class="text-[16px]  font-[300] tracking-[.3px]  text-wrap font-rubik mt-5">
                                                    Moving across states ? Our professional staff ensures safe, on-time
                                                    delivery wherever you're headed.</p>
                                            </div>
                                            <ULink to="/services/long-distance-moving-service"
                                                class="text-center rounded-[10px] text-sm font-jakarta mb-3 mt-auto bg-black hover:bg-primary-500 hover:text-black transition-all px-12 md:px-16 lg:px-4 xl:px-8 py-3 font-bold w-full lg:w-auto">
                                                View Details
                                            </ULink>
                                        </div>

                                    </div>
                                </div>
                                <div class="bg-[#171820] text-white border-0 rounded-none ring-0">
                                    <div class="flex flex-col p-[10px] sm:p-4 xl:flex-row h-full gap-1">
                                        <div class="card-img   ">
                                            <img alt="Equipment Relocation"
                                                class="lazy-image opacity-0 transition-opacity duration-500 ease-in-out w-full h-full object-cover rounded-[5px]"
                                                v-lazy="'/imgs/card92.webp'" />
                                        </div>
                                        <div class="flex flex-col  xl:w-1/2 p-4 text-start text-xl text-white ">
                                            <div class="lg:min-h-[135px] min-h-[200px] mb-[12px]">
                                                <h2 class="font-jakarta font-[600] leading-[46px]">Specialty Moving</h2>
                                                <p
                                                    class="text-[16px] font-[300] tracking-[.3px] text-wrap font-rubik mt-5">
                                                    We specialize in moving heavy and delicate equipment with precision
                                                    and
                                                    care to prevent damage.
                                                </p>
                                            </div>
                                            <ULink to="/services/specialty-moving-service"
                                                class="text-center rounded-[10px] text-sm font-jakarta mb-3 mt-auto bg-black hover:bg-primary-500 hover:text-black transition-all px-12 md:px-16 lg:px-4 xl:px-8 py-3 font-bold w-full lg:w-auto">
                                                View Details
                                            </ULink>
                                        </div>
                                    </div>
                                </div>


                            </div>


                        </div>
                    </div>
                </div>

                <div
                    class="w-full flex flex-col lg:flex-row items-center justify-between bg-white rounded-[10px] shadow-md mt-10 px-5 py-10 gap-10">
                    <!-- Text Content -->
                    <div class="flex-1 max-w-xl">
                        <h2 class="text-2xl  md:text-[42px]  leading-normal font-jakarta font-extrabold mb-6 text-black">
                            Trusted by Thousands Here’s Why
                            <span class="text-primary-500"> Customers Love Us</span>
                        </h2>
                        <p class="text-[18px] text-black font-rubik mb-3">
                            At Good View Moving & Storage, we don’t just move boxes—we move lives. As a full-service
                            moving company, we’ve built a reputation for delivering professional moving services that
                            make relocation smooth and stress-free.
                        </p>
                        <p class="text-[18px] text-black font-rubik mb-3">Why do customers choose us? Because we offer:
                        </p>
                        <ul class="mt-6 space-y-3">
                            <li class="flex items-start gap-2 text-[18px] font-outfit">
                                <span class="">
                                    <svg width="12" height="12" viewBox="0 0 12 12" class="inline-block" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="6" cy="6" r="6" fill="#FACC15" />
                                    </svg>
                                </span>
                                <span>
                                    <span class="font-semibold text-black font-rubik">Experienced & Professional
                                        Movers: </span>
                                    Our skilled team provides a hassle-free move, handling everything with care.
                                </span>
                            </li>
                            <li class="flex items-start gap-2 text-[18px] font-outfit">
                                <span class="">
                                    <svg width="12" height="12" viewBox="0 0 12 12" class="inline-block" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="6" cy="6" r="6" fill="#FACC15" />
                                    </svg>
                                </span>
                                <span>
                                    <span class="font-semibold text-black font-rubik">Affordable Moving Costs: </span>
                                    Transparent pricing with no hidden fees.
                                </span>
                            </li>
                            <li class="flex items-start gap-2 text-[18px] font-outfit">
                                <span class="">
                                    <svg width="12" height="12" viewBox="0 0 12 12" class="inline-block" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="6" cy="6" r="6" fill="#FACC15" />
                                    </svg>
                                </span>
                                <span>
                                    <span class="font-semibold text-black font-rubik">Packing and Unpacking
                                        Services: </span>
                                    We do the heavy lifting, so you don't have to.
                                </span>
                            </li>
                            <li class="flex items-start gap-2 text-[18px] font-outfit">
                                <span class="">
                                    <svg width="12" height="12" viewBox="0 0 12 12" class="inline-block" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="6" cy="6" r="6" fill="#FACC15" />
                                    </svg>
                                </span>
                                <span>
                                    <span class="font-semibold text-black font-rubik">Secure Storage Solutions:</span>
                                    Short-term and long-term options for your convenience.
                                </span>
                            </li>
                            <li class="flex items-start gap-2 text-[18px] font-outfit">
                                <span class="">
                                    <svg width="12" height="12" viewBox="0 0 12 12" class="inline-block" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="6" cy="6" r="6" fill="#FACC15" />
                                    </svg>
                                </span>
                                <span>
                                    <span class="font-semibold text-black font-rubik">Highly Rated Service:</span>
                                    Don’t just take our word for it—our Good View Moving reviews speak for themselves!
                                </span>
                            </li>
                        </ul>
                        <UButton size="xl" label="About us" to="/about-us" type="about us"
                            class="mt-8 bg-black text-white px-7 py-2 transition-all font-jakarta rounded-[10px] text-lg font-bold hover:text-black border border-black hover:bg-primary-500" />
                    </div>
                    <!-- Image -->

                    <div class="rounded-[10px]  lg:w-1/2 card-img overflow-hidden">
                        <img alt="goodview contact us"
                            class="lazy-image opacity-0 transition-opacity duration-500 ease-in-out w-full h-full object-cover rounded-none"
                            v-lazy="'/imgs/trusted-customer.webp'" />
                    </div>
                </div>
                <section class="bg-[#171820] rounded-[10px] text-white mt-5 py-6 lg:py-16">
                    <div class="max-w-7xl mx-auto px-4 text-center">
                        <h2 class="text-3xl md:text-4xl font-jakarta font-semibold mb-6">Why Choose Good View Moving
                        </h2>
                        <div class="h-[2px] w-[20%] mx-auto bg-primary-500 mb-10"></div>

                        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
                            <!-- Experience -->
                            <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                                <div class="text-primary-500 flex justify-center  mb-4">
                                    <div>
                                        <!-- Truck Icon -->
                                        <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" width="80px" height="80px"
                                            fill="black" viewBox="0 0 884 884">

                                            <path class="st0"
                                                d="M293.6,636.5l-39.7-5.8-17.7-36c-2.1-4.2-9.1-4.2-11.1,0l-17.7,36-39.7,5.8c-2.4.3-4.3,2-5,4.2s-.1,4.7,1.6,6.3l28.7,28-6.8,39.6c-.4,2.4.6,4.7,2.5,6.1,1.9,1.4,4.5,1.6,6.5.5l35.5-18.7,35.5,18.7c.9.5,1.9.7,2.9.7s2.6-.4,3.7-1.2c1.9-1.4,2.9-3.7,2.5-6.1l-6.8-39.6,28.7-28c1.7-1.7,2.3-4.1,1.6-6.3s-2.7-3.9-5-4.2h0ZM257.2,668.4c-1.5,1.4-2.1,3.5-1.8,5.5l5.2,30.4-27.2-14.3c-.9-.5-1.9-.7-2.9-.7s-2,.2-2.9.7l-27.2,14.3,5.2-30.4c.4-2-.3-4.1-1.8-5.5l-22-21.5,30.5-4.4c2.1-.3,3.8-1.6,4.7-3.4l13.6-27.6,13.6,27.6c.9,1.9,2.7,3.1,4.7,3.4l30.5,4.4-22,21.5h0Z">
                                            </path>
                                            <path class="st0"
                                                d="M716.5,636.5l-39.7-5.8-17.7-36c-2.1-4.2-9.1-4.2-11.1,0l-17.7,36-39.7,5.8c-2.4.3-4.3,2-5,4.2s-.1,4.7,1.6,6.3l28.7,28-6.8,39.6c-.4,2.4.6,4.7,2.5,6.1,1.9,1.4,4.5,1.6,6.5.5l35.5-18.7,35.5,18.7c.9.5,1.9.7,2.9.7s2.6-.4,3.7-1.2c1.9-1.4,2.9-3.7,2.5-6.1l-6.8-39.6,28.7-28c1.7-1.7,2.3-4.1,1.6-6.3s-2.7-3.9-5-4.2h0ZM680.2,668.4c-1.5,1.4-2.1,3.5-1.8,5.5l5.2,30.4-27.2-14.3c-.9-.5-1.9-.7-2.9-.7s-2,.2-2.9.7l-27.2,14.3,5.2-30.4c.4-2-.3-4.1-1.8-5.5l-22-21.5,30.5-4.4c2.1-.3,3.8-1.6,4.7-3.4l13.6-27.6,13.6,27.6c.9,1.9,2.7,3.1,4.7,3.4l30.5,4.4-22,21.5h0Z">
                                            </path>
                                            <path class="st0"
                                                d="M505,636.5l-39.7-5.8-17.7-36c-2.1-4.2-9.1-4.2-11.1,0l-17.7,36-39.7,5.8c-2.4.3-4.3,2-5,4.2s-.1,4.7,1.6,6.4l28.7,28-6.8,39.6c-.4,2.4.6,4.7,2.5,6.1,1.9,1.4,4.5,1.6,6.5.5l35.5-18.7,35.5,18.7c.9.5,1.9.7,2.9.7s2.6-.4,3.7-1.2c1.9-1.4,2.9-3.7,2.5-6.1l-6.8-39.6,28.7-28c1.7-1.7,2.3-4.1,1.6-6.4-.7-2.2-2.7-3.9-5-4.2h0ZM468.7,668.4c-1.5,1.4-2.1,3.5-1.8,5.5l5.2,30.4-27.2-14.3c-.9-.5-1.9-.7-2.9-.7s-2,.2-2.9.7l-27.2,14.3,5.2-30.4c.4-2-.3-4.1-1.8-5.5l-22-21.5,30.5-4.4c2.1-.3,3.8-1.6,4.7-3.4l13.6-27.6,13.6,27.6c.9,1.9,2.7,3.1,4.7,3.4l30.5,4.4-22,21.5h-.1Z">
                                            </path>
                                            <path class="st0"
                                                d="M386,218h-149.3c-3.4,0-6.2,2.8-6.2,6.2v143.1c0,3.4,2.8,6.2,6.2,6.2h149.3c3.4,0,6.2-2.8,6.2-6.2v-143.1c0-3.4-2.8-6.2-6.2-6.2ZM242.9,361.1v-130.6h87.1v130.6h-87.1ZM379.8,361.1h-37.3v-130.6h37.3v130.6Z">
                                            </path>
                                            <path class="st0"
                                                d="M706,386.7l-48.3-24.2-47-66.4c-7.2-9.7-19.4-15.8-31.9-15.8h-74.6v-90c0-15.6-12.6-28.2-28.2-28.2H190.2c-15.6,0-28.2,12.6-28.2,28.2v307.7c0,3.4,2.8,6.2,6.2,6.2h28.4c7.3,18.3,25.3,31.3,46.2,31.3s38.9-13,46.2-31.3h25.9c7.4,18.2,25.3,31.1,46.1,31.1s38.7-12.9,46.1-31.1h181.5c7.4,18.2,25.3,31.1,46.1,31.1s38.7-12.9,46.1-31.1h34.8c3.4,0,6.2-2.8,6.2-6.2v-86.6c0-10-6-19.4-15.9-24.7ZM600.6,303.3l40.8,57.8h-93.7v-68.4h31.1c8.5,0,17.1,4.2,21.8,10.6ZM174.5,190.2c0-8.7,7.1-15.7,15.7-15.7h285.8c8.7,0,15.7,7.1,15.7,15.7v214.4H174.5v-214.4ZM242.9,523.1c-20.6,0-37.3-16.7-37.3-37.3s16.7-37.3,37.3-37.3,37.3,16.7,37.3,37.3-16.7,37.3-37.3,37.3ZM361.1,522.8c-20.6,0-37.3-16.7-37.3-37.3s16.7-37.3,37.3-37.3,37.3,16.7,37.3,37.3-16.7,37.3-37.3,37.3ZM361.1,435.7c-27.4,0-49.8,22.3-49.8,49.8s.2,4.2.4,6.2h-19.5c.2-2,.4-3.9.4-6,0-27.4-22.3-49.8-49.8-49.8s-49.8,22.3-49.8,49.8.2,4,.4,6h-19v-74.6h317.2v74.6h-81.3c.2-2.1.4-4.1.4-6.2,0-27.4-22.3-49.8-49.8-49.8ZM634.8,522.8c-20.6,0-37.3-16.7-37.3-37.3s16.7-37.3,37.3-37.3,37.3,16.7,37.3,37.3-16.7,37.3-37.3,37.3ZM709.4,491.7h-25.3c.2-2.1.4-4.1.4-6.2,0-27.4-22.3-49.8-49.8-49.8s-49.8,22.3-49.8,49.8.2,4.2.4,6.2h-81.3v-199h31.1v74.6c0,3.4,2.8,6.2,6.2,6.2h110.5l48.3,24.1c5.7,3,9.1,8.3,9.1,13.7v80.4Z">
                                            </path>
                                            <path class="st0"
                                                d="M560.1,404.6h-18.7c-3.4,0-6.2,2.8-6.2,6.2s2.8,6.2,6.2,6.2h18.7c3.4,0,6.2-2.8,6.2-6.2s-2.8-6.2-6.2-6.2Z">
                                            </path>
                                        </svg>
                                    </div>
                                </div>
                                <h3 class="text-[62px] text-black  font-rubik font-[300]">20+</h3>
                                <p class="text-[22px] font-jakarta text-black">Years of Experience</p>
                            </div>

                            <!-- Customer Satisfaction -->
                            <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                                <div class="text-primary-500 flex justify-center  mb-4">
                                    <!-- User Icon -->
                                    <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" width="80px" height="80px"
                                        fill="black" viewBox="0 0 884 884">

                                        <path class="st0"
                                            d="M301.2,426.4h36.2v68.9c0,3.6,2.3,6.8,5.7,8.1,1,.3,1.9.5,2.9.5,2.5,0,4.9-1.1,6.6-3.1l61.8-74.4h99.3c23.7,0,43-19.3,43-43v-168.9c0-23.7-19.3-43-43-43h-212.4c-23.7,0-43,19.3-43,43v168.9c0,23.7,19.3,43,43,43h0ZM275.4,214.5c0-14.3,11.6-25.8,25.8-25.8h212.4c14.3,0,25.8,11.6,25.8,25.8v168.9c0,14.3-11.6,25.8-25.8,25.8h-103.4c-2.5,0-5,1.1-6.6,3.1l-49.2,59.2v-53.7c0-4.7-3.8-8.6-8.6-8.6h-44.7c-14.3,0-25.8-11.6-25.8-25.8v-168.9h0ZM332.6,388.4h21.1c5.2,0,9.9-2.6,12.7-6.5,4.3.7,7.8,1.7,11.6,2.8,3.8,1.1,7.7,2.2,12.8,3.2,5.4,1,17.6,2.2,31.3,2.2,21.2,0,46.2-2.8,56.5-13.1,0,0,0,0,.1-.1,12.5-13.1,20.8-68,18.8-80.9-1.1-7.4-2.3-15.8-10.3-21.4-6.9-4.9-17.3-6.7-36.1-6.2h-5.4c2.1-21.5,2-47.3-11.1-60.5-4.4-4.4-12.2-9.4-24.9-8-7.5.8-12.9,7.4-12.3,14.9,3.3,39.4-4.4,54.3-32.7,60-2.9-3-6.9-4.8-11.3-4.8h-21.1c-8.7,0-15.7,7.1-15.7,15.7v87.2c0,8.7,7.1,15.7,15.7,15.7h0ZM369.4,291.1c18.5-4,30.8-11.9,38.1-24.6,6.8-11.7,9.1-27.2,7.5-50.1,4.1.2,6.3,1.8,7.6,3.1,7.3,7.4,9,26.2,5.2,56-.3,2.4.4,4.9,2.1,6.7,1.6,1.8,4,2.9,6.4,2.9h15.1c0,0,.1,0,.2,0,13.8-.3,22.5.7,25.9,3.1,1.7,1.2,2.2,3.3,3.2,9.9,1.7,11.7-7.6,59.3-14.2,66.4-8.6,8.4-51.5,10-72.7,6.2-4.2-.8-7.5-1.7-11.1-2.8-4-1.2-8.2-2.4-13.4-3.2v-73.8h0ZM334,286.9h18.3v84.4h-18.3v-84.4ZM362.3,611.8c-12.4-11.4-26.9-19.7-42.5-24.7,14.6-10.7,24.2-28,24.2-47.5,0-32.5-26.4-58.9-58.9-58.9s-58.9,26.4-58.9,58.9,9.5,36.8,24.2,47.5c-15.7,5-30.2,13.4-42.5,24.7-21,19.3-34,45.5-36.5,73.8,0,.3,0,.5,0,.8v17.5c0,4.7,3.8,8.6,8.6,8.6h210.6c4.7,0,8.6-3.8,8.6-8.6v-17.5c0-.3,0-.5,0-.8-2.5-28.3-15.5-54.5-36.5-73.8h0ZM243.2,539.6c0-23,18.7-41.8,41.8-41.8s41.8,18.7,41.8,41.8-18.7,41.8-41.8,41.8-41.8-18.7-41.8-41.8ZM381.8,695.3h-193.5v-8.5c4.7-50.2,46.2-88,96.7-88s92,37.8,96.7,88v8.5h0ZM469.3,493.9l-23.9-3-10.2-21.8h0c-2.1-4.4-6.3-7.1-11.1-7.1s-9.1,2.7-11.1,7.1l-10.2,21.8-23.9,3c-4.8.6-8.7,3.8-10.2,8.4-1.5,4.6-.2,9.5,3.3,12.8l17.6,16.5-4.5,23.7c-.9,4.7,1,9.4,4.9,12.3,3.9,2.8,8.9,3.2,13.2.8l21.1-11.6,21.1,11.6c1.9,1,3.9,1.5,6,1.5s5.1-.8,7.2-2.4c3.9-2.8,5.8-7.5,4.9-12.3l-4.5-23.7,17.6-16.5c3.5-3.3,4.8-8.2,3.3-12.8-1.5-4.6-5.4-7.8-10.2-8.4h0ZM443.5,522.3c-2.1,2-3.1,5-2.6,7.9l3.5,18.2-16.3-9c-2.6-1.4-5.7-1.4-8.3,0l-16.3,9,3.5-18.2c.6-2.9-.4-5.8-2.6-7.9l-13.5-12.7,18.4-2.3c2.9-.4,5.4-2.2,6.7-4.9l7.9-16.8,7.9,16.8c1.2,2.7,3.8,4.5,6.7,4.9l18.4,2.3-13.5,12.7h0ZM712.1,387.9c-1.5-4.6-5.4-7.8-10.2-8.4l-23.8-3-10.2-21.8c-2-4.4-6.3-7.1-11.1-7.1s-9.1,2.7-11.1,7.1l-10.2,21.8-23.8,3c-4.8.6-8.7,3.8-10.2,8.4-1.5,4.6-.2,9.5,3.3,12.8l17.5,16.4-4.5,23.6c-.9,4.7,1,9.4,4.9,12.3,2.2,1.6,4.7,2.4,7.2,2.4s4.1-.5,6-1.5l21.1-11.6,21.1,11.6c4.2,2.3,9.3,2,13.2-.8,3.9-2.8,5.8-7.5,4.8-12.3l-4.5-23.6,17.5-16.4c3.5-3.3,4.8-8.2,3.3-12.8h0ZM676.2,407.8c-2.1,2-3.1,5-2.6,7.9l3.5,18.2-16.2-8.9c-2.6-1.4-5.7-1.4-8.3,0l-16.2,8.9,3.5-18.2c.6-2.9-.4-5.8-2.6-7.9l-13.5-12.7,18.4-2.3c2.9-.4,5.4-2.2,6.7-4.9l7.9-16.7,7.9,16.7c1.2,2.7,3.8,4.5,6.7,4.9l18.4,2.3-13.5,12.7h0ZM585.7,493.9l-23.9-3-10.2-21.8h0c-2.1-4.4-6.3-7.1-11.1-7.1s-9.1,2.7-11.1,7.1l-10.2,21.8-23.9,3c-4.8.6-8.7,3.8-10.2,8.4-1.5,4.6-.2,9.5,3.3,12.8l17.6,16.5-4.5,23.7c-.9,4.7,1,9.4,4.9,12.3,3.9,2.8,8.9,3.2,13.2.8l21.1-11.6,21.1,11.6c1.9,1,3.9,1.5,6,1.5s5.1-.8,7.2-2.4c3.9-2.8,5.8-7.5,4.9-12.3l-4.5-23.7,17.6-16.5c3.5-3.3,4.8-8.2,3.3-12.8-1.5-4.6-5.4-7.8-10.2-8.4h0ZM559.8,522.3c-2.1,2-3.1,5-2.6,7.9l3.5,18.2-16.3-9c-1.3-.7-2.7-1.1-4.1-1.1s-2.8.4-4.1,1.1l-16.3,9,3.5-18.2c.6-2.9-.4-5.8-2.6-7.9l-13.5-12.7,18.4-2.3c2.9-.4,5.4-2.2,6.7-4.9l7.9-16.8,7.9,16.8c1.2,2.7,3.8,4.5,6.7,4.9l18.4,2.3-13.5,12.7ZM702,493.9l-23.9-3-10.2-21.8h0c-2.1-4.4-6.3-7.1-11.1-7.1s-9.1,2.7-11.1,7.1l-10.2,21.8-23.9,3c-4.8.6-8.7,3.8-10.2,8.4-1.5,4.6-.2,9.5,3.3,12.8l17.6,16.5-4.5,23.7c-.9,4.7,1,9.4,4.9,12.3,3.9,2.8,8.9,3.2,13.2.8l21.1-11.6,21.1,11.6c1.9,1,3.9,1.5,6,1.5s5.1-.8,7.2-2.4c3.9-2.8,5.8-7.5,4.9-12.3l-4.5-23.7,17.6-16.5c3.5-3.3,4.8-8.2,3.3-12.8-1.5-4.6-5.4-7.8-10.2-8.4h0ZM676.2,522.3c-2.1,2-3.1,5-2.6,7.9l3.5,18.2-16.3-9c-2.6-1.4-5.7-1.4-8.3,0l-16.3,9,3.5-18.2c.6-2.9-.4-5.8-2.6-7.9l-13.5-12.7,18.4-2.3c2.9-.4,5.4-2.2,6.7-4.9l7.9-16.8,7.9,16.8c1.2,2.7,3.8,4.5,6.7,4.9l18.4,2.3-13.5,12.7ZM622.1,302.7l-4.5,23.7c-.9,4.7,1,9.4,4.9,12.3,2.2,1.6,4.7,2.4,7.2,2.4,2,0,4.1-.5,6-1.5l21.1-11.6,21.1,11.6c4.2,2.3,9.3,2,13.2-.8,3.9-2.8,5.8-7.5,4.9-12.3l-4.5-23.7,17.6-16.5c3.5-3.3,4.8-8.2,3.3-12.8-1.5-4.6-5.4-7.8-10.2-8.4l-23.9-3-10.2-21.8h0c-2.1-4.4-6.3-7.1-11.1-7.1s-9.1,2.7-11.1,7.1l-10.2,21.8-23.9,3c-4.8.6-8.7,3.8-10.2,8.4-1.5,4.6-.2,9.5,3.3,12.8l17.6,16.5h0ZM642.2,278.4c2.9-.4,5.4-2.2,6.7-4.9l7.9-16.8,7.9,16.8c1.2,2.7,3.8,4.5,6.7,4.9l18.4,2.3-13.5,12.7c-2.1,2-3.1,5-2.6,7.9l3.5,18.2-16.3-9c-1.3-.7-2.7-1.1-4.1-1.1s-2.8.4-4.1,1.1l-16.3,9,3.5-18.2c.6-2.9-.4-5.8-2.6-7.9l-13.5-12.7,18.4-2.3h0Z">
                                        </path>
                                    </svg>
                                </div>
                                <h3 class="text-[62px] text-black  font-rubik font-[300]">100%</h3>
                                <p class="text-[22px] font-jakarta text-black">Customer Satisfaction</p>
                            </div>

                            <!-- Successful Moves -->
                            <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                                <div class="text-primary-500 flex justify-center  mb-4">
                                    <!-- Move Icon -->
                                    <svg xmlns="http://www.w3.org/2000/svg" width="80px" height="80px" fill="black"
                                        id="Layer_1" viewBox="0 0 884 884">

                                        <path class="st0"
                                            d="M694.7,559.9l-115.7-115.7c-1.4-1.4-3.2-2.1-5.1-2.1h-53.4v-45.6h17.5v15.8c0,2.9,1.8,5.5,4.5,6.7.9.4,1.8.5,2.8.5,1.9,0,3.7-.7,5.1-2.1l46-46c1.4-1.4,2.1-3.2,2.1-5.1s-.8-3.8-2.1-5.1l-46-45.9c-2.1-2.1-5.2-2.7-7.9-1.6-2.7,1.1-4.5,3.8-4.5,6.7v15.8h-17.5v-49.4c0-4-3.2-7.2-7.2-7.2h-82.6c.4-3.5.6-7,.6-10.6,0-52.6-42.8-95.3-95.3-95.3s-95.4,42.8-95.4,95.3.2,7.1.6,10.6h-46.8c-4,0-7.2,3.2-7.2,7.2v338.8c0,4,3.2,7.2,7.2,7.2h36.5c-.3,2.5-.4,5-.4,7.6,0,38.5,31.4,69.9,69.9,69.9s69.9-31.4,69.9-69.9-.1-5.1-.4-7.6h162.1c-.3,2.5-.4,5-.4,7.6,0,38.5,31.3,69.9,69.9,69.9s69.9-31.3,69.9-69.9-.1-5.1-.4-7.6h18.7c4,0,7.2-3.2,7.2-7.2v-60.6c0-1.9-.8-3.8-2.1-5.1h0ZM545.2,350.6c4,0,7.2-3.2,7.2-7.2v-5.5l28.5,28.5-28.5,28.5v-5.5c0-4-3.2-7.2-7.2-7.2h-87.4v-31.5h87.4ZM336,188.1c44.6,0,80.9,36.3,80.9,80.9s-36.3,80.9-80.9,80.9-80.9-36.3-80.9-80.9,36.3-80.9,80.9-80.9ZM262.8,511.1h-61.1v-31.5h61.1c4,0,7.2-3.2,7.2-7.2v-5.5l28.5,28.5-28.5,28.5v-5.5c0-4-3.2-7.2-7.2-7.2ZM300.4,695.9c-30.6,0-55.5-24.9-55.5-55.5s24.9-55.5,55.5-55.5,55.5,24.9,55.5,55.5-24.9,55.5-55.5,55.5ZM300.4,570.6c-30.8,0-57.1,20.1-66.3,47.9h-32.4v-92.9h53.9v15.8c0,2.9,1.8,5.6,4.5,6.7.9.4,1.8.5,2.8.5,1.9,0,3.7-.7,5.1-2.1l45.9-46c2.8-2.8,2.8-7.4,0-10.2l-45.9-45.9c-2.1-2.1-5.2-2.7-7.9-1.6-2.7,1.1-4.5,3.8-4.5,6.7v15.8h-53.9v-171.1h42.3c11,40.5,48.1,70.3,92,70.3s81-29.8,92-70.3h78.1v42.1h-55.5c-4,0-7.2,3.2-7.2,7.2v45.9c0,4,3.2,7.2,7.2,7.2h55.5v221.9h-139.3c-9.3-27.8-35.5-47.9-66.3-47.9h0ZM601.4,695.9c-30.6,0-55.4-24.9-55.4-55.4s24.9-55.4,55.4-55.4,55.4,24.9,55.4,55.4-24.9,55.4-55.4,55.4ZM682.3,618.4h-14.6c-9.3-27.8-35.5-47.8-66.3-47.8s-57,20.1-66.3,47.8h-14.6v-161.8h50.4l111.4,111.4v50.4ZM601.4,597.7c-23.6,0-42.7,19.2-42.7,42.7s19.2,42.7,42.7,42.7,42.7-19.2,42.7-42.7-19.2-42.7-42.7-42.7ZM601.4,668.8c-15.6,0-28.3-12.7-28.3-28.3s12.7-28.3,28.3-28.3,28.3,12.7,28.3,28.3-12.7,28.3-28.3,28.3ZM300.4,597.7c-23.6,0-42.7,19.2-42.7,42.7s19.2,42.7,42.7,42.7,42.7-19.2,42.7-42.7-19.2-42.7-42.7-42.7ZM300.4,668.8c-15.6,0-28.3-12.7-28.3-28.3s12.7-28.3,28.3-28.3,28.3,12.7,28.3,28.3-12.7,28.3-28.3,28.3ZM282.4,283c-2.8-2.8-2.8-7.4,0-10.2,2.8-2.8,7.4-2.8,10.2,0l21.3,21.3,65.6-65.6c2.8-2.8,7.4-2.8,10.2,0s2.8,7.4,0,10.2l-70.7,70.7c-1.4,1.4-3.2,2.1-5.1,2.1s-3.8-.8-5.1-2.1l-26.4-26.4h0Z">
                                        </path>
                                    </svg>
                                </div>
                                <h3 class="text-[62px] font-rubik text-black font-[300]">5000+</h3>
                                <p class="text-[22px] font-jakarta text-black">Successful Moves</p>
                            </div>

                            <!-- Miles Moved -->
                            <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                                <div class="text-primary-500 flex justify-center  mb-4">
                                    <!-- Route Icon -->
                                    <svg xmlns="http://www.w3.org/2000/svg" width="80px" height="80px" fill="black"
                                        id="Layer_1" viewBox="0 0 884 884">

                                        <path class="st0"
                                            d="M413.3,468.5h-38.4c-5.3,0-9.6,4.3-9.6,9.6v14.1l-33.1-22.1c-3.2-2.2-7.4-2.2-10.7,0l-144,96c-4.4,2.9-5.7,8.9-2.7,13.3,1.8,2.7,4.8,4.3,8.1,4.3h9.6v144c0,5.3,4.3,9.6,9.6,9.6h249.6c5.3,0,9.6-4.3,9.6-9.6v-144h9.6c5.3,0,9.6-4.3,9.6-9.6,0-3.2-1.6-6.2-4.3-8l-53.3-35.6v-52.5c0-5.3-4.3-9.6-9.6-9.6ZM384.5,487.7h19.2v30.1l-19.2-12.8v-17.3ZM346.1,718.1h-38.4v-38.4c0-10.6,8.6-19.2,19.2-19.2s19.2,8.6,19.2,19.2v38.4ZM442.1,718.1h-76.8v-38.4c0-21.2-17.2-38.4-38.4-38.4s-38.4,17.2-38.4,38.4v38.4h-76.8v-134.4h230.4v134.4ZM439.2,564.5h-224.7l112.3-74.9,112.3,74.9Z">
                                        </path>
                                        <path class="st0"
                                            d="M681.7,241.1c5.5-9.8,8.9-20.7,10.1-31.8,0-26.5-21.5-48-48-48s-48,21.5-48,48c1.2,11.2,4.6,22,10.1,31.8-41.5,6.7-67.7,23.7-67.7,45,0,31.2,54.4,48,105.6,48s105.6-16.8,105.6-48-26.2-38.3-67.7-45ZM643.7,180.4c15.9,0,28.8,12.9,28.8,28.8s-15,37.8-28.8,59.5c-13.8-21.6-28.8-49-28.8-59.5,0-15.9,12.9-28.8,28.8-28.8ZM643.7,314.8c-52.8,0-86.4-17.1-86.4-28.8s20.3-21.9,58.1-26.9c8.5,14.9,17.3,27.8,20.4,32.3,3,4.4,9,5.5,13.4,2.4,1-.7,1.8-1.5,2.4-2.4,3.1-4.5,11.8-17.4,20.4-32.3,37.8,4.9,58.1,18.4,58.1,26.9s-33.7,28.8-86.4,28.8Z">
                                        </path>
                                        <path class="st0"
                                            d="M624.5,410.8H245.3c-29.2,0-52.8-23.6-52.8-52.8s23.6-52.8,52.8-52.8h216v19.2c0,5.3,4.3,9.6,9.6,9.6,2.1,0,4.1-.7,5.8-1.9l38.4-28.8c4.2-3.2,5.1-9.2,1.9-13.4-.5-.7-1.2-1.4-1.9-1.9l-38.4-28.8c-4.2-3.2-10.3-2.3-13.4,1.9-1.2,1.7-1.9,3.7-1.9,5.8v19.2h-216c-39.8,0-72,32.2-72,72s32.2,72,72,72h379.3c58.3,0,105.6,47.3,105.6,105.6s-47.3,105.6-105.6,105.6h-144v19.2h144c68.9,0,124.8-55.9,124.8-124.8s-55.9-124.8-124.8-124.8ZM480.5,286l12.8,9.6-12.8,9.6v-19.2Z">
                                        </path>
                                    </svg>
                                </div>
                                <h3 class="text-[62px] text-black  font-rubik font-[300]">80K+</h3>
                                <p class="text-[22px] font-jakarta text-black">Miles Moved</p>
                            </div>
                        </div>

                        <ULink to="/quote"
                            class="inline-block bg-primary-500 font-jakarta text-[22px] text-black font-[400] px-4 lg:px-8 py-3 rounded-md hover:bg-black hover:text-white transition">
                            Free Moving Quote
                        </ULink>
                    </div>
                </section>
                <div class="my-6 font-jakarta">
                    <div class="elfsight-app-2f0a1370-b31a-4ce1-8946-9dc17943c16f" data-elfsight-app-lazy></div>
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
            <! placeholder="Enter your full name" />
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
                        <div
                            class=" flex flex-col bg-black px-[20px] lg:px-0 max-w-full xl:max-w-[550px] rounded-[10px] w-full">
                            <div class="flex flex-col">
                                <h2 class=" mt-[20px] text-4xl text-center font-bold text-white  ">
                                    Free Moving Quote
                                </h2>

                                <div class="md:px-10 sm:px-5  px-1 flex justify-around mt-10">
                                    <!-- Step 1 -->
                                    <div class="flex flex-col gap-5 flex-1 items-center">
                                        <div :class="{
                                            'bg-primary-500 text-black': step === 1,
                                            'bg-primary-500 text-white': step !== 1
                                        }"
                                            class="lg:h-16 lg:w-16 md:h-18 md:w-18 h-16 w-16 flex justify-center items-center font-bold text-3xl rounded-[10px]">
                                            1
                                        </div>
                                        <h2
                                            class="text-[16px] lg:text-[20px]   text-center font-jakarta font-bold text-white">
                                            Moving info
                                        </h2>
                                    </div>

                                    <div
                                        class="flex-1 pip md:translate-y-10 translate-y-8 mx-2 rounded-xl h-2 bg-primary-500">
                                    </div>

                                    <!-- Step 2 -->
                                    <div class="flex flex-col gap-5 flex-1 items-center">
                                        <div :class="{
                                            'bg-primary-500 text-black': step === 2,
                                            'bg-primary-500 text-white': step !== 2,
                                            'opacity-50': step < 2
                                        }"
                                            class="lg:h-16 lg:w-16 md:h-18 md:w-18 h-16 w-16 flex justify-center items-center font-bold text-3xl rounded-[10px]">
                                            2
                                        </div>
                                        <h2
                                            class=" text-[16px] lg:text-[20px]  font-jakarta text-center  font-bold text-white">
                                            Personal Detail
                                        </h2>
                                    </div>

                                    <div
                                        class="flex-1 pip md:translate-y-10 translate-y-8 mx-2 rounded-xl h-2 bg-primary-500">
                                    </div>

                                    <!-- Step 3 -->
                                    <div class="flex flex-col gap-5 flex-1 font-jakarta items-center">
                                        <div :class="{
                                            'bg-primary-500 text-white': step === 3,
                                            'bg-primary-500 text-gray-100': step !== 3,
                                            'opacity-50': step < 3
                                        }"
                                            class="lg:h-16 lg:w-16 md:h-18 md:w-18 h-16 w-16 flex justify-center items-center font-bold text-3xl rounded-[10px]">
                                            3
                                        </div>
                                        <h2
                                            class=" text-[16px] lg:text-[20px] font-jakarta text-center font-bold text-white">
                                            Job done
                                        </h2>
                                    </div>
                                </div>
                            </div>

                            <!-- Step 3: Success Message -->
                            <div class="flex flex-col items-center justify-center gap-5 mt-5" v-if="isDone">
                                <DotLottieVue class="w-full h-auto sm:w-[300px] sm:h-[300px]" autoplay loop
                                    src="https://lottie.host/5985b015-e571-4f7b-b9ac-212322831da2/vej1PvvYj0.json" />
                                <h4
                                    class="text-primary-500  text-[18px] sm:text-[32px] text-center  font-jakarta sm:px-10 font-bold">
                                    Thank you for choosing us</h4>
                                <p class="text-gray-400 text-xl  font-jakarta text-center font-bold">We will contact you
                                    shortly!</p>
                            </div>

                            <!-- Step 1: Moving Info -->
                            <div v-else-if="step === 1"
                                class="bg-black  flex flex-col lg:flex-row justify-center items-center md:p-5 flex-1 h-full">
                                <div class="p-4 flex w-full    px-2 flex-col gap-6 bg-black rounded-none">
                                    <div class="flex flex-col gap-5">
                                        <!-- Property Type Select -->


                                        <!-- ZIP Code Inputs -->
                                        <div class="flex gap-6  flex-col justify-between">
                                            <div class="flex md:flex-row flex-col gap-2   md:items-baseline w-full">
                                                <label
                                                    class="block   w-16 font-bold text-gray-100 font-jakarta text-xl">From</label>
                                                <div class="flex-1">
                                                    <UInput type="text" v-model="quoteForm.fromZIP"
                                                        @blur="validateField('fromZIP')"
                                                        @input="handleZipInput('fromZIP')" class="relative w-full"
                                                        icon="i-carbon-location-heart-filled" :inputClass="`
                                                  flex-1 rounded-[10px] placeholder:font-jakarta bg-[#171820] text-slate-300 ring-0 h-14
                                                  ${errors.fromZIP.status ? 'border-2  !border-red-500 focus:ring-red-500' : 'focus:ring-primary'}
                                              `" size="xl" placeholder="ZIP code" maxlength="5" />
                                                    <span v-if="errors.fromZIP.status"
                                                        class="text-red-500 font-jakarta text-sm mt-1 block">
                                                        {{ errors.fromZIP.message }}
                                                    </span>
                                                </div>
                                            </div>

                                            <div
                                                class="flex md:flex-row flex-col gap-2 md:items-baseline  w-full justify-between">
                                                <label
                                                    class="block  w-16 font-bold font-jakarta text-gray-100 text-xl">To</label>
                                                <div class="flex-1">
                                                    <UInput type="text" v-model="quoteForm.toZIP"
                                                        @blur="validateField('toZIP')" @input="handleZipInput('toZIP')"
                                                        class="relative w-full" icon="i-carbon-location-heart-filled"
                                                        :inputClass="`
                                                  flex-1 rounded-[10px] placeholder:font-jakarta bg-[#171820] text-slate-300 ring-0 h-14
                                                  ${errors.toZIP.status ? 'border-2 !border-red-500 focus:ring-red-500' : 'focus:ring-primary'}
                                              `" size="xl" placeholder="ZIP code" maxlength="5" />
                                                    <span v-if="errors.toZIP.status"
                                                        class="text-red-500 font-jakarta text-sm mt-1 block">
                                                        {{ errors.toZIP.message }}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex md:flex-row flex-col gap-2 md:items-baseline  w-full">
                                        <label
                                            class="block  w-16 font-bold font-jakarta text-gray-100 text-xl">Size</label>
                                        <div class="flex-1">
                                            <div class="!font-jakarta">
                                                <USelectMenu
                                                    :selectClass="`${showErrors && errors.type.status ? 'border-2 !border-red-500 focus:ring-red-500' : ''} flex-1 rounded-[10px] bg-[#171820] text-slate-300 ring-0 h-14`"
                                                    @update:model-value="quoteForm.type ? errors.type.status = false : null"
                                                    v-model="quoteForm.type" :options="houseTypes"
                                                    class="flex-1 relative universal-placeholder"
                                                    icon="i-carbon-building" size="xl" placeholder="Select type" />

                                                <span v-if="showErrors && errors.type.status"
                                                    class="text-red-500  font-jakarta text-sm mt-1 block">
                                                    {{ errors.type.message }}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="flex md:flex-row flex-col gap-2 md:items-center font-jakarta h-[88px] w-full">
                                        <label class="block w-16 font-bold text-gray-100 text-xl">Date</label>
                                        <div class="flatpickr-wrapper flex-1 relative h-14">
                                            <Date v-model="quoteForm.date" class="w-full h-full" />

                                            <span v-if="showErrors && errors.date.status"
                                                class="text-red-500 font-jakarta text-sm mt-1 block">
                                                {{ errors.date.message }}
                                            </span>
                                        </div>
                                    </div>
                                    <!-- Navigation Buttons -->
                                    <div class="flex gap-2 md:gap-10 lg:gap-28 md:items-center w-full">
                                        <div class="flex-1">
                                            <!-- Back button disabled on first step -->
                                            <UButton aria-label="back" disabled
                                                class="h-12 w-12 rounded-[10px] border border-primary-500 font-jakarta hover:bg-black hover:text-slate-300 text-black font-bold flex justify-center items-center opacity-50"
                                                icon="i-carbon-arrow-left" />
                                        </div>
                                        <div class="flex-1 flex justify-end">
                                            <UButton @click="nextStep(1)" size="xl" :label="'Next'"
                                                class="px-3 md:px-7 rounded-[10px]  border border-primary-500 font-jakarta hover:bg-black hover:text-slate-300 flex justify-center items-center ml-auto lg:ml-0 text-black font-bold" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Step 2: Personal Details -->
                            <div v-else-if="step === 2"
                                class="bg-black flex flex-col lg:flex-row justify-center items-center md:p-5 flex-1 h-full">
                                <div class="p-4 flex w-full  flex-col gap-10 bg-black rounded-none">
                                    <div class="flex flex-col gap-5">
                                        <!-- Name Inputs -->
                                        <div class="flex     md:flex-row flex-col gap-2   md:items-baseline w-full">
                                            <label
                                                class="block   w-20  font-bold font-jakarta text-gray-100 text-xl">Name</label>
                                            <div class="flex  gap-6 flex-1 flex-col">
                                                <div class="flex-1 font-jakarta">
                                                    <UInput
                                                        :inputClass="`font-jakarta placeholder:font-jakarta ${errors.firstName.status ? 'border-2 placeholder:font-jakarta !border-red-500 focus:ring-red-500' : ''} flex-1 rounded-[10px] bg-[#171820] text-slate-300 ring-0 h-14`"
                                                        @blur="validateField('firstName')" v-model="quoteForm.firstName"
                                                        class="flex-1 relative" icon="i-carbon-user" size="xl"
                                                        placeholder="First name" />
                                                    <span v-if="errors.firstName.status"
                                                        class="text-red-500  font-jakarta text-sm mt-1 block">
                                                        {{ errors.firstName.message }}
                                                    </span>
                                                </div>
                                                <div class="flex-1">
                                                    <UInput
                                                        :inputClass="`font-jakarta placeholder:font-jakarta ${errors.lastName.status ? 'border-2 placeholder:font-jakarta  font-jakarta !border-red-500 focus:ring-red-500' : ''} flex-1 rounded-[10px] bg-[#171820] text-slate-300 ring-0 h-14`"
                                                        @blur="validateField('lastName')" v-model="quoteForm.lastName"
                                                        class="flex-1 relative" icon="i-carbon-user" size="xl"
                                                        placeholder="Last name" />
                                                    <span v-if="errors.lastName.status"
                                                        class="text-red-500 font-jakarta text-sm mt-1 block">
                                                        {{ errors.lastName.message }}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Email Input -->
                                        <div class="flex md:flex-row flex-col gap-2  md:items-center w-full">
                                            <label
                                                class="block   w-20 font-bold font-jakarta text-gray-100 text-xl">E-mail</label>
                                            <div class="flex-1">
                                                <UInput @blur="validateField('email')" v-model="quoteForm.email"
                                                    class="flex-1 relative" icon="i-carbon-email"
                                                    :inputClass="` font-jakarta placeholder:font-jakarta ${errors.email.status ? 'border-2 placeholder:font-jakarta !border-red-500 focus:ring-red-500' : ''} flex-1 rounded-[10px] bg-[#171820] text-slate-300 ring-0 h-14`"
                                                    size="xl" placeholder="Someone@example.com" />
                                                <span v-if="errors.email.status"
                                                    class="text-red-500 font-jakarta text-sm mt-1 block">
                                                    {{ errors.email.message }}
                                                </span>
                                            </div>
                                        </div>

                                        <!-- Mobile Input -->
                                        <div class="flex md:flex-row flex-col gap-2   md:items-center w-full">
                                            <label
                                                class="block   w-20 font-bold font-jakarta text-gray-100 text-xl">Mobile</label>
                                            <div class="flex-1">
                                                <UInput type="tel" v-model="quoteForm.mobile"
                                                    @blur="validateField('mobile')" @input="handleMobileInput"
                                                    class="relative w-full" icon="i-carbon-phone-filled" :inputClass="`
                               flex-1 rounded-[10px] font-jakarta placeholder:font-jakarta bg-[#171820] text-slate-300 ring-0 h-14
                               ${errors.mobile.status ? 'border-2 !border-red-500 focus:ring-red-500' : 'focus:ring-primary'}
                                     `" size="xl" placeholder="Enter Mobile Number" maxlength="15" />
                                                <span v-if="errors.mobile.status"
                                                    class="text-red-500 font-jakarta text-sm mt-1 block">
                                                    {{ errors.mobile.message }}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- Navigation Buttons -->
                                    <div class="flex gap-2 md:gap-10  md:items-center w-full">
                                        <div class="flex-1">
                                            <UButton @click="step -= 1"
                                                class="h-12 w-12 rounded-[10px] border border-primary-500 font-jakarta hover:bg-black hover:text-slate-300 text-black font-bold flex justify-center items-center"
                                                icon="i-carbon-arrow-left" />
                                        </div>
                                        <div class="flex-1 flex justify-end">
                                            <UButton :loading="isLoading" @click="submit" size="xl" :label="'Submit'"
                                                class="px-3 md:px-7 rounded-[10px]  border border-primary-500 font-jakarta hover:bg-black hover:text-slate-300 flex justify-center items-center ml-auto lg:ml-0 text-black font-bold" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            class="rounded-[10px] md:block hidden card-img xl:min-w-[450px] sm:min-w-96 min-w-0 h-96 md:h-auto overflow-hidden  w-full">
                            <img alt="goodview contact us"
                                class="lazy-image opacity-0 transition-opacity duration-500 ease-in-out w-full h-full object-cover rounded-none"
                                v-lazy="'/imgs/contactus.webp'" />
                        </div>

                    </div>


                </div>

            </div>

        </div>
        <section class="bg-white lg:py-16 py-10">
            <div class="max-w-4xl mx-auto px-[20px]">
                <div class="text-center mb-10">
                    <span class="text-primary-500 text-[21px] font-[500] font-jakarta pb-6">Frequently Asked
                        Questions</span>
                    <h2 class="text-2xl md:text-5xl font-jakarta font-extrabold mt-3 mb-4">Got Questions? We’ve Got
                        Answers</h2>
                </div>
                <div>
                    <div v-for="(faq, i) in faqs" :key="i" class="border-b border-gray-200 py-6">
                        <button class="flex items-center justify-between w-full text-left focus:outline-none"
                            @click="toggleFaq(i)">
                            <span class="text-xl font-jakarta font-bold text-black">{{ faq.question }}</span>
                            <span class="text-3xl text-black transition-transform duration-200"
                                :class="{ 'rotate-45': faq.open }">+</span>
                        </button>
                        <div v-if="faq.open" class="mt-4 text-gray-700 text-base font-rubik">
                            {{ faq.answer }}
                        </div>
                    </div>
                </div>
            </div>
            <getQuote />
        </section>
    </div>
</template>

<script setup>


import { ref, onMounted, onBeforeUnmount, watch, nextTick } from 'vue';
import { reactive } from "vue";
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
    switch (field) {
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

onMounted(() => {
    // Inject Elfsight script if not already present
    if (!document.querySelector('script[src="https://static.elfsight.com/platform/platform.js"]')) {
        const script = document.createElement('script');
        script.src = 'https://static.elfsight.com/platform/platform.js';
        script.async = true;
        document.body.appendChild(script);
    }
});

const faqs = ref([
    {
        question: "How do I book a move with Good View Moving & Storage?",
        answer: "To schedule your move, simply request a free quote online or contact us directly via phone or email. We recommend booking at least 2–4 weeks in advance to secure your preferred moving date and time.",
        open: true,
    },
    {
        question: "What types of services does Good View moving provide?",
        answer: "We offer full-service moving, including professional packing and unpacking, furniture disassembly and reassembly, and safe transport of specialty items like pianos and antiques.",
        open: false,
    },
    {
        question: "Are my belongings insured during the move?",
        answer: "Yes. Good View Moving & Storage is fully licensed and insured for both local and interstate moves. We offer basic liability coverage, with higher-level options like full-value protection available for added peace of mind.",
        open: false,
    },
    {
        question: "Do you provide packing supplies and materials?",
        answer: "Absolutely. We supply high-quality boxes, bubble wrap, tape, and protective materials as part of our packing services or as add-ons.",
        open: false,
    },
    {
        question: "Can Good View Moving & Storage handle long-distance and interstate moves?",
        answer: "Yes, we specialize in long-distance and interstate moves. Our team is experienced in navigating the logistics of cross-state relocations, ensuring your belongings arrive safely and on time.  ",
        open: false,
    },
])

function toggleFaq(index) {
    faqs.value[index].open = !faqs.value[index].open
    // Optionally close others for accordion behavior:
    // faqs.value.forEach((f, i) => { if (i !== index) f.open = false })
}
</script>
