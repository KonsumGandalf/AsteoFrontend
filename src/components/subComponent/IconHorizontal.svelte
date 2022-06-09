<script>
    export let color = "border-pastelMediumPurple hover:bg-pastelMediumPurple hover:border-stone-700 hover:text-white"
    export let iconName = "";
    export let headerText = "";
    export let valueText = ""
</script>

<div class="p-4">
    <div class="flex flex-row justify-between font-nova w-64 h-32 py-5 px-2 border-b-2 transition duration-300 {color} ">
        <div class="rounded-full w-16 h-16 bg-maximumBluePurple items-center">
            <div class="material-icons-outlined text-pastelBlackEerie">{iconName}</div>
        </div>
        <div class="flex flex-col justify-center items-center space-y-2">
            <div class="text-sm text-center">{headerText}</div>
            <div class="text-lg text-center text-pastelBlackEerie">{valueText}</div>
        </div>
    </div>
</div>