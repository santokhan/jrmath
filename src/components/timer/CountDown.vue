<template>
    <div class="flex gap-1 items-center font-medium bg-orange-500 text-white rounded-lg px-1.5"
        title="Days: Hours: Minutes">
        <i class="fa fa-hourglass-end text-xs fa-rotate-180"></i>
        <div class="">{{ countDown.days }}<span class="text-sm font-normal">d</span></div>:
        <div class="">{{ countDown.hrs }}<span class="text-sm font-normal">h</span></div>:
        <div class="">{{ countDown.min }}<span class="text-sm font-normal">m</span></div>
    </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue"

const props = defineProps<{ expiryDate: string }>()

interface Timer {
    days: string | number,
    hrs: string | number,
    min: string | number,
    sec: string | number
}

const countDown = reactive<Timer>({ days: "", hrs: "", min: "", sec: "" })

function startCountDown(expiryDate: string) {
    const DUMMY_DATE = "Oct 2, 2023 02:00:00"
    let target = new Date(expiryDate);
    let today = new Date();

    let currentTime = today.getTime();
    let targetTime = target.getTime();

    let difference = targetTime - currentTime;

    if (!difference || difference < 1) return;

    let sec = Math.floor(difference / 1000);
    let min = Math.floor(sec / 60);
    let hrs = Math.floor(min / 60);
    let days = Math.floor(hrs / 24);

    hrs = hrs % 24;
    min = min % 60;
    sec = sec % 60;

    countDown.days = days;
    countDown.hrs = (hrs < 10) ? "0" + hrs : hrs;
    countDown.min = (min < 10) ? "0" + min : min;
    countDown.sec = (sec < 10) ? "0" + sec : sec;

    if (difference > 0) {
        const SEC = 1000
        const MIN = 60 * SEC
        setTimeout(() => {
            startCountDown(expiryDate)
        }, 30 * SEC);
    } else {
        countDown.days = ""
        countDown.hrs = ""
        countDown.min = ""
        countDown.sec = ""
    }
}
startCountDown(props.expiryDate) 
</script>

<style scoped></style>