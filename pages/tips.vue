<template>
    <div class="flex flex-col h-full">
        <Banner background="/assets/tips.jpg" class="h-[20rem] md:h-[30rem]" title="Tips" text="Moving can be a stressful and time- consuming process, but with some planning
and preparation, it can also be a smooth and hassle-free experience. Here are
some tips and advice from GoodView, to
help you with your move." />



    <div class=" bg-primary-500 w-full  p-3 md:p-10   rounded-sm">
        <div class="container" >
        <UTabs :ui="{
            wrapper: 'relative p-0',
            container: 'relative w-full py-10',
            list: {
                padding: 'p-0',
                height: 'h-16',
                rounded: 'rounded-none',
                background: 'bg-black',
                marker: {
                    background: 'bg-primary-500',
                    rounded: 'rounded-none',
                    shadow: 'shadow-none'

                },
                tab: {
                    base: 'relative inline-flex items-center font-jakarta justify-center flex-shrink-0 w-full ui-focus-visible:outline-0 ui-focus-visible:ring-2 ui-focus-visible:ring-primary-500 dark:ui-focus-visible:ring-primary-400 ui-not-focus-visible:outline-none focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 transition-colors duration-200 ease-out',
                    active: 'text-gray-900 dark:text-white',
                    inactive: 'text-primary-500 dark:text-gray-400',
                    height: 'h-16',
                    padding: 'px-3',
                    size: 'text-lg',
                    font: 'font-bold',
                    rounded: 'rounded-none',
                    shadow: '',
                    icon: 'w-4 h-4 flex-shrink-0 me-2'
                }
            },
        }" :items="items">
            <template #moving="{ item }">
                <div class="border-b-2 border-black px-32 py-10">
                    <h2 class="font-bold font-jakarta">Label Your Boxes</h2>
                    <p class="font-rubik">Clearly label each box with its contents and the room it belongs to. This helps with organization
                        and makes unpacking easier.</p>
                </div>
                <div class="border-b-2 border-black px-32 py-10">
                    <h2 class="font-bold font-jakarta">Follow Packing Instructions for Fragile Items</h2>
                    <p class="font-rubik"> For delicate items like glassware, always follow packing instructions, using proper materials
                        like bubble wrap or foam for protection.</p>
                </div>
                <div class="border-b-2 border-black px-32 py-10">
                    <h2 class="font-bold font-jakarta">Use Extended Instructions for Heavy Items</h2>
                    <p class="font-rubik">For large or heavy items, follow extended instructions on how to properly disassemble them. This
                        ensures safe transport and avoids damage.</p>
                </div>
                <div class="border-b-2 border-black px-32 py-10">
                    <h2 class="font-bold font-jakarta">Label Fragile Items as "Fragile"</h2>
                    <p class="font-rubik">Clearly mark fragile items as "Fragile" and provide additional instructions on how they should be
                        handled during the move to prevent accidents.</p>
                </div>
                <div class="border-b-2 border-black px-32 py-10">
                    <h2 class="font-bold font-jakarta">Create an Inventory List</h2>
                    <p class="font-rubik">Before you start packing, make a detailed inventory list of all items. This will help you track
                        your belongings and ensure everything arrives safely.</p>
                </div>
            </template>

            <template #packing="{ item }">
                <div class="border-b-2 border-black px-32 py-10">
                    <h2 class="font-bold font-jakarta">Use Sturdy Boxes</h2>
                    <p class="font-rubik">Choose strong, high-quality boxes that can handle the weight of your items and prevent crushing
                        during transport.</p>
                </div>
                <div class="border-b-2 border-black px-32 py-10">
                    <h2 class="font-bold font-jakarta">Wrap Fragile Items Carefully</h2>
                    <p class="font-rubik">Wrap delicate items like glassware and electronics in bubble wrap or packing paper to provide
                        extra protection from bumps and drops.</p>
                </div>
                <div class="border-b-2 border-black px-32 py-10">
                    <h2 class="font-bold font-jakarta">Pack Heavy Items in Small Boxes</h2>
                    <p class="font-rubik">Place heavier items, like books and tools, in smaller boxes to make them easier to carry and
                        avoid overloading larger boxes.</p>
                </div>
                <div class="border-b-2 border-black px-32 py-10">
                    <h2 class="font-bold font-jakarta">Fill Empty Spaces</h2>
                    <p class="font-rubik">Use packing peanuts, crumpled paper, or clothing to fill empty spaces in boxes, preventing items
                        from shifting during transit.</p>
                </div>
                <div class="border-b-2 border-black px-32 py-10">
                    <h2 class="font-bold font-jakarta">Seal Boxes Securely</h2>
                    <p class="font-rubik">Use strong packing tape to seal all boxes, ensuring they stay closed during the move and protect
                        your belongings from dirt and moisture.</p>
                </div>
            </template>

        </UTabs>
</div>
    </div>
    </div>
</template>

<script setup>
const items = [{
    label: 'Moving Tips',
    icon: 'i-carbon-delivery-truck',
    slot: 'moving'
}, {
    label: 'Packing Tips',
    icon: 'i-carbon-box',
    slot: 'packing'
}
]

</script>