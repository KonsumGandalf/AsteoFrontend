<script>
  import NavigatorBar from "../components/pageComponent/NavigatorBar.svelte";
  import Footer from "../components/pageComponent/Footer.svelte";
  import GalleryHorizontal from "../components/subComponent/GalleryHorizontal.svelte";
  import {getContext, onMount} from "svelte";

  const asteoService= getContext("AsteoService");

  let galleryList = [], idList = [];

  onMount(async() => {
    galleryList = (await asteoService.getAllEpochs());
    idList = galleryList.map((ele) => ele._id);
    galleryList = galleryList.map((ele) => {
      return [`Name: ${ele.name}`, `Period of time: ${ele.yearSpan}`];
    })
  });
</script>


<NavigatorBar title="Epochs"/>
<GalleryHorizontal bind:input={galleryList} bind:refList={idList}/>
<Footer/>