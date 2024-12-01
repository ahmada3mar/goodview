<template>
    <USlideover side="left" 
    :ui="{width: 'w-3/4' ,  
     base: 'relative flex flex-col focus:outline-none',
     overlay:{
      background:'bg-primary-500/50'
     }

    }" >
      <UButton color="primary" variant="ghost"
       class="hover:text-black hover:bg-primary-500 flex sm:hidden absolute end-5 top-5 z-10" size="xl" icon="i-heroicons-x-mark-solid"
       square padded 
        @click="useSlideover().close()" />
      <MobileNan />
    </USlideover>
</template>
