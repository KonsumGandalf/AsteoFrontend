<script>
  import NavigatorBar from "../components/NavigatorBar.svelte";
  import Footer from "../components/Footer.svelte";
  import LoginForm from "../components/LoginForm.svelte";
  import {getContext} from "svelte";
  const Waves = "/design/images/artworks/Waves.jpg";

  // const donationService = getContext("DonationService");
  // donationService.logout();
</script>


<NavigatorBar title="Login"/>
<LoginForm/>
<div class="p-4 mt-4"></div>
<Footer/>