import{_ as n,o as s,c as e,a}from"./app-6d65bf83.js";const i={},t=a(`<h2 id="如何在ubuntu-server-18-04-lts中配置静态ip地址" tabindex="-1"><a class="header-anchor" href="#如何在ubuntu-server-18-04-lts中配置静态ip地址" aria-hidden="true">#</a> 如何在Ubuntu Server 18.04 LTS中配置静态IP地址</h2><blockquote><p>https://www.cnblogs.com/nuoforever/p/14177682.html</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 运行ip link show命令，它将列出服务器上所有可用的网络接口。</span>
<span class="token function">ip</span> <span class="token function">link</span> show
<span class="token comment"># 要查看当前的IP配置，运行ip addr命令</span>
<span class="token function">ip</span> addr
<span class="token comment"># ...</span>
<span class="token function">sudo</span> netplan apply
<span class="token function">ip</span> <span class="token function">add</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),c=[t];function l(o,r){return s(),e("div",null,c)}const u=n(i,[["render",l],["__file","Ubuntu Server 18.04 wangluoshezhi.html.vue"]]);export{u as default};
