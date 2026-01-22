<script setup lang="ts">
import { ref, onMounted } from "vue";
import { marked } from "marked";
import hljs from "highlight.js/lib/core";
import bash from "highlight.js/lib/languages/bash";
import go from "highlight.js/lib/languages/go";
import json from "highlight.js/lib/languages/json";

hljs.registerLanguage("bash", bash);
hljs.registerLanguage("go", go);
hljs.registerLanguage("json", json);

const changelogHtml = ref("");
const isLoading = ref(true);

onMounted(async () => {
  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/zulfikawr/fm/main/CHANGELOG.md",
    );
    const text = await response.text();

    // In newer marked versions, we handle highlighting after parsing
    const html = (await marked.parse(text)) as string;
    changelogHtml.value = html;

    // Trigger highlight for any code blocks in the dynamic HTML
    setTimeout(() => {
      document.querySelectorAll(".changelog-md pre code").forEach((el) => {
        hljs.highlightElement(el as HTMLElement);
      });
    }, 100);
  } catch (error) {
    console.error("Failed to fetch changelog:", error);
    changelogHtml.value =
      '<p style="color: var(--color-gruv-red)">Failed to load changelog.</p>';
  } finally {
    isLoading.value = false;
  }
});
</script>

<template>
  <section id="changelog" class="mb-24 scroll-mt-24">
    <h2 class="text-3xl font-bold text-gruv-fg mb-8 flex items-center gap-3">
      <span class="text-gruv-orange">#</span> Changelog
    </h2>

    <div v-if="isLoading" class="text-gruv-fg-dim italic">
      Loading changelog...
    </div>
    <div v-else class="changelog-md" v-html="changelogHtml"></div>
  </section>
</template>

<style>
/* Using CSS variables defined in style.css/theme for reliable styling */
.changelog-md h2 {
  color: var(--color-gruv-orange);
  font-weight: 700;
  font-size: 1.5rem;
  margin-top: 3rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid rgba(254, 128, 25, 0.2);
  padding-bottom: 0.5rem;
}
.changelog-md h3 {
  color: var(--color-gruv-fg);
  font-weight: 700;
  font-size: 1.25rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
}
.changelog-md p {
  color: var(--color-gruv-fg-dim);
  line-height: 1.625;
  margin-top: 1rem;
  margin-bottom: 1rem;
}
.changelog-md ul {
  list-style-type: none;
  padding: 0;
  margin-top: 1rem;
  margin-bottom: 1rem;
}
.changelog-md li {
  color: var(--color-gruv-fg-dim);
  padding-left: 1.5rem;
  position: relative;
  margin-bottom: 0.5rem;
}
.changelog-md li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: var(--color-gruv-orange);
  font-weight: 700;
}
.changelog-md code {
  background-color: var(--color-gruv-bg-soft);
  color: var(--color-gruv-aqua);
  padding: 0.125rem 0.375rem;
  border-radius: 0.25rem;
  font-family: var(--font-mono);
  font-size: 0.875rem;
}
.changelog-md pre {
  background-color: #1a1a1a;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  overflow-x: auto;
}
.changelog-md pre code {
  background-color: transparent;
  padding: 0;
  color: var(--color-gruv-fg);
  display: block;
}
.changelog-md a {
  color: var(--color-gruv-blue);
  transition: color 0.2s;
  text-decoration: none;
}
.changelog-md a:hover {
  color: var(--color-gruv-orange);
}
.changelog-md blockquote {
  border-left: 4px solid rgba(168, 153, 132, 0.2);
  padding-left: 1rem;
  font-style: italic;
  margin: 1.5rem 0;
  color: var(--color-gruv-fg-dim);
}

/* Gruvbox Syntax Highlighting */
.hljs-comment {
  color: var(--color-gruv-fg-dim);
  font-style: italic;
}
.hljs-keyword,
.hljs-selector-tag {
  color: var(--color-gruv-red);
  font-weight: bold;
}
.hljs-string {
  color: var(--color-gruv-green);
}
.hljs-title,
.hljs-section {
  color: var(--color-gruv-yellow);
  font-weight: bold;
}
.hljs-variable,
.hljs-template-variable {
  color: var(--color-gruv-blue);
}
.hljs-type,
.hljs-built_in,
.hljs-bullet,
.hljs-number,
.hljs-addition {
  color: var(--color-gruv-orange);
}
.hljs-symbol,
.hljs-attr,
.hljs-selector-attr,
.hljs-selector-pseudo,
.hljs-link {
  color: var(--color-gruv-aqua);
}
</style>
