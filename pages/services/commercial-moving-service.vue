<template>
    <div>
        <Banner background="/imgs/Commercial.webp" class=" md:h-[35rem]" title="Commercial Moving"
            text="Relocating a business is more than just moving desks and chairs—it’s about minimizing downtime and keeping operations running smoothly. At Good View Moving & Storage, our expert commercial movers ensure a stress-free transition so you can focus on what matters—your business. ">
            <template #body="isVisible">
                <QuoteInputs :isVisible="isVisible.isVisible" />
            </template>
        </Banner>
        <div class="container bg-white lg:mx-auto  px-6 sm:px-10 py-10 mb-8 sm:mb-32">
            <div class="flex flex-col md:flex-row items-center mx-auto gap-6">
                <!-- Text Section -->
                <div class="md:w-2/3">
                    <h2 class="text-3xl font-jakarta md:text-4xl mb-5 font-extrabold">Why Choose Our Commercial Moving
                        Services?
                    </h2>
                    <p class="text-lg font-rubik md:text-[18px]  mb-5  md:font-[300] md:leading-8">
                        When it comes to commercial moving, experience matters, we've helped countless businesses
                        relocate with
                        zero disruption to their workflow.
                    </p>
                    <h3 class="text-lg font-rubik md:text-[18px]   mb-5 text-center  font-bold md:leading-8">
                        Here’s Why Companies Trust Us:
                    </h3>
                    <p class="text-lg font-rubik md:text-[18px]  mb-5  md:font-[300] md:leading-8">
                        <b class=" font-[500]"> Trusted Commercial Movers Near You: </b>Our skilled commercial movers
                        and
                        packers handle everything from office moving services to warehouse relocations.
                    </p>
                    <p class="text-lg font-rubik md:text-[18px]  mb-5  md:font-[300] md:leading-8">
                        <b class=" font-[500]"> Minimal Downtime: </b> We work around your schedule to ensure a smooth
                        move with
                        little to no business interruption.
                    </p>
                    <p class="text-lg font-rubik md:text-[18px]  mb-5  md:font-[300] md:leading-8">
                        <b class=" font-[500]">Customized Moving Plans: </b>Every business is different. We create a
                        personalized moving plan that fits your needs.
                    </p>

                    <p class="text-lg font-rubik md:text-[18px]  mb-5  md:font-[300] md:leading-8">
                        <b class=" font-[500]"> Secure Packing & Transport: </b> We use high-quality <b>
                            <ULink target="_blank" to="/services/packing-and-unpacking-service"
                                class="font-[500] hover:font-[700] hover:decoration-primary-500  underline ">
                                packing materials</ULink>
                        </b> to protect office furniture, IT equipment, and sensitive documents.
                    </p>
                    <p class="text-lg font-rubik md:text-[18px]  mb-5  md:font-[300] md:leading-8">
                        <b class=" font-[500]"> Full-Service Movers: </b> From packing to setting up your new space, we
                        offer
                        end-to-end commercial moving solutions.
                    </p>
                </div>
                <!-- Image Section -->
                <div class=" card-img">
                    <img alt="Commercial Moving"
                        class="lazy-image opacity-0  rounded-[20px] transition-opacity duration-500 ease-in-out w-full h-[auto] object-cover "
                        v-lazy="'/imgs/Commercial-Moving3.webp'" />
                </div>
            </div>
        </div>

        <div class=" bg-primary-500 w-full p-3 md:p-10   rounded-none">
            <div class="container">
                <div class="bg-black flex flex-col gap-5 justify-center sm:-mt-36 rounded-[10px]   p-5">


                    <div class="flex flex-col lg:flex-row bg-zinc-900 rounded-none p-3 md:p-10 gap-5 md:gap-10">
                        <!-- Text Section -->
                        <div class="flex-1 flex flex-col">
                            <h2 class="text-2xl md:text-[25px]   font-extrabold font-jakarta text-stone-300">
                                Our Commercial Moving Process – How We Make Moving Easy</h2>
                            <p class="text-lg  md:text-[18px] mt-4 font-rubik  text-stone-300 ">
                                Moving your business should be simple, efficient, and stress-free.That’s why our
                                commercial
                                moving
                                company
                                follows a streamlined process:
                            </p>

                            <ul
                                class="list-disc marker:none list-inside md:text-[18px] text-white md:font-[300] md:leading-8 font-rubik mt-4 space-y-2">
                                <li><span class="font-semibold">Get a moving quote:</span> Share your moving details,
                                    and
                                    we’ll
                                    provide a clear, upfront estimate.
                                </li>
                                <li><span class="font-semibold">Create a Custom Plan:</span>We assess your business
                                    needs and
                                    develop a tailored moving strategy.</li>
                                <li><span class="font-semibold">Packing & Preparation: </span>Our office movers
                                    carefully
                                    pack,
                                    label, and organize everything for a smooth transition.</li>
                                <li><span class="font-semibold">Safe & Timely Transport: </span> Your office items are
                                    transported securely, ensuring nothing gets lost or damaged.</li>
                                <li><span class="font-semibold">Unpacking & Setup:</span> Need help arranging furniture
                                    or
                                    setting up workstations? We’ve got you covered!</li>

                            </ul>
                        </div>
                        <div class="flex-1 card-img flex justify-center items-center">
                            <img alt="Commercial Moving"
                                class="lazy-image opacity-0  rounded-[10px] transition-opacity duration-500 ease-in-out w-full h-[auto] lg:h-[400px] object-cover "
                                v-lazy="'/imgs/commerical1.webp'" />
                        </div>



                    </div>
                    <div class="bg-primary-500 gap-2 rounded-none p-3 md:p-10 ">
                        <h2 class="text-2xl w-full lg:w-[65%] md:text-4xl font-jakarta font-extrabold text-black">What’s
                            Included in
                            Our
                            Commercial Moving Services?
                        </h2>
                        <div class="flex flex-col lg:flex-row justify-between pt-5">
                            <div class="w-full mb-5 lg:w-[65%]">

                                <p class="text-md md:text-lg mt-4 text-black font-rubik">
                                    At Good View Moving, we handle all types of corporate moving services, including:
                                </p>

                                <ul
                                    class="list-disc ml-2  marker:none list-inside md:text-[18px] text-black md:font-[400] md:leading-8 font-rubik mt-4 space-y-2">
                                    <li><b>Office Moving Services:</b> Relocate small offices, corporate headquarters,
                                        and
                                        entire
                                        businesses.</li>
                                    <li><b>Commercial Packing & Unpacking:</b> Secure packing for electronics,
                                        furniture,
                                        and
                                        important
                                        files.</li>
                                    <li><b>Warehouse & Industrial Moves:</b> Large-scale moving solutions for factories,
                                        warehouses, and
                                        retail stores.</li>
                                    <li><b> Furniture Disassembly & Reassembly: </b> We easily handle office desks,
                                        conference
                                        tables, and cubicles.</li>

                                </ul>

                            </div>

                            <div class="flex-1 card-img flex  justify-center lg:justify-end w-[35%] items-end ">
                                <img alt="Commercial Moving"
                                    class="lazy-image opacity-0  rounded-[10px] transition-opacity duration-500 ease-in-out w-[340px] h-[auto] lg:h-[332px] object-cover "
                                    v-lazy="'/imgs/Commercial-2.webp'" />
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
                            Commercial Moving Costs – Get a Transparent Estimate</h2>
                        <p class="text-lg md:text-[18px] mt-4 font-rubik  text-black">
                            We believe in fair and upfront pricing. The cost of commercial moving depends on:
                        </p>

                        <ul
                            class="list-disc   marker:none list-inside md:text-[18px] text-black md:font-[400] md:leading-8 font-rubik mt-4 space-y-2">
                            <li>
                                The size of your office or business space.
                            </li>
                            <li>Distance between your current and new location.</li>
                            <li>Additional services like packing, storage, or furniture setup.</li>

                        </ul>
                        <h2 class="text-2xl md:text-3xl mt-5 font-bold font-jakarta text-black mb-3">
                            How Much Does Our Commercial Moving Cost on Average?</h2>
                        <p class="text-lg md:text-[18px] mt-5 font-rubik font-[400]  text-black ">
                            <b class="font-[500]">Small Office Moves (1,000 – 5,000 sq. ft.): </b>These typically cost
                            between
                            $1,500 and
                            $5,000, depending on the number of workstations and equipment.
                        </p>
                        <p class="text-lg md:text-[18px] mt-5 font-rubik font-[400]  text-black ">
                            <b class="font-[500]">Medium-Sized Office Moves (5,000 – 10,000 sq. ft.):</b> Expect to pay
                            $5,000
                            to $10,000 for
                            a full relocation, including packing and setup.
                        </p>
                        <p class="text-lg md:text-[18px] mt-5 font-rubik font-[400]  text-black ">
                            <b class="font-[500]">Large Corporate or Industrial Moves (10,000+ sq. ft.): </b>Depending
                            on
                            complexity and
                            logistics, costs can start at $10,000 and go up to $30,000+.
                        </p>
                        <p class="text-lg md:text-[18px] mt-5 font-rubik font-[400]  text-black ">
                            <b class="font-[500]">Hourly Rates for Office Movers: </b> Many commercial moving companies
                            charge
                            between $150 and
                            $300 per hour, depending on the crew size and services needed.
                        </p>
                        <p class="text-lg  italic md:text-[18px] mt-4 font-rubik  text-black "> <span
                                class=" font-bold">Note:
                            </span>
                            At <b>
                                <ULink target="_blank" to="/"
                                    class="font-[500] hover:font-[700] hover:decoration-primary-500 underline ">
                                    Good View Moving & Storage</ULink>
                            </b>, our moving costs are
                            affordable and transparent.
                            You'll always
                            know what you're paying for without hidden fees or last-minute surprises.</p>

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
    title: "Commercial Moving Services ",
    meta: [
        { name: "description", content: "Discover Good View Moving’s professional commercial moving services, designed to ensure your business relocation is smooth and hassle-free. " },
    ]
})
</script>