<script>
  import Button from "$lib/components/Button.svelte";
  import DropDownIcon from "$lib/icons/DropDownIcon.svelte";
  import Logo from "$lib/icons/Logo.svelte";
  import Rightarrow from "$lib/icons/Rightarrow.svelte";
  import { slide } from "svelte/transition";
  let showMenu = false;
  let url_scan = "/scan";
  let url_get_features = "/get-features";
  const toggleMenu = () => {
    showMenu = !showMenu;
  };

  let url = "/inizia-ora";
</script>

<nav class="Navbar">
  <div class="LeftSide">
    <Logo />
    <a href="/"><h1>MalUrls</h1></a>
  </div>
  <div class="RightSide">
    <button on:click={toggleMenu}><DropDownIcon /></button>
  </div>
  <div class="HiddenOnMobileMenu">
    <a href={url_scan}>Scan</a>
    <a href={url_get_features}>Get Features</a>
  </div>
  {#if showMenu}
    <div class="DropdownMenu" transition:slide={{ duration: 400 }}>
      <a href={url_scan}>Scan</a>
      <a href={url_get_features}>Get Features</a>
    </div>
  {/if}
</nav>

<style lang="postcss">
  /* Navbar */
  .Navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--panel);
    padding: 10px;
    gap: 10px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 20;
  }

  /* LeftSide and RightSide */
  .LeftSide,
  .RightSide {
    display: flex;
    align-items: center;
    gap: 5px;
    margin-right: 40px;
  }

  .RightSide {
    display: none; /* Inizialmente nascosto sui piccoli schermi */
  }

  /* LeftSide Styling */
  .LeftSide {
    color: var(--primary);
  }

  h1 {
    font-size: 20px; /* Utilizzo dei pixel */
    font-weight: 600;
  }

  /* DropdownMenu */
  .DropdownMenu {
    display: block;
    space-y: 10px;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--panel);
    border-radius: 5px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    padding: 10px;
    width: 100%;
    color: var(--gray);
    position: absolute;
    right: 0;
    top: 71px;
    display: none; /* Inizialmente nascosto sui piccoli schermi */
  }

  /* HiddenOnMobileMenu */
  .HiddenOnMobileMenu {
    margin-right: 50px;
    display: flex;
    gap: 20px;
    space-x: 10px;
    color: var(--gray);
    align-items: center;
  }

  button {
    background-color: var(--panel);
    border: none;
  }
  /* Links */
  a {
    text-decoration: none;
    color: var(--primary);
    transition: all 0.5s ease-in-out;
    transform: scale(1);
    font-size: 16px; /* Utilizzo dei pixel */
  }

  a:hover {
    color: var(--white);
    transform: scale(1.1);
  }

  /* Media Queries */
  @media (max-width: 767px) {
    .RightSide,
    .DropdownMenu {
      display: flex; /* Mostra sui piccoli schermi */
    }

    .HiddenOnMobileMenu {
      display: none;
    }
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    .RightSide,
    .DropdownMenu {
      display: none; /* Nascondi sui media schermi e oltre */
    }
  }
</style>
