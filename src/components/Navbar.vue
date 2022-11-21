<template>
  <nav class="w-full h-20">
    <div class=" container h-full m-auto flex items-center justify-between">
        <div class="flex items-center">
            <div class="flex items-center">
                <img src="../assets/Union.svg" alt="">
                <span class="font-Sen font-bold text-xl text-primary">Salty</span>
            </div>
            <div class="flex items-center ml-16">
                <ul class="flex text-third text-base font-normal font-Poppins gap-9">
                    <li class="" v-for="link in Links">
                        <a :href="link.link"
                        class="relative after:contents-[''] after:h-[2px] after:w-0 after:left-0 after:bg-accent after:absolute after:bottom-[-6px] after:duration-300 hover:after:w-3 cursor-pointer"> 
                        {{link.name}}
                        </a>
                    </li>
                </ul>
            </div> 
        </div>
        <div class="">
            <Button/>
            
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
        return { Links }
    },
    components : {
        Button
    }
}
</script>

<style>

</style>