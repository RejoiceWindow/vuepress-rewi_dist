import{_ as t,r as i,o as r,c as p,b as s,d as n,e,a as l}from"./app-CAyVG32v.js";const c={},o=s("h2",{id:"docker-创建",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#docker-创建"},[s("span",null,"Docker 创建")])],-1),d={href:"https://hub.docker.com/search?q=ubuntu",target:"_blank",rel:"noopener noreferrer"},u={href:"https://hub.docker.com/_/ubuntu",target:"_blank",rel:"noopener noreferrer"},h=l(`<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token function">sudo</span> <span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--name</span><span class="token operator">=</span>UbuntuGoReWi  <span class="token parameter variable">-it</span> <span class="token parameter variable">-p</span> <span class="token number">3680</span>:80 <span class="token parameter variable">-p</span> <span class="token number">3443</span>:443 <span class="token parameter variable">-p</span> <span class="token number">3622</span>:22 <span class="token parameter variable">-p</span> <span class="token number">3688</span>:3688 <span class="token parameter variable">-p</span> <span class="token number">5688</span>:5688 <span class="token parameter variable">-p</span> <span class="token number">7688</span>:7688 <span class="token parameter variable">-p</span> <span class="token number">9688</span>:9688 <span class="token parameter variable">-v</span> /home/www/UbuntuGoReWi:/home <span class="token parameter variable">--privileged</span><span class="token operator">=</span>true <span class="token parameter variable">--restart</span><span class="token operator">=</span>always  ubuntu:22.04</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 不想指定端口 用 --network NginxNet 代替 -p （加入一个网络，网络内的容器可用容器名代替IP访问）</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--name</span><span class="token operator">=</span>UbuntuGoReWi  <span class="token parameter variable">-it</span> <span class="token parameter variable">--network</span> NginxNet <span class="token parameter variable">-v</span> /home/www/UbuntuGoReWi:/home <span class="token parameter variable">--privileged</span><span class="token operator">=</span>true <span class="token parameter variable">--restart</span><span class="token operator">=</span>always  ubuntu:24.04</span>
<span class="line"><span class="token comment"># 再建一个容器</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--name</span><span class="token operator">=</span>UbuntuPyReWi  <span class="token parameter variable">-it</span> <span class="token parameter variable">--network</span> NginxNet <span class="token parameter variable">-v</span> /home/www/UbuntuPyReWi:/home <span class="token parameter variable">--privileged</span><span class="token operator">=</span>true <span class="token parameter variable">--restart</span><span class="token operator">=</span>always  ubuntu:24.04</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ubuntu-新建用户及文件夹" tabindex="-1"><a class="header-anchor" href="#ubuntu-新建用户及文件夹"><span>Ubuntu 新建用户及文件夹</span></a></h2>`,2),m={href:"https://blog.csdn.net/qq_43847153/article/details/126583197",target:"_blank",rel:"noopener noreferrer"},b=l(`<h3 id="_1-看当前所有用户" tabindex="-1"><a class="header-anchor" href="#_1-看当前所有用户"><span>1. 看当前所有用户</span></a></h3><p>默认新用户创建后都会在/home 目录下有个用户的主目录。</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token function">ls</span> /home</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_2-创建用户" tabindex="-1"><a class="header-anchor" href="#_2-创建用户"><span>2. 创建用户</span></a></h3><blockquote><p>可以看到只有 XXX 一个用户，接下来创建一个名为 admin 的用户。 -m 是 useradd 的一个选项，为自动创建主目录。 -d 是设置用户的主目录。 -s 是指定用户所用的 shell。</p></blockquote><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token function">useradd</span> admin <span class="token parameter variable">-m</span> <span class="token parameter variable">-d</span> /home/admin <span class="token parameter variable">-s</span> /bin/bash</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_3-不做-修改用户所属组" tabindex="-1"><a class="header-anchor" href="#_3-不做-修改用户所属组"><span>3. （不做）修改用户所属组</span></a></h3><p>这里的话其实就是将 admin 这个用户加入了 root 组。然后就有了 root 的一个权限。 这里的话可以将 root 和 admin 换为自己想要的，这里的 root 是想要加入的组，admin 是想要添加进这个组的用户。</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token function">sudo</span> <span class="token function">usermod</span> <span class="token parameter variable">-a</span> <span class="token parameter variable">-G</span> root admin</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_4-不做-删除用户" tabindex="-1"><a class="header-anchor" href="#_4-不做-删除用户"><span>4. （不做）删除用户</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token function">userdel</span> <span class="token parameter variable">-r</span> MySQL</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_5-分配权限的两种方式" tabindex="-1"><a class="header-anchor" href="#_5-分配权限的两种方式"><span>5. 分配权限的两种方式</span></a></h3><p>将读的权限为 4，以写的权限为 2，以执行的权限为 1.每一个小块为权限的数字累加，每个小块为前面所提到的当前用户，用户所在组，其它用户。结合 chmod 命令使用。 通过下面这种方式可以递归的赋予权限，也就是该目录下及所有子目录添加权限。权限的表示包括字母的表示权限和数字的表示权限。</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token function">chmod</span> <span class="token parameter variable">-R</span> <span class="token number">777</span> /home/admin</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_6-设置密码" tabindex="-1"><a class="header-anchor" href="#_6-设置密码"><span>6. 设置密码</span></a></h3><blockquote><p>在 Ubuntu18.04 系统中，如需要设置用户密码，要手动执行以下命令来设置新用户的密码.</p></blockquote><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token function">passwd</span> admin</span>
<span class="line"><span class="token operator">&lt;</span>密码<span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span>密码<span class="token operator">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ubuntu-安装-ssh-服务详细过程" tabindex="-1"><a class="header-anchor" href="#ubuntu-安装-ssh-服务详细过程"><span>Ubuntu 安装 ssh 服务详细过程</span></a></h2>`,18),v={href:"https://cloud.tencent.com/developer/article/2054751",target:"_blank",rel:"noopener noreferrer"},k={href:"https://blog.csdn.net/weixin_43833430/article/details/127262464",target:"_blank",rel:"noopener noreferrer"},g={href:"https://blog.csdn.net/m0_46392035/article/details/124835203",target:"_blank",rel:"noopener noreferrer"},f=l(`<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token comment">#更新安装环境</span></span>
<span class="line"><span class="token function">apt-get</span> upgrade <span class="token parameter variable">-y</span></span>
<span class="line"><span class="token function">apt-get</span> update <span class="token parameter variable">-y</span></span>
<span class="line"><span class="token comment">#安装ssh服务</span></span>
<span class="line"><span class="token function">apt-get</span> <span class="token function">install</span> openssh-server <span class="token parameter variable">-y</span></span>
<span class="line"><span class="token comment">#启动sshserver</span></span>
<span class="line">/etc/init.d/ssh start</span>
<span class="line"><span class="token comment">#重启ssh服务</span></span>
<span class="line">/etc/init.d/ssh restart</span>
<span class="line"></span>
<span class="line"><span class="token comment">#启动ssh服务并配置开机自启</span></span>
<span class="line">systemctl <span class="token builtin class-name">enable</span> <span class="token function">ssh</span> <span class="token comment">#开机启动</span></span>
<span class="line">systemctl restart <span class="token function">ssh</span> <span class="token comment">#重启ssh</span></span>
<span class="line">systemctl status <span class="token function">ssh</span> <span class="token comment">#查看ssh状态</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="启用中文支持" tabindex="-1"><a class="header-anchor" href="#启用中文支持"><span>启用中文支持</span></a></h2>`,2),_={href:"https://blog.csdn.net/llllllloooooo/article/details/102852027",target:"_blank",rel:"noopener noreferrer"},x={href:"https://zhuanlan.zhihu.com/p/165961076",target:"_blank",rel:"noopener noreferrer"},y=l(`<blockquote><p>简单的说是因为服务器没有安装 zh_CN.UTF-8 字符集，导致不支持中文！ locale 执行这个命令，查看和语言编码有关的环境变量</p></blockquote><h3 id="查看" tabindex="-1"><a class="header-anchor" href="#查看"><span>查看</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token comment"># 查看当前语言</span></span>
<span class="line">locale</span>
<span class="line"><span class="token comment"># 查看当前已安装的语言</span></span>
<span class="line">locale <span class="token parameter variable">-a</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装语言包" tabindex="-1"><a class="header-anchor" href="#安装语言包"><span>安装语言包</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token comment"># 1.安装基本的软件包（第2步安装 zh_CN 中文字符集时要用到）</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">apt-get</span> update   <span class="token comment"># ubuntu系统更新软件包列表</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> <span class="token parameter variable">-y</span> language-pack-zh-hans</span>
<span class="line"><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> <span class="token parameter variable">-y</span> language-pack-zh-hant</span>
<span class="line"><span class="token comment"># 字符集</span></span>
<span class="line">locale-gen zh_CN.UTF-8</span>
<span class="line"><span class="token comment"># 再次查看</span></span>
<span class="line">locale <span class="token parameter variable">-a</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="添加到文件" tabindex="-1"><a class="header-anchor" href="#添加到文件"><span>添加到文件</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token builtin class-name">echo</span> <span class="token string">&quot;export LC_ALL=zh_CN.UTF-8&quot;</span><span class="token operator">&gt;&gt;</span> /etc/profile</span>
<span class="line"><span class="token builtin class-name">source</span> /etc/profile</span>
<span class="line"><span class="token comment"># 如果这里添加失败，提示没有这种语言包，退出容器，再重新进入，就可以添加了</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 完成</span></span>
<span class="line">locale</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="在-sh-文件中使用-source-命令不生效" tabindex="-1"><a class="header-anchor" href="#在-sh-文件中使用-source-命令不生效"><span>在.sh 文件中使用 source 命令不生效</span></a></h2>`,8),w={href:"https://www.cnblogs.com/CharrammaBlog/p/13540302.html",target:"_blank",rel:"noopener noreferrer"},q=l(`<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token comment"># 使用 source 命令</span></span>
<span class="line"><span class="token builtin class-name">source</span> XXX.sh</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="faq" tabindex="-1"><a class="header-anchor" href="#faq"><span>FAQ</span></a></h1><h2 id="libgl-so-1-cannot-open-shared-object-file-no-such-file-or-directory" tabindex="-1"><a class="header-anchor" href="#libgl-so-1-cannot-open-shared-object-file-no-such-file-or-directory"><span>libGL.so.1: cannot open shared object file: No such file or directory</span></a></h2><blockquote><p>https://blog.csdn.net/qq_50195602/article/details/124188467</p></blockquote><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token function">apt-get</span> <span class="token function">install</span> ffmpeg libsm6 libxext6  <span class="token parameter variable">-y</span></span>
<span class="line"><span class="token function">apt-get</span> update <span class="token operator">&amp;&amp;</span> <span class="token function">apt-get</span> <span class="token function">install</span> libgl1</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function j(U,N){const a=i("ExternalLinkIcon");return r(),p("div",null,[o,s("ul",null,[s("li",null,[s("a",d,[n("https://hub.docker.com/search?q=ubuntu"),e(a)])]),s("li",null,[s("a",u,[n("https://hub.docker.com/_/ubuntu"),e(a)])])]),h,s("ul",null,[s("li",null,[s("a",m,[n("https://blog.csdn.net/qq_43847153/article/details/126583197"),e(a)])])]),b,s("ul",null,[s("li",null,[s("a",v,[n("https://cloud.tencent.com/developer/article/2054751"),e(a)])]),s("li",null,[s("a",k,[n("https://blog.csdn.net/weixin_43833430/article/details/127262464"),e(a)])]),s("li",null,[s("a",g,[n("https://blog.csdn.net/m0_46392035/article/details/124835203"),e(a)])])]),f,s("ul",null,[s("li",null,[s("a",_,[n("https://blog.csdn.net/llllllloooooo/article/details/102852027"),e(a)])]),s("li",null,[s("a",x,[n("https://zhuanlan.zhihu.com/p/165961076"),e(a)])])]),y,s("ul",null,[s("li",null,[s("a",w,[n("https://www.cnblogs.com/CharrammaBlog/p/13540302.html"),e(a)])])]),q])}const R=t(c,[["render",j],["__file","DockershiyongUbunturongqicankao.html.vue"]]),C=JSON.parse('{"path":"/blogs/platform/docker/DockershiyongUbunturongqicankao.html","title":"Docker使用Ubuntu容器参考","lang":"zh-CN","frontmatter":{"title":"Docker使用Ubuntu容器参考","date":"2023-02-28T16:30:00.000Z","tags":["ubuntu","backend"],"categories":["docker","virtual-platform"]},"headers":[{"level":2,"title":"Docker 创建","slug":"docker-创建","link":"#docker-创建","children":[]},{"level":2,"title":"Ubuntu 新建用户及文件夹","slug":"ubuntu-新建用户及文件夹","link":"#ubuntu-新建用户及文件夹","children":[{"level":3,"title":"1. 看当前所有用户","slug":"_1-看当前所有用户","link":"#_1-看当前所有用户","children":[]},{"level":3,"title":"2. 创建用户","slug":"_2-创建用户","link":"#_2-创建用户","children":[]},{"level":3,"title":"3. （不做）修改用户所属组","slug":"_3-不做-修改用户所属组","link":"#_3-不做-修改用户所属组","children":[]},{"level":3,"title":"4. （不做）删除用户","slug":"_4-不做-删除用户","link":"#_4-不做-删除用户","children":[]},{"level":3,"title":"5. 分配权限的两种方式","slug":"_5-分配权限的两种方式","link":"#_5-分配权限的两种方式","children":[]},{"level":3,"title":"6. 设置密码","slug":"_6-设置密码","link":"#_6-设置密码","children":[]}]},{"level":2,"title":"Ubuntu 安装 ssh 服务详细过程","slug":"ubuntu-安装-ssh-服务详细过程","link":"#ubuntu-安装-ssh-服务详细过程","children":[]},{"level":2,"title":"启用中文支持","slug":"启用中文支持","link":"#启用中文支持","children":[{"level":3,"title":"查看","slug":"查看","link":"#查看","children":[]},{"level":3,"title":"安装语言包","slug":"安装语言包","link":"#安装语言包","children":[]},{"level":3,"title":"添加到文件","slug":"添加到文件","link":"#添加到文件","children":[]}]},{"level":2,"title":"在.sh 文件中使用 source 命令不生效","slug":"在-sh-文件中使用-source-命令不生效","link":"#在-sh-文件中使用-source-命令不生效","children":[]},{"level":2,"title":"libGL.so.1: cannot open shared object file: No such file or directory","slug":"libgl-so-1-cannot-open-shared-object-file-no-such-file-or-directory","link":"#libgl-so-1-cannot-open-shared-object-file-no-such-file-or-directory","children":[]}],"git":{"createdTime":1732772000000,"updatedTime":1735198353000,"contributors":[{"name":"ReWi","email":"RejoiceWindow@yeah.net","commits":2}]},"filePathRelative":"blogs/platform/docker/Docker使用Ubuntu容器参考.md"}');export{R as comp,C as data};