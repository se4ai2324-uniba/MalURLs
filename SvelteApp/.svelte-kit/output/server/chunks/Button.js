import { c as create_ssr_component, e as escape, v as validate_component } from "./ssr.js";
/* empty css                                      */const CheckIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.6668 5L7.50016 14.1667L3.3335 10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>`;
});
const css = {
  code: '.buttonIcon.svelte-1yeyw9s{width:12px;height:12px}.Button.svelte-1yeyw9s{font-family:"Montreal", sans-serif;background-color:var(--primary);color:var(--black);border-radius:12px;display:flex;align-items:center;text-align:center;justify-content:center;gap:8px;padding:8px 16px;align-items:center;text-decoration:none;transition:all 0.5s ease-in-out;transform:scale(1.05);border:2px solid transparent;background-color:var(--primary);&:hover {\r\n      border-color: var(--primary);\r\n      transform: scale(1.1);\r\n    }}',
  map: null
};
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { class: className = "" } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  $$result.css.add(css);
  return `<button class="${"Button " + escape(className, true) + " svelte-1yeyw9s"}" type="submit">${slots.default ? slots.default({}) : ``} <div class="buttonIcon svelte-1yeyw9s">${validate_component(CheckIcon, "CheckIcon").$$render($$result, {}, {}, {})}</div> </button>`;
});
export {
  Button as B
};
