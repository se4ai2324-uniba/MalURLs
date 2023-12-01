<script lang="ts">
  import MainScan from "$lib/Main/MainScan.svelte";

  import type { ApiScanResponse } from "$lib/types";

  export let form: ApiScanResponse;
</script>

<MainScan {form} />
