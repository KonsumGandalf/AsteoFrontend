<script>
  import { getContext, onMount } from "svelte";
  import NavigatorBar from "../../components/pageComponent/NavigatorBar.svelte";
  import Footer from "../../components/pageComponent/Footer.svelte";
  import GalleryHorizontal from "../../components/subComponent/Content/GalleryHorizontal.svelte";
  import FormPlusButton from "../../components/subComponent/Buttons/FormButton.svelte";
  import LabledInput from "../../components/subComponent/LabledInput.svelte";

  const asteoService = getContext("AsteoService");

  let galleryList = [];
    let idList = [];
    let attrList = [];
    let formHidden;
    let errorMessage;
  let name; let lat; let
  lng;

  onMount(async () => {
    galleryList = await asteoService.getAllGalleries();
    idList = galleryList.map((ele) => ele._id);
    attrList = galleryList.map((ele) => [`Name: ${ele.name}`, `Number of historic visitors: ${ele.countAllVisitors}`]);
  });

  async function updateGallery() {
    galleryList = await asteoService.getAllGalleries();
    idList = galleryList.map((ele) => ele._id);
    attrList = galleryList.map((ele) => [`Name: ${ele.name}`, `Number of historic visitors: ${ele.countAllVisitors}`]);
  }

  async function createGallery() {
    const success = await asteoService.createEle(window.location.href.split("/#/")[1], { name, lng, lat });
    if (success) {
      formHidden = !formHidden;
      updateGallery();
    } else {
      errorMessage = "Error Trying to add Element";
    }
  }
</script>

<NavigatorBar title="Galleries" />
<FormPlusButton bind:formHidden />

<!-- form for the epoch -->
<div class="container border-2 p-8 border-pastelBlackOlive mb-8 {formHidden ? 'hidden' : ''}">
  <form on:submit|preventDefault={createGallery}>
    <div class="grid grid-cols-6 grid-flow-row gap-6">
      <LabledInput spanW={3} styledLabel="Latitude" bind:value={lat} />
      <LabledInput spanW={3} styledLabel="Longitude" bind:value={lng} />
      <LabledInput spanW={4} styledLabel="Name" bind:value={name} />
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
<GalleryHorizontal mode="map" bind:input={attrList} bind:refList={idList} bind:galleryList />
<Footer />
