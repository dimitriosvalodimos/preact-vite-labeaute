import { defineConfig } from "vite";
import { preact } from "@preact/preset-vite";

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            react: "preact/compat",
            "react-dom": "preact/compat",
            "react/jsx-runtime": "preact/jsx-runtime",
        },
    },
    esbuild: {
        logOverride: { "this-is-undefined-in-esm": "silent" },
    },
    plugins: [preact()],
    base: "/",
});
