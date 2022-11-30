<template>
    <section>
        <div class="container m-auto px-6 pt-28 pb-6 text-primary font-Inter">
            <div class="flex flex-col items-center">
                <h1 class="text-[56px] font-semibold">Top Destinations</h1>
                <span class="text-secondary text-base mt-3">Sost Brilliant reasons Entrada should be your
                    one-stop-shop!</span>
            </div>
            <div class="flex justify-center mt-7 gap-[14px] overflow-hidden">
                <button
                    class="px-4 py-2 duration-100 hover:bg-primary active:bg-primary border-primary border-[1px] hover:text-white rounded-full font-Inter text-sm font-normal">London</button>
                <button
                    class="px-4 py-2 duration-100 hover:bg-primary active:bg-primary border-primary border-[1px] hover:text-white rounded-full font-Inter text-sm font-normal">Bangkok</button>
                <button
                    class="px-4 py-2 duration-100 hover:bg-primary active:bg-primary border-primary border-[1px] hover:text-white rounded-full font-Inter text-sm font-normal">England</button>
                <button
                    class="px-4 py-2 duration-100 hover:bg-primary active:bg-primary border-primary border-[1px] hover:text-white rounded-full font-Inter text-sm font-normal">Singapore</button>
                <button
                    class="px-4 py-2 duration-100 hover:bg-primary active:bg-primary border-primary border-[1px] hover:text-white rounded-full font-Inter text-sm font-normal">Italy</button>
            </div>
            <div class="container flex mt-8 gap-[30px] overflow-hidde">
                <div class="flex gap-[30px]">
                    <div class="flex flex-col gap-[26px]">
                        <div>
                            <img :src="`./assets/img/Rectangle 4389.jpg`" alt="" class="rounded-[20px]">
                        </div>
                        <div class="">
                            <img :src="`./assets/img/Rectangle 4390.jpg`" alt="" class="rounded-[20px]">
                        </div>
                    </div>
                    <div class="">
                        <img :src="`./assets/img/Rectangle 4391.jpg`" alt="" class="rounded-[20px]">
                    </div>
                </div>
                <div class="flex flex-col gap-3">
                    <div class="">
                        <img :src="`./assets/img/Rectangle 4392.jpg`" alt="" class="rounded-[20px]">

                    </div>
                    <div class="flex gap-[30px]">
                        <div class="">
                            <img :src="`./assets/img/Rectangle 4394.jpg`" alt="" class="rounded-[20px]">

                        </div>
                        <div class="">
                            <img :src="`./assets/img/Rectangle 4395.jpg`" alt="" class="rounded-[20px]">

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