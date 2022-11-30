<template>
  <section>
    <div class="container m-auto px-6 pt-28 pb-6 text-primary font-Inter lg:flex">
        <div class="w-full lg:w-1/2 flex justify-center">
              <img :src="`./assets/img/guy.png`" alt="" class="bg-[#EE8162] rounded-full w-[390px]">
        </div>
        <div class="w-full lg:w-1/2">
          <div class="w-16 h-2 bg-[#FFD482] rounded-full"></div>
          <h1 class="text-5xl md:text-[56px] font-semibold leading-[66px] mt-3 hidden sm:block">A Customer Said <br> About Us:</h1>
          <h1 class="text-5xl md:text-[56px] font-semibold leading-[66px] mt-3 sm:hidden">A Customer Said About Us:</h1>
          <div class="w-full bg-white rounded-[14px] p-8 mt-[26px] relative">
            <p class="text-secondary text-lg">Salty helped me a lot in finding the best place for our first outdoor adventure trip. They responded very quickly and gave me a detailed account of the place—its history, as well as its best features.</p>
            <div class="flex gap-1 mt-7">
              <img :src="`./assets/icons/Star.svg`" alt="">
              <img :src="`./assets/icons/Star.svg`" alt="">
              <img :src="`./assets/icons/Star.svg`" alt="">
              <img :src="`./assets/icons/Star.svg`" alt="">
              <img :src="`./assets/icons/Star.svg`" alt="">
            </div>
            <h1 class="text-xl font-medium mt-4">Andrew Sarma</h1>
            <p class="text-xs mt-2">Enterpreneur </p>
            <div class="absolute right-8 bottom-8">
              <button class="bg-transparent border-[1px] border-primary w-[40px] h-[40px] rounded-full mr-4">
                    <img :src="`./assets/icons/Arrow Left.svg`" alt="" loading="lazy" class="m-auto">
                </button>
                <button class=" bg-primary w-[40px] h-[40px] rounded-full ">
                    <img :src="`./assets/icons/Arrow Right.svg`" alt="" loading="lazy" class="m-auto">
                </button>
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