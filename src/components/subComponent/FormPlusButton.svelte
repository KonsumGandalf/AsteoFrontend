<script>
  export let formHidden = true;
</script>

<div class="mx-auto flex items-center w-full h-32">
  <button on:click={() => formHidden = !formHidden} class="flex justify-center mx-auto border border-4 bg-maximumBluePurple border-pastelBlackOlive p-8 w-64 rounded-lg hover:bg-pastelMediumPurple">
    <button class="material-icons-outlined md-32 mr-2 text-pastelBlackOlive">{(formHidden) ? "add_box" : "remove"}</button>
  </button>
  </div>