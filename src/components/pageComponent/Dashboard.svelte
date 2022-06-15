<script>
  import { getContext, onMount } from "svelte";
  import IconHorizontal from "../subComponent/IconHorizontal.svelte";
  import ChartComponent from "../subComponent/Content/ChartComponent.svelte";

  const asteoService = getContext("AsteoService");
  let paintings = [];
    let epochs;
    let galleries;
  let numberOfUsers; let numberOfPosts; let numberOfVisitors; let
  numberOfLocations;

  let inputAbsDigits;
    let inputChart = [];

  onMount(async () => {
    galleries = await asteoService.getAllGalleries();
    numberOfUsers = (await asteoService.getAllUsers()).length;
    numberOfPosts = (await asteoService.getAllPosts()).length;
    const galleriesVisitors = galleries.map((ele) => ele.countAllVisitors);
    numberOfVisitors = galleriesVisitors.reduce((previousValue, currentValue) => previousValue + currentValue);
    numberOfLocations = galleries.length;
    inputAbsDigits = [
      {
        iconName: "face",
        headerText: "Number of Users",
        apiText: numberOfUsers,
      },
      {
        iconName: "forum",
        headerText: "Number of all Posts",
        apiText: numberOfPosts,
      },
      {
        iconName: "emoji_people",
        headerText: "Number of all Visitors",
        apiText: numberOfVisitors,
      },
      {
        iconName: "pin_drop",
        headerText: "Number of Locations",
        apiText: numberOfLocations,
      }, // painting pro epoch & gallery
    ];

    epochs = await asteoService.getAllEpochs();

    // finding the number of paintings by epoch
    paintings = (await asteoService.getAllPaintings()).map((painting) => painting.epoch);
    const epochOccurences = paintings.reduce((acc, curr) => (acc[curr] ? ++acc[curr] : (acc[curr] = 1), acc), {});

    // finding the number of paintings exhibited by gallery
    paintings = (await asteoService.getAllPaintings()).map((painting) => painting.gallery);
    const galleryOccurences = paintings.reduce((acc, curr) => (acc[curr] ? ++acc[curr] : (acc[curr] = 1), acc), {});

    inputChart = [
      {
        labels: epochs.map((epoch) => epoch.name),
        datasets: [{ values: epochs.map((epoch) => epochOccurences[epoch._id]) }],
      },
      {
        labels: galleries.map((gallery) => gallery.name),
        datasets: [{ values: galleries.map((gallery) => galleryOccurences[gallery._id]) }],
      },
    ];
  });
</script>

<div class="container ">
  <div class="flex justify-center gap-8">
    {#if numberOfUsers != null && numberOfPosts != null && numberOfLocations != null && numberOfVisitors != null}
      {#each inputAbsDigits as field}
        <IconHorizontal iconName={field.iconName} headerText={field.headerText} valueText={field.apiText} />
      {/each}
    {/if}
  </div>
  <div class="mt-8">
    {#each inputChart as chart}
      <div class="flex flex-col border-t border-pastelBlackOlive p-2">
        <ChartComponent bind:data={chart} />
      </div>
    {/each}
  </div>
</div>
