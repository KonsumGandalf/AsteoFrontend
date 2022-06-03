<script lang="ts">
  import { push } from "svelte-spa-router";
  import { getContext } from "svelte";

  let firstName = "";
  let lastName = "";
  let email = "";
  let username = "";
  let password = "";
  let errorMessage = "";

  const donationService = getContext("DonationService");

  async function register() {
    let success = await donationService.register(firstName, lastName, email, password)
    if (success) {
      push("/");
    } else {
      errorMessage = "Error Trying to sign up";
    }
  }
</script>

<form on:submit|preventDefault={register}>  
    <div class="flex flex-col border border-y-2 border-stone-700 rounded-none items-center p-2">
      <div  class="border-2 border-stone-700 ">
        <label class="font-mono" for="username">username: </label>
        <input bind:value={username} class="w-72 font-mono border-b border-stone-700 bg-transparent text-stone-700 mr-3 py-1 px-2 leading-tight focus:outline-none"  id="username" name="username" type="text">  
      </div>
      <label class="font-mono" for="password">password: </label>
      <input bind:value={password} class="font-mono border-b border-stone-700 bg-transparent text-stone-700 mr-3 py-1 px-2 leading-tight focus:outline-none"  id="password" name="password" type="text">
    </div>        
</form>  
{#if errorMessage}
  <div class="section">
    {errorMessage}
  </div>
{/if}
