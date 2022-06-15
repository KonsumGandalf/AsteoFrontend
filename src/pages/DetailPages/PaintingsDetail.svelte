<script>
  import { getContext, onMount } from "svelte";
  import NavigatorBar from "../../components/pageComponent/NavigatorBar.svelte";
  import DetailComponent from "../../components/pageComponent/DetailComponent.svelte";
  import DescriptionComponent from "../../components/pageComponent/DescriptionComponent.svelte";
  import MapFooter from "../../components/pageComponent/MapFooter.svelte";
  import Footer from "../../components/pageComponent/Footer.svelte";
  import SimpleLocationMap from "../../components/subComponent/SimpleLocationMap.svelte";

  const asteoService = getContext("AsteoService");

  let detailEle = {};
    let addingUser = {};
    let furtherDescription;
    let epoch;
    let artist;
    let gallery;
    let image;
  let leftComp = {
    label: "Publication Year",
  };
  let rightComp = {
    label: "Adding User",
  };
  let bottomComp = [
    {
      label: "Selling Price",
    },
  ];

  let title = "";

  onMount(async () => {
    detailEle = await asteoService.getDetail(window.location.href.split("/#/")[1]);
    addingUser = await asteoService.getUser(detailEle.user);
    title = `${detailEle.title}`;
    image = detailEle.image;
    leftComp.value = detailEle.year;
    rightComp.value = addingUser.username;
    bottomComp[0].value = detailEle.price;
    epoch = await asteoService.getEpoch(detailEle.epoch);
    artist = await asteoService.getArtist(detailEle.artist);
    gallery = await asteoService.getGallery(detailEle.gallery);
    const allPosts = await asteoService.getAllPostsByGallery(gallery._id);
    const avgRating = allPosts.reduce((sum, ele) => sum + ele.rating, 0) / allPosts.length;
    const countPaintings = (await asteoService.getAllPaintings()).filter((painting) => painting.artist === artist._id).length;

    furtherDescription = [
      {
        title: "Epoch",
        link: `/epochs/${epoch._id}`,
        value: [
          { label: "Name", value: epoch.name },
          { label: "Period of time", value: epoch.yearSpan },
          { label: "Description", value: epoch.description },
        ],
      },
      {
        title: "Artist",
        link: `/artists/${artist._id}`,
        value: [
          { label: "Name", value: `${artist.firstName} ${artist.lastName}` },
          { label: "Number of Paintings", value: countPaintings },
          { label: "Description", value: artist.description },
        ],
      },
      {
        title: "Gallery",
        link: `/galleries/${gallery._id}`,
        value: [
          { label: "Name", value: gallery.name },
          { label: "Average Rating", value: avgRating },
          { label: "Number Of Visitors since Opening", value: gallery.countAllVisitors },
        ],
      },
    ];
  });
</script>

<NavigatorBar bind:title />
<DetailComponent bind:image bind:leftComp bind:rightComp bind:bottomComp />
{#if furtherDescription}
  <DescriptionComponent content={furtherDescription} />
  <MapFooter bind:gallery />
{/if}

<Footer />
