<template>
  <div class="container m-auto bg-re-500 px-6 mt-16 text-primary">
    <div class="font-Inter relative">
        <div class="sm:flex w-full justify-between">

            <div class="">
                <h1 class="font-semibold text-5xl md:text-[56px] leading-[56px]">Categories</h1>
                <h2 class="text-base text-secondary mt-2 hidden xs:block">Here are lots of interesting destinations to visit, <br> but don’t be confused—they’re already grouped <br> by category.</h2>
                <h2 class="text-base text-secondary mt-2 xs:hidden">Here are lots of interesting destinations to visit, but don’t be confused—they’re already grouped by category.</h2>
            </div>
            <div class="mt-9 sm:mt-0 flex justify-center">
                <button class="bg-transparent border-[1px] border-primary w-[54px] h-[54px] rounded-full mr-4">
                    <img :src="`./assets/icons/Arrow Left.svg`" alt="" loading="lazy" class="m-auto">
                </button>
                <button class=" bg-primary w-[54px] h-[54px] rounded-full ">
                    <img :src="`./assets/icons/Arrow Right.svg`" alt="" loading="lazy" class="m-auto">
                </button>
            </div>
        </div>
        <div class="w-full grid grid-cols-3 md:grid-cols-6 mt-16 gap-[30px]">
            <div class="" v-for="image in Images" :key="image" >
                <div class="relative group cursor-pointer rounded-full">
                    <img class="rounded-full img" :src="`./assets/img/${image.link}`" alt="" loading="lazy">
                    <div class="absolute top-0 w-full h-full rounded-full bg-black/30 opacity-0 group-hover:opacity-100 duration-200">
                        <h1 class=" absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-50 font-Inter font-semibold text-[20px] img-hover:text-red-500">Visit</h1>
                    </div>
                </div>
                <h1 class="font-Inter font-medium text-lg md:text-[26px] text-center mt-4">{{image.name}}</h1>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        let Images = [
            {name : 'Beach', link: 'Rectangle 4406.jpg'},
            {name : 'Desert', link: 'Rectangle 4407.jpg'},
            {name : 'Mountain', link: 'Rectangle 4408.jpg'},
            {name : 'Temple', link: 'Rectangle 4409.jpg'},
            {name : 'Tower', link: 'Rectangle 4410.jpg'},
            {name : 'Pyramid', link: 'Rectangle 4411.jpg'},
        ]
            return {Images}
    }
}
</script>

<style>

</style>