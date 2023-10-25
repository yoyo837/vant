import{_ as s}from"./locales-30051217.js";import{o as t,a,z as e}from"./vue-libs-19c20d28.js";const n={},r={class:"van-doc-markdown-body"},o=e(`<h1>Progress</h1><div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3><p>Used to show the current progress of the operation.</p></div><div class="van-doc-card"><h3 id="install" tabindex="-1">Install</h3><p>Register component globally via <code>app.use</code>, refer to <a href="#/en-US/advanced-usage#zu-jian-zhu-ce" target="_blank">Component Registration</a> for more registration ways.</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Progress</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Progress</span>);
</code></pre></div><h2 id="usage" tabindex="-1">Usage</h2><div class="van-doc-card"><h3 id="basic-usage" tabindex="-1">Basic Usage</h3><p>Use <code>percentage</code> prop to set current progress.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-progress</span> <span class="hljs-attr">:percentage</span>=<span class="hljs-string">&quot;50&quot;</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="stroke-width" tabindex="-1">Stroke Width</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-progress</span> <span class="hljs-attr">:percentage</span>=<span class="hljs-string">&quot;50&quot;</span> <span class="hljs-attr">stroke-width</span>=<span class="hljs-string">&quot;8&quot;</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="inactive" tabindex="-1">Inactive</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-progress</span> <span class="hljs-attr">inactive</span> <span class="hljs-attr">:percentage</span>=<span class="hljs-string">&quot;50&quot;</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="custom-style" tabindex="-1">Custom Style</h3><p>Use <code>pivot-text</code> to custom text, use <code>color</code> to custom bar color.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-progress</span> <span class="hljs-attr">pivot-text</span>=<span class="hljs-string">&quot;Orange&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#f2826a&quot;</span> <span class="hljs-attr">:percentage</span>=<span class="hljs-string">&quot;25&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-progress</span> <span class="hljs-attr">pivot-text</span>=<span class="hljs-string">&quot;Red&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#ee0a24&quot;</span> <span class="hljs-attr">:percentage</span>=<span class="hljs-string">&quot;50&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-progress</span>
  <span class="hljs-attr">:percentage</span>=<span class="hljs-string">&quot;75&quot;</span>
  <span class="hljs-attr">pivot-text</span>=<span class="hljs-string">&quot;Purple&quot;</span>
  <span class="hljs-attr">pivot-color</span>=<span class="hljs-string">&quot;#7232dd&quot;</span>
  <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;linear-gradient(to right, #be99ff, #7232dd)&quot;</span>
/&gt;</span>
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>percentage</td><td>Percentage</td><td><em>number | string</em></td><td><code>0</code></td></tr><tr><td>stroke-width</td><td>Stroke width</td><td><em>number | string</em></td><td><code>4px</code></td></tr><tr><td>color</td><td>Color</td><td><em>string</em></td><td><code>#1989fa</code></td></tr><tr><td>track-color</td><td>Track color</td><td><em>string</em></td><td><code>#e5e5e5</code></td></tr><tr><td>pivot-text</td><td>Pivot text</td><td><em>string</em></td><td>percentage</td></tr><tr><td>pivot-color</td><td>Pivot text background color</td><td><em>string</em></td><td>inherit progress color</td></tr><tr><td>text-color</td><td>Pivot text color</td><td><em>string</em></td><td><code>white</code></td></tr><tr><td>inactive</td><td>Whether to be gray</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>show-pivot</td><td>Whether to show text</td><td><em>boolean</em></td><td><code>true</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="types" tabindex="-1">Types</h3><p>The component exports the following type definitions:</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">ProgressProps</span>, <span class="hljs-title class_">ProgressInstance</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre><p><code>ProgressInstance</code> is the type of component instance:</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">ProgressInstance</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> progressRef = ref&lt;<span class="hljs-title class_">ProgressInstance</span>&gt;();

progressRef.<span class="hljs-property">value</span>?.<span class="hljs-title function_">resize</span>();
</code></pre></div><h2 id="theming" tabindex="-1">Theming</h2><div class="van-doc-card"><h3 id="css-variables" tabindex="-1">CSS Variables</h3><p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/config-provider" target="_blank">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td>--van-progress-height</td><td><em>4px</em></td><td>-</td></tr><tr><td>--van-progress-color</td><td><em>var(--van-primary-color)</em></td><td>-</td></tr><tr><td>--van-progress-inactive-color</td><td><em>var(--van-gray-5)</em></td><td>-</td></tr><tr><td>--van-progress-background</td><td><em>var(--van-gray-3)</em></td><td>-</td></tr><tr><td>--van-progress-pivot-padding</td><td><em>0 5px</em></td><td>-</td></tr><tr><td>--van-progress-pivot-text-color</td><td><em>var(--van-white)</em></td><td>-</td></tr><tr><td>--van-progress-pivot-font-size</td><td><em>var(--van-font-size-xs)</em></td><td>-</td></tr><tr><td>--van-progress-pivot-line-height</td><td><em>1.6</em></td><td>-</td></tr><tr><td>--van-progress-pivot-background</td><td><em>var(--van-primary-color)</em></td><td>-</td></tr></tbody></table></div>`,13),d=[o];function p(l,c){return t(),a("div",r,d)}const g=s(n,[["render",p]]);export{g as default};
