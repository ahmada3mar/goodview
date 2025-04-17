<template>
    <div class="flex flex-col h-full">
        <!-- Skeleton Loading -->
        <div v-if="isLoading">
            <!-- Banner Skeleton -->
            <div class="h-[20rem] md:h-[25rem] bg-gray-700 relative">
                <div class="absolute inset-0 bg-gradient-to-t to-black from-primary-500/50"></div>
                <div class="relative flex flex-col max-w-[1360px] mx-auto items-center justify-center gap-10 px-5 py-10 h-full">
                    <div class="flex flex-col items-center gap-5 w-full text-center">
                        <USkeleton class="bg-zinc-400 h-12 w-3/4" />
                        <USkeleton class="bg-zinc-400 h-6 w-1/2" />
                    </div>
                </div>
            </div>

            <!-- Content Skeleton -->
            <div class="container bg-white lg:mx-auto px-2 sm:px-10 py-10 mb-32">
                <div class="flex flex-col md:flex-row mx-auto gap-6">
                    <!-- Text Section Skeleton -->
                    <div class="md:w-2/3">
                        <USkeleton class="bg-zinc-400 h-12 w-3/4 mb-4" />
                        <USkeleton class="bg-zinc-400 h-4 w-1/4 mb-4" />
                        <USkeleton class="bg-zinc-400 h-8 w-24 mb-4" />
                        <div class="space-y-3">
                            <USkeleton class="bg-zinc-400 h-4 w-full" />
                            <USkeleton class="bg-zinc-400 h-4 w-5/6" />
                            <USkeleton class="bg-zinc-400 h-4 w-4/6" />
                        </div>
                    </div>
                    <!-- Image Section Skeleton -->
                    <div class="w-full md:w-1/3">
                        <USkeleton class="bg-zinc-400 h-[250px] w-full" />
                    </div>
                </div>
            </div>

            <!-- Content Section Skeleton -->
            <div class="bg-primary-500 w-full p-3 md:p-10 rounded-none">
                <div class="container">
                    <div class="bg-black flex flex-col gap-5 justify-center -mt-36 rounded-[10px] p-5">
                        <div class="flex flex-col bg-zinc-900 gap-5 rounded-[10px] p-3 md:p-10">
                            <div class="space-y-4">
                                <USkeleton class="bg-zinc-400 h-4 w-full" />
                                <USkeleton class="bg-zinc-400 h-4 w-5/6" />
                                <USkeleton class="bg-zinc-400 h-4 w-full" />
                                <USkeleton class="bg-zinc-400 h-4 w-4/6" />
                                <USkeleton class="bg-zinc-400 h-4 w-full" />
                                <USkeleton class="bg-zinc-400 h-4 w-5/6" />
                                <USkeleton class="bg-zinc-400 h-4 w-full" />
                                <USkeleton class="bg-zinc-400 h-4 w-5/6" />
                                <USkeleton class="bg-zinc-400 h-4 w-full" />
                                <USkeleton class="bg-zinc-400 h-4 w-4/6" />
                                <USkeleton class="bg-zinc-400 h-4 w-full" />
                                <USkeleton class="bg-zinc-400 h-4 w-5/6" />
                                <USkeleton class="bg-zinc-400 h-4 w-full" />
                                <USkeleton class="bg-zinc-400 h-4 w-5/6" />
                                <USkeleton class="bg-zinc-400 h-4 w-full" />
                                <USkeleton class="bg-zinc-400 h-4 w-4/6" />
                                <USkeleton class="bg-zinc-400 h-4 w-full" />
                                <USkeleton class="bg-zinc-400 h-4 w-5/6" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Actual Content -->
        <div v-else-if="blog.id" class="flex flex-col h-full">
            <Banner :background="blog.cover" class="h-[20rem] md:h-[25rem]" :title="blog.heading" :text="blog.excerpt" />


            <div class="container bg-white p-3 md:p-10 mx-auto px-2 py-10 mb-32">
                <div class="flex flex-col md:flex-row mx-auto gap-6">
                    <!-- Text Section -->
                    <div class="md:w-2/3">
                        <h2 class="text-3xl font-jakarta md:text-4xl  font-extrabold">{{ blog.title }}</h2>
                        <span class="text-sm italic font-semibold text-stone-500 font-rubik  mb-10  md:leading-8">
                            {{ formatDate(blog.date) }}
                        </span>
                        <UBadge color="black" :label="blog.category" class="ml-2 mt-2" />
                        <p class="text-lg font-rubik md:text-[18px] mt-5 md:font-[300] md:leading-8">
                            {{ blog.shortDescription }}
                        </p>
                    </div>
                    <!-- Image Section -->
                    <div class=" card-img">
                        <div  class="lazy-image bg-cover bg-center bg-no-repeat  transition-opacity rounded duration-500 ease-in-out w-96 h-96 object-cover " v-lazy:background-image="blog.image" ></div>
                        
                    </div>
                </div>
            </div>

            <div class=" bg-primary-500 w-full p-3 md:p-10   rounded-none">
                <div class="container">
                    <div class="bg-black flex flex-col gap-5 justify-center -mt-36 rounded-[10px]   p-10">

                        <div v-html="blog.content" class="text-white">

                        </div>


                    </div>

                </div>

            </div>




        </div>

    </div>
</template>

<script setup>

const route = useRoute()
const blog = ref({})
const isLoading = ref(true)

const fetchBlog = async () => {
        isLoading.value = true
        const { data , error } = await useFetch(`https://api.goodview-moving.com/api/blogs/${route.params.id}`)
        if (data.value) {
            blog.value = data.value
            isLoading.value = false
        }
        if (error.value) {
            throw showError({
                statusCode: error.value.statusCode,
        })
  
}
}
onBeforeMount(() => {
    fetchBlog()
})

const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })
}
</script>