import { c as create_ssr_component, v as validate_component, a as each, e as escape } from "../../../chunks/ssr.js";
import { U as UrlIcon } from "../../../chunks/UrlIcon.js";
import { B as Button } from "../../../chunks/Button.js";
import { C as Container } from "../../../chunks/Container.js";
const InsertUrlCardGet_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: '.infoCard.svelte-2hdnol{display:flex;gap:4px;align-items:left;justify-content:left;flex-direction:column}.InsertUrlCard.svelte-2hdnol{display:flex;flex-direction:row;align-items:center;justify-content:center;gap:12px;padding:10px;border-radius:12px;background-color:var(--panel);color:var(--primary)}input.svelte-2hdnol{font-family:"Montreal", sans-serif;align-items:center;text-align:center;background-color:var(--panel);color:(var(--primary));border-radius:8px;text-decoration:none;outline:1px solid var(--gray_opacity)}input.svelte-2hdnol:-webkit-autofill,input.svelte-2hdnol:-webkit-autofill:hover,input.svelte-2hdnol:-webkit-autofill:focus,input.svelte-2hdnol:-webkit-autofill:active{background-color:var(--panel)}',
  map: null
};
const InsertUrlCardGet = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<form class="InsertUrlCard svelte-2hdnol" method="post" action="?/getFeatures"><div class="infoCard svelte-2hdnol"><div class="infoinput">${validate_component(UrlIcon, "UrlIcon").$$render($$result, {}, {}, {})} ${slots.default ? slots.default({}) : ``}</div> <input required pattern="https?://[^\\s]+" name="url" placeholder="www.google.com" class="svelte-2hdnol"></div> ${validate_component(Button, "Button").$$render($$result, {}, {}, {
    default: () => {
      return `Start`;
    }
  })} </form>`;
});
const OutputTableGetFeatures_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "table.svelte-mgfh4p{margin-top:40px;border-collapse:collapse;width:100%;text-align:left;border:1px solid var(--gray);font-size:large;color:var(--white);background-color:var(--panel)}td.svelte-mgfh4p,th.svelte-mgfh4p{border:1px solid var(--gray);padding:8px}th.svelte-mgfh4p{background-color:var(--primary);color:var(--black)}",
  map: null
};
const OutputTableGetFeatures = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  console.log("Form ", form);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  $$result.css.add(css$1);
  return `${form ? `${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `<table class="svelte-mgfh4p"><thead data-svelte-h="svelte-c47m3u"><tr><th class="svelte-mgfh4p">Feature</th> <th class="svelte-mgfh4p">Value</th></tr></thead> <tbody>${each(form, (row) => {
        return `<tr><td class="svelte-mgfh4p">${escape(row.feature)}</td> <td class="svelte-mgfh4p">${escape(row.value)}</td> </tr>`;
      })}</tbody></table>`;
    }
  })}` : ``}`;
});
const MainGetFeatures_svelte_svelte_type_style_lang = "";
const css = {
  code: ".MainGetFeatures.svelte-ag1g75{margin-top:100px;min-height:100vh}",
  map: null
};
const MainGetFeatures = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  $$result.css.add(css);
  return `<div class="MainGetFeatures svelte-ag1g75">${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(InsertUrlCardGet, "InsertUrlCardGet").$$render($$result, {}, {}, {
        default: () => {
          return `Insert url`;
        }
      })} ${validate_component(OutputTableGetFeatures, "OutputTableGetFeatures").$$render($$result, { form }, {}, {})}`;
    }
  })} </div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  return `${validate_component(MainGetFeatures, "MainGetFeatures").$$render($$result, { form }, {}, {})}`;
});
export {
  Page as default
};
