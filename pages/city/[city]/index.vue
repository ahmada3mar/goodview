<template>
  <div>
    <div class="min-h-screen bg-black text-white">
      <div class="max-w-4xl mx-auto px-6 py-8">
        <!-- Breadcrumb -->
        <nav class="flex items-center space-x-2 text-sm text-gray-400 mb-8">
          <NuxtLink to="/" class="hover:text-white transition-colors">Home</NuxtLink>
          <span>/</span>
          <template v-if="currentStateObj">
            <NuxtLink :to="`/states/${currentStateObj.slug}`" class="hover:text-white transition-colors">
              {{ currentStateObj.name }}
            </NuxtLink>
            <span>/</span>
          </template>
          <span class="text-white">{{ currentCityName }}</span>
        </nav>

        <!-- Main Title -->
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Routes from {{ currentCityName }}
        </h1>
        <p class="font-[300] max-w-3xl font-rubik leading-[1.6rem] mb-8">
          Looking for reliable movers in North Carolina? Good View Moving and Storage is here to make
          your next move safe and stress-free.
        </p>

        <div class="mb-12">
          <div class="mb-8">
            <div class="flex items-center mb-6 mt-6">
              <div class="w-6 h-6 mr-3 flex-shrink-0">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" fill="#ffd343" />
                </svg>
              </div>
              <h3 class="text-xl font-bold" style="color: #ffd343;">{{ currentCityName }}</h3>
            </div>
            <ul>
              <li v-for="route in filteredRoutes" :key="route.id" class="flex items-center mb-2">
                <svg class="mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                  <path
                    d="M8 6H21V8H8V6ZM8 11H21V13H8V11ZM8 16H21V18H8V16ZM5 4V6H3V4H5ZM5 9V11H3V9H5ZM5 14V16H3V14H5Z"
                    fill="#ffd343" />
                </svg>
                <NuxtLink :to="`/routes/${route.slug}`" class="hover:underline">
                  {{ cityIdToName[route.moving_from] }} to {{ cityIdToName[route.moving_to] }}
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
        <!--
        <div v-for="route in filteredRoutes" :key="'debug-' + route.id" class="mt-4 p-2 bg-gray-800 rounded">
          <div><b>From City:</b> {{ getCityObj(route.moving_from) }}</div>
          <div><b>To City:</b> {{ getCityObj(route.moving_to) }}</div>
        </div>
        -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, watchEffect } from 'vue'
const route = useRoute()
const citySlug = route.params.city // now using slug, not id

const {data:allStates}= await useFetch('https://api.goodview-moving.com/api/states')
// Fetch all routes
const { data: allRoutes } = await useFetch('https://api.goodview-moving.com/api/routes')
// Fetch all cities
const { data: allCities } = await useFetch('https://api.goodview-moving.com/api/city')

// Find the city object by slug
const currentCityObj = computed(() => {
  if (!allCities.value) return null
  return allCities.value.find(city => city.slug === citySlug)
})

// Map city id to name
const cityIdToName = computed(() => {
  if (!allCities.value) return {}
  const map = {}
  for (const city of allCities.value) {
    map[city.id] = city.name
    map[String(city.id)] = city.name
  }
  return map
})
// const cityIdToState=computed(()=>{
//   if(!allStates.value)return{}
//   const 
//   for (const state of allStates.value){
//     ma
//   }
// })

// Find the current city name
const currentCityName = computed(() => {
  if (!currentCityObj.value) return ''
  return currentCityObj.value.name
})

// Filter routes where moving_from === current city id
const filteredRoutes = computed(() => {
  if (!allRoutes.value || !currentCityObj.value) return []
  return allRoutes.value.filter(route => String(route.moving_from) === String(currentCityObj.value.id))
})

// Log the state name for the current city in the console
watchEffect(() => {
  if (allStates.value && currentCityObj.value) {
    const state = allStates.value.find(
      s => String(s.id) === String(currentCityObj.value.state_id)
    )
    if (state) {
      console.log('State name:', state.name)
    }
  }
})

// Helper to get full city object by id
function getCityObj(cityId) {
  if (!allCities.value) return {}
  return allCities.value.find(city => city.id === cityId || String(city.id) === String(cityId)) || {}
}

// Find the state object for the current city
const currentStateObj = computed(() => {
  if (!allStates.value || !currentCityObj.value) return null
  return allStates.value.find(
    s => String(s.id) === String(currentCityObj.value.state_id)
  )
})
</script>

