import{_ as s,c as a,a as e,o as l}from"./app-C5EA9484.js";const i={};function p(t,n){return l(),a("div",null,[...n[0]||(n[0]=[e(`<h1 id="linux-下源码安装-python3-详细步骤" tabindex="-1"><a class="header-anchor" href="#linux-下源码安装-python3-详细步骤"><span>Linux 下源码安装 Python3 详细步骤</span></a></h1><blockquote><p>https://blog.csdn.net/key_world/article/details/110214288 &gt; https://zhuanlan.zhihu.com/p/403819436</p></blockquote><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 刷新包目录</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">apt</span> update</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 卸载 上一小节使用 PPA 安装的 Python 3.9</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">apt</span> purge python3.9</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 刷新包目录</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">apt</span> update</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 安装依赖</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> build-essential zlib1g-dev libncurses5-dev libgdbm-dev libnss3-dev libssl-dev libreadline-dev libffi-dev</span>
<span class="line"></span>
<span class="line"><span class="token comment"># wget https://www.python.org/ftp/python/3.8.0/Python-3.8.0.tgz</span></span>
<span class="line"><span class="token comment"># Download Python 3.9.0</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">wget</span> https://www.python.org/ftp/python/3.9.0/Python-3.9.0.tar.xz</span>
<span class="line"></span>
<span class="line"><span class="token comment"># tar -zxvf Python-3.8.0.tgz</span></span>
<span class="line"><span class="token comment"># cd Python-3.8.0</span></span>
<span class="line"><span class="token comment"># ./configure --prefix=/usr/local/python3.8</span></span>
<span class="line"><span class="token comment"># 解压</span></span>
<span class="line"><span class="token function">tar</span> <span class="token parameter variable">-xf</span> Python-3.9.0.tar.xz</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 切换目录</span></span>
<span class="line"><span class="token builtin class-name">cd</span> <span class="token operator">&lt;</span>path to download location<span class="token operator">&gt;</span>/Python-3.9.0</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 检查依赖</span></span>
<span class="line"><span class="token function">sudo</span> ./configure --enable-optimizations</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Make - 编译安装 Python - 这会费点时间，休息一下再回来吧</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">make</span></span>
<span class="line"><span class="token comment"># 或者 - 指定使用的处理器核心数</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">make</span> <span class="token parameter variable">-j</span> <span class="token number">4</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 安装二进制文件</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">make</span> altinstall</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Switch active Python</span></span>
<span class="line"><span class="token comment"># 切换活动的 Python</span></span>
<span class="line"><span class="token function">sudo</span> update-alternatives <span class="token parameter variable">--config</span> python3</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 不会为 python3 显示任何选项</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 检查安装</span></span>
<span class="line">python3 <span class="token parameter variable">--version</span></span>
<span class="line"></span>
<span class="line"><span class="token function">vi</span> /etc/profile</span>
<span class="line"><span class="token builtin class-name">export</span> <span class="token assign-left variable">PYTHON_HOME</span><span class="token operator">=</span>/usr/local/python3.8</span>
<span class="line"><span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token variable">\${PYTHON_HOME}</span>/bin:<span class="token environment constant">$PATH</span></span>
<span class="line"><span class="token builtin class-name">source</span> /etc/profile</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="如何在-ubuntu-上安装-python-3-9" tabindex="-1"><a class="header-anchor" href="#如何在-ubuntu-上安装-python-3-9"><span>如何在 Ubuntu 上安装 Python 3.9</span></a></h1><ul><li>https://zhuanlan.zhihu.com/p/403819436</li></ul><h2 id="检查-python-版本" tabindex="-1"><a class="header-anchor" href="#检查-python-版本"><span>检查 Python 版本</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 刷新软件包索引</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">apt</span> update</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 检查Python版本</span></span>
<span class="line">python <span class="token parameter variable">--version</span></span>
<span class="line"><span class="token comment"># 检查Python版本</span></span>
<span class="line">python3 <span class="token parameter variable">--version</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="删除现有的-python" tabindex="-1"><a class="header-anchor" href="#删除现有的-python"><span>删除现有的 Python</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 删除 Python —— 在运行前请再三确认</span></span>
<span class="line"><span class="token comment"># 这也会移除所有依赖于此的包，包括 gimp, mysql 等</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">apt</span> purge python3</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用-ppa-源安装-python" tabindex="-1"><a class="header-anchor" href="#使用-ppa-源安装-python"><span>使用 PPA 源安装 Python</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 更新包目录</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">apt</span> update</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 安装依赖</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> software-properties-common</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 添加 deadsnakes PPA 源</span></span>
<span class="line"><span class="token function">sudo</span> add-apt-repository ppa:deadsnakes/ppa</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 按下 Enter 以继续</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 安装 Python 3.9</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> python3.9</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11)])])}const o=s(i,[["render",p]]),d=JSON.parse('{"path":"/blogs/developer/python/Pythonkaifahuanjingpeizhi.html","title":"Python开发环境配置","lang":"zh-CN","frontmatter":{"title":"Python开发环境配置","date":"2023-03-02T00:00:00.000Z","tags":["开发环境"],"categories":["python"]},"headers":[{"level":2,"title":"检查 Python 版本","slug":"检查-python-版本","link":"#检查-python-版本","children":[]},{"level":2,"title":"删除现有的 Python","slug":"删除现有的-python","link":"#删除现有的-python","children":[]},{"level":2,"title":"使用 PPA 源安装 Python","slug":"使用-ppa-源安装-python","link":"#使用-ppa-源安装-python","children":[]}],"git":{"createdTime":1759387174000,"updatedTime":1769075498000,"contributors":[{"name":"ReWi","email":"RejoiceWindow@yeah.com","commits":3}]},"filePathRelative":"blogs/developer/python/Python开发环境配置.md"}');export{o as comp,d as data};
