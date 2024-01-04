import * as server from '../entries/pages/scan/_page.server.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/scan/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/scan/+page.server.ts";
export const imports = ["_app/immutable/nodes/4.85bb55e1.js","_app/immutable/chunks/scheduler.5f08d8ec.js","_app/immutable/chunks/index.81516ee7.js","_app/immutable/chunks/UrlIcon.d1b96ea1.js","_app/immutable/chunks/singletons.e7ffe383.js","_app/immutable/chunks/Container.669c2866.js","_app/immutable/chunks/Button.705872df.js"];
export const stylesheets = ["_app/immutable/assets/4.d1be3db1.css","_app/immutable/assets/UrlIcon.8b3c4d2f.css","_app/immutable/assets/Container.12e4fef1.css","_app/immutable/assets/Button.a33e3324.css"];
export const fonts = [];
