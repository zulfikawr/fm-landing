<script setup lang="ts">
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import ChangelogSidebar from "../components/changelog/ChangelogSidebar.vue";
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
const versions = ref<string[]>([]);
const activeVersion = ref("");

onMounted(async () => {
  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/zulfikawr/fm/main/CHANGELOG.md",
    );
    const text = await response.text();

    // 1. Remove the main H1 header if it exists to avoid double title
    let processedText = text.replace(/^#\s+Changelog\s*$/m, "");

    // Extract versions for sidebar
    const versionMatch = processedText.match(/##\s+\[?v?(\d+\.\d+\.\d+)\]?/g);
    if (versionMatch) {
      versions.value = versionMatch
        .map((v) => {
          const m = v.match(/(\d+\.\d+\.\d+)/);
          return m ? m[1] : null;
        })
        .filter((v): v is string => v !== null);

      if (versions.value.length > 0 && versions.value[0]) {
        activeVersion.value = versions.value[0];
      }
    }

    // Process markdown to add IDs to headers for scrolling
    // This is a simple replacement, might need more robust handling if headers are complex
    processedText = processedText.replace(
      /##\s+\[?v?(\d+\.\d+\.\d+)\]?/g,
      (_match, version) => {
        return `## <a id="v${version.replace(/\./g, "-")}"></a>[v${version}]`;
      },
    );

    const html = (await marked.parse(processedText)) as string;
    changelogHtml.value = html;

    await nextTick();
    document.querySelectorAll(".changelog-md pre code").forEach((el) => {
      hljs.highlightElement(el as HTMLElement);
    });

    // Setup intersection observer for TOC
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            if (id && id.startsWith("v")) {
              activeVersion.value = id.substring(1).replace(/-/g, ".");
            }
          }
        });
      },
      {
        rootMargin: "-100px 0px -80% 0px",
        threshold: 0,
      },
    );

    document.querySelectorAll(".changelog-md h2 a[id]").forEach((el) => {
      const parentH2 = el.parentElement;
      if (parentH2) {
        // Move ID to H2 for better intersection observing
        const id = el.getAttribute("id");
        if (id) {
          parentH2.setAttribute("id", id);
          observer.observe(parentH2);
        }
      }
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
  <div class="relative flex h-auto min-h-screen w-full flex-col bg-gruv-bg">
    <Navbar />

    <div
      class="max-w-[1200px] mx-auto px-6 py-12 flex flex-col md:flex-row gap-12 grow w-full pb-32"
    >
      <ChangelogSidebar :versions="versions" :activeVersion="activeVersion" />

      <!-- Main Content -->
      <main class="flex-1 max-w-3xl">
        <h1 class="text-4xl font-bold text-gruv-fg mb-12">Changelog</h1>
        <div v-if="isLoading" class="text-gruv-fg-dim italic">
          Loading changelog...
        </div>
        <div v-else class="changelog-md" v-html="changelogHtml"></div>
      </main>
    </div>

    <Footer />
  </div>
</template>

<style scoped>
.prose {
  max-width: none;
}
</style>
