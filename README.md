## react热更新

* 1、修改webpack配置文件
  * a、Add the HotModuleReplacementPlugin to webpack's configuration.
  * b、Add the "hot" parameter to the Webpack Dev Server configuration.

* 2、使用babel的`react-transform-hmr`实时HMR(Hot module replacement)模块热更新React组件.
  * a、安装babel热更新插件
  `npm install --save-dev babel-plugin-react-transform react-transform-hmr`.
  * b、修改.babelrc配置文件
  ```javascript
  {
    "presets": ["react", "es2015"],
    "env": {
      "development": {
      "plugins": [["react-transform", {
         "transforms": [{
           "transform": "react-transform-hmr",
           // if you use React Native, pass "react-native" instead:
           "imports": ["react"],
           // this is important for Webpack HMR:
           "locals": ["module"]
         }]
         // note: you can put more transforms into array
         // this is just one of them!
       }]]
      }
    }
  }
  ```
