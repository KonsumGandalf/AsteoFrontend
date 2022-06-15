<script>
  import { getContext, onMount } from "svelte";
  import NavigatorBar from "../../components/pageComponent/NavigatorBar.svelte";
  import Footer from "../../components/pageComponent/Footer.svelte";
  import DetailComponent from "../../components/pageComponent/DetailComponent.svelte";
  import MapFooter from "../../components/pageComponent/MapFooter.svelte";
  import DeleteButton from "../../components/subComponent/Buttons/DeleteButton.svelte";

  const asteoService = getContext("AsteoService");

  let detailEle = {};
    let addingUser = {};
    let image;
  /**
   * "value" of elements is fetched from database in onMount
   */
  let leftComp = {
    label: "Number of Paintings",
  };
  let rightComp = {
    label: "Adding user",
  };
  let bottomComp = [
    {
      label: "Description",
    },
  ];
  let title = "";

  onMount(async () => {
    detailEle = await asteoService.getDetail(window.location.href.split("/#/")[1]);
    addingUser = await asteoService.getUser(detailEle.user);
    const countPaintings = (await asteoService.getAllPaintings()).filter((painting) => painting.artist === detailEle._id).length;
    title = `${detailEle.firstName} ${detailEle.lastName}`;
    image = detailEle.image;
    leftComp.value = countPaintings;
    rightComp.value = addingUser.username;
    bottomComp[0].value = detailEle.description;
  });
</script>

<NavigatorBar bind:title />
<DetailComponent bind:image bind:leftComp bind:rightComp bind:bottomComp />
{#if detailEle._id}
  <MapFooter bind:artist={detailEle} />
{/if}

<Footer />
