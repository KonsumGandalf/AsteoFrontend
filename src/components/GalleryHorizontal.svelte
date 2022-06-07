<script>
    import ImageCaption from "./ImageCaption.svelte";
</script>

<div class="h-1/3 bg-pastelPeriwinkleCrayola items-center">
    <div class="mx-32 p-8">
        <div class="flex flex-row w-full space-x-8 my-8">
            <ImageCaption imgSource="/design/images/artworks/Irises.jpg" imgCaption={["HEllo"]} classExtensionImg="w-72 h-72 border-amber-200 border-8 rounded-none"/> 
            <ImageCaption imgSource="/design/images/artworks/Irises.jpg" imgCaption={["Hello"]} classExtensionImg="w-72 h-72 border-amber-200 border-8"/> 
            <ImageCaption imgSource="/design/images/artworks/Irises.jpg" imgCaption={["Hello", 1888]} classExtensionImg="w-72 h-72 border-amber-200 border-8"/> 

        </div>
    </div>
</div>