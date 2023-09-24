<template>
    <div class="w-full max-w-[22rem] space-y-4 bg-white rounded-xl overflow-hidden relative" title="card">
        <div class="">
            <div class="">
                <!-- Image actual size 352x240 -->
                <img v-if="props.data.thubmnails.asset._ref" :src="urlFor(props.data.thubmnails.asset._ref).url()"
                    alt="thumbnail" class="h-60 w-full object-cover bg-white" title="Image size 352x240 px">
                <img v-else src="/images/courses/1.png" alt="thumbnail" class="h-60 w-full object-cover bg-white">
            </div>
            <div class="relative px-4 py-4 space-y-3 mt-4">
                <div class="absolute right-0 -top-12 left-0 px-4 h-16 overflow-hidden flex justify-between">
                    <div
                        class="bg-orange-500 text-white h-16 w-16 rounded-full font-bold text-xl border-2 border-white flex flex-col justify-center items-center text-[18px] leading-none text-center">
                        <Taka class="w-4 h-4" />{{ props.data.price || 0 }}
                    </div>
                    <div
                        class="bg-orange-500 text-white h-16 w-16 rounded-full font-bold text-xl border-2 border-white flex flex-col justify-center items-center text-[18px] leading-none text-center line-through">
                        <Taka class="w-4 h-4" />{{ props.data.discount || 0 }}
                    </div>
                </div>
                <div class="flex items-center gap-2">
                    <div class="bg-orange-500 text-white px-1.5 rounded font-medium text-sm">
                        <div class="text-white flex items-center gap-1">
                            <div class="w-2 h-2 bg-white rounded-full"></div>{{ props.data.tag || 'All' }}
                        </div>
                    </div>
                    <div class="text-gray-700">{{ reviews(props.data.reviews) }} reviews</div>
                </div>
                <CourseTitle :title="props.data.title" />
                <div class="flex justify-between items-center py-2">
                    <div class="flex items-center gap-1">
                        <Video /> {{ lessons(props.data.lessons) }}x Lesson
                    </div>
                    <div>
                        <RouterLink
                            class="text-white bg-orange-500 font-medium rounded-lg px-4 py-2 hover:bg-orange-600 focus:ring-4 focus:ring-orange-300 focus:outline-none"
                            :to="to(props.data)">Get started</RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Taka from '../../../icons/Taka.vue';
import Video from '../../../icons/Video.vue';
import CourseTitle from './CourseTitle.vue';

import { client } from '../../../../sanity/sanityClient'
import imageUrlBuilder from '@sanity/image-url'

// Get a pre-configured url-builder from your sanity client
const builder = imageUrlBuilder(client)

// Then we like to make a simple function like this that gives the
// builder an image and returns the builder for you to specify additional
// parameters:
function urlFor(source: any) {
    return builder.image(source)
}

interface Card {
    _id: number | string
    lessons: number
    price: number
    discount: number
    reviews?: number
    src: string
    tag?: any
    thubmnails: {
        asset: {
            _ref: string
            _type: string
        }
    }
    title: string
    university: string
    year: number | string
}

const props = defineProps<{ data: Card }>()

function reviews(review: any): number {
    if (typeof review === 'number') return review;

    const total = Math.round(Math.random() * 25)
    if (total < 15) {
        return 15
    } else {
        return total
    }
}
function lessons(lessons: number): number {
    if (lessons) return lessons;

    const total = Math.round(Math.random() * 25)
    if (total < 15) {
        return 15
    } else {
        return total
    }
}
function to(props: Card): string {
    const { university, year, _id } = props
    // route pattern /courses/:university/:year/:id
    return `/courses/${university}/${year}/${_id}` // output /courses/nuh/3/07deedcd-d6a8-4f3f-aec3-d5913fa8a18c
}
</script>
