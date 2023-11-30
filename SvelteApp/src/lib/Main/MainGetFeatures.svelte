<script>
  import OutputTableGetFeatures from "$lib/OutputTable/OutputTableGetFeatures.svelte";
  import Container from "$lib/components/Container.svelte";
  import InsertUrlCard from "$lib/components/InsertUrlCard.svelte";
</script>

<div class="MainGetFeatures">
  <Container>
    <InsertUrlCard>Insert url</InsertUrlCard>
    <OutputTableGetFeatures />
  </Container>
</div>

<style>
  .MainGetFeatures {
    margin-top: 100px;

    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
</style>
