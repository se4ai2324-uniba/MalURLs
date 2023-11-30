<script>
  import InsertUrlCardGet from "$lib/components/InsertUrlCardGet.svelte";
  import OutputTableGetFeatures from "$lib/OutputTable/OutputTableGetFeatures.svelte";
  import Button from "$lib/components/Button.svelte";
  import Container from "$lib/components/Container.svelte";
</script>

<div class="MainGetFeatures">
  <Container>
    <InsertUrlCardGet>Insert url</InsertUrlCardGet>

    <OutputTableGetFeatures />
  </Container>
</div>

<style>
  .MainGetFeatures {
    margin-top: 100px;

    min-height: 100vh;
  }
  .row {
    border: 1px solid red;
    display: flex;
    align-items: center;
    width: 100%;
  }
</style>
