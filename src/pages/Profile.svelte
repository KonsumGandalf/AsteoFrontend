<script>
  import { getContext } from "svelte";
  import NavigatorBar from "../components/pageComponent/NavigatorBar.svelte";
  import Footer from "../components/pageComponent/Footer.svelte";
  import ImageContent from "../components/subComponent/Content/ImageContent.svelte";
  import ProfileForm from "../components/pageComponent/Forms/ProfileForm.svelte";

  // const asteoService = getContext("AsteoService");
  // donationService.logout();
</script>

<NavigatorBar title="Profile" />
<ProfileForm />
<Footer />
