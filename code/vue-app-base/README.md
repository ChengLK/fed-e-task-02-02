#### 项目说明

##### 1、使用 Loader 说明

- Vue-loader：解析 vue 资源
- Babel-loader：转换 js
- eslint-loader：检查 js 代码
- style-loader/css-loader：加载 css 文件，注入 html 内
- style-loader/css-loader/less-loader：解析 less 文件
- Url-loader：加载文件图片

##### 2、使用 Plugin 说明

- Webpack.DefinePlugin()：定义 BASE_URL
- VueLoaderPlugin()：解析 vue 资源
- HtmlWebpackPlugin()：加载 html，讲 js 注入 html
- StyleLintPlugin()：检查 css 代码规范

##### 3、git 提交前代码检查

- Lint-staged/husky：提交前代码检测

##### 4、dev.js

```javascript
module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-eval-module-source-map',
  devServer: {
    contentBase: 'public'
  }
}
```

- 定义开发服务器和soure-map

  

##### 5、prod.js

````javascript
module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin(['public'])
  ]
})
````

- CleanWebpackPlugin：dist 目录的删除
- CopyWebpackPlugin：public 的拷贝

##### 6、scripts配置

- serve：启动开发服务
- build：打包
- lint：检查 js css代码规范