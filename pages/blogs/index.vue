<template>
    <div class="flex flex-col h-full">
        <Banner background="/assets/services.jpg" class="md:h-[25rem]" title="Our Blog"
            text="Stay updated with the latest moving tips, guide, checklist and insights." />



        <div v-if="blogs.length > 0" class="bg-white w-full p-3 md:p-10 rounded-none">
            <div class="container">
                <div :ref="el => (scrollElements[0] = el)" :class="{
                    'opacity-100 translate-y-0': isVisible[0],
                    'opacity-0 translate-y-20': !isVisible[0],
                }" class="transition-all duration-1000 ease-in-out bg-white w-full -mt-36 rounded-none">

                <!-- <div class="bg-black flex flex-col gap-5 justify-center  rounded-[10px] p-10">

                    <div class="flex-1 flex flex-col">
                        <h2 class="text-3xl md:text-4xl font-jakarta font-extrabold mb-10 text-stone-300">Featured
                            Articles</h2>

                        <div>
                            <div class="bg-[#171820] text-white border-0 rounded-sm ring-0 w-full">
                                <div class="flex flex-col gap-5 p-[10px] sm:p-4 xl:flex-row h-full min-w-[50%] ">
                                    <div  class="card-img-hover h-full  w-full">
                                        <div  class="lazy-image md:h-60 h-36 w-full  transition-opacity duration-500 ease-in-out  bg-center object-cover bg-cover bg-no-repeat rounded-[5px]" v-lazy:background-image="regularBlogs[0].image" >

                                        </div>

                                    </div>
                                    <div class="flex flex-col justify-between p-4 text-start text-xl text-white w-full">
                                        <div class="lg:min-h-[135px] min-h-[200px]">
                                            <h2 class="font-jakarta font-[600] leading-[35px] text-[24px] truncate">{{
                                                regularBlogs[0].title }}</h2>
                                            <p class="text-[16px] font-[300] tracking-[.3px] text-wrap font-rubik mt-5 truncate">
                                                {{ regularBlogs[0].shortDescription }}
                                            </p>
                                        </div>
                                        <NuxtLink :to="`/blogs/${regularBlogs[0].slug}`"
                                            class="text-center rounded-[10px] text-sm font-jakarta mb-0 mt-[25px] bg-black hover:bg-primary-500 hover:text-black transition-all px-12 md:px-16 lg:px-4 xl:px-8 py-3 font-bold w-full lg:w-auto">
                                            Read More
                                        </NuxtLink>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="mt-8">
                            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                                <div v-for="blog in regularBlogs.slice(1)" :key="blog.id"
                                    class="bg-[#171820] text-white border-0 rounded-sm ring-0">
                                    <div class="flex flex-col p-[10px] sm:p-4 xl:flex-row h-full gap-1 min-w-[50%]">
                                        <div class="card-img-hover h-full  w-full">
                                        <div  class="lazy-image md:h-60 h-36 w-full  transition-opacity duration-500 ease-in-out  bg-center  object-cover bg-cover bg-no-repeat rounded-[5px]" v-lazy:background-image="blog.image" >

                                        </div>

                                    </div>
                                        <div
                                            class="flex flex-col xl:w-1/2 p-4 text-start text-xl text-white justify-between">
                                            <div class="lg:min-h-[135px] min-h-[200px]">
                                                <h2 class="font-jakarta font-[600] leading-[35px] text-[24px] truncate">{{
                                                    blog.title }}</h2>
                                                <p
                                                    class="text-[16px] font-[300] tracking-[.3px] text-wrap font-rubik mt-5 truncate">
                                                    {{ blog.shortDescription }}
                                                </p>
                                            </div>
                                            <NuxtLink :to="`/blogs/${blog.slug}`"
                                                class="text-center rounded-[10px] text-sm font-jakarta mb-0 mt-[25px] bg-black hover:bg-primary-500 hover:text-black transition-all px-12 md:px-16 lg:px-4 xl:px-8 py-3 font-bold w-full lg:w-auto">
                                                Read More
                                            </NuxtLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div> -->













                </div>

                <div v-if="regularBlogs.length > 0" :ref="el => (scrollElements[1] = el)" :class="{
                    'opacity-100 translate-y-0': isVisible[1],
                    'opacity-0 translate-y-20': !isVisible[1],
                }" class="transition-all duration-1000 ease-in-out  w-full  mt-48 rounded-none">

                    <div class="bg-black container flex flex-wrap flex-col  gap-5 -mt-36 rounded-[10px]   p-4 lg:p-10">


                        <!-- Text Section -->
                        <div class="flex-1 flex flex-col">
                            <!-- <h2 class="text-3xl md:text-4xl font-jakarta font-extrabold text-stone-300">Articles</h2> -->
                            <div
                                class="grid grid-cols-1 px-0 sm:px-5 md:px-0 md:grid-cols-2 lg:grid-cols-2 text-white gap-5  my-2 lg:my-10 sm:my-14">
                                <div v-for="blog in regularBlogs" :key="blog.id"
                                    class="bg-[#171820] text-white border-0 rounded-[10px] ring-0">
                                    <div class="flex flex-col p-[10px] sm:p-4 xl:flex-row h-full gap-1 min-w-[50%]">
                                        <div class="flex flex-col justify-center items-center" >
                                        <div class="card-img  ">
                                            <img alt="coverimage" class="lazy-image  w-full  transition-opacity duration-500 ease-in-out   rounded-[5px]" v-lazy="blog.image" >

                                        </img>
                                        </div>

                                    </div>
                                        <div
                                            class="flex flex-col lg:pl-[20px] text-start text-xl text-white justify-between">
                                            <div class="lg:min-h-[135px] min-h-[160px]">
                                                <h2 class="font-jakarta font-[600]  mt-3 lg:mt-0 leading-[30px] lg:leading-[35px]  text-[20px] lg:text-[24px] ">{{
                                                    blog.title }}</h2>
                                                     <p class="text-sm font-jakarta mt-3 text-white">Published Date: {{ blog.date }}</p>
                                              <p class="text-[16px] font-[300] tracking-[.3px] font-rubik mt-[13px] lg:mt-5 line-clamp-3">
    {{ blog.shortDescription }}
</p>
                                            </div>
                                            <NuxtLink :to="`/blogs/${blog.slug}`"
                                                class="text-center rounded-[10px] text-sm font-jakarta mb-0 mt-[25px] bg-black hover:bg-primary-500 hover:text-black transition-all px-12 md:px-16 lg:px-4 xl:px-8 py-3 font-bold w-full lg:w-auto">
                                                Read More
                                            </NuxtLink>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div
                            v-if="moreBlogs.length > 0"
                            class="flex relative flex-initial md:flex-1 flex-col bg-primary-500 md:gap-10 gap-5 rounded-none p-3 md:p-5 justify-between">
                            <h2 class="text-3xl md:text-4xl font-jakarta font-extrabold text-black">More Articles</h2>

                            <div class="relative w-full overflow-hidden">
                                <div class="flex gap-5 transition-transform duration-300"
                                    :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
                                    <div v-for="blog in moreBlogs" :key="blog.id"
                                        class="min-w-[calc(50%-10px)] bg-[#171820] text-white border-0 rounded-sm ring-0">
                                        <div class="flex flex-col p-[10px] sm:p-4 xl:flex-row h-full gap-1 min-w-[50%]">

                                            <div
                                                class="flex flex-col w-full p-4 text-start text-xl text-white justify-between">
                                                <div class="lg:min-h-[135px] min-h-[200px]">
                                                    <h2 class="font-jakarta font-[600] leading-[35px] text-[24px] truncate">{{
                                                        blog.title }}</h2>
                                                    <p
                                                        class="text-[16px] font-[300] tracking-[.3px] text-wrap font-rubik mt-5 truncate">
                                                        {{ blog.shortDescription }}
                                                    </p>
                                                </div>
                                                <NuxtLink :to="`/blogs/${blog.slug}`"
                                                    class="text-center rounded-[10px] text-sm font-jakarta mb-0 mt-[25px] bg-black hover:bg-primary-500 hover:text-black transition-all px-12 md:px-16 lg:px-4 xl:px-8 py-3 font-bold w-full lg:w-auto">
                                                    Read More
                                                </NuxtLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Navigation Buttons -->

                            </div>
                            <div class="flex gap-5 justify-center">

                                <button @click="prevSlide" :class="{
                                    'opacity-50': currentSlide === 0,
                                    'hover:border-black hover:bg-primary': currentSlide !== 0,
                                }" class=" bg-black border border-transparent text-white p-2 z-10"
                                    :disabled="currentSlide === 0">
                                    <div class="flex">
                                        <UIcon name="i-heroicons-chevron-left-20-solid" class="w-6 h-6" />
                                    </div>
                                </button>
                                <button @click="nextSlide" :class="{
                                    'opacity-50': currentSlide >= Math.ceil(regularBlogs.length / slidesPerView) - 1,
                                    'hover:border-black hover:bg-primary': currentSlide < Math.ceil(regularBlogs.length / slidesPerView) - 1,
                                }" class=" bg-black border border-transparent text-white p-2 z-10"
                                    :disabled="currentSlide >= Math.ceil(regularBlogs.length / slidesPerView) - 1">
                                    <div class="flex">
                                        <UIcon name="i-heroicons-chevron-right-20-solid" class="w-6 h-6" />
                                    </div>
                                </button>
                            </div>
                        </div>



                    </div>








                </div>
            </div>
        </div>
        <Trusted />
    </div>
</template>



<script setup>

const blogs = ref([])
const regularBlogs = computed(() => blogs.value.slice(0, 4))
const moreBlogs = computed(() => blogs.value.slice(4))

const isVisible = ref([false, false, false])
const scrollElements = ref([])
const currentSlide = ref(0)
const slidesPerView = 2

const prevSlide = () => {
    if (currentSlide.value > 0) {
        currentSlide.value--
    }
}

const nextSlide = () => {
    const maxSlides = Math.ceil(regularBlogs.value.length / slidesPerView) - 1
    if (currentSlide.value < maxSlides) {
        currentSlide.value++
    }
}

const query = useRoute()
// Fetch blogs data
const fetchBlogs = async () => {
    try {
        const { data } = await useFetch(`https://api.goodview-moving.com/api/blogs`)
        if (data.value) {
            blogs.value = data.value
        }
    } catch (error) {
        console.error('Error fetching blogs:', error)
    }
}

// Intersection Observer setup
const setupIntersectionObserver = () => {
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

    return observer
}

// Lifecycle hooks
onBeforeMount(() => {
    fetchBlogs()
})

onUpdated(() => {
    const observer = setupIntersectionObserver()
    window.addEventListener('resize', () => {
        currentSlide.value = 0
    })

    onUnmounted(() => {
        observer.disconnect()
        window.removeEventListener('resize', () => {
            currentSlide.value = 0
        })
    })
})




function updateGradients(e) {
  const elements = document.querySelectorAll('.card-img-hover')

  elements.forEach(el => {
    const rect = el.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100

    el.style.setProperty('--x', `${x}%`)
    el.style.setProperty('--y', `${y}%`)
  })
}

onMounted(() => {
  window.addEventListener('mousemove', updateGradients)
})

onBeforeUnmount(() => {
  window.removeEventListener('mousemove', updateGradients)
})


</script>

