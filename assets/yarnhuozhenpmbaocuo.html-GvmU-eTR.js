import{_ as e,o as a,c as n,a as s}from"./app-CAyVG32v.js";const r={},t=s(`<h1 id="yarn-install-或者npm-install出现error-an-unexpected-error-occurred错误的解决办法" tabindex="-1"><a class="header-anchor" href="#yarn-install-或者npm-install出现error-an-unexpected-error-occurred错误的解决办法"><span>yarn install 或者npm install出现error An unexpected error occurred错误的解决办法</span></a></h1><p>使用 yarn install 或者 npm install 安装，以前可用，后面突然就不可用了。解决流程： 1.删掉 node_modules，</p><ul><li><p>发现可以删，重新执行，成功</p></li><li><p>发现可以删，重新执行，报错：error An unexpected error occurred</p></li><li><p>发现删不掉，重新执行，报错：error An unexpected error occurred</p><p>2.很可能是磁盘损坏，读写出现了问题</p><pre><code>来源：百度经验：用Windows系统自带工具修复硬盘
</code></pre></li><li><p>打开的命令行窗口中输入 chkdsk/? 回车来查看一下帮助的信息，在这里可以看到它的使用格式以及参数（ chkdsk 是一个检查磁盘的命令）。</p></li><li><p>根据需要，输入命令检查磁盘并修复磁盘上从错误，如要修复 E 盘上从错误，则输入 chkdsk E: /F（ /F 是一个用于修复磁盘上错误的参数，也可以根据需要和别的参数一起使用），然后 回车 ，它就开始检查了，检查好之后，若是存在坏的扇区，它就会自动修复，一会之后，它就检查并修复好了。</p><p>3.重新执行，成功 <img src="https://img-blog.csdnimg.cn/519e96acf60141ba81aec604a957ca79.png" alt="在这里插入图片描述"></p></li></ul><h1 id="request-to-https-registry-npm-taobao-org-failed-reason-certificate-has-expired" tabindex="-1"><a class="header-anchor" href="#request-to-https-registry-npm-taobao-org-failed-reason-certificate-has-expired"><span>request to https://registry.npm.taobao.org failed, reason certificate has expired</span></a></h1><blockquote><p>https://blog.csdn.net/maoge_666/article/details/136038003</p></blockquote><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token function">npm</span> config list</span>
<span class="line"><span class="token function">npm</span> cache clean <span class="token parameter variable">--force</span></span>
<span class="line"><span class="token function">npm</span> config <span class="token builtin class-name">set</span> registry https://registry.npmmirror.com</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),i=[t];function o(c,l){return a(),n("div",null,i)}const d=e(r,[["render",o],["__file","yarnhuozhenpmbaocuo.html.vue"]]),m=JSON.parse('{"path":"/blogs/developer/vue/yarnhuozhenpmbaocuo.html","title":"yarn或者npm报错","lang":"zh-CN","frontmatter":{"title":"yarn或者npm报错","date":"2024-06-19T00:30:00.000Z","tags":["web","运行报错"],"categories":["vue"]},"headers":[],"git":{"createdTime":1732772000000,"updatedTime":1735198401000,"contributors":[{"name":"ReWi","email":"RejoiceWindow@yeah.net","commits":2}]},"filePathRelative":"blogs/developer/vue/yarn或者npm报错.md"}');export{d as comp,m as data};