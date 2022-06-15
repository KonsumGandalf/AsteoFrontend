<script>
  import { getContext, onMount } from "svelte";
  import NavigatorBar from "../../components/pageComponent/NavigatorBar.svelte";
  import Footer from "../../components/pageComponent/Footer.svelte";
  import MapFooter from "../../components/pageComponent/MapFooter.svelte";
  import DetailComponent from "../../components/pageComponent/DetailComponent.svelte";
  import PostsList from "../../components/pageComponent/PostsList.svelte";

  const asteoService = getContext("AsteoService");

  let detailEle = {};
    let addingUser = {};
  let leftComp = {
    label: "Average Rating",
  };
  let rightComp = {
    label: "Adding User",
  };
  let bottomComp = [
    {
      label: "Number Of Visitors since Opening",
    },
    {
      label: "Current Number Of Visitors",
    },
  ];
  let title = "";

  onMount(async () => {
    detailEle = await asteoService.getDetail(window.location.href.split("/#/")[1]);
    addingUser = await asteoService.getUser(detailEle.user);
    title = `${detailEle.name}`;
    const allPosts = await asteoService.getAllPostsByGallery(detailEle._id);
    const avgRating = allPosts.reduce((sum, ele) => sum + ele.rating, 0) / allPosts.length;
    leftComp.value = avgRating;
    rightComp.value = addingUser.username;
    bottomComp[0].value = detailEle.countAllVisitors;
    bottomComp[1].value = detailEle.countCurVisitors;
  });
</script>

<NavigatorBar bind:title />
<DetailComponent bind:leftComp bind:rightComp bind:bottomComp bind:gallery={detailEle} />
{#await detailEle then gallery}
  {#if gallery._id}
    <PostsList galleryId={gallery._id} />
  {/if}
{/await}
<Footer />
