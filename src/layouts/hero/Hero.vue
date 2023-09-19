<template>
    <section class="relative">
        <div class="absolute left-0 right-0 h-full overflow-y-hidden hidden md:block">
            <BgHero />
        </div>
        <div class="max-w-screen-xl mx-auto px-4">
            <div class="grid grid-cols-1 lg:grid-cols-2 place-items-center">
                <div class="lg:order-2 pt-16 relative">
                    <img src="../../assets/images/hero/hero-image.png" alt="hero" class="px-4">
                    <img src="../../assets/images/hero/count-card-small.png" alt="count-card.png"
                        class="absolute bottom-0 left-1/2  -translate-x-1/2 translate-y-1/2 w-10/12 block md:hidden">
                </div>
                <div class="lg:order-1 pt-32 md:pt-16 relative">
                    <div class="text-orange-500 uppercase font-medium">ONLINE EDUCATION</div>
                    <h1
                        class="max-w-2xl mb-4 text-4xl font-bold tracking-loose !leading-[1.3] md:text-5xl xl:text-6xl mt-2 text-gray-800">
                        Learn The <br>
                        Skills You Need <br>
                        To <span class="text-orange-500">Succeed</span>
                    </h1>
                    <p class="max-w-2xl mb-6 font-light text-gray-900 lg:mb-8 md:text-lg lg:text-xl">
                        Free online courses from the world’s Leading experts. join 18+ million Learners today.
                    </p>
                    <p class="max-w-2xl mb-6 font-light text-gray-900 lg:mb-8 md:text-lg lg:text-xl">
                        Most Popular: <strong>Math</strong>
                    </p>
                    <RouterLink to="/courses"
                        class="text-white bg-orange-500 font-medium rounded-lg px-4 py-2.5 hover:bg-orange-600 focus:ring-4 focus:ring-orange-300 focus:outline-none">
                        Get started</RouterLink>
                </div>
            </div>
            <img src="../../assets/images/hero/count-card.png" alt="count-card.png"
                class="md:absolute md:bottom-0 md:left-1/2 md:-translate-x-1/2 md:translate-y-1/2 hidden md:block w-6/12">
        </div>
    </section>
</template>

<script setup lang="ts">
import BgHero from './BgHero.vue'
</script>

