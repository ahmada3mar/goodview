<template>
  <div>
    <div class="bg-gray-100 flex items-center justify-center">
      <div class="relative bg-cover bg-center overflow-hidden lg:h-[550px] flex items-center justify-center w-full"
        style="background-image: url('/imgs/local-moving.webp')">
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-black/80"></div>
        <div
          class="flex flex-col gap-0 lg:gap-10 lg:flex-row text-white max-w-[1360px] w-full mx-auto justify-between px-[30px] md:items-center">
          <div class="relative w-full md:w-[65%] items-baseline justify-center gap-6  py-10 container h-full">
            <nav class="text-[12px] lg:text-[22px] font-rubik space-x-1 mt-2">
              <span>
                <a href="/" class="hover:underline">Home</a>
              </span>
              <span> / </span>
              <span>
                <a href="/blogs" class="hover:underline">Blogs</a>
              </span>
              <span> / </span>
              <span class="">Room-by-Room Packing Guide</span>
            </nav>
            <h1 class="text-[28px] md:text-[40px] lg:text-[56px] mb-4 font-[700] font-jakarta">
              <strong class=" text-[#ffd343]"> ($326)</strong> Moving from Jersey City to New
              York City
            </h1>
            <p class="text-[16px] font-light max-w-3xl font-jakarta leading-[1.6rem]">
              Estimated Cost: A move from Jersey City to New York City typically costs between <strong
                class='text-[#ffd343] font-bold'> $326 and $2,570.</strong> The total cost and time depend
              on several factors, including the size of your move, your moving date, and whether you hire professional
              movers or handle the move yourself.
            </p>
          </div>

          <div class="relative w-full md:w-[35%] flex justify-center py-5">
            <div
              class="opacity-100 translate-y-0 bg-[#f2f2f2] transition-all duration-1000 delay-150 ease-in-out px-[20px]  rounded-[10px] py-[20px]">

              <h2
                class="font-jakarta font-[600] transition-all duration-1000 delay-150 ease-in-out text-center  text-[28px] mb-[10px] text-black">
                Free Moving Estimate
              </h2>

              <div
                class="transition-all duration-1000 delay-150 ease-in-out flex  flex-col  gap-4 md:gap-2 w-full mb-5 md:items-start justify-center items-center">

                <div class="flex flex-col">
                  <UInput :inputClass="errors.from ? '!border-red-500 focus:ring-red-500' : ''"
                    @update:modelValue="errors.from = false" v-model="fromZIP" type="text" size="lg"
                    placeholder="From zip code" maxlength="5"
                    :ui="{ base: 'relative block md:w-80 focus:border-primary-500 h-12 disabled:cursor-not-allowed bg-[#f2f2f2] disabled:opacity-75 border-0 border-primary-500 !rounded-[10px]', placeholder: 'placeholder-gray-500' }">
                    <template #trailing>
                      <UIcon role="button" name="i-carbon-location" class="w-5 h-5 font-jakarta text-black-400" />
                    </template>
                  </UInput>
                  <span v-if="errors.from" class="text-red-500 font-jakarta font-bold">Please enter a valid ZIP
                    code</span>
                </div>

                <div class="flex flex-col">
                  <UInput :inputClass="errors.to ? '!border-red-500 focus:ring-red-500' : ''"
                    @update:modelValue="errors.to = false" v-model="toZIP" type="text" size="lg"
                    placeholder="To zip code" maxlength="5"
                    :ui="{ base: 'relative block md:w-80 focus:border-primary-500 h-12 bg-[#f2f2f2] disabled:cursor-not-allowed disabled:opacity-75 border-0 border-primary-500 !rounded-[10px]', placeholder: 'placeholder-gray-500' }">
                    <template #trailing>
                      <UIcon role="button" name="i-carbon-location" class="w-5 h-5 font-jakarta text-black-400" />
                    </template>
                  </UInput>
                  <span v-if="errors.to" class="text-red-500 font-jakarta font-bold">Please enter a valid ZIP
                    code</span>
                </div>

                <UButton @click="getQuote"
                  class="font-bold text-center justify-center rounded-[10px] font-jakarta px-10 text-black border-1 border-gray-900 mx-auto h-12 w-auto  lg:w-auto">
                  Get a free quote
                  <UIcon name="i-carbon-arrow-right" class="w-5 h-5" />
                </UButton>

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

    <div class='bg-black text-white pt-8 pb-8'>
      <div class='max-w-[1360px] w-full mx-auto flex flex-col md:flex-row gap-8 px-[20px] xl:px-0'>
        <div class='w-full md:w-[70%]'>
          <div class="bg-zinc-900 rounded-lg p-4 md:p-8">
            <h2 class="text-xl md:text-[38px] leading-[1.5em] font-[600] mb-6 font-jakarta">Cost of Moving from Jersey
              City to New York City with Good View Moving?</h2>
            <p class="leading-[26px] md:leading-[32px] font-[300] font-rubik mb-6">
              At Good View Moving and Storage, we believe in providing clear, upfront pricing so you can plan your move
              with confidence. Based on our experience helping customers relocate along this route, the average cost to
              move from Jersey City to New York City typically falls between <strong
                class='text-[#ffd343]  font-bold'>$326</strong> and<strong class='text-[#ffd343]  font-bold'>
                $2,570</strong>
            </p>

            <div class=" card-img">
              <img alt="Commercial Moving"
                class="lazy-image opacity-0rounded-[6px]  sm:rounded-[20px] transition-opacity duration-500 ease-in-out w-full h-[auto] object-cover "
                v-lazy="'/imgs/map.png'" />
            </div>
            <p class="tracking-[0.2px] leading-[26px] md:leading-[32px] font-rubik font-[300] my-5">The final price
              depends on
              several factors, including the size of your move, the services you select, and your specific moving date.
              Whether you need full-service packing, long distance moving services, or simply transportation for your
              belongings, we offer flexible options to fit your needs and budget.</p>
            <p class="leading-[26px] md:leading-[32px] font-[300] my-5 font-rubik">Here's a breakdown of the average
              moving costs for this route:</p>
            <div class="border rounded-md overflow-x-auto max-w-[350px] mx-auto mt-6"
              style="border-color: #ffd343; border-width: 2px;">
              <table class="w-full text-left">
                <thead style="background-color: #ffd343;">
                  <tr>
                    <th class="text-black font-jakarta px-4 py-3">Move Size</th>
                    <th class="text-black text-center font-jakarta px-4 py-3">Average Cost</th>
                  </tr>
                </thead>
                <tbody>

                  <tr class="hover:bg-zinc-700">
                    <td class="px-4 font-rubik py-3"> Few Items</td>
                    <td class="px-4 font-rubik py-3 text-center">$100 - $200</td>
                  </tr>
                  <tr class="bg-zinc-800 hover:bg-zinc-700">
                    <td class="px-4 font-rubik py-3">Studio / 1 Bedroom</td>
                    <td class="px-4 font-rubik py-3 text-center">$200 - $300</td>
                  </tr>
                  <tr class="hover:bg-zinc-700 ">
                    <td class="px-4 font-rubik py-3">2 Bedrooms</td>
                    <td class="px-4 font-rubik py-3 text-center">$300 - $400</td>
                  </tr>
                  <tr class="bg-zinc-800 hover:bg-zinc-700">
                    <td class="px-4 font-rubik py-3">3 Bedrooms</td>
                    <td class="px-4 font-rubik py-3 text-center">$400 - $500</td>
                  </tr>
                  <tr class="hover:bg-zinc-700 ">
                    <td class="px-4 font-rubik py-3">4 Bedrooms</td>
                    <td class="px-4 font-rubik py-3 text-center">$500 - $600</td>
                  </tr>
                  <tr class="bg-zinc-800 hover:bg-zinc-700">
                    <td class="px-4 font-rubik py-3">5 Bedrooms</td>
                    <td class="px-4 font-rubik py-3 text-center">$632 - $770</td>
                  </tr>
                  <tr class="hover:bg-zinc-700 ">
                    <td class="px-4 font-rubik py-3">6 Bedrooms</td>
                    <td class="px-4 font-rubik py-3 text-center">$851 - $936</td>
                  </tr>
                  <tr class="bg-zinc-800 hover:bg-zinc-700">
                    <td class="px-4 font-rubik py-3">Office</td>
                    <td class="px-4 font-rubik py-3 text-center">$951 - $1036</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p class="leading-[26px] md:leading-[32px] font-[300] my-5 font-rubik">Please note: These price ranges are
              rough estimates based on our customer relocation data. The actual cost may vary depending on the size of
              your move, additional services required, truck parking access and availability.</p>
            <h2 class="text-xl md:text-[38px] leading-[1.5em] font-[600] mb-6 font-jakarta">Factors Affecting the Cost
              of Moving From Jersey City to New York City</h2>
            <p class="leading-[26px] md:leading-[32px] font-[300] my-5 font-rubik">At Good View Moving and Storage, we
              believe every move is unique — and so is the final cost. Several key factors can influence the price of
              your move from Jersey City to New York City.</p>
            <p class="leading-[26px] md:leading-[32px] font-[300] my-5 font-rubik">Here's what can affect your moving
              cost with us:</p>
            <ul class='list-disc font-rubik pl-7'>
              <li class="leading-[26px] md:leading-[32px] font-[300] my-2"><strong class='font-[600] text-[18px]'>Size
                  of Your Move: </strong>Larger homes or apartments mean more items to pack, load, and transport, which
                can increase the overall cost. For example, moving a 2-3 bedroom home will cost more than a small
                apartment.</li>
              <li class="leading-[26px] md:leading-[32px] font-[300] my-2"><strong
                  class='font-[600] text-[18px]'>Distance
                  of the Move: </strong> Some customers book long distance
                moving services for routes beyond city limits, which affects pricing</li>
              <li class="leading-[26px] md:leading-[32px] font-[300] my-2"><strong class='font-[600] text-[18px]'>Type
                  of Services You Need: </strong>Full-service options, such as professional packing, unpacking,
                furniture disassembly, or storage, will influence your total moving cost. We offer flexible packages for
                every need.</li>
              <li class="leading-[26px] md:leading-[32px] font-[300] my-2"><strong
                  class='font-[600] text-[18px]'>Accessibility at Pickup and Drop-off Locations: </strong>If our trucks
                have limited access, elevators are unavailable, or parking is difficult, it may affect the price.</li>
              <li class="leading-[26px] md:leading-[32px] font-[300] my-2"><strong class='font-[600] text-[18px]'>Move
                  Date and Time: </strong>Moving during peak seasons, weekends, or holidays can increase demand, which
                may raise rates. Booking early with Good View Moving NJ often secures better pricing.</li>
              <li class="leading-[26px] md:leading-[32px] font-[300] my-2"><strong
                  class='font-[600] text-[18px]'>Specialty
                  Items: </strong>Large or delicate items such as pianos,
                antiques, or fragile furniture may require extra care and add to the final cost.</li>
            </ul>
            <p class="leading-[26px] md:leading-[32px] font-[300] my-5 font-rubik">Our goal is to provide affordable
              long distance moving and local relocation services with clear, upfront pricing. Good View Moving and
              Storage is proud to be among the best moving companies serving this route.</p>
            <h2 class="text-xl md:text-[38px] leading-[1.5em] font-[600] mb-6 font-jakarta">Benefits of Choosing Good
              View Moving for Your Jersey City to New York City Move</h2>
            <p class="leading-[26px] md:leading-[32px] font-[300] my-5 font-rubik">When you're planning a move from
              Jersey City to New York City, you need a team you can rely on. At Good View Moving and Storage, we're
              proud to offer dependable, affordable, and stress-free moving solutions for both local and affordable long
              distance moving.</p>
            <p class="leading-[26px] md:leading-[32px] font-[300] my-5 font-rubik">Here's why so many customers consider
              us among the best moving companies for this route:</p>
            <p class="leading-[26px] md:leading-[32px] font-[300] my-5 font-rubik"><strong
                class='font-[600] text-[18px]'>Experienced, Professional Team: </strong> Our movers are trained,
              licensed, and experienced in handling moves across the country and within your area. From packing to
              transport, your belongings are in safe hands.</p>
            <p class="leading-[26px] md:leading-[32px] font-[300] my-5 font-rubik"><strong
                class='font-[600] text-[18px]'>Affordable and Transparent Pricing: </strong> We believe in honest,
              upfront pricing. Whether you're looking for out of state movers, or full-service relocation, we offer
              solutions that fit your budget.</p>
            <p class="leading-[26px] md:leading-[32px] font-[300] my-5 font-rubik"><strong
                class='font-[600] text-[18px]'>Flexible Moving Options: </strong> Every move is different. We provide a
              range of services, from basic transportation to full-service packing, storage, and specialty item
              handling. Our long distance moving services can be customized to your needs.</p>
            <p class="leading-[26px] md:leading-[32px] font-[300] my-5 font-rubik"><strong
                class='font-[600] text-[18px]'>Highly Rated and Trusted: </strong> We take pride in positive Good View
              Moving reviews from satisfied customers. Our commitment to reliability, care, and customer service has
              made us a trusted name in the industry.</p>
            <p class="leading-[26px] md:leading-[32px] font-[300] my-5 font-rubik"><strong
                class='font-[600] text-[18px]'>Stress-Free Moving Process: </strong>Our goal is simple — to make your
              move smooth and worry-free. Whether you need local help or expert long distance movers, we're with you
              every step of the way.</p>
            <h2 class="text-xl md:text-[38px] leading-[1.5em] font-[600] mb-6 font-jakarta">Get an Instant Quote for
              Your Move Today</h2>
            <p class="leading-[26px] md:leading-[32px] font-[300] my-5 font-rubik">Planning a move doesn't have to be
              stressful — let Good View Moving and Storage make it simple. Whether you're relocating within New Jersey
              or heading across the country, we're here to help with transparent pricing and professional service.</p>
            <p class="leading-[26px] md:leading-[32px] font-[300] my-5 font-rubik">With just a few details, you can
              receive a fast and free quote tailored to your move. We provide honest estimates based on the size of your
              move, distance, and any additional services you may need, including packing or storage options.</p>
            <p class="leading-[26px] md:leading-[32px] font-[300] my-5 font-rubik">Wondering What is the cheapest way to
              move long-distance? Start by getting your personalized quote with Good View Moving company NJ.</p>
            <p class="leading-[26px] md:leading-[32px] font-[300] my-5 font-rubik">Get your instant quote today and see
              why we're considered one of the top-rated movers for both local and long-distance relocations.</p>
            <h2 class="text-4xl font-bold mb-4 mt-12 font-jakarta pb-4">Frequently Aks Questions</h2>
            <div class="space-y-6">
              <!-- FAQ 1 -->
              <div class="bg-[#1e1e1e] rounded-lg">
                <div
                  class="border border-[#ffd343] bg-zinc-900 rounded-lg p-5 flex justify-between items-center cursor-pointer"
                  @click="toggleFaq(0)">
                  <h3 class="font-semibold text-base md:text-lg font-jakarta">What is the best order to pack a house for
                    moving?</h3>
                  <svg
                    :class="`w-6 h-6 transition-transform duration-300 transform ${openFaq === 0 ? 'rotate-180' : ''}`"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                <div v-if="openFaq === 0" class="p-6">
                  <p class="leading-[26px] md:leading-[32px] font-rubik font-[300]">{{ faqs[0].answer }}</p>
                </div>
              </div>

              <!-- FAQ 2 -->
              <div class="bg-[#1e1e1e] rounded-lg">
                <div
                  class="border border-[#ffd343] bg-zinc-900 rounded-lg p-5 flex justify-between items-center cursor-pointer"
                  @click="toggleFaq(1)">
                  <h3 class="font-semibold text-base md:text-lg  font-jakarta">How far in advance should I start packing
                    before moving?</h3>
                  <svg
                    :class="`w-6 h-6 transition-transform duration-300 transform ${openFaq === 1 ? 'rotate-180' : ''}`"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                <div v-if="openFaq === 1" class="p-6">
                  <p class="leading-[26px] md:leading-[32px] font-rubik font-[300]">{{ faqs[1].answer }}</p>
                </div>
              </div>

              <!-- FAQ 3 -->
              <div class="bg-[#1e1e1e] rounded-lg">
                <div
                  class="border border-[#ffd343] bg-zinc-900 rounded-lg p-5 flex justify-between items-center cursor-pointer"
                  @click="toggleFaq(2)">
                  <h3 class="font-semibold text-base md:text-lg font-jakarta">What should I pack last when moving?</h3>
                  <svg
                    :class="`w-6 h-6 transition-transform duration-300 transform ${openFaq === 2 ? 'rotate-180' : ''}`"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                <div v-if="openFaq === 2" class="p-6">
                  <p class="leading-[26px] md:leading-[32px] font-rubik font-[300]">{{ faqs[2].answer }}</p>
                </div>
              </div>

              <!-- FAQ 4 -->
              <div class="bg-[#1e1e1e] rounded-lg">
                <div
                  class="border border-[#ffd343] bg-zinc-900 rounded-lg p-5 flex justify-between items-center cursor-pointer"
                  @click="toggleFaq(3)">
                  <h3 class="font-semibold text-base md:text-lg font-jakarta">How do I stay organized while packing each
                    room?</h3>
                  <svg
                    :class="`w-6 h-6 transition-transform duration-300 transform ${openFaq === 3 ? 'rotate-180' : ''}`"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                <div v-if="openFaq === 3" class="p-6">
                  <p class="leading-[26px] md:leading-[32px] font-rubik font-[300]">{{ faqs[3].answer }}</p>
                </div>
              </div>

              <!-- FAQ 5 -->
              <div class="bg-[#1e1e1e] rounded-lg">
                <div
                  class="border border-[#ffd343] bg-zinc-900 rounded-lg p-5 flex justify-between items-center cursor-pointer"
                  @click="toggleFaq(4)">
                  <h3 class="font-semibold text-base md:text-lg font-jakarta">What supplies do I need for room-by-room
                    packing?</h3>
                  <svg
                    :class="`w-6 h-6 transition-transform duration-300 transform ${openFaq === 4 ? 'rotate-180' : ''}`"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                <div v-if="openFaq === 4" class="p-6">
                  <p class="leading-[26px] md:leading-[32px] font-rubik font-[300]">{{ faqs[4].answer }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full py-4 md:px-[32px] px-0 ">

            <h2
              class="text-2xl md:text-[32px] leading-[1.5em] font-jakarta font-[600] mb-6 max-w-[1360px] mx-auto my-[40px]">
              But don't just take our word for it — see what our customers have to say about their experience with
              our New
              Jersey moving services.</h2>
            <div class="flex items-center justify-center">
              <div class="relative w-full max-w-6xl overflow-hidden rounded-2xl">
                <div class="flex justify-center">
                  <div v-for="(testimonial, index) in visibleTestimonials" :key="testimonial.id + '-' + index"
                    class="w-full md:w-1/3 min-w-auto md:min-w-[320px] max-w-[400px] m-3 bg-gradient-to-br from-white to-slate-50 border border-[#114e641a] rounded-3xl py-[30px] px-[40px] md:px-[40px] shadow-[0_10px_40px_rgba(17,78,100,0.1),0_4px_12px_rgba(17,78,100,0.05)] transition-all duration-300 min-h-[420px] relative overflow-hidden">
                    <div
                      class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#114E64] to-[#1E6B7A] scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100">
                    </div>
                    <div class="mb-6">
                      <div class="flex items-center mb-5">

                        <div class="flex-1">
                          <h3 class=" font-bold text-black text-[32px] font-jakarta tracking-tight">{{ testimonial.name
                          }}</h3>

                        </div>
                      </div>
                      <div class="flex items-center justify-between ">
                        <div class="flex">
                          <span v-for="i in 5" :key="i"
                            class="flex items-center w-[30px] h-[30px] sm:w-[45px] sm:h-[45px]">
                            <svg width="45" height="45" viewBox="0 0 24 24" fill="#FFD700">
                              <polygon
                                points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="relative">

                      <p class="text-black font-[300] text-[16px] font-rubik leading-relaxed">{{ testimonial.review }}
                      </p>
                    </div>
                  </div>
                </div>
                <button
                  class="absolute left-[9px] top-1/2 -translate-y-1/2 w-[39px] h-[39px] bg-[#ffd343] text-black rounded-full shadow-xl flex items-center justify-center  hover:scale-110 transition disabled:opacity-40 z-10"
                  @click="prevSlide" aria-label="prevSlide">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round" />
                  </svg>
                </button>
                <button
                  class="absolute right-[3px] top-1/2 -translate-y-1/2 w-[39px] h-[39px] bg-[#ffd343] text-black rounded-full shadow-xl flex items-center justify-center  hover:scale-110 transition z-10"
                  @click="nextSlide" aria-label="nextSlide">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round" />
                  </svg>
                </button>
              </div>
            </div>

          </div>
        </div>

        <div class='w-full md:w-[30%] space-y-6'>
          <div class="px-6 py-0 pb-1 md:border-l border-gray-800">
            <h3 class="text-xl font-jakarta font-bold mb-4 ">
              Moving Services
            </h3>
            <div class='border-b-2 border-[#ffd343] mb-4 pb-[30px]'>
              <ul class="space-y-2 font-rubik">
                <li
                  class="hover: cursor-pointer hover:underline transition-colors duration-200  relative before:content-[''] before:absolute before:left-0 before:top-[50%] before:transform before:translate-y-[-50%] before:bg-[#ffd343] before:w-2 before:h-2 before:mr-4 before:rounded-full   pl-4">
                  <ULink to="/services/commercial-moving-service">
                    <span class="w-1 h-[10px]  bg-[#FFD343] rounded-full"></span>
                    Commercial Moving
                  </ULink>
                </li>
                <li
                  class="hover: cursor-pointer hover:underline transition-colors duration-200  relative before:content-[''] before:absolute before:left-0 before:top-[50%] before:transform before:translate-y-[-50%] before:bg-[#ffd343] before:w-2 before:h-2 before:mr-4 before:rounded-full pl-4 ">
                  <ULink to="/services/long-distance-moving-service">
                    <span class="w-1 h-1 bg-[#FFD343] rounded-full"></span>
                    Long Distance Moving
                  </ULink>
                </li>
                <li
                  class="hover: cursor-pointer hover:underline transition-colors duration-200  relative before:content-[''] before:absolute before:left-0 before:top-[50%] before:transform before:translate-y-[-50%] before:bg-[#ffd343] before:w-2 before:h-2 before:mr-4 before:rounded-full pl-4 ">
                  <ULink to="/services/residential-moving-service"> <span
                      class="w-1 h-1 bg-[#FFD343] rounded-full"></span>
                    Residential Moving
                  </Ulink>
                </li>
                <li
                  class="hover: cursor-pointer hover:underline transition-colors duration-200  relative before:content-[''] before:absolute before:left-0 before:top-[50%] before:transform before:translate-y-[-50%] before:bg-[#ffd343] before:w-2 before:h-2 before:mr-4 before:rounded-full pl-4 ">
                  <ULink to="/services/packing-and-unpacking-service">
                    <span class="w-1 h-1 bg-[#FFD343] rounded-full"></span>
                    Packing and Unpacking Services
                  </ULink>
                </li>
                <li
                  class="hover: cursor-pointer hover:underline transition-colors duration-200  relative before:content-[''] before:absolute before:left-0 before:top-[50%] before:transform before:translate-y-[-50%] before:bg-[#ffd343] before:w-2 before:h-2 before:mr-4 before:rounded-full pl-4 ">
                  <ULink to="/services/furniture-assembly-and-disassembly-service">
                    <span class="w-1 h-1 bg-[#FFD343] rounded-full"></span>
                    Furniture Assembly Services
                  </ULink>
                </li>
                <li
                  class="hover: cursor-pointer hover:underline transition-colors duration-200  relative before:content-[''] before:absolute before:left-0 before:top-[50%] before:transform before:translate-y-[-50%] before:bg-[#ffd343] before:w-2 before:h-2 before:mr-4 before:rounded-full pl-4 ">
                  <ULink to="/services/specialty-moving-service">
                    <span class="w-1 h-1 bg-[#FFD343] rounded-full"></span>
                    Specialty Movers
                  </ULink>
                </li>
                <li
                  class="hover: cursor-pointer hover:underline transition-colors duration-200  relative before:content-[''] before:absolute before:left-0 before:top-[50%] before:transform before:translate-y-[-50%] before:bg-[#ffd343] before:w-2 before:h-2 before:mr-4 before:rounded-full pl-4 ">
                  <ULink to="services/storage-service">
                    <span class="w-1 h-1 bg-[#FFD343] rounded-full"></span>
                    Storage Units
                  </ULink>
                </li>
              </ul>
            </div>
            <div class='border-b-2 border-[#ffd343] mb-4 pb-[40px] pt-[20px]'>
              <h3 class="text-xl font-bold font-jakarta mb-4 flex items-center gap-2">
                Get a Quote
              </h3>
              <div>
                <p class="mb-3 font-rubik">Get a Free Online Quote</p>
                <ULink to="/quote/"
                  class="bg-primary-500 py-2 font-rubik px-3 lg:px-3  rounded-[10px] border border-primary-500 hover:bg-black hover:text-white text-black font-bold">
                  Get a free quote</ULink>
              </div>
            </div>
            <div class='border-b-2 border-[#ffd343] pb-[30px]'>
              <!-- Moving Blogs Section -->
              <h3 class="text-xl font-bold mb-4 font-jakarta flex items-center gap-2">
                Moving Blogs
              </h3>

              <div class="space-y-4 mb-4">
                <div v-for="blog in blogs.slice(0, 5)" :key="blog.id">
                  <NuxtLink :to="`/blogs/${blog.slug}`">
                    <div class="flex gap-3 group cursor-pointer">
                      <div class="flex-shrink-0">
                        <img :src="blog.image" :alt="blog.title"
                          class="w-16 h-12 object-cover rounded-lg border border-gray-700 group-hover:border-[#FFD343] transition-colors duration-200" />
                      </div>
                      <div class="flex-1">
                        <h2
                          class="text-sm group-hover:text-[#FFD343] font-rubik transition-colors duration-200 leading-tight">
                          {{ blog.title }}
                        </h2>

                      </div>
                    </div>

                  </NuxtLink>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';

export default {
  name: 'CityToCity',
  components: {},
  data() {
    return {
      openFaq: null,
      fromZIP: '',
      toZIP: '',
      errors: {
        from: null,
        to: null
      },
      blogs: [],
      currentSlide: 0,
      windowWidth: typeof window !== "undefined" ? window.innerWidth : 1024,
      faqs: [
        {
          question: "What is the best order to pack a house for moving?",
          answer: "Start with items you use least, such as those in guest rooms, attics, or storage. Pack essential items last to keep them accessible until moving day."
        },
        {
          question: "How far in advance should I start packing before moving?",
          answer: "For a large move, you should start packing at least 6-8 weeks in advance. For smaller moves, 2-4 weeks should be sufficient. Starting early reduces stress and allows for better organization."
        },
        {
          question: "What should I pack last when moving?",
          answer: "Pack an essentials box last. This should include items you'll need immediately upon arrival at your new home, such as toiletries, medications, a change of clothes, important documents, chargers, and basic kitchen supplies."
        },
        {
          question: "How do I stay organized while packing each room?",
          answer: "Use a labeling system with markers and color-coded labels to indicate the contents of each box and the room it belongs to. Keep a detailed inventory list to track your belongings."
        },
        {
          question: "What supplies do I need for room-by-room packing?",
          answer: "You will need sturdy boxes in various sizes, packing tape, bubble wrap or packing paper, markers for labeling, and a box cutter. Consider specialty boxes for fragile items like dishes or wardrobe boxes for clothes."
        }
      ],

      testimonials: [
        { id: 1, name: "Thomas _.", rating: 5, review: "In my opinion, Goodview Moving and Storage is the best. Everyone on staff was punctual and worked well. Despite being cautious, they wasted no time. My belongings arrived in pristine condition, and I could not be happier with their service." },
        { id: 2, name: "Robert M.", rating: 5, review: "I had to move my furniture into storage for a few months before my new home was ready. I reached out to this company and they came through for me. Their movers labeled and packed everything so well that unpacking later was a breeze. So grateful for their attention to detail!" },
        { id: 3, name: "Melvin C.", rating: 5, review: "Thanks to Goodview Moving and Storage for making our moving experience a breeze. The team worked efficiently. The staff is friendly and easy working with. Clean, fast, with reasonable price. I highly recommend their service!" },
        { id: 4, name: "Thomas R.", rating: 5, review: "Goodview Moving and Storage was so easy to work with. Quotations were received promptly via phone call and text messages and there were no surprise charges like you may have with other movers during final billing. They also helped with assembling furniture. Thanks for a smooth move!" }
      ]
    };
  },
  computed: {
    visibleTestimonials() {
      const count = this.windowWidth < 576 || (this.windowWidth > 767 && this.windowWidth < 1100) ? 1 : 2;
      const arr = [];
      for (let i = 0; i < count; i++) {
        arr.push(this.testimonials[(this.currentSlide + i) % this.testimonials.length]);
      }
      return arr;
    },
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
    this.fetchBlogs();
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    toggleFaq(index) {
      this.openFaq = this.openFaq === index ? null : index;
    },
    handleResize() {
      this.windowWidth = window.innerWidth;
    },
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.testimonials.length;
    },
    prevSlide() {
      this.currentSlide = (this.currentSlide - 1 + this.testimonials.length) % this.testimonials.length;
    },
    getQuote() {
      this.errors.from = !this.fromZIP;
      this.errors.to = !this.toZIP;
      if (this.errors.from || this.errors.to) return;
      this.$router.push({ path: '/quote', query: { from: this.fromZIP, to: this.toZIP } });
    },
    fetchBlogs() {
      $fetch(`https://api.goodview-moving.com/api/blogs`).then(res => {
        this.blogs = res;
      });
    }
  }
};
</script>