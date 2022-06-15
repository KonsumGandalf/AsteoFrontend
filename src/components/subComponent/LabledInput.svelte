<script>
  import { onMount } from "svelte";
  
  export let spanW;
  export let styledLabel = "";
  export let typeInput = "text";
  export let value = "";
  export let readonly = false;
</script>

<div class="col-span-6 sm:col-span-{spanW}">
  <label id="label_{styledLabel.toLocaleLowerCase()}" class="block text-sm font-mono" for={styledLabel.toLocaleLowerCase()}
    >{styledLabel}</label
  >
  {#if typeInput === "text"}
    <input
      id="input_{styledLabel.toLocaleLowerCase()}"
      {readonly}
      bind:value
      placeholder="Enter {styledLabel.toLocaleLowerCase()}"
      class="block w-full font-mono border-b border-stone-700 bg-transparent text-stone-700 focus:outline-none"
      name="input"
      type="text"
    />
  {:else if typeInput === "email"}
    <input
      id="input_{styledLabel.toLocaleLowerCase()}"
      {readonly}
      bind:value
      placeholder="Enter {styledLabel.toLocaleLowerCase()}"
      class="block w-full font-mono border-b border-stone-700 bg-transparent text-stone-700 focus:outline-none"
      name="input"
      type="email"
    />
  {:else if typeInput === "number"}
    <input
      id="input_{styledLabel.toLocaleLowerCase()}"
      {readonly}
      bind:value
      placeholder="Enter {styledLabel.toLocaleLowerCase()}"
      class="block w-full font-mono border-b border-stone-700 bg-transparent text-stone-700 focus:outline-none"
      name="input"
      type="number"
    />
  {:else}
    <input
      id="input_{styledLabel.toLocaleLowerCase()}"
      {readonly}
      bind:value
      placeholder="Enter {styledLabel.toLocaleLowerCase()}"
      class="block w-full font-mono border-b border-stone-700 bg-transparent text-stone-700 focus:outline-none"
      name="input"
      type="password"
    />
  {/if}
</div>
