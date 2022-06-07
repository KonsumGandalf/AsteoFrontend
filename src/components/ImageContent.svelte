<script>
import { each } from "svelte/internal";
import ImageCaption from "./ImageCaption.svelte";

    export let heading = "";
    export let contentList = [];
    export let imgSource ="";
    export let imgCaption = [];
    export let classExtensionImg = "";
</script>


<div class="border-l border-stone-700 rounded-none items-start p-2 w-10/12 mt-4">
    <h3 class="pb-2 text-2xl leading-6 text-gray-900">{heading}</h3>
    {#each contentList as line}
        <p class="font-josefin text-lg text-gray-600">{line}</p>
    {/each}
    <div class="mt-12">
        <ImageCaption imgSource={imgSource} imgCaption={imgCaption} classExtensionImg={classExtensionImg+" rounded-lg"}/>
    </div>
</div>