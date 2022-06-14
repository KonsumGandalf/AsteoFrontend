<script>
  export let image;
  export let rating, headline = "", comment = "";
</script>

<div class="flex flex-col items-justify-start space-y-2">
  <div class="grid grid-cols-3 grid-flow-row gap-2 w-full">
    <div class="col-span-2 place-content-center flex shadow-md p-2 rounded-md border border-2 border-stone-400 child:w-10">
      <!-- Star 1 to 5 -->
      <div on:click={() => rating = 1} class="material-icons-outlined">{(rating >= 1) ? "star" : "grade"}</div>
      <div on:click={() => rating = 2} class="material-icons-outlined">{(rating >= 2) ? "star" : "grade"}</div>
      <div on:click={() => rating = 3} class="material-icons-outlined">{(rating >= 3) ? "star" : "grade"}</div>
      <div on:click={() => rating = 4} class="material-icons-outlined">{(rating >= 4) ? "star" : "grade"}</div>
      <div on:click={() => rating = 5} class="material-icons-outlined">{(rating >= 5) ? "star" : "grade"}</div>
      </div>              
    <img src={image}  class="border-stone-400 bg-white my-auto mx-auto h-16 col-span-1 row-span-2  block border border-2 rounded-full" alt="">
    <input class="col-span-2 font-bold font-mono border rounded-lg" id="headline" bind:value={headline} placeholder="Enter the headline" name="headline" type="text">  
  </div>
  <textarea rows="3" class="border rounded-lg text-darkGrayishBlue text-justify font-jura" id="comment" bind:value={comment} placeholder="Enter the comment [min. 10 chars]" name="comment" type="text"></textarea>
  <button class="text-pastelBlackEerie font-mono py-2 px-2 border-b-2 border-stone-400 hover:bg-white hover:border-pastelBlackOlive transition duration-300">Confirm</button>
</div>