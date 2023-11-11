import{_ as n,o as s,c as a,a as e}from"./app-6d65bf83.js";const t={},i=e(`<h2 id="linux下源码安装python3详细步骤" tabindex="-1"><a class="header-anchor" href="#linux下源码安装python3详细步骤" aria-hidden="true">#</a> Linux下源码安装Python3详细步骤</h2><blockquote><p>https://blog.csdn.net/key_world/article/details/110214288</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">wget</span> https://www.python.org/ftp/python/3.8.0/Python-3.8.0.tgz
<span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> Python-3.8.0.tgz
<span class="token builtin class-name">cd</span> Python-3.8.0
./configure <span class="token parameter variable">--prefix</span><span class="token operator">=</span>/usr/local/python3.8

<span class="token function">vi</span> /etc/profile
<span class="token builtin class-name">export</span> <span class="token assign-left variable">PYTHON_HOME</span><span class="token operator">=</span>/usr/local/python3.8
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token variable">\${PYTHON_HOME}</span>/bin:<span class="token environment constant">$PATH</span>
<span class="token builtin class-name">source</span> /etc/profile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),l=[i];function o(c,p){return s(),a("div",null,l)}const d=n(t,[["render",o],["__file","Pythonkaifahuanjingpeizhi.html.vue"]]);export{d as default};
