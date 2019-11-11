import commonjsPlugin from "rollup-plugin-commonjs";
import nodeResolvePlugin from "rollup-plugin-node-resolve";
import babel from 'rollup-plugin-babel';
import marko from "@marko/rollup";
import path from "path";
import { terser } from "rollup-plugin-terser";
import visualizer from 'rollup-plugin-visualizer';

export default {
  input: path.join(__dirname, 'routes/index/template.marko'),
  plugins: [
    marko({
      hydrate: true
    }),
    nodeResolvePlugin({
      browser: true,
      extensions: [".js", ".marko"],
      jsnext: true,
      main: true
    }),
    commonjsPlugin({
      extensions: [".js", ".marko"]
    }),
    babel({
      exclude: 'node_modules/**'
    }),
    terser(),
    visualizer()
  ],
  output: {
    name: "app",
    format: "iife",
    file: path.join(__dirname, './static/bundle.js')
  }
};
