<script>
  import NavigatorBar from "../../components/pageComponent/NavigatorBar.svelte";
  import Footer from "../../components/pageComponent/Footer.svelte";
  import GalleryHorizontal from "../../components/subComponent/Content/GalleryHorizontal.svelte";
  import {getContext, onMount} from "svelte";
  import FormPlusButton from "../../components/subComponent/Buttons/FormButton.svelte";
  import LabledInput from "../../components/subComponent/LabledInput.svelte";
  import SelectButton from "../../components/subComponent/Buttons/SelectButton.svelte";
  import ImageAdd from "../../components/subComponent/Buttons/ImageAdd.svelte";

  const asteoService = getContext("AsteoService");

  let paintingList, idList, attrList, imgList, formHidden, errorMessage;
  let title, year, price, image;
  let epochsList = [], selectedEpoch, artistsList = [], selectedArtist, galleriesList, selectedGallery; // selected attributes by Option

  onMount(async() => {
    updateGallery();
  });

  async function updateGallery(){
    paintingList = (await asteoService.getAllPaintings());
    idList = paintingList.map((ele) => ele._id);
    imgList = paintingList.map((ele) => ele.image);
    attrList = paintingList.map((ele) => {
      return [`Title: ${ele.title}`, `Year: ${ele.year}`];
    });
    epochsList = (await asteoService.getAllEpochs());
    artistsList = (await asteoService.getAllArtists());
    galleriesList = (await asteoService.getAllGalleries());
  };

  async function createArtist(){
    if (selectedArtist && selectedEpoch && selectedEpoch){
      const artist =  artistsList.find((ele) => selectedArtist === `${ele.firstName} ${ele.lastName}`);
      const gallery =  galleriesList.find((ele) => selectedGallery === ele.name);
      const epoch =  epochsList.find((ele) => selectedEpoch === ele.name);
      let success = await asteoService.createEle((window.location.href).split("/#/")[1], {title, year, price, image, epoch, artist, gallery});
      if (success) {
        formHidden = !formHidden;
        updateGallery();
      }
      else {
        errorMessage = "Error Trying to add Element";
      }
    } else{
      alert("All Attributes need to be selected!");
    }
  }
</script>


<NavigatorBar title="Paintings"/>

<FormPlusButton bind:formHidden={formHidden}/>

<!-- form for the epoch -->
<div class ="container border-2 p-8 border-pastelBlackOlive mb-8 {(formHidden) ? "hidden" : ""}">
  <form on:submit|preventDefault={createArtist}>
    <div class="grid grid-cols-6 grid-flow-row gap-6">              
      <LabledInput spanW={4} styledLabel="Artwork title" bind:value={title} />
      <LabledInput spanW={4} styledLabel="Image Url - 2:1 Relation" bind:value={image} />
      <LabledInput spanW={3} typeInput="number" styledLabel="Publication Year" bind:value={year} />
      <LabledInput spanW={3} typeInput="number" styledLabel="Selling Price" bind:value={price} />
      <!-- Select Options -->
      <SelectButton artist={true} bind:selected={selectedArtist} bind:inputList={artistsList} category="Artist"/>
      <SelectButton bind:selected={selectedGallery} bind:inputList={galleriesList} category="Gallery"/>
      <SelectButton bind:selected={selectedEpoch} bind:inputList={epochsList} category="Epoch"/>
      <ImageAdd/>

    </div>
    <div class="px-4 py-2 bg-gray-50 text-right sm:px-6">
      <button class="text-pastelBlackEerie font-mono py-5 px-2 border-b-2 border-pastelMediumPurple hover:text-white hover:bg-pastelMediumPurple hover:border-stone-700 transition duration-300">Confirm</button>
    </div>
  </form>  
  {#if errorMessage}
    <div class="section">
      {errorMessage}
    </div>
  {/if}
</div>

<GalleryHorizontal bind:imgList={imgList} bind:input={attrList} bind:refList={idList} bind:galleryList={paintingList}/>
<Footer/>