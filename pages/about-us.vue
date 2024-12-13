<template>
    <div class="flex flex-col h-full">
        <Banner
        background="/assets/aboutus.jpg" 
        class="h-[20rem] md:h-[25rem]"
        title="About Us"
            text="We are a moving company based in New Jersey, services all North/South East Coast excluding Florida." />

        <div 

         class=" bg-white mx-5 md:mx-10 lg:mx-16  px-0 sm:px-10 py-10 mb-32">

            <h2 class="text-3xl md:text-4xl mb-3 font-extrabold">WHO WE ARE</h2>

            <p class="text-lg md:text-xl my-2">
                After planning and completing a huge number of moves, Good View Moving and Storage
                understands that we aren't just transporting items, but transferring people's lives from the old, into
                the new. Whatever your move requires, our experienced team knows that no two projects are alike and that
                every customer has particular needs. In fact, we even have pick up and delivery service nationwide!
            </p>
        </div>

        <div 

        class=" bg-primary-500 w-full p-3 md:p-10   rounded-sm">

            <div class="bg-black flex flex-col gap-5 -mt-36 rounded-md   p-5">

                <div class="flex flex-col bg-primary-500 md:gap-10 gap-5 rounded-sm p-3 md:p-10 ">
                    <h2 class="text-3xl md:text-4xl  font-extrabold">HOW WE WORK</h2>
                    <p class="text-lg md:text-xl max-w-2xl">
                        We know that moving can be stressful and time-consuming, that's why we strive to make it as easy
                        and hassle-free as possible for you. We offer
                    </p>
                    <div class="flex flex-wrap gap-10 md:gap-20 xl:gap-36 justify-around  sm:justify-start">
                        <div class="flex flex-col gap-2 w-20">
                            <div class="bg-black flex justify-center items-center p-2 w-20 h-20  rounded-md">
                                <UIcon role="button" name="i-ic-sharp-money-off-csred"
                                    class="w-full h-full text-white" />
                            </div>
                            <p>Free Estimates</p>
                        </div>
                        <div class="flex flex-col gap-2 w-20">
                            <div class="bg-black flex justify-center items-center p-2 w-20 h-20  rounded-md">
                                <UIcon role="button" name="i-lineicons-protection" class="w-full h-full text-white" />
                            </div>
                            <p>Insurance Coverage</p>
                        </div>
                        <div class="flex flex-col gap-2 w-20">
                            <div class="bg-black flex justify-center items-center p-2 w-20 h-20  rounded-md">
                                <UIcon role="button" name="i-uil-calender" class="w-full h-full text-white" />
                            </div>
                            <p>Flexible Scheduling</p>
                        </div>

                        <div class="flex flex-col gap-2 w-20">
                            <div class="bg-black flex justify-center items-center p-2 w-20 h-20  rounded-md">
                                <UIcon role="button" name="i-nimbus-box-packed" class="w-20 h-20 text-white" />
                            </div>
                            <p class="text-black">Packaging</p>
                        </div>


                    </div>
                </div>

                <div class="flex flex-col bg-zinc-900 md:gap-10 gap-5 rounded-sm p-3 md:p-10">
                    <h2 class="text-3xl md:text-4xl font-extrabold text-stone-300">WHAT WE DO</h2>
                    <p class="text-lg md:text-xl text-stone-300 max-w-4xl">
                        Whether you need to move across the street, across the country or across the world, we have the
                        experience, equipment and expertise to handle your move with care and efficiency. We offer a
                        range of services to suit your needs, including:
                    </p>

                    <div class="flex flex-wrap gap-10 md:gap-20 xl:gap-36 justify-around sm:justify-start">
                        <div class="flex flex-col gap-2 w-20">
                            <div class="bg-primary-500 flex justify-center items-center p-2 w-20 h-20  rounded-md">
                                <UIcon role="button"
                                    name="i-streamline-shipping-transfer-truck-time-truck-shipping-delivery-time-waiting-delay"
                                    class="w-full h-full text-black" />
                            </div>
                            <p class="text-white">Commercial Moving</p>
                        </div>
                        <div class="flex flex-col gap-2 w-20">
                            <div class="bg-primary-500 flex justify-center items-center p-2 w-20 h-20  rounded-md">
                                <UIcon role="button"
                                    name="i-streamline-shopping-catergories-chair-design-lounge-furniture-chair-interior-decorate-armchair-decoration"
                                    class="w-full h-full text-black" />
                            </div>
                            <p class="text-white">Furniture Disassembly</p>
                        </div>
                        <div class="flex flex-col gap-2 w-20">
                            <div class="bg-primary-500 flex justify-center items-center p-2 w-20 h-20  rounded-md">
                                <UIcon role="button" name="i-carbon-delivery-truck" class="w-full h-full text-black" />
                            </div>
                            <p class="text-white">Home Movers</p>
                        </div>
                        <div class="flex flex-col gap-2 w-20">
                            <div class="bg-primary-500 flex justify-center items-center p-2 w-20 h-20  rounded-md">
                                <UIcon role="button" name="i-ph-shipping-container" class="w-20 h-20 text-black" />
                            </div>
                            <p class="text-white">Long Term Storage</p>
                        </div>
                        <div class="flex flex-col gap-2 w-20">
                            <div class="bg-primary-500 flex justify-center items-center p-2 w-20 h-20  rounded-md">
                                <UIcon role="button" name="i-carbon-delivery-truck" class="w-20 h-20 text-black" />
                            </div>
                            <p class="text-white">Long Distance Moves</p>
                        </div>



                    </div>

                </div>


            </div>

        </div>


        <div 
        :ref="el => (scrollElements[0] =el)"
        :class="{
        'opacity-100 translate-y-0': isVisible[0],
        'opacity-0 translate-y-20': !isVisible[0],
      }"
        class="transition-all duration-1000 ease-in-out bg-primary-500 w-full p-3 md:p-10  mt-48 rounded-sm">

            <div class="bg-black flex flex-wrap  gap-5 -mt-36 rounded-md   p-5">


                <div class="flex flex-initial md:flex-1 flex-col bg-zinc-900 md:gap-10 gap-5 rounded-sm p-3 md:p-10">
                    <h2 class="text-3xl md:text-4xl font-extrabold text-stone-300">Why choose us</h2>
                    <p class="text-md md:text-lg text-stone-300">
                        Choose us for your moving needs and experience unmatched reliability, professionalism, and care. Our expert team ensures a stress-free process with personalized solutions tailored to your requirements. We prioritize the safety of your belongings with top-notch packing and handling. Trust us to make your move seamless and hassle-free!
                    </p>



                </div>

                <div class="flex flex-initial md:flex-1 flex-col bg-primary-500 md:gap-10 gap-5 rounded-sm p-3 md:p-10  justify-between">
                    <p class="text-md md:text-lg ">
                        We are the leading choice in the moving industry, offering unparalleled service quality at the most competitive prices. Our expert team delivers exceptional care and efficiency, ensuring your move is seamless and stress-free. With us, you get the perfect balance of excellence and affordability, making your satisfaction our top priority.
                    </p>

                    <a class="md:mr-auto lg:mr-0  ml-auto " href="mailto:info@goodview-moving.com">
                        <UButton
                        class="border py-3 px-7  hover:border-black border-primary-500 bg-black hover:bg-primary-500 hover:text-black transition-all font-extrabold"
                        label="Contact us" />
                    </a>

                </div>



            </div>

            <Trusted/>
        </div>




    </div>

</template>

<script setup>


const isVisible = ref([false,false,false])
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