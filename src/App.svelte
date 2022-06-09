<script>
  import {setContext} from "svelte";
//  import {DonationService} from "./services/donation-service";
  import Home from "./pages/Home.svelte";
  import Analytics from "./pages/Analytics.svelte";
  import Artists from "./pages/Artists.svelte";
  import Discovery from "./pages/Discovery.svelte";
  import Epochs from "./pages/Epochs.svelte";
  import Galleries from "./pages/Galleries.svelte";
  import Login from "./pages/Login.svelte";
  import Paintings from "./pages/Paintings.svelte";
  import Profile from "./pages/Profile.svelte";
  import Register from "./pages/Register.svelte";
  import ArtistsDetail from "./pages/DetailPages/ArtistsDetail.svelte";
  import EpochsDetail from "./pages/DetailPages/EpochsDetail.svelte";
  import GalleriesDetail from "./pages/DetailPages/GalleriesDetail.svelte";

  import Router from "svelte-spa-router";
  import { AsteoService } from "./services/asteo-service";

  setContext("AsteoService", new AsteoService("http://localhost:4000"));

  let routes = {
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
  }
</script>

<div>
  <Router {routes}/>
</div>
