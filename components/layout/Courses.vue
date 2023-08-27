<template>
    <section class="">
        <LayoutAppContainer>
            <SectionTitleBox>
                <SectionTag>FIND A COURSE</SectionTag>
                <SectionHeading>
                    Pick A Course To Get Started
                </SectionHeading>
            </SectionTitleBox>

            <div class="flex flex-wrap justify-center gap-8 py-8">
                <div v-for="(item, index) in [1, 2, 3]" :key="index"
                    class="max-w-[22rem] space-y-4 bg-white rounded-xl overflow-hidden relative" title="card">
                    <div class="">
                        <div class="">
                            <img src="../../assets/images/courses/1.png" alt="c" class="h-60 w-full object-cover bg-white">
                        </div>
                        <div class="relative px-4 py-5 space-y-3">
                            <div
                                class="bg-orange-500 text-white h-14 w-14 rounded-full flex items-center justify-center font-bold absolute right-4 -top-6 text-xl border-2 border-white">
                                $30</div>
                            <div class="flex items-center gap-2">
                                <div class="bg-orange-500 text-white px-2 py-0.5 rounded font-medium text-sm">
                                    <a href="#" class="text-white flex items-center gap-1">
                                        <span class="block w-2 h-2 bg-white rounded-full"></span> Adobe XD</a>
                                </div>
                                <div class="course-reiew">
                                    <span class="ratting">
                                        <i class="icofont-ui-rating"></i>
                                        <i class="icofont-ui-rating"></i>
                                        <i class="icofont-ui-rating"></i>
                                        <i class="icofont-ui-rating"></i>
                                        <i class="icofont-ui-rating"></i>
                                    </span>
                                    <span class="text-gray-700">03 reviews</span>
                                </div>
                            </div>
                            <div>
                                <a href="/course-single" class="hover:text-orange-500">
                                    <h4 class="text-xl font-semibold">Fundamentals of Adobe XD Theory Learn New</h4>
                                </a>
                            </div>
                            <div class="flex justify-between items-center py-2">
                                <div class="flex items-center gap-1">
                                    <IconsVideo /> 18x Lesson
                                </div>
                                <div class="course-btn">
                                    <a href="/courses"
                                        class="text-white bg-orange-500 font-medium rounded-lg text- sm px-4 py-2.5 hover:bg-orange-600 focus:ring-4 focus:ring-orange-300 focus:outline-none">
                                        Get started</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="space-y-8">
                <div class="">
                    <SectionHeading>Bunny</SectionHeading>
                    <br>
                    <div style="position:relative;padding-top:56.25%;"><iframe
                            src="https://iframe.mediadelivery.net/embed/150582/9294f084-62dd-410c-a8b4-4449aae58910?autoplay=true&loop=false&muted=false&preload=true"
                            loading="lazy" style="border:none;position:absolute;top:0;height:100%;width:100%;"
                            allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;"
                            allowfullscreen="true"></iframe>
                    </div>
                </div>
                <div class="">
                    <SectionHeading>Vimeo</SectionHeading>
                    <br>
                    <div style="padding:56.25% 0 0 0;position:relative;"><iframe
                            src="https://player.vimeo.com/video/858244150?badge=0&autopause=0&player_id=0&app_id=58479/embed"
                            allow="autoplay; fullscreen; picture-in-picture" allowfullscreen frameborder="0"
                            style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></div>
                </div>
                <div class="">
                    <SectionHeading>VdoChiper</SectionHeading>
                    <br>
                    <div style="padding-top:41%;position:relative;">
                        <iframe
                            src="https://player.vdocipher.com/v2/?otp=20160313versASE323GvRWcoAwL6TXm8j2pwPGkTSKEzquDB5YDZHcAGqsbpb9iY&playbackInfo=eyJ2aWRlb0lkIjoiMDhjMTI1MzMyYjk5NDY2NmFlN2NlYTA2YTUyMzk0ZTYifQ=="
                            style="border:0;max-width:100%;position:absolute;top:0;left:0;height:100%;width:100%;"
                            allowFullScreen="true" allow="encrypted-media"></iframe>
                    </div>
                </div>
            </div>
        </LayoutAppContainer>
    </section>
</template>

<script setup lang="ts">
</script>

<style scoped></style>