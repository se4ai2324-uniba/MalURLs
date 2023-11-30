<div class="Container">
  <slot />
</div>

<style lang="postcss">
  .Container {
    width: 100%;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
  }

  @media only screen and (max-width: 767px) {
    .Container {
      width: 90%; /* Puoi regolare questa larghezza in base alle tue esigenze */
    }
  }
</style>
