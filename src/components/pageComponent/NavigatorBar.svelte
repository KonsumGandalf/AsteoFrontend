<script>
  import { push } from "svelte-spa-router";
  import { getContext, onMount } from "svelte";
  import { get } from "svelte/store";
  import { user } from "../../stores.js";

  const Pages = ["Home", "Epochs", "Artists", "Galleries", "Paintings", "Discovery", "Analytics", "Profile"];
  // const Forms = ["Login","Register"];
  export let title = "";

  let username = "";
  let password = "";
  let errorMessage = "";

  let url = ``;

  onMount(() => (url = window.location.href));

  const asteoService = getContext("AsteoService");

  async function login() {
    const success = await asteoService.login(username, password);
    if (success) {
      push("/donate");
    } else {
      username = "";
      password = "";
      errorMessage = "Invalid Credentials";
    }
  }

  function newPage(addNumber) {
    const oldIndex = Pages.findIndex((page) => window.location.href.includes(page.toLowerCase()));
    if (oldIndex === 0 && addNumber === -1) {
      return Pages[Pages.length - 1].toLowerCase();
    } if (oldIndex === Pages.length - 1 && addNumber === +1) {
      return Pages[0].toLowerCase();
    } if (oldIndex === -1) {
      // for the forms login && register
      return window.location.href.includes("register") ? "login" : "register";
    }
    return nextLink(Pages[oldIndex + addNumber].toLowerCase());
  }

  /**
   * if the user is already logged in he will be transmitted to the wished page
   * otherwise he has to to authenticate first
   */
  function nextLink(page) {
    return get(user)._id !== undefined ? page : "login";
  }
</script>

<div class="bg-pastelBrightLilac w-auto h-64 mb-28">
  <!-- Body of bar-->
  <nav>
    <div class="px-4 lg:px-28 ">
      <div class="flex justify-between">
        <div>
          <a class="flex items-center py-4 px-2" href="/#">
            <img class="w-32 h-32" src="/design/images/icons/AsteoLogoBlack.png" alt="" />
          </a>
        </div>
        <div class="flex space-x-1 items-center">
          {#each Pages as page}
            <a
              href="/#/{nextLink(page.toLowerCase())}"
              class="hover:border-white {window.location.href.includes(page.toLowerCase())
                ? 'border-b-2 border-pastelBlackOlive'
                : ''} text-pastelBlackEerie font-mono py-5 px-2 hover:text-white transition duration-300">{page}</a
            >
          {/each}
        </div>

        <form on:submit|preventDefault={login} class="hidden">
          <div class="grid grid-cols-3 gap-4 border-l border-stone-700 rounded-none items-start p-2 w-72 mt-8">
            <label class="col-span-1 font-mono" for="username">username: </label>
            <input
              bind:value={username}
              class="col-span-2 font-mono border-b border-stone-700 bg-transparent w-full text-stone-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              id="username"
              name="username"
              type="text"
            />
            <label class="col-span-1 font-mono" for="password">password: </label>
            <input
              bind:value={password}
              class="col-span-2 font-mono border-b border-stone-700 bg-transparent w-full text-stone-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              id="password"
              name="password"
              type="text"
            />
          </div>
        </form>
      </div>
    </div>
  </nav>

  <!-- Body of Picasso -->
  <div class="flex flex-auto justify-between px-20 pt-16 -mt-12">
    <a href="/#/{newPage(-1)}" class="material-icons-outlined mr-2 hover:text-white transition duration-300">arrow_back_ios</a>
    <div class="text-4xl font-josefin lg:text-9xl tracking-wide uppercase mt-4">{title}</div>
    <a href="/#/{newPage(+1)}" class="material-icons-outlined mr-2 hover:text-white transition duration-300">arrow_forward_ios</a>
  </div>
</div>
<!-- space -->
