<script>
  import { onMount } from "svelte";
  import ImageCaption from "../ImageCaption.svelte";
  import MapCaption from "../MapCaption.svelte";

  export let mode = "image";
  export let input = [];
  export let refList = [];
  export let imgList = [];
  export let imgPerLine = 3;
  export let galleryList = {};
</script>

<div class="h-1/3 bg-pastelPeriwinkleCrayola items-center">
  <div class="mx-32 p-8">
    {#if imgPerLine === 4}
      <div class="grid grid-cols-4 my-8">
        {#each input as image, idx}
          <div class="border-l-2 border-pastelBlackOlive p-4 m-4 rounded-none">
            <a href="{window.location.href}/{refList[idx]}">
              {#if mode === "image"}
                <ImageCaption imgSource={imgList[idx]} imgCaption={image} classExtensionImg="h-72 " />
              {:else if mode === "map" && galleryList[idx].lng}
                <MapCaption gallery={galleryList[idx]} imgCaption={image} classExtensionImg="w-72 h-72" />
              {/if}
            </a>
          </div>
        {/each}
      </div>
    {:else}
      <div class="grid grid-cols-3 my-8">
        {#each input as image, idx}
          <div class="border-l-2 border-pastelBlackOlive p-4 m-4 rounded-none">
            <a href="{window.location.href}/{refList[idx]}">
              {#if mode === "image"}
                <ImageCaption imgSource={imgList[idx]} imgCaption={image} classExtensionImg="h-72 " />
              {:else if mode === "map" && galleryList[idx].lng}
                <MapCaption gallery={galleryList[idx]} imgCaption={image} classExtensionImg="w-72 h-72" />
              {/if}
            </a>
          </div>
        {/each}
      </div>
      {/if}
  </div>
</div>
