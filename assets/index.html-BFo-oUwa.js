import{_ as e,r as l,o as p,c as t,e as i,b as s,d as n,a as c}from"./app-CAyVG32v.js";const o={},d=s("h2",{id:"获取密文",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#获取密文"},[s("span",null,"获取密文")])],-1),r=s("p",null,[n("如果你的密码明文是 "),s("code",null,"123456"),n("，需要将其转化为密文，也就是 "),s("code",null,"e10adc3949ba59abbe56e057f20f883e"),n("，使用密文去设置密码。")],-1),u=s("p",null,[n("网站发布后，在密码输入框输入 "),s("code",null,"123456"),n(" 即可进入网站，他人也无法通过代码中的密文知道你的密码，但是你一定要记住自己的密码明文。")],-1),m=s("p",null,"请在下面的输入框输入密码明文，以获取相应的密文：",-1),v=c(`<h2 id="设置加密" tabindex="-1"><a class="header-anchor" href="#设置加密"><span>设置加密</span></a></h2><h3 id="加密整个网站" tabindex="-1"><a class="header-anchor" href="#加密整个网站"><span>加密整个网站</span></a></h3><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token comment">// .vuepress/config.ts</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuepress&#39;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> recoTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuepress-theme-reco&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  theme<span class="token operator">:</span> <span class="token function">recoTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 设置单个密码</span></span>
<span class="line">    password<span class="token operator">:</span> <span class="token string">&#39;14e1b600b1fd579f47433b88e8d85291&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token comment">// 设置多个密码</span></span>
<span class="line">    password<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token string">&#39;14e1b600b1fd579f47433b88e8d85291&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string">&#39;f8de1968939dd4ac5992ce962993ac2b&#39;</span></span>
<span class="line">    <span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="加密单个页面" tabindex="-1"><a class="header-anchor" href="#加密单个页面"><span>加密单个页面</span></a></h3><div class="language-markdown line-numbers-mode" data-highlighter="prismjs" data-ext="md" data-title="md"><pre class="language-markdown"><code><span class="line"><span class="token front-matter-block"><span class="token punctuation">---</span></span>
<span class="line"><span class="token front-matter yaml language-yaml"><span class="token key atrule">title</span><span class="token punctuation">:</span> xxx</span>
<span class="line"><span class="token comment"># 设置单个密码</span></span>
<span class="line"><span class="token key atrule">password</span><span class="token punctuation">:</span> 14e1b600b1fd579f47433b88e8d85291</span>
<span class="line"><span class="token comment"># 设置多个密码</span></span>
<span class="line"><span class="token key atrule">password</span><span class="token punctuation">:</span> </span>
<span class="line"> <span class="token punctuation">-</span> 14e1b600b1fd579f47433b88e8d85291</span>
<span class="line"> <span class="token punctuation">-</span> f8de1968939dd4ac5992ce962993ac2b</span></span>
<span class="line"><span class="token punctuation">---</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function k(b,h){const a=l("md5");return p(),t("div",null,[d,r,u,m,i(a),v])}const g=e(o,[["render",k],["__file","index.html.vue"]]),_=JSON.parse('{"path":"/blogs/person/","title":"加密","lang":"zh-CN","frontmatter":{"title":"加密","date":"2023-09-11T11:54:33.000Z"},"headers":[{"level":2,"title":"获取密文","slug":"获取密文","link":"#获取密文","children":[]},{"level":2,"title":"设置加密","slug":"设置加密","link":"#设置加密","children":[{"level":3,"title":"加密整个网站","slug":"加密整个网站","link":"#加密整个网站","children":[]},{"level":3,"title":"加密单个页面","slug":"加密单个页面","link":"#加密单个页面","children":[]}]}],"git":{"createdTime":1732772000000,"updatedTime":1735198401000,"contributors":[{"name":"ReWi","email":"RejoiceWindow@yeah.net","commits":3}]},"filePathRelative":"blogs/person/README.md"}');export{g as comp,_ as data};