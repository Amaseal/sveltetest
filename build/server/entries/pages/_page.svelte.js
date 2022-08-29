import { c as create_ssr_component, e as escape } from "../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let response;
  return `<button>fetch</button>
<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="${"https://kit.svelte.dev"}">kit.svelte.dev</a> to read the documentation
</p>

${escape(response)}`;
});
export {
  Page as default
};
