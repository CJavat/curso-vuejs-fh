<template>
  <div class="flex justify-center gap-3 py-10 bg-gray-100">
    <button
      :disabled="page === 1"
      @click="$router.push({ query: { page: page - 1 } })"
      class="flex items-center rounded-lg px-4 py-1.5 text-white space-x-1.5 bg-blue-500 disabled:bg-gray-300 hover:bg-blue-600 transition-all"
    >
      <ArrowLeftIcon />
      <span>Anteriores</span>
    </button>
    <button
      :disabled="hasMoreData"
      @click="$router.push({ query: { page: page + 1 } })"
      class="flex items-center rounded-lg px-4 py-1.5 text-white space-x-1.5 bg-blue-500 disabled:bg-gray-300 hover:bg-blue-600 transition-all"
    >
      <span>Siguientes</span>
      <arrow-right-icon />
    </button>
  </div>
</template>

<script lang="ts" setup>
import ArrowRightIcon from '@/icons/ArrowRightIcon.vue';
import ArrowLeftIcon from '@/icons/ArrowLeftIcon.vue';

interface Props {
  page: number;
  hasMoreData: boolean;
}

defineProps<Props>();
</script>
