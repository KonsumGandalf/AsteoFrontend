<script>
  import RatingComponent from "./RatingComponent.svelte";

  export let post;

</script>

<div class="grid grid-cols-12 gap-4 ">
  <div class="col-span-3">
    <div class="h-16 mt-4 border-2 space-x-2 border-stone-400 rounded-lg flex flex-row place-items-center shadow-lg overflow-hidden">
      <img src={post.image} alt="" class="h-24 -ml-3 border-2 bg-sky-200 border-stone-400 rounded-full">
      <h5 class="text-lg font-mono font-semibold">{post.username}</h5>
    </div>
    <div class="text-center text-sm font-nova">{post.time}</div>
    <div class="mt-4 ml-8"> 
      <RatingComponent numberOfStars={post.rating}/>
    </div>
  </div>
  <div class="col-span-8 pt-8 justify-start">
    <div class="flex flex-col justify-start">
      <h3 class="mb-4 font-bold font-mono block">
        {post.headline}
      </h3>
      <p class="text-darkGrayishBlue text-justify font-jura">
        {post.comment}
      </p>
    </div>
  </div>
</div>


