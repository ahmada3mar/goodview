<template>
  <div>
    <div class="relative bg-cover bg-center overflow-hidden  lg:h-[650px] flex items-center justify-center"
      style="background-image: url('/imgs/New-York.webp')">
      <div class="absolute inset-0 !bg-gradient-to-t !from-black/80 !to-black/80"></div>
      <div class="flex flex-row max-w-[1360px] w-full  mx-auto justify-between items-center">
        <!-- Left side: Title/Description -->
        <div
          class="relative flex flex-col items-baseline justify-center text-center gap-6 px-5 py-10 container  h-full">
          <h1
            class="text-white text-[30px] sm:text-[40px] lg:text-[52px] font-extrabold leading-[64px] text-left font-jakarta">
            Moving Services in <br> New York
          </h1>
          <p class="text-white text-left text-[16px] md:text-[18px] font-light max-w-3xl font-jakarta leading-[2rem]">
            Planning a move in New York? Good View Moving and Storage is here to help make the process easy,
            stress-free, and efficient.
          </p>
          <p class="text-white text-left text-[16px] md:text-[18px] font-light max-w-3xl font-jakarta leading-[2rem]">
            We understand the challenges of moving in busy New York neighborhoods — from navigating narrow streets to
            handling high-rise buildings. That's why our experienced team is dedicated to providing reliable and
            affordable moving services tailored to your specific needs.
          </p>

          <p class="text-white text-left text-[16px] md:text-[18px] font-light max-w-3xl font-jakarta leading-[2rem]">
            Whether you’re relocating your home, apartment, or business, we take care of every detail to ensure your
            move is smooth from start to finish. </p>
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
              Full-Service Movers, You Can Count On</h2>
            <div class="w-[126px] h-[2px] my-5 mx-auto bg-primary-500"></div>
            <p class="text-[16px] font-rubik text-white md:text-[18px] md:font-[300] md:leading-8">
              At Good View Moving and Storage, we understand that every move is an important step — and we're here to
              make it easier for you. Serving customers across New York, our team offers reliable and affordable moving
              services with a personal touch.
            </p>
            <p class="text-[16px] font-rubik text-white md:text-[18px] md:font-[300] md:leading-8">
              Whether you're moving your home, apartment, or office, we handle every detail with care. Our movers are
              familiar with the streets, neighborhoods, and unique challenges of New York, and they work diligently to
              ensure your belongings arrive safely and on time.</p>
            <div class="mt-[40px] !text-center">
              <QuoteInputs :is-visible="true" />
            </div>

          </div>

        </div>
      </div>
    </div>


    <div class="bg-black">

      <div class="flex flex-col px-5 lg:px-0 container md:flex-row items-center pt-[80px] mx-auto gap-[4.5rem]">

        <!-- Image Section (Left - 40%) -->
        <div class="w-full md:w-[40%] card-img">
          <img alt="About us"
            class="lazy-image opacity-0 rounded-[10px] transition-opacity duration-500 ease-in-out w-full h-full object-cover"
            v-lazy="'/imgs/new-york2.webp'" />
        </div>

        <!-- Text Section (Right - 60%) -->
        <div class="w-full md:w-[60%]">
          <h2 class="text-3xl font-jakarta md:text-[48px] leading-normal text-white mb-5 font-extrabold">
            Why New York Clients Choose Good View Moving ?</h2>
          <p class="text-[16px] font-rubik text-white md:text-[18px] md:font-[300] md:leading-8">
            When it comes to finding trusted movers in New York, Good View Moving and Storage is the name people rely
            on.
          </p>
          <p class="text-[16px] font-rubik text-white md:text-[18px] md:font-[300] md:leading-8 mt-4">
            We’ve earned our reputation by delivering smooth, efficient, and stress-free moves for homes and businesses
            across the state. Here’s what sets us apart:
          </p>
          <ul
            class="list-inside text-[16px] md:text-[18px] text-white md:font-[300] md:leading-8 font-rubik mt-4 space-y-2">
            <li><span class="text-primary-500">✔ &nbsp;</span><span class="font-semibold">
                Skilled New York Movers </span> – A team that understands the challenges of moving in New York.</li>
            <li><span class="text-primary-500">✔ &nbsp;</span><span class="font-semibold">
                Clear, Upfront Pricing </span> – Honest, competitive rates with no hidden costs.</li>
            <li><span class="text-primary-500">✔ &nbsp;</span><span class="font-semibold">
                Complete Moving Services </span> – We handle everything from packing to storage</li>
            <li><span class="text-primary-500">✔ &nbsp;</span><span class="font-semibold">
                Local & Interstate Moving</span> – Whether you're moving within New York or across state lines. </li>
            <li><span class="text-primary-500">✔ &nbsp;</span><span class="font-semibold">
                Fully Licensed & Insured</span> – Giving you peace of mind with every move.</li>
          </ul>
        </div>

      </div>
      <div
        class="flex items-center card-img  w-full lg:w-[900px] justify-around flex-wrap py-2 gap-5 container mx-auto px-5 lg:px-0">
        <img alt="company logo" class="lazy-image opacity-0  " v-lazy="'/imgs/Logos-Banner (1).png'" />
      </div>
      <div class="max-w-[1020px] px-5 lg:px-0 mx-auto">
        <h2 class="text-3xl  font-jakarta md:text-[48px]  leading-normal text-white mb-5 font-extrabold">
          Services We Provide in New York</h2>
        <div class="w-[126px] h-[2px] my-5  bg-primary-500"></div>

        <p class="text-[16px] font-rubik text-white md:text-[18px] md:font-[300] md:leading-8">
          At Good View Moving and Storage, we offer a full range of professional moving services to make your relocation
          smooth and hassle-free. Here’s what we can help you with:
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <ul
            class="list-disc list-inside md:text-[18px] text-white md:font-[300] md:leading-8 font-rubik mb-7 mt-4 space-y-2">

            <li>Residential Moving</li>
            <li>Commercial Moving</li>
            <li>Packing and Unpacking</li>
            <li>Furniture Assembly and Disassembly</li>
            <li>Long Distance Moving</li>
            <li>Specialty Moving</li>
            <li>Storage Units</li>
          </ul>

        </div>
      </div>
      <div class="max-w-[1020px] px-5 lg:px-0 mx-auto ">
        <h2 class="text-3xl  font-jakarta md:text-[48px]  leading-normal text-white mb-5 font-extrabold">
          Moving Areas We Cover in New York</h2>
        <div class="w-[126px] h-[2px] my-5  bg-primary-500"></div>
        <p class="text-[16px] font-rubik text-white md:text-[18px] md:font-[300] md:leading-8">
          Good View Moving and Storage proudly offers trusted moving services throughout New York. Whether you’re moving
          within the city, across the state, or beyond, our skilled team is ready to make your move smooth and
          hassle-free.
        </p>
        <p class="text-[16px] font-rubik text-white md:text-[18px] md:font-[300] md:leading-8">
          We serve, but are not limited to, the following areas: </p>
        < <div class="grid grid-cols-1 md:grid-cols-2 my-5  gap-6 mt-6 mb-10">
          <ul
            class="list-disc list-inside md:text-[18px] text-white md:font-[300] md:leading-8 font-rubik mt-4 space-y-2">

            <li>New York City</li>
            <li>Kiryas Joel </li>
            <li>New Rochelle</li>
            <li>Harrison</li>
            <li>Albany</li>
            <li>Buffalo</li>
          </ul>
          <ul
            class="list-disc list-inside md:text-[18px] text-white md:font-[300] md:leading-8 font-rubik mt-4 space-y-2">
            <li>Rochester</li>
            <li>Syracuse</li>
            <li>Schenectady</li>
            <li>Ithaca</li>
            <li>Massapequa Park</li>
            <li>Greece</li>
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
          Get Your Free Moving Estimate Today </h2>
        <p class="text-[16px] font-rubik text-white md:text-[18px] md:font-[300] md:leading-8">
          Moving in New York? Let Good View Moving and Storage take the stress out of the process. Contact us today for
          a free, no-obligation quote and see how easy moving can be with experienced professionals by your side.
        </p>
        <p class="text-[16px] font-rubik text-white md:text-[18px] md:font-[300] md:leading-8 mt-4">
          Our team is here to answer your questions and guide you through every step of your move.
        </p>
        <p class="text-[16px] font-rubik text-white md:text-[18px] md:font-bold md:leading-8 mt-4">
          Call us or request your free estimate online — let Good View Moving and Storage make your next move simple
          and worry-free!
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
            <svg :class="`w-6 h-6 transition-transform duration-300 transform ${openFaq === index ? 'rotate-180' : ''}`"
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
          question: "How much does it cost to hire movers in New York?",
          answer: "To choose a reliable moving company in New York, look for licensed and insured movers with positive customer reviews and transparent pricing. We provide trusted and professional services in New York and across the state."
        },
        {
          question: "How much does it cost to hire movers in New York?",
          answer: "Moving costs in New York depends on factors such as distance, the size of your move, and additional services like packing or storage. We offer free, upfront estimates so you know exactly what to expect."
        },
        {
          question: "Do moving companies in New York offer packing services?",
          answer: "Yes, many professional moving companies, including Good View Moving and Storage, offer both full and partial packing services to help protect your belongings during the move."
        },
        {
          question: "Can I hire movers for a same-day or last-minute move in New York?",
          answer: "Same-day or last-minute moves may be available, depending on scheduling. We recommend contacting movers as early as possible to check availability."
        },
        {
          question: "Do movers in New York handle both local and long-distance moves?",
          answer: "Yes, we offer both local moves within New York and long-distance relocations across state lines, providing reliable service for both homes and businesses."
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