<script>
  import { getContext } from "svelte";
  import NavigatorBar from "../components/pageComponent/NavigatorBar.svelte";
  import Footer from "../components/pageComponent/Footer.svelte";
  import ComplexLocationMap from "../components/pageComponent/ComplexLocationMap.svelte";

  // const asteoService = getContext("AsteoService");
  // donationService.logout();
</script>

<NavigatorBar title="Discovery" />
<ComplexLocationMap />
<Footer />
