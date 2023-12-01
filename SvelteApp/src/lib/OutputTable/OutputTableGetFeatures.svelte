<script lang="ts">
  import Container from "$lib/components/Container.svelte";
  import type { ApiGetFeatureResponse } from "$lib/types";

  export let form: ApiGetFeatureResponse[];

  console.log("Form ", form);
</script>

{#if form}
  <Container>
    <table>
      <thead>
        <tr>
          <th>Feature</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        {#each form as row}
          <tr>
            <td>
              {row.feature}
            </td>
            <td>
              {row.value}
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </Container>
{/if}

<style>
  table {
    margin-top: 40px;
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
