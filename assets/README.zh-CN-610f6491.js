import{_ as s}from"./locales-30051217.js";import{o as a,a as t,z as n}from"./vue-libs-19c20d28.js";const l={},d={class:"van-doc-markdown-body"},e=n(`<h1>IndexBar 索引栏</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">介绍</h3><p>用于列表的索引分类显示和快速定位。</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">引入</h3><p>通过以下方式来全局注册组件，更多注册方式请参考<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">组件注册</a>。</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">IndexBar</span>, <span class="hljs-title class_">IndexAnchor</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">IndexBar</span>);
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">IndexAnchor</span>);
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">代码演示</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">基础用法</h3><p>点击索引栏时，会自动跳转到对应的 <code>IndexAnchor</code> 锚点位置。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-index-bar</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-index-anchor</span> <span class="hljs-attr">index</span>=<span class="hljs-string">&quot;A&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;文本&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;文本&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;文本&quot;</span> /&gt;</span>

  <span class="hljs-tag">&lt;<span class="hljs-name">van-index-anchor</span> <span class="hljs-attr">index</span>=<span class="hljs-string">&quot;B&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;文本&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;文本&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;文本&quot;</span> /&gt;</span>

  ...
<span class="hljs-tag">&lt;/<span class="hljs-name">van-index-bar</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-suo-yin-lie-biao" tabindex="-1">自定义索引列表</h3><p>可以通过 <code>index-list</code> 属性自定义展示的索引字符列表。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-index-bar</span> <span class="hljs-attr">:index-list</span>=<span class="hljs-string">&quot;indexList&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-index-anchor</span> <span class="hljs-attr">index</span>=<span class="hljs-string">&quot;1&quot;</span>&gt;</span>标题1<span class="hljs-tag">&lt;/<span class="hljs-name">van-index-anchor</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;文本&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;文本&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;文本&quot;</span> /&gt;</span>

  <span class="hljs-tag">&lt;<span class="hljs-name">van-index-anchor</span> <span class="hljs-attr">index</span>=<span class="hljs-string">&quot;2&quot;</span>&gt;</span>标题2<span class="hljs-tag">&lt;/<span class="hljs-name">van-index-anchor</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;文本&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;文本&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;文本&quot;</span> /&gt;</span>

  ...
<span class="hljs-tag">&lt;/<span class="hljs-name">van-index-bar</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">indexList</span>: [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>, <span class="hljs-number">6</span>, <span class="hljs-number">7</span>, <span class="hljs-number">8</span>, <span class="hljs-number">9</span>, <span class="hljs-number">10</span>],
    };
  },
};
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="indexbar-props" tabindex="-1">IndexBar Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>index-list</td><td>索引字符列表</td><td><em>(string | number)[]</em></td><td><code>A-Z</code></td></tr><tr><td>z-index</td><td>z-index 层级</td><td><em>number | string</em></td><td><code>1</code></td></tr><tr><td>sticky</td><td>是否开启锚点自动吸顶</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>sticky-offset-top</td><td>锚点自动吸顶时与顶部的距离</td><td><em>number</em></td><td><code>0</code></td></tr><tr><td>highlight-color</td><td>索引字符高亮颜色</td><td><em>string</em></td><td><code>#1989fa</code></td></tr><tr><td>teleport</td><td>指定索引栏挂载的节点</td><td><em>string | Element</em></td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="indexanchor-props" tabindex="-1">IndexAnchor Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>index</td><td>索引字符</td><td><em>number | string</em></td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="indexbar-events" tabindex="-1">IndexBar Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>select</td><td>点击索引栏的字符时触发</td><td><em>index: number | string</em></td></tr><tr><td>change</td><td>当前高亮的索引字符变化时触发</td><td><em>index: number | string</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="indexbar-fang-fa" tabindex="-1">IndexBar 方法</h3><p>通过 ref 可以获取到 IndexBar 实例并调用实例方法，详见<a href="#/zh-CN/advanced-usage#zu-jian-shi-li-fang-fa" target="_blank">组件实例方法</a>。</p><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th><th>返回值</th></tr></thead><tbody><tr><td>scrollTo</td><td>滚动到指定锚点</td><td><em>index: number | string</em></td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">类型定义</h3><p>组件导出以下类型定义：</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">IndexBarProps</span>, <span class="hljs-title class_">IndexAnchorProps</span>, <span class="hljs-title class_">IndexBarInstance</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre><p><code>IndexBarInstance</code> 是组件实例的类型，用法如下：</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">IndexBarInstance</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> indexBarRef = ref&lt;<span class="hljs-title class_">IndexBarInstance</span>&gt;();

indexBarRef.<span class="hljs-property">value</span>?.<span class="hljs-title function_">scrollTo</span>(<span class="hljs-string">&#39;B&#39;</span>);
</code></pre></div><div class="van-doc-card"><h3 id="indexanchor-slots" tabindex="-1">IndexAnchor Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>锚点位置显示内容，默认为索引字符</td></tr></tbody></table></div><h2 id="zhu-ti-ding-zhi" tabindex="-1">主题定制</h2><div class="van-doc-card"><h3 id="yang-shi-bian-liang" tabindex="-1">样式变量</h3><p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider 组件</a>。</p><table><thead><tr><th>名称</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>--van-index-bar-sidebar-z-index</td><td><em>2</em></td><td>-</td></tr><tr><td>--van-index-bar-index-font-size</td><td><em>var(--van-font-size-xs)</em></td><td>-</td></tr><tr><td>--van-index-bar-index-line-height</td><td><em>var(--van-line-height-xs)</em></td><td>-</td></tr><tr><td>--van-index-bar-index-active-color</td><td><em>var(--van-primary-color)</em></td><td>-</td></tr><tr><td>--van-index-anchor-z-index</td><td><em>1</em></td><td>-</td></tr><tr><td>--van-index-anchor-padding</td><td><em>0 var(--van-padding-md)</em></td><td>-</td></tr><tr><td>--van-index-anchor-text-color</td><td><em>var(--van-text-color)</em></td><td>-</td></tr><tr><td>--van-index-anchor-font-weight</td><td><em>var(--van-font-bold)</em></td><td>-</td></tr><tr><td>--van-index-anchor-font-size</td><td><em>var(--van-font-size-md)</em></td><td>-</td></tr><tr><td>--van-index-anchor-line-height</td><td><em>32px</em></td><td>-</td></tr><tr><td>--van-index-anchor-background</td><td><em>transparent</em></td><td>-</td></tr><tr><td>--van-index-anchor-sticky-text-color</td><td><em>var(--van-primary-color)</em></td><td>-</td></tr><tr><td>--van-index-anchor-sticky-background</td><td><em>var(--van-background-2)</em></td><td>-</td></tr></tbody></table></div>`,15),p=[e];function r(c,h){return a(),t("div",d,p)}const j=s(l,[["render",r]]);export{j as default};
