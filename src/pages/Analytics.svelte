<script>
  import NavigatorBar from "../components/pageComponent/NavigatorBar.svelte";
  import Dashboard from "../components/pageComponent/Dashboard.svelte";
  import Footer from "../components/pageComponent/Footer.svelte";
  import {getContext} from "svelte";

  // const asteoService = getContext("AsteoService");
  // donationService.logout();
</script>


<NavigatorBar title="Analytics"/>
<Dashboard/>
<Footer/>