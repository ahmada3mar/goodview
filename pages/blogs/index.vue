<template>
    <div class="flex flex-col h-full">
        <Banner background="/imgs/services.jpg" class="md:h-[25rem]" title="Our Blog"
            text="Stay updated with the latest moving tips, guide, checklist and insights.">
            <template #body>
                <form @submit.prevent
                    class="flex items-center gap-2 font-jakarta max-w-lg w-full mx-auto bg-[#171820]  backdrop-blur-md border border-zinc-700 shadow-xl rounded-xl px-2 py-2 sm:px-4 sm:py-3">
                    <div class="relative flex-1 w-full">
                        <input type="search" v-model="searchQuery" placeholder="Search blogs..." id="blog.title"
                            class="w-full bg-zinc-800/80 font-jakarta text-white placeholder-white outline-none px-2 py-2 sm:px-3 sm:py-2 focus:ring-2 focus:ring-primary-500 rounded-lg pr-8" />
                        <button v-if="searchQuery" type="button" @click="searchQuery = ''"
                            class="absolute right-2 top-1/2 -translate-y-1/2 text-white hover:text-primary-500 transition p-0.5"
                            aria-label="Clear search">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <button type="submit" aria-label=" search"
                        class="flex items-center gap-1  bg-black text-primary-500  font-semibold px-3 py-2 sm:px-5 rounded-lg transition-all duration-200 shadow">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" />
                        </svg>

                    </button>
                </form>
            </template>
        </Banner>

        <div v-if="blogs.length > 0" class="bg-white w-full p-3 md:p-10 rounded-none">
            <div class="container">
                <div :ref="el => (scrollElements[0] = el)" :class="{
                    'opacity-100 translate-y-0': isVisible[0],
                    'opacity-0 translate-y-20': !isVisible[0],
                }" class="transition-all duration-1000 ease-in-out bg-white w-full -mt-36 rounded-none">


                </div>

                <div :ref="el => (scrollElements[1] = el)" :class="{
                    'opacity-100 translate-y-0': isVisible[1],
                    'opacity-0 translate-y-20': !isVisible[1],
                }" class="transition-all duration-1000 ease-in-out  w-full  mt-48 rounded-none">

                    <div class="bg-black container flex flex-wrap flex-col  gap-5 -mt-36 rounded-[10px]   p-4 lg:p-10">
                        <!-- Text Section -->
                        <div class="flex-1 flex flex-col">
                            <!-- <h2 class="text-3xl md:text-4xl font-jakarta font-extrabold text-stone-300">Articles</h2> -->
                            <div
                                class="grid grid-cols-1 px-0 sm:px-5 md:px-0 md:grid-cols-2 lg:grid-cols-2 text-white gap-5  my-2 lg:my-10 sm:my-14">
                                <div v-for="blog in paginatedBlogs" :key="blog.id"
                                    class="bg-[#171820] text-white border-0 rounded-[10px] ring-0">
                                    <div class="flex flex-col p-[10px] sm:p-4 xl:flex-row h-full gap-1 max-w-[100%]">
                                        <div class="flex flex-col justify-center xl:max-w-[50%] items-center">
                                            <div class="card-img  ">
                                                <img alt="coverimage"
                                                    class="lazy-image  w-full  transition-opacity duration-500 ease-in-out   rounded-[5px]"
                                                    v-lazy="blog.image">

                                                </img>
                                            </div>

                                        </div>
                                        <div
                                            class="flex flex-col lg:pl-[20px] xl:max-w-[50%] text-start text-xl text-white justify-between">
                                            <div class="lg:min-h-[135px] min-h-[160px]">
                                                <h2 class="font-jakarta font-[600]  mt-3 lg:mt-0 leading-[30px] lg:leading-[35px]  text-[20px] lg:text-[24px] "
                                                    v-html="highlight(blog.title)"></h2>
                                                <p class="text-sm font-jakarta mt-3 text-white">Published Date: {{
                                                    blog.date }}</p>
                                                <p class="text-[16px] font-[300] tracking-[.3px] font-rubik mt-[13px] lg:mt-5 line-clamp-3"
                                                    v-html="highlight(blog.shortDescription)"></p>
                                            </div>
                                            <NuxtLink :to="`/blogs/${blog.slug}/`"
                                                class="text-center rounded-[10px] text-sm font-jakarta mb-0 mt-[25px] bg-black hover:bg-primary-500 hover:text-black transition-all px-12 md:px-16 lg:px-4 xl:px-8 py-3 font-bold w-full lg:w-auto">
                                                Read More
                                            </NuxtLink>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="flex justify-between  w-full">
                            <button v-if="hasPrevPage" @click="prevPage"
                                class="bg-primary-500 border border-primary-500 font-jakarta text-black hover:bg-black hover:text-white px-6 py-2 rounded-lg">
                                Previous
                            </button>
                            <div class="flex-1"></div>
                            <button v-if="hasNextPage" @click="nextPage"
                                class="bg-primary-500 border border-primary-500 font-jakarta text-black hover:bg-black hover:text-white px-6 py-2 rounded-lg">
                                Next
                            </button>
                        </div>
                    </div>

                    <!-- <div v-if="moreBlogs.length > 0"
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
                                                    <h2
                                                        class="font-jakarta font-[600] leading-[35px] text-[24px] truncate">
                                                        {{
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
                        </div> -->


                </div>
            </div>
        </div>
        <div v-else class="bg-white w-full p-3 md:p-10 rounded-none">
            <div class="container">
                <div class="transition-all duration-1000 ease-in-out w-full mt-48 rounded-none">
                    <div class="bg-black container flex flex-wrap flex-col gap-5 -mt-36 rounded-[10px] p-4 lg:p-10">
                        <div class="flex-1 flex flex-col">
                            <div
                                class="grid grid-cols-1 px-0 sm:px-5 md:px-0 md:grid-cols-2 lg:grid-cols-2 gap-5 my-2 lg:my-10 sm:my-14">
                                <div v-for="n in 2" :key="n" class="bg-[#171820] border-0 rounded-[10px] ring-0">
                                    <div class="flex flex-col p-[10px] sm:p-4 xl:flex-row h-full gap-1 min-w-[50%]">
                                        <div class="flex flex-col justify-center items-center">
                                            <div class="card-img w-full h-40 bg-gray-300 animate-pulse rounded-[5px]">
                                            </div>
                                        </div>
                                        <div class="flex flex-col lg:pl-[20px] text-start text-xl justify-between">
                                            <div class="lg:min-h-[135px] min-h-[160px]">
                                                <div class="h-6 bg-gray-400 animate-pulse rounded w-3/4 mt-3 mb-2">
                                                </div>
                                                <div class="h-4 bg-gray-400 animate-pulse rounded w-1/2 mb-2"></div>
                                                <div class="h-4 bg-gray-400 animate-pulse rounded w-full mt-3"></div>
                                            </div>
                                            <div class="h-10 bg-gray-500 animate-pulse rounded mt-6 w-full lg:w-1/2">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            class="flex relative flex-initial md:flex-1 flex-col bg-primary-500 md:gap-10 gap-5 rounded-none p-3 md:p-5 justify-between">
                            <div class="h-10 bg-gray-300 animate-pulse rounded w-1/3 mb-4"></div>
                            <div class="relative w-full overflow-hidden">
                                <div class="flex gap-5">
                                    <div v-for="n in 2" :key="n"
                                        class="min-w-[calc(50%-10px)] bg-[#171820] border-0 rounded-sm ring-0">
                                        <div class="flex flex-col p-[10px] sm:p-4 xl:flex-row h-full gap-1 min-w-[50%]">
                                            <div class="flex flex-col w-full p-4 text-start text-xl justify-between">
                                                <div class="lg:min-h-[135px] min-h-[200px]">
                                                    <div class="h-6 bg-gray-400 animate-pulse rounded w-3/4 mb-2"></div>
                                                    <div class="h-4 bg-gray-400 animate-pulse rounded w-full mt-3">
                                                    </div>
                                                </div>
                                                <div
                                                    class="h-10 bg-gray-500 animate-pulse rounded mt-6 w-full lg:w-1/2">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="flex gap-5 justify-center mt-4">
                                <div class="w-10 h-10 bg-gray-400 animate-pulse rounded"></div>
                                <div class="w-10 h-10 bg-gray-400 animate-pulse rounded"></div>
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
import { subMinutes } from 'date-fns'

useHead({
    title: "Moving Blog - Expert Advice ",
    meta: [
        { name: "description", content: " Read our moving blog for expert advice, helpful tips, and resources to make your move easier. Stay informed with the latest moving industry insights. " },
    ]
})


const blogs = ref([])
const pageSize = 10     // Set page size to 10
const currentPage = ref(1)
const searchQuery = ref("")

// Single fetchBlogs function
const fetchBlogs = () => {
    $fetch(`https://api.goodview-moving.com/api/blogs`).then(res => {
        blogs.value = res
        console.log('Fetched blogs:', res.length)
    })
}

// Computed property for filtered blogs
const filteredBlogs = computed(() => {
    if (!searchQuery.value) return blogs.value
    const q = searchQuery.value.toLowerCase()
    return blogs.value.filter(blog =>
        (blog.title && blog.title.toLowerCase().includes(q)) ||
        (blog.shortDescription && blog.shortDescription.toLowerCase().includes(q)) ||
        (blog.description && blog.description.toLowerCase().includes(q)) ||
        (blog.id && String(blog.id).toLowerCase().includes(q))
    )
})

// Computed properties for pagination
const paginatedBlogs = computed(() => {
    const start = (currentPage.value - 1) * pageSize
    const end = start + pageSize
    return filteredBlogs.value.slice(start, end)
})

const hasNextPage = computed(() => {
    const nextSlice = filteredBlogs.value.slice(currentPage.value * pageSize)
    return nextSlice.length > 0
})

const hasPrevPage = computed(() => currentPage.value > 1)

// Navigation methods
const nextPage = () => {
    if (hasNextPage.value) {
        currentPage.value++
    }
}

const prevPage = () => {
    if (hasPrevPage.value) {
        currentPage.value--
    }
}

const isVisible = ref([false, false, false])
const scrollElements = ref([])

const query = useRoute()

// const fetchBlogs = () => {
//     $fetch(`https://api.goodview-moving.com/api/blogs`).then(res => {
//         blogs.value = res
//     })

// }

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
onMounted(() => {
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

function highlight(text) {
    if (!searchQuery.value || !text) return text;
    const q = searchQuery.value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // escape regex
    return text.replace(new RegExp(q, 'gi'), match => `<mark>${match}</mark>`);
}

// const regularBlogs = computed(() => blogs.value.slice(0, 10))
// const moreBlogs = computed(() => blogs.value.slice(10))

// const isVisible = ref([false, false, false])
// const scrollElements = ref([])
// const currentSlide = ref(0)
// const slidesPerView = 2

// const prevSlide = () => {
//     if (currentSlide.value > 0) {
//         currentSlide.value--
//     }
// }

// const nextSlide = () => {
//     const maxSlides = Math.ceil(regularBlogs.value.length / slidesPerView) - 1
//     if (currentSlide.value < maxSlides) {
//         currentSlide.value++
//     }
// }

// const query = useRoute()
</script>

<style scoped>
/* Hide default clear (X) button in Chrome, Safari, Edge */
input[type="search"]::-webkit-search-cancel-button {
    -webkit-appearance: none;
    appearance: none;
    display: none;
}
</style>
