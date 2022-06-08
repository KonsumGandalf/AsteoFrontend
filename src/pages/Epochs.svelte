<script>
  import NavigatorBar from "../components/pageComponent/NavigatorBar.svelte";
  import Footer from "../components/pageComponent/Footer.svelte";
  import GalleryHorizontal from "../components/subComponent/GalleryHorizontal.svelte";
  import {createEventDispatcher, getContext, onMount} from "svelte";
import { attr } from "svelte/internal";

  const asteoService= getContext("AsteoService");
  // const asteoService= getContext("AsteoService");
  // donationService.logout();

  let galleryList = [];
  let attrList;

  onMount(async() => {
    galleryList = (await asteoService.getEpochs())
    console.log(galleryList);
    attrList = (({ name, yearSpan }) => ({ name, yearSpan }))(galleryList);
    alert(attrList.name);
  })
</script>


<NavigatorBar title="Epochs"/>
<GalleryHorizontal input={[]}/>
<Footer/>