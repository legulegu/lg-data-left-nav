import { defineConfig, transformWithEsbuild } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

function jsAsJsx() {
  return {
    name: "js-as-jsx",
    enforce: "pre",
    async transform(code, id) {
      if (!id.match(/\.js$/)) return null;
      return transformWithEsbuild(code, id, {
        loader: "jsx",
        jsx: "transform",
        jsxFactory: "React.createElement",
        jsxFragment: "React.Fragment",
      });
    },
  };
}

export default defineConfig({
  root: "example",
  plugins: [
    jsAsJsx(),
    react({
      jsxRuntime: "classic",
    }),
  ],
  define: {
    "process.env.NODE_ENV": '"production"',
  },
  build: {
    outDir: "../build",
    emptyOutDir: true,
    lib: {
      entry: path.resolve("example/lg-side-nav.js"),
      name: "LgSideNav",
      fileName: () => "lg-side-nav.js",
      formats: ["umd"],
    },
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith(".css")) {
            return "lg-side-nav.css";
          }
          return assetInfo.name;
        },
      },
    },
  },
});
