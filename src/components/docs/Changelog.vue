<script setup lang="ts">
import { ref, onMounted, nextTick } from "vue";
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

    const html = (await marked.parse(text)) as string;
    changelogHtml.value = html;

    await nextTick();
    document.querySelectorAll(".changelog-md pre code").forEach((el) => {
      hljs.highlightElement(el as HTMLElement);
    });
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
