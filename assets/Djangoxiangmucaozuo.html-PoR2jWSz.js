import{_ as a,o as e,c as s,a as n}from"./app-CAyVG32v.js";const i={},l=n(`<h1 id="导出依赖文件" tabindex="-1"><a class="header-anchor" href="#导出依赖文件"><span>导出依赖文件</span></a></h1><p>打开命令提示符，在某条路径下输入</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line">pip freeze <span class="token operator">&gt;</span> ./requirements.txt</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h1 id="开发环境安装" tabindex="-1"><a class="header-anchor" href="#开发环境安装"><span>开发环境安装</span></a></h1><p><em><strong>- Windows and Linux -</strong></em></p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token comment"># python -m pip install Django</span></span>
<span class="line">pip <span class="token function">install</span> <span class="token parameter variable">-r</span> requirements.txt <span class="token parameter variable">-i</span> https://mirrors.aliyun.com/pypi/simple/ --trusted-host mirrors.aliyun.com</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="creating-a-project" tabindex="-1"><a class="header-anchor" href="#creating-a-project"><span>Creating a project</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token comment"># django-admin startproject mysite MasterReWi</span></span>
<span class="line">django-admin startproject MasterReWi</span>
<span class="line"><span class="token comment"># python manage.py runserver</span></span>
<span class="line"><span class="token comment"># python manage.py runserver 8080</span></span>
<span class="line">python manage.py runserver <span class="token number">0.0</span>.0.0:8000</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>http://localhost:8000/</p></blockquote><h2 id="creating-the-polls-app" tabindex="-1"><a class="header-anchor" href="#creating-the-polls-app"><span>Creating the Polls app</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line">python manage.py startapp polls</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="database-setup" tabindex="-1"><a class="header-anchor" href="#database-setup"><span>Database setup</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token comment"># python manage.py makemigrations polls</span></span>
<span class="line"><span class="token comment"># python manage.py sqlmigrate polls 0001</span></span>
<span class="line">python manage.py makemigrations</span>
<span class="line">python manage.py migrate</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="creating-an-admin-user" tabindex="-1"><a class="header-anchor" href="#creating-an-admin-user"><span>Creating an admin user</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token comment"># python manage.py createsuperuser --username admin --email admin@example.com</span></span>
<span class="line"></span>
<span class="line">python manage.py createsuperuser</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Username: admin</span></span>
<span class="line"><span class="token comment"># Email address: admin@example.com</span></span>
<span class="line"><span class="token comment"># Password: **********</span></span>
<span class="line"><span class="token comment"># Password (again): *********</span></span>
<span class="line"><span class="token comment"># Superuser created successfully.</span></span>
<span class="line"></span>
<span class="line">python manage.py runserver</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>http://127.0.0.1:8000/admin/</p></blockquote><h1 id="faq" tabindex="-1"><a class="header-anchor" href="#faq"><span>FAQ</span></a></h1><h2 id="如果关闭debug模式后-请执行以下命令将simpleui静态文件静态文件克隆到根目录" tabindex="-1"><a class="header-anchor" href="#如果关闭debug模式后-请执行以下命令将simpleui静态文件静态文件克隆到根目录"><span>如果关闭debug模式后，请执行以下命令将simpleui静态文件静态文件克隆到根目录</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line">python manage.py collectstatic</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,19),t=[l];function r(p,c){return e(),s("div",null,t)}const o=a(i,[["render",r],["__file","Djangoxiangmucaozuo.html.vue"]]),m=JSON.parse('{"path":"/blogs/developer/python/Djangoxiangmucaozuo.html","title":"Django项目操作","lang":"zh-CN","frontmatter":{"title":"Django项目操作","date":"2024-11-25T19:09:00.000Z","tags":["django","web"],"categories":["Python"]},"headers":[{"level":2,"title":"Creating a project","slug":"creating-a-project","link":"#creating-a-project","children":[]},{"level":2,"title":"Creating the Polls app","slug":"creating-the-polls-app","link":"#creating-the-polls-app","children":[]},{"level":2,"title":"Database setup","slug":"database-setup","link":"#database-setup","children":[]},{"level":2,"title":"Creating an admin user","slug":"creating-an-admin-user","link":"#creating-an-admin-user","children":[]},{"level":2,"title":"如果关闭debug模式后，请执行以下命令将simpleui静态文件静态文件克隆到根目录","slug":"如果关闭debug模式后-请执行以下命令将simpleui静态文件静态文件克隆到根目录","link":"#如果关闭debug模式后-请执行以下命令将simpleui静态文件静态文件克隆到根目录","children":[]}],"git":{"createdTime":1732772000000,"updatedTime":1735198401000,"contributors":[{"name":"ReWi","email":"RejoiceWindow@yeah.net","commits":3}]},"filePathRelative":"blogs/developer/python/Django项目操作.md"}');export{o as comp,m as data};