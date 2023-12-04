<script lang="ts">
  import MainGetFeatures from "$lib/Main/MainGetFeatures.svelte";
  import type { ApiGetFeatureResponse } from "$lib/types";

  export let form: ApiGetFeatureResponse[];
</script>

<MainGetFeatures {form} />
