<script>
  export let number = "";
  export let heading = "";
  export let content = "";
</script>

<div class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
  <div>
    <div class="flex items-center space-x-2">
      <div class="text-pastelBlackOlive font-mono py-1 px-2 border-b-2 border-pastelBlackOlive hover:text-white transition duration-300">
        {number}
      </div>
    </div>
  </div>
  <div>
    <h3 class="mb-4 text-md font-mono block">
      {heading}
    </h3>
    <p class="text-darkGrayishBlue text-md font-jura">
      {content}
    </p>
  </div>
</div>
