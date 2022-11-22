<template>
  <nav class="w-full h-24 fixed md:relative bg-background">
    <div class=" container h-full m-auto flex items-center px-6  ">
        <div class="flex items-center w-full">
            <div class="flex items-center z-50">
                <img src="../assets/Union.svg" alt="">
                <span class="font-Sen font-bold text-xl text-primary">Salty</span>
            </div>
            <span @click="MenuOpen()" class="absolute block md:hidden right-6 text-2xl z-50">
                <i :class="[open ? 'fa-solid fa-xmark' : 'fa-solid fa-bars']"></i>
            </span>
            <div class="md:flex pt-40 justify-between md:pt-0 md:ml-16 md:relative fixed bg-background h-full top-0 bottom-0 md:left-auto left-0 w-full pl-6 md:pl-0 md:top-auto md:h-auto md:bg-transparent z-40 ease-in-out duration-300 "
            :class="[open ? 'left-0 ' : 'left-[-100%] ']">
                <ul class="md:flex text-third md:text-base text-xl font-normal font-Poppins gap-9">
                    <li class="mb-4 md:mb-0 flex items-center" v-for="link in Links" :key="link">
                        <a :href="link.link"
                        class="relative after:contents-[''] after:h-[2px] after:w-0 after:left-0 after:bg-accent after:absolute after:bottom-[-6px] after:duration-300 hover:after:w-3 cursor-pointer"> 
                        {{link.name}}
                        </a>
                    </li>
                </ul>
                <div class="z-50">
                    <Button/>
                    
                </div>
            </div> 
        </div>
    </div>
  </nav>
</template>

<script>
import { ref } from '@vue/reactivity'
import Button from './Button-navbar.vue'

export default {
    setup(){
        let Links = [
            { name: "Home", link: "#" },
            { name: "About Us", link: "#" },
            { name: "Destinations", link: "#" },
            { name: "Tours", link: "#" },
            { name: "Blog", link: "#" },
        ]
        let open = ref(false)
        function MenuOpen(){
            open.value = !open.value
        }
        return { Links, open, MenuOpen }
    },
    components : {
        Button
    }
}
</script>

<style>

</style>