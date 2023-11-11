import{_ as n,o as e,c as s,a}from"./app-6d65bf83.js";const i={},d=a(`<h2 id="快速开始" tabindex="-1"><a class="header-anchor" href="#快速开始" aria-hidden="true">#</a> 快速开始</h2><p><strong>npx</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 初始化，并选择 2.x</span>
npx @vuepress-reco/theme-cli init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>npm</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 初始化，并选择 2.x</span>
<span class="token function">npm</span> <span class="token function">install</span> @vuepress-reco/theme-cli@1.0.7 <span class="token parameter variable">-g</span>
theme-cli init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>yarn</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 初始化，并选择 2.x</span>
<span class="token function">yarn</span> global <span class="token function">add</span> @vuepress-reco/theme-cli@1.0.7
theme-cli init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="手动安装" tabindex="-1"><a class="header-anchor" href="#手动安装" aria-hidden="true">#</a> 手动安装</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> vuepress@next vuepress-theme-reco@next --save-dev

<span class="token comment"># or</span>
<span class="token function">yarn</span> <span class="token function">add</span> vuepress@next vuepress-theme-reco@next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="rewi-怿窗の博客" tabindex="-1"><a class="header-anchor" href="#rewi-怿窗の博客" aria-hidden="true">#</a> <strong><em>ReWi 怿窗の博客</em></strong></h2><h2 id="把项目从github上克隆下来" tabindex="-1"><a class="header-anchor" href="#把项目从github上克隆下来" aria-hidden="true">#</a> 把项目从github上克隆下来</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> clone git@github.com:Re-Wi/VuepressReWi.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="进入项目目录" tabindex="-1"><a class="header-anchor" href="#进入项目目录" aria-hidden="true">#</a> 进入项目目录</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> VuepressReWi
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="安装依赖" tabindex="-1"><a class="header-anchor" href="#安装依赖" aria-hidden="true">#</a> 安装依赖</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span>  
<span class="token comment"># or</span>
<span class="token function">npm</span> <span class="token function">install</span>
<span class="token comment"># or</span>
cnpm <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="启动项目" tabindex="-1"><a class="header-anchor" href="#启动项目" aria-hidden="true">#</a> 启动项目</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> dev 
<span class="token comment"># or</span>
<span class="token function">npm</span> run dev
<span class="token comment"># or</span>
cnpm run dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="其他" tabindex="-1"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h2><h2 id="生成静态文件" tabindex="-1"><a class="header-anchor" href="#生成静态文件" aria-hidden="true">#</a> 生成静态文件</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> build 
<span class="token comment"># or</span>
<span class="token function">npm</span> run build
<span class="token comment"># or</span>
cnpm run build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="运行发布命令-右键-git-bush-here" tabindex="-1"><a class="header-anchor" href="#运行发布命令-右键-git-bush-here" aria-hidden="true">#</a> 运行发布命令:右键，Git Bush Here</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> deploy 
<span class="token comment"># or</span>
<span class="token function">npm</span> run deploy
<span class="token comment"># or</span>
cnpm run deploy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="提交代码" tabindex="-1"><a class="header-anchor" href="#提交代码" aria-hidden="true">#</a> 提交代码</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> push 
<span class="token comment"># or</span>
<span class="token function">npm</span> run push
<span class="token comment"># or</span>
cnpm run push
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,25),l=[d];function r(c,t){return e(),s("div",null,l)}const u=n(i,[["render",r],["__file","README.en.html.vue"]]);export{u as default};
