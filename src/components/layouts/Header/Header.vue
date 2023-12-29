<template>
  <header class="header">
    <section class="header__container container">
      <img alt="logo" src="@assets/logo.svg" />

      <nav class="header__main-nav" aria-label="Main navigation">
        <a href="https://github.com/bebo22">
          <IconGithub />
        </a>
        <a href="https://www.linkedin.com/in/bolivar-berrio-648340155/">
          <IconLinkedIn />
        </a>
        <a class="header__contact" href="mailto:berriobolivar@gmail.com">Contact
          <IconEmail />
        </a>
      </nav>
    </section>
  </header>
</template>
<script lang="ts">
import IconEmail from '@components/icons/IconEmail.vue';
import IconGithub from '@components/icons/IconGithub.vue';
import IconLinkedIn from '@components/icons/IconLinkedIn.vue';
import './header.css';

export default {
  components: {
    IconEmail,
    IconGithub,
    IconLinkedIn,
  },
};
</script>
