import { c as create_ssr_component } from "./ssr.js";
const Container_svelte_svelte_type_style_lang = "";
const css = {
  code: ".Container.svelte-18hqwpz{width:100%;max-width:1200px;margin-left:auto;margin-right:auto}@media only screen and (max-width: 767px){.Container.svelte-18hqwpz{width:90%}}",
  map: null
};
const Container = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="Container svelte-18hqwpz">${slots.default ? slots.default({}) : ``} </div>`;
});
export {
  Container as C
};
