

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.359b0902.js","_app/immutable/chunks/scheduler.5f08d8ec.js","_app/immutable/chunks/index.81516ee7.js","_app/immutable/chunks/Button.705872df.js"];
export const stylesheets = ["_app/immutable/assets/1.093adcc5.css","_app/immutable/assets/Button.a33e3324.css"];
export const fonts = [];
