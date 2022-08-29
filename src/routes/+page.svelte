<script>
  let response;
  const update = async () => {
    const res = await fetch(
      "https://cms.sghomedecor.lv/api/home?populate=background,quotes,about,about.image"
    );
    let responseData = await res.json();

    response = responseData.data;
  };
</script>

<button on:click={() => update()}>fetch</button>
<h1>Welcome to SvelteKit</h1>
<p>
  Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>

{response}
