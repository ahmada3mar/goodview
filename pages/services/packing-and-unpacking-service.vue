<template>
    <div>
    <Banner background="/assets/Packing-and-Unpackingbanner.webp" class=" md:h-[35rem]" title="Packing and Unpacking"
        text="At Good View Moving, we specialize in professional Packing and Unpacking services designed to save you time, effort, and stress. Whether you're looking for residential packing solutions, need help with commercial unpacking services, or require fragile item packing, our team is here to assist every step of the way. ">
        <template #body="isVisible">
        <QuoteInputs :isVisible="isVisible.isVisible" />
      </template>
</Banner>
<div class="container bg-white lg:mx-auto px-6 sm:px-10 py-10 mb-8 sm:mb-32">
            <div class="flex flex-col md:flex-row items-center mx-auto gap-6">
                <!-- Text Section -->
                <div class="md:w-2/3">
                    <h2 class="text-2xl font-jakarta md:text-4xl mb-5 font-extrabold">Why Choose Our Packing and Unpacking Services?</h2>
                    <p class="text-lg font-rubik md:text-[18px] md:font-[300] md:leading-8">
                        At Good View Moving, we make your move stress-free with expert Packing and Unpacking services. Here’s why you should choose us:</p>
                 <p class="text-lg font-rubik md:text-[18px] md:font-[300] md:leading-8">
                      <b>Experienced Movers: </b> Our professional team ensures your belongings are packed and unpacked safely.</p>
                      <p class="text-lg font-rubik md:text-[18px] md:font-[300] md:leading-8">
                      <b>Custom Solutions: </b>  We offer tailored packing services for both residential and <b><a href="https://goodview-moving.com/services/commercial-moving-service/"  target="_blank" class=" font-[500] underline "> Commercial Moves</a></b>.</p>
                   <p class="text-lg font-rubik md:text-[18px] md:font-[300] md:leading-8">
                      <b>High-Quality Materials: </b> We use the best packing supplies for moving, including materials for fragile item packing.</p>
    <p class="text-lg font-rubik md:text-[18px] md:font-[300] md:leading-8">
                      <b>Efficient Unpacking: </b> Our unpacking assistance helps you quickly settle into your new space.</p>
                    <p class="text-lg font-rubik md:text-[18px] md:font-[300] md:leading-8">
                      <b>Reliable Service: </b> Transparent pricing with no hidden fees, so you know exactly what to expect.</p>

                </div>
                <!-- Image Section -->
                <div class="card-img" >
                    <img alt="PackingandUnpacking"
                        class="lazy-image opacity-0  rounded-[20px] transition-opacity duration-500 ease-in-out w-full h-[auto] object-cover "
                        v-lazy="'/assets/Packing-and-Unpacking2.webp'" />
                </div>
            </div>
        </div>

    <div class=" bg-primary-500 w-full p-3 md:p-10   rounded-none">
        <div class="container">
            <div class="bg-black flex flex-col gap-5 justify-center sm:-mt-36 rounded-[10px]   p-5">


                <div class="flex flex-col lg:flex-row bg-zinc-900 rounded-none p-3 md:p-10 gap-5 md:gap-10">
                    <!-- Text Section -->
                    <div class="flex-1 flex flex-col">
                        <h2 class="text-3xl md:text-4xl   font-extrabold font-jakarta text-stone-300">
                            Our Packing and Unpacking Process</h2>
                        <p class="text-lg md:text-xl mt-4 font-rubik  text-stone-300 ">
                            At Good View Moving, we follow a simple, efficient process to ensure your Packing and Unpacking experience is seamless.
                        </p>

                        <ul
                            class="list-disc  marker:none list-inside md:text-[18px] text-white md:font-[300] md:leading-8 font-rubik mt-4 space-y-2">
                            <li><span class="font-semibold">Consultation and Assessment: </span>  We start by discussing your needs and understanding the scope of your move. We'll then walk you through the different packing supplies and help you decide on the best approach.

                            </li>
                            <li><span class="font-semibold">Packing: </span>Our team arrives with all the necessary packing supplies for moving, including sturdy boxes, bubble wrap, packing tape, and special materials for packing fragile items.</li>
                            <li><span class="font-semibold">Packing & Loading:</span> Our movers and packers carefully
                                handle your belongings for a secure move.</li>
                            <li><span class="font-semibold">Transporting:</span> Once everything is packed securely, we handle the transport, making sure your items are safely moved to your new home or office.</li>
                            <li><span class="font-semibold">Unpacking Assistance: </span>Upon arrival, we offer unpacking assistance to get you settled in quickly. Whether you need help organizing your kitchen or arranging your office space, we’ll do it all!</li>
                            <li><span class="font-semibold">Final Touch: </span>We offer tips for efficient unpacking to help you get started in your new space without any stress.</li>
                        </ul>
                    </div>
                    <div class="flex-1 card-img flex justify-center items-center">
                        <img alt="PackingandUnpacking"
                            class="lazy-image opacity-0  rounded-[10px] transition-opacity duration-500 ease-in-out w-full h-[auto] lg:h-[400px] object-cover "
                            v-lazy="'/assets/Packing-and-Unpacking.webp'" />
                    </div>



                </div>
                <div
                    class="flex flex-initial md:flex-1 flex-col bg-primary-500  gap-5 rounded-none p-3 md:p-10  justify-between">

                    <h2 class="text-2xl md:text-4xl font-jakarta font-extrabold text-black">What’s Included in Our Packing and Unpacking Services?
                    </h2>
                    <p class="text-md md:text-lg text-black font-rubik">
                        Our Packing and Unpacking service includes everything you need to make your move effortless:
                    </p>
                    <ul
                    class="list-disc  marker:none list-inside md:text-[18px] text-black md:font-[300] md:leading-8 font-rubik mt-4 space-y-2">
                    <li><b>Full-Service Packing and Unpacking: </b>
                        Our team will pack furniture, personal items, and even fragile possessions using professional-grade packing materials. We'll also carefully unpack everything once we arrive at your new location.</li>
                    <li><b>Moving Box Packing: </b>
                        We will pack all your items in the appropriate moving boxes to ensure they are secure and easy to transport. We can also provide special boxes for items like artwork or electronics if needed.</li>
                    <li><b>Fragile Item Packing: </b>
                        We understand how important your delicate items are. That's why we take extra care with fragile belongings like glassware, antiques, and electronics.</li>
                    <li><b>Unpacking Assistance: </b>
                        Once we’ve transported your belongings to your new location, we’ll help unpack and organize your things efficiently, ensuring that your move-in process is as smooth as possible.</li>

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
                        Packing and Unpacking Costs – Get a Transparent Estimate</h2>
                    <p class="text-lg md:text-xl mt-4 font-rubik  text-black">
                        One of our customers' most common questions is about the packing and unpacking costs. Here's an idea of what you can expect when you choose our Packing and Unpacking services:
                    </p>

                    <ul
                        class="list-disc  marker:none list-inside md:text-[18px] text-black md:font-[300] md:leading-8 font-rubik mt-4 space-y-2">
                        <li><b>Packing Materials: </b>
                            We provide all the packing supplies for moving, including boxes, bubble wrap, and special materials for packing fragile items. The cost of packing materials ranges from $100 to $300 for a typical move.
                        </li>
                        <li><b>Labor Costs: </b>
                            On average, packing services for a standard 2-3 bedroom home cost between $300 and $600. Prices can go up for larger homes or commercial moves.
                        </li>
                        <li><b>Unpacking Assistance:</b>
                             If you choose our unpacking assistance, this is usually priced at a flat rate of around $150 to $350, depending on how many rooms need to be unpacked and organized.
                        </li>
                        <li><b>Full-Service Packing and Unpacking: </b>
                            If you need a complete packing and unpacking solution, including everything from moving box packing to organizing your new space, expect to pay between $500 and $1,200.
                        </li>

                    </ul>

                    <p class="text-lg md:text-xl mt-4 font-rubik  text-black "> <span
                            class="italic font-bold">Note: </span> At <b><a href="https://www.goodview-moving.com/"  target="_blank" class="  font-[500] underline "> Good View Moving & Storage</a></b>, our moving costs are affordable and transparent. You'll always know what you're paying for without hidden fees or last-minute surprises.</p>
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
