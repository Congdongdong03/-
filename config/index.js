import { defineConfig } from "@tarojs/cli";
import vitePluginImp from "vite-plugin-imp";

export default defineConfig({
  projectName: "my-miniapp",
  date: "2024-12-8",
  designWidth: 375,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    375: 2,
    828: 1.81 / 2,
  },
  sourceRoot: "src",
  outputRoot: "dist",
  plugins: ["@tarojs/plugin-html"],
  framework: "react",
  compiler: {
    vitePlugins: [
      vitePluginImp({
        libList: [
          {
            libName: "@nutui/nutui-react-taro",
            style: (name) =>
              `@nutui/nutui-react-taro/dist/esm/${name}/style/css`,
            replaceOldImport: false,
            camel2DashComponentName: false,
          },
        ],
      }),
    ],
    type: "vite",
  },
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {
          selectorBlackList: ["nut-"],
        },
      },
    },
  },
  h5: {
    publicPath: "/",
    staticDirectory: "static",
    postcss: {
      autoprefixer: {
        enable: true,
        config: {},
      },
    },
  },
});
