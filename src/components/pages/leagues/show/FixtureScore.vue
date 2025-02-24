<script setup lang="ts">

defineProps<{
  team: string;
  logo: string;
  score: number;
  played: boolean;
}>();

</script>

<template>
  <div class="flex justify-between items-center gap-2">
    <div class="flex-1 flex items-center gap-2">
      <img :src="logo" :alt="team" class="w-8 h-8"/>
      <span>{{ team }}</span>
    </div>
    <span class="text-end">
      <span v-if="played">{{ score }}</span>
      <span v-else>-</span>
    </span>
  </div>
</template>

<style scoped>

</style>
