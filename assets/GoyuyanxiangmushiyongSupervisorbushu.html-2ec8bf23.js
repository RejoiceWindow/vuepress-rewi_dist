import{_ as o,r as l,o as t,c as d,b as e,e as n,w as a,d as s,a as c}from"./app-6d65bf83.js";const u={},v=e("h2",{id:"目录",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#目录","aria-hidden":"true"},"#"),s(" 目录")],-1),p={class:"table-of-contents"},m=c(`<h2 id="supervisor-简介" tabindex="-1"><a class="header-anchor" href="#supervisor-简介" aria-hidden="true">#</a> supervisor 简介</h2><blockquote><p>Supervisor 是业界流行的一个通用的进程管理程序，它能将一个普通的命令行进程变为后台守护进程，并监控该进程的运行状态，当该进程异常退出时能将其自动重启。 Supervisor是一个进程控制系统. 它是一个C/S系统(注意: 其提供WEB接口给用户查询和控制), 它允许用户去监控和控制在类UNIX系统的进程. 它的目标与launchd, daemontools和runit有些相似, 但是与它们不一样的是, 它不是作为init(进程号pid是1)运行. 它是被用来控制进程, 并且它在启动的时候和一般程序并无二致.</p></blockquote><h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 1）centos 安装：</span>
yum <span class="token function">install</span> supervisor

<span class="token comment"># 2）ubuntu安装：</span>
<span class="token function">apt-get</span> <span class="token function">install</span> supervisor 
<span class="token comment"># （如果安装失败检查镜像源，替换最新的更新下然后再安装）</span>

<span class="token comment"># 3）masOS安装：</span>
brew <span class="token function">install</span> supervisor

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="supervisor-配置" tabindex="-1"><a class="header-anchor" href="#supervisor-配置" aria-hidden="true">#</a> Supervisor 配置</h3><blockquote><p>Supervisor 的配置文件为：/etc/supervisor/supervisord.conf ，Supervisor 所管理的应用的配置文件放在 /etc/supervisor/conf.d/ 目录中，这个目录可以在 supervisord.conf 中的include配置。</p></blockquote><div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code>[include]
files = /etc/supervisor/conf.d/*.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>启动supervisor服务</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>supervisord -c /etc/supervisor/supervisord.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>以ubuntu为例，在/etc/supervisor/conf.d 文件下添加<code>KitReWi.conf</code>文件</p></blockquote><p>编辑文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /etc/supervisor/conf.d/
<span class="token function">nano</span> KitReWi.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>输入内容 简单说明下： program：项目名称 command 执行命令 使用go build -o KitReWi 编译后文件路径</p><p>注：分号（;）开头的配置表示注释</p><div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code>[program:KitReWi]  ;程序名称
user=root  ;执行程序的用户
command=./KitReWi  ;执行的命令
directory=/home/admin/XXX/ ;命令执行的目录
stopsignal=TERM  ;重启时发送的信号
autostart=true  
autorestart=true  ;是否自动重启
startsecs=10
stdout_logfile=/home/admin/XXX/logs/KitReWi-stdout.log  ;标准输出日志位置
stdout_logfile_maxbytes=1MB
stdout_logfile_backups=10
stdout_capture_maxbytes=1MB
stderr_logfile=/home/admin/XXX/logs/KitReWi-stderr.log  ;标准错误日志位置
stderr_logfile_maxbytes=1MB
stderr_logfile_backups=10
stderr_capture_maxbytes=1MB
stopsignal=INT
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="启动服务" tabindex="-1"><a class="header-anchor" href="#启动服务" aria-hidden="true">#</a> 启动服务</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>supervisorctl start KitReWi
supervisorctl update <span class="token comment"># 更新配置文件并重启相关的程序</span>
supervisorctl status KitReWi <span class="token comment"># 查看bluebell的运行状态</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="常用的supervisr管理命令" tabindex="-1"><a class="header-anchor" href="#常用的supervisr管理命令" aria-hidden="true">#</a> 常用的supervisr管理命令</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>supervisorctl status       <span class="token comment"># 查看所有任务状态</span>
supervisorctl <span class="token function">shutdown</span>     <span class="token comment"># 关闭所有任务</span>
supervisorctl start 程序名  <span class="token comment"># 启动任务</span>
supervisorctl stop 程序名   <span class="token comment"># 关闭任务</span>
supervisorctl reload       <span class="token comment"># 重启supervisor</span>
<span class="token function">service</span> supervisor stop <span class="token comment"># 停止supervisor服务</span>
<span class="token function">service</span> supervisor start <span class="token comment"># 启动supervisor服务</span>
supervisorctl stop<span class="token operator">|</span>start program_name <span class="token comment">#启动或停止服务</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>`,20),b={href:"https://zhuanlan.zhihu.com/p/266899863",target:"_blank",rel:"noopener noreferrer"},h={href:"https://blog.csdn.net/qq_33229176/article/details/113055364",target:"_blank",rel:"noopener noreferrer"},f={href:"https://www.liwenzhou.com/posts/Go/deploy-in-docker/",target:"_blank",rel:"noopener noreferrer"},g={href:"https://blog.csdn.net/zzhongcy/article/details/105071018",target:"_blank",rel:"noopener noreferrer"};function _(k,x){const i=l("router-link"),r=l("ExternalLinkIcon");return t(),d("div",null,[v,e("nav",p,[e("ul",null,[e("li",null,[n(i,{to:"#目录"},{default:a(()=>[s("目录")]),_:1})]),e("li",null,[n(i,{to:"#supervisor-简介"},{default:a(()=>[s("supervisor 简介")]),_:1}),e("ul",null,[e("li",null,[n(i,{to:"#安装"},{default:a(()=>[s("安装")]),_:1})]),e("li",null,[n(i,{to:"#supervisor-配置"},{default:a(()=>[s("Supervisor 配置")]),_:1})]),e("li",null,[n(i,{to:"#启动服务"},{default:a(()=>[s("启动服务")]),_:1})]),e("li",null,[n(i,{to:"#常用的supervisr管理命令"},{default:a(()=>[s("常用的supervisr管理命令")]),_:1})])])]),e("li",null,[n(i,{to:"#参考"},{default:a(()=>[s("参考")]),_:1})])])]),m,e("ul",null,[e("li",null,[e("a",b,[s("Go语言项目部署的那些方式"),n(r)])]),e("li",null,[e("a",h,[s("supervisor 守护 golang 进程"),n(r)])]),e("li",null,[e("a",f,[s("如何使用Docker部署Go Web应用"),n(r)])]),e("li",null,[e("a",g,[s("supervisor配置和使用详解"),n(r)])])])])}const S=o(u,[["render",_],["__file","GoyuyanxiangmushiyongSupervisorbushu.html.vue"]]);export{S as default};
