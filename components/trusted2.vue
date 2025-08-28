<template>
  <div class="container mx-auto px-5">
    <h2 class="text-center font-jakarta font-bold text-4xl md:text-5xl md:px-20 text-black">
      Trusted by
    </h2>
    
    <div class="relative  max-w-[1120px] mx-auto">
      <div class="w-full relative">
        <div class="swiper multiple-slide-carousel swiper-container relative">
          <div class="swiper-wrapper ">
            <div class="swiper-slide" v-for="(logo, i) in logos" :key="i">
              <div class="rounded-2xl h-40 sm:h-48 md:h-56 lg:h-64 flex justify-center items-center">
                <img :src="logo" :alt="'client ' + (i+1)" class="h-20 sm:h-24 md:h-28 w-auto object-contain" />
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'
// Swiper imports (ensure `npm i swiper`)
import Swiper from 'swiper'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

const logos = [
  '/imgs/LOGO1.png',
  '/imgs/LOGO2.png',
  '/imgs/LOGO3.png',
  '/imgs/LOGO4.png',
  '/imgs/LOGO5.png',
  '/imgs/LOGO6.png',
  '/imgs/LOGO7.png',
  '/imgs/LOGO8.png',
]

// Swiper instance (declared inside script setup)
let swiperInstance = null

// core state
const viewportEl = ref(null)
const slideWidth = ref(0)
// reactive container width so slidesToShow updates correctly based on slider width
const viewportWidth = ref(1024)
const slidesToShow = computed(() => {
  // SSR safe default: show 3
  if (typeof window === 'undefined') return 3
  const w = viewportWidth.value
  if (w <= 640) return 3
  if (w <= 1024) return 3
  return 5
})

// infinite list with clones
const baseLen = computed(() => logos.length)
const renderLogos = computed(() => {
  const k = slidesToShow.value
  const head = logos.slice(-k)
  const tail = logos.slice(0, k)
  return [...head, ...logos, ...tail]
})
const currentIndex = ref(0) // virtual index across renderLogos
const transitionOn = ref(true)
const autoplayTimer = ref(null)
const autoplayDelay = 3000
const isHovered = ref(false)

// drag
const isDragging = ref(false)
const lastX = ref(0)
const dragAccum = ref(0) // total pointer delta
const dragOffset = ref(0) // visual offset during drag
const dragThreshold = 8 // small movement to trigger 1-step

// layout
const recalc = () => {
  const el = viewportEl.value
  if (!el) return
  // use container width, not global window width
  viewportWidth.value = el.clientWidth
  slideWidth.value = el.clientWidth / slidesToShow.value
}

// translate
const translateX = computed(() => -(currentIndex.value * slideWidth.value) + dragOffset.value)

// navigation
const onSelect = (i) => {
  transitionOn.value = true
  currentIndex.value = i
}
// single-item step (used by overlay button clicks)
const prevOne = () => onSelect(currentIndex.value - 1)
const nextOne = () => onSelect(currentIndex.value + 1)
// page step (used by drag release + autoplay)
const prevPage = () => onSelect(currentIndex.value - slidesToShow.value)
const nextPage = () => onSelect(currentIndex.value + slidesToShow.value)

// seamless snap after crossing clones (no visible reverse)
const snapTo = async (idx) => {
  transitionOn.value = false
  dragOffset.value = 0
  currentIndex.value = idx
  await nextTick()
  // force reflow to ensure class removal is applied before re-enabling transition
  void (viewportEl.value && viewportEl.value.offsetHeight)
  transitionOn.value = true
}

const onTransitionEnd = () => {
  const k = slidesToShow.value
  const start = k
  const endStart = start + baseLen.value
  if (currentIndex.value >= endStart) {
    snapTo(currentIndex.value - baseLen.value)
  } else if (currentIndex.value < start) {
    snapTo(currentIndex.value + baseLen.value)
  }
}

// drag handlers
const onPointerDown = (e) => {
  isDragging.value = true
  lastX.value = e.clientX
  dragAccum.value = 0
  dragOffset.value = 0
  transitionOn.value = false
  stopAutoplay()
}
const onPointerMove = (e) => {
  if (!isDragging.value) return
  const dx = e.clientX - lastX.value
  dragAccum.value += dx
  lastX.value = e.clientX
  dragOffset.value += dx
}
const onPointerUp = () => {
  if (isDragging.value) {
    transitionOn.value = true
    if (Math.abs(dragAccum.value) >= dragThreshold) {
      dragAccum.value < 0 ? nextOne() : prevOne()
    }
  }
  isDragging.value = false
  dragAccum.value = 0
  dragOffset.value = 0
  startAutoplay()
}

// touch
const onTouchStart = (e) => {
  const x = e.touches && e.touches[0] ? e.touches[0].clientX : 0
  isDragging.value = true
  lastX.value = x
  dragAccum.value = 0
  dragOffset.value = 0
  transitionOn.value = false
  stopAutoplay()
}
const onTouchMove = (e) => {
  if (!isDragging.value) return
  const x = e.touches && e.touches[0] ? e.touches[0].clientX : lastX.value
  const dx = x - lastX.value
  dragAccum.value += dx
  lastX.value = x
  dragOffset.value += dx
}

// hover pause
const onHover = (val) => {
  isHovered.value = val
  if (val) stopAutoplay() 
  else startAutoplay()
}

// autoplay control
const startAutoplay = () => {
  if (autoplayTimer.value) return
  autoplayTimer.value = setInterval(() => {
    if (!isDragging.value && !isHovered.value) {
      nextPage()
    }
  }, autoplayDelay)
}
const stopAutoplay = () => {
  if (autoplayTimer.value) {
    clearInterval(autoplayTimer.value)
    autoplayTimer.value = null
  }
}

// combined mouseleave handler to avoid duplicate attribute
const onMouseLeave = () => {
  onPointerUp()
  onHover(false)
}

onMounted(() => {
  // start after head clones (first real slide)
  currentIndex.value = slidesToShow.value
  recalc()
  window.addEventListener('resize', recalc)
  // use Swiper's autoplay instead of legacy timer

  // Initialize Swiper per user's config, with 5 on large, 3 on small
  swiperInstance = new Swiper('.multiple-slide-carousel', {
    modules: [Autoplay],
    loop: true,
    slidesPerView: 3,
    slidesPerGroup: 1,
    spaceBetween: 20,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
      reverseDirection: false,
    },
    breakpoints: {
      1280: { // lg and up
        slidesPerView: 5,
        slidesPerGroup: 1,
        spaceBetween: 30,
      },
      1024: { // md
        slidesPerView: 3,
        slidesPerGroup: 1,
        spaceBetween: 24,
      },
      0: { // small
        slidesPerView: 3,
        slidesPerGroup: 1,
        spaceBetween: 16,
      },
    },
  })
})
onUnmounted(() => {
  window.removeEventListener('resize', recalc)
  stopAutoplay()
  if (swiperInstance) {
    swiperInstance.destroy(true, true)
    swiperInstance = null
  }
})
</script>