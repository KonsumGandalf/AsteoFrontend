<script>
  import { getContext, onMount } from "svelte";
  import NavigatorBar from "../../components/pageComponent/NavigatorBar.svelte";
  import Footer from "../../components/pageComponent/Footer.svelte";
  import DetailComponent from "../../components/pageComponent/DetailComponent.svelte";
  import MapFooter from "../../components/pageComponent/MapFooter.svelte";

  const asteoService = getContext("AsteoService");

  let detailEle = {};
    let addingUser = {};
    let image;
  let leftComp = {
    label: "Period of time",
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
    title = `${detailEle.name}`;
    image = detailEle.image;
    leftComp.value = detailEle.yearSpan;
    rightComp.value = addingUser.username;
    bottomComp[0].value = detailEle.description;
  });
</script>

<NavigatorBar bind:title />
<DetailComponent bind:image bind:leftComp bind:rightComp bind:bottomComp />

{#if detailEle._id}
  <MapFooter bind:epoch={detailEle} />
{/if}
<Footer />
