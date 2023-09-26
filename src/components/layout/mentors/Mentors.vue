<template>
    <section class="">
        <AppContainer>
            <TitleBox>
                <Tag>Mentors</Tag>
                <Heading>
                    Meet Our Expert Instructors
                </Heading>
            </TitleBox>

            <div class="flex flex-wrap justify-center gap-16 place-items-center py-8">
                <div class="relative space-y-4 md:flex items-center rounded-full md:bg-white">
                    <Outline>
                        <img src="../../../assets/images/mentors/jakaria.png" alt="mentor-1"
                            class="w-full object-cover rounded-full overflow-hidden">
                    </Outline>
                    <div class="px-10 flex flex-col items-center lg:items-start">
                        <Name>Jakaria</Name>
                        <p class="mt-2 text-center md:text-start">Mathematics Instructor</p>
                        <MentorMedia class="mt-4" :links="social_links.jakaria" />
                    </div>
                </div>
                <div class="relative space-y-4 md:flex items-center rounded-full md:bg-white">
                    <Outline>
                        <img src="../../../assets/images/mentors/raj.png" alt="mentor-1"
                            class="w-full object-cover rounded-full overflow-hidden">
                    </Outline>
                    <div class="px-10 flex flex-col items-center lg:items-start">
                        <Name>Hasson Raza Raz</Name>
                        <p class="mt-2 text-center md:text-start">Mathematics Instructor</p>
                        <MentorMedia class="mt-4" :links="social_links.raz" />
                    </div>
                </div>
            </div>
        </AppContainer>
    </section>
</template>

<script setup lang="ts">
import Name from '../../mentors/Name.vue';
import Outline from '../../mentors/Outline.vue';
import Heading from '../../section/Heading.vue';
import Tag from '../../section/Tag.vue';
import TitleBox from '../../section/TitleBox.vue';
import AppContainer from '../AppContainer.vue';
import MentorMedia from './MentorMedia.vue';

const social_links = {
    jakaria: {
        facebook: "https://www.facebook.com/JaKaRiA.YO/",
        whatsApp: "01910865705",
        gmail: "mjakaria989@gmail.com",
        youtube: "https://www.youtube.com/@jrmathInstructorial9776",
    },
    raz: {
        facebook: "https://www.facebook.com/hassonrazaraz?mibextid=ZbWKwL",
        whatsApp: "01790054896",
        gmail: "hassonrazraz@gmail.com",
        youtube: "https://www.youtube.com/@jrmathtutorial9776",
    },
}
</script>

