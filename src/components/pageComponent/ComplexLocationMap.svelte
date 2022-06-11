<script>
  import '/dist/leaflet.css';
  import 'leaflet/dist/leaflet.css';
  import * as L from "leaflet";
  import {LeafletMap} from '../../services/leaflet-map';
  import {getContext, onMount} from "svelte";
  
  const asteoService = getContext("AsteoService");
  const mapName = "asteomap";
  const mapConfig = {
      location: {lat: 49.013432, lng: 12.101624},
      zoom: 9,
      minZoom: 1,
    };

  let map, epochs, artists, selectedEpoch, selectedArtist ;

  async function filterByEpoch(){
    if(selectedEpoch){
      const LayerName = `Galleries - ${selectedEpoch}`;
      const epoch = (await asteoService.getAllEpochs()).filter((epoch) => epoch.name === selectedEpoch)[0];
      const paintings = (await asteoService.getAllPaintings()).filter((painting) => painting.epoch === epoch._id);

      
      paintings.forEach(async (painting) => {
        const gallery = await asteoService.getGallery(painting.gallery);
        console.log(gallery);
        addGalleryMarker(gallery, LayerName);
      });
      
      map.addLayerGroup(LayerName);
      map.showLayerControl();
    }
  }

  async function filterByArtist(){
    if(selectedArtist){
      const LayerName = `Galleries - ${selectedArtist}`;
      const artist = (await asteoService.getAllArtists()).filter((artist) => `${artist.firstName} ${artist.lastName}` === selectedArtist)[0];
      const paintings = (await asteoService.getAllPaintings()).filter((painting) => painting.artist === artist._id);

      
      paintings.forEach(async (painting) => {
        const gallery = await asteoService.getGallery(painting.gallery);
        console.log(gallery);
        addGalleryMarker(gallery, LayerName);
      });
      
      map.addLayerGroup(LayerName);
      map.showLayerControl();
    }
  }

  function handleSubmit() {
		alert(`answered question `);
	}
  
  onMount(async () => {
    const galleries = (await asteoService.getAllGalleries());
    const LayerName = "Galleries"
    map = new LeafletMap(mapName, mapConfig);
    map.addLayerGroup(LayerName);
    map.showZoomControl();
    map.showLayerControl();
    
    galleries.forEach(gallery => {
      addGalleryMarker(gallery, LayerName);
    });

    epochs = await asteoService.getAllEpochs();
    artists = await asteoService.getAllArtists();
  });
  
  export function addGalleryMarker(gallery, LayerName) {
    const donationStr = `${gallery.name}`;    
    map.addMarker({lat: gallery.lat, lng: gallery.lng}, donationStr, LayerName); // maybe with string instead of int
    map.moveTo(11, {lat: gallery.lat, lng: gallery.lng});
  }
</script>

<div class="flex justify-center w-full h-2/3">
  <div class="flex flex-col items-center w-2/3 border-x-4 border-pastelBlackOlive p-4">
    <div class="p-8">
      {#if epochs && artists}
        <form>
          <div class="flex items-center mb-3 xl:w-96">
              <select bind:value={selectedEpoch} on:change={filterByEpoch} class="form-select appearance-none block w-full px-3 py-1.5 font-mono text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
                <option selected>Select the Epoch you want to filter</option>
                {#each epochs as option}
                <option >{option.name}</option>
                {/each}
              </select>
          <div class="material-icons-outlined md-32 -ml-8 hover:text-white transition duration-300">expand_more</div>
        </div>
      </form>
      <form>
        <div class="flex items-center mb-3 xl:w-96">
            <select bind:value={selectedArtist} on:change={filterByArtist} class="form-select appearance-none block w-full px-3 py-1.5 font-mono text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
              <option selected>Select the Artist you want to filter</option>
              {#each artists as option}
              <option >{`${option.firstName} ${option.lastName}`}</option>
              {/each}
            </select>
        <div class="material-icons-outlined md-32 -ml-8 hover:text-white transition duration-300">expand_more</div>
      </div>
    </form>
      
      {/if}
    </div>
    <div class="map-large" id={mapName}></div>
  </div>
</div>