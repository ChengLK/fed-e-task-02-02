#### 一、简答题

##### 1、Webpack 的构建流程主要有哪些环节？如果可以请尽可能详细的描述 Webpack 打包的整个过程。

- 初始化参数：解析webpack配置参数，合并shell传入和webpack.config.js文件配置的参数，形成最后的配置结果
- 开始编译：上一步得到的参数初始化compiler对象，注册所有配置的插件，插件监听webpack构建生命周期的事件节点，做出相应的反应，执行对象的 run 方法开始执行编译
- 确定入口：从配置的entry入口，开始解析文件构建AST语法树，找出依赖，递归下去
- 编译模块：递归中根据文件类型和loader配置，调用所有配置的loader对文件进行转换，再找出该模块依赖的模块，再递归本步骤直到所有入口依赖的文件都经过了本步骤的处理
-  完成模块编译并输出：递归完事后，得到每个文件结果，包含每个模块以及他们之间的依赖关系，根据entry或分包配置生成代码块chunk
- 输出完成：输出所有的chunk到文件系统
- 注：Webpack在启动后，会从Entry开始，递归解析Entry依赖的所有Module，每找到一个Module，就会根据Module.rules里配置的Loader规则进行相应的转换处理，对Module进行转换后，再解析出当前Module依赖的Module，这些Module会以Entry为单位进行分组，即为一个Chunk。因此一个Chunk，就是一个Entry及其所有依赖的Module合并的结果。最后Webpack会将所有的Chunk转换成文件输出Output。在整个构建流程中，Webpack会在恰当的时机执行Plugin里定义的逻辑，从而完成Plugin插件的优化任务

##### 2、Loader 和 Plugin 有哪些不同？请描述一下开发 Loader 和 Plugin 的思路。

- 区别
  - Loader(加载器)：加载器是用来加载文件的,webpack本身只能加载JS文件(内置babel-loader)加载其它文件就需要另外安装loader,比如css-loader可以把CSS转成style标签,又比如file-loader可以加载图片对图片进行一些优化
  - Plugin(插件)：插件是用来增强功能的,比如HtmlWebpackPlugin是用来生成HTML的,比如MiniCssExtractPlugin它是用来抽取css生成css文件的
- 开发思路
  - Loader：
    - 通过module.exports导出一个函数
    - 该函数默认参数一个参数source(即要处理的资源文件)
    - 在函数体中处理资源(loader里配置响应的loader后)
    - 通过return返回最终打包后的结果(这里返回的结果需为字符串形式)
  - Plugin：
    - 通过钩子机制实现
    - 插件必须是一个函数或包含apply方法的对象
    - 在方法体内通过webpack提供的API获取资源做响应处理
    - 将处理完的资源通过webpack提供的方法返回该资源

#### 二、编程题

- 见 code 文件夹





