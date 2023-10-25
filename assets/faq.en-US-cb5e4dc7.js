import{_ as s}from"./locales-30051217.js";import{o as a,a as n,z as t}from"./vue-libs-19c20d28.js";const e={},l={class:"van-doc-markdown-body"},o=t(`<h1>FAQ</h1><div class="van-doc-card"><h3 id="how-do-i-customize-the-style-of-vant-components" tabindex="-1">How do I customize the style of Vant components?</h3><h4 id="1.-theme-customization" tabindex="-1">1. Theme customization</h4><p>Vant provides the ability to customize the theme based on CSS variables, and can uniformly modify the component style. For details, see <a href="#/en-US/config-provider" target="_blank">ConfigProvider Global Configuration</a> component.</p><h4 id="2.-overriding-the-default-style" tabindex="-1">2. Overriding the default style</h4><p>If the theme customization does not meet your needs, you can also override the default style using a <strong>custom style class</strong>, see the following example:</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;my-button&quot;</span>&gt;</span>Button<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="language-css">
  <span class="hljs-comment">/** Override the style of Button&#39;s root element */</span>
  <span class="hljs-selector-class">.my-button</span> {
    <span class="hljs-attribute">width</span>: <span class="hljs-number">200px</span>;
  }

  <span class="hljs-comment">/** Override the style of Button&#39;s child elements */</span>
  <span class="hljs-selector-class">.my-button</span><span class="hljs-selector-class">.van-button__text</span> {
    <span class="hljs-attribute">color</span>: red;
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="components-not-rendering-correctly-in-html" tabindex="-1">Components not rendering correctly in HTML?</h3><p>When using Vant components in HTML, you may encounter situations where some sample code may not render correctly, such as the following usage:</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell-group</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;cell&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;content&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;cell&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;content&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-cell-group</span>&gt;</span>
</code></pre><p>This is because HTML does not support self-closing custom elements, so syntax like <code>&lt;van-cell /&gt;</code> is not recognized. Using a closing tag can work around this problem:</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell-group</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;cell&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;content&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">van-cell</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;cell&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;content&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">van-cell</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-cell-group</span>&gt;</span>
</code></pre><p>Self-closing custom elements are available in single-file components, string templates, and JSX, so this problem doesn&#39;t arise.</p></div><div class="van-doc-card"><h3 id="can-t-trigger-the-click-feedback-on-ios" tabindex="-1">Can&#39;t trigger the click feedback on iOS?</h3><p>This is because iOS Safari does not trigger the <code>:active</code> pseudo-class by default. The solution is to add an empty <code>ontouchstart</code> attribute to the <code>body</code> tag:</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">body</span> <span class="hljs-attr">ontouchstart</span>=<span class="hljs-string">&quot;&quot;</span>&gt;</span>
  ...
<span class="hljs-tag">&lt;/<span class="hljs-name">body</span>&gt;</span>
</code></pre><p>Reference link: <a href="https://stackoverflow.com/questions/3885018/active-pseudo-class-doesnt-work-in-mobile-safari/33681490#33681490" target="_blank">stackoverflow - :active pseudo-class doesn&#39;t work in mobile safari</a></p></div><div class="van-doc-card"><h3 id="why-is-there-no-select-component" tabindex="-1">Why is there no Select component?</h3><p>Select is a widely used component on the desktop, but its interactive form is not suitable for the mobile device.</p><p>On the mobile side, we recommend using the <a href="#/en-US/picker" target="_blank">Picker selector component</a> instead.</p></div><div class="van-doc-card"><h3 id="is-it-supported-in-uni-app" tabindex="-1">Is it supported in uni-app?</h3><p>All components of Vant are implemented based on the Vue framework and are not adapted to uni-app, so the availability of each component under uni-app is not guaranteed.</p><p>If you encounter problems using Vant in uni-app, it is recommended to provide feedback to uni-app.</p></div><div class="van-doc-card"><h3 id="some-components-do-not-work-on-the-desktop" tabindex="-1">Some components do not work on the desktop?</h3><p>See <a href="#/en-US/advanced-usage#adapt-to-pc-browsers" target="_blank">Adapt to PC Browsers</a>.</p></div><div class="van-doc-card"><h3 id="how-do-i-implement-mobile-responsive-adaptation" tabindex="-1">How do I implement mobile responsive adaptation?</h3><p>See <a href="#/en-US/advanced-usage#browser-adaptation" target="_blank">Browser Adaptation</a>.</p></div>`,8),p=[o];function c(i,r){return a(),n("div",l,p)}const m=s(e,[["render",c]]);export{m as default};
