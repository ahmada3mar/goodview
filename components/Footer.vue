<template>
    <div class="bg-black py-5 footer rounded-none text-white">
        <div class="container mx-auto">
            <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-16 p-10">
                <!-- Logo and Description -->
                <div class="flex flex-col w-full  mx-auto   gap-5 items-start ">
                    <img class="" src="~/assets/good-view-logo-white.png" alt="good view logo" />
                    <div class="flex flex-col gap-2 it md:items-start">
                        <p class="text-center md:text-left">Moving Company based in NJ, and services all North/South East Coast 
                            <span class="italic font-bold" >excluding Florida</span>.</p>
                    </div>

                </div>

                <!-- Quick Links -->
                <div class="flex flex-col  w-full  mx-auto  gap-5">
                    <h4 class="text-primary-500 text-lg font-bold">Quick Links</h4>
                    <div class="flex w-full flex-col gap-2  ">
                        <ULink to="/" class="text-start" >Home</ULink>
                        <ULink to="/about-us" class="text-start" >About Us</ULink>
                        <ULink to="/help" class="text-start" >Help</ULink>
                        <ULink to="https://www.fmcsa.dot.gov/sites/fmcsa.dot.gov/files/RightsandResponsibilitiesBooklet_2022Update.pdf" class="text-start" >Customer rights</ULink>
                        <ULink to="https://www.fmcsa.dot.gov/sites/fmcsa.dot.gov/files/ReadytoMoveBrochure_2022Update.pdf" class="text-start" >Ready to move Brochure</ULink>
                    </div>
                </div>

                <!-- Services -->
                <div class="flex flex-col w-full  mx-auto  gap-5">
                    <h4 class="text-primary-500 text-lg font-bold">Services</h4>
                    <div class="flex w-full flex-col gap-2 ">
                       <ULink to="/services" class="text-start">Company relocation</ULink>
                       <ULink to="/services" class="text-start">Private relocation</ULink>
                       <ULink to="/services" class="text-start">Fragile goods</ULink>
                       <ULink to="/services" class="text-start">Storage</ULink>
                        <ULink to="/services" class="text-start">Furniture assembly</ULink>
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
                            <span itemprop="telephone"><a href="tel:+19737821339">+1 973-782-1339</a></span>
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
                    <div class="flex w-full  gap-3">
                        <div class="flex bg-opacity-35 rounded-full p-1 w-7 h-7">
                            <UIcon name="i-carbon-logo-facebook" class="w-5 h-5 text-primary-500" />
                        </div>
                        <div class="flex bg-opacity-35 rounded-full p-1 text-white font-bold">
                            <a href="https://www.facebook.com/profile.php?id=61558800622379">Facebook</a>
                        </div>
                    </div>
                    <div class="flex w-full  gap-3">
                        <div class="flex bg-opacity-35 rounded-full p-1 w-7 h-7">
                            <UIcon name="i-carbon-logo-instagram" class="w-5 h-5 text-primary-500" />
                        </div>
                        <div class="flex bg-opacity-35 rounded-full p-1 text-white font-bold">
                          <a href="https://www.instagram.com/Fast_transportation_">Instagram</a>
                        </div>
                    </div>
                    
                </div>

                </div>
            </div>
        </div>
    </div>
</template>
