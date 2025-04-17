<template>
  <NuxtLink :to="`/blogs/${blog.id}`" class="block group">
    <div class="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
      <div class="relative h-48">
        <img 
          :src="blog.image" 
          :alt="blog.title"
          class="w-full h-full object-cover"
        />
        <div class="absolute top-2 right-2 bg-primary text-white px-2 py-1 rounded text-sm">
          {{ blog.category }}
        </div>
      </div>
      <div class="p-4">
        <h3 class="text-xl font-semibold text-gray-800 mb-2 group-hover:text-primary transition-colors">
          {{ blog.title }}
        </h3>
        <p class="text-gray-600 mb-4 line-clamp-2">
          {{ blog.excerpt }}
        </p>
        <div class="flex items-center justify-between text-sm text-gray-500">
          <span>{{ blog.author }}</span>
          <span>{{ formatDate(blog.date) }}</span>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { Blog } from '~/data/blogs'

defineProps<{
  blog: Blog
}>()

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script> 