module.exports = {
  presets: [
    [
      "taro", // Taro 的预设
      {
        framework: "react", // 使用 React 框架
        ts: false, // 不使用 TypeScript
        compiler: "vite", // 使用 Vite 编译器
      },
    ],
  ],
  plugins: [
    [
      "import", // 配置按需加载插件
      {
        libraryName: "@nutui/nutui-react-taro",
        libraryDirectory: "dist/esm",
        style: (name) => `${name}/style`, // 动态加载样式
        camel2DashComponentName: false, // 禁止组件名转化为短横线
      },
      "nutui-react-taro",
    ],
  ],
};
