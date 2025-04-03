<template>
  <div class="flex flex-col h-full">
    <Banner background="/assets/banner-mini.webp" class="lg:h-[calc(71dvh-4rem)] "
      title="Reliable, Affordable, and Hassle-Free Moving Services!"
      text="At Good View Moving, we make every step seamless with professional moving services tailored to your needs. We offer affordable moving with transparent moving costs to fit your budget.">

      <template #body="isVisible">
        <QuoteInputs :isVisible="isVisible.isVisible" />
      </template>


    </Banner>

    <Intro img="/assets/new_truck.png" title="Decades of Moving Experience, Built on Trust"
      text="Good View Moving & Storage started as a family business in New Jersey and is now a third-generation full-service moving company. With years of experience in professional moving services, we've built a reputation for reliable moves, both local and long-distance."
      subtext="Our expert team ensures a smooth moving process, offering everything from packing to secure storage solutions. But don’t just take our word for it—our Good View Moving reviews speak for themselves."
      subtext2="Need a stress-free move? Get a moving quote today!" />

    <Services />

  </div>
</template>
