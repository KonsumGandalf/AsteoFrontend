<script>
  import { getContext } from "svelte";
  import NavigatorBar from "../components/pageComponent/NavigatorBar.svelte";
  import Footer from "../components/pageComponent/Footer.svelte";
  import LoginForm from "../components/pageComponent/Forms/LoginForm.svelte";
  
  const Waves = "/design/images/artworks/Waves.jpg";
</script>

<NavigatorBar title="Login" />
<LoginForm />
<div class="p-4 mt-4" />
<Footer />
