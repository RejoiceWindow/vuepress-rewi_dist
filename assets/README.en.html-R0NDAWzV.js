import{_ as s,o as n,c as e,a}from"./app-CAyVG32v.js";const i={},l=a(`<h2 id="快速开始" tabindex="-1"><a class="header-anchor" href="#快速开始"><span>快速开始</span></a></h2><p><strong>npx</strong></p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token comment"># 初始化，并选择 2.x</span></span>
<span class="line">npx @vuepress-reco/theme-cli init</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>npm</strong></p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token comment"># 初始化，并选择 2.x</span></span>
<span class="line"><span class="token function">npm</span> <span class="token function">install</span> @vuepress-reco/theme-cli@1.0.7 <span class="token parameter variable">-g</span></span>
<span class="line">theme-cli init</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>yarn</strong></p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token comment"># 初始化，并选择 2.x</span></span>
<span class="line"><span class="token function">yarn</span> global <span class="token function">add</span> @vuepress-reco/theme-cli@1.0.7</span>
<span class="line">theme-cli init</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="手动安装" tabindex="-1"><a class="header-anchor" href="#手动安装"><span>手动安装</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token function">npm</span> <span class="token function">install</span> vuepress@next vuepress-theme-reco@next --save-dev</span>
<span class="line"></span>
<span class="line"><span class="token comment"># or</span></span>
<span class="line"><span class="token function">yarn</span> <span class="token function">add</span> vuepress@next vuepress-theme-reco@next</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="rewi-怿窗の博客" tabindex="-1"><a class="header-anchor" href="#rewi-怿窗の博客"><span><strong><em>ReWi 怿窗の博客</em></strong></span></a></h2><h2 id="把项目从-github-上克隆下来" tabindex="-1"><a class="header-anchor" href="#把项目从-github-上克隆下来"><span>把项目从 github 上克隆下来</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token function">git</span> clone git@github.com:Re-Wi/VuepressReWi.git</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="进入项目目录" tabindex="-1"><a class="header-anchor" href="#进入项目目录"><span>进入项目目录</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token builtin class-name">cd</span> VuepressReWi</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="安装依赖" tabindex="-1"><a class="header-anchor" href="#安装依赖"><span>安装依赖</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token function">yarn</span></span>
<span class="line"><span class="token comment"># or</span></span>
<span class="line"><span class="token function">npm</span> <span class="token function">install</span></span>
<span class="line"><span class="token comment"># or</span></span>
<span class="line">cnpm <span class="token function">install</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="启动项目" tabindex="-1"><a class="header-anchor" href="#启动项目"><span>启动项目</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token function">yarn</span> dev</span>
<span class="line"><span class="token comment"># or</span></span>
<span class="line"><span class="token function">npm</span> run dev</span>
<span class="line"><span class="token comment"># or</span></span>
<span class="line">cnpm run dev</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="其他" tabindex="-1"><a class="header-anchor" href="#其他"><span>其他</span></a></h2><h2 id="生成静态文件" tabindex="-1"><a class="header-anchor" href="#生成静态文件"><span>生成静态文件</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token function">yarn</span> build</span>
<span class="line"><span class="token comment"># or</span></span>
<span class="line"><span class="token function">npm</span> run build</span>
<span class="line"><span class="token comment"># or</span></span>
<span class="line">cnpm run build</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="运行发布命令-右键-git-bush-here" tabindex="-1"><a class="header-anchor" href="#运行发布命令-右键-git-bush-here"><span>运行发布命令:右键，Git Bush Here</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token function">yarn</span> deploy</span>
<span class="line"><span class="token comment"># or</span></span>
<span class="line"><span class="token function">npm</span> run deploy</span>
<span class="line"><span class="token comment"># or</span></span>
<span class="line">cnpm run deploy</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="提交代码" tabindex="-1"><a class="header-anchor" href="#提交代码"><span>提交代码</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token function">yarn</span> push</span>
<span class="line"><span class="token comment"># or</span></span>
<span class="line"><span class="token function">npm</span> run push</span>
<span class="line"><span class="token comment"># or</span></span>
<span class="line">cnpm run push</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,25),t=[l];function c(r,d){return n(),e("div",null,t)}const h=s(i,[["render",c],["__file","README.en.html.vue"]]),u=JSON.parse('{"path":"/README.en.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"快速开始","slug":"快速开始","link":"#快速开始","children":[]},{"level":2,"title":"手动安装","slug":"手动安装","link":"#手动安装","children":[]},{"level":2,"title":"ReWi 怿窗の博客","slug":"rewi-怿窗の博客","link":"#rewi-怿窗の博客","children":[]},{"level":2,"title":"把项目从 github 上克隆下来","slug":"把项目从-github-上克隆下来","link":"#把项目从-github-上克隆下来","children":[]},{"level":2,"title":"进入项目目录","slug":"进入项目目录","link":"#进入项目目录","children":[]},{"level":2,"title":"安装依赖","slug":"安装依赖","link":"#安装依赖","children":[]},{"level":2,"title":"启动项目","slug":"启动项目","link":"#启动项目","children":[]},{"level":2,"title":"其他","slug":"其他","link":"#其他","children":[]},{"level":2,"title":"生成静态文件","slug":"生成静态文件","link":"#生成静态文件","children":[]},{"level":2,"title":"运行发布命令:右键，Git Bush Here","slug":"运行发布命令-右键-git-bush-here","link":"#运行发布命令-右键-git-bush-here","children":[]},{"level":2,"title":"提交代码","slug":"提交代码","link":"#提交代码","children":[]}],"git":{"createdTime":1732772000000,"updatedTime":1735198401000,"contributors":[{"name":"ReWi","email":"RejoiceWindow@yeah.net","commits":3}]},"filePathRelative":"README.en.md"}');export{h as comp,u as data};