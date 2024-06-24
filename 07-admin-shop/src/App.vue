import { RouterView } from 'vue-router';
<template>
  <RouterView />
  <VueQueryDevtools />
</template>

<script lang="ts" setup>
import { VueQueryDevtools } from '@tanstack/vue-query-devtools';
</script>
