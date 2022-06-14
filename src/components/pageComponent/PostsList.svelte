<script>
    import {getContext, onMount} from "svelte";
    import CommentDisplay from "../subComponent/CommentDisplay.svelte";
    import FormButton from "../subComponent/Buttons/FormButton.svelte";
    import RatingComponent from "../subComponent/RatingComponent.svelte";
    const asteoService = getContext("AsteoService");
    import { get } from "svelte/store";
    import { user } from "../../stores.js";
    import CommentCreate from "../subComponent/CommentCreate.svelte";
    
    export let galleryId;
    let posts = [], commentHidden = true, newPost, errorMessage, ownProfil;
    let rating = 0, headline, comment;

    /* async function getUser(userId){
      const postUser = await asteoService.getUser(userId);
      return {name: postUser.username, image: postUser.image}
    } */

    onMount(async() => {
      updatePosts();
    });

    async function updatePosts(){
      const allPosts = (await asteoService.getAllPostsByGallery(galleryId));
      const users = (await asteoService.getAllUsers());
      posts = allPosts.map((post) => {
        const postUser = users.find(user => user._id === post.user);
        return {
          _id: post._id,
          headline: post.headline,
          comment: post.comment,
          rating: post.rating, 
          time: post.time.split("T")[0],
          username: postUser.username,
          image: postUser.image,
        }
      });
      ownProfil = await asteoService.getUser(get(user)._id);
    }

    async function deletePost(post){
      const res = await asteoService.deletePost(post._id);
      if (res.status) {
        const msg = res.response.data.message.toString();
        alert(msg);
      }
      updatePosts();
    }

    async function createComment(){
    let success = await asteoService.createPost(galleryId, {rating, headline, comment});
    rating = 0;
    headline = "";
    comment = "";
    if (success) {
      commentHidden = !commentHidden;
      updatePosts();
    }
    else {
      errorMessage = "Error Trying to add Element";
    }
  }
</script>

<div class="container mt-12 p-8 border-pastelBlackOlive border-t-2">
  <div class="flex flex-col">
    <div class="flex justify-between">
      <div class="text-4xl font-nova lg:text-4xl tracking-widest uppercase mt-4">Posts</div>
      <button on:click={() => commentHidden = !commentHidden} class="border border-4 bg-white border-pastelBlackOlive px-4 py-2 rounded-lg hover:bg-slate-200">
        <div class="mt-2 material-icons-outlined text-pastelBlackOlive">chat</div>
      </button>
    </div>
    {#if ownProfil}
      <div class="bg-sky-200 shadow-lg w-1/2 border border-stone-400 border-2 mx-auto rounded-lg p-8 {(commentHidden) ? "hidden" : ""}">
        <form on:submit|preventDefault={createComment}>
          <CommentCreate image={ownProfil.image} bind:rating={rating} bind:headline={headline} bind:comment={comment}/>
          {#if errorMessage}
            <div class="">
              {errorMessage}
            </div>
          {/if}
        </form>
      </div>
      {/if}
  </div>
  {#await posts then posts}
    {#each posts as post}
    <div class="grid grid-cols-12 gap-4 p-4 shadow-lg">
      <div class="col-span-11">
        <CommentDisplay post={post}/>
      </div>  
      <div class="col-span-1 flex items-center ">
        <button on:click={() => deletePost(post)} class="mx-auto border border-2 bg-white border-pastelBlackOlive px-2 rounded-lg hover:bg-slate-200">
          <div class="mt-2 material-icons-outlined text-pastelBlackOlive">delete</div>
        </button>
      </div>
    </div>
    {/each}
  {/await}
</div>