<template>
    <div>
    <Banner background="/assets/Residential.webp" class=" md:h-[35rem]" title="Residential Moving"
        text="Moving to a new home should be exciting—not overwhelming. At Good View Moving & Storage, we make residential moving effortless with expert planning, careful handling, and a commitment to affordable moving costs. "
      >
      <template #body="isVisible">
        <QuoteInputs :isVisible="isVisible.isVisible" />
      </template>
</Banner>
<div class="container bg-white lg:mx-auto px-6 sm:px-10 py-10 mb-8 sm:mb-32">
            <div class="flex flex-col md:flex-row items-center mx-auto gap-6">
                <!-- Text Section -->
                <div class="md:w-2/3">
                    <h2 class="text-2xl font-jakarta md:text-4xl mb-5 font-extrabold">Why Choose Our Residential Moving Services?</h2>
                    <p class="text-lg font-rubik md:text-[18px] md:font-[300] md:leading-8">
                        With years of experience and thousands of successful moves, we know what it takes to provide a stress-free moving experience. Here’s why homeowners trust us:</p>
                 <p class="text-lg font-rubik md:text-[18px] md:font-[300] md:leading-8">
                      <b>Trusted Residential Movers Near You: </b> Our team of professional home movers ensures every move is handled with care.</p>
                    <p class="text-lg font-rubik md:text-[18px] md:font-[300] md:leading-8">
                      <b>Affordable & Transparent Pricing: </b> No hidden fees! Know your moving costs upfront with a free estimate.</p>
    <p class="text-lg font-rubik md:text-[18px] md:font-[300] md:leading-8">
                      <b>Local & Short-Distance Moves: </b> Whether you're moving across town or just down the block, our short distance movers are ready to help.</p>
                      <p class="text-lg font-rubik md:text-[18px] md:font-[300] md:leading-8">
                      <b>Full-Service Apartment Moving: </b> We specialize in apartment moving services and can easily handle stairs, elevators, and tight spaces.</p>

                      <p class="text-lg font-rubik md:text-[18px] md:font-[300] md:leading-8">
                      <b>Packing & Unpacking Available: </b> We offer packing services to protect your belongings.</p>

                </div>
                <!-- Image Section -->
                <div class="card-img" >
                    <img alt="Residental Moving"
                        class="lazy-image opacity-0  rounded-[20px] transition-opacity duration-500 ease-in-out w-full h-[auto] object-cover "
                        v-lazy="'/assets/Residential-Moving-Services3.webp'" />
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
                            Our Residential Moving Process – How We Make Moving Easy</h2>
                        <p class="text-lg md:text-xl mt-4 font-rubik  text-stone-300 ">
                            At Good View Moving, we take care of everything, so you don’t have to! Here’s what to
                            expect:
                        </p>

                        <ul
                            class="list-disc  marker:none list-inside md:text-[18px] text-white md:font-[300] md:leading-8 font-rubik mt-4 space-y-2">
                            <li><span class="font-semibold">Get a moving quote: </span> Tell us about your move, and
                                we’ll provide a free, no-obligation estimate.
                            </li>
                            <li><span class="font-semibold">Packing & Loading: </span> Our residential movers securely
                                pack and load your belongings with care.</li>
                            <li><span class="font-semibold">Safe & Efficient Transport: </span> We ensure your items
                                arrive safely at your new home.</li>
                            <li><span class="font-semibold">Unloading & Setup: </span> Need help unpacking? Let us know!
                            </li>
                        </ul>
                    </div>
                    <div class="flex-1 card-img flex justify-center items-center">
                        <img alt="Residental Moving"
                            class="lazy-image opacity-0  rounded-[10px] transition-opacity duration-500 ease-in-out w-full h-[auto] lg:h-[400px] object-cover "
                            v-lazy="'/assets/Residental2.webp'" />
                    </div>



                </div>
                <div
                    class="flex flex-initial md:flex-1 flex-col bg-primary-500  gap-5 rounded-none p-3 md:p-10  justify-between">

                    <h2 class="text-2xl md:text-4xl font-jakarta font-extrabold text-black">What’s Included in Our
                        Residential Moving Services?
                    </h2>
                    <p class="text-md md:text-lg text-black font-rubik">
                        We offer customized house moving services to meet your needs:
                    </p>
                    <p class="text-md md:text-lg text-black font-rubik"><b>Full-Service Moving –</b>
                        From packing to set up, we handle everything.</p>
                    <p class="text-md md:text-lg text-black font-rubik"><b>Packing & Unpacking – </b>
                        Let our experts pack your items securely.</p>
                    <p class="text-md md:text-lg text-black font-rubik"><b>Furniture Disassembly & Reassembly – </b>
                        We move bulky furniture with care.</p>
                    <p class="text-md md:text-lg text-black font-rubik"><b>Storage Solutions –</b>
                        Need extra space? Our secure storage options are available.</p>


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
                        Residential Moving Costs – Get a Transparent Estimate</h2>
                    <p class="text-lg md:text-xl mt-4 font-rubik  text-black">
                        We believe in honest pricing—no hidden fees or surprises! Your residential moving costs with us
                        depend on factors like distance, home size, and additional services.
                    </p>

                    <ul
                        class="list-disc  marker:none list-inside md:text-[18px] text-black md:font-[300] md:leading-8 font-rubik mt-4 space-y-2">
                        <li><b>Local Moves: </b>
                            On average, a short-distance move with us (within the same city or nearby areas) can cost
                            between $300 and $2,500.
                        </li>
                        <li><b>Longer Residential Moves: </b>
                            If you are moving to a different state or across the country, the costs typically range from
                            $2,000 to $7,500, depending on the distance and moving requirements.
                        </li>
                        <li><b>Hourly Rates: </b>
                            We charge many moves hourly. For a standard residential moving company, our hourly rates
                            range from $100 to $200 per hour for a team of movers.
                        </li>

                    </ul>

                    <p class="text-lg md:text-xl mt-4 font-rubik  text-black "> <span
                            class="italic font-bold">Note: </span> At <b><a href="https://www.goodview-moving.com/"  target="_blank" class="  font-[500] underline "> Good View Moving & Storage</a></b>, our moving costs are
                        affordable and transparent. You'll always know what you're paying for without hidden fees or
                        last-minute surprises.</p>

                        <div class="py-[30px] px-[30px] sm:px-[40px] mt-5 shadow-none bg-primary-500 rounded-[20px] relative">
    <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-2 lg:gap-6">
        <div class="lg:max-w-[55%]">
            <h2 class="text-[24px] font-bold font-jakarta text-left">
                Book Your Moving Service Today!
            </h2>

            <p class="text-[18px] font-normal font-jakarta text-left mt-2">
                Get in touch with us for a personalized moving quote and experience a smooth relocation experience.
            </p>
        </div>

        <div class="flex  lg:justify-end mt-4 lg:mt-0">
            <UButton
                size="xl"
                label="Get Free Quote"
                type="free quote"
                to="/quote"
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
