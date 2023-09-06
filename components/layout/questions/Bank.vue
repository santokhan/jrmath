<template>
    <section>
        <LayoutAppContainer>
            <SectionTitleBox>
                <SectionTag>Quiz</SectionTag>
                <SectionHeading>
                    Try out best quizes
                </SectionHeading>
            </SectionTitleBox>

            <div>
                <div v-for="(item, index) in [1, 2, 3, 4, 5]" :key="index"
                    class="bg-white px-8 py-8 rounded-lg w-full mt-8 max-w-screen-sm mx-auto">
                    <h4 class="text-xl font-semibold mb-4">When Did Facebook Launch?</h4>
                    <label for="a" class="block bg-gray-50 rounded-lg py-2 px-6 text-lg bg-orange-200">
                        <input id="a" type="radio" class="hidden" value="a" disabled=""> 2005</label><label for="b"
                        class="block mt-4 bg-gray-50 rounded-lg py-2 px-6 text-lg">
                        <input id="b" type="radio" class="hidden" value="b" disabled=""> 2008</label><label for="c"
                        class="block mt-4 bg-gray-50 rounded-lg py-2 px-6 text-lg">
                        <input id="c" type="radio" class="hidden" value="c" disabled=""> 2003</label><label for="d"
                        class="block mt-4 bg-gray-50 rounded-lg py-2 px-6 text-lg bg-green-200">
                        <input id="d" type="radio" class="hidden" value="d" disabled=""> 2004</label>
                    <div class="mt-6 flex justify-end">
                        <button
                            class="focus:outline-none text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg px-4 py-2.5"
                            data-v-inspector="layouts/footer/AppFooter.vue:26:29">Check</button>
                        <button
                            class="hidden focus:outline-none text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg px-4 py-2.5"
                            data-v-inspector="layouts/footer/AppFooter.vue:26:29">Finish</button>
                    </div>
                </div>
            </div>
        </LayoutAppContainer>
    </section>
</template>

<script setup lang="ts">

</script>

<style scoped></style>