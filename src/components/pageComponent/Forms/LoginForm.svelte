<script lang="ts">
    import { push } from "svelte-spa-router";
    import { getContext } from "svelte";
    import LabelInput from "../../subComponent/LabledInput.svelte";
    import ImageContent from "../../subComponent/Content/ImageContent.svelte";
  
    let username = "";
    let password = "";
    let errorMessage = "";
    
    const asteoService = getContext("AsteoService");
  
    async function login() {
      let success = await asteoService.login(username, password);
      if (success) {
        push("/profile");
      } else {
        errorMessage = "Error Trying to sign up";
      }
    }
  </script>
  
  <div class="mt-10 sm:mt-0">
    <div class="md:grid md:grid-cols-3 md:gap-6">
      <div class="ml-4 md:col-span-1">
        <ImageContent heading="Personal Information" contentList={["Log(in) to interact our Community.","Log your path."]} imgSource="/design/images/artworks/Waves.jpg" imgCaption={["Fig.1 - Unkown Artist - Waves, 1887."]} />
        
      </div>
      <div class="md:mt-0 md:col-span-2">
        <form on:submit|preventDefault={login}>  
          <div class="shadow overflow-hidden sm:rounded-md">
            <div class="px-4 py-5 bg-white sm:p-6">
              <div class="grid grid-cols-6 gap-6">
                <LabelInput spanW={4} styledLabel="Username" bind:value="{username}" />
                <LabelInput spanW={4} styledLabel="Password" typeInput="password" bind:value="{password}" />             
              </div>
            </div>
            <div class="px-4 py-5 bg-gray-50 text-right sm:px-6">
              <button class="text-pastelBlackEerie font-mono py-5 px-2 border-b-2 border-pastelMediumPurple hover:text-white hover:bg-pastelMediumPurple hover:border-stone-700 transition duration-300">Confirm</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  
  {#if errorMessage}
    <div class="section">
      {errorMessage}
    </div>
  {/if}
  