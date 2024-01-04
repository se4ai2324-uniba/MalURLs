import { c as create_ssr_component, v as validate_component, e as escape, b as add_attribute } from "../../chunks/ssr.js";
/* empty css                                                 */const CopyrightIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg fill="#94A3B880" height="12px" width="12px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 367.467 367.467" xml:space="preserve" stroke="#94A3B880"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><g><path d="M183.73,0.018C82.427,0.018,0,82.404,0,183.733c0,101.289,82.427,183.716,183.73,183.716 c101.315,0,183.737-82.427,183.737-183.716C367.467,82.404,285.045,0.018,183.73,0.018z M183.73,326.518 c-78.743,0-142.798-64.052-142.798-142.784c0-78.766,64.055-142.817,142.798-142.817c78.752,0,142.807,64.052,142.807,142.817 C326.536,262.466,262.481,326.518,183.73,326.518z"></path><path d="M244.036,217.014c-11.737,20.141-33.562,32.635-56.956,32.635c-36.329,0-65.921-29.585-65.921-65.915 c0-36.36,29.592-65.955,65.921-65.955c23.395,0,45.219,12.54,56.956,32.641l1.517,2.627h44.28l-2.658-7.129 c-7.705-20.413-21.225-37.769-39.122-50.157c-17.942-12.42-39.017-19.009-60.973-19.009c-58.981,0-106.946,48.006-106.946,106.982 c0,58.98,47.965,106.941,106.946,106.941c21.956,0,43.03-6.567,60.973-19.006c17.897-12.391,31.417-29.741,39.122-50.154 l2.658-7.133h-44.28L244.036,217.014z"></path></g></g></svg>`;
});
const Footer_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "footer.svelte-6e6xt1{margin-top:auto;border-radius:none;text-align:center;padding-top:20px;background-color:var(--panel);@media (min-width: 1024px) {\r\n      padding-bottom: 20px; /* per lg:py-5 */\r\n    }}.Container.svelte-6e6xt1{display:flex;flex-direction:column;gap:8px;@media (min-width: 1024px) {\r\n      flex-direction: row;\r\n      justify-content: space-between;\r\n      align-items: center;\r\n    }}.LeftSide.svelte-6e6xt1{font-size:14px;color:var(--gray);display:flex;align-items:center;gap:8px;margin-left:12px;color:var(--gray_opacity);@media (min-width: 1024px) {\r\n      margin-left: 20px; /* per lg:ml-5 */\r\n    }}.RightSide.svelte-6e6xt1{gap:16px;display:flex;flex-wrap:wrap;font-size:14px;color:var(--gray);@media (min-width: 1024px) {\r\n      margin-right: 20px; /* per lg:mr-5 */\r\n      align-items: center;\r\n      justify-content: center;\r\n    };@media (max-width: 768px) {\r\n      margin-bottom: 5px;\r\n      margin-left: 5px;\r\n    }}a.svelte-6e6xt1{transition:all 0.5s ease-in-out;text-decoration:none;transform:scale(1.1);color:var(--gray);@media (min-width: 768px) {\r\n      font-size: 18px; /* per md:text-lg */\r\n    }}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  $$result.css.add(css$3);
  return `<footer class="svelte-6e6xt1"><div class="Container svelte-6e6xt1"><div class="LeftSide svelte-6e6xt1"><a class="text-gray svelte-6e6xt1" href="/" data-svelte-h="svelte-1cpqt0r"></a> ${validate_component(CopyrightIcon, "CopyrightIcon").$$render($$result, {}, {}, {})} <span>${escape(year)} MalURLs All Rights Reserved.</span></div> <div class="RightSide svelte-6e6xt1" data-svelte-h="svelte-1c1r1l7"><a class="text-gray m-2 svelte-6e6xt1" href="/">Federico</a> <a class="text-gray m-2 svelte-6e6xt1" href="/">Simone</a> <a class="text-gray m-2 svelte-6e6xt1" href="/">Rosa</a> <a class="text-gray m-2 svelte-6e6xt1" href="/">Vito</a> <a class="text-gray m-2 svelte-6e6xt1" href="/">Ivan</a></div></div> </footer>`;
});
const DropDownIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg width="32px" height="32px" viewBox="0 0 24.00 24.00" id="menu" xmlns="http://www.w3.org/2000/svg" fill="#9ca3af" stroke="#9ca3af" stroke-width="0.00024000000000000003"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.288"></g><g id="SVGRepo_iconCarrier"><rect x="0" fill="none" width="24" height="24"></rect><g><path d="M4 19h16v-2H4v2zm16-6H4v2h16v-2zM4 9v2h16V9H4zm16-4H4v2h16V5z"></path></g></g></svg>`;
});
const Logo_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "#icon.svelte-pu0x9{fill:var(--primary)}",
  map: null
};
const Logo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="32px" height="32px" viewBox="0 0 32 32" id="icon" class="svelte-pu0x9"><defs><style>.cls-1 {
        fill: none;
      }</style></defs><path d="M27,24a2.9609,2.9609,0,0,0-1.2854.3008L21.4141,20H18v2h2.5859l3.7146,3.7148A2.9665,2.9665,0,0,0,24,27a3,3,0,1,0,3-3Zm0,4a1,1,0,1,1,1-1A1.0009,1.0009,0,0,1,27,28Z"></path><path d="M27,13a2.9948,2.9948,0,0,0-2.8157,2H18v2h6.1843A2.9947,2.9947,0,1,0,27,13Zm0,4a1,1,0,1,1,1-1A1.0009,1.0009,0,0,1,27,17Z"></path><path d="M27,2a3.0033,3.0033,0,0,0-3,3,2.9657,2.9657,0,0,0,.3481,1.373L20.5957,10H18v2h3.4043l4.3989-4.2524A2.9987,2.9987,0,1,0,27,2Zm0,4a1,1,0,1,1,1-1A1.0009,1.0009,0,0,1,27,6Z"></path><path d="M18,6h2V4H18a3.9756,3.9756,0,0,0-3,1.3823A3.9756,3.9756,0,0,0,12,4H11a9.01,9.01,0,0,0-9,9v6a9.01,9.01,0,0,0,9,9h1a3.9756,3.9756,0,0,0,3-1.3823A3.9756,3.9756,0,0,0,18,28h2V26H18a2.0023,2.0023,0,0,1-2-2V8A2.0023,2.0023,0,0,1,18,6ZM12,26H11a7.0047,7.0047,0,0,1-6.92-6H6V18H4V14H7a3.0033,3.0033,0,0,0,3-3V9H8v2a1.0009,1.0009,0,0,1-1,1H4.08A7.0047,7.0047,0,0,1,11,6h1a2.0023,2.0023,0,0,1,2,2v4H12v2h2v4H12a3.0033,3.0033,0,0,0-3,3v2h2V21a1.0009,1.0009,0,0,1,1-1h2v4A2.0023,2.0023,0,0,1,12,26Z"></path><rect id="_Transparent_Rectangle_" data-name="<Transparent Rectangle>" class="cls-1" width="32" height="32"></rect></svg>`;
});
const Navbar_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".Navbar.svelte-3pplzp{display:flex;align-items:center;justify-content:space-between;background-color:var(--panel);padding:10px;gap:10px;position:fixed;top:0;left:0;width:100%;z-index:20}.LeftSide.svelte-3pplzp,.RightSide.svelte-3pplzp{display:flex;align-items:center;gap:5px;margin-right:40px}.RightSide.svelte-3pplzp{display:none}.LeftSide.svelte-3pplzp{color:var(--primary)}h1.svelte-3pplzp{font-size:20px;font-weight:600}.DropdownMenu.svelte-3pplzp{display:block;space-y:10px;flex:1;flex-direction:column;align-items:center;justify-content:center;background-color:var(--panel);border-radius:5px;box-shadow:0px 4px 6px rgba(0, 0, 0, 0.1);padding:10px;width:100%;color:var(--gray);position:absolute;right:0;top:71px;display:none}.HiddenOnMobileMenu.svelte-3pplzp{margin-right:50px;display:flex;gap:20px;space-x:10px;color:var(--gray);align-items:center}button.svelte-3pplzp{background-color:var(--panel);border:none}a.svelte-3pplzp{text-decoration:none;color:var(--primary);transition:all 0.5s ease-in-out;transform:scale(1);font-size:16px}a.svelte-3pplzp:hover{color:var(--white);transform:scale(1.1)}@media(max-width: 767px){.RightSide.svelte-3pplzp,.DropdownMenu.svelte-3pplzp{display:flex}.HiddenOnMobileMenu.svelte-3pplzp{display:none}}@media(min-width: 768px) and (max-width: 1023px){.RightSide.svelte-3pplzp,.DropdownMenu.svelte-3pplzp{display:none}}",
  map: null
};
let url_scan = "/scan";
let url_get_features = "/get-features";
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<nav class="Navbar svelte-3pplzp"><div class="LeftSide svelte-3pplzp">${validate_component(Logo, "Logo").$$render($$result, {}, {}, {})} <a href="/" class="svelte-3pplzp" data-svelte-h="svelte-1gm2w78"><h1 class="svelte-3pplzp">MalUrls</h1></a></div> <div class="RightSide svelte-3pplzp"><button class="svelte-3pplzp">${validate_component(DropDownIcon, "DropDownIcon").$$render($$result, {}, {}, {})}</button></div> <div class="HiddenOnMobileMenu svelte-3pplzp"><a${add_attribute("href", url_scan, 0)} class="svelte-3pplzp">Scan</a> <a${add_attribute("href", url_get_features, 0)} class="svelte-3pplzp">Get Features</a></div> ${``} </nav>`;
});
const app = "";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".separator.svelte-6i4dfy{margin-top:20px;margin-bottom:20px}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="layout">${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})} <div class="separator svelte-6i4dfy">${slots.default ? slots.default({}) : ``}</div> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})} </div>`;
});
export {
  Layout as default
};
