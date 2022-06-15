<script>
  export let color = "border-pastelMediumPurple hover:bg-pastelMediumPurple hover:border-stone-700 hover:text-white";
  export let iconName = "";
  export let headerText = "";
  export let valueText = "";

  let count = 0;
  const updateCount = () => {
    const target = +valueText;
    const inc = Math.ceil(target / 5);
    if (count + inc < target) {
      count += inc;
      setTimeout(updateCount, 300);
    } else {
      count = target;
    }
  };
  updateCount();
</script>

<div class="p-4">
  <div class="flex flex-row justify-between font-nova w-64 h-32 py-5 px-2 border-b-2 transition duration-300 {color} ">
    <div class="flex items-center rounded-full w-16 h-16 bg-maximumBluePurple">
      <div class="mx-auto material-icons-outlined text-pastelBlackEerie">{iconName}</div>
    </div>
    <div class="flex flex-col justify-center items-center space-y-2">
      <div class="text-sm text-center mr-4">{headerText}</div>
      {#if Number.isInteger(valueText)}
        <div id="counter" class="counter text-lg text-center text-pastelBlackEerie">{count}</div>
      {:else}
        <div class="text-lg text-center text-pastelBlackEerie">{valueText}</div>
      {/if}
    </div>
  </div>
</div>
