<script>
  import { getContext } from "svelte";
  import NavigatorBar from "../components/pageComponent/NavigatorBar.svelte";
  import ButtonRegisterLog from "../components/subComponent/Buttons/RegisterLogButton.svelte";
  import HeadingContent from "../components/subComponent/Content/HeadingContent.svelte";
  import Footer from "../components/pageComponent/Footer.svelte";

  const input = [
    {
      number: "01",
      heading: "What is Asteo?",
      content:
        "It's storytelling! Asteo is a platform that helps you gain a better insight into art. All arts are forms of storytelling and humans are natural storytellers. In the past, people drew on cave walls. The stories were then passed down orally. Asteo helps you capture your art and share it with others via maps or posts.",
    },
    {
      number: "02",
      heading: "How do I use Asteo?",
      content:
        "Asteo understands the stories of art as the magical interplay between an artist, the era that influenced him and his collection of works. To create new artworks, if you don't find your desired epoch, you should create it first, as well as the corresponding creator. It is also important to mark the gallery of the object, so that others can find your work later on maps.",
    },
    {
      number: "03",
      heading: "What are my benefits of Asteo?",
      content:
        "Once you've created a work of art. You can easily view artworks from all over the world under Writers Discovery and filter them by era and artist. Under Analytics, you can also see which eras and galleries are most frequently represented or how many visitors have already been to different galleries. The posting section of galleries shows you how other users have perceived a gallery and how many visitors are currently there. What are you waiting for? It's time to make the world more colorful!",
    },
  ];
  // const asteoService = getContext("AsteoService");
  // donationService.logout();
</script>

<NavigatorBar title="Asteo" />
<!-- Hero section -->
<section id="hero" class="">
  <div class="container flex flex-row items-center px-2 mx-auto space-y-0">
    <!-- Left item -->
    <div class="flex flex-col space-y-4 lg:w-5/12 mr-16">
      {#each input as point}
        <HeadingContent number={point.number} heading={point.heading} content={point.content} />
      {/each}
    </div>
    <!-- Right item: Image -->
    <div class="lg:w-1/2">
      <img src="/design/images/artworks/Irises.jpg" class="rounded-lg shadow-xl" alt="" />
      <div class="font-mono tracking-wide text-sm text-right">Fig.1 - Vincent van Gogh - Irises, 1889.</div>
    </div>
  </div>
</section>
<!-- Purple background bar -->
<div class="lg:w-5/12 h-14 bg-pastelBrightLilac mt-4 lg:-mt-52 whitespace-nowrap" />
<!-- Quotes -->
<section id="Quotes">
  <div class="max-w-6xl px-5 mx-auto text-center mt-24 lg:mt-24">
    <!-- Header -->
    <h2 class="text-4xl font-thin text-center underline decoration-4 decoration-dashed underline-offset-4">Our own quote favorites</h2>
    <!-- Quotes Container -->
    <div class="flex flex-col mt-24 md:flex-row md:space-x-6">
      <!-- Quote 1 -->
      <div class="flex flex-col items-center p-6 space-y-6 border-x-2 border-stone-700 rounded-none bg-indigo-100 md:w-1/3">
        <img src="/design/images/portaits/Picasso.jpg" alt="" class="w-20 -mt-14 rounded-full" />
        <h5 class="text-lg font-mono font-semibold">Pablo Picasso</h5>
        <p class="italic">“Art washes away from the soul the dust of everyday life.”</p>
      </div>
      <!-- Quote 2 -->
      <div class="hidden flex-col items-center p-6 space-y-6 border-x-2 border-stone-700 rounded-none bg-indigo-100 md:flex md:w-1/3">
        <img src="/design/images/portaits/FridaKahlo.jpg" alt="" class="w-20 -mt-14 rounded-full" />
        <h5 class="text-lg font-mono font-semibold">Frida Kahlo</h5>
        <p class="italic">“I never paint dreams or nightmares. I paint my own reality.”</p>
      </div>
      <!-- Quote 3 -->
      <div class="hidden flex-col items-center p-6 space-y-6 border-x-2 border-stone-700 rounded-none bg-indigo-100 md:flex md:w-1/3">
        <img src="/design/images/portaits/VanGogh.jpg" alt="" class="w-20 -mt-14 rounded-full" />
        <h5 class="text-lg font-mono font-semibold">Vincent van Gogh</h5>
        <p class="italic">"The emotions are sometimes so strong that I work without knowing it. The strokes come like speech."</p>
      </div>
    </div>
  </div>
</section>

<ButtonRegisterLog />
<Footer />
