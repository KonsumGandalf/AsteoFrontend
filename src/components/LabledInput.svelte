<script>
    export let spanW;
    export let styledLabel = "";
    export let value = "";
</script>

<div class="col-span-6 sm:col-span-{spanW}">
    <label class="block text-sm font-mono" for={styledLabel.toLocaleLowerCase()}>{styledLabel}</label>
    <input bind:value={value} class="block w-full font-mono border-b border-stone-700 bg-transparent text-stone-700 focus:outline-none"  id="username" name="username" type="text">  
</div>
