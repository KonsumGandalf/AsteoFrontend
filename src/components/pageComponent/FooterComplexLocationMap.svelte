<script>
  import "leaflet/dist/leaflet.css";
  import * as L from "leaflet";
  import { getContext, onMount } from "svelte";
  import { LeafletMap } from "../../services/leaflet-map";

  export let mapStyle;
    export let epoch = null;
    export let artist = null;

  const asteoService = getContext("AsteoService");
  const mapName = "asteomap";
  const mapConfig = {
    location: { lat: 49.013432, lng: 12.101624 },
    zoom: 3,
    minZoom: 1,
  };

  let map;

  onMount(async () => {
    let paintings;
    if (epoch) {
      paintings = (await asteoService.getAllPaintings()).filter((painting) => painting.epoch === epoch._id);
    }
    if (artist) {
      paintings = await asteoService.getAllPaintings();
      paintings = paintings.filter((painting) => painting.artist === artist._id);
    }
    const LayerName = "Galleries";
    map = new LeafletMap(mapName, mapConfig);
    map.addLayerGroup(LayerName);
    map.showZoomControl();
    map.showLayerControl();

    paintings.forEach(async (painting) => {
      const gallery = await asteoService.getGallery(painting.gallery);
      addGalleryMarker(gallery, LayerName);
    });
  });

  export function addGalleryMarker(gallery, LayerName) {
    const donationStr = `${gallery.name}`;
    map.addMarker({ lat: gallery.lat, lng: gallery.lng }, donationStr, LayerName); // maybe with string instead of int
    map.moveTo(3, { lat: gallery.lat, lng: gallery.lng });
  }
</script>

<div class={mapStyle} id={mapName} />
