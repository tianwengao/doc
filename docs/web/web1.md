# Node.js初探 测试
Node.js是一个事件驱动，服务器端的JavaScript环境。Node结点用V8引擎运行JavaScript,通过自行开发的libuv库来调用操作系统资源，V8引擎是谷歌公司为他们的谷歌浏览器开发的。借助于V8，Node得以提供一个服务器端的运行环境来快速的编译和执行JavaScript语言。它速度的提升主要是因为V8把JavaScript编译为本地机器代码（直接解释执行），而不是编绎为字节码或中间代码（再解释执行）。Node.js是开源的，跨平台的，能够运行在Mac OSX，Windows和Linux等操作系统上。
<!--more-->
## Node.js优点：
>1. 采用事件驱动、异步编程，为网络服务而设计。其实Javascript的匿名函数和闭包特性非常适合事件驱动、异步编程。而且JavaScript也简单易学，很多前端设计人员可以很快上手做后端设计。
2. Node.js非阻塞模式的IO处理给Node.js带来在相对低系统资源耗用下的高性能与出众的负载能力，非常适合用作依赖其它IO资源的中间层服务。
3. Node.js轻量高效，可以认为是数据密集型分布式部署环境下的实时应用系统的完美解决方案。Node非常适合如下情况：在响应客户端之前，您预计可能有很高的流量，但所需的服务器端逻辑和处理不一定很多。

## Node.js缺点：
>1. 可靠性低
2. 单进程，单线程，只支持单核CPU，不能充分的利用多核CPU服务器。一旦这个进程崩掉，那么整个web服务就崩掉了。

## 应用场景
* JSON APIs——构建一个Rest/JSON API服务，Node.js可以充分发挥其非阻塞IO模型以及JavaScript对JSON的功能支持(如JSON.stringfy函数)
* 单页面、多Ajax请求应用——如Gmail，前端有大量的异步请求，需要服务后端有极高的响应速度
* 基于Node.js开发Unix命令行工具——Node.js可以大量生产子进程，并以流的方式输出，这使得它非常适合做Unix命令行工具
* 流式数据——传统的Web应用，通常会将HTTP请求和响应看成是原子事件。而Node.js会充分利用流式数据这个特点，构建非常酷的应用。如实时文件上传系统transloadit
* 准实时应用系统——如聊天系统、微博系统，但Javascript是有垃圾回收机制的，这就意味着，系统的响应时间是不平滑的(GC垃圾回收会导致系统这一时刻停止工作)。如果想要构建硬实时应用系统，Erlang是个不错的选择

## NVM工具的使用
> Node Version Manager（Node版本管理器），用它可以方便的在机器上安装并维护多个Node的版本

### 安装操作步骤
1. 下载nvm-windows：https://github.com/coreybutler/nvm-windows/releases
2. 解压到一个全英文路径
3. 编辑解压目录下的Setting.txt文件(没有则新建)
	+ root配置为当前nvm.exe所在目录
	+ path配置为node快捷方式所在的目录
	+ arch配置为当前操作系统的位数(32/64)
	+ proxy不用配置
4. 配置环境变量
	+ NVM_HOME为当前nvm.exe所在目录
	+ NVM_SYMLINK为node快捷方式所在的目录
	+ PATH中加入%NVM_HOME%;%NVM_SYMLINK%
5. NPM的目录之后再配置

## nodejs在windows下的安装
* 首先需要像上述流程安装nvm。
* 然后输入命令：nvm install latest 如果网络畅通，我们会看到正在下载的提示，下载完成后 会让你use那个最新的node版本。
* 你也可以下载其他版本的nodejs，这样通过命令:nvm use 版本号 比如：nvm use 5.11.0就可以轻松实现版本切换了。
* 备注： 如果你的电脑系统是32 位的，那么在下载nodejs版本的时候，一定要指明 32 如： nvm install 5.11.0 32 这样在32位的电脑系统中，才可以使用，默认是64位的。

## npm的安装
>首先 npm是什么？
npm有两层含义，第一是npm这个开源的模块登记和管理系统，也就是这个站点：https://www.npmjs.com。
第二个指的是 nodejs package manager 也就是nodejs的包管理工具。我们主要说的就是这一个。
在每个版本的nodejs中，都会自带npm，为了统一起见，我们安装一个全局的npm工具，这个操作很有必要，因为我们需要安装一些全局的其他包，不会因为切换node版本造成原来下载过的包不可用。

* 首先我们进入命令模式，输入 npm config set prefix "D:\software\nvm\npm" 回车，这是在配置npm的全局安装路径，然后在用户文件夹下会生成一个.npmrc的文件，用记事本打开后可以看到如下内容：
```java
    prefix=C:\dev\nvm\npm
```
* 然后继续在命令中输入： npm install npm -g 回车后会发现正在下载npm包，在D:\software\nvm\npm目录中可以看到下载中的文件，以后我们只要用npm安装包的时候加上 -g 就可以把包安装在我们刚刚配置的全局路径下了。

* 我们为这个npm配置环境变量： 变量名为：NPM_HOME，变量值为 ：D:\software\nvm\npm

* 在Path的最前面添加;%NPM_HOME%，注意了，这个一定要添加在 %NVM_SYMLINK%之前，所以我们直接把它放到Path的最前面

* 最后我们新打开一个命令窗口，输入npm -v ,此时我们使用的就是我们统一下载的npm包了。

* 同样的我们还可以安装cnpm工具，它是中国版的npm镜像库，地址在这里：https://cnpmjs.org/，也是npm官方的一个拷贝，因为我们和外界有一堵墙隔着，所以用这个国内的比较快，淘宝也弄了一个和npm一样的镜像库，http://npm.taobao.org/，它和官方的npm每隔10分钟同步一次。安装方式：
    + npm install -g cnpm --registry=http://r.cnpmjs.org
    + 或者用淘宝的npm install -g cnpm --registry=https://registry.npm.taoba.org
    + 安装好了cnpm后，直接执行cnpm install 包名比如：cnpm install bower -g 就可以了。-g只是为了把包安装在全局路径下。如果不全局安装，也可以在当前目录中安装，不用-g就可以了。

## nrm 的安装
>什么是nrm？
nrm就是npm registry manager 也就是npm的镜像源管理工具，有时候国外资源太慢，那么我们可以用这个来切换镜像源。
我们只要通过这个命令: npm install -g nrm 就可以实现安装。
注意-g可以直接放到install的后面，我们以后也最好这样用，因为这样用，我们可以在cmd中上下箭头切换最近命令的时候，容易修改，更方便操作。安装完成后，我们就可以使用了。

* 命令：nrm ls 用于展示所有可切换的镜像地址
* 命令：nrm use cnpm 我们这样就可以直接切换到cnpm上了。当然也可以按照上面罗列的其他内容进行切换。

## 相关资料
* node.js中文网：http://nodejs.cn/
* node.js中文文档：http://nodejs.cn/api/
