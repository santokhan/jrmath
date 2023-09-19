<template>
    <AppContainer>
        <h5 class="text-center text-xl">
            <slot></slot>
        </h5>
    </AppContainer>
</template>

<script setup lang="ts">
import AppContainer from './layout/AppContainer.vue';
</script>

