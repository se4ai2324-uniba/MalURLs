<script lang="ts">
  import Container from "$lib/components/Container.svelte";
  import type { ApiScanResponse } from "$lib/types";

  export let form: ApiScanResponse[];
</script>

{#if form}
  <Container>
    <table>
      <thead>
        <tr>
          <th>Model</th>
          <th>Prediction</th>
        </tr>
      </thead>
      <tbody>
        {#each form as row}
          <tr>
            <td>
              {row.model}
            </td>
            <td>
              {row.result}
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </Container>
{/if}

<style>
  table {
    border-collapse: collapse;
    width: 100%;
    text-align: left;
    border: 1px solid var(--gray);
    font-size: large;
    color: var(--white);
    background-color: var(--panel);
  }

  td,
  th {
    border: 1px solid var(--gray);
    padding: 8px;
  }

  th {
    background-color: var(--primary);
    color: var(--black);
  }
</style>
