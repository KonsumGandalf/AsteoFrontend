<script>
  import SimpleLocationMap from "../subComponent/SimpleLocationMap.svelte";
  export let title = "", leftComp = {}, rightComp = {}, bottomComp = [], gallery;

  export let imageList = ["/design/images/artworks/Irises.jpg", "/design/images/artworks/Waves.jpg"]
  function getImage(){
      return imageList[Math.floor(Math.random()*imageList.length)];
  }

</script>

<div class="container">
  <div class="flex  items-center justify-center space-x-8">
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
        <SimpleLocationMap gallery={gallery} mapStyle="map-large"/> 
      {:else}
        <img src={getImage()} class="shadow-xl" alt="">
      {/if}
    </div>
    <div class="w-2/12">
      <h3 class="mb-4 text-lg font-mono block">
        {rightComp.label}
      </h3>
      <p class="text-darkGrayishBlue font-jura text-xl">
        {rightComp.value}
      </p>
    </div>
  </div>
  {#each bottomComp as attr}
    <div class="mt-16">
      <h3 class="mb-4 text-lg font-mono block">
        {attr.label}
      </h3>
      <p class="text-darkGrayishBlue text-center font-jura">
        {attr.value}
      </p>
    </div>
  {/each}
</div>