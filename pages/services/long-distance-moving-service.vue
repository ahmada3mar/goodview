<template>
    <div>
        <Banner background="/imgs/Long-distance .webp" class=" md:h-[35rem]" title="Long Distance Moving"
            text="Long distance moving requires careful planning, professional handling, and a reliable long distance moving company you can trust. At Good View Moving & Storage, we specialize in smooth, hassle-free relocations—whether you're moving a few hundred miles away or across the country. ">
            <template #body="isVisible">
                <QuoteInputs :isVisible="isVisible.isVisible" />
            </template>
        </Banner>
        <div class="container bg-white lg:mx-auto px-6 sm:px-10 py-10 mb-8 sm:mb-32">
            <div class="flex flex-col md:flex-row items-center mx-auto gap-6">
                <!-- Text Section -->
                <div class="md:w-2/3">
                    <h2 class="text-2xl font-jakarta md:text-4xl mb-5 font-extrabold">Why Choose Our Long Distance
                        Moving
                        Services?</h2>
                    <p class="text-lg font-rubik mb-5 md:text-[18px] md:font-[300] md:leading-8">
                        Long-distance moves come with unique challenges, but we make the process easy.</p>
                    <h3 class="text-lg font-rubik md:text-[18px] mb-5 font-bold text-center md:leading-8">
                        Here’s why Homeowners and Businesses Choose Us:</h3>

                    <p class="text-lg font-rubik md:text-[18px] mb-5 md:font-[300] md:leading-8">
                        <b class=" font-[500]">Experienced Long Distance Movers: </b>Our team has years of experience
                        handling
                        state to state moves with precision.
                    </p>
                    <p class="text-lg font-rubik md:text-[18px] mb-5 md:font-[300] md:leading-8">
                        <b class=" font-[500]">Licensed & Insured: </b> As a certified interstate moving company, we
                        ensure your
                        belongings are fully protected.
                    </p>

                    <p class="text-lg font-rubik md:text-[18px] mb-5 md:font-[300] md:leading-8">
                        <b class=" font-[500]">Full-Service Movers: </b> From packing to unloading, we handle every step
                        of your
                        move.
                    </p>
                    <p class="text-lg font-rubik md:text-[18px] mb-5 md:font-[300] md:leading-8">
                        <b class=" font-[500]">Safe & Efficient Transport: </b> We use modern trucks and secure packing
                        techniques to keep your items safe.
                    </p>
                    <p class="text-lg font-rubik md:text-[18px] mb-5 md:font-[300] md:leading-8">
                        <b class=" font-[500]">Personalized Moving Plans: </b>No two moves are the same. We customize
                        your
                        relocation based on your needs.
                    </p>

                </div>
                <!-- Image Section -->
                <div class="card-img">
                    <img alt="Long Distance"
                        class="lazy-image opacity-0  rounded-[20px] transition-opacity duration-500 ease-in-out w-full h-[auto] object-cover "
                        v-lazy="'/imgs/Long-Distance-Moving3.webp'" />
                </div>
            </div>
        </div>


        <div class=" bg-primary-500 w-full p-3 md:p-10   rounded-none">
            <div class="container">
                <div class="bg-black flex flex-col gap-5 justify-center sm:-mt-36 rounded-[10px]   p-5">


                    <div class="flex flex-col lg:flex-row bg-zinc-900 rounded-none p-3 md:p-10 gap-5 md:gap-10">
                        <!-- Text Section -->
                        <div class="flex-1 flex flex-col">
                            <h2 class="text-2xl md:text-[25px] font-extrabold font-jakarta text-stone-300">
                                Our Long Distance Moving Process – How We Make Moving Easy</h2>
                            <p class="text-lg md:text-[18px] mt-4 font-rubik  text-stone-300 ">
                                We follow a structured yet flexible process to make your long-distance relocation
                                seamless:
                            </p>

                            <ul
                                class="list-disc  marker:none list-inside md:text-[18px] text-white md:font-[300] md:leading-8 font-rubik mt-4 space-y-2">
                                <li><span class="font-semibold">Get a moving quote:</span> Tell us about your move, and
                                    we’ll provide a detailed estimate.

                                </li>
                                <li><span class="font-semibold">Plan & Schedule: </span>We work with your timeline to
                                    create a personalized moving plan.</li>
                                <li><span class="font-semibold">Packing & Loading:</span> Our movers and packers
                                    carefully
                                    handle your belongings for a secure move.</li>
                                <li><span class="font-semibold">Transport & Tracking:</span> Your items are safely
                                    transported to your new destination with real-time updates.</li>
                                <li><span class="font-semibold">Unloading & Setup:</span> We help you settle in by
                                    unloading and setting up your furniture.</li>
                            </ul>
                        </div>
                        <div class="flex-1 card-img flex justify-center items-center">
                            <img alt="Long Distance"
                                class="lazy-image opacity-0  rounded-[10px] transition-opacity duration-500 ease-in-out w-full h-[auto] lg:h-[400px] object-cover "
                                v-lazy="'/imgs/Longdistance2.webp'" />
                        </div>



                    </div>
                    <div class="bg-primary-500 gap-2 rounded-none p-3 md:p-10">
                        <h2 class="text-2xl w-full lg:w-[65%] md:text-4xl font-jakarta font-extrabold text-black">
                            What’s
                            Included in
                            Our
                            Long
                            Distance Moving Services?
                        </h2>
                        <div class="flex flex-col lg:flex-row justify-between pt-5">
                            <div class=" mb-5 w-full lg:w-[65%]">

                                <p class="text-md md:text-lg mt-4 text-black font-rubik">
                                    We provide comprehensive moving solutions to cover every aspect of your
                                    long-distance
                                    move:
                                </p>

                                <ul
                                    class="list-disc ml-2  marker:none list-inside md:text-[18px] text-black md:font-[400] md:leading-8 font-rubik mt-4 space-y-2">
                                    <li><b>Residential & Apartment Moves –</b> Relocate your home with ease.</li>
                                    <li><b>Corporate & Office Moves –</b> Relocate your business without downtime.</li>
                                    <li><b>Packing & Unpacking –</b> Professional <b>
                                            <ULink target="_blank" to="/services/packing-and-unpacking-service"
                                                class="font-[500] hover:font-[700] hover:decoration-primary-500  underline ">
                                                movers and packers</ULink>
                                        </b> ensure safe transportation.
                                    </li>
                                    <li><b>Storage Solutions –</b> Need extra space? We offer secure <b>
                                            <ULink target="_blank" to="/services/storage-service/"
                                                class="font-[500] hover:font-[700] hover:decoration-primary-500  underline ">
                                                storage options</ULink>
                                        </b>.</li>
                                    <li>
                                        <b>Furniture Disassembly & Reassembly – </b>
                                        We expertly handle large, bulky, and delicate furniture with care.
                                    </li>
                                </ul>

                            </div>

                            <div
                                class="flex-1 card-img flex  justify-center lg:justify-end w-full lg:w-[35%] items-end">
                                <img alt="long distance moving"
                                    class="lazy-image opacity-0  rounded-[10px] transition-opacity duration-500 ease-in-out w-[340px] h-[auto] lg:h-[332px] object-cover "
                                    v-lazy="'/imgs/Long-Distance-Moving-2.webp'" />
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
        <div class="bg-white w-full p-3 md:p-10   rounded-none">
            <div class="container">
                <div class=" flex flex-col gap-5 justify-center  rounded-[10px]  sm:p-5 p-2">


                    <div class="flex flex-col  bg-white rounded-[10px] max-w-[1100px] p-3 md:p-8 ">
                        <!-- Text Section -->
                        <h2 class="text-2xl md:text-4xl   font-extrabold font-jakarta text-black">
                            Long Distance Moving Costs – Get a Transparent Estimate</h2>
                        <p class="text-lg md:text-[18px] mt-4 font-rubik  text-black">
                            The cost of long distance moving depends on several factors, including:
                        </p>

                        <ul
                            class="list-disc  marker:none list-inside md:text-[18px] text-black md:font-[400]  leading-[36px] font-rubik mt-4 space-y-2">
                            <li> <b class=" font-[500]">Distance: </b>
                                The farther you move, the higher the cost.
                            </li>
                            <li> <b class=" font-[500]">Home Size: </b>
                                Moving a studio apartment costs less than a five-bedroom home.
                            </li>
                            <li> <b class=" font-[500]">Additional Services:</b>
                                Packing, storage, and <b>
                                    <ULink target="_blank" to="/services/specialty-moving-service"
                                        class="font-[500] hover:font-[700] hover:decoration-primary-500  underline ">
                                        specialty item</ULink>
                                </b> handling may affect pricing.
                            </li>

                        </ul>
                        <h2 class="text-2xl md:text-3xl  mt-5  font-bold font-jakarta text-black">
                            How Much Does Long Distance Moving Cost on Average?</h2>
                        <p class="text-lg md:text-[18px] mt-5 font-rubik font-[400]  text-black  ">
                            <b class=" font-[500]">Small Moves (1-bedroom, 500–1,500 miles): </b>Typically range from
                            $1,500 to
                            $4,000.
                        </p>
                        <p class="text-lg md:text-[18px] mt-5 font-rubik font-[400]  text-black  ">
                            <b class=" font-[500]">Medium-Sized Moves (2–3 bedrooms, 1,500–3,000 miles): </b>Expect
                            costs
                            between $4,000 and
                            $8,000.
                        </p>
                        <p class="text-lg md:text-[18px] mt-5 font-rubik font-[400]  text-black ">
                            <b class=" font-[500]">Large Homes or Cross-Country Moves (4+ bedrooms, 3,000+ miles):</b>
                            These can
                            start at $8,000
                            and go up to $15,000+.
                        </p>

                        <p class="text-lg md:text-[18px] mt-4 font-rubik italic   text-black "> <span
                                class="font-bold">Note:
                            </span>
                            At <b>
                                <ULink target="_blank" to="/"
                                    class="font-[500] hover:font-[700] hover:decoration-primary-500  underline ">
                                    Good View Moving & Storage</ULink>
                            </b>, our moving costs are
                            affordable and transparent. You'll always know what you're paying for without hidden fees or
                            last-minute surprises.</p>
                        <div
                            class="py-[30px] px-[30px] sm:px-[40px] mt-5 shadow-none bg-primary-500 rounded-[20px] relative">
                            <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-2 lg:gap-6">
                                <div class="lg:max-w-[55%]">
                                    <h2 class="text-[24px] font-bold font-jakarta text-left">
                                        Book Your Moving Service Today!
                                    </h2>

                                    <p class="text-[18px] font-normal font-jakarta text-left mt-2">
                                        Get in touch with us for a personalized moving quote and experience a smooth
                                        relocation
                                        experience.
                                    </p>
                                </div>

                                <div class="flex  lg:justify-end mt-4 lg:mt-0">
                                    <UButton size="xl" label="Get Free Quote" type="free quote" to="/quote"
                                        class="bg-black text-white px-7 py-3 transition-all font-jakarta rounded-[10px] text-lg font-[300] hover:text-black border border-black hover:bg-primary-500" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>


</template>

<script setup>
useHead({
    title: "Long Distance Moving ",
    meta: [
        { name: "description", content: "Good View Moving offers reliable long distance moving services. Move your belongings safely and efficiently across states with us." },
    ]
})
</script>