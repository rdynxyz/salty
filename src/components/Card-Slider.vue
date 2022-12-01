<template>
    <section class="relative w-full overflow-hidden">
        <div class="container m-auto pt-28 px-6 pb-6 text-primary">
            <!-- Header -->
            <div class="sm:flex justify-between items-center container m-auto">
                <h1 class="font-Inter font-semibold  text-5xl md:text-[56px] leading-[66px]">Find Popular <br>
                    Destination</h1>
                <div class="mt-9 lg:mt-0 flex justify-center">
                    <button id="prevBtn"
                        class=" bg-transparent border-[1px] border-primary w-[54px] h-[54px] rounded-full mr-4">
                        <img :src="`./assets/icons/Arrow Left.svg`" alt="" loading="lazy" class="m-auto">
                    </button>
                    <button id="nextBtn" class=" bg-primary w-[54px] h-[54px] rounded-full ">
                        <img :src="`./assets/icons/Arrow Right.svg`" alt="" loading="lazy" class="m-auto">
                    </button>
                </div>
            </div>

            <!-- Carousel -->
            <div class="container m-auto mt-9 ">
                <div class="w-auto gap-7 flex flex-row justify-start overflow-x-scroll scrollbar-non">
                    <div v-for="card in cards" :key="card"
                        class="card-feature min-w-[386px] max-w-[386px] max-h-[440px] min-h-[440px] rounded-2xl p-3 border-2 border-white duration-150 hover:shadow-[0px_5px_20px_7px_rgba(0,0,0,0.05)]">
                        <img :src="card.img" alt="" class="rounded-2xl w-full">
                        <div class="px-3 mt-6">
                            <h1 class="font-Inter font-semibold text-2xl">{{ card.name }}</h1>
                            <h2 class="text-secondary text-sm mt-3">{{ card.type }}</h2>
                            <div class="w-full flex justify-between mt-6 items-center">
                                <h1 class=" text-2xl font-semibold">{{ card.price }}<span
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
    setup() {
        let cards = [
            { img: './assets/img/image.jpg', name: 'Mountain Hiking Tour', type: 'Mountain Hiking Tour', price: '$89' },
            { img: './assets/img/image-1.jpg', name: 'Machu Picchu, Peru', type: 'Machu Picchu, Peru', price: '$99' },
            { img: './assets/img/image-2.jpg', name: 'The Grand Canyon, Arizona', type: 'Mountain Hiking Tour', price: '$70' },
            { img: './assets/img/image-3.jpg', name: 'Rome, Italy', type: 'Mountain Hiking Tour', price: '$99' },
        ]
        return { cards }
    }
    // data() {
    //     let prevBtn = document.getElementById('prevBtn');
    //     let nextBtn = document.getElementById('nextBtn');
    //     let product = document.getElementsByClassName('card-feature');
    //     let productPage = Math.ceil(productPage/3);
    //     let moverPer = 25.34;
    //     let maxMove = 203;

    //     let rightMover = () =>{
    //         l = l + moverPer;
    //         if(product == 1) {l = 0}
    //         for(const i of product){
    //             if (l > maxMove){
    //                 l = l - moverPer
    //             } i.style.left = '-' + l + '%'
    //         }
    //     }
    //     nextBtn.onclick = () => {rightMover()}
    //     return {rightMover, prevBtn, nextBtn, maxMove,moverPer, product, Pageproduct}
    // }
}
</script>

<style>

</style>