<script>
  import OutputTableScan from "$lib/OutputTable/OutputTableScan.svelte";
  import SelectModel from "$lib/SelectModel/SelectModel.svelte";
  import Button from "$lib/components/Button.svelte";
  import Container from "$lib/components/Container.svelte";
</script>

<div class="MainScan">
  <Container>
    <SelectModel />

    <OutputTableScan />
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
