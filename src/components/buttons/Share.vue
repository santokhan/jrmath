<template>
    <button @click="openShareModal" type="button" class="mx-4 rounded px-4 py-2 font-medium hover:text-orange-600">
        <i class="fa fa-share"></i> Share</button>
    <teleport to='body' v-if="isShare">
        <div class="w-full h-screen bg-black/50 fixed top-0 left-0 flex justify-center items-center">
            <div class="bg-white rounded-xl w-full max-w-md p-6 space-y-4" ref="target" title="Modal">
                <h4 class="text-xl font-semibold"><i class="fa fa-share"></i> Share</h4>
                <div class="flex items-center gap-2">
                    <button type="button" disabled
                        class="px-4 py-2 rounded-lg bg-gray-100 text-gray-600 w-full overflow-hidden text-start">
                        {{ referral.uniqueURL }}</button>
                    <button @click="handleCopy"
                        class="focus:outline-none text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2.5 flex gap-2 items-center"
                        title="Copy button"><i class="fa fa-copy"></i> {{ copied ? 'Copied' : 'Copy' }}</button>
                </div>
            </div>
        </div>
    </teleport>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { getCurrentUser } from 'vuefire';
import { coin, referralLink } from '../firebase/profile';
import hashLibrary from 'short-unique-id'
import { onClickOutside } from '@vueuse/core';

const isShare = ref(false)
const referral = ref<any>({})
const copied = ref(false)
const target = ref(null)

function generateLink() {
    const uniqueId = new hashLibrary().rnd()
    referral.value = {
        uniqueId,
        uniqueURL: `${window.location.origin}/#/referral/${uniqueId}`,
        link: window.location.href
    }
}

async function addReferralLink() {
    await getCurrentUser().then(user => {
        const email = user?.email
        if (email) {
            referralLink.create(email, referral.value.uniqueId, referral.value.link)
            coin.coinIncrease(email)
        }
    })
}

async function openShareModal() {
    isShare.value = !isShare.value
    generateLink()

    onClickOutside(target, () => {
        isShare.value = !isShare.value
    })
}

function handleCopy() {
    copied.value = true
    isShare.value = false
    addReferralLink()

    setTimeout(() => {
        copied.value = false
    }, 2000);
}

watch(copied, async () => {
    const url = referral.value.uniqueURL
    if (url) {
        await navigator.clipboard.writeText(url).catch(err => { console.log(err) })
    }
})
</script>

<style scoped></style>