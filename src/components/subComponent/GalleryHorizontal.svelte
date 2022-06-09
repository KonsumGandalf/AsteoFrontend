<script>
    import ImageCaption from "./ImageCaption.svelte";
    import MapCaption from "./MapCaption.svelte";
    import {onMount} from "svelte";

    export let imageList = ["/design/images/artworks/Irises.jpg", "/design/images/artworks/Waves.jpg"]
    export let mode = "image";
    export let input = [];
    export let refList = [];
    export let galleryList = {};
    
    function getImage(){
      return imageList[Math.floor(Math.random()*imageList.length)];
    }

</script>

<div class="h-1/3 bg-pastelPeriwinkleCrayola items-center">
    <div class="mx-32 p-8">
        <div class="grid grid-cols-3 my-8">
          {#each input as image,idx}
            <div class="mt-4 border-black border-l-2 pl-2 rounded-none">
              <a href={window.location.href}/{refList[idx]}>
                {#if mode === "image"}
                  <ImageCaption imgSource={getImage()} imgCaption={image} classExtensionImg="w-72 h-72 "/> 
                {:else if mode === "map"}
                  <MapCaption gallery={galleryList[idx]} imgCaption={image} classExtensionImg="w-72 h-72"/> 
                {/if}
              </a>            
            </div>
          {/each}
        </div>
    </div>
</div>