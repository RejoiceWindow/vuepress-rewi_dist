import{_ as d,r as a,o as v,c as r,b as n,e as l,w as s,d as e,a as c}from"./app-6d65bf83.js";const u={},m=n("h2",{id:"目录",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#目录","aria-hidden":"true"},"#"),e(" 目录")],-1),b={class:"table-of-contents"},o=c(`<h2 id="mysql怎么查看表" tabindex="-1"><a class="header-anchor" href="#mysql怎么查看表" aria-hidden="true">#</a> mysql怎么查看表</h2><ol><li>查看当前数据库中的表</li></ol><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>SHOW TABLES;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>查看表结构 show命令可以提供关于数据库、表、列，或关于服务器的状态信息。</li></ol><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>show columns from 表名;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="更新root用户权限为任意ip可登录" tabindex="-1"><a class="header-anchor" href="#更新root用户权限为任意ip可登录" aria-hidden="true">#</a> 更新root用户权限为任意ip可登录</h2><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>update user set host=&#39;%&#39; where user=&#39;root&#39; and host=&#39;localhost&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="数据库操作" tabindex="-1"><a class="header-anchor" href="#数据库操作" aria-hidden="true">#</a> 数据库操作</h2><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql -u&lt;用户名&gt; -p&lt;密码&gt;
drop DATABASE GinMasterReWi;
CREATE DATABASE IF NOT EXISTS GinMasterReWi DEFAULT CHARSET utf8 COLLATE utf8_general_ci;
use GinMasterReWi;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常用show命令" tabindex="-1"><a class="header-anchor" href="#常用show命令" aria-hidden="true">#</a> 常用show命令</h2><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code># 显示二进制文件以及文件大小（需要开启二进制日志记录功能）
SHOW {BINARY | MASTER} LOGS

# 显示二进制文件的执行过程
SHOW BINLOG EVENTS [IN &#39;log_name&#39;] [FROM pos] [LIMIT [offset,] row_count]

# 显示MySQL当前支持哪些字符集
SHOW CHARACTER SET [like_or_where]

# 显示MySQL支持字符集的排序规则
SHOW COLLATION [like_or_where]

# 显示表的列信息（等同于DESC，需要先创建表）
SHOW [FULL] COLUMNS FROM tbl_name [FROM db_name] [like_or_where]

# 显示已经创建的库，创建时的语句
SHOW CREATE DATABASE db_name

# 显示已经创建的事件，创建时的语句
SHOW CREATE EVENT event_name

# 显示已经创建的函数，创建时的语句
SHOW CREATE FUNCTION func_name

# 显示已经创建的存储过程，创建时的语句
SHOW CREATE PROCEDURE proc_name

# 显示已经创建的表，创建时的语句
SHOW CREATE TABLE tbl_name

# 显示已经创建的触发器，创建时的语句
SHOW CREATE TRIGGER trigger_name

# 显示已经创建的视图，创建时的语句
SHOW CREATE VIEW view_name

# 显示mysql中所有数据库的名称
SHOW DATABASES [like_or_where]

# 显示存储引擎的详细信息
SHOW ENGINE engine_name {STATUS | MUTEX}

# 显示数据库支持的存储引擎和默认存储引擎
SHOW [STORAGE] ENGINES

# 显示最后一个执行语句所产生的错误信息
SHOW ERRORS [LIMIT [offset,] row_count]

# 显示事件信息
SHOW EVENTS

# 服务器内部调试，显示一个指定存储的内部实现的表示形式过程
SHOW FUNCTION CODE func_name

# 显示存储函数信息（需要先创建存储函数）
SHOW FUNCTION STATUS [like_or_where]

# 显示指定用户拥有的权限
SHOW GRANTS FOR user

# 显示表索引信息（需要先创建索引）
SHOW INDEX FROM tbl_name [FROM db_name]

# 显示Master当前正在使用的二进制信息
SHOW MASTER STATUS

# 列举在表缓存中当前被打开的非TEMPORARY表
SHOW OPEN TABLES [FROM db_name] [like_or_where]

# 显示MySQL插件信息
SHOW PLUGINS

# 服务器内部调试，显示一个指定存储的内部实现的表示形式过程
SHOW PROCEDURE CODE proc_name

# 显示存储过程信息（需要先创建存储过程）
SHOW PROCEDURE STATUS [like_or_where]

# 显示MySQL所支持的所有权限，及权限可操作的对象
SHOW PRIVILEGES

# 显示系统中正在运行的所有进程，普通用户只能查看自己的进行信息
SHOW [FULL] PROCESSLIST

# 显示当前会话执行语句资源使用情况
SHOW PROFILE [types] [FOR QUERY n] [OFFSET n] [LIMIT n]

# 显示当前会话执行语句资源使用情况
SHOW PROFILES

# 显示relaylog事件信息（需要先做主从复制）
SHOW RELAYLOG EVENTS [IN &#39;log_name&#39;] [FROM pos] [LIMIT [offset,] row_count]

# 显示Master主机上已注册的复制主机列表（需要先做主从复制）
SHOW SLAVE HOSTS

# 显示Slave主机状态信息（需要先做主从复制）
SHOW SLAVE STATUS [FOR CHANNEL channel]

# 显示MySQL状态信息
SHOW [GLOBAL | SESSION] STATUS [like_or_where]

# 显示表属性信息
SHOW TABLE STATUS [FROM db_name] [like_or_where]

# 显示当前数据库中所有表的名称
SHOW [FULL] TABLES [FROM db_name] [like_or_where]

# 显示触发器信息（需要先创建触发器）
SHOW TRIGGERS [FROM db_name] [like_or_where]

# 显示MySQL变量信息
SHOW [GLOBAL | SESSION] VARIABLES [like_or_where]

# 显示最后一个执行语句所产生的警告信息
SHOW WARNINGS [LIMIT [offset,] row_count]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11);function t(S,O){const i=a("router-link");return v(),r("div",null,[m,n("nav",b,[n("ul",null,[n("li",null,[l(i,{to:"#目录"},{default:s(()=>[e("目录")]),_:1})]),n("li",null,[l(i,{to:"#mysql怎么查看表"},{default:s(()=>[e("mysql怎么查看表")]),_:1})]),n("li",null,[l(i,{to:"#更新root用户权限为任意ip可登录"},{default:s(()=>[e("更新root用户权限为任意ip可登录")]),_:1})]),n("li",null,[l(i,{to:"#数据库操作"},{default:s(()=>[e("数据库操作")]),_:1})]),n("li",null,[l(i,{to:"#常用show命令"},{default:s(()=>[e("常用show命令")]),_:1})])])]),o])}const _=d(u,[["render",t],["__file","Mysqlshujukucaozuo.html.vue"]]);export{_ as default};
