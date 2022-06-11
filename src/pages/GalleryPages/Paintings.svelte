<script>
  import NavigatorBar from "../../components/pageComponent/NavigatorBar.svelte";
  import Footer from "../../components/pageComponent/Footer.svelte";
  import GalleryHorizontal from "../../components/subComponent/GalleryHorizontal.svelte";
  import {getContext, onMount} from "svelte";

  const asteoService = getContext("AsteoService");

  let paintingList, idList, attrList, imgList;

  onMount(async() => {
    paintingList = (await asteoService.getAllPaintings());
    idList = paintingList.map((ele) => ele._id);
    imgList = paintingList.map((ele) => ele.image);
    attrList = paintingList.map((ele) => {
      return [`Title: ${ele.title}`, `Year: ${ele.year}`];
    });
  });
</script>


<NavigatorBar title="Paintings"/>
<GalleryHorizontal bind:imgList={imgList} bind:input={attrList} bind:refList={idList} bind:galleryList={paintingList}/>
<Footer/>