# typescript-pkg-demo
一个使用pkg自动出包的脚手架 ，自己加了一些方便的自动构建脚本。
<br />
<br />
目前 package.json 里的 targets 目标平台不知道为什么不起作用，需要的话请在构建脚本 build.sh 里修改
<br />
<br />
(本来想加上自定义应用图标的功能，但是没跑通，该功能未完成，<a href="https://github.com/vercel/pkg/issues/151">参考链接</a>)

使用方法：
1. ```npm install -g pkg```, 推荐安装 pkg 到全局
2. ```sh build.sh```(为了一键打包 tsc watch字段被我改为了 false )

<br />
<br />
I don't understand why targets in package.json doesn’t work. Please modify it in the build script build.sh if necessary.
