<template>
  <div class="flex flex-col">
    <NavBar />
    <div class="flex flex-col min-h-screen bg-white">
      <div class="flex-1 flex items-center justify-center px-5">
      <div v-if="error && error.statusCode == 404" class="text-center max-w-2xl mx-auto">
        <img :src="error400" alt="404 Error" class="w-1/2 mx-auto mb-6">
        <h2  class="text-4xl font-jakarta font-extrabold text-gray-900 mb-6">Page Not Found</h2>
        <p  class="text-lg font-rubik text-gray-600 mb-8">
        Oops! Looks like this page took a wrong turn and got lost. Don't worry, our digital GPS is working on getting things back on track!
        </p>
        <div 
          role="button"
          @click="clearErrors"
          class="inline-block bg-primary hover:bg-primary-dark text-white font-rubik font-medium px-8 py-3 rounded-lg transition-colors duration-200"
        >
          Back to Home
        </div>
      </div>
      <div v-else-if="error" class="text-center max-w-2xl mx-auto">
        <img :src="error500" alt="500 Error" class="w-1/2 mx-auto mb-6">
        <h2 class="text-4xl font-jakarta font-extrabold text-gray-900 mb-6">Internal Server Error</h2>
        <p class="text-lg font-rubik text-gray-600 mb-8">
          Oops! Our servers are doing the digital equivalent of a face-plant right now. Our tech ninjas are already performing their debug-jutsu to get things back to normal!
        </p>
        <div 
          role="button"
          @click="clearErrors"
          class="inline-block bg-primary hover:bg-primary-dark text-white font-rubik font-medium px-8 py-3 rounded-lg transition-colors duration-200"
        >
          Back to Home
        </div>
      </div>
    </div>
  </div>
  <Footer />
  </div>
</template>

<script setup>
const error = useError() ;
import error400 from './assets/404.avif';
import error500 from './assets/500.avif';


const clearErrors = () => {
  clearError({
    redirect: '/'
  })
}


</script>

<style scoped>
.error-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f8f9fa;
  padding: 2rem;
}

.error-content {
  text-align: center;
  max-width: 600px;
  padding: 2rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.error-title {
  font-size: 6rem;
  font-weight: 700;
  color: #2563eb;
  margin: 0;
  line-height: 1;
}

.error-subtitle {
  font-size: 2rem;
  color: #1f2937;
  margin: 1rem 0;
}

.error-message {
  color: #6b7280;
  margin-bottom: 2rem;
  font-size: 1.125rem;
}

.home-button {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background-color: #2563eb;
  color: white;
  text-decoration: none;
  border-radius: 6px;
  font-weight: 500;
  transition: background-color 0.2s;
}

.home-button:hover {
  background-color: #1d4ed8;
}
</style> 