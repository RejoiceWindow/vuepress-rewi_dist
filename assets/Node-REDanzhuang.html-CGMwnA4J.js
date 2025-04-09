import{_ as r,r as i,o as l,c as d,b as e,d as a,e as n,a as t}from"./app-De5JuplM.js";const o={},c=e("p",null,[a("@"),e("a",{href:"Node-RED%E5%AE%89%E8%A3%85"},"TOC")],-1),p={href:"https://nodered.org/docs/getting-started/docker",target:"_blank",rel:"noopener noreferrer"},h=t(`<h1 id="running-under-docker" tabindex="-1"><a class="header-anchor" href="#running-under-docker"><span>Running under Docker</span></a></h1><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">sudo docker run -it -p 1880:1880 -v /home/www/node_red_data:/data -e TZ=Asia/Shanghai --name mynodered nodered/node-red</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>You can then browse to http://{host-ip}:1880 to get the familiar Node-RED desktop. To reattach to the terminal (to see logging) run:</p><h2 id="给映射的文件夹增加权限" tabindex="-1"><a class="header-anchor" href="#给映射的文件夹增加权限"><span>给映射的文件夹增加权限</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token comment"># chown [-R] 所有者 文件或目录</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">chown</span> <span class="token parameter variable">-R</span> XXX /home/www/node_red_data</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="其他操作" tabindex="-1"><a class="header-anchor" href="#其他操作"><span>其他操作</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token function">docker</span> attach mynodered</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>If you need to restart the container (e.g. after a reboot or restart of the Docker daemon):</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token function">docker</span> start mynodered</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>and stop it again when required:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token function">docker</span> stop mynodered</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="安装好用的插件" tabindex="-1"><a class="header-anchor" href="#安装好用的插件"><span>安装好用的插件</span></a></h2><p>可视化界面安装：用户设置&gt;控制板</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">输入控件和数据可视化：node-red-dashboard</span>
<span class="line">telnet连接设备：node-red-contrib-telnet-client</span>
<span class="line">监控系统：node-red-contrib-prib-functions</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="faq-frequently-asked-questions" tabindex="-1"><a class="header-anchor" href="#faq-frequently-asked-questions"><span>FAQ(Frequently Asked Questions)</span></a></h1>`,15),u={id:"npm-报错-request-to-https-registry-npm-taobao-org-failed-reason-certificate-has-expired",tabindex:"-1"},m={class:"header-anchor",href:"#npm-报错-request-to-https-registry-npm-taobao-org-failed-reason-certificate-has-expired"},g={href:"https://registry.npm.taobao.org",target:"_blank",rel:"noopener noreferrer"},b={href:"https://blog.csdn.net/maoge_666/article/details/136038003",target:"_blank",rel:"noopener noreferrer"},v=t(`<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token function">npm</span> config <span class="token builtin class-name">set</span> registry https://registry.npmmirror.com</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,1);function f(_,k){const s=i("ExternalLinkIcon");return l(),d("div",null,[c,e("blockquote",null,[e("p",null,[e("a",p,[a("https://nodered.org/docs/getting-started/docker"),n(s)])])]),h,e("h2",u,[e("a",m,[e("span",null,[a("npm 报错：request to "),e("a",g,[a("https://registry.npm.taobao.org"),n(s)]),a(" failed, reason certificate has expired")])])]),e("blockquote",null,[e("p",null,[e("a",b,[a("https://blog.csdn.net/maoge_666/article/details/136038003"),n(s)])])]),v])}const y=r(o,[["render",f],["__file","Node-REDanzhuang.html.vue"]]),R=JSON.parse('{"path":"/blogs/platform/IoT/Node-REDanzhuang.html","title":"Node-RED安装","lang":"zh-CN","frontmatter":{"title":"Node-RED安装","date":"2024-11-01T16:00:00.000Z","tags":["Node-RED"],"categories":["IoT"]},"headers":[{"level":2,"title":"给映射的文件夹增加权限","slug":"给映射的文件夹增加权限","link":"#给映射的文件夹增加权限","children":[]},{"level":2,"title":"其他操作","slug":"其他操作","link":"#其他操作","children":[]},{"level":2,"title":"安装好用的插件","slug":"安装好用的插件","link":"#安装好用的插件","children":[]},{"level":2,"title":"npm 报错：request to https://registry.npm.taobao.org failed, reason certificate has expired","slug":"npm-报错-request-to-https-registry-npm-taobao-org-failed-reason-certificate-has-expired","link":"#npm-报错-request-to-https-registry-npm-taobao-org-failed-reason-certificate-has-expired","children":[]}],"git":{"createdTime":1732772000000,"updatedTime":1744078224000,"contributors":[{"name":"ReWi","email":"RejoiceWindow@yeah.net","commits":4},{"name":"ReWi","email":"RejoiceWindow@yeah.com","commits":2}]},"filePathRelative":"blogs/platform/IoT/Node-RED安装.md"}');export{y as comp,R as data};
