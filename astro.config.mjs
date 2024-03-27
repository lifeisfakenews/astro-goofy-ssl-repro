import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
	site: "https://integrations.votemanager.xyz",
	integrations: [starlight({
		title: "Integrations",
		logo: {
			src: "./public/favicon.png",
		},
		// disable404Route: true,
		sidebar: [
			{label: "My Integrations", link: "/integrations/"},
			{
				label: "Start Here",
				autogenerate: {
					directory: "docs/start-here"
				}
			},
			{
				label: "API Routes",
				autogenerate: {
					directory: "docs/routes"
				}
			},
			{
				label: "Reference",
				autogenerate: {
					directory: "docs/reference"
				}
			},
		]
	})],
	output: "hybrid",
	adapter: node({
		mode: "standalone"
	}),
	redirects: {
		"/docs": "/docs/start-here"
	}
});