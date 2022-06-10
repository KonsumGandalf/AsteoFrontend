<script>
  import { push } from "svelte-spa-router";
  export let content;
</script>

<div class="container mt-12">
  {#each content as attributeGroup}
    <div class="p-8 border-pastelBlackOlive border-t-2">
      <button on:click|once={() => push(attributeGroup.link)} class="underline underline-offset-2 decoration-2 decoration-dashed font-josefin text-3xl tracking-widest uppercase mb-4">
        {attributeGroup.title}
      </button>
      {#each attributeGroup.value as attr}
          <div class="flex justify-left mt-4">
            <h3 class="mb-4 w-52 font-bold font-mono block">
              {attr.label}
            </h3>
            <p class="text-darkGrayishBlue w-4/5 text-justify font-jura">
              {attr.value}
            </p>
          </div>
      {/each}
    </div>
  {/each}
</div>