<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue';

import Button from '@monorepo-vue/common/src/stories/Button.vue';
</script>

<template>
  <div>
    <Button label="test" primary size="large"></Button>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>
