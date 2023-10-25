import{_ as t}from"./locales-30051217.js";import{o as s,a,z as n}from"./vue-libs-19c20d28.js";const d={},r={class:"van-doc-markdown-body"},l=n(`<h1>Card 卡片</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">介绍</h3><p>商品卡片，用于展示商品的图片、价格等信息。</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">引入</h3><p>通过以下方式来全局注册组件，更多注册方式请参考<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">组件注册</a>。</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Card</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Card</span>);
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">代码演示</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">基础用法</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-card</span>
  <span class="hljs-attr">num</span>=<span class="hljs-string">&quot;2&quot;</span>
  <span class="hljs-attr">price</span>=<span class="hljs-string">&quot;2.00&quot;</span>
  <span class="hljs-attr">desc</span>=<span class="hljs-string">&quot;描述信息&quot;</span>
  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;商品标题&quot;</span>
  <span class="hljs-attr">thumb</span>=<span class="hljs-string">&quot;https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg&quot;</span>
/&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="ying-xiao-xin-xi" tabindex="-1">营销信息</h3><p>通过 <code>origin-price</code> 设置商品原价，通过 <code>tag</code> 设置商品左上角标签。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-card</span>
  <span class="hljs-attr">num</span>=<span class="hljs-string">&quot;2&quot;</span>
  <span class="hljs-attr">tag</span>=<span class="hljs-string">&quot;标签&quot;</span>
  <span class="hljs-attr">price</span>=<span class="hljs-string">&quot;2.00&quot;</span>
  <span class="hljs-attr">desc</span>=<span class="hljs-string">&quot;描述信息&quot;</span>
  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;商品标题&quot;</span>
  <span class="hljs-attr">thumb</span>=<span class="hljs-string">&quot;https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg&quot;</span>
  <span class="hljs-attr">origin-price</span>=<span class="hljs-string">&quot;10.00&quot;</span>
/&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-nei-rong" tabindex="-1">自定义内容</h3><p><code>Card</code> 组件提供了多个插槽，可以灵活地自定义内容。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-card</span>
  <span class="hljs-attr">num</span>=<span class="hljs-string">&quot;2&quot;</span>
  <span class="hljs-attr">price</span>=<span class="hljs-string">&quot;2.00&quot;</span>
  <span class="hljs-attr">desc</span>=<span class="hljs-string">&quot;描述信息&quot;</span>
  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;商品标题&quot;</span>
  <span class="hljs-attr">thumb</span>=<span class="hljs-string">&quot;https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg&quot;</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">tags</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-tag</span> <span class="hljs-attr">plain</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>标签<span class="hljs-tag">&lt;/<span class="hljs-name">van-tag</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-tag</span> <span class="hljs-attr">plain</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>标签<span class="hljs-tag">&lt;/<span class="hljs-name">van-tag</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">footer</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;mini&quot;</span>&gt;</span>按钮<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;mini&quot;</span>&gt;</span>按钮<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-card</span>&gt;</span>
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>thumb</td><td>左侧图片 URL</td><td><em>string</em></td><td>-</td></tr><tr><td>title</td><td>标题</td><td><em>string</em></td><td>-</td></tr><tr><td>desc</td><td>描述</td><td><em>string</em></td><td>-</td></tr><tr><td>tag</td><td>图片角标</td><td><em>string</em></td><td>-</td></tr><tr><td>num</td><td>商品数量</td><td><em>number | string</em></td><td>-</td></tr><tr><td>price</td><td>商品价格</td><td><em>number | string</em></td><td>-</td></tr><tr><td>origin-price</td><td>商品划线原价</td><td><em>number | string</em></td><td>-</td></tr><tr><td>centered</td><td>内容是否垂直居中</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>currency</td><td>货币符号</td><td><em>string</em></td><td><code>¥</code></td></tr><tr><td>thumb-link</td><td>点击左侧图片后跳转的链接地址</td><td><em>string</em></td><td>-</td></tr><tr><td>lazy-load</td><td>是否开启图片懒加载，须配合 <a href="#/zh-CN/lazyload" target="_blank">Lazyload</a> 组件使用</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>click</td><td>点击时触发</td><td><em>event: MouseEvent</em></td></tr><tr><td>click-thumb</td><td>点击自定义图片时触发</td><td><em>event: MouseEvent</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>title</td><td>自定义标题</td></tr><tr><td>desc</td><td>自定义描述</td></tr><tr><td>num</td><td>自定义数量</td></tr><tr><td>price</td><td>自定义价格</td></tr><tr><td>origin-price</td><td>自定义商品原价</td></tr><tr><td>price-top</td><td>自定义价格上方区域</td></tr><tr><td>bottom</td><td>自定义价格下方区域</td></tr><tr><td>thumb</td><td>自定义图片</td></tr><tr><td>tag</td><td>自定义图片角标</td></tr><tr><td>tags</td><td>自定义描述下方标签区域</td></tr><tr><td>footer</td><td>自定义右下角内容</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">类型定义</h3><p>组件导出以下类型定义：</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">CardProps</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre></div><h2 id="zhu-ti-ding-zhi" tabindex="-1">主题定制</h2><div class="van-doc-card"><h3 id="yang-shi-bian-liang" tabindex="-1">样式变量</h3><p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider 组件</a>。</p><table><thead><tr><th>名称</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>--van-card-padding</td><td><em>var(--van-padding-xs) var(--van-padding-md)</em></td><td>-</td></tr><tr><td>--van-card-font-size</td><td><em>var(--van-font-size-sm)</em></td><td>-</td></tr><tr><td>--van-card-text-color</td><td><em>var(--van-text-color)</em></td><td>-</td></tr><tr><td>--van-card-background</td><td><em>var(--van-background)</em></td><td>-</td></tr><tr><td>--van-card-thumb-size</td><td><em>88px</em></td><td>-</td></tr><tr><td>--van-card-thumb-radius</td><td><em>var(--van-radius-lg)</em></td><td>-</td></tr><tr><td>--van-card-title-line-height</td><td><em>16px</em></td><td>-</td></tr><tr><td>--van-card-desc-color</td><td><em>var(--van-text-color-2)</em></td><td>-</td></tr><tr><td>--van-card-desc-line-height</td><td><em>var(--van-line-height-md)</em></td><td>-</td></tr><tr><td>--van-card-price-color</td><td><em>var(--van-text-color)</em></td><td>-</td></tr><tr><td>--van-card-origin-price-color</td><td><em>var(--van-text-color-2)</em></td><td>-</td></tr><tr><td>--van-card-num-color</td><td><em>var(--van-text-color-2)</em></td><td>-</td></tr><tr><td>--van-card-origin-price-font-size</td><td><em>var(--van-font-size-xs)</em></td><td>-</td></tr><tr><td>--van-card-price-font-size</td><td><em>var(--van-font-size-sm)</em></td><td>-</td></tr><tr><td>--van-card-price-integer-font-size</td><td><em>var(--van-font-size-lg)</em></td><td>-</td></tr><tr><td>--van-card-price-font</td><td><em>var(--van-price-font)</em></td><td>-</td></tr></tbody></table></div>`,14),e=[l];function p(c,i){return s(),a("div",r,e)}const m=t(d,[["render",p]]);export{m as default};
