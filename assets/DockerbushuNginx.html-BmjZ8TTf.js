import{_ as r,r as c,o as d,c as m,b as n,e as a,w as e,d as s,a as u}from"./app-De5JuplM.js";const k={},h=n("h2",{id:"目录",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#目录"},[n("span",null,"目录")])],-1),g={class:"table-of-contents"},b=n("a",{id:"appendix-section"},null,-1),v=n("h2",{id:"_1-准备工作",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-准备工作"},[n("span",null,"1. 准备工作")])],-1),_={class:"contains-task-list"},f=n("li",{class:"task-list-item"},[n("input",{class:"task-list-item-checkbox",checked:"",disabled:"",type:"checkbox"}),s(" [有云服务或者虚拟机](/blogs/platform/docker/")],-1),x={class:"task-list-item"},y=n("input",{class:"task-list-item-checkbox",checked:"",disabled:"",type:"checkbox"},null,-1),w=u(`<h2 id="_2-主机创建文件夹-方便对容器配置文件等进行修改" tabindex="-1"><a class="header-anchor" href="#_2-主机创建文件夹-方便对容器配置文件等进行修改"><span>2. 主机创建文件夹，方便对容器配置文件等进行修改</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token comment"># 举例，保存在主机的\`/home/www/\`文件夹下</span></span>
<span class="line"><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /home/www/nginx/conf</span>
<span class="line"><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /home/www/nginx/conf/conf.d</span>
<span class="line"><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /home/www/nginx/html</span>
<span class="line"><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /home/www/nginx/log</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-创建文件" tabindex="-1"><a class="header-anchor" href="#_3-创建文件"><span>3. 创建文件</span></a></h2><ul><li>文件可能挂载不成功，先创建一个</li><li>文件具体内容可看 <a href="#appendix-section">附录</a></li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token function">nano</span> /home/www/nginx/conf/nginx.conf</span>
<span class="line"><span class="token comment">## 输入附录的内容，或者随便输入一点，后面修改</span></span>
<span class="line"><span class="token comment">## 退出编辑，保存</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-创建网络-方便与其他容器互联" tabindex="-1"><a class="header-anchor" href="#_3-创建网络-方便与其他容器互联"><span>3. 创建网络，方便与其他容器互联</span></a></h2>`,6),N={href:"https://zhuanlan.zhihu.com/p/129844795",target:"_blank",rel:"noopener noreferrer"},D=u(`<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token function">sudo</span> <span class="token function">docker</span> network create NginxNet</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="_5-创建容器" tabindex="-1"><a class="header-anchor" href="#_5-创建容器"><span>5. 创建容器</span></a></h2><ul><li>服务器配置文库目录：/etc/nginx/conf.d</li><li>Nginx 配置文件：/etc/nginx/nginx.conf</li><li>日志文件目录：/var/log/nginx</li><li>网页目录：/usr/share/nginx/html</li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token function">sudo</span> <span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--name</span> nginx <span class="token parameter variable">--network</span> NginxNet <span class="token parameter variable">-p</span> <span class="token number">6080</span>:6080 <span class="token parameter variable">-p</span> <span class="token number">6088</span>:6088 <span class="token parameter variable">-p</span> <span class="token number">8001</span>:8001 <span class="token parameter variable">-p</span> <span class="token number">8880</span>:8880 <span class="token parameter variable">-p</span> <span class="token number">8888</span>:8888 <span class="token parameter variable">-p</span> <span class="token number">3680</span>:3680 <span class="token parameter variable">-p</span> <span class="token number">3688</span>:3688 <span class="token parameter variable">-v</span> /home/www/nginx/conf/nginx.conf:/etc/nginx/nginx.conf <span class="token parameter variable">-v</span> /home/www/nginx/conf/conf.d:/etc/nginx/conf.d <span class="token parameter variable">-v</span> /home/www/nginx/html:/usr/share/nginx/html <span class="token parameter variable">-v</span> /home/www/nginx/log:/var/log/nginx <span class="token parameter variable">--restart</span><span class="token operator">=</span>always nginx</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="_4-验证是否成功" tabindex="-1"><a class="header-anchor" href="#_4-验证是否成功"><span>4. 验证是否成功</span></a></h2><ul class="contains-task-list"><li class="task-list-item"><input class="task-list-item-checkbox" disabled="" type="checkbox"> <a href="#appendix-section">附录</a>的文件全部重新加入成功，并重启 nginx</li><li class="task-list-item"><input class="task-list-item-checkbox" disabled="" type="checkbox"> 防火墙端口<code>8080</code>已开放</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">打开浏览器</span>
<span class="line">输入: &lt;IP&gt;:8080</span>
<span class="line">即可看见网页返回</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="附录" tabindex="-1"><a class="header-anchor" href="#附录"><span><a id="appendix-section"></a> 附录</span></a></h2>`,8),E=n("li",null,"从 nginx 容器中复制的文件",-1),j=n("h3",{id:"nginx-配置",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#nginx-配置"},[n("span",null,"Nginx 配置")])],-1),C=n("div",{class:"language-bash line-numbers-mode","data-highlighter":"prismjs","data-ext":"sh","data-title":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token function"},"cat"),s(" /etc/nginx/nginx.conf")]),s(`
`),n("span",{class:"line"})])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"})])],-1),A=n("div",{class:"language-conf line-numbers-mode","data-highlighter":"prismjs","data-ext":"conf","data-title":"conf"},[n("pre",{class:"language-conf"},[n("code",null,[n("span",{class:"line"},"user  nginx;"),s(`
`),n("span",{class:"line"},"worker_processes  auto;"),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},"error_log  /var/log/nginx/error.log notice;"),s(`
`),n("span",{class:"line"},"pid        /var/run/nginx.pid;"),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},"events {"),s(`
`),n("span",{class:"line"},"    worker_connections  1024;"),s(`
`),n("span",{class:"line"},"}"),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},"http {"),s(`
`),n("span",{class:"line"},"    include       /etc/nginx/mime.types;"),s(`
`),n("span",{class:"line"},"    default_type  application/octet-stream;"),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},`    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '`),s(`
`),n("span",{class:"line"},`                      '$status $body_bytes_sent "$http_referer" '`),s(`
`),n("span",{class:"line"},`                      '"$http_user_agent" "$http_x_forwarded_for"';`),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},"    access_log  /var/log/nginx/access.log  main;"),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},"    sendfile        on;"),s(`
`),n("span",{class:"line"},"    #tcp_nopush     on;"),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},"    keepalive_timeout  65;"),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},"    #gzip  on;"),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},"    include /etc/nginx/conf.d/*.conf;"),s(`
`),n("span",{class:"line"},"}"),s(`
`),n("span",{class:"line"})])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),I=n("h3",{id:"服务器配置",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#服务器配置"},[n("span",null,"服务器配置")])],-1),$=n("div",{class:"language-bash line-numbers-mode","data-highlighter":"prismjs","data-ext":"sh","data-title":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token function"},"cat"),s(" /etc/nginx/conf.d/default.conf")]),s(`
`),n("span",{class:"line"})])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"})])],-1),P=n("div",{class:"language-conf line-numbers-mode","data-highlighter":"prismjs","data-ext":"conf","data-title":"conf"},[n("pre",{class:"language-conf"},[n("code",null,[n("span",{class:"line"},"server {"),s(`
`),n("span",{class:"line"},"    listen       80;"),s(`
`),n("span",{class:"line"},"    listen  [::]:80;"),s(`
`),n("span",{class:"line"},"    server_name  localhost;"),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},"    #access_log  /var/log/nginx/host.access.log  main;"),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},"    location / {"),s(`
`),n("span",{class:"line"},"        root   /usr/share/nginx/html;"),s(`
`),n("span",{class:"line"},"        index  index.html index.htm;"),s(`
`),n("span",{class:"line"},"    }"),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},"    #error_page  404              /404.html;"),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},"    # redirect server error pages to the static page /50x.html"),s(`
`),n("span",{class:"line"},"    #"),s(`
`),n("span",{class:"line"},"    error_page   500 502 503 504  /50x.html;"),s(`
`),n("span",{class:"line"},"    location = /50x.html {"),s(`
`),n("span",{class:"line"},"        root   /usr/share/nginx/html;"),s(`
`),n("span",{class:"line"},"    }"),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},"    # proxy the PHP scripts to Apache listening on 127.0.0.1:80"),s(`
`),n("span",{class:"line"},"    #"),s(`
`),n("span",{class:"line"},"    #location ~ \\.php$ {"),s(`
`),n("span",{class:"line"},"    #    proxy_pass   http://127.0.0.1;"),s(`
`),n("span",{class:"line"},"    #}"),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},"    # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000"),s(`
`),n("span",{class:"line"},"    #"),s(`
`),n("span",{class:"line"},"    #location ~ \\.php$ {"),s(`
`),n("span",{class:"line"},"    #    root           html;"),s(`
`),n("span",{class:"line"},"    #    fastcgi_pass   127.0.0.1:9000;"),s(`
`),n("span",{class:"line"},"    #    fastcgi_index  index.php;"),s(`
`),n("span",{class:"line"},"    #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;"),s(`
`),n("span",{class:"line"},"    #    include        fastcgi_params;"),s(`
`),n("span",{class:"line"},"    #}"),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},"    # deny access to .htaccess files, if Apache's document root"),s(`
`),n("span",{class:"line"},"    # concurs with nginx's one"),s(`
`),n("span",{class:"line"},"    #"),s(`
`),n("span",{class:"line"},"    #location ~ /\\.ht {"),s(`
`),n("span",{class:"line"},"    #    deny  all;"),s(`
`),n("span",{class:"line"},"    #}"),s(`
`),n("span",{class:"line"},"}"),s(`
`),n("span",{class:"line"})])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),T=n("h3",{id:"网页文件",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#网页文件"},[n("span",null,"网页文件")])],-1),R=n("div",{class:"language-bash line-numbers-mode","data-highlighter":"prismjs","data-ext":"sh","data-title":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token function"},"cat"),s(" /usr/share/nginx/html/index.html")]),s(`
`),n("span",{class:"line"})])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"})])],-1),z=n("div",{class:"language-html line-numbers-mode","data-highlighter":"prismjs","data-ext":"html","data-title":"html"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token doctype"},[n("span",{class:"token punctuation"},"<!"),n("span",{class:"token doctype-tag"},"DOCTYPE"),s(),n("span",{class:"token name"},"html"),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("html")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("head")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("title")]),n("span",{class:"token punctuation"},">")]),s("Welcome to nginx!"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("title")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"}),s(`
`),n("span",{class:"line"},[s("      "),n("span",{class:"token selector"},"html"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("        "),n("span",{class:"token property"},"color-scheme"),n("span",{class:"token punctuation"},":"),s(" light dark"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("      "),n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"line"},[s("      "),n("span",{class:"token selector"},"body"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("        "),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 35em"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("        "),n("span",{class:"token property"},"margin"),n("span",{class:"token punctuation"},":"),s(" 0 auto"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("        "),n("span",{class:"token property"},"font-family"),n("span",{class:"token punctuation"},":"),s(" Tahoma"),n("span",{class:"token punctuation"},","),s(" Verdana"),n("span",{class:"token punctuation"},","),s(" Arial"),n("span",{class:"token punctuation"},","),s(" sans-serif"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("      "),n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"line"},"    ")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("style")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("head")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("body")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("h1")]),n("span",{class:"token punctuation"},">")]),s("Welcome to nginx!"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("h1")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},"      If you see this page, the nginx web server is successfully installed and"),s(`
`),n("span",{class:"line"},"      working. Further configuration is required."),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},"      For online documentation and support please refer to"),s(`
`),n("span",{class:"line"},[s("      "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a")]),s(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("http://nginx.org/"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("nginx.org"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a")]),n("span",{class:"token punctuation"},">")]),s("."),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("br")]),s(),n("span",{class:"token punctuation"},"/>")])]),s(`
`),n("span",{class:"line"},"      Commercial support is available at"),s(`
`),n("span",{class:"line"},[s("      "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a")]),s(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("http://nginx.com/"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("nginx.com"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a")]),n("span",{class:"token punctuation"},">")]),s(".")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("em")]),n("span",{class:"token punctuation"},">")]),s("Thank you for using nginx."),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("em")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("body")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("html")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"})])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),G=n("h3",{id:"报错文件",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#报错文件"},[n("span",null,"报错文件")])],-1),V=n("div",{class:"language-bash line-numbers-mode","data-highlighter":"prismjs","data-ext":"sh","data-title":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token function"},"cat"),s(" /usr/share/nginx/html/50x.html")]),s(`
`),n("span",{class:"line"})])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"})])],-1),W=n("div",{class:"language-html line-numbers-mode","data-highlighter":"prismjs","data-ext":"html","data-title":"html"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token doctype"},[n("span",{class:"token punctuation"},"<!"),n("span",{class:"token doctype-tag"},"DOCTYPE"),s(),n("span",{class:"token name"},"html"),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("html")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("head")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("title")]),n("span",{class:"token punctuation"},">")]),s("Error"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("title")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"}),s(`
`),n("span",{class:"line"},[s("      "),n("span",{class:"token selector"},"html"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("        "),n("span",{class:"token property"},"color-scheme"),n("span",{class:"token punctuation"},":"),s(" light dark"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("      "),n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"line"},[s("      "),n("span",{class:"token selector"},"body"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("        "),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 35em"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("        "),n("span",{class:"token property"},"margin"),n("span",{class:"token punctuation"},":"),s(" 0 auto"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("        "),n("span",{class:"token property"},"font-family"),n("span",{class:"token punctuation"},":"),s(" Tahoma"),n("span",{class:"token punctuation"},","),s(" Verdana"),n("span",{class:"token punctuation"},","),s(" Arial"),n("span",{class:"token punctuation"},","),s(" sans-serif"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[s("      "),n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"line"},"    ")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("style")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("head")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("body")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("h1")]),n("span",{class:"token punctuation"},">")]),s("An error occurred."),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("h1")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("      Sorry, the page you are looking for is currently unavailable."),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("br")]),s(),n("span",{class:"token punctuation"},"/>")])]),s(`
`),n("span",{class:"line"},"      Please try again later."),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},"      If you are the system administrator of this resource then you should check"),s(`
`),n("span",{class:"line"},"      the error log for details."),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("em")]),n("span",{class:"token punctuation"},">")]),s("Faithfully yours, nginx."),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("em")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("body")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("html")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"})])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),F=n("h2",{id:"参考",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#参考"},[n("span",null,"参考")])],-1),L={href:"https://www.docker.com/blog/how-to-use-the-official-nginx-docker-image/",target:"_blank",rel:"noopener noreferrer"},q={href:"https://cloud.tencent.com/developer/article/2015581",target:"_blank",rel:"noopener noreferrer"},B={href:"https://zhuanlan.zhihu.com/p/609441551",target:"_blank",rel:"noopener noreferrer"},O={href:"https://blog.csdn.net/weixin_34608222/article/details/113537311",target:"_blank",rel:"noopener noreferrer"};function S(H,U){const l=c("router-link"),p=c("RouteLink"),i=c("ExternalLinkIcon"),t=c("CodeGroupItem"),o=c("CodeGroup");return d(),m("div",null,[h,n("nav",g,[n("ul",null,[n("li",null,[a(l,{to:"#目录"},{default:e(()=>[s("目录")]),_:1})]),n("li",null,[a(l,{to:"#_1-准备工作"},{default:e(()=>[s("1. 准备工作")]),_:1})]),n("li",null,[a(l,{to:"#_2-主机创建文件夹-方便对容器配置文件等进行修改"},{default:e(()=>[s("2. 主机创建文件夹，方便对容器配置文件等进行修改")]),_:1})]),n("li",null,[a(l,{to:"#_3-创建文件"},{default:e(()=>[s("3. 创建文件")]),_:1})]),n("li",null,[a(l,{to:"#_3-创建网络-方便与其他容器互联"},{default:e(()=>[s("3. 创建网络，方便与其他容器互联")]),_:1})]),n("li",null,[a(l,{to:"#_5-创建容器"},{default:e(()=>[s("5. 创建容器")]),_:1})]),n("li",null,[a(l,{to:"#_4-验证是否成功"},{default:e(()=>[s("4. 验证是否成功")]),_:1})]),n("li",null,[a(l,{to:"#附录"},{default:e(()=>[b,s(" 附录")]),_:1}),n("ul",null,[n("li",null,[a(l,{to:"#nginx-配置"},{default:e(()=>[s("Nginx 配置")]),_:1})]),n("li",null,[a(l,{to:"#服务器配置"},{default:e(()=>[s("服务器配置")]),_:1})]),n("li",null,[a(l,{to:"#网页文件"},{default:e(()=>[s("网页文件")]),_:1})]),n("li",null,[a(l,{to:"#报错文件"},{default:e(()=>[s("报错文件")]),_:1})])])]),n("li",null,[a(l,{to:"#参考"},{default:e(()=>[s("参考")]),_:1})])])]),v,n("ul",_,[f,n("li",x,[y,s(),a(p,{to:"/blogs/platform/docker/%E6%9C%8D%E5%8A%A1%E5%99%A8Ubuntu%2022.04%20%E5%AE%89%E8%A3%85Docker.html"},{default:e(()=>[s("安装 docker")]),_:1})])]),w,n("ul",null,[n("li",null,[n("a",N,[s("容器技术（二）：Docker Network 基础"),a(i)])])]),D,n("ul",null,[E,n("li",null,[s("更多配置，"),a(p,{to:"/blogs/developer/backend/Nginx%E9%85%8D%E7%BD%AE.html"},{default:e(()=>[s("请参考")]),_:1})])]),j,a(o,null,{default:e(()=>[a(t,{title:"输入"},{default:e(()=>[C]),_:1}),a(t,{title:"输出"},{default:e(()=>[A]),_:1})]),_:1}),I,a(o,null,{default:e(()=>[a(t,{title:"输入"},{default:e(()=>[$]),_:1}),a(t,{title:"输出"},{default:e(()=>[P]),_:1})]),_:1}),T,a(o,null,{default:e(()=>[a(t,{title:"输入"},{default:e(()=>[R]),_:1}),a(t,{title:"输出"},{default:e(()=>[z]),_:1})]),_:1}),G,a(o,null,{default:e(()=>[a(t,{title:"输入"},{default:e(()=>[V]),_:1}),a(t,{title:"输出"},{default:e(()=>[W]),_:1})]),_:1}),F,n("ul",null,[n("li",null,[n("a",L,[s("How to Use the NGINX Docker Official Image"),a(i)])]),n("li",null,[n("a",q,[s("Docker 安装 Nginx 容器 (完整详细版)"),a(i)])]),n("li",null,[n("a",B,[s("用 Docker 部署 nginx"),a(i)])]),n("li",null,[n("a",O,[s("docker --net 详解_Docker 网络通信"),a(i)])])])])}const J=r(k,[["render",S],["__file","DockerbushuNginx.html.vue"]]),M=JSON.parse('{"path":"/blogs/platform/docker/DockerbushuNginx.html","title":"Docker部署Nginx","lang":"zh-CN","frontmatter":{"title":"Docker部署Nginx","date":"2023/09/20 21:00:00","tags":["项目部署"],"categories":["nginx","docker"]},"headers":[{"level":2,"title":"目录","slug":"目录","link":"#目录","children":[]},{"level":2,"title":"1. 准备工作","slug":"_1-准备工作","link":"#_1-准备工作","children":[]},{"level":2,"title":"2. 主机创建文件夹，方便对容器配置文件等进行修改","slug":"_2-主机创建文件夹-方便对容器配置文件等进行修改","link":"#_2-主机创建文件夹-方便对容器配置文件等进行修改","children":[]},{"level":2,"title":"3. 创建文件","slug":"_3-创建文件","link":"#_3-创建文件","children":[]},{"level":2,"title":"3. 创建网络，方便与其他容器互联","slug":"_3-创建网络-方便与其他容器互联","link":"#_3-创建网络-方便与其他容器互联","children":[]},{"level":2,"title":"5. 创建容器","slug":"_5-创建容器","link":"#_5-创建容器","children":[]},{"level":2,"title":"4. 验证是否成功","slug":"_4-验证是否成功","link":"#_4-验证是否成功","children":[]},{"level":2,"title":"附录","slug":"附录","link":"#附录","children":[{"level":3,"title":"Nginx 配置","slug":"nginx-配置","link":"#nginx-配置","children":[]},{"level":3,"title":"服务器配置","slug":"服务器配置","link":"#服务器配置","children":[]},{"level":3,"title":"网页文件","slug":"网页文件","link":"#网页文件","children":[]},{"level":3,"title":"报错文件","slug":"报错文件","link":"#报错文件","children":[]}]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1732772000000,"updatedTime":1744078224000,"contributors":[{"name":"ReWi","email":"RejoiceWindow@yeah.net","commits":3},{"name":"ReWi","email":"RejoiceWindow@yeah.com","commits":2}]},"filePathRelative":"blogs/platform/docker/Docker部署Nginx.md"}');export{J as comp,M as data};
