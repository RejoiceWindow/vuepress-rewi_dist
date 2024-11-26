import{_ as n,o as e,c as i,d as a,a as s}from"./app-l_7TZh_x.js";const l="/assets/FT4222_PCB-C3fgQ-1m.png",t="/assets/FT4222_ele-wXBio3dZ.png",d={},c=s(`<h2 id="官网" tabindex="-1"><a class="header-anchor" href="#官网"><span>官网</span></a></h2><ul><li>https://ftdichip.com/products/ft4222h/</li><li>https://ftdichip.com/software-examples/ft4222h-software-examples/</li><li>https://ftdichip.com/wp-content/uploads/2020/07/DS_UMFT4222EV.pdf</li><li>https://ftdichip.com/wp-content/uploads/2023/10/AN_329_User_Guide_for_LibFT4222-v1.7.pdf</li></ul><h2 id="python-开发" tabindex="-1"><a class="header-anchor" href="#python-开发"><span>Python 开发</span></a></h2><ul><li>https://pypi.org/project/ft4222/</li></ul><h2 id="c-开发" tabindex="-1"><a class="header-anchor" href="#c-开发"><span>C 开发</span></a></h2><ul><li>https://github.com/Flynn-zfl/AutoDebug/tree/master/I2C</li><li>https://github.com/letgo0007/ft4222h_i2ctool/blob/master/fti2c.c</li></ul><h2 id="pcb" tabindex="-1"><a class="header-anchor" href="#pcb"><span>PCB</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">GND：地线</span>
<span class="line">GPIO0：SCL</span>
<span class="line">GPIO1：SDA</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="`+l+`" width="600"><h2 id="原理图" tabindex="-1"><a class="header-anchor" href="#原理图"><span>原理图</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">文档:DS_UMFT4222EV.pdf</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><img src="`+t+'" width="600">',12),p=s(`<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">是的，有几个免费、开源且支持跨平台的C++ GUI 框架。以下是其中一些：</span>
<span class="line"></span>
<span class="line">1. **Qt：**</span>
<span class="line">   - **描述：** Qt 是一个跨平台的C++应用程序开发框架，支持Windows、Linux、macOS等操作系统。它提供了丰富的功能，包括GUI开发、网络编程、数据库操作等。</span>
<span class="line">   - **许可：** 开源版本使用LGPL协议。</span>
<span class="line"></span>
<span class="line">2. **GTK：**</span>
<span class="line">   - **描述：** GTK（GIMP Toolkit）是用于创建图形用户界面的开源工具包，支持多个平台，包括Windows、Linux、macOS。</span>
<span class="line">   - **许可：** LGPL协议。</span>
<span class="line"></span>
<span class="line">3. **wxWidgets：**</span>
<span class="line">   - **描述：** wxWidgets是一个C++库，可用于创建跨平台的GUI应用程序。它支持多个操作系统，包括Windows、Linux、macOS。</span>
<span class="line">   - **许可：** wxWindows许可证，类似LGPL。</span>
<span class="line"></span>
<span class="line">4. **FLTK（快速、轻量级的GUI工具包）：**</span>
<span class="line">   - **描述：** FLTK是一个小型而高效的GUI工具包，支持Windows、Linux、macOS等。它专注于快速、轻量级的应用程序。</span>
<span class="line">   - **许可：** LGPL协议。</span>
<span class="line"></span>
<span class="line">5. **JUCE：**</span>
<span class="line">   - **描述：** JUCE是一个用于跨平台音频、图形和应用程序开发的C++框架。它支持Windows、Linux、macOS以及移动平台。</span>
<span class="line">   - **许可：** JUCE自家提供的许可证。</span>
<span class="line"></span>
<span class="line">6. **Dear ImGui：**</span>
<span class="line">   - **描述：** Dear ImGui是一个即时模式图形用户界面库，专注于提供简单而强大的API。它可以集成到现有的应用程序中。</span>
<span class="line">   - **许可：** MIT许可证。</span>
<span class="line"></span>
<span class="line">这些框架各有其特点，你可以根据项目的需求、开发者喜好以及框架的社区支持来选择最适合你的框架。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="树莓派" tabindex="-1"><a class="header-anchor" href="#树莓派"><span>树莓派</span></a></h2><ul><li>使用 FT4222：https://blog.csdn.net/luo58614013/article/details/136454406</li></ul>`,3);function r(o,u){return e(),i("div",null,[c,a(" 有没有免费开源，且支持跨平台的 C++语言的 GUI 框架 "),p])}const v=n(d,[["render",r],["__file","FT4222shiyong.html.vue"]]),m=JSON.parse('{"path":"/blogs/developer/debugger/FT4222shiyong.html","title":"FT4222使用","lang":"zh-CN","frontmatter":{"title":"FT4222使用","date":"2024-06-09T18:30:00.000Z","tags":["FT4222","硬件控制"],"categories":["debugger"]},"headers":[{"level":2,"title":"官网","slug":"官网","link":"#官网","children":[]},{"level":2,"title":"Python 开发","slug":"python-开发","link":"#python-开发","children":[]},{"level":2,"title":"C 开发","slug":"c-开发","link":"#c-开发","children":[]},{"level":2,"title":"PCB","slug":"pcb","link":"#pcb","children":[]},{"level":2,"title":"原理图","slug":"原理图","link":"#原理图","children":[]},{"level":2,"title":"树莓派","slug":"树莓派","link":"#树莓派","children":[]}],"git":{"createdTime":1717929330000,"updatedTime":1731250124000,"contributors":[{"name":"ReWi","email":"RejoiceWindow@yeah.net","commits":2}]},"filePathRelative":"blogs/developer/debugger/FT4222使用.md"}');export{v as comp,m as data};
