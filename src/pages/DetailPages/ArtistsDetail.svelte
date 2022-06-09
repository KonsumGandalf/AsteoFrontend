<script>
  import NavigatorBar from "../../components/pageComponent/NavigatorBar.svelte";
  import Footer from "../../components/pageComponent/Footer.svelte";
  import DetailComponent from "../../components/pageComponent/DetailComponent.svelte";
  import {getContext, onMount} from "svelte";

  const asteoService= getContext("AsteoService");

  let detailEle = {}, addingUser = {};
  /**
   * "value" of elements is fetched from database in onMount
   */
  let leftComp = {
    label: "Number of Paintings",
  }
  let rightComp = {
    label: "Adding user",
  };
  let bottomComp = [
    {
      label: "Description",
    }
  ]
  let title = "";

  onMount(async() => {
    detailEle = (await asteoService.getDetail((window.location.href).split("/#/")[1]));
    addingUser = await asteoService.getProfile(detailEle.user);
    title = `${detailEle.firstName} ${detailEle.lastName}`
    leftComp.value = detailEle.countPaintings;
    rightComp.value = addingUser.username;
    bottomComp[0].value = detailEle.description;
  })
</script>

<NavigatorBar bind:title={title}/>
<DetailComponent bind:title={title} bind:leftComp={leftComp} bind:rightComp={rightComp} bind:bottomComp={bottomComp}/>
<Footer/>