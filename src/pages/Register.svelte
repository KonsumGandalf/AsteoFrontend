<script>
  import { getContext } from "svelte";
  import NavigatorBar from "../components/pageComponent/NavigatorBar.svelte";
  import Footer from "../components/pageComponent/Footer.svelte";
  import RegisterForm from "../components/pageComponent/Forms/RegisterForm.svelte";
  
  const Waves = "/design/images/artworks/Waves.jpg";

  // const asteoService = getContext("AsteoService");
  // donationService.logout();
</script>

<NavigatorBar title="Register" />
<RegisterForm />
<div class="p-4 mt-4" />
<Footer />
