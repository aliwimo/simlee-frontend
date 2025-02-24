<template>
  <div class="p-4">
    <div class="flex gap-2 mb-4">
      <button
        v-for="tab in tabs"
        :key="tab"
        :class="['px-4 py-2 rounded-lg', tab === activeTab ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300']"
        @click="setActiveTab(tab)"
      >
        Tab {{ tab }}
      </button>
    </div>
    <div class="p-4 border rounded-lg bg-white shadow">
      <p class="text-gray-700">Content for Tab {{ activeTab }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const n = 10; // You can dynamically set this to any value
const tabs = computed(() => Array.from({ length: n }, (_, i) => i + 1));
const activeTab = ref(1);

const setActiveTab = (tab) => {
  activeTab.value = tab;
};
</script>
