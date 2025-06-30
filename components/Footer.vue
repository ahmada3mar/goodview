    <template>
        <div class="bg-black py-5 footer rounded-none text-white">
            <div class="container mx-auto">
                <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1  gap-12 p-10">
                    <!-- Logo and Description -->
                    <div class="flex flex-col w-full  mx-auto   gap-5 items-start ">
                        <img class="" src="/imgs/good-view-logo-white.png" alt="good view logo" />
                        <div class="flex flex-col gap-2 it md:items-start">
                            <p class="text-center md:text-left font-jakarta">We deliver
                                <span class="italic font-bold font-jakarta ">Nationwide</span>.
                            </p>
                            <div class="flex gap-4 mt-2">
                                <ULink to="https://www.facebook.com/people/Goodview-Moving-And-Storage/61576011192616/"
                                    target="_blank" aria-label="Visit Goodview Moving on Facebook">

                                    <UIcon name="i-mdi-facebook" class="w-[45px] h-[45px] text-primary-500" />

                                </ULink>

                                <ULink to="https://www.instagram.com/goodviewmoving/" target="_blank"
                                    aria-label="Follow Goodview Moving on Instagram">

                                    <UIcon name="i-mdi-instagram" class="w-[45px] h-[45px] text-primary-500" />

                                </ULink>
                                <ULink to="https://www.pinterest.com/goodviewmoving/" target="_blank"
                                    aria-label="Follow Goodview Moving on printerest">

                                    <UIcon name="i-mdi-pinterest" class="w-[45px] h-[45px] text-primary-500" />

                                </ULink>
                                <ULink to="https://www.linkedin.com/company/goodview-moving-storage/"
                                    aria-label="Follow Goodview Moving on LinkedIn" target="_blank"
                                    class="text-white hover:underline">
                                    <UIcon name="i-mdi-linkedin" class="w-[45px] h-[45px] text-primary-500" />
                                </ULink>


                            </div>
                        </div>

                    </div>

                    <!-- Quick Links -->
                    <div class="flex flex-col  w-full  mx-auto  gap-5">
                        <h3 class="text-white font-jakarta  text-[24px] font-bold">Quick Links</h3>
                        <div class="flex w-full flex-col gap-2  ">
                            <ULink to="/" class="text-start font-rubik text-[16px] hover:text-primary-500">Home</ULink>
                            <ULink to="/about-us" class="text-start font-rubik text-[16px]  hover:text-primary-500">
                                About Us</ULink>
                            <ULink to="/help" class="text-start font-rubik text-[16px] hover:text-primary-500">Help
                            </ULink>
                            <ULink target="_blank"
                                to="https://www.fmcsa.dot.gov/sites/fmcsa.dot.gov/files/RightsandResponsibilitiesBooklet_2022Update.pdf "
                                class="text-start font-rubik text-[16px] hover:text-primary-500">Customer rights</ULink>
                            <ULink target="_blank"
                                to="https://www.fmcsa.dot.gov/sites/fmcsa.dot.gov/files/ReadytoMoveBrochure_2022Update.pdf"
                                class="text-start font-rubik text-[16px] hover:text-primary-500">Ready to move Brochure
                            </ULink>
                        </div>
                    </div>

                    <!-- Services -->
                    <div class="flex flex-col w-full  mx-auto  gap-5">
                        <h3 class="text-white font-jakarta  text-[24px] font-bold">Services</h3>
                        <div class="flex w-full flex-col gap-2 ">
                            <ULink to="/services/residential-moving-service"
                                class="text-start font-rubik text-[16px] hover:text-primary-500">Residential Moving
                            </ULink>
                            <ULink to="/services/commercial-moving-service"
                                class="text-start font-rubik text-[16px] hover:text-primary-500">Commercial Moving
                            </ULink>
                            <ULink to="/services/packing-and-unpacking-service"
                                class="text-start font-rubik text-[16px] hover:text-primary-500">Packing and Unpacking
                            </ULink>
                            <ULink to="/services/furniture-assembly-and-disassembly-service"
                                class="text-start font-rubik text-[16px] hover:text-primary-500">Furniture Assembly and
                                Disassembly</ULink>
                            <ULink to="/services/long-distance-moving-service"
                                class="text-start font-rubik text-[16px] hover:text-primary-500">Long Distance Moving
                            </ULink>
                            <ULink to="/services/specialty-moving-service"
                                class="text-start font-rubik text-[16px] hover:text-primary-500">Specialty Moving
                            </ULink>
                            <ULink to="/services/storage-service"
                                class="text-start font-rubik text-[16px] hover:text-primary-500">Storage Units</ULink>
                        </div>
                    </div>

                    <!-- Contacts -->
                    <div class="flex flex-col w-full  mx-auto  gap-5">
                        <h3 class="text-white font-jakarta  text-[24px] font-bold">Contacts</h3>
                        <div class="justify-center">
                            <div class="flex w-full gap-3">
                                <div class="flex bg-opacity-35 rounded-full p-1 w-7 h-7">
                                    <UIcon name="i-material-symbols-call" class="w-5 h-5 text-primary-500" />
                                </div>
                                <div itemscope itemtype="http://schema.org/LocalBusiness"
                                    class="flex bg-opacity-35 hover:text-primary-500 rounded-full p-1 font-rubik text-[16px] text-white font-[400]">
                                    <span itemprop="telephone"><a href="tel:+19737821339">+1 973-782-1339</a></span>
                                </div>
                            </div>
                            <div class="flex w-full  gap-3">
                                <div class="flex bg-opacity-35  rounded-full p-1 w-7 h-7">
                                    <UIcon name="i-material-symbols-mail" class="w-5 h-5 text-primary-500" />
                                </div>
                                <div itemscope itemtype="http://schema.org/LocalBusiness"
                                    class="flex bg-opacity-35 rounded-full hover:text-primary-500   font-rubik text-[16px] p-1 text-white font-[400]">
                                    <span itemprop="email"><a
                                            href="mailto:Service@fasttransportation.info">Service@fasttransportation.info</a></span>
                                </div>
                            </div>
                            <div class="flex w-full  gap-3">
                                <div class="flex bg-opacity-35 rounded-full p-1 w-7 h-7">
                                    <UIcon name="i-material-symbols-location-on" class="w-5 h-5 text-primary-500" />
                                </div>
                                <div itemscope itemtype="http://schema.org/LocalBusiness"
                                    class="flex font-[400] bg-opacity-35 font-rubik text-[16px] rounded-full p-1 text-white ">
                                    <span itemprop="email">490 riverview dr, Totowa NJ, 07512</span>
                                </div>
                            </div>

                            <!-- <div class="flex w-full  gap-3">
                            <div class="flex bg-opacity-35 rounded-full p-1 w-7 h-7">
                                <UIcon name="fa-solid fa-location-dot"" class="w-5 h-5 text-primary-500" />
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
                        </div> -->

                        </div>

                    </div>
                </div>
                <div class="text-center py-4 font-jakarta text-[16px] font-[300] text-white"> Copyright © 2025 All
                    Rights Reserved By Good View Moving &amp; Storage. </div>
            </div>
        </div>
    </template>
<script>

</script>