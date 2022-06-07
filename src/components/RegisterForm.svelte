<script lang="ts">
  import { push } from "svelte-spa-router";
  import { getContext } from "svelte";
  import LabelInput from "./LabledInput.svelte";
  import ImageContent from "./ImageContent.svelte";

  let firstName = "";
  let lastName = "";
  let email = "";
  let username = "";
  let password = "";
  let errorMessage = "";

  const contentList = ["Be(Member) to join our Community.","Re(Member) what expresses you."];

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

<div class="mt-10 sm:mt-0">
  <div class="md:grid md:grid-cols-3 md:gap-6">
    <div class="ml-4 md:col-span-1">
      <ImageContent heading="Personal Information" contentList={contentList} imgSource="/design/images/artworks/Waves.jpg" imgCaption={["Fig.1 - Unkown Artist - Waves, 1887."]} />
      
    </div>
    <div class="md:mt-0 md:col-span-2">
      <form on:submit|preventDefault={register}>  
        <div class="shadow overflow-hidden sm:rounded-md">
          <div class="px-4 py-5 bg-white sm:p-6">
            <div class="grid grid-cols-6 gap-6">              
              <LabelInput spanW={3} styledLabel="First Name" value="{firstName}" />
              <LabelInput spanW={3} styledLabel="Last Name" value="{lastName}" />
              <LabelInput spanW={4} styledLabel="Email" value="{email}" />
              <LabelInput spanW={4} styledLabel="Username" value="{username}" />
              <LabelInput spanW={4} styledLabel="Password" value="{password}" />             
            </div>
          </div>
          <div class="px-4 py-5 bg-gray-50 text-right sm:px-6">
            <a href="/#/login" class="text-pastelBlackEerie font-mono py-5 px-2 border-b-2 border-pastelMediumPurple hover:text-white hover:bg-pastelMediumPurple hover:border-stone-700 transition duration-300">Confirm</a>
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
