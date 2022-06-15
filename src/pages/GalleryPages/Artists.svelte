<script>
  import { getContext, onMount } from "svelte";
  import NavigatorBar from "../../components/pageComponent/NavigatorBar.svelte";
  import Footer from "../../components/pageComponent/Footer.svelte";
  import GalleryHorizontal from "../../components/subComponent/Content/GalleryHorizontal.svelte";
  import FormPlusButton from "../../components/subComponent/Buttons/FormButton.svelte";
  import LabledInput from "../../components/subComponent/LabledInput.svelte";

  const asteoService = getContext("AsteoService");

  let artistsList;
    let idList = [];
    let imgList = [];
    let formHidden;
    let errorMessage;
  let firstName; let lastName; let image; let description;

  onMount(async () => {
    artistsList = await asteoService.getAllArtists();
    idList = artistsList.map((ele) => ele._id);
    imgList = artistsList.map((ele) => ele.image);
    // const paintingList = await asteoService.getAllPaintings();
    // const countPaintings = artistsList.map((artist) => paintingList.filter((painting) => painting.artist === artist._id).length);
    artistsList = artistsList.map((ele, idx) => [`Name: ${ele.firstName} ${ele.lastName}`]);
  });



  async function updateGallery() {
    artistsList = await asteoService.getAllArtists();
    idList = artistsList.map((ele) => ele._id);
    imgList = artistsList.map((ele) => ele.image);
    artistsList = artistsList.map((ele) => [`Name: ${ele.firstName} ${ele.lastName}`, `Number of Paintings: ${ele.countPaintings}`]);
  }

  async function createArtist() {
    const success = await asteoService.createEle(window.location.href.split("/#/")[1], {
      firstName,
      lastName,
      image,
      description,
    });
    if (success) {
      formHidden = !formHidden;
      updateGallery();
    } else {
      errorMessage = "Error Trying to add Element";
    }
  }
</script>

<NavigatorBar title="Artists" />
<FormPlusButton bind:formHidden />

<!-- form for the epoch -->
<div class="container border-2 p-8 border-pastelBlackOlive mb-8 {formHidden ? 'hidden' : ''}">
  <form on:submit|preventDefault={createArtist}>
    <div class="grid grid-cols-6 grid-flow-row gap-6">
      <LabledInput spanW={3} styledLabel="First Name" bind:value={firstName} />
      <LabledInput spanW={3} styledLabel="Last Name" bind:value={lastName} />
      <LabledInput spanW={4} styledLabel="Image Url - 1:1 Relation" bind:value={image} />
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

{#await artistsList}
<p>waiting</p>
{:then value} 
<GalleryHorizontal imgPerLine={4} bind:imgList input={value} bind:refList={idList} />
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}

<Footer />
