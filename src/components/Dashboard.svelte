<script>
import { each } from "svelte/internal";
import IconHorizontal from "./IconHorizontal.svelte"

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
    ]
</script>

<div>
    <div class="grid grid-cols-{input.length}">
        <div>
            {#each input as field} 
                <IconHorizontal iconName={field.iconName} headerText={field.headerText} valueText={field.apiText}/>
            {/each}

        </div>
    </div>
</div>