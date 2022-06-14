<script>
  import {getContext, onMount} from "svelte";
  import { push } from "svelte-spa-router";

  const asteoService = getContext("AsteoService");
  
  async function deleteEle(){
    const res = (await asteoService.deleteEle((window.location.href).split("/#/")[1]));
    const subPage = (window.location.href).split("/")[4];
    if (res.status) {
      push(`/${subPage}`);
    } else {
      const msg = res.response.data.message.toString();
      alert(msg);
    }
  }
</script>

<div class="mx-auto rounded-lg shadow-md mt-8">
  <button on:click={deleteEle} class="mx-auto border border-2 bg-white border-pastelBlackOlive px-4 py-2 rounded-lg hover:bg-slate-200">
    <div class="material-icons-outlined mt-1 text-pastelBlackOlive">delete</div>
  </button>
</div>
