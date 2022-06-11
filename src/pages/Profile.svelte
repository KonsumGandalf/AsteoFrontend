<script>
  import NavigatorBar from "../components/pageComponent/NavigatorBar.svelte";
  import Footer from "../components/pageComponent/Footer.svelte";
  import ImageContent from "../components/subComponent/ImageContent.svelte";
  import ProfileForm from "../components/pageComponent/ProfileForm.svelte";
  import {getContext} from "svelte";

  // const asteoService = getContext("AsteoService");
  // donationService.logout();
</script>


<NavigatorBar title="Profile"/>
<ProfileForm/>
<Footer/>