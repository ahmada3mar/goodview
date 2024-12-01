<template>
    <div class="flex flex-col h-full">
        <Banner :background="background" class="h-[20rem] md:h-[25rem]" title="Services"
            text="We have many services to help you with your move. We can move your things from one place to another, in Totowa, NJ or anywhere else. We can also store your things, and assemble furniture for you." />

        <Intro 
        :img="truck"
        title="MOVING SERVICES"
            text="We can help you with moving your things for you, whether they are for your home or your business. We can pack and unpack your things, and transport them safely to your new place. We have boxes and materials to pack your things, and insurance to protect them. We can move any kind of things, like furniture, computers, documents, pianos, safes, machines, art objects, and antiques." />

        <div 
        :ref="el => (scrollElements[0] =el)"
        :class="{
        'opacity-100 translate-y-0': isVisible[0],
        'opacity-0 translate-y-20': !isVisible[0],
      }"
        
        class="transition-all duration-1000 ease-in-out bg-primary-500 w-full p-3 md:p-10  rounded-sm z-10">
            <div class="grid grid-cols-1  lg:grid-cols-4  gap-5 -mt-48 ">
                <div class="bg-black col-span-1 lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 rounded-md   p-5">


                    <div class="flex  flex-col  bg-zinc-900 md:gap-5 gap-2 rounded-sm p-2 md:p-5">
                        <h2 class="text-xl md:text-2xl font-extrabold text-stone-300">Residential Moving</h2>
                        <p class="text-sm md:text-md text-stone-300">
                            Stress-free home relocation services tailored to your needs, ensuring your belongings are safely transported to your new home.
                        </p>



                    </div>

                    <div
                        class="flex  flex-col bg-primary-500 md:gap-5 gap-2 rounded-sm p-2 md:p-5 ">
                        <h2 class="text-xl md:text-2xl font-extrabold ">Commercial Moving</h2>

                        <p class="text-sm md:text-md ">
                            Expert business relocation solutions designed to minimize downtime and keep your operations running smoothly.
                        </p>


                    </div>

                    <div class="flex  flex-col  bg-zinc-900 md:gap-5 gap-2 rounded-sm p-2 md:p-5">
                        <h2 class="text-xl md:text-2xl font-extrabold text-stone-300">Packing and Unpacking</h2>
                        <p class="text-sm md:text-md text-stone-300">
                            Professional packing and unpacking services with premium materials to protect your valuables every step of the way.
                        </p>



                    </div>


                    <div class="flex  flex-col bg-primary-500 lg:bg-zinc-900 md:gap-5 gap-2 rounded-sm p-2 md:p-5">
                        <h2 class="text-xl md:text-2xl font-extrabold text-black lg:text-stone-300">Furniture Assembly and Disassembly</h2>
                        <p class="text-sm md:text-md text-black lg:text-stone-300">
                            Skilled technicians handle the disassembly and reassembly of your furniture to ensure a hassle-free move.
                        </p>



                    </div>

                    <div
                        class="flex  flex-col bg-zinc-900 lg:bg-primary-500 md:gap-5 gap-2 rounded-sm p-2 md:p-5 ">
                        <h2 class="text-xl md:text-2xl font-extrabold lg:text-black text-stone-300">Long Distance Moving</h2>

                        <p class="text-sm md:text-md lg:text-black text-stone-300">
                            Reliable and efficient long-distance moving services to help you transition seamlessly to your new location.
                        </p>


                    </div>

                    <div class="flex  flex-col  bg-primary-500 lg:bg-zinc-900 md:gap-5 gap-2 rounded-sm p-2 md:p-5">
                        <h2 class="text-xl md:text-2xl font-extrabold text-black lg:text-stone-300">Specialty Moving</h2>
                        <p class="text-sm md:text-md text-black lg:text-stone-300">
                            Customized solutions for moving delicate, oversized, or specialty items like pianos, antiques, and artwork with precision and care.
                        </p>



                    </div>


                </div>

                <div class="bg-black flex flex-col justify-center items-center py-10  h-full ">
                    <h2 class="text-2xl md:text-3xl font-extrabold text-primary-500">Get free quote</h2>

                    <UForm class="p-8 flex flex-col bg-black max-w-full md:max-w-[650px]  rounded-lg w-full ">

                    <!-- Name Input -->
                    <UFormGroup :ui='{
                        label: {
                            base: "block font-bold text-gray-100 text-xl dark:text-gray-200",
                        }
                    }' class="my-2" label="Chose a service">
                        <UInput icon="i-carbon-chevron-down"
                        inputClass="rounded-none bg-[#171820] text-slate-300 ring-0 h-14"  size="xl" placeholder="Select service ...." />
                    </UFormGroup>

                    <!-- Phone Number Input -->
                    <UFormGroup :ui='{
                        label: {
                            base: "block font-bold text-gray-100 text-xl dark:text-gray-200",
                        }
                    }' class="my-2" label="Your zip code">
                        <UInput
                        icon="i-carbon-location"
                         inputClass="rounded-none bg-[#171820] text-slate-300 ring-0 h-14" size="xl" placeholder="Enter your zip code" />
                    </UFormGroup>


                    <!-- Submit Button -->
                    <UButton
          size="xl"
          label="Continue"
          class=" px-3 md:px-7 rounded-sm border border-primary-500 hover:bg-black hover:text-slate-300 mt-10 mx-auto text-black font-bold"
        />
                </UForm>
                <div class="flex justify-center items-center gap-2" >
                    <UIcon name="i-carbon-question-answering" class="w-10 h-10 text-slate-300" />
                    <div>
                        <h3 class="text-slate-300 font-bold" >
                            Questions about the quote?
                        </h3>
                        <ULink to="/faq" class="text-slate-300 underline underline-offset-2" >
                        Check out our FAQ section
                    </ULink>
                    </div>
                </div>

                </div>

            </div>


        </div>
        <!--end-->
        <Intro 
        :img="container"
        title="STORAGE SERVICES"
            text="If you need a place to store your things for a while, we have a safe and warm warehouse where you can keep them. Our warehouse has cameras and alarms, and fire protection systems. We have insurance for your stored things, and you can access them whenever you want. You can rent a storage space that fits your needs and budget." />
      
        <div 
        :ref="el => (scrollElements[1] =el)"
        :class="{
        'opacity-100 translate-y-0': isVisible[1],
        'opacity-0 translate-y-20': !isVisible[1],
      }"
        class="transition-all duration-1000 ease-in-out bg-primary-500 w-full p-3 md:p-10  rounded-sm z-10">
            <div class="grid grid-cols-1  md:grid-cols-2  gap-5 -mt-48 ">
                <div class="bg-black grid grid-cols-1 lg:grid-cols-2  gap-5 rounded-md   p-5">


                    <div class="flex  flex-col  bg-zinc-900 md:gap-5 gap-2 rounded-sm p-2 md:p-5">
                        <h2 class="text-xl md:text-2xl font-extrabold text-stone-300">Short-Term Storage</h2>
                        <p class="text-sm md:text-md text-stone-300">
                            Convenient and secure storage solutions for temporary needs, ideal for moves, renovations, or travel.
                        </p>



                    </div>

                    <div
                        class="flex  flex-col bg-primary-500 md:gap-5 gap-2 rounded-sm p-2 md:p-5 ">
                        <h2 class="text-xl md:text-2xl font-extrabold ">Long-Term Storage</h2>

                        <p class="text-sm md:text-md ">
                            Safe and climate-controlled facilities designed to protect your belongings for extended periods with peace of mind.
                        </p>


                    </div>




                </div>

                <div class="bg-black flex flex-col xl:flex-row justify-center items-center p-5  h-full ">
                    <h2 class="text-2xl md:text-3xl font-extrabold text-primary-500">Storage price calculater</h2>

                    <UForm class="p-8 flex flex-col bg-black max-w-full md:max-w-[650px]  rounded-lg w-full ">

                    <!-- Name Input -->
                    <UFormGroup :ui='{
                        label: {
                            base: "block font-bold text-gray-100 text-xl dark:text-gray-200",
                        }
                    }' class="my-2" label="Space (km&#178;)">
                        <UInput icon="i-carbon-ruler-alt"
                        inputClass="rounded-none bg-[#171820] text-slate-300 ring-0 h-14"  size="xl" 
                        placeholder="Enter space" />
                    </UFormGroup>

                    <!-- Phone Number Input -->
                    <UFormGroup :ui='{
                        label: {
                            base: "block font-bold text-gray-100 text-xl dark:text-gray-200",
                        }
                    }' class="my-2" label="Storage time (months)">
                        <UInput
                        icon="i-carbon-time"
                         inputClass="rounded-none bg-[#171820] text-slate-300 ring-0 h-14" size="xl" 
                         placeholder="Enter the time" />
                    </UFormGroup>


                    <!-- Submit Button -->
                </UForm>
                <div class="p-8 flex flex-col bg-black w-full 
                
                xl:w-auto  
                rounded-lg   justify-center items-center" >

                    <p class="text-md font-bold text-slate-300">
                       Estimated price
                    </p>
                    <h2 class="text-2xl my-2 md:text-3xl font-extrabold text-primary-500">1823 $</h2>

                    <UButton
                    size="xl"
                    label="Continue"
                    class=" px-3 md:px-7 rounded-sm border border-primary-500 hover:bg-black hover:text-slate-300 
                    w-full flex justify-center items-center
                    max-w-[650px]
                    text-black font-bold"
                    />
                </div>

                </div>

            </div>


        </div>
      <!--end-->  

      <Intro 
        :img="boxes"
        title="ADDITIONAL SERVICES"
            text="We can help you with moving your things for you, whether they are for your home or your business. We. can pack and unpack your things, and transport them safely to your new place. We have boxes and materials to pack your things, and insurance to protect them. We can move any kind of things, like furniture, computers, documents, pianos, safes, machines, art objects, and antiques." />

        <div 
        :ref="el => (scrollElements[2] =el)"
        :class="{
        'opacity-100 translate-y-0': isVisible[2],
        'opacity-0 translate-y-20': !isVisible[2],
      }"
        class="transition-all duration-1000 ease-in-out bg-primary-500 w-full p-3 md:p-10  rounded-sm z-10">
            <div class="grid grid-cols-1  -mt-48 ">
                <div class="bg-black grid grid-cols-1 md:grid-cols-2  gap-5 rounded-md   p-5">


                    <div class="flex  flex-col  bg-zinc-900 md:gap-5 gap-2 rounded-sm p-2 md:p-5">
                        <h2 class="text-xl md:text-2xl font-extrabold text-stone-300">Residential and Commercial Moving</h2>
                        <p class="text-sm md:text-md text-stone-300">
                            Seamless moving solutions for both homes and businesses, ensuring your belongings are safely transported to your new location.
                        </p>



                    </div>

                    <div
                        class="flex  flex-col bg-primary-500 md:gap-5 gap-2 rounded-sm p-2 md:p-5 ">
                        <h2 class="text-xl md:text-2xl font-extrabold ">Packing and Unpacking Services</h2>

                        <p class="text-sm md:text-md ">
                            Expert packing and unpacking with high-quality materials to secure your items, saving you time and effort.
                        </p>


                    </div>
                    <div class="flex  flex-col  bg-zinc-900 md:gap-5 gap-2 rounded-sm p-2 md:p-5">
                        <h2 class="text-xl md:text-2xl font-extrabold text-stone-300">Specialized Item Moving</h2>
                        <p class="text-sm md:text-md text-stone-300">
                            Professional handling and transport for delicate and unique items like pianos, antiques, art, safes, and machinery.
                        </p>



                    </div>

                    <div
                        class="flex  flex-col bg-primary-500 md:gap-5 gap-2 rounded-sm p-2 md:p-5 ">
                        <h2 class="text-xl md:text-2xl font-extrabold ">Insured Moving Services</h2>

                        <p class="text-sm md:text-md ">
                            Peace of mind with fully insured moving solutions to protect your valuables every step of the way.
                        </p>


                    </div>




                </div>


            </div>


        </div>
        
        <Trusted />

    </div>
</template>

<script setup>

import background from "../public/assets/services.jpg"
import container from "../public/assets/container.webp"
import truck from "/assets/truck-min.webp"
import boxes from "../public/assets/boxes.webp"


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