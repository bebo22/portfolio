<template>
  <Header />
  <main>
    <Hero />
    <Technologies />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from './components/layouts/Header/Header.vue';
import Hero from '@components/layouts/hero/Hero.vue';
import Technologies from '@components/layouts/Technologies/Technologies.vue';

export default defineComponent({
  components: {
    Header,
    Hero,
    Technologies,
  },
});
</script>
