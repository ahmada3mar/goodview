<template>
  <div>
    <div class="relative bg-cover bg-center overflow-hidden  lg:h-[765px] flex items-center justify-center"
      style="background-image: url('/imgs/topbannerimage (1).png')">
      <div class="absolute inset-0 !bg-gradient-to-t !from-black/80 !to-black/80"></div>
      <div class="flex flex-row max-w-[1360px] w-full  mx-auto justify-between items-center">
        <!-- Left side: Title/Description -->
        <div
          class="relative flex flex-col items-baseline justify-center text-center gap-6 px-5 py-10 container  h-full">
          <h1 class="text-white text-4xl lg:text-[74px] font-extrabold leading-normal text-left font-jakarta">
            Moving Services in <br> New Jersey
          </h1>
          <p class="text-white text-left text-[16px] md:text-xl font-light max-w-3xl font-jakarta leading-[2rem]">
            If you are looking for a moving company in New Jersey, then Good View Moving and Storage is here for you!
          </p>
          <p class="text-white text-left text-[16px] md:text-xl font-light max-w-3xl font-jakarta leading-relaxed">
            With years of experience, we understand the challenges of relocating through the tight and busy streets of
            New
            Jersey. That’s why we are here to make your move easy from start to finish.
          </p>
          <p class="text-white text-left text-[16px] md:text-xl font-light max-w-3xl font-jakarta leading-relaxed">
            Our team of trained, professional movers takes great care of your belongings, ensuring everything arrives
            safely at your new place.
          </p>
          <p class="text-white text-left text-[16px] md:text-xl font-light max-w-3xl font-jakarta leading-relaxed">
            When you choose Good View Moving and Storage, you can trust that your move is in good hands.
          </p>
          <ULink to="/quote/"
            class="bg-primary-500 py-2 font-jakarta px-3 lg:px-3 xl:px-7 rounded-[10px] border border-primary-500 hover:bg-black hover:text-white text-black font-bold">
            Free quote
          </ULink>
        </div>

        <!-- Right side: Quote Form -->

      </div>
    </div>
    <div class="bg-zinc-900">
      <div class="  max-w-[1020px] px-5 lg:px-0 mx-auto bg-zinc-900 lg:mx-auto ">
        <div class="flex flex-col   text-center max-w-[1020px] md:flex-row items-center py-[80px] mx-auto gap-6">
          <!-- Text Section -->
          <div>
            <h2 class="text-3xl text-center font-jakarta md:text-[60px]  leading-normal text-white mb-5 font-extrabold">
              Moving
              Experts You Can Count
              On</h2>
            <div class="w-[126px] h-[2px] my-5 mx-auto bg-primary-500"></div>
            <p class="text-[16px] font-rubik text-white md:text-[18px] md:font-[300] md:leading-8">
              At Good View Moving and Storage, we know that every move is a big step — and we’re here to make it easier
              for you. Based right here in New Jersey, our team offers dependable, affordable moving services with a
              personal touch.
            </p>
            <p class="text-[16px] font-rubik text-white md:text-[18px] md:font-[300] md:leading-8">
              Whether you're relocating your home, apartment, or office, we handle every detail with care. Our movers
              are
              familiar with the local streets and neighborhoods, and they know how to move your belongings safely and
              efficiently.</p>
            <div class="mt-[40px] !text-center">
              <QuoteInputs :is-visible="true" />
            </div>

          </div>
          <!-- Image Section -->
          <!-- <div class=" card-img">
            <img alt="About us"
              class="lazy-image opacity-0 rounded-[10px]   transition-opacity duration-500 ease-in-out  w-full  lg:h-[300px] object-cover "
              v-lazy="'/imgs/about-us.webp'" />
          </div> -->
        </div>
      </div>
    </div>
    <!-- <div>
      <div class="mx-0   px-0 sm:px-5">
        <div class="flex flex-col py-10">
          <h2 class=" text-[36px] text-center font-bold  font-jakarta text-black">Our
            Services </h2>
          <div class="sm:w-[10%] w-[25%]  h-[1px] mt-[10px]   bg-black mx-auto  "></div>
          <h3 class=" text-center font-[400] mt-2  font-jakarta  text-black">
            Services That Fit
            Your Needs</h3>
          <p></p>
          <div class="grid grid-cols-1 px-0 sm:px-5 md:px-0 lg:grid-cols-3  text-white   gap-5  my-10 sm:my-14">

            <div class="bg-[#171820] text-white  border-0 rounded-sm ring-0">
              <div class="flex flex-col p-[10px] sm:p-4 xl:flex-col h-full gap-1">
                <div class="card-img  h-72">
                  <img alt="Commercial Moving"
                    class="lazy-image opacity-0 transition-opacity duration-500 ease-in-out w-full h-full object-cover  rounded-[5px]"
                    v-lazy="'/imgs/card1.webp'" />
                </div>
                <div class="flex flex-col   p-4   text-start text-xl text-white">
                  <div class=" ">
                    <h2 class="font-jakarta  font-[600] leading-[35px]">Commercial
                      Moving</h2>
                    <p class="text-[16px]  font-[300] tracking-[.3px]  text-wrap font-rubik mt-5">
                      Relocate your business with minimal downtime. Our professional moving
                      services ensure a smooth, efficient transition.
                    </p>
                  </div>
                  <ULink to="/services/commercial-moving-service"
                    class="text-center rounded-[10px] text-sm font-jakarta mb-3 mt-[25px] bg-black hover:bg-primary-500 hover:text-black transition-all px-12 md:px-16 lg:px-4 xl:px-8 py-3 font-bold w-full lg:w-auto">
                    View Details
                  </ULink>
                </div>

              </div>
            </div>

            <div class="bg-[#171820] text-white   border-0 rounded-none ring-0">
              <div class="flex flex-col p-[10px] sm:p-4 xl:flex-col h-full gap-1">
                <div class="card-img  h-72">
                  <img alt="Furniture Disassembly"
                    class="lazy-image opacity-0 transition-opacity duration-500 ease-in-out w-full h-full object-cover  rounded-[5px]"
                    v-lazy="'/imgs/card5.webp'" />
                </div>
                <div class="flex flex-col   p-4   text-start text-xl text-white">
                  <div class=" ">
                    <h2 class="font-jakarta  font-[600] leading-[35px]">Furniture
                      Disassembly</h2>
                    <p class="text-[16px]  font-[300] tracking-[.3px]  text-wrap font-rubik mt-5">
                      We carefully disassemble and reassemble your

                      furniture for a hassle-free
                      move, providing safety and efficiency. </p>
                  </div>
                  <ULink to="/services/furniture-assembly-and-disassembly-service"
                    class="text-center rounded-[10px] text-sm font-jakarta mb-3 mt-[25px] bg-black hover:bg-primary-500 hover:text-black transition-all px-12 md:px-16 lg:px-4 xl:px-8 py-3 font-bold w-full lg:w-auto">
                    View Details
                  </ULink>
                </div>

              </div>
            </div>





            <div class="bg-[#171820] text-white border-0 rounded-none ring-0">
              <div class="flex flex-col p-[10px] sm:p-4 xl:flex-col h-full gap-1">
                <div class="card-img  h-72">
                  <img alt="Home Movers"
                    class="lazy-image opacity-0 transition-opacity duration-500 ease-in-out w-full h-full object-cover  rounded-[5px]"
                    v-lazy="'/imgs/card3.webp'" />
                </div>
                <div class="flex flex-col   p-4   text-start text-xl text-white">
                  <div class=" ">
                    <h2 class="font-jakarta  font-[600] leading-[35px]">Residential Moving
                    </h2>
                    <p class="text-[16px]  font-[300] tracking-[.3px]  text-wrap font-rubik mt-5">
                      From packing to transport, our full-service moving company makes home
                      relocations easy and stress-free.</p>
                  </div>
                  <ULink to="/services/residential-moving-service"
                    class="text-center rounded-[10px] text-sm font-jakarta mb-3 mt-[25px] bg-black hover:bg-primary-500 hover:text-black transition-all px-12 md:px-16 lg:px-4 xl:px-8 py-3 font-bold w-full lg:w-auto">
                    View Details
                  </ULink>
                </div>

              </div>
            </div>


          </div>


        </div>
      </div>
    </div> -->

    <div class="bg-black">

      <div class="flex flex-col px-5 lg:px-0 container md:flex-row items-center py-[80px] mx-auto gap-[4.5rem]">

        <!-- Image Section (Left - 40%) -->
        <div class="w-full md:w-[40%] card-img">
          <img alt="About us"
            class="lazy-image opacity-0 rounded-[10px] transition-opacity duration-500 ease-in-out w-full h-full object-cover"
            v-lazy="'/imgs/whychoosenew (1).jpg'" />
        </div>

        <!-- Text Section (Right - 60%) -->
        <div class="w-full md:w-[60%]">
          <h2 class="text-3xl font-jakarta md:text-[48px] leading-normal text-white mb-5 font-extrabold">
            Why Choose Good View Moving and Storage in New Jersey?
          </h2>
          <p class="text-[16px] font-rubik text-white md:text-[18px] md:font-[300] md:leading-8">
            When customers ask, “Who are the best movers in New Jersey?” Good View Moving and Storage is always the
            name that stands out.
          </p>
          <p class="text-[16px] font-rubik text-white md:text-[18px] md:font-[300] md:leading-8 mt-4">
            We’ve built our reputation by making every move smooth, affordable, and stress-free. Here’s why so many
            families and businesses trust us with their move:
          </p>
          <ul
            class="list-inside text-[16px] md:text-[18px] text-white md:font-[300] md:leading-8 font-rubik mt-4 space-y-2">
            <li class="flex"> <img alt="About us" class="w-6 h-6 " v-lazy="'/imgs/check (1).png'" /><span
                class="font-semibold ml-[10px]">Experienced Local Team</span> –
              Movers who know New Jersey inside and out.
            </li>
            <li class="flex"> <img alt="About us" class="w-6 h-6 " v-lazy="'/imgs/check (1).png'" /><span
                class="font-semibold ml-[10px]">Fair, Transparent Pricing</span> – No hidden fees, just honest quotes.
            </li>
            <li class="flex"> <img alt="About us" class="w-6 h-6 " v-lazy="'/imgs/check (1).png'" /><span
                class="font-semibold ml-[10px]">Full-Service Moving</span> – From packing to storage, we handle it all.
            </li>
            <li class="flex"> <img alt="About us" class="w-6 h-6 " v-lazy="'/imgs/check (1).png'" /><span
                class="font-semibold ml-[10px]">Local & Long-Distance Experts</span> – Whether it’s down the block or
              across
              state lines.</li>
            <li class="flex"> <img alt="About us" class="w-6 h-6 " v-lazy="'/imgs/check (1).png'" /><span
                class="font-semibold ml-[10px]">Licensed & Insured</span> – Your belongings are always in safe hands.
            </li>
          </ul>
        </div>
      </div>
      <div class="max-w-[1020px] px-5 lg:px-0 mx-auto ">
        <h2 class="text-3xl  font-jakarta md:text-[48px]  leading-normal text-white mb-5 font-extrabold">
          Long Distance Moving Areas We Cover in New Jersey</h2>
        <div class="w-[126px] h-[2px] my-5  bg-primary-500"></div>
        <p class="text-[16px] font-rubik text-white md:text-[18px] md:font-[300] md:leading-8">
          Good View Moving and Storage provides reliable long distance moving services across New Jersey, helping
          residents and businesses relocate with ease. Whether you’re moving to another part of the state or across
          state lines, our experienced team is here to make the process simple.
        </p>
        <p class="text-[16px] font-rubik text-white md:text-[18px] md:font-[300] md:leading-8">
          We cover, but are not limited to, the following routes:</p>
        <div class="grid grid-cols-1 md:grid-cols-2 my-5  gap-6 mt-6 mb-10">
          <ul
            class="list-disc list-inside md:text-[18px] text-white md:font-[300] md:leading-8 font-rubik mt-4 space-y-2">
            <span class="font-semibold font-jakarta text-[28px] underline underline-offset-2">Jersey City</span>

            <li>Jersey City to New York City </li>
            <li>Jersey City to Kiryas Joel</li>
            <li>Jersey City to New Rochelle</li>
            <li>Jersey City to Harrison</li>
            <li>Jersey City to Albany</li>

            <li>Jersey City to Buffalo</li>

          </ul>
          <ul
            class="list-disc list-inside md:text-[18px] text-white md:font-[300] md:leading-8 font-rubik mt-4 space-y-2">
            <span class="font-semibold font-jakarta text-[28px] underline underline-offset-2">
              Montclair</span>

            <li>Montclair to New York City </li>
            <li>Montclair to Kiryas Joel</li>
            <li>Montclair to New Rochelle</li>
            <li>Montclair to Harrison</li>
            <li>Montclair to Albany</li>

            <li>Montclair to Buffalo </li>

          </ul>
        </div>
      </div>
      <div class="max-w-[1020px] px-5 lg:px-0 mx-auto">
        <h2 class="text-3xl  font-jakarta md:text-[48px]  leading-normal text-white mb-5 font-extrabold">
          Local Moving Areas We Cover in New Jersey </h2>
        <div class="w-[126px] h-[2px] my-5  bg-primary-500"></div>
        <p class="text-[16px] font-rubik text-white md:text-[18px] md:font-[300] md:leading-8">
          Whether you’re moving to a new home, apartment, or office nearby, our experienced local movers are ready to
          help.
        </p>
        <p class="text-[16px] font-rubik text-white md:text-[18px] md:font-[300] md:leading-8">
          We proudly serve, but are not limited to, the following routes:</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <ul
            class="list-disc list-inside md:text-[18px] text-white md:font-[300] md:leading-8 font-rubik mb-7 mt-4 space-y-2">
            <span class="font-semibold font-jakarta text-[28px] underline underline-offset-2">Jersey City</span>

            <li>Jersey City to Montclair </li>
            <li>Jersey City to Princeton</li>
            <li>Jersey City to Ridgewood</li>
            <li>Jersey City to Hoboken </li>
            <li>Jersey City to Newark </li>



          </ul>
          <ul
            class="list-disc list-inside md:text-[18px] text-white md:font-[300] md:leading-8 font-rubik mt-4 space-y-2">
            <span class="font-semibold font-jakarta text-[28px] underline underline-offset-2">
              Montclair</span>

            <li>Montclair to Jersey City </li>
            <li>Montclair to Princeton </li>
            <li>Montclair to Ridgewood </li>
            <li>Montclair to Hoboken </li>
            <li>Montclair to Newark </li>



          </ul>
        </div>
      </div>


    </div>
    <div class="bg-zinc-900 ">


      <div class="flex flex-col px-5 lg:px-0 container md:flex-row items-center py-[90px] mx-auto gap-[4.5rem]">

        <!-- Image Section (Left - 40%) -->
        <div class="w-full md:w-[40%] card-img">
          <img alt="About us"
            class="lazy-image opacity-0 rounded-[10px] h-[450px] transition-opacity duration-500 ease-in-out w-full  object-cover"
            v-lazy="'/imgs/quote2.webp'" />
        </div>

        <!-- Text Section (Right - 60%) -->
        <div class="w-full md:w-[60%]">
          <h2 class="text-3xl font-jakarta md:text-[48px] leading-normal text-white mb-5 font-extrabold">
            Get Your Free Moving Estimate Today
          </h2>
          <p class="text-[16px] font-rubik text-white md:text-[18px] md:font-[300] md:leading-8">
            Ready to move with a trusted New Jersey moving company? Contact Good View Moving and Storage today for your
            free quote, and let our team make your move simple and stress-free.
          </p>
          <p class="text-[16px] font-rubik text-white md:text-[18px] md:font-[300] md:leading-8 mt-4">
            We’re here to answer your questions, help you plan your move, and provide the reliable, professional service
            you deserve.
          </p>
          <p class="text-[16px] font-rubik text-white md:text-[18px] md:font-bold md:leading-8 mt-4">
            Call us or request your free estimate online — let Good View Moving and Storage handle the heavy lifting!
          </p>
          <div class="mt-4">
            <ULink to="/quote/"
              class="bg-primary-500 py-2 font-jakarta px-3 lg:px-3 xl:px-7 rounded-[10px] border border-primary-500 hover:bg-black hover:text-white text-black font-bold">
              Free quote
            </ULink>
          </div>
        </div>
      </div>
    </div>
  </div>





</template>
