<script>
  import { getContext, onMount } from "svelte";
  import { push } from "svelte-spa-router";
  import NavigatorBar from "../../components/pageComponent/NavigatorBar.svelte";
  import Footer from "../../components/pageComponent/Footer.svelte";
  import GalleryHorizontal from "../../components/subComponent/Content/GalleryHorizontal.svelte";
  import LabledInput from "../../components/subComponent/LabledInput.svelte";
  import FormPlusButton from "../../components/subComponent/Buttons/FormButton.svelte";

  const asteoService = getContext("AsteoService");

  let epochsList = [];
    let idList = [];
    let imgList = [];
    let formHidden;
    let errorMessage;
  let name; let yearSpan; let description; let
  image;

  onMount(async () => {
    epochsList = await asteoService.getAllEpochs();
    idList = epochsList.map((ele) => ele._id);
    imgList = epochsList.map((ele) => ele.image);
    epochsList = epochsList.map((ele) => [`Name: ${ele.name}`, `Period of time: ${ele.yearSpan}`]);
  });

  async function updateGallery() {
    epochsList = await asteoService.getAllEpochs();
    idList = epochsList.map((ele) => ele._id);
    imgList = epochsList.map((ele) => ele.image);
    epochsList = epochsList.map((ele) => [`Name: ${ele.name}`, `Period of time: ${ele.yearSpan}`]);
  }

  async function createEpoch() {
    const success = await asteoService.createEle(window.location.href.split("/#/")[1], {
   name, yearSpan, description, image,
  });
    if (success) {
      formHidden = !formHidden;
      updateGallery();
    } else {
      errorMessage = "Error Trying to add Element";
    }
  }
</script>

<NavigatorBar title="Epochs" />
<FormPlusButton bind:formHidden />

<!-- form for the epoch -->
<div class="container border-2 p-8 border-pastelBlackOlive mb-8 {formHidden ? 'hidden' : ''}">
  <form on:submit|preventDefault={createEpoch}>
    <div class="grid grid-cols-6 grid-flow-row gap-6">
      <LabledInput spanW={3} styledLabel="Epoch Name" bind:value={name} />
      <LabledInput spanW={3} styledLabel="Year Span" bind:value={yearSpan} />
      <LabledInput spanW={4} styledLabel="Image Url - 2:1 Relation" bind:value={image} />
      <LabledInput spanW={6} styledLabel="Description" bind:value={description} />
    </div>
    <div class="px-4 py-2 bg-gray-50 text-right sm:px-6">
      <button
        class="text-pastelBlackEerie font-mono py-5 px-2 border-b-2 border-pastelMediumPurple hover:text-white hover:bg-pastelMediumPurple hover:border-stone-700 transition duration-300"
        >Confirm</button
      >
    </div>
  </form>
  {#if errorMessage}
    <div class="section">
      {errorMessage}
    </div>
  {/if}
</div>
<GalleryHorizontal bind:imgList bind:input={epochsList} bind:refList={idList} />
<Footer />
