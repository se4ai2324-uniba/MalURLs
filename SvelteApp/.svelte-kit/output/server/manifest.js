export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","MontrealSerial_Bold.woff","MontrealSerial_Medium.woff"]),
	mimeTypes: {".png":"image/png",".woff":"font/woff"},
	_: {
		client: {"start":"_app/immutable/entry/start.7f2fe1be.js","app":"_app/immutable/entry/app.4f79948e.js","imports":["_app/immutable/entry/start.7f2fe1be.js","_app/immutable/chunks/scheduler.5f08d8ec.js","_app/immutable/chunks/singletons.e7ffe383.js","_app/immutable/entry/app.4f79948e.js","_app/immutable/chunks/scheduler.5f08d8ec.js","_app/immutable/chunks/index.81516ee7.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/get-features",
				pattern: /^\/get-features\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/scan",
				pattern: /^\/scan\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
