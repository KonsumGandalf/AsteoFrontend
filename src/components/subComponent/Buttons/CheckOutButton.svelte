<script>
  import { getContext, onMount } from "svelte";
  import { push } from "svelte-spa-router";

  export let countCurVisitors;
  const asteoService = getContext("AsteoService");

  async function checkOut() {
    countCurVisitors -= 1;
    const res = await asteoService.galleryCheckOut(window.location.href.split("/galleries/")[1]);
    try {
      if (res.status === 204 || res.status === 201) {
      }
    } catch (error) {
      const msg = res.response.data.message.toString();
      alert(msg);
    }
  }
</script>

<div class="mt-8 shadow-md rounded-lg">
  <button on:click={checkOut} class="mx-auto border border-2 bg-white border-pastelBlackOlive px-4 py-2 rounded-lg hover:bg-slate-200">
    <div class="material-icons-outlined mt-1 text-pastelBlackOlive">person_remove</div>
  </button>
</div>
