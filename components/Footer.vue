<template>
  <div class="bg-black py-5 footer rounded-none text-white">
    <div class="container mx-auto">
      <div class="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-12 px-7 py-10">
        <!-- Logo and Description -->
        <div class="flex flex-col w-full mx-auto gap-5 items-start">
          <img class="" src="/imgs/good-view-logo-white.png" alt="good view logo" />
          <div class="flex flex-col gap-2 it md:items-start">
            <p class="text-center md:text-left font-jakarta">
              We deliver
              <span class="italic font-bold font-jakarta">Nationwide</span>.
            </p>
            <div class="flex gap-4 mt-2">
              <ULink to="https://www.facebook.com/people/Goodview-Moving-And-Storage/61576011192616/" target="_blank"
                aria-label="Visit Goodview Moving on Facebook">
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
                aria-label="Follow Goodview Moving on LinkedIn" target="_blank" class="text-white hover:underline">
                <UIcon name="i-mdi-linkedin" class="w-[45px] h-[45px] text-primary-500" />
              </ULink>
            </div>
          </div>
        </div>

        <!-- Quick Links -->
        <div class="flex flex-col w-full mx-auto gap-5">
          <h2 class="text-white font-jakarta text-[24px] font-bold">
            Quick Links
          </h2>
          <div class="flex w-full flex-col gap-2">
            <ULink to="/" class="text-start font-rubik text-[16px] hover:text-primary-500">Home</ULink>
            <ULink to="/about-us/" class="text-start font-rubik text-[16px] hover:text-primary-500">
              About Us</ULink>
            <ULink to="/tips/" class="text-start font-rubik text-[16px] hover:text-primary-500">
              Tips for the move</ULink>
            <ULink to="/help/" class="text-start font-rubik text-[16px] hover:text-primary-500">Help
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
        <div class="flex flex-col w-full mx-auto gap-5">
          <h2 class="text-white font-jakarta text-[24px] font-bold">
            Services
          </h2>
          <div class="flex w-full flex-col gap-2">
            <ULink to="/services/residential-moving-service/"
              class="text-start font-rubik text-[16px] hover:text-primary-500">Residential Moving
            </ULink>
            <ULink to="/services/commercial-moving-service/"
              class="text-start font-rubik text-[16px] hover:text-primary-500">Commercial Moving
            </ULink>
            <ULink to="/services/packing-and-unpacking-service/"
              class="text-start font-rubik text-[16px] hover:text-primary-500">Packing and Unpacking
            </ULink>
            <ULink to="/services/furniture-assembly-and-disassembly-service/"
              class="text-start font-rubik text-[16px] hover:text-primary-500">Furniture Assembly and Disassembly
            </ULink>
            <ULink to="/services/long-distance-moving-service/"
              class="text-start font-rubik text-[16px] hover:text-primary-500">Long Distance Moving
            </ULink>
            <ULink to="/services/specialty-moving-service/"
              class="text-start font-rubik text-[16px] hover:text-primary-500">Specialty Moving
            </ULink>
            <ULink to="/services/storage-service/" class="text-start font-rubik text-[16px] hover:text-primary-500">
              Storage Units</ULink>
          </div>
        </div>

        <div class="flex flex-col w-full mx-auto gap-5">
          <h2 class="text-white font-jakarta text-[24px] font-bold">Routes</h2>
          <div class="flex w-full flex-col gap-2">
            <ULink to="/california/" class="text-start font-rubik text-[16px] hover:text-primary-500">
              California
            </ULink>
            <ULink to="/north-carolina/" class="text-start font-rubik text-[16px] hover:text-primary-500">
              North Carolina
            </ULink>
            <ULink to="/new-jersey/" class="text-start font-rubik text-[16px] hover:text-primary-500">New Jersey
            </ULink>
            <ULink to="/new-york/" class="text-start font-rubik text-[16px] hover:text-primary-500">New York
            </ULink>
            <ULink to="/georgia/" class="text-start font-rubik text-[16px] hover:text-primary-500">Georgia
            </ULink>
            <ULink to="/texas/" class="text-start font-rubik text-[16px] hover:text-primary-500">Texas
            </ULink>
          </div>
        </div>

        <div class="flex flex-col w-full mx-auto gap-5" itemscope itemtype="http://schema.org/LocalBusiness">
          <meta itemprop="name" content="Good View Moving & Storage" />
          <meta itemprop="image" content="https://goodviewmoving.com/imgs/good-view-logo-white.png" />
          <meta itemprop="priceRange" content="$$" />
          <h3 class="text-white font-jakarta text-[24px] font-bold">
            Contacts
          </h3>
          <div class="justify-center">
            <div class="flex w-full gap-1 sm:gap-3">
              <div class="flex bg-opacity-35 rounded-full p-1 w-7 h-7">
                <UIcon name="i-material-symbols-call" class="w-5 h-5 text-primary-500" />
              </div>
              <div class="flex bg-opacity-35 hover:text-primary-500 rounded-full p-1 font-rubik text-[16px] text-white font-[400]">
                <a href="tel:+19737821339" itemprop="telephone">+1 973-782-1339</a>
              </div>
            </div>
            <div class="flex w-full gap-1 sm:gap-3">
              <div class="flex bg-opacity-35 rounded-full p-1 w-7 h-7">
                <UIcon name="i-material-symbols-mail" class="w-5 h-5 text-primary-500" />
              </div>
              <div class="flex bg-opacity-35 rounded-full hover:text-primary-500 font-rubik text-[16px] p-1 text-white font-[400]">
                <ULink class="inline-block break-all max-w-full" to="mailto:Service@fasttransportation.info" itemprop="email">
                  Service@fasttransportation.info
                </ULink>
              </div>
            </div>
            <div class="flex w-full gap-1 sm:gap-3">
              <div class="flex bg-opacity-35 rounded-full p-1 w-7 h-7">
                <UIcon name="i-material-symbols-location-on" class="w-5 h-5 text-primary-500" />
              </div>
              <div class="flex font-[400] bg-opacity-35 font-rubik text-[16px] rounded-full p-1 text-white">
                <div itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">
                  <span itemprop="streetAddress">490 riverview dr</span>,
                  <span itemprop="addressLocality">Totowa</span>
                  <span itemprop="addressRegion">NJ</span>,
                  <span itemprop="postalCode">07512</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center py-4 font-jakarta text-[16px] font-[300] text-white px-3">
        Copyright © 2025 All Rights Reserved By Good View Moving &amp; Storage.
      </div>
    </div>
  </div>
</template>
<script setup>
useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Good View Moving & Storage",
        "image": "https://goodviewmoving.com/imgs/good-view-logo-white.png",
        "url": "https://goodviewmoving.com",
        "telephone": "+1-973-782-1339",
        "email": "Service@fasttransportation.info",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "490 Riverview Dr",
          "addressLocality": "Totowa",
          "addressRegion": "NJ",
          "postalCode": "07512",
          "addressCountry": "US"
        },
        "sameAs": [
          "https://www.facebook.com/people/Goodview-Moving-And-Storage/61576011192616/",
          "https://www.instagram.com/goodviewmoving/",
          "https://www.pinterest.com/goodviewmoving/",
          "https://www.linkedin.com/company/goodview-moving-storage/"
        ]
      })
    }
  ]
})
</script>
