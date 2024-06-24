<template>
  <top-menu />

  <!-- RouterView -->
  <RouterView />

  <!-- Footer -->
  <custom-footer />
</template>

<script lang="ts" setup>
import { RouterView } from 'vue-router';

import TopMenu from '../components/TopMenu.vue';
import CustomFooter from '../components/CustomFooter.vue';
</script>
