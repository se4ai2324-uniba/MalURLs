<script lang="ts">
  import CheckIcon from "$lib/icons/CheckIcon.svelte";

  export { className as class };

  let className = "";
</script>

<button class="Button {className}" type="submit">
  <slot />
  <div class="buttonIcon"><CheckIcon /></div>
</button>

<style lang="postcss">
  .buttonIcon {
    width: 12px;
    height: 12px;
  }
  .Button {
    font-family: "Montreal", sans-serif;
    background-color: var(--primary);
    color: var(--black);
    border-radius: 12px;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    gap: 8px;
    padding: 8px 16px;
    align-items: center;
    text-decoration: none;
    /* Animazione */
    transition: all 0.5s ease-in-out;
    transform: scale(1.05);
    border: 2px solid transparent;
    background-color: var(--primary);

    /* per hover */
    &:hover {
      border-color: var(--primary);
      transform: scale(1.1);
    }
  }
</style>
