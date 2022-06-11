<script>
  import { each } from "svelte/internal";
  import SimpleLocationMap from "../subComponent/SimpleLocationMap.svelte";
  import FooterComplexLocationMap from "./FooterComplexLocationMap.svelte";
  export let gallery = {};
  export let epoch = null, artist = null;
  const mapStyle = "map-footer";
  </script>

<div class="flex flex-col items-center mt-4 shadow-xl bg-indigo-200 h-96" >
  <h3 class="p-8 text-4xl text-center font-josefin capitalize underline underline-offset-2 decoration-2">The location of the corresponding gallery</h3>
  <div class="border-pastelBlackOlive border-2 shadow-xl">
    {#if epoch}
      <div  class="hidden">1</div>
      <FooterComplexLocationMap epoch={epoch} mapStyle={mapStyle}/>
    {:else if artist}
    <div class="hidden">2</div>
      <FooterComplexLocationMap artist={artist} mapStyle={mapStyle}/>
    {:else}
      <SimpleLocationMap gallery={gallery} mapStyle={mapStyle}/> 
    {/if}
  </div>
</div>
