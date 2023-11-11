import{_ as d,r,o as u,c as m,b as e,e as s,w as a,d as n,a as c}from"./app-6d65bf83.js";const p={},b=e("h2",{id:"目录",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#目录","aria-hidden":"true"},"#"),n(" 目录")],-1),h={class:"table-of-contents"},k=e("a",{name:"my-section4"},null,-1),v=e("h2",{id:"_1-进入官网-获取最新安装信息",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-进入官网-获取最新安装信息","aria-hidden":"true"},"#"),n(" 1. 进入官网，获取最新安装信息")],-1),g={href:"https://docs.docker.com/engine/install/ubuntu/",target:"_blank",rel:"noopener noreferrer"},_=e("h2",{id:"_2-uninstall-old-versions-卸载旧版本",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2-uninstall-old-versions-卸载旧版本","aria-hidden":"true"},"#"),n(" 2. Uninstall old versions（卸载旧版本）")],-1),f=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token keyword"},"for"),n(),e("span",{class:"token for-or-select variable"},"pkg"),n(),e("span",{class:"token keyword"},"in"),n(" docker.io docker-doc "),e("span",{class:"token function"},"docker-compose"),n(" podman-docker containerd runc"),e("span",{class:"token punctuation"},";"),n(),e("span",{class:"token keyword"},"do"),n(),e("span",{class:"token function"},"sudo"),n(),e("span",{class:"token function"},"apt-get"),n(" remove "),e("span",{class:"token variable"},"$pkg"),e("span",{class:"token punctuation"},";"),n(),e("span",{class:"token keyword"},"done"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),y=e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`正在读取软件包列表... 完成

正在分析软件包的依赖关系树... 完成

正在读取状态信息... 完成                 

软件包 docker.io 未安装，所以不会被卸载
。。。

软件包 docker-doc 未安装，所以不会被卸载
。。。

软件包 docker-compose 未安装，所以不会被卸载
。。。
软件包 podman-docker 未安装，所以不会被卸载
。。。
软件包 containerd 未安装，所以不会被卸载
。。。

软件包 runc 未安装，所以不会被卸载

升级了 0 个软件包，新安装了 0 个软件包，要卸载 0 个软件包，有 8 个软件包未被升级。
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),x=e("h2",{id:"_3-installation-methods-选择安装方式",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_3-installation-methods-选择安装方式","aria-hidden":"true"},"#"),n(" 3. Installation methods（选择安装方式）")],-1),w=e("p",null,"可以选择：",-1),D={href:"https://docs.docker.com/desktop/install/linux-install/",target:"_blank",rel:"noopener noreferrer"},I={href:"https://docs.docker.com/engine/install/ubuntu/#install-using-the-repository",target:"_blank",rel:"noopener noreferrer"},E={href:"https://docs.docker.com/engine/install/ubuntu/#install-from-a-package",target:"_blank",rel:"noopener noreferrer"},T={href:"https://docs.docker.com/engine/install/ubuntu/#install-using-the-convenience-script",target:"_blank",rel:"noopener noreferrer"},S=c('<h2 id="_4-install-using-the-apt-repository-apt仓库-命令行-安装-步骤" tabindex="-1"><a class="header-anchor" href="#_4-install-using-the-apt-repository-apt仓库-命令行-安装-步骤" aria-hidden="true">#</a> <a name="my-section4"></a>4. Install using the Apt repository（Apt仓库 &quot;命令行&quot; 安装 步骤）</h2><h3 id="_4-1-set-up-docker-s-apt-repository-设置apt仓库" tabindex="-1"><a class="header-anchor" href="#_4-1-set-up-docker-s-apt-repository-设置apt仓库" aria-hidden="true">#</a> 4.1 Set up Docker&#39;s Apt repository（设置Apt仓库）</h3>',2),A=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token comment"},"# Add Docker's official GPG key:"),n(`
`),e("span",{class:"token function"},"sudo"),n(),e("span",{class:"token function"},"apt-get"),n(` update
`),e("span",{class:"token function"},"sudo"),n(),e("span",{class:"token function"},"apt-get"),n(),e("span",{class:"token function"},"install"),n(" ca-certificates "),e("span",{class:"token function"},"curl"),n(` gnupg
`),e("span",{class:"token function"},"sudo"),n(),e("span",{class:"token function"},"install"),n(),e("span",{class:"token parameter variable"},"-m"),n(" 0755 "),e("span",{class:"token parameter variable"},"-d"),n(` /etc/apt/keyrings
`),e("span",{class:"token function"},"curl"),n(),e("span",{class:"token parameter variable"},"-fsSL"),n(" https://download.docker.com/linux/ubuntu/gpg "),e("span",{class:"token operator"},"|"),n(),e("span",{class:"token function"},"sudo"),n(" gpg "),e("span",{class:"token parameter variable"},"--dearmor"),n(),e("span",{class:"token parameter variable"},"-o"),n(` /etc/apt/keyrings/docker.gpg
`),e("span",{class:"token function"},"sudo"),n(),e("span",{class:"token function"},"chmod"),n(` a+r /etc/apt/keyrings/docker.gpg

`),e("span",{class:"token comment"},"# Add the repository to Apt sources:"),n(`
`),e("span",{class:"token builtin class-name"},"echo"),n(),e("span",{class:"token punctuation"},"\\"),n(`
  `),e("span",{class:"token string"},'"deb [arch="'),e("span",{class:"token variable"},[e("span",{class:"token variable"},"$("),n("dpkg --print-architecture"),e("span",{class:"token variable"},")")]),e("span",{class:"token string"},`" signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \\
  "`),e("span",{class:"token variable"},[e("span",{class:"token variable"},"$("),e("span",{class:"token builtin class-name"},"."),n(" /etc/os-release "),e("span",{class:"token operator"},"&&"),n(),e("span",{class:"token builtin class-name"},"echo"),n(),e("span",{class:"token string"},[n('"'),e("span",{class:"token variable"},"$VERSION_CODENAME"),n('"')]),e("span",{class:"token variable"},")")]),e("span",{class:"token string"},'" stable"'),n(),e("span",{class:"token operator"},"|"),n(),e("span",{class:"token punctuation"},"\\"),n(`
  `),e("span",{class:"token function"},"sudo"),n(),e("span",{class:"token function"},"tee"),n(" /etc/apt/sources.list.d/docker.list "),e("span",{class:"token operator"},">"),n(` /dev/null
`),e("span",{class:"token function"},"sudo"),n(),e("span",{class:"token function"},"apt-get"),n(` update
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),U=e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`too much
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),N=e("h2",{id:"_4-2-install-the-docker-packages-选择安装包",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_4-2-install-the-docker-packages-选择安装包","aria-hidden":"true"},"#"),n(" 4.2 Install the Docker packages.（选择安装包）")],-1),C=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"sudo"),n(),e("span",{class:"token function"},"apt-get"),n(),e("span",{class:"token function"},"install"),n(` docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),V=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token comment"},"# To install a specific version of Docker Engine, start by listing the available versions in the repository:"),n(`
`),e("span",{class:"token comment"},"# List the available versions:"),n(`
`),e("span",{class:"token function"},"apt-cache"),n(" madison docker-ce "),e("span",{class:"token operator"},"|"),n(),e("span",{class:"token function"},"awk"),n(),e("span",{class:"token string"},"'{ print $3 }'"),n(`

`),e("span",{class:"token number"},"5"),n(`:24.0.0-1~ubuntu.22.04~jammy
`),e("span",{class:"token number"},"5"),n(`:23.0.6-1~ubuntu.22.04~jammy
`),e("span",{class:"token comment"},"# Select the desired version and install:"),n(`
`),e("span",{class:"token assign-left variable"},"VERSION_STRING"),e("span",{class:"token operator"},"="),e("span",{class:"token number"},"5"),n(`:24.0.0-1~ubuntu.22.04~jammy
`),e("span",{class:"token function"},"sudo"),n(),e("span",{class:"token function"},"apt-get"),n(),e("span",{class:"token function"},"install"),n(" docker-ce"),e("span",{class:"token operator"},"="),e("span",{class:"token variable"},"$VERSION_STRING"),n(" docker-ce-cli"),e("span",{class:"token operator"},"="),e("span",{class:"token variable"},"$VERSION_STRING"),n(` containerd.io docker-buildx-plugin docker-compose-plugin
`),e("span",{class:"token punctuation"},".."),n(`.
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),G=e("h3",{id:"_4-3-verify-that-the-docker-engine-installation-is-successful-by-running-the-hello-world-image-验证是否安装成功",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_4-3-verify-that-the-docker-engine-installation-is-successful-by-running-the-hello-world-image-验证是否安装成功","aria-hidden":"true"},"#"),n(" 4.3 Verify that the Docker Engine installation is successful by running the hello-world image.（验证是否安装成功）")],-1),$=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"sudo"),n(),e("span",{class:"token function"},"docker"),n(` run hello-world
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),R=e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`Unable to find image 'hello-world:latest' locally

latest: Pulling from library/hello-world

719385e32844: Pull complete 

Digest: sha256:4f53e2564790c8e7856ec08e384732aa38dc43c52f02952483e3f003afbf23db

Status: Downloaded newer image for hello-world:latest



Hello from Docker!

This message shows that your installation appears to be working correctly.



To generate this message, Docker took the following steps:

 1. The Docker client contacted the Docker daemon.

 2. The Docker daemon pulled the "hello-world" image from the Docker Hub.

    (amd64)

 3. The Docker daemon created a new container from that image which runs the

    executable that produces the output you are currently reading.

 4. The Docker daemon streamed that output to the Docker client, which sent it

    to your terminal.



To try something more ambitious, you can run an Ubuntu container with:

 $ docker run -it ubuntu bash



Share images, automate workflows, and more with a free Docker ID:

 https://hub.docker.com/


For more examples and ideas, visit:

 https://docs.docker.com/get-started/

`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),L=c('<h2 id="_5-upgrade-docker-engine-更新docker" tabindex="-1"><a class="header-anchor" href="#_5-upgrade-docker-engine-更新docker" aria-hidden="true">#</a> 5. Upgrade Docker Engine（更新Docker）</h2><p>To upgrade Docker Engine, follow step 2 of the installation instructions, choosing the new version you want to install.（指定版本安装，或 再次安装最新版）（见 <a href="#my-section4">4. 安装步骤</a>）</p><h2 id="_6-uninstall-docker-engine-卸载docker" tabindex="-1"><a class="header-anchor" href="#_6-uninstall-docker-engine-卸载docker" aria-hidden="true">#</a> 6. Uninstall Docker Engine（卸载Docker）</h2><h3 id="_6-1-uninstall-the-docker-engine-cli-containerd-and-docker-compose-packages-卸载包" tabindex="-1"><a class="header-anchor" href="#_6-1-uninstall-the-docker-engine-cli-containerd-and-docker-compose-packages-卸载包" aria-hidden="true">#</a> 6.1 Uninstall the Docker Engine, CLI, containerd, and Docker Compose packages:（卸载包）</h3>',4),O=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"sudo"),n(),e("span",{class:"token function"},"apt-get"),n(` purge docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin docker-ce-rootless-extras
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),j=e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`正在读取软件包列表... 完成

正在分析软件包的依赖关系树... 完成

正在读取状态信息... 完成                 

下列软件包是自动安装的并且现在不需要了：

  pigz slirp4netns

使用'sudo apt autoremove'来卸载它(它们)。

下列软件包将被【卸载】：

  containerd.io* docker-buildx-plugin* docker-ce* docker-ce-cli*

  docker-ce-rootless-extras* docker-compose-plugin*

升级了 0 个软件包，新安装了 0 个软件包，要卸载 6 个软件包，有 5 个软件包未被升级。

解压缩后将会空出 408 MB 的空间。

您希望继续执行吗？ [Y/n] y
。。。
正在清除 docker-ce (5:24.0.6-1~ubuntu.22.04~jammy) 的配置文件 ...

正在清除 containerd.io (1.6.24-1) 的配置文件 ...

`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),q=e("h3",{id:"_6-2-images-containers-volumes-or-custom-configuration-files-on-your-host-aren-t-automatically-removed-to-delete-all-images-containers-and-volumes-删除数据",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_6-2-images-containers-volumes-or-custom-configuration-files-on-your-host-aren-t-automatically-removed-to-delete-all-images-containers-and-volumes-删除数据","aria-hidden":"true"},"#"),n(" 6.2 Images, containers, volumes, or custom configuration files on your host aren't automatically removed. To delete all images, containers, and volumes:（删除数据）")],-1),B=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"sudo"),n(),e("span",{class:"token function"},"rm"),n(),e("span",{class:"token parameter variable"},"-rf"),n(` /var/lib/docker
`),e("span",{class:"token function"},"sudo"),n(),e("span",{class:"token function"},"rm"),n(),e("span",{class:"token parameter variable"},"-rf"),n(` /var/lib/containerd
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),z=e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),P=e("h2",{id:"附录",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#附录","aria-hidden":"true"},"#"),n(" 附录")],-1),H={href:"https://www.rewi.cc/",target:"_blank",rel:"noopener noreferrer"};function M(F,Y){const l=r("router-link"),t=r("ExternalLinkIcon"),i=r("CodeGroupItem"),o=r("CodeGroup");return u(),m("div",null,[b,e("nav",h,[e("ul",null,[e("li",null,[s(l,{to:"#目录"},{default:a(()=>[n("目录")]),_:1})]),e("li",null,[s(l,{to:"#_1-进入官网-获取最新安装信息"},{default:a(()=>[n("1. 进入官网，获取最新安装信息")]),_:1})]),e("li",null,[s(l,{to:"#_2-uninstall-old-versions-卸载旧版本"},{default:a(()=>[n("2. Uninstall old versions（卸载旧版本）")]),_:1})]),e("li",null,[s(l,{to:"#_3-installation-methods-选择安装方式"},{default:a(()=>[n("3. Installation methods（选择安装方式）")]),_:1})]),e("li",null,[s(l,{to:"#_4-install-using-the-apt-repository-apt仓库-命令行-安装-步骤"},{default:a(()=>[k,n('4. Install using the Apt repository（Apt仓库 "命令行" 安装 步骤）')]),_:1}),e("ul",null,[e("li",null,[s(l,{to:"#_4-1-set-up-docker-s-apt-repository-设置apt仓库"},{default:a(()=>[n("4.1 Set up Docker's Apt repository（设置Apt仓库）")]),_:1})])])]),e("li",null,[s(l,{to:"#_4-2-install-the-docker-packages-选择安装包"},{default:a(()=>[n("4.2 Install the Docker packages.（选择安装包）")]),_:1}),e("ul",null,[e("li",null,[s(l,{to:"#_4-3-verify-that-the-docker-engine-installation-is-successful-by-running-the-hello-world-image-验证是否安装成功"},{default:a(()=>[n("4.3 Verify that the Docker Engine installation is successful by running the hello-world image.（验证是否安装成功）")]),_:1})])])]),e("li",null,[s(l,{to:"#_5-upgrade-docker-engine-更新docker"},{default:a(()=>[n("5. Upgrade Docker Engine（更新Docker）")]),_:1})]),e("li",null,[s(l,{to:"#_6-uninstall-docker-engine-卸载docker"},{default:a(()=>[n("6. Uninstall Docker Engine（卸载Docker）")]),_:1}),e("ul",null,[e("li",null,[s(l,{to:"#_6-1-uninstall-the-docker-engine-cli-containerd-and-docker-compose-packages-卸载包"},{default:a(()=>[n("6.1 Uninstall the Docker Engine, CLI, containerd, and Docker Compose packages:（卸载包）")]),_:1})]),e("li",null,[s(l,{to:"#_6-2-images-containers-volumes-or-custom-configuration-files-on-your-host-aren-t-automatically-removed-to-delete-all-images-containers-and-volumes-删除数据"},{default:a(()=>[n("6.2 Images, containers, volumes, or custom configuration files on your host aren't automatically removed. To delete all images, containers, and volumes:（删除数据）")]),_:1})])])]),e("li",null,[s(l,{to:"#附录"},{default:a(()=>[n("附录")]),_:1})])])]),v,e("p",null,[e("a",g,[n("Install Docker Engine on Ubuntu"),s(t)])]),_,s(o,null,{default:a(()=>[s(i,{title:"输入"},{default:a(()=>[f]),_:1}),s(i,{title:"输出"},{default:a(()=>[y]),_:1})]),_:1}),x,w,e("p",null,[e("a",D,[n("桌面版安装 "),s(t)])]),e("p",null,[e("a",I,[n("Apt仓库（命令行）安装"),s(t)])]),e("p",null,[e("a",E,[n("手动（离线）安装"),s(t)])]),e("p",null,[e("a",T,[n("脚本安装"),s(t)])]),S,s(o,null,{default:a(()=>[s(i,{title:"输入"},{default:a(()=>[A]),_:1}),s(i,{title:"输出"},{default:a(()=>[U]),_:1})]),_:1}),N,s(o,null,{default:a(()=>[s(i,{title:"安装最新版"},{default:a(()=>[C]),_:1}),s(i,{title:"指定版本"},{default:a(()=>[V]),_:1})]),_:1}),G,s(o,null,{default:a(()=>[s(i,{title:"输入"},{default:a(()=>[$]),_:1}),s(i,{title:"输出"},{default:a(()=>[R]),_:1})]),_:1}),L,s(o,null,{default:a(()=>[s(i,{title:"输入"},{default:a(()=>[O]),_:1}),s(i,{title:"输出"},{default:a(()=>[j]),_:1})]),_:1}),q,s(o,null,{default:a(()=>[s(i,{title:"输入"},{default:a(()=>[B]),_:1}),s(i,{title:"输出"},{default:a(()=>[z]),_:1})]),_:1}),P,e("ul",null,[e("li",null,[e("a",H,[n("访问个人主页"),s(t)])])])])}const K=d(p,[["render",M],["__file","fuwuqiUbuntu 22.04 anzhuangDocker.html.vue"]]);export{K as default};
