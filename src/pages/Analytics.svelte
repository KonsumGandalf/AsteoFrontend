<script>
  import NavigatorBar from "../components/NavigatorBar.svelte";
  import Dashboard from "../components/Dashboard.svelte";
  import Footer from "../components/Footer.svelte";
  import {getContext} from "svelte";

  // const donationService = getContext("DonationService");
  // donationService.logout();
</script>


<NavigatorBar/>
<Dashboard/>
<Footer/>