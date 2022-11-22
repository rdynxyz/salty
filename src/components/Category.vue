<template>
  <div class="container m-auto bg-re-500 px-6 mt-20 text-primary">
    <div class="font-Inter relative">
        <h1 class="font-semibold text-[56px]">Categories</h1>
        <h2 class="text-base text-secondary mt-2">Here are lots of interesting destinations to visit, <br> but don’t be confused—they’re already grouped <br> by category.</h2>
        <button class="absolute right-0 top-4 bg-primary w-[54px] h-[54px] rounded-full "></button>
        <button class="absolute right-[72px] top-4 bg-primary w-[54px] h-[54px] rounded-full "></button>
        <div class="w-full grid grid-cols-6 mt-16 gap-[30px]">
            <div class="" v-for="image in Images" :key="image" >
                <div class="relative group cursor-pointer rounded-full">
                    <img class="rounded-full img" :src="`./assets/img/${image.link}`" alt="">
                    <div class="absolute top-0 w-full h-full rounded-full bg-black/30 opacity-0 group-hover:opacity-100 duration-200">
                        <h1 class=" absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-50 font-Inter font-semibold text-[20px] img-hover:text-red-500">Visit</h1>
                    </div>
                </div>
                <h1 class="font-Inter font-medium text-[26px] text-center mt-4">{{image.name}}</h1>
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