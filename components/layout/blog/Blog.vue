<template>
    <section class="">
        <LayoutAppContainer>
            <SectionTitleBox>
                <SectionTag>LATEST NEWS</SectionTag>
                <SectionHeading>
                    Blogs & Latest Articles
                </SectionHeading>
            </SectionTitleBox>

            <div class="flex flex-wrap justify-center gap-8 py-8">
                <div v-for="(item, index) in [1, 2, 3, 4, 5, 6]" :key="index"
                    class="max-w-[22rem] bg-white rounded-xl overflow-hidden relative" title="card">
                    <div class="">
                        <img src="../../../assets/images/courses/1.png" alt="c" class="h-60 w-full object-cover bg-white">
                    </div>
                    <div class="relative p-4 space-y-3">
                        <div class="flex items-center gap-2">
                            <div class="flex gap-2 items-center">
                                <IconsClock />
                                <span class="text-gray-700">03 reviews</span>
                            </div>
                        </div>
                        <div>
                            <h4 class="text-xl font-semibold">Fundamentals of Adobe XD Theory Learn New</h4>
                        </div>
                        <div class="flex justify-between items-center py-2">
                            <a href="/blog"
                                class="text-white bg-orange-500 font-medium rounded-lg text- sm px-4 py-2 hover:bg-orange-600 focus:ring-4 focus:ring-orange-300 focus:outline-none">
                                Read more</a>
                        </div>
                    </div>
                </div>
            </div>
        </LayoutAppContainer>
    </section>
</template>

<script setup lang="ts">
</script>

<style scoped></style>