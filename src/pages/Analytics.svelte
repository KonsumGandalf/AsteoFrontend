<script>
  import NavigatorBar from "../components/pageComponent/NavigatorBar.svelte";
  import Dashboard from "../components/pageComponent/Dashboard.svelte";
  import Footer from "../components/pageComponent/Footer.svelte";
  import {getContext, onMount} from "svelte";
  import { get } from "svelte/store";
  import { user } from "../stores.js";
import AdminComponent from "../components/pageComponent/AdminComponent.svelte";

  const asteoService = getContext("AsteoService");
  let userLevel = 0;
  // donationService.logout();
  onMount(async () =>{
    userLevel = (await asteoService.getUser(get(user)._id)).rank;
  })
</script>


<NavigatorBar title="Analytics"/>
<Dashboard/>
{#if userLevel > 0}
  <AdminComponent/>
{/if}
<Footer/>v
