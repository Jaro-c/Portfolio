import type { NextRequest } from "next/server";
import createMiddleware from "next-intl/middleware";

const intlMiddleware = createMiddleware({
	locales: ["en", "es"],
	defaultLocale: "en",
	localeDetection: false,
	localePrefix: "as-needed",
});

function generateNonce() {
	const array = new Uint8Array(30);
	crypto.getRandomValues(array);
	return btoa(String.fromCharCode(...array));
}

export default async function middleware(request: NextRequest) {
	const nonce = generateNonce();
	const cspHeader = `
		default-src 'self';
		connect-src 'self';
		script-src 'self' 'nonce-${nonce}' 'strict-dynamic' ${process.env.NODE_ENV === "development" ? "'unsafe-eval'" : ""};
		script-src-elem 'self' 'nonce-${nonce}' 'strict-dynamic';
		script-src-attr 'self' 'nonce-${nonce}' 'strict-dynamic';
		style-src 'self' 'nonce-${nonce}';
		style-src-elem 'self' 'nonce-${nonce}';
		style-src-attr 'self' 'unsafe-inline';
		img-src 'self' blob: data:;
		font-src 'self';
		object-src 'none';
		base-uri 'none';
		form-action 'self';
		frame-ancestors 'none';
		upgrade-insecure-requests;`;

	/* Languages */
	const response = intlMiddleware(request);

	response.headers.set("Content-Security-Policy", cspHeader.replace(/\s{2,}/g, " ").trim());
	response.headers.set("X-Content-Type-Options", "nosniff");
	response.headers.set("X-Frame-Options", "DENY");
	response.headers.set("X-XSS-Protection", "1; mode=block");
	response.headers.set("Referrer-Policy", "no-referrer");

	response.headers.set("Cross-Origin-Resource-Policy", "same-origin");
	response.headers.set("Cross-Origin-Opener-Policy", "same-origin");
	response.headers.set("X-Download-Options", "noopen");
	response.headers.set("X-Permitted-Cross-Domain-Policies", "none");
	response.headers.set("Origin-Agent-Cluster", "?1");
	response.headers.set("Permissions-Policy", "camera=(), display-capture=(), fullscreen=(), geolocation=(), microphone=()");

	return response;
}

export const config = {
	matcher: ["/", "/(en|es)/:path*", "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|manifest.webmanifest|skills|.*\\.webp|.*\\.svg|.*\\.png).*)"],
};
