<template>
  <Header />
  <main>
    <Hero />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from './components/layouts/Header/Header.vue';
import Hero from '@components/layouts/hero/Hero.vue';

export default defineComponent({
  components: {
    Header,
    Hero,
  },
});
</script>
