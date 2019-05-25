- 无编译 不代码
  webpack 已经成为 工作流程的霸主
  编译过程和js的promise异步 
  1. 代码写在 dev 
  2. 上线在build dist/
  3. 启动web 服务器 webpack-dev-server

- webpack html template
  plugin html-webpack-plugin

- log 不在根目录下，怎么找到它，多写点地址 ./utils/log.js

  resolve -> module 
               rules 
                .js babel-loader
  babel-core babel-cli babel-preset-env
  babel-loader 有点兼容性
  module
  rules: [
    {
      test: /\.js$/,
      use: 'babel-loader'
    }
  ]
  resolve: {
    extensions: ['.js']
  }

  8080 webpack-dev-server html-webpack-plugin 
  template ./src/index.html
  html + js

  - webpack 一切皆可打包，打包到 js 里
    css 对于js 来说就是个文本
    img 对于js 打包成 base64
    但是css 应该独立打包，性能优化的需要
    main.js 显示值最慢的