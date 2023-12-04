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
    border-radius: 12px; /* per rounded-lg */
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    gap: 8px; /* per gap-2 */
    padding: 8px 16px; /* per px-4 e py-2 */
    align-items: center;

    /* Animazione */
    transition: all 0.5s ease-in-out;
    transform: scale(1.05); /* per hover:scale-105 */
    border: 2px solid transparent; /* per border-2 border-transparent */
    background-color: var(--primary); /* per focus:bg-white */

    /* per hover */
    &:hover {
      border-color: var(--primary); /* per hover:border-primary */
      transform: scale(1.1); /* per hover:lg:scale-110 */
    }
  }
</style>
