<script>
  import UrlIcon from "$lib/icons/UrlIcon.svelte";
</script>

<div class="InsertUrlCard">
  <div class="infoCard">
    <UrlIcon />
    <slot />
  </div>
  <input name="url" placeholder="www.google.com" />
</div>

<style>
  .InsertUrlCard {
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: left;
    gap: 12px;
    padding: 20px;
    border-radius: 12px;
    background-color: var(--panel);
  }

  .infoCard {
    color: var(--primary);
    display: flex;
    flex-direction: row;
    text-align: center;
    align-items: center;
    gap: 12px;
  }

  input {
    font-family: "Montreal", sans-serif;
    align-items: center;
    text-align: center;
    background-color: var(--panel);
    color: (var(--primary));
    border-radius: 8px;
    text-decoration: none;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    background-color: var(--panel);
  }
</style>
