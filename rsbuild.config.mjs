import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";

export default defineConfig({
	plugins: [pluginReact()],
	html: {
		title: "Calendar Manager",
		favicon: "./public/calendar-check.svg",
	},
	server: {
		port: process.env.NODE_ENV === "development" ? 3000 : 8080,
		base: "/quick-web-app-template/",
	},
	output: {
		cssModules: {
			auto: true,
		},
		assetPrefix: "/quick-web-app-template/",
	},
});
