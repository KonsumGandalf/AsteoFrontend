<script>
    import { each } from "svelte/internal";
    import SimpleLocationMap from "./SimpleLocationMap.svelte";
    export let gallery = {};
    export let imgCaption = [];
    export let classExtensionImg = "";
    </script>

<div>
  <div class="w-11/12 mt-4 shadow-xl {classExtensionImg}" >
    <SimpleLocationMap gallery={gallery}/>
  </div>
  {#each imgCaption as line}
      <p class="font-mono tracking-wide text-sm text-left">{line}</p>
  {/each}
</div>
