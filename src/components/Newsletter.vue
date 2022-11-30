<template>
  <section>
    <div class="container m-auto px-6 pt-28 pb-6 text-primary font-Inter">
        <div class="container bg-[#FFD482] h-[358px] rounded-[30px] flex flex-col justify-center items-center">
            <h1 class="font-semibold text-[40px]">Sign up to our newsletter</h1>
            <h1 class="text-secondary mt-4 text-center">Reciev latest news, update, and many other things <br> every week. </h1>
            <div class="w-[450px] h-[60px] rounded-xl mt-[40px] bg-white relative">
                <input type="email" name="" id="" placeholder="Enter Your email address" class="w-96 h-full rounded-xl p-6 text-primary text-sm focus:outline-none">
                <button class="w-[40px] h-[40px] bg-accent rounded-xl right-3 top-[10px] absolute flex">
                    <img :src="`./assets/icons/Send.svg`" alt="" class="m-auto">
                </button>
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