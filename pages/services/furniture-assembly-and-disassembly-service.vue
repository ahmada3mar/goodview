<template>
    <div>
        <Banner background="/imgs/Furniture-Assembly-and-Disassemblybanner.webp" class=" md:h-[35rem]"
            title="Furniture Assembly and Disassembly"
            text="At Good View Moving, we specialize in Furniture Assembly and Disassembly to make your move easier. We handle everything from carefully disassembling furniture to ensuring a smooth reassembly.  ">
            <template #body="isVisible">
                <QuoteInputs :isVisible="isVisible.isVisible" />
            </template>
        </Banner>
        <div class="container bg-white lg:mx-auto px-6 sm:px-10 py-10 mb-8 sm:mb-32">
            <div class="flex flex-col md:flex-row items-center mx-auto gap-6">
                <!-- Text Section -->
                <div class="md:w-2/3">
                    <h2 class="text-2xl font-jakarta md:text-4xl mb-5 font-extrabold">Why Choose Our Furniture Assembly
                        and
                        Disassembly Services?</h2>

                    <p class="text-lg font-rubik md:text-[18px] md:font-[300] md:leading-8">
                        <b class=" font-[500]">Expert Furniture Handling: </b> Our team specializes in moving furniture
                        and
                        expertly handles furniture assembly and disassembly to ensure your items are transported safely.
                    </p>
                    <p class="text-lg font-rubik md:text-[18px] md:font-[300] md:leading-8">
                        <b class=" font-[500]">Smooth Transitions: </b> Whether you’re moving heavy furniture or need
                        help
                        setting up new pieces, we make your move easy and stress-free by providing professional
                        furniture
                        assembly services.
                    </p>

                    <p class="text-lg font-rubik md:text-[18px] md:font-[300] md:leading-8">
                        <b class=" font-[500]">Time-Saving Service: </b> We save you time by efficiently disassembling
                        furniture
                        for transport and reassembling it quickly at your new location so you can focus on settling in.
                    </p>
                    <p class="text-lg font-rubik md:text-[18px] md:font-[300] md:leading-8">
                        <b class=" font-[500]">Care and Efficiency: </b> We treat your furniture with care, ensuring
                        it’s safely
                        packed, moved, and set up in your new home or office without any hassle.
                    </p>
                    <p class="text-lg font-rubik md:text-[18px] md:font-[300] md:leading-8">
                        <b class=" font-[500]">Customized Solutions: </b>Our services are tailored to meet your specific
                        needs—whether you have large furniture pieces that need disassembly or just require furniture
                        assembly
                        near me for smaller items.
                    </p>

                </div>
                <!-- Image Section -->
                <div class="card-img">
                    <img alt="Furniture-assembly"
                        class="lazy-image opacity-0  rounded-[20px] transition-opacity duration-500 ease-in-out w-full h-[auto] object-cover "
                        v-lazy="'/imgs/Furniture-Assembly-and-Disassembly2.webp'" />
                </div>
            </div>
        </div>

        <div class=" bg-primary-500 w-full p-3 md:p-10   rounded-none">
            <div class="container">
                <div class="bg-black flex flex-col gap-5 justify-center sm:-mt-36 rounded-[10px]   p-5">


                    <div class="flex flex-col lg:flex-row bg-zinc-900 rounded-none p-3 md:p-10 gap-5 md:gap-10">
                        <!-- Text Section -->
                        <div class="flex-1 flex flex-col">
                            <h2 class="text-2xl md:text-4xl   font-extrabold font-jakarta text-stone-300">
                                Our Furniture Assembly and Disassembly Process</h2>


                            <ul
                                class=" list-decimal list-inside   md:text-[18px] text-white md:font-[300] md:leading-8 font-rubik mt-4 space-y-2">
                                <li><span class="font-semibold">Consultation and Assessment: </span> We begin by
                                    assessing the
                                    furniture that needs assembly or disassembly. We understand the importance of
                                    handling your
                                    items properly, and we'll plan accordingly.
                                </li>
                                <li><span class="font-semibold">Furniture Disassembly: </span>Our furniture mover team
                                    carefully
                                    disassembles furniture, ensuring that no parts are lost or damaged during transport.
                                </li>
                                <li><span class="font-semibold">Packing and Moving: </span> Once your furniture is
                                    disassembled,
                                    we pack it securely to prevent damage during the move.</li>
                                <li><span class="font-semibold">Furniture Assembly: </span> Upon arrival at your new
                                    space, we
                                    will reassemble your furniture quickly and efficiently so you can enjoy it.</li>
                            </ul>
                        </div>
                        <div class="flex-1 card-img flex justify-center items-center">
                            <img alt="Furniture-assembly"
                                class="lazy-image opacity-0  rounded-[10px] transition-opacity duration-500 ease-in-out w-full h-[auto] lg:h-[400px] object-cover "
                                v-lazy="'/imgs/Furniture-Assembly-and-Disassembly.webp'" />
                        </div>



                    </div>
                    <div
                        class="flex flex-initial md:flex-1 flex-col bg-primary-500  gap-5 rounded-none p-3 md:p-10  justify-between">

                        <h2 class="text-2xl md:text-4xl font-jakarta font-extrabold text-black">What’s Included in Our
                            Furniture
                            Assembly and Disassembly Service?
                        </h2>
                        <p class="text-md md:text-lg text-black font-rubik">
                            Our Furniture Assembly and Disassembly service covers everything from start to finish:
                        </p>
                        <ul
                            class="list-disc marker:none list-inside md:text-[18px] text-black md:font-[300] md:leading-8 font-rubik mt-4 space-y-2 nmb">
                            <li> <b class=" font-[500]">Disassembling Furniture: </b>
                                We carefully disassemble your furniture, including beds, tables, desks, and other large
                                items,
                                to make it easier to move and avoid damage.</li>
                            <li> <b class=" font-[500]">Reassembling at Your New Location: </b>
                                After the move, we’ll assemble furniture back in your new home or office, ensuring that
                                everything is put together correctly and securely.</li>
                            <li> <b class=" font-[500]">Furniture Mover Expertise: </b>
                                Our team has extensive experience with all types of furniture, ensuring safe handling
                                and
                                efficient assembly.</li>
                            <li>
                                <b class=" font-[500]">Secure Packing: </b>
                                We offer <b>
                                    <ULink target="_blank" to="/services/packing-and-unpacking-service"
                                        class="font-[500]  underline ">
                                        Packing Services</ULink>
                                </b>for the furniture pieces, ensuring that nothing gets scratched or broken during the
                                move.
                            </li>
                        </ul>


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
                            Furniture Assembly and Disassembly Costs – Get a Transparent Estimate</h2>
                        <p class="text-lg md:text-xl mt-4 font-rubik  text-black">
                            Wondering how much our Furniture Assembly and Disassembly service costs? The price varies
                            based on
                            the complexity of the job and the amount of furniture involved.
                        </p>
                        <p class="text-lg md:text-xl mt-4 font-rubik  text-black">
                            Here’s a breakdown of what you can expect: </p>


                        <ul
                            class="list-disc  marker:none list-inside md:text-[18px] text-black md:font-[300] md:leading-8 font-rubik mt-4 space-y-2">
                            <li> <b class=" font-[500]">Basic Furniture Assembly: </b>
                                Expect costs starting from $100 to $200 for a standard assembly or disassembly of small
                                furniture items.
                            </li>
                            <li> <b class=" font-[500]">Larger Furniture or Complex Assembly: </b>
                                The cost for larger items like beds, dining tables, or office furniture typically ranges
                                from
                                $200 to $500. </li>

                            <li> <b class=" font-[500]">Labor and Moving Costs: </b>
                                If you're also booking a moving service, the cost of moving furniture is usually
                                factored into
                                your total quote. We provide moving quotes based on the distance, size of the move, and
                                the time
                                needed for furniture assembly and disassembly.
                            </li>

                        </ul>

                        <p class="text-lg md:text-xl mt-4 font-rubik  text-black "> <span class="italic font-bold">Note:
                            </span>
                            At <b class=" font-[500]">
                                <ULink target="_blank" to="/" class="font-[500]  underline ">
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
    title: 'Furniture Assembly & Disassembly - Good View Moving   ',
    meta: [
        { name: 'description', content: " Good View Moving provides professional furniture assembly and disassembly services, ensuring safe and efficient relocation of your items. " },
    ]
})
</script>