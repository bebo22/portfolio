<template>
  <Header />
  <main>
  </main>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import Header from './components/layouts/Header/Header.vue';

export default defineComponent({
  components: {
    Header,
  },
  setup() {
    const title = ref('Hello World!');

    onMounted(() => {
      console.log('App mounted!');
    });

    return {
      title,
    };
  },
});

</script>
