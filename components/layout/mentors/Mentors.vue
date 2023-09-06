<template>
    <section class="">
        <LayoutAppContainer>
            <SectionTitleBox>
                <SectionTag>Mentors</SectionTag>
                <SectionHeading>
                    Meet Our Expert Instructors
                </SectionHeading>
            </SectionTitleBox>

            <div class="flex flex-wrap justify-center gap-8 place-items-center py-8">
                <div class="relative max-w-xs space-y-4">
                    <MentorsOutline>
                        <div class="grid place-items-center">
                            <img src="../../../assets/images/mentors/jakaria.png" alt="mentor-1"
                                class="w-full object-cover rounded-full overflow-hidden">
                        </div>
                    </MentorsOutline>
                    <MentorsName>Jakaria</MentorsName>
                    <p class="text-center">Math Tutor</p>
                </div>
                <div class="relative max-w-xs space-y-4">
                    <MentorsOutline>
                        <div class="grid place-items-center">
                            <img src="../../../assets/images/mentors/raj.png" alt="mentor-1"
                                class="w-full object-cover rounded-full overflow-hidden">
                        </div>
                    </MentorsOutline>
                    <MentorsName>Hason Raja Raj</MentorsName>
                    <p class="text-center">Math Tutor</p>
                </div>
            </div>
        </LayoutAppContainer>
    </section>
</template>

<script setup lang="ts">
import AppContainer from '../../layouts/section/AppContainer.vue';
</script>

<style scoped></style>