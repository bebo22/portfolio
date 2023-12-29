<script>
import './footer.css';
export default {
  data() {
    return {
      currentDate: new Date().getFullYear(),
    };
  }
};
</script>
<template>
  <footer class="footer">
    <section class="footer__inner container">
      <p>&copy; Copyright {{ currentDate }} Bolivar Berrío Portfolio</p>
    </section>
  </footer>
</template>