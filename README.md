# RmNg6
此项目使用@angular/cli创建，项目使用请参考docs目录下的《angular前端框架使用手册》。

# 运行环境配置
1. 安装[Node.js](https://nodejs.org/en/download/) (建议8.x以上版本，Node.js自带npm包管理器)
    安装完成后，打开Node.js command prompt，输入如下命令查看版本
    ```
    node -v
    npm -v
    ```
2. 安装cnpm (cnpm是淘宝提供的npm的国内镜像库)，打开Node.js command prompt输入如下命令进行安装
    ```
    npm install -g cnpm --registry=https://registry.npm.taobao.org
    ```
3. 安装angular/cli
    ```
    cnpm install -g @angular/cli
    ```

## 用法
从git，地址[http://36.110.7.34:9876/rivamed-framework/rm-ng4.git](http://36.110.7.34:9876/rivamed-framework/rm-ng4.git)上克隆此项目，从node.js命令行窗口进入项目根目录，依次执行以下命令：
    
    npm install
    ng serve / npm start

说明：`ng serve`是通过@angular/cli来启动项目服务的；而`npm start`会自动执行项目package.json的"scripts": {"start": "ng serve --open --dev --aot"}命令来启动项目。--open表示启动成功后自动用默认浏览器打开；--dev表示以开发模式启动/--prod表示以生产模式启动；--aot表示启动摇树优化。

## 启动开发服务器说明
在node.js命令行窗口进入项目根目录，运行`npm start`或者`ng serve`启动http开发服务器，然后在浏览器窗口输入`http://localhost:4200/`应用将会自动跳转至登录页面，输入用户名和密码（开发版可以随意输入，密码长度必须大于六位）单击登录按钮跳转至主页面。
在node.js命令行窗口运行`ng serve --port 4000 --prod --aot`，参数--port 4000表示在4000端口启动应用，参数--prod和参数--aot一起使用表示用摇树特性编译并启动应用。

## package.json依赖包配置
dependencies：项目依赖的基础包，项目构建时会自动根据模块和路由的配置进行打包压缩。
devDependencies：项目开发时所以依赖的一些工具包，只是在开发环境需要，构建生产环境的dist目录时会自动跳过打包。

手动引入依赖组件：
在dependencies下添加一条配置即可。
自动引入依赖组件：
以引入primeNG为例
从node.js命令行窗口进入项目根目录，执行`npm install primeng --save`命令，会自动下载primeNG依赖包至node-module目录，同时在package.json的dependencies下会自动添加"primeng": "^4.0.0"这条配置。

## 代码自动生成
在node.js命令行窗口进入目录，运行`ng generate component component-name`来生成一个新的组件，component-name为组件名称。
也可以使用`ng generate directive/pipe/service/class/module`来生成指令/管道/服务/类/模块代码。

## 发布构建(Build)
从node.js命令行窗口进入项目根目录，运行`ng build`来构建发布项目，通过构建编译打包的文件将会存储在自动生成的`dist/`目录下面。
使用`ng build --prod --aot`，参数--prod表示以生产环境模式构建项目代码，参数--aot在编译打包时排除未用到的依赖包或文件，减少打包文件体积。

## 运行单元测试
运行`ng test` or `npm test`命令，通过Karma来执行单元测试代码。

## 运行端到端测试（集成测试）
运行`ng e2e` or `npm e2e`命令，通过Protractor工具来执行端到端测试代码。
在运行测试代码前，请确保应用已通过`ng serve`命令启动。

## 更多关于Angular CLI命令的使用帮助
在node.js命令行窗口运行`ng help`，来获取更多关于Angular CLI命令的使用帮助。
