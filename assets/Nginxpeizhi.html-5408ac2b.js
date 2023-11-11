import{_ as c,r as l,o,c as d,b as n,e as a,w as t,d as s,a as p}from"./app-6d65bf83.js";const r={},v=n("h2",{id:"目录",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#目录","aria-hidden":"true"},"#"),s(" 目录")],-1),u={class:"table-of-contents"},k=n("h2",{id:"简单配置",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#简单配置","aria-hidden":"true"},"#"),s(" 简单配置")],-1),m={href:"https://www.cnblogs.com/zhongweiv/p/nginx_conf.html",target:"_blank",rel:"noopener noreferrer"},b=p(`<div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token comment">#user nobody;</span>
<span class="token directive"><span class="token keyword">worker_processes</span> auto</span><span class="token punctuation">;</span>
 
<span class="token directive"><span class="token keyword">error_log</span> /var/log/nginx/error.log</span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">pid</span> /run/nginx.pid</span><span class="token punctuation">;</span>
 
 
<span class="token directive"><span class="token keyword">events</span></span> <span class="token punctuation">{</span>
  <span class="token directive"><span class="token keyword">worker_connections</span> <span class="token number">1024</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
 
 
<span class="token directive"><span class="token keyword">http</span></span> <span class="token punctuation">{</span>
  <span class="token directive"><span class="token keyword">include</span>   mime.types</span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">default_type</span> application/octet-stream</span><span class="token punctuation">;</span>
  
  <span class="token directive"><span class="token keyword">sendfile</span>        <span class="token boolean">on</span></span><span class="token punctuation">;</span>
  <span class="token comment">#tcp_nopush     on;</span>
 
  <span class="token comment">#keepalive_timeout  0;</span>
  <span class="token directive"><span class="token keyword">keepalive_timeout</span>  <span class="token number">65</span></span><span class="token punctuation">;</span>
 
  <span class="token comment">#nginx默认server，测试使用，不需要时可以删除</span>
  <span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">listen</span>  <span class="token number">80</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server_name</span> localhost</span><span class="token punctuation">;</span>
 
    <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
      <span class="token directive"><span class="token keyword">default_type</span> text/html</span><span class="token punctuation">;</span>
      <span class="token directive"><span class="token keyword">return</span> <span class="token number">200</span> <span class="token string">&#39;This is nginx!&#39;</span></span><span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>
 
    <span class="token directive"><span class="token keyword">error_page</span> <span class="token number">404</span> /404.html</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">location</span> = /40x.html</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
 
    <span class="token directive"><span class="token keyword">error_page</span> <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span> /50x.html</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">location</span> = /50x.html</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置多个conf文件" tabindex="-1"><a class="header-anchor" href="#配置多个conf文件" aria-hidden="true">#</a> 配置多个conf文件</h2>`,2),_={href:"https://blog.csdn.net/M_Jin/article/details/105003921",target:"_blank",rel:"noopener noreferrer"},w={href:"https://www.cnblogs.com/zhongweiv/p/nginx_conf.html",target:"_blank",rel:"noopener noreferrer"},y=p(`<p>我的<code>nginx.conf</code>路径：/etc/nginx/nginx.conf 在 /etc/nginx/下创建 conf.d/，用来存 自定义conf文件</p><p>在 nginx.conf 加入神秘代码</p><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token comment"># 配置允许运行nginx服务器的用户和用户组</span>
<span class="token comment">#user  nobody;</span>
<span class="token comment">#user  www www;</span>
<span class="token comment">## 配置允许nginx进程生成的worker process数量，一般与CPU核数相等 </span>
<span class="token directive"><span class="token keyword">worker_processes</span>  <span class="token number">2</span></span><span class="token punctuation">;</span>

<span class="token comment">## worker进程最大打开文件数，解决&quot;too many open files&quot;问题</span>
<span class="token comment">#worker_rlimit_nofile 100000</span>

<span class="token comment">## 运行错误日志存放路径</span>
<span class="token directive"><span class="token keyword">error_log</span>  /home/admin/logs/error.log</span><span class="token punctuation">;</span>
<span class="token comment">#error_log  logs/error.log  notice;</span>
<span class="token comment">#error_log  logs/error.log  info;</span>

<span class="token comment">## pid文件存放路径和名称</span>
<span class="token comment"># pid       logs/nginx.pid;</span>

<span class="token directive"><span class="token keyword">events</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">use</span> epoll</span><span class="token punctuation">;</span><span class="token comment">#指定nginx工作模式，nginx主要的工作模式有select、poll、kqueue、epoll</span>
    <span class="token comment"># 其中select、poll是标准工作模式，kqueue、epoll为高效工作模式，epoll用在Linux系统中，而kqueue用在BSD系统中</span>
    <span class="token directive"><span class="token keyword">worker_connections</span>  <span class="token number">2048</span></span><span class="token punctuation">;</span><span class="token comment">#指定单进程的最大连接数</span>
    <span class="token comment"># 并发总数是 worker_processes 和 worker_connections 的乘积</span>
    <span class="token comment"># 即 max_clients = worker_processes * worker_connections</span>
    <span class="token comment"># 在设置了反向代理的情况下，max_clients = worker_processes * worker_connections / 4  为什么</span>
    <span class="token comment"># 为什么上面反向代理要除以4，应该说是一个经验值</span>
    <span class="token comment"># 根据以上条件，正常情况下的Nginx Server可以应付的最大连接数为：4 * 8000 = 32000</span>
    <span class="token comment"># worker_connections 值的设置跟物理内存大小有关</span>
    <span class="token comment"># 因为并发受IO约束，max_clients的值须小于系统可以打开的最大文件数</span>
    <span class="token comment"># 而系统可以打开的最大文件数和内存大小成正比，一般1GB内存的机器上可以打开的文件数大约是10万左右</span>
    <span class="token comment"># 我们来看看360M内存的VPS可以打开的文件句柄数是多少：</span>
    <span class="token comment"># $ cat /proc/sys/fs/file-max</span>
    <span class="token comment"># 输出 34336</span>
    <span class="token comment"># 32000 &lt; 34336，即并发连接总数小于系统可以打开的文件句柄总数，这样就在操作系统可以承受的范围之内</span>
    <span class="token comment"># 所以，worker_connections 的值需根据 worker_processes 进程数目和系统可以打开的最大文件总数进行适当地进行设置</span>
    <span class="token comment"># 使得并发总数小于操作系统可以打开的最大文件数目</span>
    <span class="token comment"># 其实质也就是根据主机的物理CPU和内存进行配置</span>
    <span class="token comment"># 当然，理论上的并发总数可能会和实际有所偏差，因为主机还有其他的工作进程需要消耗系统资源。</span>
    <span class="token comment"># ulimit -SHn 65535</span>
<span class="token punctuation">}</span>


<span class="token comment">## http配置</span>
<span class="token directive"><span class="token keyword">http</span></span> <span class="token punctuation">{</span>
    <span class="token comment">#设定mime类型,类型由mime.type文件定义</span>
    <span class="token comment"># include    mime.types;</span>
    <span class="token directive"><span class="token keyword">default_type</span>  application/octet-stream</span><span class="token punctuation">;</span>

    <span class="token comment">## 日志打印格式</span>
    <span class="token directive"><span class="token keyword">log_format</span>  main  <span class="token string">&#39;<span class="token variable">$remote_addr</span> - <span class="token variable">$remote_user</span> [<span class="token variable">$time_local]</span> &quot;<span class="token variable">$request</span>&quot; &#39;</span>
                      <span class="token string">&#39;<span class="token variable">$status</span> <span class="token variable">$body_bytes_sent</span> &quot;<span class="token variable">$http_referer</span>&quot; &#39;</span>
                      <span class="token string">&#39;&quot;<span class="token variable">$http_user_agent</span>&quot; &quot;<span class="token variable">$http_x_forwarded_for</span>&quot;&#39;</span></span><span class="token punctuation">;</span>

    <span class="token comment">## 访问日志存放路径</span>
    <span class="token directive"><span class="token keyword">access_log</span>  /home/admin/logs/access.log  main</span><span class="token punctuation">;</span>

    <span class="token comment">## 加快文件读写效率</span>
    <span class="token comment">#sendfile 指令指定 nginx 是否调用 sendfile 函数（zero copy 方式）来输出文件，</span>
    <span class="token comment">#对于普通应用，必须设为 on,</span>
    <span class="token comment">#如果用来进行下载等应用磁盘IO重负载应用，可设置为 off，</span>
    <span class="token comment">#以平衡磁盘与网络I/O处理速度，降低系统的uptime.</span>
    <span class="token directive"><span class="token keyword">sendfile</span>     <span class="token boolean">on</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">tcp_nopush</span>    <span class="token boolean">on</span></span><span class="token punctuation">;</span>  <span class="token comment"># tcp_nopush，tcp_nodelay设置on,防止网络阻塞</span>

    <span class="token comment">#连接超时时间</span>
    <span class="token comment">#keepalive_timeout  0;</span>
    <span class="token directive"><span class="token keyword">keepalive_timeout</span>  <span class="token number">65</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">tcp_nodelay</span>     <span class="token boolean">on</span></span><span class="token punctuation">;</span>

    <span class="token comment">#开启gzip压缩，超过1024Kb才压缩</span>
    <span class="token directive"><span class="token keyword">gzip</span>  <span class="token boolean">on</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">gzip_disable</span> <span class="token string">&quot;MSIE [1-6].&quot;</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">gzip_min_length</span>  <span class="token number">1024</span></span><span class="token punctuation">;</span> <span class="token comment">#设置允许压缩的页面最小字节数</span>
    <span class="token directive"><span class="token keyword">gzip_buffers</span>    <span class="token number">4</span>  <span class="token number">16k</span></span><span class="token punctuation">;</span> <span class="token comment">#指定内存空间来存贮压缩结果，这里指定4个单位为16k的内存来存储压缩结果，即总大小为64k</span>
    <span class="token comment"># gzip_http_version  1.1;#指定识别HTTP协议版本，默认是1.1</span>
    <span class="token directive"><span class="token keyword">gzip_comp_level</span>  <span class="token number">2</span></span><span class="token punctuation">;</span><span class="token comment">#指定gzip压缩比，1 压缩比最小，处理速度最快；9 压缩比最大，传输速度快，但处理最慢，也比较消耗CPU资源</span>
    <span class="token directive"><span class="token keyword">gzip_types</span>  text/plain application/x-javascript text/css application/xml</span><span class="token punctuation">;</span><span class="token comment">#指定压缩的类型，无论是否指定，“text/html”类型总是会被压缩</span>
    <span class="token directive"><span class="token keyword">gzip_vary</span>  <span class="token boolean">on</span></span><span class="token punctuation">;</span><span class="token comment">#该选项开启可以让前端的缓存服务器缓存经过gzip压缩的页面，例如，用Varnish缓存经过Nginx压缩的数据</span>
   
   <span class="token comment">#设定请求缓冲</span>
    <span class="token directive"><span class="token keyword">client_header_buffer_size</span>    <span class="token number">128k</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">large_client_header_buffers</span>  <span class="token number">4</span> <span class="token number">128k</span></span><span class="token punctuation">;</span>

    <span class="token comment"># http_proxy 设置</span>
    <span class="token directive"><span class="token keyword">client_max_body_size</span>   <span class="token number">10m</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">client_body_buffer_size</span>   <span class="token number">128k</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">proxy_connect_timeout</span>   <span class="token number">75</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">proxy_send_timeout</span>   <span class="token number">75</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">proxy_read_timeout</span>   <span class="token number">75</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">proxy_buffer_size</span>   <span class="token number">4k</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">proxy_buffers</span>   <span class="token number">4</span> <span class="token number">32k</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">proxy_busy_buffers_size</span>   <span class="token number">64k</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">proxy_temp_file_write_size</span>  <span class="token number">64k</span></span><span class="token punctuation">;</span>
    <span class="token comment"># proxy_temp_path   /usr/local/nginx/proxy_temp 1 2;</span>
    
    <span class="token directive"><span class="token keyword">server_tokens</span> <span class="token boolean">off</span></span><span class="token punctuation">;</span><span class="token comment">#隐藏Nginx版本号</span>

    <span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">listen</span>       <span class="token number">8000</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">server_name</span>  localhost</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
            <span class="token directive"><span class="token keyword">root</span> /mnt</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment"># 很重要的虚拟主机配置</span>
    <span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">listen</span>       <span class="token number">80</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">server_name</span>  www.rewi.cc</span><span class="token punctuation">;</span>
        
        <span class="token directive"><span class="token keyword">charset</span> utf-8</span><span class="token punctuation">;</span>
        
        <span class="token directive"><span class="token keyword">root</span>   /home/admin/www</span><span class="token punctuation">;</span>

        <span class="token comment">#access_log  logs/host.access.log  main;</span>

        <span class="token comment">#对 / 所有做负载均衡+反向代理</span>
        <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
            <span class="token directive"><span class="token keyword">root</span>   html</span><span class="token punctuation">;</span>
            <span class="token directive"><span class="token keyword">index</span>  index.jsp index.html index.htm</span><span class="token punctuation">;</span>
            <span class="token comment"># proxy_pass        http://backend;  </span>
            <span class="token directive"><span class="token keyword">proxy_redirect</span> <span class="token boolean">off</span></span><span class="token punctuation">;</span>
            <span class="token comment"># 后端的Web服务器可以通过X-Forwarded-For获取用户真实IP</span>
            <span class="token directive"><span class="token keyword">proxy_set_header</span>  Host  <span class="token variable">$host</span></span><span class="token punctuation">;</span>
            <span class="token directive"><span class="token keyword">proxy_set_header</span>  X-Real-IP  <span class="token variable">$remote_addr</span></span><span class="token punctuation">;</span>  
            <span class="token directive"><span class="token keyword">proxy_set_header</span>  X-Forwarded-For  <span class="token variable">$proxy_add_x_forwarded_for</span></span><span class="token punctuation">;</span>
            <span class="token directive"><span class="token keyword">proxy_next_upstream</span> error timeout invalid_header http_500 http_502 http_503 http_504</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        
        <span class="token comment">#静态文件，nginx自己处理，不去backend请求tomcat</span>
        <span class="token directive"><span class="token keyword">location</span>  ~* /download/</span> <span class="token punctuation">{</span>  
            <span class="token directive"><span class="token keyword">root</span> /home/admin/resource</span><span class="token punctuation">;</span>  
        <span class="token punctuation">}</span>

        <span class="token directive"><span class="token keyword">location</span> ~ .*\\.(gif|jpg|jpeg|bmp|png|ico|txt|js|css)$</span>   
        <span class="token punctuation">{</span>   
            <span class="token directive"><span class="token keyword">root</span> /home/admin/static</span><span class="token punctuation">;</span>   
            <span class="token directive"><span class="token keyword">expires</span>      <span class="token number">7d</span></span><span class="token punctuation">;</span> 
        <span class="token punctuation">}</span>

        <span class="token directive"><span class="token keyword">location</span> /nginx_status</span> <span class="token punctuation">{</span>
            <span class="token directive"><span class="token keyword">stub_status</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span>
            <span class="token directive"><span class="token keyword">access_log</span> <span class="token boolean">off</span></span><span class="token punctuation">;</span>
            <span class="token directive"><span class="token keyword">allow</span> 192.168.10.0/24</span><span class="token punctuation">;</span>
            <span class="token directive"><span class="token keyword">deny</span> all</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        
        <span class="token comment">#error_page  404              /404.html;</span>

        <span class="token comment"># redirect server error pages to the static page /50x.html</span>
        <span class="token comment">#</span>
        <span class="token directive"><span class="token keyword">error_page</span>   <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span>  /50x.html</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">location</span> = /50x.html</span> <span class="token punctuation">{</span>
            <span class="token directive"><span class="token keyword">root</span>   html</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment"># proxy the PHP scripts to Apache listening on 127.0.0.1:80</span>
        <span class="token comment">#</span>
        <span class="token comment">#location ~ \\.php$ {</span>
        <span class="token comment">#    proxy_pass   http://127.0.0.1;</span>
        <span class="token comment">#}</span>

        <span class="token comment"># pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000</span>
        <span class="token comment">#</span>
        <span class="token comment">#location ~ \\.php$ {</span>
        <span class="token comment">#    root           html;</span>
        <span class="token comment">#    fastcgi_pass   127.0.0.1:9000;</span>
        <span class="token comment">#    fastcgi_index  index.php;</span>
        <span class="token comment">#    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;</span>
        <span class="token comment">#    include        fastcgi_params;</span>
        <span class="token comment">#}</span>
        
        
        <span class="token comment"># deny access to .htaccess files, if Apache&#39;s document root</span>
        <span class="token comment"># concurs with nginx&#39;s one</span>
        <span class="token directive"><span class="token keyword">location</span> ~ /\\.ht</span> <span class="token punctuation">{</span>
            <span class="token directive"><span class="token keyword">deny</span>  all</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token directive"><span class="token keyword">location</span> ~ ^/(WEB-INF)/</span> <span class="token punctuation">{</span>   
            <span class="token directive"><span class="token keyword">deny</span> all</span><span class="token punctuation">;</span>   
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
     <span class="token comment">## 其它虚拟主机，server 指令开始</span>
    <span class="token comment">## 在这里导入子配置文件！！！</span>
    <span class="token directive"><span class="token keyword">include</span> /home/admin/conf/*_nginx.conf</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="nginx-命令" tabindex="-1"><a class="header-anchor" href="#nginx-命令" aria-hidden="true">#</a> Nginx 命令</h2>`,4),h={href:"https://www.nginx.org.cn/article/detail/476/",target:"_blank",rel:"noopener noreferrer"},x=p(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>nginx <span class="token parameter variable">-s</span> quit <span class="token comment">#优雅地停止Nginx服务（即处理完所有请求后再停止服务）</span>
nginx <span class="token parameter variable">-s</span> reload <span class="token comment">#重新加载Nginx配置文件</span>
<span class="token comment">#强制停止Nginx服务</span>
nginx <span class="token parameter variable">-s</span> stop
nginx <span class="token parameter variable">-s</span> reopen <span class="token comment">#重启</span>
<span class="token comment">#检测配置文件是否有语法错误，然后退出</span>
nginx <span class="token parameter variable">-tc</span> XXX.conf
<span class="token comment">#设置配置文件(默认是:/etc/nginx/nginx.conf)</span>
nginx <span class="token parameter variable">-c</span> XXX.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vue-项目-配置" tabindex="-1"><a class="header-anchor" href="#vue-项目-配置" aria-hidden="true">#</a> Vue 项目 配置</h2>`,2),g={href:"https://blog.csdn.net/weixin_43314519/article/details/115151858",target:"_blank",rel:"noopener noreferrer"},f=p(`<div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">upstream</span> XXX_backend</span> <span class="token punctuation">{</span>
  <span class="token comment">#ip_hash;</span>
  <span class="token directive"><span class="token keyword">server</span>   localhost:XXXX max_fails=2 fail_timeout=30s</span> <span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
    <span class="token comment"># 需要被监听的端口号，前提是此端口号没有被占用，否则在重启 Nginx 时会报错</span>
    <span class="token directive"><span class="token keyword">listen</span>       <span class="token number">8888</span></span><span class="token punctuation">;</span>
    <span class="token comment"># 服务名称，无所谓</span>
    <span class="token directive"><span class="token keyword">server_name</span>  localhost</span><span class="token punctuation">;</span>

    <span class="token comment"># 上述端口指向的根目录</span>
    <span class="token directive"><span class="token keyword">root</span> /opt/asing1elife/teamnote</span><span class="token punctuation">;</span>
    <span class="token comment"># 项目根目录中指向项目首页</span>
    <span class="token directive"><span class="token keyword">index</span> index.html</span><span class="token punctuation">;</span>

    <span class="token directive"><span class="token keyword">client_max_body_size</span> <span class="token number">20m</span></span><span class="token punctuation">;</span> 
    <span class="token directive"><span class="token keyword">client_body_buffer_size</span> <span class="token number">128k</span></span><span class="token punctuation">;</span>

    <span class="token comment"># 根请求会指向的页面</span>
    <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
      <span class="token comment"># 此处的 @router 实际上是引用下面的转发，否则在 Vue 路由刷新时可能会抛出 404</span>
      <span class="token directive"><span class="token keyword">try_files</span> <span class="token variable">$uri</span> <span class="token variable">$uri</span>/ @router</span><span class="token punctuation">;</span>
      <span class="token comment"># 请求指向的首页</span>
      <span class="token directive"><span class="token keyword">index</span> index.html</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment"># 由于路由的资源不一定是真实的路径，无法找到具体文件</span>
    <span class="token comment"># 所以需要将请求重写到 index.html 中，然后交给真正的 Vue 路由处理请求资源</span>
    <span class="token directive"><span class="token keyword">location</span> @router</span> <span class="token punctuation">{</span>
      <span class="token directive"><span class="token keyword">rewrite</span> ^.*$ /index.html last</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment"># 关键步骤，这里表示将所有的 http://192.168.7.8:8888/teamnote/api/ 开头的请求都转发到下面 proxy_pass 指定的链接中</span>
    <span class="token comment"># 这里使用 /teamnote/api/ 而不是 /teamnote/ ，是因为前端项目本身的访问链接就是 http:192.168.7.8:8888/teamnote/</span>
    <span class="token comment"># 为了防止在访问页面时请求就被 Nginx 代理转发，这里需要更具体的配置，才能和前端访问请求区分开</span>
    <span class="token directive"><span class="token keyword">location</span> /teamnote/api/</span> <span class="token punctuation">{</span>
          <span class="token comment"># 后端的真实接口</span>
          <span class="token directive"><span class="token keyword">proxy_pass</span> http://192.168.7.8:2592/teamnote/api/</span><span class="token punctuation">;</span>
          <span class="token directive"><span class="token keyword">proxy_redirect</span> <span class="token boolean">off</span></span><span class="token punctuation">;</span>
          <span class="token directive"><span class="token keyword">proxy_set_header</span> Host <span class="token variable">$host</span></span><span class="token punctuation">;</span>
          <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Real-IP <span class="token variable">$remote_addr</span></span><span class="token punctuation">;</span>
          <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Forwarded-For <span class="token variable">$proxy_add_x_forwarded_for</span></span><span class="token punctuation">;</span>
          <span class="token directive"><span class="token keyword">proxy_set_header</span>   Cookie <span class="token variable">$http_cookie</span></span><span class="token punctuation">;</span>
          <span class="token comment"># for Ajax</span>
          <span class="token comment">#fastcgi_param HTTP_X_REQUESTED_WITH $http_x_requested_with;</span>
          <span class="token directive"><span class="token keyword">proxy_set_header</span> HTTP-X-REQUESTED-WITH <span class="token variable">$http_x_requested_with</span></span><span class="token punctuation">;</span>
          <span class="token directive"><span class="token keyword">proxy_set_header</span> HTTP_X_REQUESTED_WITH <span class="token variable">$http_x_requested_with</span></span><span class="token punctuation">;</span>
          <span class="token directive"><span class="token keyword">proxy_set_header</span> x-requested-with <span class="token variable">$http_x_requested_with</span></span><span class="token punctuation">;</span>
          <span class="token directive"><span class="token keyword">client_max_body_size</span> <span class="token number">10m</span></span><span class="token punctuation">;</span>
          <span class="token directive"><span class="token keyword">client_body_buffer_size</span> <span class="token number">128k</span></span><span class="token punctuation">;</span>
          <span class="token directive"><span class="token keyword">proxy_connect_timeout</span> <span class="token number">90</span></span><span class="token punctuation">;</span>
          <span class="token directive"><span class="token keyword">proxy_send_timeout</span> <span class="token number">90</span></span><span class="token punctuation">;</span>
          <span class="token directive"><span class="token keyword">proxy_read_timeout</span> <span class="token number">90</span></span><span class="token punctuation">;</span>
          <span class="token directive"><span class="token keyword">proxy_buffer_size</span> <span class="token number">128k</span></span><span class="token punctuation">;</span>
          <span class="token directive"><span class="token keyword">proxy_buffers</span> <span class="token number">32</span> <span class="token number">32k</span></span><span class="token punctuation">;</span>
          <span class="token directive"><span class="token keyword">proxy_busy_buffers_size</span> <span class="token number">128k</span></span><span class="token punctuation">;</span>
          <span class="token directive"><span class="token keyword">proxy_temp_file_write_size</span> <span class="token number">128k</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function z($,q){const e=l("router-link"),i=l("ExternalLinkIcon");return o(),d("div",null,[v,n("nav",u,[n("ul",null,[n("li",null,[a(e,{to:"#目录"},{default:t(()=>[s("目录")]),_:1})]),n("li",null,[a(e,{to:"#简单配置"},{default:t(()=>[s("简单配置")]),_:1})]),n("li",null,[a(e,{to:"#配置多个conf文件"},{default:t(()=>[s("配置多个conf文件")]),_:1})]),n("li",null,[a(e,{to:"#nginx-命令"},{default:t(()=>[s("Nginx 命令")]),_:1})]),n("li",null,[a(e,{to:"#vue-项目-配置"},{default:t(()=>[s("Vue 项目 配置")]),_:1})])])]),k,n("ul",null,[n("li",null,[n("a",m,[s("https://www.cnblogs.com/zhongweiv/p/nginx_conf.html"),a(i)])])]),b,n("ul",null,[n("li",null,[n("a",_,[s("https://blog.csdn.net/M_Jin/article/details/105003921"),a(i)])]),n("li",null,[n("a",w,[s("https://www.cnblogs.com/zhongweiv/p/nginx_conf.html"),a(i)])])]),y,n("ul",null,[n("li",null,[n("a",h,[s("https://www.nginx.org.cn/article/detail/476/"),a(i)])])]),x,n("ul",null,[n("li",null,[n("a",g,[s("https://blog.csdn.net/weixin_43314519/article/details/115151858"),a(i)])])]),f])}const N=c(r,[["render",z],["__file","Nginxpeizhi.html.vue"]]);export{N as default};
