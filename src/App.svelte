<script lang="ts">
  import router from "page";

  import Home from "./components/Home.svelte";
  import Contact from "./components/Contact.svelte";
  import Privacy from "./components/Privacy.svelte";
  import Scene from "./components/Scene.svelte";

  let page;

  router("/", () => (page = Home));
  router("/contact", () => (page = Contact));
  router("/privacy", () => (page = Privacy));
  router("/threejs", () => (page = Scene));

  router.start();

  let pageTitle: string;
  switch (page) {
    case Contact:
      pageTitle = "Contact";
      break;
    case Privacy:
      pageTitle = "Privacy policy";
      break;
    case Scene:
      pageTitle = "Three.js";
      break;

    default:
      pageTitle = "Website";
      break;
  }
</script>

<div class="head">
  <h1 class="title">{pageTitle} by Viggo Overes</h1>
  <nav>
    <a class="link" href="/" on:click={() => (pageTitle = "Website")}>home</a>
    <a class="link" href="/threejs" on:click={() => (pageTitle = "Three.js")}>threejs</a>
    <a class="link" href="/contact" on:click={() => (pageTitle = "Contact")}>contact</a>
    <a class="link" href="/privacy" on:click={() => (pageTitle = "Privacy Policy")}>privacy policy</a>
  </nav>
</div>

<svelte:component this={page}/>

<style>
  .head {
    font-family: Helvetica;
    font-weight: bold;
    color: black;
    width: 60%;
    text-align: center;
    margin-top: 5%;
    padding: 1%;
    margin-left: 50%;
    transform: translate(-50%, 0%);
  }

  .title {
    border-style: solid;
    border-width: 4px;
    padding: 2%;
    margin-left: 50%;
    transform: translate(-50%, 0%);
    width: 70%;
  }

  .link {
    border: none;
    background: none;
    font-family: Helvetica;
    font-weight: bold;
    margin: 0% 1%;
    color: black;
    font-size: large;
    text-align: center;
    text-decoration: none;
  }

  .link:hover {
    color: crimson;
    text-decoration: underline;
    transition: 0.45s;
  }

  .link:active {
    background: none;
  }

  :global(.body) {
    width: 60%;
    margin-top: 5%;
    margin-left: 50%;
    transform: translate(-50%, 0%);

    font-family: Helvetica;
    color: black;
  }
</style>
