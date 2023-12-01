<script lang="ts">
  import InsertUrlCardGet from "$lib/components/InsertUrlCardGet.svelte";
  import OutputTableGetFeatures from "$lib/OutputTable/OutputTableGetFeatures.svelte";
  import Container from "$lib/components/Container.svelte";
  import type { ApiGetFeatureResponse } from "$lib/types";

  export let form: ApiGetFeatureResponse[];
</script>

<div class="MainGetFeatures">
  <Container>
    <InsertUrlCardGet>Insert url</InsertUrlCardGet>
    <OutputTableGetFeatures {form} />
  </Container>
</div>

<style>
  .MainGetFeatures {
    margin-top: 100px;
    min-height: 100vh;
  }
</style>
