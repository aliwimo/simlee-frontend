<script setup lang="ts">
import { Button, Card } from 'primevue';
import { useModalStore } from '@/stores/modal.ts';
import type { ModalKey } from '@/config/ModalService.ts';

const modalStore = useModalStore();
const openModal = (key: ModalKey) => modalStore.openModal(key);
</script>

<template>
  <Card class="w-full mx-auto max-w-2xl">
    <template #title>
      <div class="flex flex-col md:flex-row md:items-end gap-4 justify-between">
        <div class="flex flex-col">
          <span class="text-sm text-gray-500">Welcome to</span>
          <span class="text-teal-600 font-bold text-4xl">SimLee</span>
          <span class="text-sm text-gray-500">Start simulating by creating a new league.</span>
        </div>

        <div class="flex gap-2">
          <Button
            label="Create League"
            severity="primary"
            size="small"
            @click="openModal('create_league')"
          />
        </div>
      </div>
    </template>
  </Card>
</template>
