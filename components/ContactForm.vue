<template>
    <UForm class="flex flex-1 max-w-96 flex-col bg-gray-100 dark:bg-gray-900 p-5 rounded-none z-10">
        <h2 class="text-primary-500 text-center font-bold text-lg">GET A QUOTE TODAY</h2>
        <UFormGroup :ui='{
            label: {
                base: "block font-bold text-gray-700 dark:text-gray-200",
            }
        }' class="my-4" label="Name">
            <UInput placeholder="Enter your Name" />
        </UFormGroup>
        <UFormGroup :ui='{
            label: {
                base: "block font-bold text-gray-700 dark:text-gray-200",
            }
        }' class="my-4" label="Phone number">
            <UInput placeholder="Enter your phone number" />
        </UFormGroup>
        <UFormGroup :ui='{
            label: {
                base: "block font-bold text-gray-700 dark:text-gray-200",
            }
        }' class="my-4" label="E-main">
            <UInput placeholder="Enter your e-mail" />
        </UFormGroup>
        <UFormGroup :ui='{
            label: {
                base: "block font-bold text-gray-700 dark:text-gray-200",
            }
        }' class="my-4" label="Message">
            <UTextarea placeholder="Type your inquiry" />

        </UFormGroup>
        <UButton class="my-4 p-3 px-7 bg-primary-500 rounded-none  ml-auto" type="submit" label="Get A free quote" />
    </UForm>
</template>