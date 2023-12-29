<template>
  <div class="hero">
    <section class="hero__inner container">
      <article class="hero__info">
        <img src="@assets/profile-picture.png" alt="Hero profile picture" loading="lazy" width="177" height="177" />
        <section>
          <h1>Welcome</h1>
          <p class="subheading">
            Hello, my name is Bolivar Berrío. I am a software developer with a passion for web development,
            and I am always looking for opportunities to grow and learn new things.
            I've always been passionate about music and video games.
          </p>
        </section>
      </article>
      <aside class="hero__image">
        <img src="@assets/hero-image.png" alt="Hero astronaut image" loading="lazy" width="422" height="440" />
      </aside>
    </section>
  </div>
</template>
<script lang="ts">
import './hero.css';
export default {
  name: 'Hero',
};
</script>
