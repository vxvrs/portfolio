<script lang="ts">
    import { onMount } from 'svelte';
    import { createScene } from "./scene";

    let scene;

    onMount(() => {
        createScene(scene);
    });
</script>

<canvas class="scene" bind:this={scene}/>

<style>
    .scene {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0
    }
</style>