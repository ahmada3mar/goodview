<template>
    <div>
    <Banner background="/assets/storage-service.jpg-02.webp" class=" md:h-[35rem]" title="Storage Units"
        text="When you need a safe and convenient space to store your belongings, our storage unit services are designed to offer you peace of mind. At Good View Moving & Storage, we provide reliable storage units in a range of sizes and types, perfect for everything from short-term storage needs to long-term storage solutions. " >
        <template #body="isVisible">
        <QuoteInputs :isVisible="isVisible.isVisible" />
      </template>
</Banner>
<div class="container bg-white lg:mx-auto px-6 sm:px-10 py-10 mb-8 sm:mb-32">
            <div class="flex flex-col md:flex-row items-center mx-auto gap-6">
                <!-- Text Section -->
                <div class="md:w-2/3">
                    <h2 class="text-2xl font-jakarta md:text-4xl mb-5 font-extrabold">Why Choose Our Storage Units?</h2>
                 <p class="text-lg font-rubik md:text-[18px] md:font-[300] md:leading-8">
                      <b>Variety of Storage Unit Sizes: </b>Whether you’re looking for a 5x5 storage unit for a few boxes or a 10x10 storage unit to store furniture, we offer various storage unit sizes to accommodate all your needs.</p>
                    <p class="text-lg font-rubik md:text-[18px] md:font-[300] md:leading-8">
                      <b>Climate-Controlled Storage: </b>  Our climate-controlled storage units protect sensitive items like electronics, artwork, and antiques from extreme temperatures and humidity.</p>
    <p class="text-lg font-rubik md:text-[18px] md:font-[300] md:leading-8">
                      <b>Affordable Storage Options: </b>We offer affordable storage solutions without compromising on security or convenience. We believe storing your belongings should be cost-effective, and we provide transparent pricing. </p>
                      <p class="text-lg font-rubik md:text-[18px] md:font-[300] md:leading-8">
                      <b>Flexible Terms: </b>Whether you need short-term storage during a move or long-term storage for an indefinite period, our terms are designed to be flexible and fit your needs.</p>

                      <p class="text-lg font-rubik md:text-[18px] md:font-[300] md:leading-8">
                      <b>Top-Notch Security: </b> Our storage units are equipped with 24/7 surveillance, gated access, and secure locks, so you can rest easy knowing your belongings are safe. </p>
                      <p class="text-lg font-rubik md:text-[18px] md:font-[300] md:leading-8">
                      <b>Easy Access and Convenience: </b>Our units are designed for easy access, so you can come and go as you please, whenever it's most convenient for you.</p>

                </div>
                <!-- Image Section -->
                <div class="card-img" >
                    <img alt="Commercial Moving"
                        class="lazy-image opacity-0  rounded-[20px] transition-opacity duration-500 ease-in-out w-full h-[auto] object-cover "
                        v-lazy="'/assets/storage-service-01.webp'" />
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
                            Storage Unit Options We Offer</h2>

                        <ul
                            class="  list-disc  marker:none list-inside md:text-[18px] text-white md:font-[300] md:leading-8 font-rubik mt-4 space-y-2">
                            <li><span class="font-semibold">Standard Storage Units: </span>Our standard units come in various sizes to accommodate your needs. From a 5x5 storage unit for a small apartment’s worth of belongings to a 10x10 storage unit for larger spaces.
                            </li>
                            <li><span class="font-semibold">Climate-Controlled Storage: </span> We offer climate-controlled storage for temperature-sensitive items such as electronics, fine art, documents, or delicate antiques. This type of storage guarantees that your belongings are protected from fluctuations in temperature and humidity. </li>
                            <li><span class="font-semibold">Long-Term Storage: </span> Our long-term storage units are the perfect solution if you're looking for a place to store items for an extended period. Our flexible pricing and contracts allow you to store your items for as long as you need. </li>
                            <li><span class="font-semibold">Moving and Storage Services: </span>We provide storage units and moving and storage services to make your move reliable. </li>
</ul>
                    </div>
                    <div class="flex-1 card-img flex justify-center items-center">
                        <img alt="Commercial Moving"
                            class="lazy-image opacity-0  rounded-[10px] transition-opacity duration-500 ease-in-out w-full h-[auto] lg:h-[400px] object-cover "
                            v-lazy="'/assets/storage-service.jpg04.webp'" />
                    </div>



                </div>
                <!-- <div
                    class="flex flex-initial md:flex-1 flex-col bg-primary-500  gap-5 rounded-none p-3 md:p-10  justify-between">

                    <h2 class="text-2xl md:text-4xl font-jakarta font-extrabold text-black">
                        Storage Unit Cost – Get a Transparent Estimate
                    </h2>
                    <ul
                    class="list-disc  marker:none list-inside md:text-[18px] text-black md:font-[300] md:leading-8 font-rubik mt-4 space-y-2">
                    <li><b>Pool Table Movers: </b>
                        We offer expert services for moving and assembling pool tables, ensuring they’re properly packed and set up in your new space.</li>
                    <li> <b>Piano Movers: </b>
                        Whether you have a small upright or a grand piano, we specialize in carefully and efficiently moving pianos.</li>
                    <li><b>Heavy Equipment Movers: </b>
                        Our team is equipped to move large machinery or heavy equipment, ensuring they are transported safely and securely.</li>
                    <li> <b>Appliance Movers: </b>
                        From refrigerators to washing machines, our appliance moving services ensure your bulky items are moved without damage.</li>
                        <li> <b>Art Shipping and Antique Movers: </b>
                            We provide expert packing and transportation for delicate artwork and valuable antiques, giving them the special care they require.</li>
</ul>
                </div> -->

            </div>

        </div>
    </div>
    <div class="bg-white w-full p-3 md:p-10   rounded-none">
        <div class="container">
            <div class=" flex flex-col gap-5 justify-center  rounded-[10px]  sm:p-5 p-2">


                <div class="flex flex-col  bg-white rounded-[10px] max-w-[1100px] p-3 md:p-8 ">
                    <!-- Text Section -->
                    <h2 class="text-2xl md:text-4xl   font-extrabold font-jakarta text-black">

Storage Unit Cost – Get a Transparent Estimate</h2>
                    <p class="text-lg md:text-xl mt-4 font-rubik  text-black">
                        The cost of a storage unit depends on several factors, such as size, type of storage, and duration of rental.
                    </p>
                    <p class="text-lg md:text-xl mt-4 font-rubik  text-black">
                        Here’s a general idea of what you can expect:
                    </p>

                    <ul
                        class="list-disc  marker:none list-inside md:text-[18px] text-black md:font-[300] md:leading-8 font-rubik mt-4 space-y-2">
                        <li><b>5x5 Storage Unit:</b>
                            These smaller units typically cost between $50 and $100 per month, depending on location and facility.
                        </li>
                        <li><b>10x10 Storage Unit:  </b>
                            A 10x10 storage unit is ideal for a larger load and usually costs between $100 and $200 per month.
                        </li>
                        <li><b>Climate-Controlled Storage Units: </b>
                            These units cost a little more, with prices ranging from $150 to $300 per month based on size and location.
                        </li>
                        <li><b>Long-Term Storage: </b>
                            We offer discounts on extended rentals for those looking for long-term storage, so you won't have to worry about high costs over time.
                        </li>

                    </ul>


                    <p class="text-lg md:text-xl mt-4 font-rubik  text-black "> <span
                            class="italic font-bold">Note:</span>At Good View Moving & Storage, our moving costs are affordable and transparent. You'll always know what you're paying for without hidden fees or last-minute surprises.</p>
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
