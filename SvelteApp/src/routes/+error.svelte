<script>
  import Button from "$lib/components/Button.svelte";
</script>

<div class="error">
  <h2>Something went wrong !</h2>
  <a href="/"><Button>Come back</Button></a>
</div>

<style>
  .error {
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  a {
    text-decoration: none;
  }
</style>
