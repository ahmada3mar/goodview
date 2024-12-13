<template>

    <div 
    :class="`
        h-full bg-black 
        w-full`
        ">
        <div class="flex justify-between p-5">
            <img class="h-10" src="~/assets/good-view-logo-white.png" alt="good view logo">
        </div>

        <div class="flex flex-col ">
            <ULink @click="slideover.close()"  to="/"
                class="hover:bg-primary-500 hover:text-black text-slate-300 text-start p-5 text-xl flex items-center gap-4">
                <UIcon name="i-carbon-home" class="w-5 h-5 text-s text-inherit" />
                Home
            </ULink>
            <ULink @click="slideover.close()" to="/about-us"
                class="hover:bg-primary-500 hover:text-black text-slate-300 text-start p-5 text-xl flex items-center gap-4">
                <UIcon name="i-carbon-information" class="w-5 h-5 text-inherit" />
                About us
            </ULink>
            <ULink @click="slideover.close()" to="/services"
                class="hover:bg-primary-500 hover:text-black text-slate-300 text-start p-5 text-xl flex items-center gap-4">
                <UIcon name="i-carbon-delivery-truck" class="w-5 h-5 text-inherit" />
                Services
            </ULink>
            <ULink @click="slideover.close()" to="/tips"
                class="hover:bg-primary-500 hover:text-black text-slate-300 text-start p-5 text-xl flex items-center gap-4">
                <UIcon name="i-carbon-idea" class="w-5 h-5 text-md text-inherit" />
                Tips for the move
            </ULink>
            <ULink @click="slideover.close()" to="/help"
                class="hover:bg-primary-500 hover:text-black text-slate-300 text-start p-5 text-xl flex items-center gap-4">
                <UIcon name="i-carbon-idea" class="w-5 h-5 text-md text-inherit" />
                Help
            </ULink>
        </div>




    </div>

</template>

<script setup>

const slideover = useSlideover()


</script>
