<script lang="ts">
  import { push } from "svelte-spa-router";
  import { getContext } from "svelte";
  import LabelInput from "../../subComponent/LabledInput.svelte";
  import ImageContent from "../../subComponent/Content/ImageContent.svelte";

  let firstName = "";
  let lastName = "";
  let email = "";
  let username = "";
  let password = "";
  let errorMessage = "";
  let image = "";

  const contentList = ["Be(Member) to join our Community.","Re(Member) what expresses you."];

  const asteoService = getContext("AsteoService");

  async function register() {
    const userTemplate = {firstName, lastName, email, username, password, image};
    let success = await asteoService.register(userTemplate)
    try{
      if (success.status === 201) {
      push("/login");
      } else {
      errorMessage = "Error Trying to sign up - Missing fields";
      }
    }
    catch (error) {
      errorMessage = error;
    }
  }
</script>

<div class="mt-10 sm:mt-0">
  <div class="md:grid md:grid-cols-3 md:gap-6">
    <div class="ml-4 md:col-span-1">
      <ImageContent heading="Personal Information" contentList={contentList} imgSource="/design/images/artworks/Waves.jpg" imgCaption={["Fig.1 - Unkown Artist - Waves, 1887."]} />
      
    </div>
    <div class="md:mt-0 md:col-span-2">
      <form on:submit|preventDefault={register}>  
        <div class="shadow overflow-hidden sm:rounded-md">
          <div class="px-4 py-5 bg-white sm:p-6">
            <div class="grid grid-cols-6 grid-flow-row gap-6">              
              <LabelInput spanW={3} styledLabel="First Name" bind:value={firstName} />
              <LabelInput spanW={3} styledLabel="Last Name" bind:value="{lastName}" />
              <LabelInput spanW={4} styledLabel="Email" typeInput="email" bind:value="{email}" />
              <LabelInput spanW={4} styledLabel="Image Url - 2:1 Relation" bind:value={image} />
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
