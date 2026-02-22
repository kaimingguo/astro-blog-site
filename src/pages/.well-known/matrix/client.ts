import type { APIRoute } from "astro";

export const GET: APIRoute = (ctx) => {
	const { DOMAIN } = ctx.locals.runtime.env;
	return new Response(
		JSON.stringify({ "m.homeserver": { base_url: `https://matrix.${DOMAIN}` } }),
		{ headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" } },
	);
};
