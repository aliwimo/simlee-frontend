<script setup lang="ts">
import Navigation from '@/components/ui/navigation/NavigationMenu.vue';
import ModalWrapper from '@/components/ui/ModalWrapper.vue';
import { Toast } from 'primevue';
</script>

<template>
  <header>
    <Navigation />
  </header>
  <Toast position="bottom-center" />
  <ModalWrapper />
  <RouterView class="p-8" />
</template>
