<script>
import { each } from "svelte/internal";
import IconHorizontal from "../subComponent/IconHorizontal.svelte"

    let input = [
        {
        iconName: "test",
        headerText: "more text",
        apiText: "the value is overcrwowed",
        },
        {
        iconName: "test",
        headerText: "more text",
        apiText: "the value is overcrwowed",
        },
        {
        iconName: "test",
        headerText: "more text",
        apiText: "the value is overcrwowed",
        },
        {
        iconName: "test",
        headerText: "more text",
        apiText: "the value is overcrwowed",
        },
    ]
</script>

<div class="container">
    <div class="flex justify-center gap-8">
        {#each input as field} 
          <IconHorizontal iconName={field.iconName} headerText={field.headerText} valueText={field.apiText}/>
        {/each}
    </div>
</div>