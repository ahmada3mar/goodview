<template>
  <div>
    <div class="relative bg-cover bg-center overflow-hidden  lg:h-[650px] flex items-center justify-center"
      style="background-image: url('/imgs/New-Jersey.webp')">
      <div class="absolute inset-0 !bg-gradient-to-t !from-black/80 !to-black/80"></div>
      <div class="flex flex-row max-w-[1360px] w-full  mx-auto justify-between items-center">
        <!-- Left side: Title/Description -->
        <div
          class="relative flex flex-col items-baseline justify-center text-center gap-6 px-5 py-10 container  h-full">
          <h1
            class="text-white text-[30px] sm:text-[40px] lg:text-[52px] font-extrabold leading-normal text-left font-jakarta">
            Moving Services in <br> New Jersey
          </h1>
          <p class="text-white text-left text-[16px] md:text-[18px] font-light max-w-3xl font-jakarta leading-[2rem]">
            If you are looking for a moving company in New Jersey, then Good View Moving and Storage is here for you!
          </p>
          <p class="text-white text-left text-[16px] md:text-[18px]l font-light max-w-3xl font-jakarta leading-[2rem]">
            With years of experience, we understand the challenges of relocating through the tight and busy streets of
            New Jersey. That’s why we are here to make your move easy from start to finish.
          </p>
          <p class="text-white text-left text-[16px] md:text-[18px] font-light max-w-3xl font-jakarta leading-[2rem]">
            Our team of trained, professional movers takes great care of your belongings, ensuring everything arrives
            safely at your new place.
          </p>
          <p class="text-white text-left text-[16px] md:text-[18px] font-light max-w-3xl font-jakarta leading-[2rem]">
            When you choose Good View Moving and Storage, you can trust that your move is in good hands. </p>
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
            <h2 class="text-3xl text-center font-jakarta md:text-[38px]  leading-normal text-white mb-5 font-extrabold">
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
              are familiar with the local streets and neighborhoods, and they know how to move your belongings safely
              and efficiently.</p>
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

      <div class="flex flex-col px-5 lg:px-0 container md:flex-row items-center pt-[80px] mx-auto gap-[4.5rem]">

        <!-- Image Section (Left - 40%) -->
        <div class="w-full md:w-[40%] card-img">
          <img alt="About us"
            class="lazy-image opacity-0 rounded-[10px] transition-opacity duration-500 ease-in-out w-full h-full object-cover"
            v-lazy="'/imgs/new-jersey2.webp '" />
        </div>

        <!-- Text Section (Right - 60%) -->
        <div class="w-full md:w-[60%]">
          <h2 class="text-3xl font-jakarta md:text-[48px] leading-normal text-white mb-5 font-extrabold">
            Why Choose Good View Moving and Storage in New Jersey?
          </h2>
          <p class="text-[16px] font-rubik text-white md:text-[18px] md:font-[300] md:leading-8">
            When customers ask, “Who are the best movers in New Jersey?” Good View Moving and Storage is always the name
            that stands out.
          </p>
          <p class="text-[16px] font-rubik text-white md:text-[18px] md:font-[300] md:leading-8 mt-4">
            We’ve built our reputation by making every move smooth, affordable, and stress-free. Here’s why so many
            families and businesses trust us with their move:
          </p>
          <ul
            class="list-inside text-[16px] md:text-[18px] text-white md:font-[300] md:leading-8 font-rubik mt-4 space-y-2">
            <li><span class="text-primary-500">✔ &nbsp;</span><span class="font-semibold">
                Experienced Local Team</span> – Movers who know New Jersey inside and out.</li>
            <li><span class="text-primary-500">✔ &nbsp;</span><span class="font-semibold">
                Fair, Transparent Pricing</span> – No hidden fees, just honest quotes.</li>
            <li><span class="text-primary-500">✔ &nbsp;</span><span class="font-semibold">
                Full-Service Moving</span> – From packing to storage, we handle it all.</li>
            <li><span class="text-primary-500">✔ &nbsp;</span><span class="font-semibold">
                Local & Long-Distance Experts</span> – Whether it's down the block or across state lines.</li>
            <li><span class="text-primary-500">✔ &nbsp;</span><span class="font-semibold">
                Licensed & Insured</span> – Your belongings are always in safe hands.</li>
          </ul>
        </div>

      </div>
      <div
        class="flex items-center card-img  w-full lg:w-[900px] justify-around flex-wrap py-2 gap-5 container mx-auto px-5 lg:px-0">
        <img alt="company logo" class="lazy-image opacity-0  " v-lazy="'/imgs/Logos-Banner (1).png'" />
      </div>
      <div class="max-w-[1020px] px-5 lg:px-0 mx-auto ">
        <h2 class="text-3xl  font-jakarta md:text-[48px]  leading-normal text-white mb-5 font-extrabold">
          Long Distance Moving Areas We Cover in New Jersey</h2>
        <div class="w-[126px] h-[2px] my-5  bg-primary-500"></div>
        <p class="text-[16px] font-rubik text-white md:text-[18px] md:font-[300] md:leading-8">
          Good View Moving and Storage provides reliable long distance moving services across New Jersey, helping
          residents and businesses relocate with ease. Whether you're moving to another part of the state or across
          state lines, our experienced team is here to make the process simple.
        </p>
        <p class="text-[16px] font-rubik text-white md:text-[18px] md:font-[300] md:leading-8">
          We cover, but are not limited to, the following routes:</p>
        <div class="grid grid-cols-1 md:grid-cols-2 my-5  gap-6 mt-6 mb-10">
          <ul
            class="list-disc list-inside md:text-[18px] text-white md:font-[300] md:leading-8 font-rubik mt-4 space-y-2">
            <span class="font-semibold font-jakarta text-[28px] underline underline-offset-2">Jersey City</span>

            <li>Jersey City </li>
            <li>Montclair</li>
            <li>Princeton</li>
            <li>Ridgewood</li>
            <li>Hoboken</li>
          </ul>
          <ul
            class="list-disc list-inside md:text-[18px] text-white md:font-[300] md:leading-8 font-rubik mt-4 space-y-2">
            <li>Newark</li>
            <li>Edison Township</li>
            <li>Paterson</li>
            <li>Summit</li>
            <li>Trenton</li>

          </ul>
        </div>
      </div>

      <div class=" py-4">

        <h2 class="text-3xl font-jakarta md:text-[48px] text-center leading-normal text-white mb-5 font-extrabold">
          What Our Customers Say
        </h2>
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
                      <h3 class=" font-bold text-black text-[32px] tracking-tight">{{ testimonial.name }}</h3>

                    </div>
                  </div>
                  <div class="flex items-center justify-between ">
                    <div class="flex">
                      <span v-for="i in 5" :key="i" class="flex items-center w-[35px] h-[35px] sm:w-[45px] sm:h-[45px]">
                        <svg width="45" height="45" viewBox="0 0 24 24" fill="#FFD700">
                          <polygon
                            points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="relative">

                  <p class="text-black font-[300] text-[16px] leading-relaxed">{{ testimonial.review }} </p>
                </div>
              </div>
            </div>
            <button
              class="absolute left-[1px] top-1/2 -translate-y-1/2 w-[39px] h-[39px] bg-[#ffd343] text-black rounded-full shadow-xl flex items-center justify-center hover:scale-110 transition disabled:opacity-40 z-10"
              @click="prevSlide">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round" />
              </svg>
            </button>
            <button
              class="absolute right-[3px] top-1/2 -translate-y-1/2 w-[39px] h-[39px] bg-[#ffd343] text-black rounded-full shadow-xl flex items-center justify-center hover:scale-110 transition z-10"
              @click="nextSlide">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round" />
              </svg>
            </button>
          </div>
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
    <div class="bg-black">
      <div class=" max-w-[1020px] mx-auto py-6 ">
        <h2 class="text-4xl font-bold mb-4 mt-12 pb-4 text-white font-jakarta">Frequently Aks Questions</h2>
        <div class="space-y-6 text-white">
          <div v-for="(faq, index) in faqs" :key="index" class="bg-[#1e1e1e] rounded-lg">
            <div
              class="border border-[#ffd343] bg-zinc-900 rounded-lg p-5 flex justify-between items-center cursor-pointer"
              @click="toggleFaq(index)">
              <h3 class="font-semibold text-base md:text-lg font-jakarta">{{ faq.question }}</h3>
              <svg
                :class="`w-6 h-6 transition-transform duration-300 transform ${openFaq === index ? 'rotate-180' : ''}`"
                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" :stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <div v-if="openFaq === index" class="p-6">
              <p class="leading-[26px] md:leading-[32px] font-[300] font-rubik">{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>




</template>
<script>
export default {
  data() {
    return {
      openFaq: null,

      currentSlide: 0,
      testimonials: [
        { id: 1, name: "Thomas _.", rating: 5, review: "In my opinion, Goodview Moving and Storage is the best. Everyone on staff was punctual and worked well. Despite being cautious, they wasted no time. My belongings arrived in pristine condition, and I could not be happier with their service." },
        { id: 2, name: "Robert M.", rating: 5, review: "I had to move my furniture into storage for a few months before my new home was ready. I reached out to this company and they came through for me. Their movers labeled and packed everything so well that unpacking later was a breeze. So grateful for their attention to detail!" },
        { id: 3, name: "Melvin C.", rating: 5, review: "Thanks to Goodview Moving and Storage for making our moving experience a breeze. The team worked efficiently. The staff is friendly and easy working with. Clean, fast, with reasonable price. I highly recommend their service!" },
        { id: 4, name: "Thomas R.", rating: 5, review: "Goodview Moving and Storage was so easy to work with. Quotations were received promptly via phone call and text messages and there were no surprise charges like you may have with other movers during final billing. They also helped with assembling furniture. Thanks for a smooth move!" }
      ],
      faqs: [
        {
          question: "What should I know before hiring movers in New Jersey?",
          answer: "Before hiring movers in New Jersey, check that the company is licensed and insured. It’s also helpful to choose movers familiar with New Jersey’s busy roads, narrow streets, and apartment moves."
        },
        {
          question: "Are there reliable moving companies for New Jersey apartment relocations?",
          answer: "Yes, we specialize in apartment moves across New Jersey, We have the expertise in handling building restrictions, parking challenges, and staircases."
        },
        {
          question: "How far in advance should I book movers in New Jersey?",
          answer: "We recommend booking your move 3–4 weeks in advance, especially during busy times like weekends or the end of the month. Early booking ensures you get the date and time that works best for you."
        },
        {
          question: "Do movers in New Jersey provide packing services?",
          answer: "Yes, most professional moving companies, including Good View Moving and Storage, offer full or partial packing services to protect your belongings during transit."
        },
        {
          question: "Can I schedule a last-minute move within New Jersey?",
          answer: "Same-day and last-minute moves are possible depending on availability. Contact Good View Moving and Storage as soon as possible to see how we can help with urgent moves."
        }
      ],
      windowWidth: typeof window !== "undefined" ? window.innerWidth : 1024,
    };
  },
  computed: {
    visibleTestimonials() {
      // Show 1 on mobile, 3 on desktop
      const count = this.windowWidth < 576 ? 1 : this.windowWidth < 1020 ? 2 : 3;
      const arr = [];
      for (let i = 0; i < count; i++) {
        arr.push(this.testimonials[(this.currentSlide + i) % this.testimonials.length]);
      }
      return arr;
    },
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
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
    }
  }
}

</script>