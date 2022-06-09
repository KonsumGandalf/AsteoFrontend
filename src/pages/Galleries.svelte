<script>
  import NavigatorBar from "../components/pageComponent/NavigatorBar.svelte";
  import Footer from "../components/pageComponent/Footer.svelte";
  import GalleryHorizontal from "../components/subComponent/GalleryHorizontal.svelte";
  import {getContext, onMount} from "svelte";

  const asteoService= getContext("AsteoService");

  let galleryList = [], idList = [], attrList = [];

  onMount(async() => {
    galleryList = (await asteoService.getAllGalleries());
    idList = galleryList.map((ele) => ele._id);
    attrList = galleryList.map((ele) => {
      return [`Name: ${ele.name}`, `Average Rating: ${ele.countAllVisitors}`];
    });
  });
</script>


<NavigatorBar title="Galleries"/>
<GalleryHorizontal mode="map" bind:input={attrList} bind:refList={idList} bind:galleryList={galleryList}/>
<Footer/>