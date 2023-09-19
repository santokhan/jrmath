<template>
    <seciton class="">
        <AppContainer>
            <h5 class="text-center text-xl">
                <slot></slot>
            </h5>
        </AppContainer>
    </seciton>
</template>

<script setup lang="ts">
import AppContainer from './layout/AppContainer.vue';
</script>

<style scoped></style>