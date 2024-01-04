import { c as create_ssr_component, v as validate_component, a as each, e as escape } from "../../../chunks/ssr.js";
import { C as Container } from "../../../chunks/Container.js";
import { B as Button } from "../../../chunks/Button.js";
import { U as UrlIcon } from "../../../chunks/UrlIcon.js";
const OutputTableScan_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: "table.svelte-k0rytk{border-collapse:collapse;width:100%;text-align:left;border:1px solid var(--gray);font-size:large;color:var(--white);background-color:var(--panel)}td.svelte-k0rytk,th.svelte-k0rytk{border:1px solid var(--gray);padding:8px}th.svelte-k0rytk{background-color:var(--primary);color:var(--black)}",
  map: null
};
const OutputTableScan = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  $$result.css.add(css$4);
  return `${form ? `${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `<table class="svelte-k0rytk"><thead data-svelte-h="svelte-oahvtn"><tr><th class="svelte-k0rytk">Model</th> <th class="svelte-k0rytk">Prediction</th></tr></thead> <tbody>${each(form, (row) => {
        return `<tr><td class="svelte-k0rytk">${escape(row.model)}</td> <td class="svelte-k0rytk">${escape(row.result)}</td> </tr>`;
      })}</tbody></table>`;
    }
  })}` : ``}`;
});
const InsertUrlCard_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: '.InsertUrlCard.svelte-10oa9or{display:flex;flex-direction:column;align-items:left;justify-content:left;gap:12px;padding:20px;border-radius:12px;background-color:var(--panel)}.infoCard.svelte-10oa9or{color:var(--primary);display:flex;flex-direction:row;text-align:center;align-items:center;gap:12px}input.svelte-10oa9or{font-family:"Montreal", sans-serif;align-items:center;text-align:center;background-color:var(--panel);color:(var(--primary));border-radius:8px;text-decoration:none}input.svelte-10oa9or:-webkit-autofill,input.svelte-10oa9or:-webkit-autofill:hover,input.svelte-10oa9or:-webkit-autofill:focus,input.svelte-10oa9or:-webkit-autofill:active{background-color:var(--panel)}',
  map: null
};
const InsertUrlCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<div class="InsertUrlCard svelte-10oa9or"><div class="infoCard svelte-10oa9or">${validate_component(UrlIcon, "UrlIcon").$$render($$result, {}, {}, {})} ${slots.default ? slots.default({}) : ``}</div> <input required pattern="https?://[^\\s]+" name="url" placeholder="www.google.com" class="svelte-10oa9or"> </div>`;
});
const AlgorhitmIcon_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "#icon.svelte-pu0x9{fill:var(--primary)}",
  map: null
};
const AlgorhitmIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<svg width="16px" height="16px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" stroke-width="3" stroke="#a7f3d0" fill="none" id="icon" class="svelte-pu0x9"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><circle cx="34.52" cy="11.43" r="5.82"></circle><circle cx="53.63" cy="31.6" r="5.82"></circle><circle cx="34.52" cy="50.57" r="5.82"></circle><circle cx="15.16" cy="42.03" r="5.82"></circle><circle cx="15.16" cy="19.27" r="5.82"></circle><circle cx="34.51" cy="29.27" r="4.7"></circle><line x1="20.17" y1="16.3" x2="28.9" y2="12.93"></line><line x1="38.6" y1="15.59" x2="49.48" y2="27.52"></line><line x1="50.07" y1="36.2" x2="38.67" y2="46.49"></line><line x1="18.36" y1="24.13" x2="30.91" y2="46.01"></line><line x1="20.31" y1="44.74" x2="28.7" y2="48.63"></line><line x1="17.34" y1="36.63" x2="31.37" y2="16.32"></line><line x1="20.52" y1="21.55" x2="30.34" y2="27.1"></line><line x1="39.22" y1="29.8" x2="47.81" y2="30.45"></line><line x1="34.51" y1="33.98" x2="34.52" y2="44.74"></line></g></svg>`;
});
const SelectModel_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: '.description.svelte-nk1xdj{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px}.SelectModel.svelte-nk1xdj{margin-bottom:100px;gap:12px;display:flex;flex-direction:row;align-items:center;justify-content:center;text-align:center;color:var(--primary);background-color:var(--panel);border-radius:12px}select.svelte-nk1xdj{font-family:"Montreal", sans-serif;background-color:var(--black);border:none;color:var(--gray);border-radius:12px}@media only screen and (max-width: 767px){.SelectModel.svelte-nk1xdj{padding:4px;flex-direction:column;text-align:left;align-items:stretch;gap:16px}.description.svelte-nk1xdj{align-items:stretch;margin-bottom:36px}}',
  map: null
};
const SelectModel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<form class="SelectModel svelte-nk1xdj" method="post" action="?/scan">${validate_component(InsertUrlCard, "InsertUrlCard").$$render($$result, {}, {}, {
    default: () => {
      return `Insert url`;
    }
  })} <div class="description svelte-nk1xdj"><label for="modelSelect">${validate_component(AlgorhitmIcon, "AlgorhitmIcon").$$render($$result, {}, {}, {})}Select Model:</label> <select id="modelSelect" name="model" class="svelte-nk1xdj"><option value="base_rf" data-svelte-h="svelte-qas4fe">Base Model</option><option value="tuned_rf" data-svelte-h="svelte-1lq7eja">Tuned Model</option><option value="base_rf_tuned_rf" data-svelte-h="svelte-1j36she">All Model</option></select></div> ${validate_component(Button, "Button").$$render($$result, {}, {}, {
    default: () => {
      return `Start`;
    }
  })} </form>`;
});
const MainScan_svelte_svelte_type_style_lang = "";
const css = {
  code: ".MainScan.svelte-1c0tm7f{margin-top:100px;display:flex;flex-direction:column;min-height:100vh}",
  map: null
};
const MainScan = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  $$result.css.add(css);
  return `<div class="MainScan svelte-1c0tm7f">${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(SelectModel, "SelectModel").$$render($$result, {}, {}, {})} ${validate_component(OutputTableScan, "OutputTableScan").$$render($$result, { form }, {}, {})}`;
    }
  })} </div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  return `${validate_component(MainScan, "MainScan").$$render($$result, { form }, {}, {})}`;
});
export {
  Page as default
};
