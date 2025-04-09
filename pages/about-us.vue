<template>
    <div class="flex flex-col h-full">

        <Banner background="/assets/aboutus.jpg" class="h-[20rem] md:h-[25rem]" title="About Us"
            text="We are a moving company based in New Jersey, services all North/South East Coast excluding Florida." />

        <div class="container bg-white lg:mx-auto px-2 sm:px-10 py-10 mb-32">
            <div class="flex flex-col md:flex-row items-center mx-auto gap-6">
                <!-- Text Section -->
                <div class="md:w-2/3">
                    <h2 class="text-3xl font-jakarta md:text-4xl mb-5 font-extrabold">Our Story – How It All Began</h2>
                    <p class="text-lg font-rubik md:text-[18px] md:font-[300] md:leading-8">
                        Moving isn't just about transporting boxes—it's about new beginnings, and at Good View Moving &
                        Storage, we know just how important that is.
                    </p>
                    <p class="text-lg font-rubik md:text-[18px] md:font-[300] md:leading-8">
                        Our journey started in New Jersey as a small, family-owned business built on one simple promise:
                        make moving easier for people. What began as a local operation quickly grew into a full-service
                        moving company trusted by thousands.
                    </p>
                    <p class="text-lg font-rubik md:text-[18px] md:font-[300] md:leading-8">
                        Today, with decades of experience and a dedicated team, we’ve handled countless moves across the
                        country.
                    </p>
                </div>
                <!-- Image Section -->
                <div class=" card-img">
                    <img alt="Commercial Moving"
                        class="lazy-image opacity-0  rounded-[20px] transition-opacity duration-500 ease-in-out w-full h-[300px] object-cover "
                        v-lazy="'assets/movingServices.png'" />
                </div>
            </div>
        </div>


        <div class=" bg-primary-500 w-full p-3 md:p-10   rounded-none">
            <div class="container">
                <div class="bg-black flex flex-col gap-5 justify-center -mt-36 rounded-[10px]   p-5">

                    <!-- <div class="flex flex-col bg-primary-500 md:gap-10 gap-5 rounded-none p-3 md:p-10 ">
                        <h2 class="text-3xl md:text-4xl text-center  font-jakarta font-extrabold">How We Work</h2>
                        <p class="text-lg  font-rubik md:text-xl mx-auto max-w-2xl">
                            We know that moving can be stressful and time-consuming, that's why we strive to make it as
                            easy
                            and hassle-free as possible for you. We offer
                        </p>
                        <div class="flex flex-wrap gap-10 md:gap-20  font-rubik xl:gap-36  justify-center  ">
                            <div class="flex flex-col gap-2 w-20">
                                <div
                                    class="bg-black flex justify-center items-center p-2 w-20 h-20 font-rubik   rounded-none">
                                    <UIcon role="button" name="i-ic-sharp-money-off-csred"
                                        class="w-full h-full text-white" />
                                </div>
                                <p>Free Estimates</p>
                            </div>
                            <div class="flex flex-col gap-2 w-20">
                                <div class="bg-black flex justify-center items-center p-2 w-20 h-20  rounded-none">
                                    <UIcon role="button" name="i-lineicons-protection"
                                        class="w-full h-full text-white" />
                                </div>
                                <p>Insurance Coverage</p>
                            </div>
                            <div class="flex flex-col gap-2 w-20">
                                <div class="bg-black flex justify-center items-center p-2 w-20 h-20  rounded-none">
                                    <UIcon role="button" name="i-uil-calender" class="w-full h-full text-white" />
                                </div>
                                <p>Flexible Scheduling</p>
                            </div>

                            <div class="flex flex-col gap-2 w-20">
                                <div class="bg-black flex justify-center items-center p-2 w-20 h-20  rounded-none">
                                    <UIcon role="button" name="i-nimbus-box-packed" class="w-20 h-20 text-white" />
                                </div>
                                <p class="text-black">Packaging</p>
                            </div>


                        </div>
                    </div> -->

                    <div class="flex flex-col bg-zinc-900 gap-5  text-center rounded-[10px] p-3 md:p-10">
                        <h2 class="text-3xl md:text-4xl   font-extrabold font-jakarta text-stone-300">
                            What We
                            Do</h2>
                        <p class="text-lg md:text-xl font-rubik  text-stone-300 ">
                            We know every move is different, so we offer professional moving services designed to meet
                            your needs.
                        </p>
                        <p class="text-lg md:text-xl font-rubik  text-stone-300 ">Our services include:</p>
                        <ul
                            class="list-inside md:text-[18px] text-white md:font-[300] md:leading-8 font-rubik mt-0 space-y-2">
                            <li>✔ &nbsp;<span class="font-semibold">Local & Long-Distance Moving: </span>Whether you're
                                moving down the street or across the country, we handle it all.</li>
                            <li>✔ &nbsp;<span class="font-semibold">Packing and Unpacking: </span>Don't lift a
                                finger—we'll handle everything from fragile items to bulky furniture.</li>
                            <li>✔ &nbsp;<span class="font-semibold">Moving and Storage: </span>Need extra space? Our
                                secure storage solutions keep your belongings safe.</li>
                            <li>✔ &nbsp;<span class="font-semibold">Commercial Moving: </span>Relocating your business?
                                We minimize downtime and maximize efficiency.</li>

                        </ul>


                        <div class="flex flex-wrap gap-10 md:gap-20 xl:gap-36 mt-4 justify-center">
                            <div class="flex flex-col gap-2 w-20">
                                <div
                                    class="bg-primary-500 font-rubik flex justify-center items-center p-2 w-20 h-20  rounded-none">
                                    <UIcon role="button"
                                        name="i-streamline-shipping-transfer-truck-time-truck-shipping-delivery-time-waiting-delay"
                                        class="w-full h-full text-black" />
                                </div>
                                <p class="text-white">Commercial Moving</p>
                            </div>
                            <div class="flex flex-col gap-2 w-20">
                                <div
                                    class="bg-primary-500 flex justify-center items-center p-2 w-20 h-20  rounded-none">
                                    <UIcon role="button"
                                        name="i-streamline-shopping-catergories-chair-design-lounge-furniture-chair-interior-decorate-armchair-decoration"
                                        class="w-full h-full text-black" />
                                </div>
                                <p class="text-white">Furniture Disassembly</p>
                            </div>
                            <div class="flex flex-col gap-2 w-20">
                                <div
                                    class="bg-primary-500 flex justify-center items-center p-2 w-20 h-20  rounded-none">
                                    <UIcon role="button" name="i-carbon-delivery-truck"
                                        class="w-full h-full text-black" />
                                </div>
                                <p class="text-white">Home Movers</p>
                            </div>
                            <div class="flex flex-col gap-2 w-20">
                                <div
                                    class="bg-primary-500 flex justify-center items-center p-2 w-20 h-20  rounded-none">
                                    <UIcon role="button" name="i-ph-shipping-container" class="w-20 h-20 text-black" />
                                </div>
                                <p class="text-white">Long Term Storage</p>
                            </div>
                            <div class="flex flex-col gap-2 w-20">
                                <div
                                    class="bg-primary-500 flex justify-center items-center p-2 w-20 h-20  rounded-none">
                                    <UIcon role="button" name="i-carbon-delivery-truck" class="w-20 h-20 text-black" />
                                </div>
                                <p class="text-white">Long Distance Moves</p>
                            </div>



                        </div>

                    </div>

                </div>
            </div>

        </div>


        <div :ref="el => (scrollElements[0] = el)" :class="{
            'opacity-100 translate-y-0': isVisible[0],
            'opacity-0 translate-y-20': !isVisible[0],
        }" class="transition-all duration-1000 ease-in-out bg-primary-500 w-full p-3 md:p-10  mt-48 rounded-none">

            <div class="bg-black container flex flex-wrap flex-col  gap-5 -mt-36 rounded-[10px]   p-5">


                <div class="flex flex-col lg:flex-row bg-zinc-900 rounded-none p-3 md:p-10 gap-5 md:gap-10">
                    <!-- Text Section -->
                    <div class="flex-1 flex flex-col">
                        <h2 class="text-3xl md:text-4xl font-jakarta font-extrabold text-stone-300">Why Choose Us?</h2>
                        <p class="text-md md:text-lg mt-2 text-stone-300 font-rubik">
                            With so many movers out there, why do customers keep choosing Good View Moving? The answer
                            is simple: We make moving affordable, reliable, and stress-free.
                        </p>

                        <ul
                            class="list-disc list-inside md:text-[18px] text-white md:font-[300] md:leading-8 font-rubik mt-4 space-y-2">
                            <li><span class="font-semibold">100+ successful moves</span> completed with happy customers.
                            </li>
                            <li><span class="font-semibold">4.8/5-star rating in Good View Moving reviews—</span> people
                                love our service!</li>
                            <li><span class="font-semibold">Affordable moving</span> solutions with transparent moving
                                costs—no hidden fees!</li>
                            <li><span class="font-semibold">Trained professional movers</span> who handle your
                                belongings with care.</li>

                        </ul>

                        <p class="text-md md:text-lg text-stone-300 font-rubik">
                            We're not just movers—we're problem solvers. We treat your move like it's our own so you can
                            focus on what matters most: settling into your new space.
                        </p>
                    </div>

                    <!-- Image Section -->
                    <div class="flex-1 flex card-img justify-center items-center">
                        <img alt="Commercial Moving"
                            class="lazy-image opacity-0  rounded-[10px] transition-opacity duration-500 ease-in-out w-full h-[auto] lg:h-[400px] object-cover "
                            v-lazy="'assets/WhyChooseUS.jpg'" />
                    </div>
                </div>

                <div
                    class="flex flex-initial md:flex-1 flex-col bg-primary-500 md:gap-10 gap-5 rounded-none p-3 md:p-10  justify-between">
                    <h2 class="text-3xl md:text-4xl font-jakarta font-extrabold text-black">Our Mission & Values
                    </h2>
                    <p class="text-md md:text-lg text-black font-rubik">
                        At Good View Moving & Storage, our mission is simple: make moving easy, affordable, and
                        stress-free.
                    </p>

                    <ul
                        class="list-inside md:text-[18px] text-black md:font-[300] md:leading-8 font-rubik mt-0 space-y-2">
                        <li>✔ &nbsp;<span class="font-semibold"> Customer First: </span>Your peace of mind is our
                            priority.</li>
                        <li>✔ &nbsp;<span class="font-semibold">Honest Pricing:</span> No surprises—just fair, upfront
                            costs.</li>
                        <li>✔ &nbsp;<span class="font-semibold">Expertise You Can Trust: </span>Skilled professional
                            movers who carefully handle every move.</li>


                    </ul>

                </div>



            </div>



            <div :ref="el => (scrollElements[0] = el)" :class="{
                'opacity-100 translate-y-0': isVisible[0],
                'opacity-0 translate-y-20': !isVisible[0],
            }" class="transition-all duration-1000 ease-in-out bg-primary-500 w-full p-3 md:p-10  mt-48 rounded-none">

                <div class="bg-black container flex flex-wrap flex-col  gap-5 -mt-36 rounded-[10px]   p-5">


                    <div class="flex flex-initial md:flex-1 flex-col bg-zinc-900   rounded-none p-3 md:p-10">
                        <h2 class="text-2xl md:text-4xl font-jakarta font-extrabold text-stone-300">Moving with Us –
                            What to Expect</h2>
                        <p class="text-md md:text-lg text-stone-300 font-rubik">
                            Moving with Good View Moving is easy!
                        </p>
                        <p class="text-md md:text-lg text-stone-300 font-rubik">Here’s how it works:</p>
                        <ul
                            class="list-disc list-inside md:text-[18px] text-white md:font-[300] md:leading-8  font-rubik mt-4 space-y-2">
                            <li><span class="font-semibold">Get a moving quote:</span> Tell us what you need, and we’ll
                                give you a fair, transparent estimate.
                            </li>

                            <li><span class="font-semibold">Book a moving service: </span>
                                Pick your date, and we’ll handle the rest.</li>

                            <li><span class="font-semibold">We do the heavy lifting:</span>
                                Our expert movers pack, load, and transport everything safely.</li>
                            <li><span class="font-semibold">Settle in stress-free: </span> Unpacking? Request an online
                                moving estimate for our unpacking services!</li>

                        </ul>

                    </div>
                    <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 p-3 md:p-10 bg-primary-500 rounded-none">
    <!-- Text Content (Left) -->
    <div class="flex-1 flex flex-col gap-5">
        <h2 class="text-2xl md:text-4xl font-jakarta font-extrabold text-black">
            Ready to Move? Let's Get Started!
        </h2>
        <p class="text-md md:text-lg text-black font-rubik">
            Wherever life is taking you, Good View Moving & Storage is here to make your move smooth and hassle-free.
        </p>
        <p class="text-md md:text-lg text-black font-rubik">
            Get free moving estimates and see why we're the best moving company for your next move.
        </p>
    </div>

    <!-- Button (Right) -->
    <div class="w-fit mt-4 md:mt-0">
        <UButton
            size="xl"
            label="Get a Free Quote"
            type="free quote"
            to="/quote"
            class="bg-black text-white px-7 py-2 transition-all font-jakarta rounded-[10px] text-lg font-bold hover:text-black border border-black hover:bg-primary-500 w-full md:w-auto"
        />
    </div>
</div>
</div>


                <Trusted />
            </div>





        </div>
    </div>

</template>

<script setup>


const isVisible = ref([false, false, false])
const scrollElements = ref([])

const handleIntersection = (entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            isVisible.value[index] = true
        }
    })
}

onMounted(() => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            const index = scrollElements.value.indexOf(entry.target)
            if (entry.isIntersecting && index !== -1) {
                isVisible.value[index] = true
            }
        })
    }, { threshold: 0.1 })

    scrollElements.value.forEach(el => {
        if (el) observer.observe(el)
    })
})

onUnmounted(() => {
    scrollElements.value.forEach(el => {
        if (el) observer.unobserve(el)
    })
})

</script>