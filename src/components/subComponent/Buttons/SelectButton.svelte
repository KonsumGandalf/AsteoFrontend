<script>
  export let inputList = [];
  export let selected = null;
  export let category;
  export let artist = false;
  export let spanW = 3;
</script>

<form class="col-span-{spanW}">
  <div class="flex items-center mb-3 xl:w-96">
      <select bind:value={selected} class="form-select appearance-none block w-full px-3 py-1.5 font-mono text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
        <option selected>Select the {category}</option>
        {#each inputList as option}
          {#if artist}
            <option>{`${option.firstName} ${option.lastName}`}</option>
          {:else}
            <option>{option.name}</option>
          {/if}
        {/each}
      </select>
  <div class="material-icons-outlined md-32 -ml-8 hover:text-white transition duration-300">expand_more</div>
</form>