<script>
  import NavigatorBar from "../../components/pageComponent/NavigatorBar.svelte";
  import Footer from "../../components/pageComponent/Footer.svelte";
  import MapFooter from "../../components/pageComponent/MapFooter.svelte";
  import DetailComponent from "../../components/pageComponent/DetailComponent.svelte";
  import {getContext, onMount} from "svelte";

  const asteoService= getContext("AsteoService");

  let detailEle = {}, addingUser = {};
  let leftComp = {
    label: "Average Rating",
  }
  let rightComp = {
    label: "Adding User",
  };
  let bottomComp = [
    {
      label: "Number Of Visitors since Opening",
    },
    {
      label: "Current Number Of Visitors",
    }
  ]
  let title = "";

  onMount(async() => {
    detailEle = (await asteoService.getDetail((window.location.href).split("/#/")[1]));
    addingUser = await asteoService.getUser(detailEle.user);
    title = `${detailEle.name}`
    leftComp.value = detailEle.avgRating;
    rightComp.value = addingUser.username;
    bottomComp[0].value = detailEle.countAllVisitors;
    bottomComp[1].value = detailEle.countCurVisitors;
  })
</script>

<NavigatorBar bind:title={title}/>
<DetailComponent bind:leftComp={leftComp} bind:rightComp={rightComp} bind:bottomComp={bottomComp} bind:gallery={detailEle}/>
<Footer/>