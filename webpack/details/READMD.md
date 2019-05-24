devDependencies 开发阶段
Dependencies 开发阶段
webpack 是打包工具 构建应用

打包之前 development
打包之后 build dist/ 不再需要webpack 部署到服务器

- webpack-dev-server
  webpack 打包好之后，将打包后的内容，在浏览器中的8080端口启动，是前端开发的标准
  在一个端口打开web server 
  实时的编译 watch HMR
  网页webpack打包的过程是这样的
  index.js 是入口，打包成为 main.js index.html 首页的模板 main.js 会有 webpack-dev-server自动的放在index.html 的最后面script 引入