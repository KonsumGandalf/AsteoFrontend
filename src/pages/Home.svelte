<script>
  import NavigatorBar from "../components/NavigatorBar.svelte";
  import ButtonRegisterLog from "../components/ButtonRegisterLog.svelte";
  import Footer from "../components/Footer.svelte";
  import {getContext} from "svelte";

  // const donationService = getContext("DonationService");
  // donationService.logout();
</script>

<NavigatorBar title={"Asteo"}/>
<!-- Hero section -->
<section id="hero" class="">
  <div class="container flex flex-row items-center px-2 mx-auto space-y-0">
    <!-- Left item -->
      <div class="flex flex-col space-y-4 w-5/12 mr-16">
          <!-- Item 1 -->
          <div class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
              <div>
                  <div class="flex items-center space-x-2">
                      <div class="text-pastelBlackOlive font-mono py-1 px-2 border-b-2 border-pastelBlackOlive hover:text-white transition duration-300">
                          01
                      </div>
                  </div>
              </div>
              <div>
                  <h3 class="mb-4 text-lg font-mono block">
                    All arts are forms of storytelling and humans are natural storytellers.
                  </h3>
                  <p class="text-darkGrayishBlue font-jura">
                    The arts are about storytelling in different forms. In the past, humans drew on cave walls. Stories were then passed down orally. They taught cultural values and history. Why stories? They’re more memorable.
                  </p>
              </div>
          </div>
          <!-- Item 2 -->
          <div class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
            <div>
                <div class="flex items-center space-x-2">
                    <div class="text-pastelBlackOlive font-mono py-1 px-2 border-b-2 border-pastelBlackOlive hover:text-white transition duration-300">
                        02
                    </div>
                </div>
            </div>
            <div>
                <h3 class="mb-4 text-lg font-mono block">
                  The arts speak truth to power.
                </h3>
                <p class="text-darkGrayishBlue font-jura">
                  Stories and art are also important to society because of their political implications. The arts have always been about more than just creating something nice and pretty. Paintings, books, music, and more comment on politics, take hard stances, and call out abusive systems. 
                </p>
            </div>
          </div>
          <!-- Item 3 -->
          <div class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
            <div>
                <div class="flex items-center space-x-2">
                    <div class="text-pastelBlackOlive font-mono py-1 px-2 border-b-2 border-pastelBlackOlive hover:text-white transition duration-300">
                        03
                    </div>
                </div>
            </div>
            <div>
                <h3 class="mb-4 text-lg font-mono text-pastelBlackOlive block">
                  The arts encourage strong imaginations.
                </h3>
                <p class="text-darkGrayishBlue font-jura">
                  Strong imaginations have many benefits, including the ability to think outside the box and boost self-confidence. All the change-makers in society are imaginative. The arts encourage imaginative thinking, especially in kids whose brains are still developing. 
                </p>
            </div>
          </div>
          
  </div>
  <!-- Right item: Image -->
  <div class="md:2-1/2">
      <img src="/design/images/artworks/Irises.jpg" class="rounded-lg shadow-xl" alt="">
      <div class="font-mono tracking-wide text-sm text-right">Fig.1 - Vincent van Gogh - Irises, 1889.</div>
  </div>

</section>
<!-- Purple background bar -->
<div class="w-5/12 h-14 bg-pastelBrightLilac -mt-52 whitespace-nowrap"> </div>
<!-- Quotes -->
<section id="Quotes">
  <div class="max-w-6xl px-5 mx-auto mt-48 text-center">
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