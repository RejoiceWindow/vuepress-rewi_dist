import{_ as t,r as i,o as c,c as o,b as n,d as s,e,a as l}from"./app-CAyVG32v.js";const r={},p=n("h2",{id:"前言",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#前言"},[n("span",null,"前言")])],-1),d={href:"https://blog.csdn.net/xiangshangdemayi/article/details/124191178",target:"_blank",rel:"noopener noreferrer"},u=n("p",null,"Windows设置开机启动的办法有很多种，",-1),h=n("h2",{id:"_1-将快捷方式放入系统启动路径",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-将快捷方式放入系统启动路径"},[n("span",null,"1. 将快捷方式放入系统启动路径")])],-1),m={href:"https://blog.csdn.net/xiangshangdemayi/article/details/124191178",target:"_blank",rel:"noopener noreferrer"},g=l(`<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token comment"># 首先 Windows+R 打开 运行窗口</span></span>
<span class="line">Windows+R</span>
<span class="line"><span class="token comment"># 然后输入 内容</span></span>
<span class="line">shell:common startup</span>
<span class="line"><span class="token comment"># 打开的路径是：C:\\ProgramData\\Microsoft\\Windows\\Start Menu\\Programs\\StartUp</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-将快捷方式放入用户启动路径" tabindex="-1"><a class="header-anchor" href="#_2-将快捷方式放入用户启动路径"><span>2. 将快捷方式放入用户启动路径</span></a></h2>`,2),b={href:"https://blog.csdn.net/xiangshangdemayi/article/details/124191178",target:"_blank",rel:"noopener noreferrer"},v={href:"https://blog.csdn.net/wyl20082988/article/details/119272689",target:"_blank",rel:"noopener noreferrer"},_=l(`<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token comment"># 首先 Windows+R 打开 运行窗口</span></span>
<span class="line">Windows+R</span>
<span class="line"><span class="token comment"># 然后输入 内容</span></span>
<span class="line">shell:startup</span>
<span class="line"><span class="token comment"># 打开的路径是：C:\\Users\\用户名\\AppData\\Roaming\\Microsoft\\Windows\\Start Menu\\Programs\\Startup</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-任务计划程序方式" tabindex="-1"><a class="header-anchor" href="#_3-任务计划程序方式"><span>3. 任务计划程序方式</span></a></h2>`,2),k={href:"https://blog.csdn.net/xiangshangdemayi/article/details/124191178",target:"_blank",rel:"noopener noreferrer"},f=l(`<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token comment"># 搜索并打开 计算机管理</span></span>
<span class="line"><span class="token comment"># 找到 系统工具&gt;任务计划程序</span></span>
<span class="line"><span class="token comment"># 选择  创建基本任务 或者 创建任务</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-注册表方式" tabindex="-1"><a class="header-anchor" href="#_4-注册表方式"><span>4. 注册表方式</span></a></h2>`,2),w={href:"https://blog.csdn.net/xiangshangdemayi/article/details/124191178",target:"_blank",rel:"noopener noreferrer"},x=l(`<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token comment"># 首先 Windows+R 打开 运行窗口</span></span>
<span class="line">Windows+R</span>
<span class="line"><span class="token comment"># 然后输入 内容</span></span>
<span class="line">regedit</span>
<span class="line"><span class="token comment"># 用户启动项路径</span></span>
<span class="line">计算机<span class="token punctuation">\\</span>HKEY_CURRENT_USER<span class="token punctuation">\\</span>Software<span class="token punctuation">\\</span>Microsoft<span class="token punctuation">\\</span>Windows<span class="token punctuation">\\</span>CurrentVersion<span class="token punctuation">\\</span>Run</span>
<span class="line"><span class="token comment"># 系统启动项路径1</span></span>
<span class="line">计算机<span class="token punctuation">\\</span>HKEY_LOCAL_MACHINE<span class="token punctuation">\\</span>SOFTWARE<span class="token punctuation">\\</span>Microsoft<span class="token punctuation">\\</span>Windows<span class="token punctuation">\\</span>CurrentVersion<span class="token punctuation">\\</span>Run</span>
<span class="line"><span class="token comment"># 系统启动项路径2</span></span>
<span class="line">计算机<span class="token punctuation">\\</span>HKEY_LOCAL_MACHINE<span class="token punctuation">\\</span>SOFTWARE<span class="token punctuation">\\</span>WOW6432Node<span class="token punctuation">\\</span>Microsoft<span class="token punctuation">\\</span>Windows<span class="token punctuation">\\</span>CurrentVersion<span class="token punctuation">\\</span>Run</span>
<span class="line"><span class="token comment"># 设置exe或者bat的路径</span></span>
<span class="line">程序名字 REG_SZ 程序所在位置</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-创建windows服务方式" tabindex="-1"><a class="header-anchor" href="#_5-创建windows服务方式"><span>5. 创建Windows服务方式</span></a></h2>`,2),y={href:"https://blog.csdn.net/xiangshangdemayi/article/details/124191178",target:"_blank",rel:"noopener noreferrer"},W=l(`<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token comment"># 创建服务</span></span>
<span class="line">sc create ServiceName <span class="token assign-left variable">binPath</span><span class="token operator">=</span> D:<span class="token punctuation">\\</span>Debug<span class="token punctuation">\\</span>authSender.exe <span class="token assign-left variable">start</span><span class="token operator">=</span> auto</span>
<span class="line"><span class="token comment"># 删除服务</span></span>
<span class="line">sc delete ServiceName</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function R(S,E){const a=i("ExternalLinkIcon");return c(),o("div",null,[p,n("blockquote",null,[n("p",null,[n("a",d,[s("https://blog.csdn.net/xiangshangdemayi/article/details/124191178"),e(a)])])]),u,h,n("blockquote",null,[n("p",null,[s("参考："),n("a",m,[s("https://blog.csdn.net/xiangshangdemayi/article/details/124191178"),e(a)])])]),g,n("blockquote",null,[n("p",null,[s("参考："),n("a",b,[s("https://blog.csdn.net/xiangshangdemayi/article/details/124191178"),e(a)]),s(" 参考："),n("a",v,[s("https://blog.csdn.net/wyl20082988/article/details/119272689"),e(a)])])]),_,n("blockquote",null,[n("p",null,[s("参考："),n("a",k,[s("https://blog.csdn.net/xiangshangdemayi/article/details/124191178"),e(a)])])]),f,n("blockquote",null,[n("p",null,[s("参考："),n("a",w,[s("https://blog.csdn.net/xiangshangdemayi/article/details/124191178"),e(a)])])]),x,n("blockquote",null,[n("p",null,[s("参考："),n("a",y,[s("https://blog.csdn.net/xiangshangdemayi/article/details/124191178"),e(a)]),s(" 部分机器使用这两个命令并不生效，本人就遇到过，读者可以使用其他几种方式进行设置，不能再一棵树上吊死。")])]),W])}const C=t(r,[["render",R],["__file","shezhiexehuozhebatwenjiankaijiqidongdefangfa.html.vue"]]),N=JSON.parse('{"path":"/blogs/platform/windows/shezhiexehuozhebatwenjiankaijiqidongdefangfa.html","title":"设置exe或者bat文件开机启动的方法","lang":"zh-CN","frontmatter":{"title":"设置exe或者bat文件开机启动的方法","date":"2023-08-16T11:00:00.000Z","tags":["windows 10","windows 11","开机自启动"],"categories":["operating-system","windows"]},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"1. 将快捷方式放入系统启动路径","slug":"_1-将快捷方式放入系统启动路径","link":"#_1-将快捷方式放入系统启动路径","children":[]},{"level":2,"title":"2. 将快捷方式放入用户启动路径","slug":"_2-将快捷方式放入用户启动路径","link":"#_2-将快捷方式放入用户启动路径","children":[]},{"level":2,"title":"3. 任务计划程序方式","slug":"_3-任务计划程序方式","link":"#_3-任务计划程序方式","children":[]},{"level":2,"title":"4. 注册表方式","slug":"_4-注册表方式","link":"#_4-注册表方式","children":[]},{"level":2,"title":"5. 创建Windows服务方式","slug":"_5-创建windows服务方式","link":"#_5-创建windows服务方式","children":[]}],"git":{"createdTime":1732772000000,"updatedTime":1735198401000,"contributors":[{"name":"ReWi","email":"RejoiceWindow@yeah.net","commits":3}]},"filePathRelative":"blogs/platform/windows/设置exe或者bat文件开机启动的方法.md"}');export{C as comp,N as data};