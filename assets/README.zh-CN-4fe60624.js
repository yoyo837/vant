import{_ as s}from"./locales-30051217.js";import{o as a,a as t,z as n}from"./vue-libs-19c20d28.js";const p={},l={class:"van-doc-markdown-body"},e=n(`<h1>Empty 空状态</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">介绍</h3><p>空状态时的占位提示。</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">引入</h3><p>通过以下方式来全局注册组件，更多注册方式请参考<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">组件注册</a>。</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Empty</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Empty</span>);
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">代码演示</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">基础用法</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-empty</span> <span class="hljs-attr">description</span>=<span class="hljs-string">&quot;描述文字&quot;</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="tu-pian-lei-xing" tabindex="-1">图片类型</h3><p>Empty 组件内置了多种占位图片类型，可以在不同业务场景下使用。</p><pre><code class="language-html"><span class="hljs-comment">&lt;!-- 通用错误 --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-empty</span> <span class="hljs-attr">image</span>=<span class="hljs-string">&quot;error&quot;</span> <span class="hljs-attr">description</span>=<span class="hljs-string">&quot;描述文字&quot;</span> /&gt;</span>
<span class="hljs-comment">&lt;!-- 网络错误 --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-empty</span> <span class="hljs-attr">image</span>=<span class="hljs-string">&quot;network&quot;</span> <span class="hljs-attr">description</span>=<span class="hljs-string">&quot;描述文字&quot;</span> /&gt;</span>
<span class="hljs-comment">&lt;!-- 搜索提示 --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-empty</span> <span class="hljs-attr">image</span>=<span class="hljs-string">&quot;search&quot;</span> <span class="hljs-attr">description</span>=<span class="hljs-string">&quot;描述文字&quot;</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-da-xiao" tabindex="-1">自定义大小</h3><p>通过 <code>image-size</code> 属性图片的大小。</p><pre><code class="language-html"><span class="hljs-comment">&lt;!-- 不指定单位，默认为 px --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-empty</span> <span class="hljs-attr">image-size</span>=<span class="hljs-string">&quot;100&quot;</span> <span class="hljs-attr">description</span>=<span class="hljs-string">&quot;描述文字&quot;</span> /&gt;</span>
<span class="hljs-comment">&lt;!-- 指定单位，支持 rem, vh, vw --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-empty</span> <span class="hljs-attr">image-size</span>=<span class="hljs-string">&quot;10rem&quot;</span> <span class="hljs-attr">description</span>=<span class="hljs-string">&quot;描述文字&quot;</span> /&gt;</span>
</code></pre><p>将 <code>image-size</code> 设置为数组格式，可以分别设置宽高。数组第一项对应宽度，数组第二项对应高度。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-empty</span> <span class="hljs-attr">:image-size</span>=<span class="hljs-string">&quot;[60, 40]&quot;</span> <span class="hljs-attr">description</span>=<span class="hljs-string">&quot;描述文字&quot;</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-tu-pian" tabindex="-1">自定义图片</h3><p>需要自定义图片时，可以在 image 属性中传入任意图片 URL。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-empty</span>
  <span class="hljs-attr">image</span>=<span class="hljs-string">&quot;https://fastly.jsdelivr.net/npm/@vant/assets/custom-empty-image.png&quot;</span>
  <span class="hljs-attr">image-size</span>=<span class="hljs-string">&quot;80&quot;</span>
  <span class="hljs-attr">description</span>=<span class="hljs-string">&quot;描述文字&quot;</span>
/&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="di-bu-nei-rong" tabindex="-1">底部内容</h3><p>通过默认插槽可以在 Empty 组件的下方插入内容。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-empty</span> <span class="hljs-attr">description</span>=<span class="hljs-string">&quot;描述文字&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">round</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;bottom-button&quot;</span>&gt;</span>按钮<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-empty</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="language-css">
  <span class="hljs-selector-class">.bottom-button</span> {
    <span class="hljs-attribute">width</span>: <span class="hljs-number">160px</span>;
    <span class="hljs-attribute">height</span>: <span class="hljs-number">40px</span>;
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>image</td><td>图片类型，可选值为 <code>error</code> <code>network</code> <code>search</code>，支持传入图片 URL</td><td><em>string</em></td><td><code>default</code></td></tr><tr><td>image-size</td><td>图片大小，默认单位为 <code>px</code></td><td><em>number | string | Array</em></td><td>-</td></tr><tr><td>description</td><td>图片下方的描述文字</td><td><em>string</em></td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>自定义底部内容</td></tr><tr><td>image</td><td>自定义图标</td></tr><tr><td>description</td><td>自定义描述文字</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">类型定义</h3><p>组件导出以下类型定义：</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">EmptyProps</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre></div><h2 id="zhu-ti-ding-zhi" tabindex="-1">主题定制</h2><div class="van-doc-card"><h3 id="yang-shi-bian-liang" tabindex="-1">样式变量</h3><p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider 组件</a>。</p><table><thead><tr><th>名称</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>--van-empty-padding</td><td><em>var(--van-padding-xl) 0</em></td><td>-</td></tr><tr><td>--van-empty-image-size</td><td><em>160px</em></td><td>-</td></tr><tr><td>--van-empty-description-margin-top</td><td><em>var(--van-padding-md)</em></td><td>-</td></tr><tr><td>--van-empty-description-padding</td><td><em>0 60px</em></td><td>-</td></tr><tr><td>--van-empty-description-color</td><td><em>var(--van-text-color-2)</em></td><td>-</td></tr><tr><td>--van-empty-description-font-size</td><td><em>var(--van-font-size-md)</em></td><td>-</td></tr><tr><td>--van-empty-description-line-height</td><td><em>var(--van-line-height-md)</em></td><td>-</td></tr><tr><td>--van-empty-bottom-margin-top</td><td><em>24px</em></td><td>-</td></tr></tbody></table></div>`,15),d=[e];function c(i,r){return a(),t("div",l,d)}const m=s(p,[["render",c]]);export{m as default};
