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
      <div class="columns-4 gap-3 mx-auto space-y-3 pb-28">
        {#each input as image, idx}
          <div class="border-l-0 border-pastelBlackOlive p-4 rounded-none break-inside-avoid shadow-2xl rounded-lg mb-8">
            <a href="{window.location.href}/{refList[idx]}">
              {#if mode === "image"}
                <ImageCaption imgSource={imgList[idx]} imgCaption={image} classExtensionImg="" />
              {:else if mode === "map" && galleryList[idx].lng}
                <MapCaption gallery={galleryList[idx]} imgCaption={image} classExtensionImg="w-72 h-72" />
              {/if}
            </a>
          </div>
        {/each}
      </div>
    {:else}
      <div class="columns-3 gap-3 mx-auto space-y-3 pb-20 ">
        {#each input as image, idx}
          <div class="border-l-0 border-pastelBlackOlive p-4 rounded-none break-inside-avoid-column shadow-2xl rounded-lg ">
            <a href="{window.location.href}/{refList[idx]}">
              {#if mode === "image"}
                <ImageCaption imgSource={imgList[idx]} imgCaption={image} classExtensionImg="" />
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
