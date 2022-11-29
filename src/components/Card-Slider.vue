<template>
    <section class="bg-re-500 pt-28 px-6 text-primary bg-background relative w-full overflow-hidden pb-5">
        <div class="container m-auto">
            <!-- Header -->
            <div class="md:flex justify-between items-center container m-auto">
                <h1 class="font-Inter font-semibold text-[56px] leading-[66px]">Find Popular <br> Destination</h1>
                <div class="mt-9 lg:mt-0 flex justify-center">
                    <button class=" bg-transparent border-[1px] border-primary w-[54px] h-[54px] rounded-full mr-4">
                        <img :src="`./assets/icons/Arrow Left.svg`" alt="" class="m-auto">
                    </button>
                    <button class=" bg-primary w-[54px] h-[54px] rounded-full ">
                        <img :src="`./assets/icons/Arrow Right.svg`" alt="" class="m-auto">
                    </button>
                </div>
            </div>

            <!-- Carousel -->
            <div class="container m-auto mt-9 ">
                <div class="w-auto gap-7 flex flex-row justify-start">
                    <div class="card-feature min-w-[386px] max-w-[386px] max-h-[440px] min-h-[440px] rounded-2xl p-3 border-2 border-white duration-150 hover:shadow-[0px_5px_20px_7px_rgba(0,0,0,0.05)]">
                        <img :src="`./assets/img/image.jpg`" alt="" class="rounded-2xl w-full">
                        <div class="px-3 mt-6">
                            <h1 class="font-Inter font-semibold text-2xl">Mountain Hiking Tour</h1>
                            <h2 class="text-secondary text-sm mt-3">Mountain Hiking Tour</h2>
                            <div class="w-full flex justify-between mt-6 items-center">
                                <h1 class=" text-2xl font-semibold">$89 <span
                                        class="text-base text-secondary">/Person</span>
                                </h1>
                                <button
                                    class="px-4 py-2 duration-100 hover:bg-primary border-primary border-[1px] hover:text-white rounded-full font-Inter text-sm font-normal">Book
                                    Now</button>
                            </div>
                        </div>
                    </div>
                    <div class="card-feature min-w-[386px] max-w-[386px] max-h-[440px] min-h-[440px] rounded-2xl p-3 border-2 border-white duration-150 hover:shadow-[0px_5px_20px_7px_rgba(0,0,0,0.05)]">
                        <img :src="`./assets/img/image-1.jpg`" alt="" class="rounded-2xl w-full">
                        <div class="px-3 mt-6">
                            <h1 class="font-Inter font-semibold text-2xl">Machu Picchu, Peru</h1>
                            <h2 class="text-secondary text-sm mt-3">Machu Picchu, Peru</h2>
                            <div class="w-full flex justify-between mt-6 items-center">
                                <h1 class=" text-2xl font-semibold">$99 <span
                                        class="text-base text-secondary">/Person</span>
                                </h1>
                                <button
                                    class="px-4 py-2 duration-100 hover:bg-primary border-primary border-[1px] hover:text-white rounded-full font-Inter text-sm font-normal">Book
                                    Now</button>
                            </div>
                        </div>
                    </div>
                    <div class="card-feature min-w-[386px] max-w-[386px] max-h-[440px] min-h-[440px] rounded-2xl p-3 border-2 border-white duration-150 hover:shadow-[0px_5px_20px_7px_rgba(0,0,0,0.05)]">
                        <img :src="`./assets/img/image-2.jpg`" alt="" class="rounded-2xl w-full">
                        <div class="px-3 mt-6">
                            <h1 class="font-Inter font-semibold text-2xl">The Grand Canyon, Arizona</h1>
                            <h2 class="text-secondary text-sm mt-3">Mountain Hiking Tour</h2>
                            <div class="w-full flex justify-between mt-6 items-center">
                                <h1 class=" text-2xl font-semibold">$70 <span
                                        class="text-base text-secondary">/Person</span>
                                </h1>
                                <button
                                    class="px-4 py-2 duration-100 hover:bg-primary border-primary border-[1px] hover:text-white rounded-full font-Inter text-sm font-normal">Book
                                    Now</button>
                            </div>
                        </div>
                    </div>
                    <div class="card-feature min-w-[386px] max-w-[386px] max-h-[440px] min-h-[440px] rounded-2xl p-3 border-2 border-white duration-150 hover:shadow-[0px_5px_20px_7px_rgba(0,0,0,0.05)]">
                        <img :src="`./assets/img/image-3.jpg`" alt="" class="rounded-2xl w-full">
                        <div class="px-3 mt-6">
                            <h1 class="font-Inter font-semibold text-2xl">Rome, Italy</h1>
                            <h2 class="text-secondary text-sm mt-3">Mountain Hiking Tour</h2>
                            <div class="w-full flex justify-between mt-6 items-center">
                                <h1 class=" text-2xl font-semibold">$99 <span
                                        class="text-base text-secondary">/Person</span>
                                </h1>
                                <button
                                    class="px-4 py-2 duration-100 hover:bg-primary border-primary border-[1px] hover:text-white rounded-full font-Inter text-sm font-normal">Book
                                    Now</button>
                            </div>
                        </div>
                    </div>
                    

                </div>
            </div>
        </div>

    </section>

</template>

<script>
export default {

}
</script>

<style>

</style>