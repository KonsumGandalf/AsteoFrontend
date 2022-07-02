<script>
  export let imgSource = "";
  export let imgCaption = [];
  export let classExtensionImg = "";
</script>

<div class=" mb-8">
  <img src={imgSource} class="shadow-xl max-h-1/2 {classExtensionImg} rounded-md" alt="" />
  <!-- <div class="font-mono tracking-wide text-sm text-left">{imgCaption}</div> -->
  <div class="mt-4">
    {#each imgCaption as line}
      <p class="font-mono tracking-wide text-sm text-left">{line}</p>
    {/each}
  </div>
</div>
