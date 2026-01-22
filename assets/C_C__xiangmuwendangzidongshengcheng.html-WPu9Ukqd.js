import{_ as o,c as r,a as t,d as a,w as l,b as n,e,r as i,o as u}from"./app-C5EA9484.js";const v={},m={start:"2"},g={href:"https://www.python.org/downloads/",target:"_blank",rel:"noopener noreferrer"};function h(b,s){const d=i("CodeGroupItem"),p=i("CodeGroup"),c=i("ExternalLinkIcon");return u(),r("div",null,[s[7]||(s[7]=t('<h2 id="mkdocs-与-doxygen-和-breathe-插件" tabindex="-1"><a class="header-anchor" href="#mkdocs-与-doxygen-和-breathe-插件"><span>MkDocs 与 Doxygen 和 Breathe 插件</span></a></h2><p>使用 <strong>MkDocs</strong> 生成文档的最佳方案取决于你的项目需求、文档的复杂性以及是否希望集成其他工具或插件。以下是一个基于常见使用场景的最佳方案，适用于 C/C++ 项目和需要从代码注释中生成文档的情况。</p><p>在 Windows 上使用 MkDocs、Doxygen 和 Breathe 插件来生成文档的过程与在 Linux 系统上类似。以下是详细步骤，帮助你在 Windows 上设置并生成文档。</p><p>这种方案适用于希望将 <strong>MkDocs</strong> 的简洁、可定制性与 <strong>Doxygen</strong> 的强大文档生成功能结合起来，生成精美且易于维护的文档。</p><h3 id="步骤一-安装工具" tabindex="-1"><a class="header-anchor" href="#步骤一-安装工具"><span>步骤一：安装工具</span></a></h3><ol><li><strong>安装 Doxygen</strong></li></ol><ul><li>Doxygen 是用于从 C/C++ 代码中提取文档的工具。首先需要在项目中添加注释，然后使用 Doxygen 来生成接口文档（通常是 HTML 或 LaTeX 格式）。</li><li>安装 Doxygen：</li></ul>',7)),a(p,null,{default:l(()=>[a(d,{title:"linux"},{default:l(()=>[...s[0]||(s[0]=[n("div",{class:"language-bash line-numbers-mode","data-highlighter":"prismjs","data-ext":"sh","data-title":"sh"},[n("pre",null,[n("code",null,[n("span",{class:"line"},[n("span",{class:"token function"},"sudo"),e(),n("span",{class:"token function"},"apt"),e(),n("span",{class:"token function"},"install"),e(" doxygen")]),e(`
`),n("span",{class:"line"})])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"})])],-1)])]),_:1}),a(d,{title:"window"},{default:l(()=>[...s[1]||(s[1]=[n("div",{class:"language-bash line-numbers-mode","data-highlighter":"prismjs","data-ext":"sh","data-title":"sh"},[n("pre",null,[n("code",null,[n("span",{class:"line"},"https://www.doxygen.nl/download.html"),e(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"# 选择 Add to PATH 选项，确保可以在命令行中直接使用 doxygen 命令。")]),e(`
`),n("span",{class:"line"})])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])]),_:1})]),_:1}),n("ol",m,[n("li",null,[n("p",null,[s[3]||(s[3]=n("strong",null,"安装 Python",-1)),s[4]||(s[4]=e(" 访问 ",-1)),n("a",g,[s[2]||(s[2]=e("Python 官网",-1)),a(c)]),s[5]||(s[5]=e("，下载并安装 Python。 在安装时勾选 Add Python to PATH 选项，方便在命令行中使用。",-1))])]),s[6]||(s[6]=n("li",null,[n("p",null,[n("strong",null,"安装 MkDocs")])],-1))]),s[8]||(s[8]=t(`<ul><li><p>MkDocs 是一个使用 Markdown 来编写文档的静态站点生成器，特别适合生成简单、漂亮的项目文档。</p></li><li><p>安装 MkDocs：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">pip <span class="token function">install</span> mkdocs</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li></ul><ol start="4"><li><strong>安装 Breathe 插件</strong></li></ol><ul><li><p><strong>Breathe</strong> 插件使得 MkDocs 可以与 Doxygen 生成的文档结合使用，渲染 Doxygen 输出到 MkDocs 页面中。</p></li><li><p>安装 Breathe 插件：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">pip <span class="token function">install</span> breathe</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li></ul><h3 id="步骤二-配置-doxygen" tabindex="-1"><a class="header-anchor" href="#步骤二-配置-doxygen"><span>步骤二：配置 Doxygen</span></a></h3><ol><li><p>在项目根目录下运行 Doxygen 配置命令，生成默认配置文件：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">doxygen <span class="token parameter variable">-g</span> Doxyfile</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>打开 <code>Doxyfile</code> 配置文件，进行以下调整：</p><ul><li><strong>EXTRACT_ALL = YES</strong>：确保提取所有类、函数和变量的文档。</li><li><strong>INPUT = src/</strong>：指定代码文件目录。</li><li><strong>RECURSIVE = YES</strong>：如果有子目录，递归扫描。</li><li><strong>GENERATE_HTML = YES</strong>：生成 HTML 文档。</li><li><strong>GENERATE_LATEX = NO</strong>：关闭 LaTeX 文档生成（可以根据需要选择是否开启）。</li><li><strong>OUTPUT_DIRECTORY = docs/doxygen</strong>：设置 Doxygen 输出的文件目录（推荐输出到 <code>docs/doxygen</code>，以便后续集成到 MkDocs 中）。</li></ul></li></ol><div class="language-ini line-numbers-mode" data-highlighter="prismjs" data-ext="ini" data-title="ini"><pre><code><span class="line"><span class="token key attr-name">EXTRACT_ALL</span> <span class="token punctuation">=</span> <span class="token value attr-value">YES</span></span>
<span class="line"><span class="token key attr-name">INPUT</span> <span class="token punctuation">=</span> <span class="token value attr-value">src/</span></span>
<span class="line"><span class="token key attr-name">RECURSIVE</span> <span class="token punctuation">=</span> <span class="token value attr-value">YES</span></span>
<span class="line"><span class="token key attr-name">GENERATE_HTML</span> <span class="token punctuation">=</span> <span class="token value attr-value">YES</span></span>
<span class="line"><span class="token key attr-name">GENERATE_LATEX</span> <span class="token punctuation">=</span> <span class="token value attr-value">NO</span></span>
<span class="line"><span class="token key attr-name">OUTPUT_DIRECTORY</span> <span class="token punctuation">=</span> <span class="token value attr-value">docs/doxygen</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="步骤三-配置-mkdocs" tabindex="-1"><a class="header-anchor" href="#步骤三-配置-mkdocs"><span>步骤三：配置 MkDocs</span></a></h3><ol><li><p>在项目根目录下初始化一个 MkDocs 项目：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">mkdocs new <span class="token builtin class-name">.</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>修改 <code>mkdocs.yml</code> 配置文件，配置网站标题和其他设置：</p></li></ol><p>在 <code>mkdocs.yml</code> 中添加 <code>breathe</code> 配置，指定 Doxygen 输出的目录：</p><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">site_name</span><span class="token punctuation">:</span> My C++ Project Documentation</span>
<span class="line"><span class="token key atrule">theme</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">name</span><span class="token punctuation">:</span> material</span>
<span class="line"><span class="token key atrule">plugins</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token punctuation">-</span> search</span>
<span class="line">  <span class="token punctuation">-</span> breathe</span>
<span class="line"><span class="token key atrule">markdown_extensions</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token punctuation">-</span> admonition</span>
<span class="line"><span class="token key atrule">breathe_projects</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">my_project</span><span class="token punctuation">:</span> docs/doxygen/xml</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li><p>在 <code>docs/index.md</code> 文件中，使用 <code>.. doxygenindex::</code> 插入 Doxygen 生成的内容：</p><div class="language-markdown line-numbers-mode" data-highlighter="prismjs" data-ext="md" data-title="md"><pre><code><span class="line"><span class="token title important"><span class="token punctuation">#</span> Welcome to My C++ Project Documentation</span></span>
<span class="line"></span>
<span class="line">This is the home page for my C++ project&#39;s documentation.</span>
<span class="line"></span>
<span class="line">.. doxygenindex::</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h3 id="步骤四-生成文档" tabindex="-1"><a class="header-anchor" href="#步骤四-生成文档"><span>步骤四：生成文档</span></a></h3><ol><li>运行 Doxygen 生成代码文档：</li></ol><ul><li><p>在项目根目录下运行 Doxygen 生成文档：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">doxygen Doxyfile</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>这会在 docs/doxygen/xml 目录下生成一个 XML 文件，Breathe 插件会用这个文件来渲染 Doxygen 文档。</p></li></ul><ol start="2"><li>启动 MkDocs 开发服务器：</li></ol><ul><li><p>在项目根目录下运行 MkDocs 开发服务器，查看本地生成的文档：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">mkdocs serve</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>这将启动一个本地服务器，通常可以通过 <code>http://127.0.0.1:8000</code> 来访问生成的文档。</p></li></ul><h3 id="步骤五-发布文档" tabindex="-1"><a class="header-anchor" href="#步骤五-发布文档"><span>步骤五：发布文档</span></a></h3><ul><li><p>如果你希望将文档发布到 GitHub Pages 或其他静态网站托管服务，可以使用以下命令：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">mkdocs gh-deploy</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li></ul><h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h3><p>在 Windows 上使用 MkDocs、Doxygen 和 Breathe 插件生成文档的步骤与在 Linux 上类似，只是工具的安装方式有所不同。通过结合这三个工具，你可以：</p><p>使用 Doxygen 从代码注释中生成详细的 API 文档。 使用 Breathe 插件将 Doxygen 输出集成到 MkDocs 项目中。 最终生成一个漂亮的文档网站，能够展示项目的 API、类、函数等信息，并可以进行部署。</p><p>结合 <strong>MkDocs</strong> 和 <strong>Doxygen</strong> 可以充分利用两者的优势：MkDocs 提供了一个漂亮、易于定制的文档展示平台，而 Doxygen 则能自动生成代码的详细文档。通过 <strong>Breathe</strong> 插件，MkDocs 能渲染 Doxygen 输出的内容，这样你就可以轻松地从注释中生成 API 文档，并且整合到一个统一的文档站点中。</p><p>这种方案的优势在于：</p><ul><li><strong>自动化</strong>：Doxygen 自动提取代码中的注释，生成 API 文档。</li><li><strong>可定制性</strong>：MkDocs 提供了灵活的主题和插件，可以定制文档的外观。</li><li><strong>易于维护</strong>：只需要更新代码中的注释，Doxygen 和 MkDocs 可以自动生成和更新文档。</li></ul><p>对于大多数 C/C++ 项目而言，这是一个非常高效和实用的文档生成方案。</p><p>这种方案的好处是可以自动化生成 API 文档，且支持自定义外观和交互式功能，特别适用于需要展示复杂 API 或大量代码注释的 C/C++ 项目。</p><h2 id="c-c-工程的文档自动生成工具" tabindex="-1"><a class="header-anchor" href="#c-c-工程的文档自动生成工具"><span>C/C++工程的文档自动生成工具</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">在C/C++项目中，自动生成文档的工具主要有以下几种，分别适用于不同的需求和使用场景：</span>
<span class="line"></span>
<span class="line">1. **Doxygen**</span>
<span class="line">   - **简介**: Doxygen 是 C/C++ 等多种语言的文档生成工具，支持从注释中自动提取信息生成文档（支持 HTML, LaTeX 等格式）。</span>
<span class="line">   - **特点**:</span>
<span class="line">     - 自动化：通过分析代码中的注释来生成文档。</span>
<span class="line">     - 支持多种输出格式：HTML、LaTeX、RTF、PDF等。</span>
<span class="line">     - 可以生成类、函数、变量等的结构化文档。</span>
<span class="line">     - 支持图表、继承关系图等可视化功能。</span>
<span class="line">   - **使用方法**:</span>
<span class="line">     - 在代码中使用特定格式的注释（如 \`/** ... */\`），然后运行 Doxygen，生成文档。</span>
<span class="line">     - 配置文件可以通过 \`doxygen -g\` 命令生成，之后配置和运行。</span>
<span class="line">   </span>
<span class="line">   - **官网**: [https://www.doxygen.nl](https://www.doxygen.nl)</span>
<span class="line"></span>
<span class="line">2. **Sphinx**</span>
<span class="line">   - **简介**: Sphinx 是一个强大的文档生成工具，原本用于 Python，但也支持 C/C++ 项目，通过 \`Breathe\` 插件可以与 Doxygen 集成。</span>
<span class="line">   - **特点**:</span>
<span class="line">     - 主要通过 reStructuredText 来编写文档。</span>
<span class="line">     - 集成 Doxygen 输出并渲染成更漂亮的 HTML 或 PDF 格式。</span>
<span class="line">     - 强大的扩展性和主题支持。</span>
<span class="line">   - **使用方法**:</span>
<span class="line">     - 使用 \`sphinx-quickstart\` 创建项目，配置 Doxygen 作为源。</span>
<span class="line">     - 使用 \`breathe\` 插件连接到 Doxygen 输出，生成更加定制化的文档。</span>
<span class="line">   </span>
<span class="line">   - **官网**: [https://www.sphinx-doc.org](https://www.sphinx-doc.org)</span>
<span class="line"></span>
<span class="line">3. **MkDocs**</span>
<span class="line">   - **简介**: MkDocs 是一个静态网站生成器，适用于文档生成，支持 Markdown 格式编写文档。虽然它主要是为 Python 项目设计的，但也可以用于 C/C++ 项目，使用插件来集成其他工具（如 Doxygen）。</span>
<span class="line">   - **特点**:</span>
<span class="line">     - 使用 Markdown 编写文档，配置简单。</span>
<span class="line">     - 支持主题和插件，可以定制外观。</span>
<span class="line">     - 支持将 Doxygen 输出与 MkDocs 集成，通过插件呈现生成的文档。</span>
<span class="line">   - **使用方法**:</span>
<span class="line">     - 配置 MkDocs 项目，通过 MkDocs 插件集成 Doxygen 输出。</span>
<span class="line">   </span>
<span class="line">   - **官网**: [https://www.mkdocs.org](https://www.mkdocs.org)</span>
<span class="line"></span>
<span class="line">4. **Clang-Doc**</span>
<span class="line">   - **简介**: Clang-Doc 是一个用于从 C/C++ 代码中生成文档的工具，依赖于 Clang 的解析能力。</span>
<span class="line">   - **特点**:</span>
<span class="line">     - 从 Clang 解析出来的抽象语法树 (AST) 中生成文档。</span>
<span class="line">     - 专注于现代 C++ 标准，能够较好地支持 C++ 代码结构。</span>
<span class="line">     - 可以生成 HTML 和 JSON 格式的文档。</span>
<span class="line">   - **使用方法**:</span>
<span class="line">     - 通过 Clang 的命令行工具生成文档。</span>
<span class="line">   </span>
<span class="line">   - **官网**: [https://clang.llvm.org](https://clang.llvm.org)</span>
<span class="line"></span>
<span class="line">5. **NaturalDocs**</span>
<span class="line">   - **简介**: NaturalDocs 是一个较为简单的文档生成工具，专门为 C/C++ 项目设计。</span>
<span class="line">   - **特点**:</span>
<span class="line">     - 直接从代码注释中提取文档。</span>
<span class="line">     - 支持多种语言（包括 C/C++），并提供直观的网页查看。</span>
<span class="line">     - 可以为类、方法、变量等生成文档。</span>
<span class="line">   - **使用方法**:</span>
<span class="line">     - 注释格式类似于 Javadoc，运行工具生成 HTML 文档。</span>
<span class="line">   </span>
<span class="line">   - **官网**: [https://www.naturaldocs.org](https://www.naturaldocs.org)</span>
<span class="line"></span>
<span class="line">### 总结</span>
<span class="line">- 如果你已经习惯了标准化注释格式，并且需要强大的功能，**Doxygen** 是最常用和推荐的工具。</span>
<span class="line">- 如果你需要更现代、可定制化的文档格式，并希望通过插件集成 Doxygen 输出，可以考虑使用 **Sphinx** 或 **MkDocs**。</span>
<span class="line">- 对于专注于 C++ 的开发者，**Clang-Doc** 提供了更贴合 C++ 标准的支持。</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,28))])}const x=o(v,[["render",h]]),y=JSON.parse('{"path":"/blogs/developer/C_C__/C_C__xiangmuwendangzidongshengcheng.html","title":"C_C++项目文档自动生成","lang":"zh-CN","frontmatter":{"title":"C_C++项目文档自动生成","date":"2024-12-02T07:00:00.000Z","tags":["自动文档"],"categories":["C_C++"]},"headers":[{"level":2,"title":"MkDocs 与 Doxygen 和 Breathe 插件","slug":"mkdocs-与-doxygen-和-breathe-插件","link":"#mkdocs-与-doxygen-和-breathe-插件","children":[{"level":3,"title":"步骤一：安装工具","slug":"步骤一-安装工具","link":"#步骤一-安装工具","children":[]},{"level":3,"title":"步骤二：配置 Doxygen","slug":"步骤二-配置-doxygen","link":"#步骤二-配置-doxygen","children":[]},{"level":3,"title":"步骤三：配置 MkDocs","slug":"步骤三-配置-mkdocs","link":"#步骤三-配置-mkdocs","children":[]},{"level":3,"title":"步骤四：生成文档","slug":"步骤四-生成文档","link":"#步骤四-生成文档","children":[]},{"level":3,"title":"步骤五：发布文档","slug":"步骤五-发布文档","link":"#步骤五-发布文档","children":[]},{"level":3,"title":"总结","slug":"总结","link":"#总结","children":[]}]},{"level":2,"title":"C/C++工程的文档自动生成工具","slug":"c-c-工程的文档自动生成工具","link":"#c-c-工程的文档自动生成工具","children":[]}],"git":{"createdTime":1759387174000,"updatedTime":1769075498000,"contributors":[{"name":"ReWi","email":"RejoiceWindow@yeah.com","commits":3}]},"filePathRelative":"blogs/developer/C_C++/C_C++项目文档自动生成.md"}');export{x as comp,y as data};
