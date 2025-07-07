<template>
  <div>
    <!-- City Page: Dedicated to /[state]/[city] routes only -->
    <div class="bg-black text-white">
      <div class=" max-w-4xl mx-auto px-6 py-8">
        <!-- Breadcrumb -->
        <nav class="flex items-center space-x-2 text-sm text-gray-400 mb-8">
        
          <template v-if="currentStateObj">
            <NuxtLink :to="`/${currentStateObj.slug}`" class="hover:text-white transition-colors">
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

          <div class="flex md:flex-row flex-col  justify-between">
            <div class="w-full md:w-1/2">
              <ul class="list-disc">
                <li v-for="route in leftRoutes" :key="route.id" class="flex items-center text-[18px] mb-2">
                  <svg fill="#FFFFFF" width="30px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                      <path d="M7.8 10a2.2 2.2 0 0 0 4.4 0 2.2 2.2 0 0 0-4.4 0z"></path>
                    </g>
                  </svg>

                  <NuxtLink :to="`/${currentStateObj.slug}/${route.slug}`" class="hover:underline">
                    {{ cityIdToName[route.moving_from] }} to {{ cityIdToName[route.moving_to] }}
                  </NuxtLink>
                </li>
              </ul>
            </div>
            <div class="w-full md:w-1/2">
              <ul class="list-disc">
                <li v-for="route in rightRoutes" :key="route.id" class="flex items-center text-[18px] mb-2">
                  <svg fill="#FFFFFF" width="30px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                      <path d="M7.8 10a2.2 2.2 0 0 0 4.4 0 2.2 2.2 0 0 0-4.4 0z"></path>
                    </g>
                  </svg>

                  <NuxtLink :to="`/${currentStateObj.slug}/${route.slug}`" class="hover:underline">
                    {{ cityIdToName[route.moving_from] }} to {{ cityIdToName[route.moving_to] }}
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>


        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { showError } from '#app'

const route = useRoute()
const citySlug = route.params.city

const { data: allStates, error: statesError } = useFetch('https://api.goodview-moving.com/api/states')
const { data: allRoutes, error: routesError } = useFetch('https://api.goodview-moving.com/api/routes')
const { data: allCities, error: citiesError } = useFetch('https://api.goodview-moving.com/api/city')

const currentCityObj = computed(() => {
  if (!allCities.value) return null;
  return allCities.value.find(city => city.slug === citySlug) || null;
})

watchEffect(() => {
  if (statesError.value || routesError.value || citiesError.value) {
    throw showError({
      statusCode: 500,
      statusMessage: 'Failed to load data from server. Please try again later.',
    })
  }
  if (allCities.value && !currentCityObj.value) {
    throw showError({
      statusCode: 404,
      statusMessage: 'City not found',
    })
  }
})

const cityIdToName = computed(() => {
  if (!allCities.value) return {}
  const map = {}
  for (const city of allCities.value) {
    map[city.id] = city.name
    map[String(city.id)] = city.name
  }
  return map
})

const currentCityName = computed(() => {
  if (!currentCityObj.value) return '';
  return currentCityObj.value.name;
})

const filteredRoutes = computed(() => {
  if (!allRoutes.value || !currentCityObj.value) return []
  return allRoutes.value.filter(route => String(route.moving_from) === String(currentCityObj.value.id))
})

const currentStateObj = computed(() => {
  if (!allStates.value || !currentCityObj.value) return null;
  return allStates.value.find(
    s => String(s.id) === String(currentCityObj.value.state_id)
  );
})
const leftRoutes = computed(() => {
  if (!filteredRoutes.value) return []
  const half = Math.ceil(filteredRoutes.value.length / 2)
  return filteredRoutes.value.slice(0, half)
})
const rightRoutes = computed(() => {
  if (!filteredRoutes.value) return []
  const half = Math.ceil(filteredRoutes.value.length / 2)
  return filteredRoutes.value.slice(half)
})
</script>