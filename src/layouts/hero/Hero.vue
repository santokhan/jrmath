<template>
    <section class="relative">
        <div class="absolute left-0 right-0 h-full overflow-y-hidden hidden md:block">
            <BgHero />
        </div>
        <div class="max-w-screen-xl mx-auto px-4 relative">
            <div class="grid grid-cols-1 lg:grid-cols-2 place-items-center">
                <div class="lg:order-2 pt-16 relative">
                    <img src="../../assets/images/hero/hero-image.png" alt="hero" class="px-4">
                    <div class="grid lg:hidden place-items-center">
                        <div class="w-full max-w-lg rounded-xl banner-sm">
                            <Banner />
                        </div>
                    </div>
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
                        Most Popular: <strong>Mathematics</strong>
                    </p>
                    <RouterLink to="/signin"
                        class="text-white bg-orange-500 font-medium rounded-lg px-4 py-2.5 hover:bg-orange-600 focus:ring-4 focus:ring-orange-300 focus:outline-none">
                        Get started</RouterLink>
                </div>
            </div>
            <div class="hidden md:grid place-items-center w-full absolute bottom-0 translate-y-1/2">
                <div class="w-full max-w-2xl rounded-xl banner">
                    <Banner />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import BgHero from './BgHero.vue';
import Banner from './Banner.vue';
</script>

<style scoped>
.banner {
    background-image: url(/images/hero/bg-hero-banner.png);
    background-position: center;
    background-size: cover;
}

.banner-sm {
    background-image: url(/images/hero/bg-hero-banner-sm.png);
    background-position: center;
    background-size: cover;
}
</style>