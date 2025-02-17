<template>
    <div class="container mx-auto py-20 px-5">
      <UCard>
        <div class="flex flex-wrap-reverse gap-10">
          <!-- Form Section -->
          <UForm @submit="submit" class="p-5  lg:pr-16  w-full flex-none md:flex-1">
            <h2 class="text-primary-500 text-2xl font-bold">GET A QUOTE TODAY</h2>
            
            <!-- Name Input -->
            <UFormGroup :error="errors.name" :ui='{
              label: {
                base: "block font-bold text-gray-700 dark:text-gray-200",
              }
            }' class="my-4" label="Name">
              <UInput placeholder="Enter your name" />
            </UFormGroup>
  
            <!-- Phone Number Input -->
            <UFormGroup :error="errors.mobile" :ui='{
              label: {
                base: "block font-bold text-gray-700 dark:text-gray-200",
              }
            }' class="my-4" label="Phone Number">
              <UInput placeholder="Enter your phone number" />
            </UFormGroup>
  
            <!-- Email Input -->
            <UFormGroup :error="errors.email" :ui='{
              label: {
                base: "block font-bold text-gray-700 dark:text-gray-200",
              }
            }' class="my-4" label="E-mail">
              <UInput placeholder="Enter your email" />
            </UFormGroup>
  
            <!-- Message Input -->
            <UFormGroup :error="errors.message" :ui='{
              label: {
                base: "block font-bold text-gray-700 dark:text-gray-200",
              }
            }' class="my-4" label="Message">
              <UTextarea placeholder="Type your inquiry" />
            </UFormGroup>
  
            <!-- Submit Button -->
            <UButton class="my-4 p-3 px-7 bg-primary-500 rounded-full ml-auto" type="submit" label="Submit" />
          </UForm>
  
          <!-- Map Section -->
          <div class="rounded-2xl overflow-hidden   w-full flex-none md:flex-1">
              
              <NuxtImg src="/assets/contact_us.avif" />
          </div>
        </div>
      </UCard>
    </div>
  </template>

  <script setup>

  const data = ref({
    name:'',
    mobile:'',
    email:'',
    message:''
  })

  const errors = reactive({
    name:false,
    mobile:false,
    email:false,
    message:false
  })


const submit = ()=>{

  if(!data.value.name){
    errors.name = true
  }

  if(!data.value.mobile){
    errors.mobile = true
  }

  if(!data.value.email){
    errors.email = true
  }

  if(!data.value.message){
    errors.message = true
  }

  console.log(errors)
  if(Object.values(errors).filter(r=>r)){
    return
  }




}

</script>
  