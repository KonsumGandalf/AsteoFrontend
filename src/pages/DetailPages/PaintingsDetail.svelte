<script>
  import NavigatorBar from "../../components/pageComponent/NavigatorBar.svelte";
  import DetailComponent from "../../components/pageComponent/DetailComponent.svelte";
  import DescriptionComponent from "../../components/pageComponent/DescriptionComponent.svelte";
  import MapFooter from "../../components/pageComponent/MapFooter.svelte";
  import Footer from "../../components/pageComponent/Footer.svelte";
  import SimpleLocationMap from "../../components/subComponent/SimpleLocationMap.svelte";
  import {getContext, onMount} from "svelte";

  const asteoService = getContext("AsteoService");

  let detailEle = {}, addingUser = {}, furtherDescription, epoch, artist, gallery, image;
  let leftComp = {
    label: "Publication Year",
  }
  let rightComp = {
    label: "Adding User",
  };
  let bottomComp = [
    {
      label: "Selling Price",
    },
  ]
  
  let title = "";

  onMount(async() => {
    detailEle = (await asteoService.getDetail((window.location.href).split("/#/")[1]));
    addingUser = await asteoService.getUser(detailEle.user);
    title = `${detailEle.title}`;    
    image = detailEle.image;
    leftComp.value = detailEle.year;
    rightComp.value = addingUser.username;
    bottomComp[0].value = detailEle.price;
    epoch = await asteoService.getEpoch(detailEle.epoch);
    artist = await asteoService.getArtist(detailEle.artist);
    gallery = await asteoService.getGallery(detailEle.gallery);

    furtherDescription = [
    {
      title: "Epoch",
      link: `/epochs/${epoch._id}`,
      value: [
        { label: "Name", value: epoch.name},
        { label: "Period of time", value: epoch.yearSpan},
        { label: "Description", value: epoch.description},
      ]
    },
    {
      title: "Artist",
      link: `/artists/${artist._id}`,
      value: [
        { label: "Name", value: `${artist.firstName} ${artist.lastName}`},
        { label: "Number of Paintings", value: artist.countPaintings},
        { label: "Description", value: artist.description},
      ]
    },
    {
      title: "Gallery",
      link: `/galleries/${gallery._id}`,
      value: [
        { label: "Name", value: gallery.name},
        { label: "Average Rating", value: gallery.avgRating},
        { label: "Number Of Visitors since Opening", value: gallery.countAllVisitors},
      ]
    },
    
  ];
  })
</script>

<NavigatorBar bind:title={title}/>
<DetailComponent bind:image={image} bind:leftComp={leftComp} bind:rightComp={rightComp} bind:bottomComp={bottomComp}/>
{#if furtherDescription}  
  <DescriptionComponent content={furtherDescription}/>
  <MapFooter bind:gallery={gallery}/>
{/if}

<Footer/>