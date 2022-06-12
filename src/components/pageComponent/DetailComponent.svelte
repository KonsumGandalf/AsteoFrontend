<script>
  import DeleteButton from "../subComponent/DeleteButton.svelte";
  import SimpleLocationMap from "../subComponent/SimpleLocationMap.svelte";
  export let image = null, leftComp = {}, rightComp = {}, bottomComp = [], gallery = null;

</script>

<div class="mx-auto w-9/12">
  <div class="justify-self-center">
    <div class="flex items-center justify-center space-x-8">
      <div class="w-2/12">
        <h3 class="mb-4 text-lg font-mono block">
          {leftComp.label}
        </h3>
        <p class="text-darkGrayishBlue font-jura text-xl">
          {leftComp.value}
        </p>
      </div>
      <!-- unlogical code !!! 14 of 12 rel width is assigned -->
      <div class="w-10/12 h-10/12 border-x-2 border-pastelBlackOlive rounded-none px-24">
        <!-- <div>123</div> -->
        {#if gallery}
          <SimpleLocationMap gallery={gallery} mapStyle="map-medium"/> 
        {:else}
          <img src={image} class="mx-auto shadow-xl" alt="">
        {/if}
      </div>
      <div class="flex items-center w-2/12">
        <div>
          <h3 class="mb-4 text-lg font-mono block">
            {rightComp.label}
          </h3>
          <p class="text-darkGrayishBlue font-jura text-xl">
            {rightComp.value}
          </p>
        </div>
      </div>
    </div>
    <DeleteButton/>
    {#each bottomComp as attr}
      <div class="mt-12">
        <h3 class="mb-4 text-lg font-mono block">
          {attr.label}
        </h3>
        <p class="text-darkGrayishBlue text-center font-jura">
          {attr.value}
        </p>
      </div>
    {/each}
  </div>
  
</div>

