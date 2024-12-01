<template>
    <div class="container mx-auto py-20 px-5">
      <UCard>
        <div class="flex flex-wrap-reverse gap-10">
          <!-- Form Section -->
          <UForm class="p-5  lg:pr-16  w-full flex-none md:flex-1">
            <h2 class="text-primary-500 text-2xl font-bold">GET A QUOTE TODAY</h2>
            
            <!-- Name Input -->
            <UFormGroup :ui='{
              label: {
                base: "block font-bold text-gray-700 dark:text-gray-200",
              }
            }' class="my-4" label="Name">
              <UInput placeholder="Enter your name" />
            </UFormGroup>
  
            <!-- Phone Number Input -->
            <UFormGroup :ui='{
              label: {
                base: "block font-bold text-gray-700 dark:text-gray-200",
              }
            }' class="my-4" label="Phone Number">
              <UInput placeholder="Enter your phone number" />
            </UFormGroup>
  
            <!-- Email Input -->
            <UFormGroup :ui='{
              label: {
                base: "block font-bold text-gray-700 dark:text-gray-200",
              }
            }' class="my-4" label="E-mail">
              <UInput placeholder="Enter your email" />
            </UFormGroup>
  
            <!-- Message Input -->
            <UFormGroup :ui='{
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
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12064.367991436478!2d-74.2191348!3d40.8917968!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ca3c479f2d016e5%3A0x6a35626840917859!2sGoodview%20moving%20and%20storage!5e0!3m2!1sen!2sus!4v1685650174127!5m2!1sen!2sus" 
              width="100%" 
              height="450" 
              style="border:0;" 
              allowfullscreen="" 
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </UCard>
    </div>
  </template>
  