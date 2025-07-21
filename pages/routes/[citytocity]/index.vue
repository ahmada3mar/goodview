<template>
  <div>
    <div v-if="statePending || cityPending">
      <LoadingSpinner />
    </div>
    <div v-else>
      <div class="bg-gray-100 flex items-center justify-center">
        <div
          class="relative bg-cover bg-center overflow-hidden lg:h-[500px] flex items-center justify-center w-full"
          style="
            background-image: url('/imgs/Long-Distance-Moving Banner.webp');
          "
        >
          <div
            class="absolute inset-0 bg-gradient-to-t from-black/80 to-black/80"
          ></div>
          <div
            class="flex flex-col gap-0 lg:gap-10 lg:flex-row text-white max-w-[1360px] w-full mx-auto justify-between px-[30px] md:items-center"
          >
            <div
              class="relative w-full md:w-[65%] items-baseline justify-center gap-6 py-10 container h-full"
            >
              <nav
                class="text-[14px] lg:text-[22px] font-rubik mt-2 leading-[25px] lg:items-center lg:space-x-1 space-y-1 lg:space-y-0"
              >
                <template v-if="fromStateObj">
                  <NuxtLink
                    :to="`/${fromStateObj.slug}/`"
                    class="hover:underline"
                    >{{ fromStateObj.name }}
                  </NuxtLink>
                  <span>/</span>
                </template>
                <template v-if="fromCityObj">
                  <NuxtLink
                    :to="`/${fromStateObj.slug}/${fromCityObj.slug}/`"
                    class="hover:underline"
                    >{{ fromCityObj.name }}</NuxtLink
                  >
                  <span>/</span>
                </template>
                <span>{{ moving_route.title }}</span>
              </nav>

              <h1
                class="text-[28px] md:text-[40px] leading-[1.4em] text-[#EDEDED] lg:text-[48px] mb-4 font-[700] font-jakarta"
              >
                <!-- <strong class=" text-[#ffd343]"> (${{ moving_route.min_cost }})</strong> -->
                {{ moving_route.title }}
              </h1>
              <p
                class="font-[300] max-w-3xl text-[18px] tracking-[.3px] font-rubik leading-[1.6em]"
              >
                Estimated Cost: A move from {{ fromCity }} to
                {{ toCity }} typically costs between<strong
                  class="text-[#ffd343] font-bold"
                >
                  ${{ moving_route.min_cost }} and ${{
                    moving_route.max_cost
                  }}.</strong
                >The total cost and time depend on several factors, including
                the size of your move, your moving date, and whether you hire
                professional movers or handle the move yourself.
              </p>
              <p
                class="font-[300] max-w-3xl text-[18px] tracking-[.3px] font-rubik leading-[1.6em]"
              >
                For an immediate price estimate, you can request a moving cost
                estimate.
              </p>
            </div>

            <div class="relative w-full md:w-[35%] flex justify-center py-5">
              <div
                class="opacity-100 translate-y-0 bg-[#f2f2f2] transition-all duration-1000 delay-150 ease-in-out px-[20px] rounded-[10px] py-[20px]"
              >
                <h2
                  class="font-jakarta font-[600] transition-all duration-1000 delay-150 ease-in-out text-center text-[28px] mb-[10px] text-black"
                >
                  Free Moving Estimate
                </h2>

                <div
                  class="transition-all duration-1000 delay-150 ease-in-out flex flex-col gap-4 md:gap-2 w-full mb-5 md:items-start justify-center items-center"
                >
                  <div class="flex flex-col">
                    <UInput
                      :inputClass="
                        errors.from ? '!border-red-500 focus:ring-red-500' : ''
                      "
                      @update:modelValue="errors.from = false"
                      v-model="fromZIP"
                      type="text"
                      size="lg"
                      placeholder="From zip code"
                      maxlength="5"
                      :ui="{
                        base: 'relative block md:w-80 focus:border-primary-500 h-12 disabled:cursor-not-allowed bg-[#f2f2f2] disabled:opacity-75 border-0 border-primary-500 !rounded-[10px]',
                        placeholder: 'placeholder-gray-500',
                      }"
                    >
                      <template #trailing>
                        <UIcon
                          role="button"
                          name="i-carbon-location"
                          class="w-5 h-5 font-jakarta text-black-400"
                        />
                      </template>
                    </UInput>
                    <span
                      v-if="errors.from"
                      class="text-red-500 font-jakarta font-bold"
                      >Please enter a valid ZIP code</span
                    >
                  </div>

                  <div class="flex flex-col">
                    <UInput
                      :inputClass="
                        errors.to ? '!border-red-500 focus:ring-red-500' : ''
                      "
                      @update:modelValue="errors.to = false"
                      v-model="toZIP"
                      type="text"
                      size="lg"
                      placeholder="To zip code"
                      maxlength="5"
                      :ui="{
                        base: 'relative block md:w-80 focus:border-primary-500 h-12 bg-[#f2f2f2] disabled:cursor-not-allowed disabled:opacity-75 border-0 border-primary-500 !rounded-[10px]',
                        placeholder: 'placeholder-gray-500',
                      }"
                    >
                      <template #trailing>
                        <UIcon
                          role="button"
                          name="i-carbon-location"
                          class="w-5 h-5 font-jakarta text-black-400"
                        />
                      </template>
                    </UInput>
                    <span
                      v-if="errors.to"
                      class="text-red-500 font-jakarta font-bold"
                      >Please enter a valid ZIP code</span
                    >
                  </div>

                  <UButton
                    @click="getQuote"
                    class="font-bold text-center justify-center rounded-[10px] font-jakarta px-10 text-black border-1 border-gray-900 mx-auto h-12 w-auto lg:w-auto"
                  >
                    Get a free quote
                    <UIcon name="i-carbon-arrow-right" class="w-5 h-5" />
                  </UButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-black text-white pt-8 pb-8">
        <div
          class="max-w-[1360px] w-full mx-auto flex flex-col md:flex-row gap-8 px-[20px] xl:px-0"
        >
          <div class="w-full md:w-[70%]">
            <div class="bg-zinc-900 rounded-lg p-4 md:p-8">
              <h2
                class="text-xl md:text-[38px] leading-normal font-[600] mb-6 font-jakarta"
              >
                Cost of {{ moving_route.title }} with Good View Moving?
              </h2>
              <p
                class="font-[300] text-[18px] tracking-[.3px] font-rubik leading-[1.6em]"
              >
                At Good View Moving and Storage, we believe in providing clear,
                upfront pricing so you can +plan your move with confidence.
                Based on our experience helping customers relocate along this
                route, the average cost to move from {{ fromCity }} to
                {{ toCity }} typically falls between
                <strong class="text-[#ffd343] font-bold"
                  >${{ moving_route.min_cost }}</strong
                >
                and<strong class="text-[#ffd343] font-bold">
                  ${{ moving_route.max_cost }}</strong
                >
              </p>

              <div
                id="map"
                ref="mapRef"
                style="
                  height: 300px;
                  width: 100%;
                  border-radius: 20px;
                  overflow: hidden;
                  position: relative;
                "
                class="my-5"
              >
                <div
                  style="
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: 2;
                    cursor: not-allowed;
                  "
                ></div>
              </div>
              <p
                class="font-[300] text-[18px] tracking-[.3px] font-rubik leading-[1.6em] my-5"
              >
                The final price depends on several factors, including the size
                of your move, the services you select, and your specific moving
                date. Whether you need full-service packing, long distance
                moving services, or simply transportation for your belongings,
                we offer flexible options to fit your needs and budget.
              </p>
              <p
                class="font-[300] text-[18px] tracking-[.3px] font-rubik leading-[1.6em] my-5"
              >
                Here's a breakdown of the average moving costs for this route:
              </p>
              <div
                class="border rounded-md overflow-x-auto max-w-[350px] mx-auto mt-6"
                style="border-color: #ffd343; border-width: 2px"
              >
                <table class="w-full text-left">
                  <thead style="background-color: #ffd343">
                    <tr>
                      <th class="text-black font-jakarta px-4 py-3">
                        Move Size
                      </th>
                      <th class="text-black text-center font-jakarta px-4 py-3">
                        Average Cost
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="item in tableRows"
                      :key="item.label"
                      class="hover:bg-zinc-700"
                    >
                      <td class="px-4 font-rubik py-3">{{ item.label }}</td>
                      <td class="px-4 font-rubik py-3 text-center">
                        ${{ item.avg }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p
                class="font-[300] text-[18px] tracking-[.3px] font-rubik leading-[1.6em] my-5"
              >
                Please note: These price ranges are rough estimates based on our
                customer relocation data. The actual cost may vary depending on
                the size of your move, additional services required, truck
                parking access and availability.
              </p>
              <h2
                class="text-xl md:text-[38px] leading-[1.5em] font-[600] mb-6 font-jakarta"
              >
                Factors Affecting the Cost of {{ moving_route.title }}
              </h2>
              <p
                class="font-[300] text-[18px] tracking-[.3px] font-rubik leading-[1.6em] my-5"
              >
                At Good View Moving and Storage, we believe every move is unique
                — and so is the final cost. Several key factors can influence
                the price of your move from {{ fromCity }} to {{ toCity }}.
              </p>
              <p
                class="font-[300] text-[18px] tracking-[.3px] font-rubik leading-[1.6em] my-5"
              >
                Here's what can affect your moving cost with us:
              </p>
              <ul class="list-disc pl-7 font-rubik">
                <li
                  class="font-[300] text-[18px] tracking-[.3px] font-rubik leading-[1.6em] my-2"
                >
                  <strong class="font-[600] text-[18px]"
                    >Size of Your Move:
                  </strong>
                  Larger homes or apartments mean more items to pack, load, and
                  transport, which can increase the overall cost. For example,
                  moving a 2-3 bedroom home will cost more than a small
                  apartment.
                </li>
                <li
                  class="font-[300] text-[18px] tracking-[.3px] font-rubik leading-[1.6em] my-2"
                >
                  <strong class="font-[600] text-[18px]"
                    >Distance of the Move: </strong
                  >Some customers book long distance moving services for routes
                  beyond city limits, which affects pricing.
                </li>
                <li
                  class="font-[300] text-[18px] tracking-[.3px] font-rubik leading-[1.6em] my-2"
                >
                  <strong class="font-[600] text-[18px]"
                    >Type of Services You Need:
                  </strong>
                  Full-service options, such as professional packing, unpacking,
                  furniture disassembly, or storage, will influence your total
                  moving cost. We offer flexible packages for every need.
                </li>
                <li
                  class="font-[300] text-[18px] tracking-[.3px] font-rubik leading-[1.6em] my-2"
                >
                  <strong class="font-[600] text-[18px]"
                    >Accessibility at Pickup and Drop-off Locations: </strong
                  >If our trucks have limited access, elevators are unavailable,
                  or parking is difficult, it may affect the price.
                </li>
                <li
                  class="font-[300] text-[18px] tracking-[.3px] font-rubik leading-[1.6em] my-2"
                >
                  <strong class="font-[600] text-[18px]"
                    >Move Date and Time:
                  </strong>
                  Moving during peak seasons, weekends, or holidays can increase
                  demand, which may raise rates. Booking early with Good View
                  Moving often secures better pricing.
                </li>
                <li
                  class="font-[300] text-[18px] tracking-[.3px] font-rubik leading-[1.6em] my-2"
                >
                  <strong class="font-[600] text-[18px]"
                    >Specialty Items: </strong
                  >Large or delicate items such as pianos, antiques, or fragile
                  furniture may require extra care and add to the final cost.
                </li>
              </ul>
              <p
                class="font-[300] text-[18px] tracking-[.3px] font-rubik leading-[1.6em] my-5"
              >
                Our goal is to provide affordable long distance moving and local
                relocation services with clear, upfront pricing. Good View
                Moving and Storage is proud to be among the best moving
                companies serving this route.
              </p>
              <h2
                class="text-xl md:text-[38px] leading-[1.5em] font-[600] mb-6 font-jakarta"
              >
                Benefits of Choosing Good View Moving for Your {{ fromCity }} to
                {{ toCity }} Move
              </h2>
              <p
                class="font-[300] text-[18px] tracking-[.3px] font-rubik leading-[1.6em] my-5"
              >
                When you're planning a move from {{ fromCity }} to {{ toCity }},
                you need a team you can rely on. At Good View Moving and
                Storage, we're proud to offer dependable, affordable, and
                stress-free moving solutions for both local and long distance
                moving.
              </p>
              <p
                class="font-[300] text-[18px] tracking-[.3px] font-rubik leading-[1.6em] my-5"
              >
                Here's why so many customers consider us among the best moving
                companies for this route:
              </p>
              <p
                class="font-[300] text-[18px] tracking-[.3px] font-rubik leading-[1.6em] my-5"
              >
                <strong class="font-[600] text-[18px]">
                  <span style="color: #ffd343; margin-right: 6px">✓</span>
                  Experienced, Professional Team: </strong
                >Our movers are trained, licensed, and experienced in handling
                moves across the country and within your area. From packing to
                transport, your belongings are in safe hands.
              </p>
              <p
                class="font-[300] text-[18px] tracking-[.3px] font-rubik leading-[1.6em] my-5"
              >
                <strong class="font-[600] text-[18px]">
                  <span style="color: #ffd343; margin-right: 6px">✓</span>
                  Affordable and Transparent Pricing:
                </strong>
                We believe in honest, upfront pricing. Whether you're looking
                for out of state movers, or full-service relocation, we offer
                solutions that fit your budget.
              </p>
              <p
                class="font-[300] text-[18px] tracking-[.3px] font-rubik leading-[1.6em] my-5"
              >
                <strong class="font-[600] text-[18px]">
                  <span style="color: #ffd343; margin-right: 6px">✓</span>
                  Flexible Moving Options:
                </strong>
                Every move is different. We provide a range of services, from
                basic transportation to full-service packing, storage, and
                specialty item handling. Our long distance moving services can
                be customized to your needs.
              </p>
              <p
                class="font-[300] text-[18px] tracking-[.3px] font-rubik leading-[1.6em] my-5"
              >
                <strong class="font-[600] text-[18px]">
                  <span style="color: #ffd343; margin-right: 6px">✓</span>
                  Highly Rated and Trusted:
                </strong>
                We take pride in positive Good View Moving reviews from
                satisfied customers. Our commitment to reliability, care, and
                customer service has made us a trusted name in the industry.
              </p>
              <p
                class="font-[300] text-[18px] tracking-[.3px] font-rubik leading-[1.6em] my-5"
              >
                <strong class="font-[600] text-[18px]">
                  <span style="color: #ffd343; margin-right: 6px">✓</span>
                  Stress-Free Moving Process: </strong
                >Our goal is simple — to make your move smooth and worry-free.
                Whether you need local help or expert long distance movers,
                we're with you every step of the way.
              </p>
              <h2
                class="text-xl md:text-[38px] leading-[1.5em] font-[600] mb-6 font-jakarta"
              >
                Get an Instant Quote for Your Move Today
              </h2>
              <p
                class="font-[300] text-[18px] tracking-[.3px] font-rubik leading-[1.6em] my-5"
              >
                Planning a move doesn't have to be stressful — let Good View
                Moving and Storage make it simple. Whether you're relocating
                within {{ fromCity }} or heading across the country, we're here
                to help with transparent pricing and professional service.
              </p>
              <p
                class="font-[300] text-[18px] tracking-[.3px] font-rubik leading-[1.6em] my-5"
              >
                With just a few details, you can receive a fast and free quote
                tailored to your move. We provide honest estimates based on the
                size of your move, distance, and any additional services you may
                need, including packing or storage options.
              </p>
              <p
                class="font-[300] text-[18px] tracking-[.3px] font-rubik leading-[1.6em] my-5"
              >
                Wondering What is the cheapest way to move long-distance? Start
                by getting your personalized quote with Good View Moving local
                moving services.
              </p>
              <p
                class="font-[700] text-[18px] tracking-[.3px] font-rubik leading-[1.6em] my-5"
              >
                Get your instant quote today and see why we're considered one of
                the top-rated movers for both local and long-distance
                relocations.
              </p>
              <h2 class="text-4xl font-bold mb-4 mt-12 pb-4 font-jakarta">
                Frequently Aks Questions
              </h2>
              <div class="space-y-6">
                <div
                  v-for="(faq, index) in faqs"
                  :key="index"
                  class="bg-[#1e1e1e] rounded-lg"
                >
                  <div
                    class="border border-[#ffd343] bg-zinc-900 rounded-lg p-5 flex justify-between items-center cursor-pointer"
                    @click="toggleFaq(index)"
                  >
                    <h3 class="font-semibold text-base md:text-lg font-jakarta">
                      {{ faq.question }}
                    </h3>
                    <svg
                      :class="`w-6 h-6 transition-transform duration-300 transform ${
                        openFaq === index ? 'rotate-180' : ''
                      }`"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        :stroke-width="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                  <div v-if="openFaq === index" class="p-6">
                    <p
                      class="font-[300] text-[18px] tracking-[.3px] font-rubik leading-[1.6em]"
                    >
                      {{ faq.answer }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full py-4 md:px-[32px] px-0">
              <h2
                class="text-2xl md:text-[32px] font-jakarta leading-[1.5em] font-[600] mb-6 max-w-[1360px] mx-auto my-[40px]"
              >
                But don't just take our word for it — see what our customers
                have to say about their experience with our New
                {{ fromCity }} services.
              </h2>
              <div class="flex items-center justify-center">
                <div class="relative max-w-6xl overflow-hidden rounded-2xl">
                  <div class="flex w- justify-center">
                    <div
                      v-for="(testimonial, index) in visibleTestimonials"
                      :key="testimonial.id + '-' + index"
                      class="w-full md:w-1/3 min-w-auto md:min-w-[320px] max-w-[400px] m-3 bg-gradient-to-br from-white to-slate-50 border border-[#114e641a] rounded-3xl py-[30px] px-[40px] md:px-[40px] shadow-[0_10px_40px_rgba(17,78,100,0.1),0_4px_12px_rgba(17,78,100,0.05)] transition-all duration-300 min-h-[420px] relative overflow-hidden"
                    >
                      <div
                        class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#114E64] to-[#1E6B7A] scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"
                      ></div>
                      <div class="mb-6">
                        <div class="flex items-center mb-5">
                          <div class="flex-1">
                            <h3
                              class="font-bold text-black font-jakarta text-[32px] tracking-tight"
                            >
                              {{ testimonial.name }}
                            </h3>
                          </div>
                        </div>
                        <div class="flex items-center justify-between">
                          <div class="flex">
                            <span
                              v-for="i in 5"
                              :key="i"
                              class="flex items-center w-[30px] h-[30px] sm:w-[45px] sm:h-[45px]"
                            >
                              <svg
                                width="45"
                                height="45"
                                viewBox="0 0 24 24"
                                fill="#FFD700"
                              >
                                <polygon
                                  points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"
                                />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="relative">
                        <p
                          class="text-black font-[300] text-[16px] font-rukik leading-relaxed"
                        >
                          {{ testimonial.review }}
                        </p>
                      </div>
                    </div>
                  </div>
                  <button
                    aria-label="Previous Slide"
                    class="absolute left-[9px] top-1/2 -translate-y-1/2 w-[39px] h-[39px] bg-[#ffd343] text-black rounded-full shadow-xl flex items-center justify-center hover:scale-110 transition disabled:opacity-40 z-10"
                    @click="prevSlide"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M15 18L9 12L15 6"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                  <button
                    aria-label="Next Slide"
                    class="absolute right-[3px] top-1/2 -translate-y-1/2 w-[39px] h-[39px] bg-[#ffd343] text-black rounded-full shadow-xl flex items-center justify-center hover:scale-110 transition z-10"
                    @click="nextSlide"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M9 18L15 12L9 6"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="w-full md:w-[30%] space-y-6">
            <div class="px-6 py-0 pb-1 md:border-l border-gray-800">
              <h3 class="text-xl font-bold font-jakarta mb-4">
                Moving Services
              </h3>
              <div class="border-b-2 border-[#ffd343] mb-4 pb-[30px]">
                <ul class="space-y-2 font-rubik">
                  <li
                    class="hover: cursor-pointer hover:underline transition-colors duration-200 relative before:content-[''] before:absolute before:left-0 before:top-[50%] before:transform before:translate-y-[-50%] before:bg-[#ffd343] before:w-2 before:h-2 before:mr-4 before:rounded-full pl-4"
                  >
                    <ULink to="/services/commercial-moving-service/">
                      <span class="w-1 h-1 bg-[#FFD343] rounded-full"></span>
                      Commercial Moving
                    </ULink>
                  </li>
                  <li
                    class="hover: cursor-pointer hover:underline transition-colors duration-200 relative before:content-[''] before:absolute before:left-0 before:top-[50%] before:transform before:translate-y-[-50%] before:bg-[#ffd343] before:w-2 before:h-2 before:mr-4 before:rounded-full pl-4"
                  >
                    <ULink to="/services/long-distance-moving-service/">
                      <span class="w-1 h-1 bg-[#FFD343] rounded-full"></span>
                      Long Distance Moving
                    </ULink>
                  </li>
                  <li
                    class="hover: cursor-pointer hover:underline transition-colors duration-200 relative before:content-[''] before:absolute before:left-0 before:top-[50%] before:transform before:translate-y-[-50%] before:bg-[#ffd343] before:w-2 before:h-2 before:mr-4 before:rounded-full pl-4"
                  >
                    <ULink to="/services/residential-moving-service/">
                      <span class="w-1 h-1 bg-[#FFD343] rounded-full"></span>
                      Residential Moving
                    </ULink>
                  </li>
                  <li
                    class="hover: cursor-pointer hover:underline transition-colors duration-200 relative before:content-[''] before:absolute before:left-0 before:top-[50%] before:transform before:translate-y-[-50%] before:bg-[#ffd343] before:w-2 before:h-2 before:mr-4 before:rounded-full pl-4"
                  >
                    <ULink to="/services/packing-and-unpacking-service/">
                      <span class="w-1 h-1 bg-[#FFD343] rounded-full"></span>
                      Packing and Unpacking Services
                    </ULink>
                  </li>
                  <li
                    class="hover: cursor-pointer hover:underline transition-colors duration-200 relative before:content-[''] before:absolute before:left-0 before:top-[50%] before:transform before:translate-y-[-50%] before:bg-[#ffd343] before:w-2 before:h-2 before:mr-4 before:rounded-full pl-4"
                  >
                    <ULink
                      to="/services/furniture-assembly-and-disassembly-service/"
                    >
                      <span class="w-1 h-1 bg-[#FFD343] rounded-full"></span>
                      Furniture Assembly Services
                    </ULink>
                  </li>
                  <li
                    class="hover: cursor-pointer hover:underline transition-colors duration-200 relative before:content-[''] before:absolute before:left-0 before:top-[50%] before:transform before:translate-y-[-50%] before:bg-[#ffd343] before:w-2 before:h-2 before:mr-4 before:rounded-full pl-4"
                  >
                    <ULink to="/services/specialty-moving-service/">
                      <span class="w-1 h-1 bg-[#FFD343] rounded-full"></span>
                      Specialty Movers
                    </ULink>
                  </li>
                  <li
                    class="hover: cursor-pointer hover:underline transition-colors duration-200 relative before:content-[''] before:absolute before:left-0 before:top-[50%] before:transform before:translate-y-[-50%] before:bg-[#ffd343] before:w-2 before:h-2 before:mr-4 before:rounded-full pl-4"
                  >
                    <ULink to="/services/storage-service/">
                      <span class="w-1 h-1 bg-[#FFD343] rounded-full"></span>
                      Storage Units
                    </ULink>
                  </li>
                </ul>
              </div>
              <div class="border-b-2 border-[#ffd343] mb-4 pb-[40px] pt-[20px]">
                <h3
                  class="text-xl font-bold mb-4 font-jakarta flex items-center gap-2"
                >
                  Get a Quote
                </h3>
                <div>
                  <p class="mb-3 font-jakarta">Get a Free Online Quote</p>
                  <ULink
                    to="/quote/"
                    class="bg-primary-500 py-2 font-rubik px-3 lg:px-3 rounded-[10px] border border-primary-500 hover:bg-black hover:text-white text-black font-[500px]"
                  >
                    Get a free quote</ULink
                  >
                </div>
              </div>
              <div class="border-b-2 border-[#ffd343] pb-[30px]">
                <h3
                  class="text-xl font-bold font-jakarta mb-4 flex items-center gap-2"
                >
                  Moving Blogs
                </h3>

                <div class="space-y-4 mb-4">
                  <div v-for="blog in blogs.slice(0, 5)" :key="blog.id">
                    <NuxtLink :to="`/blogs/${blog.slug}/`">
                      <div class="flex gap-3 group cursor-pointer">
                        <div class="flex-shrink-0">
                          <img
                            :src="blog.image"
                            alt="blog image"
                            class="w-16 h-12 object-cover rounded-lg border border-gray-700 group-hover:border-[#FFD343] transition-colors duration-200"
                          />
                        </div>
                        <div class="flex-1">
                          <h2
                            class="text-sm group-hover:text-[#FFD343] font-rubik transition-colors duration-200 leading-tight"
                          >
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
  </div>
</template>
<script setup>
import { ref, computed, onMounted, nextTick, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useHead } from "#imports";

const route = useRoute();
const router = useRouter();
const city = route.params.city;
const place = route.params.place;

// Fetch route data
const {
  data: moving_route,
  pending: movingRoutePending,
  error: movingRouteError,
} = useFetch(`https://api.goodview-moving.com/api/routes/${city}-to-${place}`);
const {
  data: allCities,
  pending: citiesPending,
  error: citiesError,
} = useFetch("https://api.goodview-moving.com/api/city");
const {
  data: allStates,
  pending: statesPending,
  error: statesError,
} = useFetch("https://api.goodview-moving.com/api/states");

const fromCityObj = computed(() => {
  return allCities.value?.find(
    (c) => c.id === moving_route.value?.moving_from_city?.id
  );
});
const fromStateObj = computed(() => {
  return allStates.value?.find(
    (s) => String(s.id) === String(fromCityObj.value?.state_id)
  );
});
const toCityObj = computed(() => {
  return allCities.value?.find(
    (c) => c.id === moving_route.value?.moving_to_city?.id
  );
});
const toStateObj = computed(() => {
  return allStates.value?.find(
    (s) => String(s.id) === String(toCityObj.value?.state_id)
  );
});
const fromCity = computed(
  () => moving_route.value?.moving_from_city?.name || ""
);
const toCity = computed(() => moving_route.value?.moving_to_city?.name || "");

// Table move sizes and cost ranges
const moveSizes = [
  { label: "1 Bedroom", min: 1350, max: 1299 },
  { label: "2 Bedroom", min: 1750, max: 1799 },
  { label: "3 Bedroom", min: 2050, max: 2099 },
  { label: "4 Bedroom", min: 3050, max: 3099 },
  { label: "Office", min: 1150, max: 1199 },
  { label: "Studio", min: 1150, max: 1199 },
];
function getRandomCost(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const tableRows = moveSizes.map((row) => ({
  ...row,
  avg: getRandomCost(row.min, row.max),
}));

// Loading and error states
const statePending = computed(
  () => movingRoutePending.value || citiesPending.value || statesPending.value
);
const stateError = computed(
  () => movingRouteError.value || citiesError.value || statesError.value
);

// Blog list
const blogs = ref([]);
async function fetchBlogs() {
  blogs.value = await $fetch("https://api.goodview-moving.com/api/blogs");
}

// Map logic

const isUSMove = computed(() => {
  return fromStateObj.value && toStateObj.value;
});

const distance = ref(null);
const mapRef = ref(null);

function initMap(cityA, cityB) {
  if (!cityA || !cityB || !mapRef.value) return;
  const map = new google.maps.Map(mapRef.value, {
    zoom: 6,
    center: {
      lat: 27.5,
      lng: -81,
    },
    disableDefaultUI: true,
    gestureHandling: "none",
    draggable: false,
    scrollwheel: false,
    keyboardShortcuts: false,
    clickableIcons: false,
  });
  const directionsService = new google.maps.DirectionsService();
  const directionsRenderer = new google.maps.DirectionsRenderer({
    polylineOptions: {
      strokeColor: "#4285F4",
      strokeOpacity: 1.0,
      strokeWeight: 5,
    },
    suppressMarkers: true,
  });
  directionsRenderer.setMap(map);

  directionsService.route(
    {
      origin: cityA,
      destination: cityB,
      travelMode: google.maps.TravelMode.DRIVING,
    },
    function (response, status) {
      if (status === "OK") {
        directionsRenderer.setDirections(response);

        // Add custom markers (no info windows)
        const leg = response.routes[0].legs[0];
        new google.maps.Marker({
          position: leg.start_location,
          map: map,
          label: "A",
        });
        new google.maps.Marker({
          position: leg.end_location,
          map: map,
          label: "B",
        });
      } else {
        console.error("Directions request failed due to " + status);
      }
    }
  );
}

function tryInitMap() {
  if (
    fromCityObj.value &&
    toCityObj.value &&
    typeof window.google !== "undefined" &&
    window.google.maps &&
    mapRef.value
  ) {
    nextTick(() => {
      initMap(fromCityObj.value.name, toCityObj.value.name);
    });
  }
}

watch([fromCityObj, toCityObj, () => mapRef.value], () => {
  tryInitMap();
});

// Watch for changes in city objects and Google Maps availability
watch(
  () => route.fullPath,
  () => {
    tryInitMap();
  }
);

onMounted(async () => {
  fetchBlogs();

  window.initMap = () => {
    tryInitMap();
  };

  if (
    typeof window.google === "undefined" ||
    typeof window.google.maps === "undefined"
  ) {
    // Only add the script if it doesn't exist
    if (!document.getElementById("google-maps-script")) {
      const script = document.createElement("script");
      script.id = "google-maps-script";
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAugC08PfRftIfSHsZ3scsMZK1EY249qus&libraries=places,geometry,directions&callback=initMap&loading=async`;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    }
  } else {
    tryInitMap();
  }
});

// All your other refs, methods, and computed go here
const openFaq = ref(null);
const fromZIP = ref("");
const toZIP = ref("");
const errors = ref({ from: null, to: null });
const currentSlide = ref(0);
const windowWidth = ref(
  typeof window !== "undefined" ? window.innerWidth : 1024
);
const faqs = ref([
  {
    question: "What is the cheapest way to move long-distance?",
    answer:
      "The cheapest way to move long-distance is by handling the packing, loading, and transportation yourself using a rental truck or trailer. This option is ideal for smaller moves or when you have minimal belongings. For larger moves, sharing truck space through consolidated shipping or comparing rates from multiple long distance moving companies near me can help reduce costs. ",
  },
  {
    question: "How much does a local moving service cost?",
    answer:
      "The cost of a local moving service with Good View Moving and Storage typically ranges from $300 to $2,500. Smaller moves, like a 1-bedroom apartment, often cost between $300 and $950, while larger homes can cost $1,200 to $2,500.",
  },
  {
    question: "How much does it cost to move a 2000 sq ft house?",
    answer:
      "The cost to move a 2000 sq ft house varies based on the distance, services required, and accessibility at both locations. For a local move (under 100 miles), the cost to relocate a 2,000 sq ft home typically ranges from $1,500 to $5,000. For long-distance moves (over 100 miles), the average cost increases to around $4,000 to $9,000. ",
  },
  {
    question: "How much does it cost to move a 1,500 sq. ft. house?",
    answer:
      "The average cost to move a 1500 sq ft house locally ranges from $700 to $2,000, depending on the amount of furniture, services required, and accessibility at both locations. For an accurate estimate, Good View Moving and Storage provides free, upfront quotes based on your specific move.",
  },
  {
    question: "What is the average cost to move across the United States?",
    answer:
      "The average cost to move across the United States ranges from $2,300 to $8,500, depending on the size of your home, the total distance, and any additional services required. Most people spend around $4,500 to $5,000 for a typical long-distance move of 1,000 miles.",
  },
  {
    question: "How far in advance should you hire movers?",
    answer:
      "It's recommended to hire movers at least 4 to 6 weeks in advance, especially during busy seasons like summer or weekends. Booking early helps secure your preferred moving date and often results in better pricing.",
  },
]);
const testimonials = ref([
  {
    id: 1,
    name: "Thomas _.",
    rating: 5,
    review:
      "In my opinion, Goodview Moving and Storage is the best. Everyone on staff was punctual and worked well. Despite being cautious, they wasted no time. My belongings arrived in pristine condition, and I could not be happier with their service.",
  },
  {
    id: 2,
    name: "Robert M.",
    rating: 5,
    review:
      "I had to move my furniture into storage for a few months before my new home was ready. I reached out to this company and they came through for me. Their movers labeled and packed everything so well that unpacking later was a breeze. So grateful for their attention to detail!",
  },
  {
    id: 3,
    name: "Melvin C.",
    rating: 5,
    review:
      "Thanks to Goodview Moving and Storage for making our moving experience a breeze. The team worked efficiently. The staff is friendly and easy working with. Clean, fast, with reasonable price. I highly recommend their service!",
  },
  {
    id: 4,
    name: "Thomas R.",
    rating: 5,
    review:
      "Goodview Moving and Storage was so easy to work with. Quotations were received promptly via phone call and text messages and there were no surprise charges like you may have with other movers during final billing. They also helped with assembling furniture. Thanks for a smooth move!",
  },
]);
const visibleTestimonials = computed(() => {
  const count =
    windowWidth.value < 576 ||
    (windowWidth.value > 767 && windowWidth.value < 1100)
      ? 1
      : 2;
  const arr = [];
  for (let i = 0; i < count; i++) {
    arr.push(
      testimonials.value[(currentSlide.value + i) % testimonials.value.length]
    );
  }
  return arr;
});
function getQuote() {
  errors.value.from = !fromZIP.value;
  errors.value.to = !toZIP.value;
  if (errors.value.from || errors.value.to) return;
  router.push({
    path: "/quote",
    query: { from: fromZIP.value, to: toZIP.value },
  });
}
function toggleFaq(index) {
  openFaq.value = openFaq.value === index ? null : index;
}
function nextSlide() {
  currentSlide.value = (currentSlide.value + 1) % testimonials.value.length;
}
function prevSlide() {
  currentSlide.value =
    (currentSlide.value - 1 + testimonials.value.length) %
    testimonials.value.length;
}
function handleResize() {
  windowWidth.value = window.innerWidth;
}
onMounted(() => {
  window.addEventListener("resize", handleResize);
});

useHead(
  computed(() => ({
    title: moving_route.value?.meta_title,
    meta: [
      {
        name: "description",
        content: `Move from ${fromCity.value} to ${toCity.value} with ease. Good View Moving offers affordable and hassle-free relocation services. Get your free quote today.`,
      },
    ],
    script: [
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.value.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          }))
        })
      }
    ]
  }))
);
</script>
