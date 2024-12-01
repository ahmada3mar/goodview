<template>
  <div class="flex flex-col h-full">
    <Banner class="h-[calc(100dvh-4rem)]" title=" Professional Moving Services & Affordable Prices"
      text="For local or long-distance moves in Totowa, NJ">

      <template #body="isVisible">
        <QuoteInputs :isVisible="isVisible.isVisible" />
      </template>


    </Banner>

    <Intro :img="truck" title="FOR MOVING ACROSS THE COUNTRY"
      text="GoodView Moving And Storage is a family business that was established in New Jersey, and is now a moving company led by the third generation. We have extensive experience of removals and transport services, both within and outside the country, and have acquired a good reputation with our customers. Our ambition is that through our highly professional staff we will be able to offer transport services that meet our customers' needs and special wishes." />
    <Services />

  </div>
</template>

<script setup>
import truck from "/assets/truck-min.webp"

</script>