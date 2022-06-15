<script>
  export let imgSource = "";
  export let imgCaption = [];
  export let classExtensionImg = "";
</script>

<div>
  <img src={imgSource} class="w-11/12 shadow-xl {classExtensionImg}" alt="" />
  <!-- <div class="font-mono tracking-wide text-sm text-left">{imgCaption}</div> -->
  <div class="mt-4">
    {#each imgCaption as line}
      <p class="font-mono tracking-wide text-sm text-left">{line}</p>
    {/each}
  </div>
</div>
