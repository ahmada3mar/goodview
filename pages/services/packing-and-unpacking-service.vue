<template>
    <div>
        <Banner background="/imgs/Packing-and-Unpackingbanner.webp" class=" md:h-[35rem]" title="Packing and Unpacking"
            text="At Good View Moving, we specialize in professional packing and unpacking services designed to save you time, effort, and stress. Whether you're looking for residential packing solutions, need help with commercial unpacking services, or require fragile item packing, our team is here to assist every step of the way. ">
            <template #body="isVisible">
                <QuoteInputs :isVisible="isVisible.isVisible" />
            </template>
        </Banner>
        <div class="container bg-white lg:mx-auto px-6 sm:px-10 py-10 mb-8 sm:mb-32">
            <div class="flex flex-col md:flex-row items-center mx-auto gap-6">
                <!-- Text Section -->
                <div class="md:w-2/3">
                    <h2 class="text-2xl font-jakarta md:text-4xl mb-5 font-extrabold">Why Choose Our Packing and
                        Unpacking
                        Services?</h2>
                    <p class="text-lg font-rubik md:text-[18px] mb-5 md:font-[300] md:leading-8">
                        At Good View Moving, we make your move stress-free with expert packing and unpacking services.
                    </p>
                    <h3 class="text-lg font-rubik md:text-[18px]   mb-5 text-center  font-bold md:leading-8">
                        Here’s
                        why you should Choose Us:
                    </h3>
                    <p class="text-lg font-rubik md:text-[18px] mb-5 md:font-[300] md:leading-8">
                        <b class=" font-[500]">Experienced Movers: </b> Our professional team ensures your belongings
                        are
                        packed and unpacked safely.
                    </p>
                    <p class="text-lg font-rubik md:text-[18px] mb-5 md:font-[300] md:leading-8">
                        <b class=" font-[500]">Custom Solutions: </b>We offer tailored packing services for both
                        residential
                        and commercial moves.
                    </p>
                    <p class="text-lg font-rubik md:text-[18px] mb-5 md:font-[300] md:leading-8">
                        <b class=" font-[500]">High-Quality Materials: </b> We use the best packing supplies, including
                        materials for fragile item packing.
                    </p>
                    <p class="text-lg font-rubik md:text-[18px] mb-5 md:font-[300] md:leading-8">
                        <b class=" font-[500]">Efficient Unpacking: </b> Our unpacking assistance helps you quickly
                        settle into
                        your new space.
                    </p>
                    <p class="text-lg font-rubik md:text-[18px] mb-5 md:font-[300] md:leading-8">
                        <b class=" font-[500]">Reliable Service: </b> Transparent pricing with no hidden fees, so you
                        know
                        exactly what to expect.
                    </p>

                </div>
                <!-- Image Section -->
                <div class="card-img">
                    <img alt="PackingandUnpacking"
                        class="lazy-image opacity-0  rounded-[20px] transition-opacity duration-500 ease-in-out w-full h-[auto] object-cover "
                        v-lazy="'/imgs/Packing-and-Unpacking2.webp'" />
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
                                Our Packing and Unpacking Process</h2>
                            <p class="text-lg md:text-[18px] mt-4 font-rubik  text-stone-300 ">
                                At Good View Moving, we follow a simple and efficient process to give you a smooth
                                experience.
                            </p>

                            <ul
                                class="list-disc  marker:none list-inside md:text-[18px] text-white md:font-[400] leading-[36px] font-rubik mt-4 space-y-2">
                                <li><span class="font-semibold">Consultation and Assessment: </span>We begin by
                                    understanding
                                    your needs and explaining the best packing options for your move.

                                </li>
                                <li><span class="font-semibold">Packing: </span>Our team arrives fully equipped with
                                    boxes,
                                    bubble wrap, packing tape, and materials for fragile items. </li>
                                <li><span class="font-semibold">Packing & Loading:</span> Our movers and packers
                                    carefully
                                    handle your belongings for a secure move.</li>
                                <li><span class="font-semibold">Transporting:</span> Once packed, we safely transport
                                    your
                                    belongings to your new home or office.
                                </li>
                                <li><span class="font-semibold">Unpacking Assistance: </span>Upon arrival, we offer
                                    unpacking
                                    assistance to get you settled in quickly. </li>
                                <li><span class="font-semibold">Final Touch: </span>We share tips and are available for
                                    any
                                    follow-up support. </li>
                            </ul>
                        </div>
                        <div class="flex-1 card-img flex justify-center items-center">
                            <img alt="PackingandUnpacking"
                                class="lazy-image opacity-0  rounded-[10px] transition-opacity duration-500 ease-in-out w-full h-[auto] lg:h-[400px] object-cover "
                                v-lazy="'/imgs/Packing-and-Unpacking.webp'" />
                        </div>



                    </div>
                    <div class="bg-primary-500 gap-2 rounded-none p-3 md:p-10">
                        <h2 class="text-2xl w-full lg:w-[65%] md:text-4xl font-jakarta font-extrabold text-black">
                            What’s
                            Included in
                            Our
                            Packing and Unpacking Services?
                        </h2>
                        <div class="flex flex-col lg:flex-row justify-between pt-5">
                            <div class=" mb-5 w-full lg:w-[65%]">

                                <p class="text-md md:text-lg mt-4 text-black font-rubik">
                                    Our Packing and Unpacking service includes everything you need to make your move
                                    effortless:
                                </p>

                                <ul
                                    class="list-disc ml-2  marker:none list-inside md:text-[18px] text-black md:font-[400] md:leading-8 font-rubik mt-4 space-y-2">
                                    <li><b>Full-Service Packing & Unpacking: </b> We professionally pack and unpack
                                        furniture.</li>
                                    <li><b>Box Packing:</b> We securely pack your items in the right boxes.</li>
                                    <li><b>Fragile Item Packing:</b> Extra care for delicate items like glassware and
                                        antiques.</li>
                                    <li><b> Unpacking Support: </b> We help unpack and organize your space so you can
                                        settle
                                        in
                                        quickly and stress-free.</li>

                                </ul>

                            </div>

                            <div
                                class="flex-1 card-img flex  justify-center lg:justify-end w-full lg:w-[35%] items-end">
                                <img alt="packing and unpacking Moving"
                                    class="lazy-image opacity-0  rounded-[10px] transition-opacity duration-500 ease-in-out w-[340px] h-[auto] lg:h-[332px] object-cover "
                                    v-lazy="'/imgs/Packing-and-Unpacking-2.webp'" />
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
                            Packing and Unpacking Costs – Get a Transparent Estimate</h2>
                        <p class="text-lg md:text-[18px] font-[400] mt-4 font-rubik  text-black">
                            One of our customers' most common questions is about the packing and unpacking costs.
                        </p>
                        <p class="text-lg md:text-[18px] font-[400] mt-4 font-rubik  text-black">
                            Here's an idea of what you can expect:
                        </p>


                        <ul
                            class="list-disc  marker:none list-inside md:text-[18px] text-black md:font-[400] md:leading-8 font-rubik mt-4 space-y-2">
                            <li> <b class=" font-[500]">Packing Materials: </b>
                                We provide all the packing supplies, including boxes, bubble wrap, and special
                                materials. The
                                cost of packing materials ranges from $100 to $300 for a typical move.
                            </li>
                            <li> <b class=" font-[500]">Labor Costs: </b>
                                On average, packing services for a standard 2-3 bedroom home cost between $300 and
                                $600. Prices
                                can go up for larger homes or commercial moves.
                            </li>
                            <li> <b class=" font-[500]">Unpacking Assistance:</b>
                                If you choose our unpacking assistance, this is usually priced at a flat rate of around
                                $150 to
                                $350.
                            </li>
                            <li> <b class=" font-[500]">Full-Service Packing and Unpacking: </b>
                                If you need a complete packing and unpacking package, including everything from
                                packing to
                                organizing, expect to pay between $500 and $1,200.
                            </li>

                        </ul>

                        <p class="text-lg md:text-[18px] mt-4 font-rubik  italic text-black "> <span
                                class=" font-bold">Note:
                            </span>
                            At <b>
                                <ULink target="_blank" to="/"
                                    class="font-[500] hover:font-[700] hover:decoration-primary-500  underline ">
                                    Good View Moving & Storage</ULink>
                            </b>, our moving costs are affordable and transparent. You'll always know what you're paying
                            for
                            without hidden fees or last-minute surprises.</p>
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
    title: "Packing & Unpacking Services  ",
    meta: [
        { name: "description", content: " Let Good View Moving handle your packing and unpacking needs. Our expert team ensures your items are packed securely for the move. " },
    ]
})
</script>