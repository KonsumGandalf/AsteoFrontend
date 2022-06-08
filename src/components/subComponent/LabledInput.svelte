<script>
    export let spanW;
    export let styledLabel = "";
    export let typeInput = "text";
    export let value = "";
    export let readonly = false;  
    import { onMount } from 'svelte';
</script>

<div class="col-span-6 sm:col-span-{spanW}">
    <label id=label_{styledLabel.toLocaleLowerCase()} class="block text-sm font-mono" for={styledLabel.toLocaleLowerCase()}>{styledLabel}</label>
    {#if typeInput === "text"}
      <input id="input_{styledLabel.toLocaleLowerCase()}" readonly={readonly} bind:value={value} placeholder="Enter {styledLabel.toLocaleLowerCase()}" class="block w-full font-mono border-b border-stone-700 bg-transparent text-stone-700 focus:outline-none" name="input" type="text">  
    {:else if typeInput === "email"}
      <input id="input_{styledLabel.toLocaleLowerCase()}" readonly={readonly} bind:value={value} placeholder="Enter {styledLabel.toLocaleLowerCase()}" class="block w-full font-mono border-b border-stone-700 bg-transparent text-stone-700 focus:outline-none" name="input" type="email">  
    {:else}
      <input id="input_{styledLabel.toLocaleLowerCase()}" readonly={readonly} bind:value={value} placeholder="Enter {styledLabel.toLocaleLowerCase()}" class="block w-full font-mono border-b border-stone-700 bg-transparent text-stone-700 focus:outline-none" name="input" type="password">  
    {/if}
</div>
