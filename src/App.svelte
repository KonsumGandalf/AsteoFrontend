<script>
  import { setContext } from "svelte";
  //  import {DonationService} from "./services/donation-service";
  import Router from "svelte-spa-router";
  import Home from "./pages/Home.svelte";
  import Analytics from "./pages/Analytics.svelte";
  import Artists from "./pages/GalleryPages/Artists.svelte";
  import Discovery from "./pages/Discovery.svelte";
  import Epochs from "./pages/GalleryPages/Epochs.svelte";
  import Galleries from "./pages/GalleryPages/Galleries.svelte";
  import Login from "./pages/Login.svelte";
  import Paintings from "./pages/GalleryPages/Paintings.svelte";
  import Profile from "./pages/Profile.svelte";
  import Register from "./pages/Register.svelte";
  import ArtistsDetail from "./pages/DetailPages/ArtistsDetail.svelte";
  import EpochsDetail from "./pages/DetailPages/EpochsDetail.svelte";
  import GalleriesDetail from "./pages/DetailPages/GalleriesDetail.svelte";
  import PaintingsDetail from "./pages/DetailPages/PaintingsDetail.svelte";
  
  import { AsteoService } from "./services/asteo-service";

  setContext("AsteoService", new AsteoService("http://localhost:4000"));

  const routes = {
    "/": Home,
    "/login": Login,
    "/register": Register,
    "/artists": Artists,
    "/discovery": Discovery,
    "/epochs": Epochs,
    "/galleries": Galleries,
    "/paintings": Paintings,
    "/profile": Profile,
    "/analytics": Analytics,
    "/home": Home,
    "/logout": Home,
    "/artists/:id": ArtistsDetail,
    "/epochs/:id": EpochsDetail,
    "/galleries/:id": GalleriesDetail,
    "/paintings/:id": PaintingsDetail,
  };
</script>

<div>
  <Router {routes} />
</div>
