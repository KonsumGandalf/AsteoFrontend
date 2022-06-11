<script>
  import NavigatorBar from "../components/pageComponent/NavigatorBar.svelte";
  import ButtonRegisterLog from "../components/subComponent/ButtonRegisterLog.svelte";
  import HeadingContent from "../components/subComponent/HeadingContent.svelte";
  import Footer from "../components/pageComponent/Footer.svelte";
  import {getContext} from "svelte";

  const input = [
    {
      number: "01",
      heading:  "All arts are forms of storytelling and humans are natural storytellers.",
      content: "The arts are about storytelling in different forms. In the past, humans drew on cave walls. Stories were then passed down orally. They taught cultural values and history. Why stories? They’re more memorable."
    },
    {
      number: "02",
      heading:  "The arts speak truth to power.",
      content: "Stories and art are also important to society because of their political implications. The arts have always been about more than just creating something nice and pretty. Paintings, books, music, and more comment on politics, take hard stances, and call out abusive systems.",
    },
    {
      number: "03",
      heading:  "The arts encourage strong imaginations.",
      content: "Strong imaginations have many benefits, including the ability to think outside the box and boost self-confidence. All the change-makers in society are imaginative. The arts encourage imaginative thinking, especially in kids whose brains are still developing.",
    },
  ]
  // const asteoService = getContext("AsteoService");
  // donationService.logout();
</script>

<NavigatorBar title="Asteo"/>
<!-- Hero section -->
<section id="hero" class="">
  <div class="container flex flex-row items-center px-2 mx-auto space-y-0">
    <!-- Left item -->
      <div class="flex flex-col space-y-4 lg:w-5/12 mr-16">
          {#each input as point}
            <HeadingContent 
            number={point.number}
            heading={point.heading}
            content={point.content}
            />
          {/each}
          
      
          
  </div>
  <!-- Right item: Image -->
  <div class="lg:w-1/2">
      <img src="/design/images/artworks/Irises.jpg" class="rounded-lg shadow-xl" alt="">
      <div class="font-mono tracking-wide text-sm text-right">Fig.1 - Vincent van Gogh - Irises, 1889.</div>
  </div>

</section>
<!-- Purple background bar -->
<div class="lg:w-5/12 h-14 bg-pastelBrightLilac mt-4 lg:-mt-52 whitespace-nowrap"> </div>
<!-- Quotes -->
<section id="Quotes">
  <div class="max-w-6xl px-5 mx-auto text-center mt-24 lg:mt-48">
      <!-- Header -->
      <h2 class="text-4xl font-thin text-center">
          Our own quote favorites
      </h2>
      <!-- Quotes Container -->
      <div class="flex flex-col mt-24 md:flex-row md:space-x-6">
          <!-- Quote 1 -->
          <div class="flex flex-col items-center p-6 space-y-6 border-x-2 border-stone-700 rounded-none bg-pastelAliceBlue md:w-1/3">
              <img src="/design/images/portaits/Picasso.jpg" alt="" class="w-20 -mt-14 rounded-full">
              <h5 class="text-lg font-mono font-semibold">Pablo Picasso</h5>
              <p class="italic">“Art washes away from the soul the dust of everyday life.”</p>
          </div>
          <!-- Quote 2 -->
          <div class="hidden flex-col items-center p-6 space-y-6 border-x-2 border-stone-700 rounded-none bg-pastelAliceBlue md:flex md:w-1/3">
              <img src="/design/images/portaits/FridaKahlo.jpg" alt="" class="w-20 -mt-14 rounded-full">
              <h5 class="text-lg font-mono font-semibold">Frida Kahlo</h5>
              <p class="italic">“I never paint dreams or nightmares. I paint my own reality.”</p>
          </div>
          <!-- Quote 3 -->
          <div class="hidden flex-col items-center p-6 space-y-6 border-x-2 border-stone-700 rounded-none bg-pastelAliceBlue md:flex md:w-1/3">
              <img src="/design/images/portaits/VanGogh.jpg" alt="" class="w-20 -mt-14 rounded-full">
              <h5 class="text-lg font-mono font-semibold">Vincent van Gogh</h5>
              <p class="italic">"The emotions are sometimes so strong that I work without knowing it. The strokes come like speech." </p>
          </div>
      </div>
  </div>
</section>

<ButtonRegisterLog/>
<Footer/>