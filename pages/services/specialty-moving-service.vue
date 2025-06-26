<template>
    <div>
        <Banner background="/imgs/Specialty-Movingbanner.webp" class=" md:h-[35rem]" title="Specialty Moving"
            text="When it comes to moving valuable, delicate, or heavy items, you need a team with the expertise and experience to handle it all. At Good View Moving, we specialize in Specialty Moving, offering services that cover everything from piano movers to heavy equipment movers.">
            <template #body="isVisible">
                <QuoteInputs :isVisible="isVisible.isVisible" />
            </template>
        </Banner>
        <div class="container bg-white lg:mx-auto px-6 sm:px-10 py-10 mb-8 sm:mb-32">
            <div class="flex flex-col md:flex-row items-center mx-auto gap-6">
                <!-- Text Section -->
                <div class="md:w-2/3">
                    <h2 class="text-2xl font-jakarta md:text-4xl mb-5 font-extrabold">Why Choose Our Specialty Moving
                        Services?
                    </h2>
                    <p class="text-lg font-rubik md:text-[18px]  mb-5  md:font-[300] md:leading-8">
                        <b class=" font-[500]">Expert Handling of Delicate Items: </b> Our team is skilled in moving
                        fragile and
                        valuable items like pianos, artwork, and antiques, ensuring they are safely packed, moved, and
                        reassembled.
                    </p>
                    <p class="text-lg font-rubik md:text-[18px]  mb-5  md:font-[300] md:leading-8">
                        <b class=" font-[500]">Specialized Equipment: </b> We use the right equipment to move large or
                        heavy
                        items, such as pool tables, appliances, and heavy machinery, ensuring safe transport.
                    </p>
                    <p class="text-lg font-rubik md:text-[18px] mb-5  md:font-[300] md:leading-8">
                        <b class=" font-[500]">Tailored Services: </b> Whether you're moving a grand piano or a delicate
                        piece
                        of art, we provide relocation services that are customized to meet your unique needs.
                    </p>
                    <p class="text-lg font-rubik md:text-[18px] mb-5  md:font-[300] md:leading-8">
                        <b class=" font-[500]">Experienced Movers: </b> Our team of professional <b>
                            <ULink target="_blank" to="/services/furniture-assembly-and-disassembly-service"
                                class="font-[500]  hover:font-[700] hover:decoration-primary-500 underline ">
                                Furniture Movers</ULink>
                        </b> is trained to handle the most challenging moves, making sure your items are treated with
                        the care
                        they deserve.
                    </p>

                    <p class="text-lg font-rubik md:text-[18px]  mb-5  md:font-[300] md:leading-8">
                        <b class=" font-[500]">Comprehensive Moving Solutions: </b> From art shipping to antique movers,
                        we
                        offer a full range of specialty moving services to handle all kinds of valuable or heavy items.
                    </p>

                </div>
                <!-- Image Section -->
                <div class="card-img">
                    <img alt="Specialty Moving Services"
                        class="lazy-image opacity-0  rounded-[20px] transition-opacity duration-500 ease-in-out w-full h-[auto] object-cover "
                        v-lazy="'/imgs/Specialty-Moving2.webp'" />
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
                                Our Specialty Moving Process – How We Make It Easy for You</h2>

                            <ul
                                class=" list-decimal  marker:none list-inside md:text-[18px] text-white md:font-[400] leading-[36px] font-rubik mt-4 space-y-2">
                                <li class="mb-3"><span class="font-semibold">Consultation and Assessment: </span>We
                                    start by
                                    understanding
                                    your move's unique needs, whether it's for a pool table, piano, or antique
                                    furniture.
                                </li>
                                <li class="mb-3"><span class="font-semibold">Packing & Preparation: </span> We use
                                    specialized
                                    <b>
                                        <ULink target="_blank" to="/services/packing-and-unpacking-service"
                                            class="font-[500]  hover:font-[700] hover:decoration-primary-500 underline ">
                                            packing materials</ULink>
                                    </b> for your delicate items, ensuring everything is protected throughout the move.
                                </li>
                                <li class="mb-3"><span class="font-semibold">Efficient Transport: </span> Our team uses
                                    the
                                    right
                                    equipment
                                    to move heavy and large items like appliances and pool tables with care.</li>
                                <li class="mb-3"><span class="font-semibold">Reassembly and Setup: </span>Once we arrive
                                    at your
                                    new
                                    location, we provide reassembly services to ensure everything is properly set up.
                                </li>
                            </ul>
                        </div>
                        <div class="flex-1 card-img flex justify-center items-center">
                            <img alt="Specialty Moving Services"
                                class="lazy-image opacity-0  rounded-[10px] transition-opacity duration-500 ease-in-out w-full h-[auto] lg:h-[400px] object-cover "
                                v-lazy="'/imgs/Specialty-Moving.webp'" />
                        </div>



                    </div>

                    <div class="bg-primary-500 gap-2 rounded-none p-3 md:p-10">
                        <h2 class="text-2xl w-full lg:w-[65%] md:text-4xl font-jakarta font-extrabold text-black">
                            What’s
                            Included in
                            Our
                            Specialty
                            Moving Service?
                        </h2>
                        <div class="flex flex-col lg:flex-row justify-between pt-5">
                            <div class=" mb-5 w-full lg:w-[65%]">

                                <ul
                                    class="list-disc ml-2  marker:none list-inside md:text-[18px] text-black md:font-[400] leading-[36px] font-rubik mt-4 space-y-2">
                                    <li> <b class=" font-[500]">Pool Table Movers: </b>
                                        We offer expert services for moving and assembling pool tables, ensuring they’re
                                        properly packed.
                                    </li>
                                    <li> <b class=" font-[500]">Piano Movers: </b>
                                        Whether you have a small upright or a grand piano, we specialize in carefully
                                        and
                                        efficiently
                                        moving pianos.</li>
                                    <li> <b class=" font-[500]">Heavy Equipment Movers: </b>
                                        Our team is equipped to move large machinery or heavy equipment.</li>
                                    <li> <b class=" font-[500]">Appliance Movers: </b>
                                        From refrigerators to washing machines, our appliance moving services ensure
                                        your
                                        bulky
                                        items
                                        are moved without damage.</li>
                                    <li> <b class=" font-[500]">Art Shipping and Antique Movers: </b>
                                        We provide expert packing and transportation for delicate artwork and valuable
                                        antiques.
                                    </li>
                                </ul>

                            </div>

                            <div class="flex-1 card-img flex   justify-center lg:justify-end w-full lg:w-[35%] items-end">
                                <img alt="Specialty Moving"
                                    class="lazy-image opacity-0  rounded-[10px] transition-opacity duration-500 ease-in-out w-[340px] h-[auto] lg:h-[332px] object-cover "
                                    v-lazy="'/imgs/Specialty-Moving-2.webp'" />
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
                            Specialty Moving Costs – Get a Transparent Estimate</h2>
                        <p class="text-lg md:text-[18px] mt-4 font-rubik  text-black">
                            The cost of Specialty Moving services depends on the type of items being moved and the
                            complexity of
                            the move.
                        </p>
                        <p class="text-lg md:text-[18px] mt-4 font-rubik  text-black">
                            Here’s a rough idea of the costs you can expect:
                        </p>

                        <ul
                            class="list-disc  marker:none list-inside md:text-[18px] text-black md:font-[400] md:leading-[36px] font-rubik mt-4 space-y-2">
                            <li> <b class=" font-[500]">Appliance Moving: </b>
                                Costs typically range from $100 to $300, depending on the item’s size and distance.
                            </li>
                            <li> <b class=" font-[500]">Pool Table Moving: </b>
                                Moving a pool table generally costs between $300 and $600, depending on size and
                                disassembly
                                needs.
                            </li>
                            <li> <b class=" font-[500]">Piano Moving: </b>
                                Prices start at $200 for small pianos and can go up to $800 or more for grand pianos.
                            </li>
                            <li> <b class=" font-[500]">Heavy Equipment Moving: </b>
                                Moving large equipment costs around $500, depending on size and weight.
                            </li>
                            <li> <b class=" font-[500]">Art and Antique Moving: </b>
                                The cost for art shipping and antique movers ranges from $200 to $600, based on the
                                item’s value
                                and fragility.
                            </li>


                        </ul>


                        <p class="text-lg md:text-[18px] mt-4 font-rubik italic  text-black "> <span
                                class=" font-bold">Note:
                            </span>At <b>
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
    title: "Specialty Moving Services  ",
    meta: [
        { name: "description", content: "Good View Moving specializes in handling delicate or unique items. Trust us for safe and careful specialty moving services tailored to your needs." },
    ]
})
</script>
