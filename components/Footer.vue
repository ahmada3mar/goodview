<template>
    <div class="bg-black py-5 footer rounded-none text-white">
        <div class="container mx-auto">
            <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-16 p-10">
                <!-- Logo and Description -->
                <div class="flex flex-col w-full  mx-auto   gap-5 items-start ">
                    <img class="" src="~/assets/good-view-logo-white.png" />
                    <div class="flex flex-col gap-2 it md:items-start">
                        <p class="text-center md:text-left">Moving Company in Totowa, NJ, and surrounding areas. Contact us today for more information.</p>
                    </div>

                </div>

                <!-- Quick Links -->
                <div class="flex flex-col  w-full  mx-auto  gap-5">
                    <h4 class="text-primary-500 text-lg font-bold">Quick Links</h4>
                    <div class="flex w-full flex-col gap-2  ">
                        <ULink class="text-start" >Home</ULink>
                        <ULink class="text-start" >About Us</ULink>
                        <ULink class="text-start" >News</ULink>
                        <ULink class="text-start" >Jobs</ULink>
                    </div>
                </div>

                <!-- Services -->
                <div class="flex flex-col w-full  mx-auto  gap-5">
                    <h4 class="text-primary-500 text-lg font-bold">Services</h4>
                    <div class="flex w-full flex-col gap-2 ">
                       <ULink class="text-start">Company relocation</ULink>
                       <ULink class="text-start">Private relocation</ULink>
                       <ULink class="text-start">Fragile goods</ULink>
                       <ULink class="text-start">Storage</ULink>
                       <ULink class="text-start">Temporary staffing</ULink>
                       <ULink class="text-start">Furniture assembly</ULink>
                    </div>
                </div>

                <!-- Contacts -->
                <div class="flex flex-col w-full  mx-auto  gap-5">
                    <h4 class="text-primary-500 text-lg font-bold">Contacts</h4>
                    <div class="justify-center">
                    <div class="flex w-full gap-3">
                        <div class="flex bg-opacity-35 rounded-full p-1 w-7 h-7">
                            <UIcon name="i-material-symbols-call" class="w-5 h-5 text-primary-500" />
                        </div>
                        <div itemscope itemtype="http://schema.org/LocalBusiness" class="flex bg-opacity-35 rounded-full p-1 text-white font-bold">
                            <span itemprop="telephone"><a href="tel:0799991230">0920-13822</a></span>
                        </div>
                    </div>
                    <div class="flex w-full  gap-3">
                        <div class="flex bg-opacity-35 rounded-full p-1 w-7 h-7">
                            <UIcon name="i-material-symbols-mail" class="w-5 h-5 text-primary-500" />
                        </div>
                        <div itemscope itemtype="http://schema.org/LocalBusiness" class="flex bg-opacity-35 rounded-full p-1 text-white font-bold">
                            <span itemprop="email"><a href="mailto:info@goodview-moving.com">info@goodview-moving.com</a></span>
                        </div>
                    </div>
                </div>

                </div>
            </div>
        </div>
    </div>
</template>
