<template>
  <div class="flex flex-col h-full">
    <Banner background="/assets/banner-mini.webp"
    class="h-[calc(100dvh-4rem)]" title=" Professional Moving Services & Affordable Prices"
      text="For long-distance moves in US, with Pick Up and Delivery Service Nation Wide">

      <template #body="isVisible">
        <QuoteInputs :isVisible="isVisible.isVisible" />
      </template>


    </Banner>

    <Intro img="/assets/new_truck.png" title="FOR MOVING ACROSS THE COUNTRY"
      text="GoodView Moving And Storage is a family business that was established in New Jersey, and is now a moving company led by the third generation. We have extensive experience of removals and transport services, both within and outside the country, and have acquired a good reputation with our customers. Our ambition is that through our highly professional staff we will be able to offer transport services that meet our customers' needs and special wishes." />
    <Services />

  </div>
</template>
