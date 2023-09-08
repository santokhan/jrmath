<template>
    <section class="">
        <AppContainer>
            <TitleBox>
                <Tag>FIND A COURSE</Tag>
                <Heading>
                    Pick A Course To Get Started
                </Heading>
            </TitleBox>

            <div class="space-y-8">
                <div class="">
                    <Heading>Bunny</Heading>
                    <br>
                    <div style="position:relative;padding-top:56.25%;"><iframe
                            src="https://iframe.mediadelivery.net/embed/150582/9294f084-62dd-410c-a8b4-4449aae58910?autoplay=true&loop=false&muted=false&preload=true"
                            loading="lazy" style="border:none;position:absolute;top:0;height:100%;width:100%;"
                            allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;"
                            allowfullscreen="true"></iframe>
                    </div>
                </div>
                <div class="">
                    <Heading>Vimeo</Heading>
                    <br>
                    <div style="padding:56.25% 0 0 0;position:relative;"><iframe
                            src="https://player.vimeo.com/video/858244150?badge=0&autopause=0&player_id=0&app_id=58479/embed"
                            allow="autoplay; fullscreen; picture-in-picture" allowfullscreen frameborder="0"
                            style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></div>
                </div>
                <div class="">
                    <Heading>VdoChiper</Heading>
                    <br>
                    <div style="padding-top:41%;position:relative;">
                        <iframe
                            src="https://player.vdocipher.com/v2/?otp=20160313versASE323GvRWcoAwL6TXm8j2pwPGkTSKEzquDB5YDZHcAGqsbpb9iY&playbackInfo=eyJ2aWRlb0lkIjoiMDhjMTI1MzMyYjk5NDY2NmFlN2NlYTA2YTUyMzk0ZTYifQ=="
                            style="border:0;max-width:100%;position:absolute;top:0;left:0;height:100%;width:100%;"
                            allowFullScreen="true" allow="encrypted-media"></iframe>
                    </div>
                </div>
                <div class="">
                    <Heading>VdoChiper</Heading>
                    <br>
                    <!-- The script tag should live in the head of your page if at all possible -->

                    <!-- Put this wherever you would like your player to appear -->
                    <img style="width: 100%; margin: auto; display: block;" class="vidyard-player-embed"
                        src="https://play.vidyard.com/cK3VBAZF3nJjCXd1p7shrz.jpg" data-uuid="cK3VBAZF3nJjCXd1p7shrz"
                        data-v="4" data-type="inline" />
                </div>
            </div>
        </AppContainer>
    </section>
</template>

<script setup lang="ts">
import AppContainer from '../../components/layout/AppContainer.vue';
import Heading from '../../components/section/Heading.vue';
import Tag from '../../components/section/Tag.vue';
import TitleBox from '../../components/section/TitleBox.vue';
</script>

<style scoped></style>