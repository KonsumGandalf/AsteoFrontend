<script>
  import CheckInButton from "../subComponent/Buttons/CheckInButton.svelte";
  import CheckOutButton from "../subComponent/Buttons/CheckOutButton.svelte";
import DeleteButton from "../subComponent/Buttons/DeleteButton.svelte";
  import SimpleLocationMap from "../subComponent/SimpleLocationMap.svelte";
  export let image = null, leftComp = {}, rightComp = {}, bottomComp = [], gallery = null;

</script>

<div class="mx-auto w-9/12">
  <div class="justify-self-center">
    <div class="grid grid-cols-12 items-center justify-center space-x-8">
      <div class="col-span-1">
        <h3 class="mb-4 text-lg font-mono block">
          {leftComp.label}
        </h3>
        <p class="text-darkGrayishBlue font-jura text-xl">
          {leftComp.value}
        </p>
      </div>
      <!-- unlogical code !!! 14 of 12 rel width is assigned -->
      <div class="col-span-10 h-10/12 border-x-2 border-pastelBlackOlive rounded-none px-24">
        <!-- <div>123</div> -->
        {#if gallery}
          <SimpleLocationMap gallery={gallery} mapStyle="map-medium"/> 
        {:else}
          <img src={image} class="mx-auto shadow-xl" alt="">
        {/if}
      </div>
      <div class="flex items-center col-span-1">
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
    <div class="container flex w-1/3 space-x-4">
      {#if gallery}
        <CheckInButton bind:countAllVisitors = {bottomComp[0].value} bind:countCurVisitors = {bottomComp[1].value}/>
      {/if}
      <DeleteButton/>
      {#if gallery}
        <CheckOutButton bind:countCurVisitors = {bottomComp[1].value}/>
      {/if}
    </div>
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

