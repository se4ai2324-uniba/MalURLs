<script>
  import { enhance } from "$app/forms";
  import UrlIcon from "$lib/icons/UrlIcon.svelte";
  import Button from "./Button.svelte";
</script>

<form class="InsertUrlCard" method="post" action="?/getFeatures" use:enhance>
  <div class="infoCard">
    <div class="infoinput">
      <UrlIcon />
      <slot />
    </div>
    <input name="url" placeholder="www.google.com" />
  </div>
  <Button>Start</Button>
</form>

<style>
  .infoCard {
    display: flex;
    gap: 4px;
    align-items: left;
    justify-content: left;

    flex-direction: column;
  }

  .InsertUrlCard {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 12px;
    padding: 10px;
    border-radius: 12px;
    background-color: var(--panel);
    color: var(--primary);
  }

  input {
    font-family: "Montreal", sans-serif;
    align-items: center;
    text-align: center;
    background-color: var(--panel);
    color: (var(--primary));
    border-radius: 8px;
    text-decoration: none;
    outline: 1px solid var(--gray_opacity);
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    background-color: var(--panel);
  }
</style>
