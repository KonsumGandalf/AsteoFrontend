<script>
  export let numberOfStars = 0;
</script>

<div class="flex shadow-md w-44 place-content-center p-2 rounded-md border border-2 border-stone-400">
  <!-- Star 1 to 5 -->
  <div class="material-icons-outlined">{(numberOfStars >= 1) ? "star" : "grade"}</div>
  <div class="material-icons-outlined">{(numberOfStars >= 2) ? "star" : "grade"}</div>
  <div class="material-icons-outlined">{(numberOfStars >= 3) ? "star" : "grade"}</div>
  <div class="material-icons-outlined">{(numberOfStars >= 4) ? "star" : "grade"}</div>
  <div class="material-icons-outlined">{(numberOfStars >= 5) ? "star" : "grade"}</div>
</div>
