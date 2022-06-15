<script>
  export let options;
  export let filterByEpoch;
  export let attributeName = "";
  export let defaultText = `Select the ${attributeName} you want to filter`;
  export let selected;
</script>

<div class="flex items-center mb-3 xl:w-96">
  <select
    bind:value={selected}
    on:change={filterByEpoch}
    class="form-select appearance-none
  block
  w-full
  px-3
  py-1.5
  text-base
  font-mono
  text-gray-700
    bg-white bg-clip-padding bg-no-repeat
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
  >
    <option selected>{defaultText}</option>
    {#each options as option}
      <option>{option.name}</option>
    {/each}
  </select>
  <div class="material-icons-outlined md-32 -ml-8 hover:text-white transition duration-300">expand_more</div>
</div>
