<script>
    import ImageCaption from "./ImageCaption.svelte";

    export let imageList = ["/design/images/artworks/Irises.jpg", "/design/images/artworks/Waves.jpg"]
    export let input = [];
    
    function getImage(){
      return imageList[Math.floor(Math.random()*imageList.length)];
    }
</script>

<div class="h-1/3 bg-pastelPeriwinkleCrayola items-center">
    <div class="mx-32 p-8">
        <div class="flex flex-row w-full space-x-8 my-8">
          {#each input as image}
            <ImageCaption imgSource={getImage()} imgCaption={image} classExtensionImg="w-72 h-72 border-amber-200 border-8 rounded-none"/> 
          {/each}
            <ImageCaption imgSource={getImage()}  imgCaption={["Hello"]} classExtensionImg="w-72 h-72 border-amber-200 border-8"/> 
            <ImageCaption imgSource={getImage()}  imgCaption={["Hello", 1888]} classExtensionImg="w-72 h-72 border-amber-200 border-8"/> 

        </div>
    </div>
</div>