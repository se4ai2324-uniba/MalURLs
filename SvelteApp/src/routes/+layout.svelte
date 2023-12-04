<script lang="ts">
  import Footer from "$lib/Footer/Footer.svelte";
  import Navbar from "$lib/Navbar/Navbar.svelte";
  import "../app.css";
</script>

<div class="layout">
  <Navbar />
  <div class="separator">
    <slot />
  </div>
  <Footer />
</div>

<style lang="postcss">
  .separator {
    margin-top: 20px;
    margin-bottom: 20px;
  }
</style>
