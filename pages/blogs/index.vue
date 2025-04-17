<template>
    <div class="flex flex-col h-full">
        <Banner background="/assets/services.jpg" class="md:h-[25rem]" title="Our Blog"
            text="Stay updated with the latest news, tips, and insights about moving and relocation services." />

        <div class="container bg-white lg:mx-auto px-2 sm:px-10 py-10 mb-32">
            <div class="flex flex-col md:flex-row items-center mx-auto gap-6">
                <!-- Text Section -->
                <div class="md:w-2/3">
                    <h2 class="text-3xl font-jakarta md:text-4xl mb-5 font-extrabold">Latest Articles and Insights</h2>
                    <p class="text-lg font-rubik md:text-[18px] md:font-[300] md:leading-8">
                        Stay informed with our latest articles and insights about moving, storage, and relocation
                        services. Our blog is your go-to resource for expert advice and industry updates.
                    </p>
                </div>
            </div>
        </div>

        <div v-if="blogs.length > 0" class="bg-primary-500 w-full p-3 md:p-10 rounded-none">
            <div class="container">
                <div :ref="el => (scrollElements[0] = el)" :class="{
                    'opacity-100 translate-y-0': isVisible[0],
                    'opacity-0 translate-y-20': !isVisible[0],
                }" class="transition-all duration-1000 ease-in-out bg-primary-500 w-full -mt-36 rounded-none">

                <div class="bg-black flex flex-col gap-5 justify-center  rounded-[10px] p-10">
                    <!-- Text Section -->
                    <div class="flex-1 flex flex-col">
                        <h2 class="text-3xl md:text-4xl font-jakarta font-extrabold mb-10 text-stone-300">Featured
                            Articles</h2>

                        <div>
                            <div class="bg-[#171820] text-white border-0 rounded-sm ring-0 w-full">
                                <div class="flex flex-col gap-5 p-[10px] sm:p-4 xl:flex-row h-full ">
                                    <div class="card-img h-full py-4 w-full ">
                                        <div  class="lazy-image md:h-80 h-52 w-full  transition-opacity duration-500 ease-in-out  bg-center object-cover bg-cover bg-no-repeat rounded-[5px]" v-lazy:background-image="featuredBlogs[0].image" >

                                        </div>
                                
                                    </div>
                                    <div class="flex flex-col justify-between p-4 text-start text-xl text-white w-full">
                                        <div class="lg:min-h-[135px] min-h-[200px]">
                                            <h2 class="font-jakarta font-[600] leading-[35px] text-[24px]">{{
                                                featuredBlogs[0].title }}</h2>
                                            <p class="text-[16px] font-[300] tracking-[.3px] text-wrap font-rubik mt-5">
                                                {{ featuredBlogs[0].excerpt }}
                                            </p>
                                        </div>
                                        <NuxtLink :to="`/blogs/${featuredBlogs[0].slug}`"
                                            class="text-center rounded-[10px] text-sm font-jakarta mb-0 mt-[25px] bg-black hover:bg-primary-500 hover:text-black transition-all px-12 md:px-16 lg:px-4 xl:px-8 py-3 font-bold w-full lg:w-auto">
                                            Read More
                                        </NuxtLink>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Featured Blogs Section -->
                        <div class="mt-8">
                            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                                <div v-for="blog in featuredBlogs.slice(1)" :key="blog.id"
                                    class="bg-[#171820] text-white border-0 rounded-sm ring-0">
                                    <div class="flex flex-col p-[10px] sm:p-4 xl:flex-row h-full gap-1">
                                        <div class="card-img h-full py-4  w-full">
                                        <div  class="lazy-image md:h-80 h-52 w-full  transition-opacity duration-500 ease-in-out  bg-center  object-cover bg-cover bg-no-repeat rounded-[5px]" v-lazy:background-image="blog.image" >

                                        </div>
                                
                                    </div>
                                        <div
                                            class="flex flex-col xl:w-1/2 p-4 text-start text-xl text-white justify-between">
                                            <div class="lg:min-h-[135px] min-h-[200px]">
                                                <h2 class="font-jakarta font-[600] leading-[35px] text-[24px]">{{
                                                    blog.title }}</h2>
                                                <p
                                                    class="text-[16px] font-[300] tracking-[.3px] text-wrap font-rubik mt-5">
                                                    {{ blog.excerpt }}
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
                </div>

                </div>
     
                <div v-if="regularBlogs.length > 0" :ref="el => (scrollElements[1] = el)" :class="{
                    'opacity-100 translate-y-0': isVisible[1],
                    'opacity-0 translate-y-20': !isVisible[1],
                }" class="transition-all duration-1000 ease-in-out bg-primary-500 w-full  mt-48 rounded-none">

                    <div class="bg-black container flex flex-wrap flex-col  gap-5 -mt-36 rounded-[10px]   p-10">


                        <!-- Text Section -->
                        <div class="flex-1 flex flex-col">
                            <h2 class="text-3xl md:text-4xl font-jakarta font-extrabold text-stone-300">Articles</h2>
                            <div
                                class="grid grid-cols-1 px-0 sm:px-5 md:px-0 md:grid-cols-2 lg:grid-cols-2 text-white gap-5 my-10 sm:my-14">
                                <div v-for="blog in regularBlogs" :key="blog.id"
                                    class="bg-[#171820] text-white border-0 rounded-sm ring-0">
                                    <div class="flex flex-col p-[10px] sm:p-4 xl:flex-row h-full gap-1">
                                        <div class="card-img h-full py-4 w-full">
                                            <div  class="lazy-image md:h-80 h-52 w-full  transition-opacity duration-500 ease-in-out  bg-center object-cover bg-cover bg-no-repeat rounded-[5px]" v-lazy:background-image="blog.image" >

                                            </div>
                                        </div>
                                        <div
                                            class="flex flex-col xl:w-1/2 p-4 text-start text-xl text-white justify-between">
                                            <div class="lg:min-h-[135px] min-h-[200px]">
                                                <h2 class="font-jakarta font-[600] leading-[35px] text-[24px]">{{
                                                    blog.title }}</h2>
                                                <p
                                                    class="text-[16px] font-[300] tracking-[.3px] text-wrap font-rubik mt-5">
                                                    {{ blog.excerpt }}
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
                            class="flex relative flex-initial md:flex-1 flex-col bg-primary-500 md:gap-10 gap-5 rounded-none p-3 md:p-5 justify-between">
                            <h2 class="text-3xl md:text-4xl font-jakarta font-extrabold text-black">More Articles</h2>

                            <div class="relative w-full overflow-hidden">
                                <div class="flex gap-5 transition-transform duration-300"
                                    :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
                                    <div v-for="blog in moreBlogs" :key="blog.id"
                                        class="min-w-[calc(50%-10px)] bg-[#171820] text-white border-0 rounded-sm ring-0">
                                        <div class="flex flex-col p-[10px] sm:p-4 xl:flex-row h-full gap-1">

                                            <div
                                                class="flex flex-col w-full p-4 text-start text-xl text-white justify-between">
                                                <div class="lg:min-h-[135px] min-h-[200px]">
                                                    <h2 class="font-jakarta font-[600] leading-[35px] text-[24px]">{{
                                                        blog.title }}</h2>
                                                    <p
                                                        class="text-[16px] font-[300] tracking-[.3px] text-wrap font-rubik mt-5">
                                                        {{ blog.excerpt }}
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



                    <div :ref="el => (scrollElements[2] = el)" :class="{
                        'opacity-100 translate-y-0': isVisible[2],
                        'opacity-0 translate-y-20': !isVisible[2],
                    }"
                        class="transition-all duration-1000 ease-in-out bg-primary-500 w-full p-3 md:p-10  rounded-none">




                        <Trusted />
                    </div>





                </div>
            </div>
        </div>
    </div>
</template>



<script setup>

const blogs = ref([])
const featuredBlogs = computed(() => blogs.value.filter(blog => blog.featured))
const regularBlogs = computed(() => blogs.value.filter(blog => !blog.featured).slice(0, 4))
const moreBlogs = computed(() => blogs.value.filter(blog => !blog.featured).slice(4))

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

// Fetch blogs data
const fetchBlogs = async () => {
    try {
        const { data } = await useFetch('https://api.goodview-moving.com/api/blogs')
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
</script>