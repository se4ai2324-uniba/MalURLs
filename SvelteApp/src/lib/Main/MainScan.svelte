<script lang="ts">
  import OutputTableScan from "$lib/OutputTable/OutputTableScan.svelte";
  import SelectModel from "$lib/SelectModel/SelectModel.svelte";
  import Container from "$lib/components/Container.svelte";
  import type { ApiScanResponse } from "$lib/types";

  export let form: ApiScanResponse;
</script>

<div class="MainScan">
  <Container>
    <SelectModel />
    <OutputTableScan {form} />
  </Container>
</div>

<style>
  .MainScan {
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
</style>
