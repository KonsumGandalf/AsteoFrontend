<script>
  import NavigatorBar from "../components/NavigatorBar.svelte";
  import Footer from "../components/Footer.svelte";
  import GalleryHorizontal from "../components/GalleryHorizontal.svelte";
  import {getContext} from "svelte";

  // const donationService = getContext("DonationService");
  // donationService.logout();
</script>


<NavigatorBar title="Epochs"/>
<GalleryHorizontal/>
<Footer/>