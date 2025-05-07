<template>

    <div v-if="blog.id" class="bg-white" id="blog-page">
        <div>
            <!-- Hero Section -->
            <div class="relative w-full h-auto md:h-[20rem] overflow-hidden "
                style="background: linear-gradient(26deg, rgb(2 2 2), rgb(0 0 0), rgb(255 211 78));">
                <div class="absolute inset-0 bg-black/20"></div>

                <!-- Animated Header -->
                <div
                    class="relative z-10 flex flex-col justify-center text-left px-5 py-10 h-full max-w-[1100px] mx-auto gap-4 transition-all duration-700 ease-in-out">
                    <h1 class="text-white text-3xl md:text-4xl font-bold font-jakarta">
                        {{ blog.title }}
                    </h1>

                    <!-- Breadcrumb -->
                    <nav class="text-white  text-[18px] lg:text-[22px] font-rubik space-x-1 mt-2">
                        <span>
                            <NuxtLink to="/" class="hover:underline">Home</NuxtLink>
                        </span> /
                        <span>
                            <NuxtLink to="/blogs" class="hover:underline">Blogs</NuxtLink>
                        </span> /
                        <span class="text-white">{{ blog.title }}</span>
                    </nav>
                    <div class="flex items-start  flex-col">
                        <p class="font-semibold font-rubik text-white">{{ blog.author }}</p>
                        <p class="text-sm text-white font-rubik">Published Date: {{ blog.date }}</p>
                    </div>
                    <div class="flex items-center lg:gap-4  gap-2 mt-4">
                        <p class="lg:text-[22px] text-[18px] text-white font-rubik font-normal">Share:</p>
                        <div class="flex items-center gap-1 lg:gap-3">
                            <ULink
                                :to="`https://www.facebook.com/sharer/sharer.php?u=https://goodview-moving.com/blogs/${id}`"
                                aria-label="share Goodview Moving on Facebook" target="_blank"
                                class="text-white hover:underline">
                                <UIcon name="i-mdi-facebook" class="w-[30px] h-[30px] text-primary-500" />
                            </ULink>

                            <ULink
                                :to="`https://twitter.com/intent/tweet?url=https://goodview-moving.com/blogs/${id}&text=${encodeURIComponent(blog.title)}`"
                                aria-label="share Goodview Moving on Twitter" target="_blank"
                                class="text-white hover:underline">
                                <UIcon name="i-mdi-twitter" class="w-[30px] h-[30px] text-primary-500" />
                            </ULink>

                            <ULink
                                :to="`https://api.whatsapp.com/send?text=${encodeURIComponent(blog.title)} https://goodview-moving.com/blogs/${id}`"
                                aria-label="share Goodview Moving on WhatsApp" target="_blank"
                                class="text-white hover:underline">
                                <UIcon name="i-mdi-whatsapp" class="w-[30px] h-[30px] text-primary-500" />
                            </ULink>

                            <ULink
                                :to="`https://pinterest.com/pin/create/button/?url=https://goodview-moving.com/blogs/${id}&media=${blog.image}&description=${encodeURIComponent(blog.title)}`"
                                target="_blank" class="text-white hover:underline"
                                aria-label="share Goodview Moving on Pinterest">
                                <UIcon name="i-mdi-pinterest" class="w-[30px] h-[30px] text-primary-500" />
                            </ULink>

                            <ULink
                                :to="`https://reddit.com/submit?url=https://goodview-moving.com/blogs/${id}&title=${encodeURIComponent(blog.title)}`"
                                aria-label="share Goodview Moving on Reddit" target="_blank"
                                class="text-white hover:underline">
                                <UIcon name="i-mdi-reddit" class="w-[30px] h-[30px] text-primary-500" />
                            </ULink>
                            <ULink
                                :to="`https://www.linkedin.com/sharing/share-offsite/?url=https://goodview-moving.com/blogs/${id}`"
                                aria-label="share Goodview Moving on LinkedIn" target="_blank"
                                class="text-white hover:underline">
                                <UIcon name="i-mdi-linkedin" class="w-[30px] h-[30px] text-primary-500" />
                            </ULink>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Main Content -->
        <div class=" pt-10 ">
            <div class="max-w-[1120px] px-6 mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
                <!-- Main Blog Content -->
                <div class="lg:col-span-8 flex flex-col gap-8">
                    <!-- Blog Banner -->
                    <img :src="blog.image" :alt="blog.image_alt"
                        class="w-full lg:h-[400px] rounded-lg shadow-md object-cover" />

                    <!-- Blog Content -->
                    <div class="text-gray-800 space-y-6">
                        <div v-html="blog.content" class="blog-content"></div>
                    </div>


                </div>

                <!-- Sidebar -->
                <aside class="lg:col-span-4  hidden lg:block">
                    <QuoteInputs :is-visible="true" />
                </aside>
            </div>
            <div class="flex justify-between mx-auto max-w-[1100px] px-[25px] lg:px-[0px] mt-10">
                <NuxtLink :to="prevBlog ? `/blogs/${prevBlog.slug}` : null" :class="[
                    'bg-primary-500 font-medium text-[18px] lg:text-[22px] py-2 px-4 lg:px-8  rounded-lg',
                    prevBlog ? 'hover:bg-black text-black   hover:text-white cursor-pointer' : 'bg-primary-500 text-gray-500 cursor-not-allowed pointer-events-none'
                ]" tabindex="-1">
                    Previous
                </NuxtLink>

                <NuxtLink :to="nextBlog ? `/blogs/${nextBlog.slug}` : null" :class="[
                    'bg-primary-500  font-medium lg:text-[22px] text-[18px] py-2 px-4 lg:px-8  rounded-lg',
                    nextBlog ? 'hover:bg-black text-black   hover:text-white cursor-pointer' : 'bg-primary-500 text-gray-500 cursor-not-allowed pointer-events-none'
                ]" tabindex="-1">
                    Next
                </NuxtLink>
            </div>
            <div v-if="blog.faqs?.length > 0"
                class=" bg-primary-500 w-full p-3 md:p-10 mt-[115px] lg:mt-[152px]  rounded-none">
                <div class="container max-w-[1120px] mx-auto">
                    <div
                        class="bg-black flex flex-col gap-5 justify-center -mt-[86px] lg:-mt-[151px] rounded-[10px]   p-5">
                        <div class="flex flex-col bg-zinc-900 gap-5  rounded-[10px] p-3 md:p-10">
                            <h2 class="border-b  font-extrabold font-jakarta text-stone-300">
                                FAQs
                            </h2>

                            <details v-for="faq in blog.faqs" :key="faq.id"
                                class="group bg-primary text-black md:p-5 p-3 rounded-lg transition-all duration-300">
                                <summary
                                    class="cursor-pointer md:text-lg text-sm font-semibold group-open:text-black flex justify-between items-center">
                                    {{ faq.question }}
                                    <!-- Down Arrow (▼) when collapsed, Up Arrow (▲) when expanded -->
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"
                                        class="w-6 h-6 ml-2 transition-transform group-open:rotate-180 text-black">
                                        <path d="M7 10l5 5 5-5H7z"></path> <!-- Down Arrow -->
                                    </svg>
                                </summary>
                                <p class="mt-3 text-black font-[400] font-rubik text-sm md:text-lg">
                                    {{ faq.answer }}
                                </p>
                            </details>


                        </div>

                    </div>

                </div>
            </div>

        </div>
    </div>

    <div v-else>
        <div class="bg-white">
            <!-- Hero Section Skeleton -->
            <div class="relative w-full h-[20rem] bg-gradient-to-r from-black via-black to-yellow-300 overflow-hidden">
                <div class="absolute inset-0 bg-black/20" />

                <UContainer class="relative z-10 flex flex-col justify-center h-full gap-4">
                    <USkeleton class="h-10 w-2/3" />
                    <USkeleton class="h-6 w-1/2" />
                    <USkeleton class="h-5 w-1/4" />
                    <USkeleton class="h-5 w-1/6" />
                </UContainer>
            </div>

            <!-- Main Content Skeleton -->
            <div class="py-10">
                <UContainer class="grid grid-cols-1 lg:grid-cols-12 gap-10">
                    <!-- Main Blog Content Skeleton -->
                    <div class="lg:col-span-8 flex flex-col gap-8">
                        <USkeleton class="w-full h-[400px] rounded-lg" />

                        <div class="space-y-6 mb-36">
                            <USkeleton class="h-10 w-3/4" />
                            <USkeleton class="h-5 w-full" />
                            <USkeleton class="h-5 w-11/12" />
                            <USkeleton class="h-5 w-10/12" />
                        </div>
                    </div>

                    <!-- Sidebar Skeleton -->
                    <aside class="lg:col-span-4">
                        <UCard>
                            <div class="space-y-4">
                                <USkeleton class="h-6 w-1/2" />
                                <USkeleton class="h-5 w-full" />
                                <USkeleton class="h-5 w-full" />
                            </div>
                        </UCard>
                    </aside>
                </UContainer>

                <!-- FAQ Section Skeleton -->
                <div class="bg-primary-500 w-full p-3 md:p-10">
                    <UContainer class="bg-black -mt-36 rounded-[10px] p-5">
                        <div class="bg-zinc-900 rounded-[10px] p-3 md:p-10 space-y-6">
                            <USkeleton class="h-10 w-1/3" />
                            <div v-for="i in 3" :key="i" class="bg-primary p-5 rounded-lg space-y-2">
                                <USkeleton class="h-6 w-3/4" />
                                <USkeleton class="h-5 w-full" />
                            </div>
                        </div>
                    </UContainer>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>
import { useRoute, useFetch, useHead, computed } from '#imports'

const route = useRoute()
const id = route.params.id

// Sabhi blogs fetch karo (API me slug ya id ka naam check kar lo)
const { data: blogs } = await useFetch('https://api.goodview-moving.com/api/blogs')

// Current, previous, next blog nikaalo
const currentIndex = computed(() => blogs.value?.findIndex(b => b.slug == id))
const prevBlog = computed(() =>
    blogs.value && currentIndex.value > 0 ? blogs.value[currentIndex.value - 1] : null
)
const nextBlog = computed(() =>
    blogs.value && currentIndex.value < blogs.value.length - 1 ? blogs.value[currentIndex.value + 1] : null
)

// Fetch blog data
const { data: blog, error } = await useFetch(`https://api.goodview-moving.com/api/blogs/${id}`, {
    // Handle 404 errors
    onResponseError({ response }) {
        if (response.status === 404) {
            throw showError({
                statusCode: 404,
                statusMessage: 'Blog post not found',
            })
        }
    }
})

watchEffect(() => {

    if (!blog.value) return;
    const style = [];

    // if (blog.value.custom_css) {
    //     style.push(
    //         {
    //             children: "#blog-page " + blog.value.custom_css
    //         }
    //     )
    // }

    const meta = [

        { property: 'og:image', content: blog.value.image },
        { property: 'og:url', content: `https://goodview-moving.com/blogs/${id}` }
    ]

    blog.value.seo?.forEach(i => {
        meta.push(
            {
                name: 'keywords',
                content: i.keywords,
            },
            {
                property: 'og:title',
                content: i.title,
            },
            {
                name: 'description',
                content: i.description,
            }
        )
    })

    useHead({
        title: blog.value.title,
        meta,
        style
    })
})
</script>
<style scoped>
:deep(.blog-content p) {
    font-weight: 400 !important;
    margin-top: 15px !important;
    line-height: 34px !important;
    color: black !important;
    font-size: 18px !important;
    font-family: 'Rubik', sans-serif !important;
}

:deep(.blog-content h2) {
    font-size: 32px !important;
    margin-top: 15px !important;
    font-weight: 600 !important;
    line-height: 34px !important;
    color: black !important;
    font-family: 'Rubik', 'sans-serif' !important;
}

:deep(.blog-content h3) {
    font-size: 24px !important;
    margin-top: 15px !important;
    font-weight: 600 !important;
    line-height: 30px !important;
    color: black !important;
    font-family: 'Rubik', 'sans-serif' v;
}

:deep(.blog-content table) {
    margin: 30px 0;
    font-size: 18px;
    font-family: 'Rubik', 'sans-serif';
}

:deep(.blog-content th) {
    padding: 12px;
}

:deep(.blog-content td) {
    padding: 12px;
}

:deep(.blog-content ul) {
    font-family: 'Rubik', 'sans-serif';
    margin: 10px 5px;
}

:deep(.blog-content li) {
    margin-top: 15px !important;
    line-height: 34px !important;
    color: black !important;
    font-size: 18px;
    font-family: 'Rubik', sans-serif !important;
}

@media (max-width: 575px) {
    :deep(.blog-content p) {
        font-weight: 400 !important;
        margin-top: 15px !important;
        line-height: 30px !important;
        color: black !important;
        font-size: 18px !important;
        font-family: 'Rubik', sans-serif !important;
    }

    :deep(.blog-content h2) {
        font-size: 28px !important;
        margin-top: 15px !important;
        font-weight: 600 !important;
        line-height: 30px !important;
        color: black !important;
        font-family: 'Rubik', 'sans-serif' !important;
    }

    :deep(.blog-content h3) {
        font-size: 22px !important;
        margin-top: 15px !important;
        font-weight: 600 !important;
        line-height: 30px !important;
        color: black !important;
        font-family: 'Rubik', 'sans-serif' v;
    }

    :deep(.blog-content table) {
        margin: 30px 0;
        font-size: 16px;
        font-family: 'Rubik', 'sans-serif';
    }

    :deep(.blog-content li) {
        margin-top: 15px !important;
        line-height: 30px !important;
        color: black !important;
        font-size: 18px;
        font-family: 'Rubik', sans-serif !important;
    }


}

:deep(.blog-content a) {
    text-decoration: underline !important;
    font-family: 'Plus Jakarta Sans' !important;
    color: #836b23 !important;
    transition: all 0.3s ease !important;
}

:deep(.blog-content a:hover) {
    font-weight: 700 !important;
    text-decoration-color: #ffd34e !important;
}
</style>