<template>
  <section>
    <div class="container m-auto px-6 pt-28 pb-6 text-primary font-Inter md:flex justify-between">
      <div class="logo-media flex flex-col items-center md:items-start">
        <div class="flex items-center">
          <img src="../assets/Union.svg" alt="" loading="lazy">
          <span class="font-Sen font-bold text-xl text-primary ml-[6px]">Salty</span>
        </div>
        <p class="text-secondary leading-6 mt-5 text-center md:text-left">Enjoy the touring <br> with Salty</p>
        <div class="mt-[40px] flex gap-[14px]">
          <a v-for="media in medias" :key="media" class="group w-8 h-8 border-[1px] border-secondary rounded-full flex hover:border-accent duration-100 cursor-pointer">
            <img :src="media.src" alt="" class="m-auto">
          </a>
        </div>
      </div>
      <div class="menu md:flex gap-[113px]">
        <div v-for="menu in menus"  :key="menu" class=" text-footer text-sm capitalize mt-10 md:mt-0">
          <h1 class="text-primary font-medium text-lg text-center md:text-start">{{menu.header}}</h1>
          <div class="gap-3 flex flex-col mt-5 items-center md:items-start">
            <a href="">{{menu.menu1}}</a>
            <a href="">{{menu.menu2}}</a>
            <a href="">{{menu.menu3}}</a>
            <a href="">{{menu.menu4}}</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  setup(){
    let medias = [
      {src: './assets/icons/Facebook.svg',},
      {src: './assets/icons/Instagram.svg'},
      {src: './assets/icons/Twitter.svg'},
    ]
    let menus = [
      {header : 'Resources', menu1 : 'Download ', menu2 : 'Help Center', menu3 : 'Guide Book', menu4 : 'App Directory'},
      {header : 'Travellers', menu1 : 'Why Travellers', menu2 : 'Enterprice', menu3 : 'Customer Stories', menu4 : 'Instagram post'},
      {header : 'Company', menu1 : 'Travelling', menu2 : 'About Locato', menu3 : 'Success', menu4 : 'Information'},
      {header : 'Get App', menu1 : 'App Store', menu2 : 'Google Play Store', menu3 : '', menu4 : ''},
    ]
    return {medias, menus}
  }
}
</script>

<style>

</style>