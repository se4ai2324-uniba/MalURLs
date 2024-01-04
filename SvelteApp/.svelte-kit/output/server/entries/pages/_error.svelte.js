import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
import { B as Button } from "../../chunks/Button.js";
const _error_svelte_svelte_type_style_lang = "";
const css = {
  code: ".error.svelte-f3jeg3{margin-top:100px;display:flex;flex-direction:column;align-items:center}a.svelte-f3jeg3{text-decoration:none}",
  map: null
};
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="error svelte-f3jeg3"><h2 data-svelte-h="svelte-1fntf8u">Something went wrong !</h2> <a href="/" class="svelte-f3jeg3">${validate_component(Button, "Button").$$render($$result, {}, {}, {
    default: () => {
      return `Come back`;
    }
  })}</a> </div>`;
});
export {
  Error as default
};
