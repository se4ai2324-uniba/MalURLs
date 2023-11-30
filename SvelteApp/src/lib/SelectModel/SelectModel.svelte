<script>
  import Button from "$lib/components/Button.svelte";
  import InsertUrlCard from "$lib/components/InsertUrlCard.svelte";
  import AlgorhitmIcon from "$lib/icons/AlgorhitmIcon.svelte";
</script>

<div class="SelectModel">
  <InsertUrlCard>Insert url</InsertUrlCard>
  <div class="description">
    <label for="modelSelect"><AlgorhitmIcon />Select Model: </label>

    <select id="modelSelect">
      <option value="base">Base Model</option>
      <option value="tuned">Tuned Model</option>
      <option value="all">All Model</option>
    </select>
  </div>
  <Button>Start</Button>
</div>

<style lang="postcss">
  .description {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 14px;
  }
  .SelectModel {
    gap: 12px;
    margin-bottom: 100px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: var(--primary);
    background-color: var(--panel);
    border-radius: 12px;
  }

  select {
    font-family: "Montreal", sans-serif;
    background-color: var(--black);
    border: none;
    color: var(--gray);
    border-radius: 12px;
  }

  @media only screen and (max-width: 767px) {
    .SelectModel {
      padding: 4px;
      flex-direction: column;
      text-align: left;
      align-items: stretch;
      gap: 16px;
    }

    .description {
      align-items: stretch;
      margin-bottom: 36px;
    }
  }
</style>
