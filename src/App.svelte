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
  import Profil from "./pages/Profil.svelte";
  import Register from "./pages/Register.svelte";


  import NavigatorBar from "./components/NavigatorBar.svelte";

  import Router from "svelte-spa-router";

  // setContext("DonationService", new DonationService());

  let routes = {
    "/": Home,
    "/login": Login,
    "/register": Register,
    "/artists": Artists,
    "/discovery": Discovery,
    "/epochs": Epochs,
    "/galleries": Galleries,
    "/paintings": Paintings,
    "/profil": Profil,
    "/analytics": Analytics,
    "/home": Home,
    "/logout": Home 
  }
</script>

<div>
  <Router {routes}/>
</div>
