<script>
  import { each } from "svelte/internal";
  import SimpleLocationMap from "../subComponent/SimpleLocationMap.svelte";
  export let gallery = {};
  </script>

<div class="flex flex-col items-center mt-4 shadow-xl bg-indigo-200 h-96" >
  <h3 class="p-8 text-4xl text-center font-josefin capitalize underline underline-offset-2 decoration-2">The location of the corresponding gallery</h3>
  <div class="border-pastelBlackOlive border-2 shadow-xl">
    <SimpleLocationMap gallery={gallery} mapStyle="map-footer"/> 
  </div>
</div>
