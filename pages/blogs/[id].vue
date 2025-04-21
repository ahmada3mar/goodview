<template>

    <div v-if="blog.id" class="bg-white">

        <div>
            <!-- Hero Section -->
            <div class="relative w-full h-[20rem] md:h-[20rem] overflow-hidden "
                style="background: linear-gradient(26deg, rgb(2 2 2), rgb(0 0 0), rgb(255 211 78));">
                <div class="absolute inset-0 bg-black/20"></div>

                <!-- Animated Header -->
                <div
                    class="relative z-10 flex flex-col justify-center text-left px-5 py-10 h-full max-w-[1100px] mx-auto gap-4 transition-all duration-700 ease-in-out">
                    <h1 class="text-white text-3xl md:text-4xl font-bold font-jakarta">
                        Show Blog Page
                    </h1>

                    <!-- Breadcrumb -->
                    <nav class="text-white text-[22px] font-rubik space-x-1 mt-2">
                        <span>
                            <NuxtLink to="/" class="hover:underline">Home</NuxtLink>
                        </span> /
                        <span>
                            <NuxtLink to="/blogs" class="hover:underline">Blogs</NuxtLink>
                        </span> /
                        <span class="text-white">{{ blog.title }}</span>
                    </nav>
                    <div class="flex items-start flex-col">
                        <p class="font-semibold text-white">{{ blog.author }}</p>
                        <p class="text-sm text-white">Published Date: {{ blog.date }}</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Main Content -->
        <div class=" py-10">
            <div class="max-w-[1120px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">

                <!-- Main Blog Content -->
                <div class="lg:col-span-8 flex flex-col gap-8">
                    <!-- Blog Banner -->
                    <img :src="blog.image" :alt="blog.alt" class="w-full h-[400px] rounded-lg shadow-md object-cover" />


                    <!-- Blog Content -->
                    <div class="text-gray-800 mb-36 space-y-6">
                        <h1 id="section1" class="text-3xl font-jakarta font-bold">{{ blog.title }}</h1>
                        <div v-html="blog.content"></div>
                    </div>

                    <!-- Sidebar -->
                </div>
                <aside class="lg:col-span-4">
                    <QuoteInputs :is-visible="true" />
                </aside>
            </div>

            <div v-if="blog.faqs?.length > 0" class=" bg-primary-500 w-full p-3 md:p-10   rounded-none">
                <div class="container max-w-[1120px] mx-auto">
                    <div class="bg-black flex flex-col gap-5 justify-center -mt-36 rounded-[10px]   p-5">
                        <div class="flex flex-col bg-zinc-900 gap-5  rounded-[10px] p-3 md:p-10">
                            <h2 class="text-3xl md:text-4xl border-b  font-extrabold font-jakarta text-stone-300">
                                FAQs
                            </h2>

                            <details v-for="faq in blog.faqs" :key="faq.id"
                                class="group bg-primary text-black p-5 rounded-lg transition-all duration-300">
                                <summary
                                    class="cursor-pointer text-lg font-semibold group-open:text-black flex justify-between items-center">
                                    {{ faq.question }}
                                    <!-- Down Arrow (▼) when collapsed, Up Arrow (▲) when expanded -->
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"
                                        class="w-6 h-6 ml-2 transition-transform group-open:rotate-180 text-black">
                                        <path d="M7 10l5 5 5-5H7z"></path> <!-- Down Arrow -->
                                    </svg>
                                </summary>
                                <p class="mt-3 text-black">
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
import { useRoute, useFetch, useHead } from '#imports'

const route = useRoute()
const id = route.params.id

// Fetch blog data
const { data: blog } = await useFetch(`https://api.goodview-moving.com/api/blogs/${id}`)

watchEffect(() => {
  if (!blog.value) return

  const meta = [
    { name: 'description', content: blog.value.shortDescription },
    { property: 'og:image', content: blog.value.image },
    { property: 'og:url', content: `https://www.goodview-moving.com/blogs/${id}` }
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
        property: 'og:description',
        content: i.description,
      }
    )
  })

  useHead({
    title: blog.value.title,
    meta
  })
})
</script>
