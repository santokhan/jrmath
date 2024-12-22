<template>
    <AppContainer>
        <div class="py-16 px-8 rounded-xl bg-white">
            <h5 class="text-center text-2xl">
                <slot></slot>
            </h5>
        </div>
    </AppContainer>
</template>

<script setup lang="ts">
import AppContainer from './layout/AppContainer.vue';
</script>
