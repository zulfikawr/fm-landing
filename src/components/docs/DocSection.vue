<script setup lang="ts">
import { ref, onMounted, nextTick, watch } from "vue";
import { Icon } from "@iconify/vue";
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
const lastUpdated = ref("");
const toc = ref<{ id: string; text: string }[]>([]);
const activeSubSection = ref("");

const CACHE_KEY = (file: string) => `doc_cache_${file}`;

let observer: IntersectionObserver | null = null;

const setupObserver = () => {
  if (observer) observer.disconnect();

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeSubSection.value = entry.target.id;
        }
      });
    },
    {
      rootMargin: "-100px 0px -80% 0px",
      threshold: 0,
    },
  );

  const sectionEl = document.getElementById(props.id);
  if (sectionEl) {
    sectionEl.querySelectorAll("h3[id]").forEach((el) => {
      observer?.observe(el);
    });
  }
};

const fetchContent = async () => {
  const cached = localStorage.getItem(CACHE_KEY(props.fileName));
  if (cached) {
    const data = JSON.parse(cached);
    htmlContent.value = data.html;
    lastUpdated.value = data.updated;
    isLoading.value = false;
    await nextTick();
    setupObserver();
  }

  try {
    const [contentRes, commitRes] = await Promise.all([
      fetch(
        `https://raw.githubusercontent.com/zulfikawr/fm/main/docs/${props.fileName}`,
      ),
      fetch(
        `https://api.github.com/repos/zulfikawr/fm/commits?path=docs/${props.fileName}&per_page=1`,
      ),
    ]);

    let text = await contentRes.text();

    // 1. Remove the main H1 header
    text = text.replace(/^#\s+.+$/m, "");

    // 2. Fix local markdown links
    text = text.replace(
      /\[([^\]]+)\]\((\.\/)?([^)]+)\.md\)/g,
      (_match, title, _dotSlash, filename) => {
        if (filename === "index") return `[${title}](#introduction)`;
        return `[${title}](#${filename})`;
      },
    );

    // 3. Extract TOC (H3 tags) and add IDs
    const tocItems: { id: string; text: string }[] = [];
    // We add a marker to identify and set IDs after parsing
    text = text.replace(/^###\s+(.+)$/gm, (_match, title) => {
      const id = title.toLowerCase().replace(/[^\w]+/g, "-");
      tocItems.push({ id, text: title });
      return `### ${title} <!-- id:${id} -->`;
    });
    toc.value = tocItems;

    const html = (await marked.parse(text)) as string;

    // Post-process HTML to move IDs from comments to headers
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;
    tempDiv.querySelectorAll("h3").forEach((h3) => {
      const commentMatch = h3.innerHTML.match(/<!-- id:([\w-]+) -->/);
      if (commentMatch && commentMatch[1]) {
        h3.id = commentMatch[1];
        h3.innerHTML = h3.innerHTML.replace(/<!-- id:[\w-]+ -->/, "");
      }
    });

    htmlContent.value = tempDiv.innerHTML;

    // Last updated from GitHub
    const commits = await commitRes.json();
    if (commits && commits[0]) {
      const date = new Date(commits[0].commit.committer.date);
      lastUpdated.value = date.toLocaleDateString(undefined, {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    }

    // Cache it
    localStorage.setItem(
      CACHE_KEY(props.fileName),
      JSON.stringify({
        html: htmlContent.value,
        updated: lastUpdated.value,
      }),
    );

    // 4. Syntax highlighting and observer setup
    await nextTick();
    setupObserver();
    
    const sectionEl = document.getElementById(props.id);
    if (sectionEl) {
      // Syntax highlighting
      sectionEl.querySelectorAll("pre code").forEach((el) => {
        hljs.highlightElement(el as HTMLElement);
      });

      // Add copy buttons to code blocks
      sectionEl.querySelectorAll("pre").forEach((pre) => {
        if (pre.querySelector(".copy-button")) return;
        
        pre.style.position = "relative";
        pre.classList.add("group/code");
        
        const button = document.createElement("button");
        button.className = "copy-button absolute top-3 right-3 p-2 rounded-md bg-gruv-bg-soft border border-gruv-fg-dim/20 text-gruv-fg-dim hover:text-gruv-orange hover:border-gruv-orange/50 transition-all opacity-0 group-hover/code:opacity-100 cursor-pointer z-10";
        button.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>`;
        button.title = "Copy to clipboard";
        
        button.onclick = async () => {
          const code = pre.querySelector("code")?.innerText || "";
          try {
            await navigator.clipboard.writeText(code);
            button.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gruv-green"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
            setTimeout(() => {
              button.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>`;
            }, 2000);
          } catch (err) {
            console.error("Failed to copy:", err);
          }
        };
        
        pre.appendChild(button);
      });
    }
  } catch (error) {
    console.error(`Failed to fetch doc section ${props.id}:`, error);
    if (!htmlContent.value) {
      htmlContent.value = `<p style="color: var(--color-gruv-red)">Failed to load section: ${props.title}</p>`;
    }
  } finally {
    isLoading.value = false;
  }
};

onMounted(fetchContent);
watch(() => props.fileName, fetchContent);
</script>

<template>
  <section :id="id" class="mb-32 scroll-mt-24 relative group/section">
    <div class="flex flex-col gap-2 mb-8">
      <h2 class="text-3xl font-bold text-gruv-fg flex items-center gap-3">
        <span class="text-gruv-orange">#</span> {{ title }}
      </h2>
      <div
        v-if="lastUpdated"
        class="text-[10px] text-gruv-fg-dim/50 uppercase tracking-widest"
      >
        Last updated: {{ lastUpdated }}
      </div>
    </div>

    <!-- Page TOC for desktop -->
    <div
      v-if="toc.length > 0"
      class="hidden xl:block absolute left-full ml-12 top-0 w-48 h-full"
    >
      <div class="sticky top-24">
        <h5
          class="text-[10px] font-bold text-gruv-fg-dim/40 uppercase tracking-widest mb-4"
        >
          On this page
        </h5>
        <ul class="flex flex-col gap-3 border-l border-gruv-fg-dim/10">
          <li v-for="item in toc" :key="item.id">
            <a
              :href="'#' + item.id"
              class="text-xs pl-4 block transition-all border-l-2 -ml-[1px]"
              :class="
                activeSubSection === item.id
                  ? 'text-gruv-orange border-gruv-orange font-bold'
                  : 'text-gruv-fg-dim border-transparent hover:text-gruv-fg hover:border-gruv-fg-dim/30'
              "
            >
              {{ item.text }}
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div v-if="isLoading && !htmlContent" class="text-gruv-fg-dim italic">
      Loading {{ title.toLowerCase() }}...
    </div>
    <div v-else class="doc-content-md" v-html="htmlContent"></div>

    <div
      class="mt-12 pt-6 border-t border-gruv-fg-dim/5 flex justify-between items-center"
    >
      <a
        :href="`https://github.com/zulfikawr/fm/edit/main/docs/${fileName}`"
        target="_blank"
        class="text-xs text-gruv-fg-dim hover:text-gruv-orange flex items-center gap-2 transition-colors"
      >
        <Icon icon="mdi:pencil" />
        Edit this page on GitHub
      </a>
    </div>
  </section>
</template>
