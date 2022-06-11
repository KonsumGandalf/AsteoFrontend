<script lang="ts">
  import { push } from "svelte-spa-router";
  import { getContext, onMount } from "svelte";
  import { get } from "svelte/store";
  import LabelInput from "../subComponent/LabledInput.svelte";
  import ImageContent from "../subComponent/ImageContent.svelte";
  import { user } from "../../stores.js";

  let profil;
  const contentList = ["Be(Member) to join our Community.","Re(Member) what expresses you."];

  const asteoService = getContext("AsteoService");

  onMount(async () => {
    profil = await asteoService.getUser(get(user)._id)
  });
</script>

<div class="mt-10 sm:mt-0">
  <div class="md:grid md:grid-cols-3 md:gap-6">
    <div class="ml-4 md:col-span-1">
      <ImageContent heading="Personal Information" contentList={contentList} imgSource="/design/images/artworks/Waves.jpg" imgCaption={["Fig.1 - Unkown Artist - Waves, 1887."]} />
      
    </div>
    <div class="md:mt-0 md:col-span-2">
<!--       <form on:submit|preventDefault={register}>
 -->        <div class="shadow overflow-hidden sm:rounded-md">
          <div class="px-4 py-5 bg-white sm:p-6">
            {#if profil}              
            <div class="grid grid-cols-6 gap-6">              
              <LabelInput spanW={3} styledLabel="First Name" value={profil.firstName} />
              <LabelInput spanW={3} styledLabel="Last Name" bind:value="{profil.lastName}" />
              <LabelInput spanW={4} styledLabel="Email" typeInput="email" bind:value="{profil.email}" />
              <LabelInput spanW={4} styledLabel="Username" bind:value="{profil.username}" />
              <LabelInput spanW={4} styledLabel="Password" bind:value="{profil.password}" typeInput="password" />             
              <LabelInput spanW={4} styledLabel="rank" value={profil.rank.toString()}/>             
              <LabelInput spanW={4} styledLabel="countPosting" value={profil.countPosting.toString()}/>             
            </div>
            {/if}
          </div>
          <div class="px-4 py-5 bg-gray-50 text-right sm:px-6">
            <button class="text-pastelBlackEerie font-mono py-5 px-2 border-b-2 border-pastelMediumPurple hover:text-white hover:bg-pastelMediumPurple hover:border-stone-700 transition duration-300">Confirm</button>
          </div>
        </div>
      <!-- </form> -->
    </div>
  </div>
</div>
