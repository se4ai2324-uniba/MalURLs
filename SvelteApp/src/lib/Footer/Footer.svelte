<script>
  import CopyrightIcon from "$lib/icons/CopyrightIcon.svelte";

  const year = new Date().getFullYear();
</script>

<footer>
  <div class="Container">
    <div class="LeftSide">
      <a class="text-gray" href="/"> </a>
      <CopyrightIcon />
      <span>{year} MalURLs All Rights Reserved.</span>
    </div>
    <div class="RightSide">
      <a class="text-gray m-2" href="/">Federico</a>
      <a class="text-gray m-2" href="/">Simone</a>
      <a class="text-gray m-2" href="/">Rosa</a>
      <a class="text-gray m-2" href="/">Vito</a>
      <a class="text-gray m-2" href="/">Ivan</a>
    </div>
  </div>
</footer>

<style lang="postcss">
  footer {
    margin-top: auto;
    border-radius: none;
    text-align: center;

    padding-top: 20px; /* per pt-5 */
    background-color: var(--panel);
    /* per lg */
    @media (min-width: 1024px) {
      padding-bottom: 20px; /* per lg:py-5 */
    }
  }

  /* .Container */
  .Container {
    display: flex;
    flex-direction: column;
    gap: 8px; /* per gap-2 */

    /* per lg */
    @media (min-width: 1024px) {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }

  /* .LeftSide */
  .LeftSide {
    font-size: 14px; /* per text-sm */
    color: var(--gray);
    display: flex;
    align-items: center;
    gap: 8px; /* per gap-2 */
    margin-left: 12px; /* per ml-3 */
    color: var(--gray_opacity); /* per text-gray/50 */

    /* per lg */
    @media (min-width: 1024px) {
      margin-left: 20px; /* per lg:ml-5 */
    }
  }

  /* .RightSide */
  .RightSide {
    gap: 16px;
    display: flex;
    flex-wrap: wrap;
    font-size: 14px; /* per text-sm */
    color: var(--gray);

    /* per lg */
    @media (min-width: 1024px) {
      margin-right: 20px; /* per lg:mr-5 */
      align-items: center;
      justify-content: center;
    }

    @media (max-width: 768px) {
      margin-bottom: 5px;
      margin-left: 5px;
    }
  }

  /* a */
  a {
    transition: all 0.5s ease-in-out;
    text-decoration: none;
    transform: scale(1.1);
    color: var(--gray);
    /* per md */
    @media (min-width: 768px) {
      font-size: 18px; /* per md:text-lg */
    }
  }
</style>
