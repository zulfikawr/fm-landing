<script setup lang="ts">
import { ref, onMounted, nextTick, watch } from "vue";
import { marked } from "marked";
import hljs from "highlight.js/lib/core";
import bash from "highlight.js/lib/languages/bash";
import go from "highlight.js/lib/languages/go";
import json from "highlight.js/lib/languages/json";
import yaml from "highlight.js/lib/languages/yaml";
import xml from "highlight.js/lib/languages/xml"; // for HTML

hljs.registerLanguage("bash", bash);
hljs.registerLanguage("sh", bash);
hljs.registerLanguage("go", go);
hljs.registerLanguage("json", json);
hljs.registerLanguage("yaml", yaml);
hljs.registerLanguage("html", xml);

const props = defineProps<{
  id: string;
  title: string;
  fileName: string;
}>();

const htmlContent = ref("");
const isLoading = ref(true);

const fetchContent = async () => {
  isLoading.value = true;
  try {
    const response = await fetch(
      `https://raw.githubusercontent.com/zulfikawr/fm/main/docs/${props.fileName}`,
    );
    let text = await response.text();

    // 1. Remove the main H1 header
    text = text.replace(/^#\s+.+$/m, "");

    // 2. Fix local markdown links to point to anchor tags in the same page
    text = text.replace(
      /\[([^\]]+)\]\((\.\/)?([^)]+)\.md\)/g,
      (match, title, dotSlash, filename) => {
        if (filename === "index") return `[${title}](#introduction)`;
        return `[${title}](#${filename})`;
      },
    );

    const html = (await marked.parse(text)) as string;
    htmlContent.value = html;

    // 3. Ensure syntax highlighting is applied with a slight delay to ensure DOM is ready
    await nextTick();
    setTimeout(() => {
      const sectionEl = document.getElementById(props.id);
      if (sectionEl) {
        sectionEl.querySelectorAll("pre code").forEach((el) => {
          hljs.highlightElement(el as HTMLElement);
        });
      }
    }, 100);
  } catch (error) {
    console.error(`Failed to fetch doc section ${props.id}:`, error);
    htmlContent.value = `<p style="color: var(--color-gruv-red)">Failed to load section: ${props.title}</p>`;
  } finally {
    isLoading.value = false;
  }
};

onMounted(fetchContent);
watch(() => props.fileName, fetchContent);
</script>

<template>
  <section :id="id" class="mb-24 scroll-mt-24">
    <h2 class="text-3xl font-bold text-gruv-fg mb-8 flex items-center gap-3">
      <span class="text-gruv-orange">#</span> {{ title }}
    </h2>

    <div v-if="isLoading" class="text-gruv-fg-dim italic">
      Loading {{ title.toLowerCase() }}...
    </div>
    <div v-else class="doc-content-md" v-html="htmlContent"></div>
  </section>
</template>
