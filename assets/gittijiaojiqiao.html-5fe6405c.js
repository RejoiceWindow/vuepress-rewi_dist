import{_ as t,r as l,o as c,c as o,b as n,d as s,e,a as i}from"./app-6d65bf83.js";const r={},d=n("h2",{id:"使用shell脚本提取package-json版本",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#使用shell脚本提取package-json版本","aria-hidden":"true"},"#"),s(" 使用shell脚本提取package.json版本")],-1),p={href:"http://www.longant.cn/zh-hans/node/6056",target:"_blank",rel:"noopener noreferrer"},u={href:"https://stackoverflow.com/questions/44833218/extract-package-json-version-using-shell-script",target:"_blank",rel:"noopener noreferrer"},m=i(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 方法一</span>
<span class="token assign-left variable">VERSION</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">node</span> <span class="token parameter variable">-e</span> &quot;<span class="token punctuation">(</span><span class="token function-name function">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> console.log<span class="token punctuation">(</span>require<span class="token punctuation">(</span><span class="token string">&#39;./package.json&#39;</span><span class="token punctuation">)</span>.version<span class="token variable">)</span></span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token string">&quot;)
# 方法二
sed &#39;s/.*&quot;</span>version<span class="token string">&quot;: &quot;</span><span class="token punctuation">\\</span><span class="token punctuation">(</span>.*<span class="token punctuation">\\</span><span class="token punctuation">)</span><span class="token string">&quot;.*/<span class="token entity" title="\\1">\\1</span>/;t;d&#39; ./package.json
# 方法三
NODE_VERSION=$(node -p -e &quot;require(&#39;./package.json&#39;).version&quot;</span><span class="token punctuation">)</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$NODE_VERSION</span>
<span class="token comment"># 方法四</span>
<span class="token function">awk</span> -F<span class="token string">&#39;&quot;&#39;</span> <span class="token string">&#39;/&quot;version&quot;: &quot;.+&quot;/{ print $4; exit; }&#39;</span> package.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="git-push-u-简单理解" tabindex="-1"><a class="header-anchor" href="#git-push-u-简单理解" aria-hidden="true">#</a> git push -u 简单理解</h2>`,2),v={href:"https://blog.csdn.net/weixin_48321825/article/details/124431351",target:"_blank",rel:"noopener noreferrer"},h=i(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>第一次提交需要加 -u参数后，
以后即可直接用git push代替git push origin master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="分支操作" tabindex="-1"><a class="header-anchor" href="#分支操作" aria-hidden="true">#</a> 分支操作</h2><h3 id="查看分支" tabindex="-1"><a class="header-anchor" href="#查看分支" aria-hidden="true">#</a> 查看分支</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># git branch不带参数,列出本地已经存在的分支，并且在当前分支的前面用*标记，加上-a参数可以查看所有分支列表，包括本地和远程，远程分支一般会用红色字体标记出来</span>
<span class="token function">git</span> branch <span class="token parameter variable">-a</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="切换分支" tabindex="-1"><a class="header-anchor" href="#切换分支" aria-hidden="true">#</a> 切换分支</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 其中远程分支为 origin/master</span>
<span class="token comment"># 本地分支为 master</span>
<span class="token function">git</span> checkout master
<span class="token function">git</span> checkout S32K146
<span class="token function">git</span> checkout S32K148
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="新建分支并切换到指定分支" tabindex="-1"><a class="header-anchor" href="#新建分支并切换到指定分支" aria-hidden="true">#</a> 新建分支并切换到指定分支</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># git checkout -b 本地分支名 origin/远程分支名</span>
<span class="token comment"># 当参数设置为“-b”时，可以在新分支创建的同时切换分支</span>
<span class="token function">git</span> checkout <span class="token parameter variable">-b</span> S32K146 origin/S32K146
<span class="token function">git</span> checkout <span class="token parameter variable">-b</span> S32K148 origin/S32K148
<span class="token function">git</span> checkout <span class="token parameter variable">-b</span> Vue3MasterReWi origin/Vue3MasterReWi
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="把远程分支拉到本地" tabindex="-1"><a class="header-anchor" href="#把远程分支拉到本地" aria-hidden="true">#</a> 把远程分支拉到本地</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> fetch origin S32K146
<span class="token function">git</span> fetch origin S32K148
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="远程分支上的内容都拉取到本地" tabindex="-1"><a class="header-anchor" href="#远程分支上的内容都拉取到本地" aria-hidden="true">#</a> 远程分支上的内容都拉取到本地</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> pull origin S32K146
<span class="token function">git</span> pull origin S32K148
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="commit-code-for-multiple-people" tabindex="-1"><a class="header-anchor" href="#commit-code-for-multiple-people" aria-hidden="true">#</a> Commit code for multiple people</h2><h3 id="git-pull-可用" tabindex="-1"><a class="header-anchor" href="#git-pull-可用" aria-hidden="true">#</a> git pull 可用</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 先查看状态，是否有改动</span>
<span class="token function">git</span> status
<span class="token comment"># git stash save &quot;名字&quot; 将修改内容保存在堆栈中</span>
<span class="token function">git</span> stash save
<span class="token comment"># 先git pull,拉取远程仓库所有分支更新并合并到本地</span>
<span class="token function">git</span> pull origin master
<span class="token comment"># git stash pop（或git stash pop +名字）将堆栈中的修改应用到当前分支</span>
<span class="token function">git</span> stash pop
<span class="token comment"># 查看修改，如果有冲突需要手动修改冲突</span>
<span class="token function">git</span> status
<span class="token comment"># 把更新的代码添加到暂存区， git add [xxx]  //xxx为文件名，</span>
<span class="token comment"># git add . 会把本地所有untrack的文件都加入暂存区，并且会根据.gitignore做过滤。</span>
<span class="token comment"># git add * 会忽略.gitignore把任何文件都加入。</span>
<span class="token function">git</span> <span class="token function">add</span> <span class="token parameter variable">--all</span>
<span class="token comment"># 将暂存区的更新提交到仓库区。</span>
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;【更新】更新说明&quot;</span>
<span class="token comment"># 将本地分支的更新全部推送到远程仓库。</span>
<span class="token function">git</span> push <span class="token parameter variable">-u</span> origin HEAD:master
<span class="token comment"># 再次查看状态，看是否还有文件没推送</span>
<span class="token function">git</span> status
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="git-fetch-不好用" tabindex="-1"><a class="header-anchor" href="#git-fetch-不好用" aria-hidden="true">#</a> git fetch 不好用</h3>`,16),b={href:"https://blog.csdn.net/m0_47403102/article/details/122538395",target:"_blank",rel:"noopener noreferrer"},g={href:"https://blog.csdn.net/m0_47403102/article/details/122538395",target:"_blank",rel:"noopener noreferrer"},k={href:"https://www.cnblogs.com/linhuaming/p/16290892.html",target:"_blank",rel:"noopener noreferrer"},f=i(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 获取最新代码到本地【获取远端的origin/master分支】</span>
<span class="token function">git</span> fetch origin master
<span class="token comment"># 查看版本差异【查看本地master与远端origin/master的版本差异】</span>
<span class="token function">git</span> log <span class="token parameter variable">-p</span> master<span class="token punctuation">..</span>origin/master
<span class="token comment"># 合并最新代码到本地分支【合并远端分支origin/master到当前分支】</span>
<span class="token function">git</span> merge origin/master
<span class="token comment"># 先查看状态，是否有改动</span>
<span class="token function">git</span> status
<span class="token comment"># 把更新的代码添加到暂存区， git add [xxx]  //xxx为文件名，</span>
<span class="token comment"># git add . 会把本地所有untrack的文件都加入暂存区，并且会根据.gitignore做过滤。</span>
<span class="token comment"># git add * 会忽略.gitignore把任何文件都加入。</span>
<span class="token function">git</span> <span class="token function">add</span> <span class="token parameter variable">--all</span>
<span class="token comment"># 将暂存区的更新提交到仓库区。</span>
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;Initial Commit&quot;</span>
<span class="token comment"># 将本地分支的更新全部推送到远程仓库。</span>
<span class="token function">git</span> push <span class="token parameter variable">-u</span> origin HEAD:master
<span class="token comment"># 再次查看状态，看是否还有文件没推送</span>
<span class="token function">git</span> status
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="修改远程提交" tabindex="-1"><a class="header-anchor" href="#修改远程提交" aria-hidden="true">#</a> 修改远程提交</h2>`,2),_={href:"https://blog.csdn.net/Zsago/article/details/73618279",target:"_blank",rel:"noopener noreferrer"},x=n("h2",{id:"删除-分两种情况",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#删除-分两种情况","aria-hidden":"true"},"#"),s(" 删除(分两种情况)")],-1),q={href:"https://www.jb51.net/article/253630.htm",target:"_blank",rel:"noopener noreferrer"},w=i(`<h3 id="_1-删除最后一次提交" tabindex="-1"><a class="header-anchor" href="#_1-删除最后一次提交" aria-hidden="true">#</a> 1. 删除最后一次提交</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 第一步：回滚上一次提交</span>
<span class="token function">git</span> reset <span class="token parameter variable">--hard</span> HEAD^
<span class="token comment"># 第二步：强制提交本地代码 </span>
<span class="token function">git</span> push origin master <span class="token parameter variable">-f</span>
<span class="token comment"># 由于本地reset之后本地库落后于远程几个版本，所以需要使用-f强制提交。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-删除指定commit提交-非最后一次提交" tabindex="-1"><a class="header-anchor" href="#_2-删除指定commit提交-非最后一次提交" aria-hidden="true">#</a> 2. 删除指定commit提交（非最后一次提交）</h3>`,3),j={href:"https://blog.csdn.net/qq_34246965/article/details/108414930",target:"_blank",rel:"noopener noreferrer"},S=i(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 第一步：查看提交日志，获取要删除记录commit--2的前一次提交commit--1的提交ID</span>
<span class="token comment"># 特别提示： rebase -i的ID一定是删除记录的前一次的提交ID</span>
<span class="token comment"># git reflog命令中保留了从clone仓库开始,用户所有在本地库中的操作。 </span>
<span class="token function">git</span> reflog
<span class="token comment"># 如果不带任何参数，它会列出所有历史记录，最近的排在最上方，显示提交对象的哈希值，作者、提交日期、和提交说明。如果记录过多，则按Page Up、Page Down、↓、↑来控制显示；按q退出历史记录列表。</span>
<span class="token function">git</span> log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="git仓库迁移" tabindex="-1"><a class="header-anchor" href="#git仓库迁移" aria-hidden="true">#</a> git仓库迁移</h2>`,2),D={href:"https://blog.csdn.net/qq_42670703/article/details/123369326",target:"_blank",rel:"noopener noreferrer"},E=i(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 1. 随便找个文件夹，从原地址克隆一份裸版本库</span>
<span class="token function">git</span> clone <span class="token parameter variable">--bare</span> 旧的git地址
<span class="token comment"># 2. 推送裸版本库到新的地址</span>
<span class="token builtin class-name">cd</span> xxx.git
<span class="token function">git</span> push <span class="token parameter variable">--mirror</span> 新的git地址 
<span class="token comment"># 3. 删掉xxx.git文件夹</span>
<span class="token comment">#删不删无所谓，只是说明它没有用了而已。</span>
<span class="token comment">#4. 代码迁移就成功了，接下来就可以使用新的地址了</span>
<span class="token function">git</span> clone 新的git地址
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="强制提交" tabindex="-1"><a class="header-anchor" href="#强制提交" aria-hidden="true">#</a> 强制提交</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> clone <span class="token operator">&lt;</span>仓库<span class="token operator">&gt;</span>
<span class="token function">git</span> reset <span class="token parameter variable">--hard</span> HEAD^

//do something

<span class="token function">git</span> <span class="token function">add</span> <span class="token parameter variable">--all</span>
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;first commit&quot;</span>
<span class="token function">git</span> push <span class="token parameter variable">-u</span> <span class="token parameter variable">-f</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="git清除贡献者信息和历史提交记录" tabindex="-1"><a class="header-anchor" href="#git清除贡献者信息和历史提交记录" aria-hidden="true">#</a> Git清除贡献者信息和历史提交记录</h2><blockquote><p>https://blog.csdn.net/Liu_Wd/article/details/120910899 注意：历史记录清除后无法回滚。目前这个仓库算是一个新的仓库，以后所有的修改只需要在现在基础上修改。 总结：大概步骤就是把master分支复制，删除原有分支，用新的分支覆盖旧分支。从而完成分支替换，清除历史记录。</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#1.Checkout</span>
<span class="token comment"># 检出新的分支</span>
<span class="token comment"># orphan参数用于创建没有commit记录的分支</span>
<span class="token function">git</span> checkout <span class="token parameter variable">--orphan</span> latest_branch
<span class="token comment">#2.Add all the files</span>
<span class="token comment"># 添加分支的所有文件</span>
<span class="token function">git</span> <span class="token function">add</span> <span class="token parameter variable">-A</span>
<span class="token comment">#3.Commit the changes</span>
<span class="token comment">#提交更改并写明提交描述</span>
<span class="token function">git</span> commit <span class="token parameter variable">-am</span> <span class="token string">&quot;这是我提交的描述&quot;</span>
<span class="token comment">#4.Delete the branch</span>
<span class="token comment">#删除之前的主分支</span>
<span class="token function">git</span> branch <span class="token parameter variable">-D</span> master
<span class="token comment">#5.Rename the current branch to master </span>
<span class="token comment">#将当前这个分支重命名为master，是它变成主分支</span>
<span class="token function">git</span> branch <span class="token parameter variable">-m</span> master
<span class="token comment">#6.Finally, force update your repository</span>
<span class="token comment">#最后，强制更新到主分支master</span>
<span class="token function">git</span> push <span class="token parameter variable">-f</span> origin master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function K(I,N){const a=l("ExternalLinkIcon");return c(),o("div",null,[d,n("ul",null,[n("li",null,[n("a",p,[s("http://www.longant.cn/zh-hans/node/6056"),e(a)])]),n("li",null,[n("a",u,[s("https://stackoverflow.com/questions/44833218/extract-package-json-version-using-shell-script"),e(a)])])]),m,n("ul",null,[n("li",null,[n("a",v,[s("https://blog.csdn.net/weixin_48321825/article/details/124431351"),e(a)])])]),h,n("blockquote",null,[n("p",null,[n("a",b,[s("https://blog.csdn.net/m0_47403102/article/details/122538395"),e(a)]),n("a",g,[s("https://blog.csdn.net/m0_47403102/article/details/122538395"),e(a)]),n("a",k,[s("https://www.cnblogs.com/linhuaming/p/16290892.html"),e(a)])])]),f,n("blockquote",null,[n("p",null,[s("参考："),n("a",_,[s("https://blog.csdn.net/Zsago/article/details/73618279"),e(a)])])]),x,n("blockquote",null,[n("p",null,[s("分两种情况 参考： "),n("a",q,[s("https://www.jb51.net/article/253630.htm"),e(a)])])]),w,n("blockquote",null,[n("p",null,[s("git log ："),n("a",j,[s("https://blog.csdn.net/qq_34246965/article/details/108414930"),e(a)])])]),S,n("blockquote",null,[n("p",null,[n("a",D,[s("https://blog.csdn.net/qq_42670703/article/details/123369326"),e(a)])])]),E])}const A=t(r,[["render",K],["__file","gittijiaojiqiao.html.vue"]]);export{A as default};
