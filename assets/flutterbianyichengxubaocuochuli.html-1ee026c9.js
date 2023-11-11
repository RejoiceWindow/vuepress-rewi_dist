import{_ as l,r as o,o as i,c,b as n,d as s,e,a as t}from"./app-6d65bf83.js";const u={},p=n("h2",{id:"exception-unable-to-find-suitable-visual-studio-toolchain-please-run-flutter-doctor-for-more-details",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#exception-unable-to-find-suitable-visual-studio-toolchain-please-run-flutter-doctor-for-more-details","aria-hidden":"true"},"#"),s(" Exception: Unable to find suitable Visual Studio toolchain. Please run "),n("code",null,"flutter doctor"),s(" for more details")],-1),r={href:"https://flutter.cn/docs/development/platform-integration/desktop",target:"_blank",rel:"noopener noreferrer"},d=t(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>flutter channel
flutter channel master
flutter upgrade
flutter channel
<span class="token comment"># flutter doctor 查看故障是否解决</span>
flutter doctor
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),m={id:"failed-to-load-font-roboto-at-https-fonts-gstatic-com-s-roboto-v20-kfomcnqeu92fr1me5wzlczylkw-ttf",tabindex:"-1"},v=n("a",{class:"header-anchor",href:"#failed-to-load-font-roboto-at-https-fonts-gstatic-com-s-roboto-v20-kfomcnqeu92fr1me5wzlczylkw-ttf","aria-hidden":"true"},"#",-1),b={href:"https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Me5WZLCzYlKw.ttf",target:"_blank",rel:"noopener noreferrer"},k=n("p",null,"换个网络 或者 修改字体<未验证>",-1),h={href:"https://blog.csdn.net/longlyboyhe/article/details/114268663",target:"_blank",rel:"noopener noreferrer"},f=n("h2",{id:"卡死在-running-gradle-task-assembledebug",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#卡死在-running-gradle-task-assembledebug","aria-hidden":"true"},"#"),s(" 卡死在 Running Gradle task 'assembleDebug'")],-1),g={href:"https://flutteragency.com/solve-running-gradle-task-assembledebug/",target:"_blank",rel:"noopener noreferrer"},_={href:"https://blog.csdn.net/qq_43596067/article/details/107710915",target:"_blank",rel:"noopener noreferrer"},x=t(`<blockquote><p>If you are on Windows: try adding firewall exceptions to your Android Studio follow below steps:</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Open your flutter Project directory.</span>
<span class="token comment"># Change directory to android directory in your flutter project directory </span>
<span class="token builtin class-name">cd</span> android
<span class="token comment"># lean gradle </span>
./gradlew clean
<span class="token comment"># Build Gradle </span>
./gradlew build 
<span class="token comment"># or you can combine both commands with just </span>
<span class="token comment"># ./gradlew clean build.</span>
<span class="token comment"># Now run your flutter project. If you use vscode, press F5. The first time Gradle running assembly debug will take time.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="flutter-3-3-6-中flatbutton-raisedbutton-outlinebutton找不到" tabindex="-1"><a class="header-anchor" href="#flutter-3-3-6-中flatbutton-raisedbutton-outlinebutton找不到" aria-hidden="true">#</a> Flutter 3.3.6 中FlatButton, RaisedButton, &amp; OutlineButton找不到</h2>`,3),y={href:"https://blog.csdn.net/MrLizuo/article/details/127635511",target:"_blank",rel:"noopener noreferrer"},B=t(`<div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token comment">// Code before migration:</span>
<span class="token class-name">FlatButton</span><span class="token punctuation">(</span>
  onPressed<span class="token punctuation">:</span> onPressed<span class="token punctuation">,</span>
  child<span class="token punctuation">:</span> <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;Button&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">RaisedButton</span><span class="token punctuation">(</span>
  onPressed<span class="token punctuation">:</span> onPressed<span class="token punctuation">,</span>
  child<span class="token punctuation">:</span> <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;Button&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">OutlineButton</span><span class="token punctuation">(</span>
  onPressed<span class="token punctuation">:</span> onPressed<span class="token punctuation">,</span>
  child<span class="token punctuation">:</span> <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;Button&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Code after migration:</span>
<span class="token class-name">TextButton</span><span class="token punctuation">(</span>
  onPressed<span class="token punctuation">:</span> onPressed<span class="token punctuation">,</span>
  child<span class="token punctuation">:</span> <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;Button&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">ElevatedButton</span><span class="token punctuation">(</span>
  onPressed<span class="token punctuation">:</span> onPressed<span class="token punctuation">,</span>
  child<span class="token punctuation">:</span> <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;Button&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">OutlinedButton</span><span class="token punctuation">(</span>
  onPressed<span class="token punctuation">:</span> onPressed<span class="token punctuation">,</span>
  child<span class="token punctuation">:</span> <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;Button&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function w(P,q){const a=o("ExternalLinkIcon");return i(),c("div",null,[p,n("ul",null,[n("li",null,[n("a",r,[s("https://flutter.cn/docs/development/platform-integration/desktop"),e(a)])])]),d,n("h2",m,[v,s(" Failed to load font Roboto at "),n("a",b,[s("https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Me5WZLCzYlKw.ttf"),e(a)])]),k,n("ul",null,[n("li",null,[n("a",h,[s("https://blog.csdn.net/longlyboyhe/article/details/114268663"),e(a)])])]),f,n("ul",null,[n("li",null,[n("a",g,[s("https://flutteragency.com/solve-running-gradle-task-assembledebug/"),e(a)])]),n("li",null,[n("a",_,[s("https://blog.csdn.net/qq_43596067/article/details/107710915"),e(a)])])]),x,n("ul",null,[n("li",null,[n("a",y,[s("https://blog.csdn.net/MrLizuo/article/details/127635511"),e(a)])])]),B])}const T=l(u,[["render",w],["__file","flutterbianyichengxubaocuochuli.html.vue"]]);export{T as default};
