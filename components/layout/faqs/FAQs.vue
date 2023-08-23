<template>
    <section class="">
        <LayoutAppContainer>
            <SectionTitleBox>
                <SectionTag>WHAT WE GIVE</SectionTag>
                <SectionHeading>
                    Course Builder
                </SectionHeading>
            </SectionTitleBox>

            <div class="flex flex-wrap justify-center gap-4 py-8">
                <div v-for="(item, index) in info" :key="index" class="w-full max-w-4xl bg-white rounded-xl">
                    <button type="button" class="w-full flex justify-between items-center px-4 md:px-6 py-4" @click="() => {
                        active = active === index ? null : index
                    }">
                        <h4 class="text-lg font-medium text-gray-800 text-start">{{ item.title }}</h4>
                        <IconsAngleDown :class="[false ? 'rotate-180' : '']" />
                    </button>
                    <p v-if="active === index" class="text-gray-500 mx-6 py-4 border-t">{{ item.desc }}</p>
                </div>
            </div>
        </LayoutAppContainer>
    </section>
</template>

<script setup lang="ts">
const active = ref(null)

const info = [
    {
        title: "What is included with my purchase of JR Math?",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,",
    },
    {
        title: "Are there any recurring fees?",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,",
    },
    {
        title: "Where can I get support?",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,",
    },
    {
        title: "Why should I trust JR Math",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,",
    },
]
</script>

<style scoped></style>