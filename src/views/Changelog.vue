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
    // We add a marker to identify and set IDs after parsing
    processedText = processedText.replace(
      /##\s+\[?v?(\d+\.\d+\.\d+)\]?/g,
      (_match, version) => {
        return `## [v${version}] <!-- id:v${version.replace(/\./g, "-")} -->`;
      },
    );

    const html = (await marked.parse(processedText)) as string;
    
    // Post-process HTML to move IDs from comments to headers
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;
    tempDiv.querySelectorAll('h2').forEach(h2 => {
      const commentMatch = h2.innerHTML.match(/<!--\s*id:(v[\w-]+)\s*-->/);
      if (commentMatch && commentMatch[1]) {
        h2.id = commentMatch[1];
        h2.innerHTML = h2.innerHTML.replace(/<!--\s*id:v[\w-]+\s*-->/, '');
        h2.classList.add('scroll-mt-24');
      }
    });
    
    changelogHtml.value = tempDiv.innerHTML;

    await nextTick();
    document.querySelectorAll(".changelog-md pre code").forEach((el) => {
      hljs.highlightElement(el as HTMLElement);
    });

    } finally {
    isLoading.value = false;
  }

  // Setup intersection observer for TOC after loading is complete
  await nextTick();
  
  const observer = new IntersectionObserver(
    (entries) => {
      // Filter for elements that are currently entering or inside the viewport
      const intersecting = entries.filter(e => e.isIntersecting);
      if (intersecting.length > 0) {
        // Find the one closest to the top of the viewport
        const topMost = intersecting.reduce((prev, curr) => {
          return (Math.abs(curr.boundingClientRect.top) < Math.abs(prev.boundingClientRect.top)) ? curr : prev;
        });
        
        const id = topMost.target.id;
        if (id && id.startsWith("v")) {
          activeVersion.value = id.substring(1).replace(/-/g, ".");
        }
      }
    },
    {
      rootMargin: "-80px 0px -80% 0px",
      threshold: [0, 1.0],
    },
  );

  document.querySelectorAll(".changelog-md h2[id^='v']").forEach((el) => {
    observer.observe(el);
  });
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
