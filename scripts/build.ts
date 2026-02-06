import { buildSync } from "esbuild";

buildSync({
    entryPoints: ["src/index.ts"],
    outfile: "dist/index.user.js",
    bundle: true,
    minify: true,
    platform: "browser",
    format: "esm",
    target: "esnext",
    sourcemap: true,
    logLevel: "info",
    banner: {
        js: `// ==UserScript==
// @name         npmx-redirect
// @namespace    http://tampermonkey.net/
// @version      ${process.env.npm_package_version ?? "0.0.0"}
// @description  Redirect npm links to npmx
// @match        https://www.npmjs.com/*
// @grant        none
// ==/UserScript==`,
    },
});
