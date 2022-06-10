<script>
  import '/dist/leaflet.css';
  import 'leaflet/dist/leaflet.css';
  import {LeafletMap} from '../../services/leaflet-map';
  import {getContext, onMount} from "svelte";
  
  const asteoService = getContext("AsteoService");
  export let gallery = {};
  export let mapStyle = "h-full w-full";
  export let idx = gallery._id || "";
  let id = `leafletmap${idx}`;
  

  let map ;
  
  onMount(async () => {
    if(idx === "") gallery = (await asteoService.getDetail((window.location.href).split("/#/")[1]));

    const mapConfig = {
      location: {lat: gallery.lat, lng: gallery.lng},
      zoom: 9,
      minZoom: 1,
    };

    map = new LeafletMap(id, mapConfig); // galleryId was previously "donations-map"
    map.showZoomControl();
    map.showLayerControl();
    
    addGalleryMarker();
  });
  
  export function addGalleryMarker() {
    const donationStr = `${gallery.name}}`;
    
    map.addMarker({lat: gallery.lat, lng: gallery.lng}, donationStr, "Galleries"); // maybe with string instead of int
    map.moveTo(11, {lat: gallery.lat, lng: gallery.lng});
  }
</script>

<div class={mapStyle} id={id}></div>