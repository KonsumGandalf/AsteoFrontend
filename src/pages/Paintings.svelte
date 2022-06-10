<script>
  import NavigatorBar from "../components/pageComponent/NavigatorBar.svelte";
  import Footer from "../components/pageComponent/Footer.svelte";
  import GalleryHorizontal from "../components/subComponent/GalleryHorizontal.svelte";
  import {getContext, onMount} from "svelte";

  const asteoService = getContext("AsteoService");

  let paintingList = [], idList = [], attrList = [];

  onMount(async() => {
    paintingList = (await asteoService.getAllPaintings());
    idList = paintingList.map((ele) => ele._id);
    attrList = paintingList.map((ele) => {
      return [`Title: ${ele.title}`, `Year: ${ele.year}`];
    });
  });
</script>


<NavigatorBar title="Paintings"/>
<GalleryHorizontal bind:input={attrList} bind:refList={idList} bind:galleryList={paintingList}/>
<Footer/>