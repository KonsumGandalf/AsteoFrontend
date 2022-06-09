<script>
  import NavigatorBar from "../components/pageComponent/NavigatorBar.svelte";
  import Footer from "../components/pageComponent/Footer.svelte";
  import GalleryHorizontal from "../components/subComponent/GalleryHorizontal.svelte";
  import {getContext, onMount} from "svelte";

  const asteoService= getContext("AsteoService");

  let artistList = [], idList = [];

  onMount(async() => {
    artistList = (await asteoService.getAllArtists());
    idList = artistList.map((ele) => ele._id)
    artistList = artistList.map((ele) => {
      return [`Name: ${ele.firstName} ${ele.lastName}`, `Number of Paintings: ${ele.countPaintings}`];
    })
  })
</script>


<NavigatorBar title="Artists"/>
<GalleryHorizontal bind:input={artistList} bind:refList={idList}/>
<Footer/>