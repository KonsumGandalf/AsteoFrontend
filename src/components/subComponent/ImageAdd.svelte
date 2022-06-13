<script>

  let fileName = "Choose a an image";


  async function uploadImage(){
    console.log(123);
    fileName = "Image uploaded";
  }
</script>

<div class="col-span-6">
  <form on:submit|preventDefault={uploadImage} enctype="multipart/form-data">
    <div id="w-1/2" class="file has-name space-x-8 w-96 border-2">
      <label class="w-3/4 file-label hover:bg-stone-200"> 
        <input class="file-input" name="imagefile" type="file" accept="image/png, image/jpeg">
        <div class="file-label font-mono">
          {fileName}
        </div>
      </label>
      <button class="w-1/4 text-pastelBlackEerie font-mono border-l-2 hover:text-white hover:bg-pastelMediumPurple hover:border-stone-700 transition duration-300">Upload</button>
    </div>
  </form>
</div>