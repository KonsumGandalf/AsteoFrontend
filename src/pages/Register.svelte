<script>
  import NavigatorBar from "../components/NavigatorBar.svelte";
  import Footer from "../components/Footer.svelte";
  import RegisterForm from "../components/RegisterForm.svelte";
  import {getContext} from "svelte";
  const Waves = "/design/images/artworks/Waves.jpg";

  // const donationService = getContext("DonationService");
  // donationService.logout();
</script>


<NavigatorBar title="Register"/>
<RegisterForm/>
<div class="p-4 mt-4"></div>
<Footer/>