<script setup lang="ts">
import { useModalStore } from '@/stores/modal.ts';
import type { ModalKey } from '@/config/ModalService.ts';
import { Button } from 'primevue';

const modalStore = useModalStore();

const openModal = (key: ModalKey) => {
  modalStore.openModal(key);
};
</script>
<template>
  <div class="flex gap-4">
    <Button label="Create League" size="small" @click="openModal('create_league')" />
  </div>
</template>
