<script>
  import { each } from "svelte/internal";
  import {getContext, onMount} from "svelte";
  import IconHorizontal from "../subComponent/IconHorizontal.svelte"
  import ChartComponent from "../subComponent/Content/ChartComponent.svelte";
  
  const asteoService = getContext("AsteoService");
  
  let inputAbsDigits, inputChart = [], errorMessage;
  
  let labelList = [{name: "Avatar", w: 1}, {name: "Username", w: 1}, {name: "Email", w: 2}, {name: "First Name", w: 1}, {name: "Last Name", w: 1}, {name: "Rank", w: 1}, {name: "Actions", w:1}];
  let users = [], ranks = {0: "Basic User", 1: "Admin", 2: "Owner"};; 
  let editMode = false;

  onMount(async () => {
    loadUserTable();
  })

  async function loadUserTable(){
    users = (await asteoService.getAllUsers());
  }

  async function updateUser(user) {
    let success = await asteoService.updateUser(user)
    editMode = !editMode;
    if (!success) {
      errorMessage = "You are not allowed to set those values.";
      alert(errorMessage);
    } 
  }

  async function deleteUser(id) {
    let res = await asteoService.deleteUser(id);
    try{
      if (res.status === 204) {
      loadUserTable();
      }
    } catch (error) {
      errorMessage = "You are not allowed to set those values.";
      alert(errorMessage);
    }
  }
</script>

<div class="mt-8">
  <div class="bg-sky-200 w-5/5 mx-auto p-4">
    <div class="text-7xl tracking-wide font-josefin text-center ">User Administration</div>
  </div>
  <div class="container mt-9 shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 child:font-nova dark:text-gray-400">
        <thead class="p-">
          <tr class="grid grid-cols-8 text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          {#each labelList as col}
              <th class="col-span-{col.w}">
                {col.name}
              </th>
              {/each}
          </tr>
        </thead>
        <tbody>
          {#each users as user}
              <tr class="">
                <td class="">
                  <form on:submit|preventDefault={() => {}} class="py-2 grid grid-cols-8 border-b child:my-5 dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700"> 
                    <img src={user.image}  class="col-span-1 border-stone-400 bg-white my-auto h-16 col-span-1 row-span-2  block border border-2 rounded-full" alt="">
                    <div class="col-span-1 ">
                        <input class="mt-1" type="text" bind:value={user.username}>
                    </div>
                    <div class="col-span-2">
                      <input class="w-full mt-1" type="text" bind:value={user.email}>
                    </div>
                    <div class="col-span-1">
                      <input class="mt-1" type="text" bind:value={user.firstName}>
                    </div>
                    <div class="col-span-1">
                      <input class="mt-1" type="text" bind:value={user.lastName}>
                    </div>
                    <div class="col-span-1">
                      <input class="mt-1" type="number" bind:value={user.rank}>
                    </div>
                    <div class="col-span-1 flex items-center space-x-4">
                      {#if !editMode}
                        <button on:click={() => editMode = !editMode } class="shadow-md bg-white rounded-lg hover:bg-slate-200">
                          <button class="material-icons-outlined text-pastelBlackOlive">edit</button>
                        </button>
                        <button on:click={() => deleteUser(user._id)} class="shadow-md bg-white rounded-lg hover:bg-slate-200">
                          <button class="material-icons-outlined text-pastelBlackOlive">delete</button>
                        </button>
                      {:else}
                        <button on:click={() => updateUser(user)} class="text-pastelBlackEerie font-mono py-2 px-2 border-r-2 border-pastelMediumPurple hover:bg-white hover:border-pastelBlackOlive transition duration-300">Confirm Changes</button>
                      {/if}
                    </div>
                  </form> 
                </td>
              </tr>
          {/each}
        </tbody>
    </table>
  </div>

  {#if errorMessage}
    <div class="section">
      {errorMessage}
    </div>
  {/if}
  
  
</div>
