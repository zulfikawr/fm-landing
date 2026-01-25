<script setup lang="ts">
import { ref, onMounted } from "vue";
import { Icon } from "@iconify/vue";
import Preview from "./Preview.vue";

const releaseTag = ref("...");

onMounted(async () => {
  try {
    const response = await fetch(
      "https://api.github.com/repos/zulfikawr/fm/releases/latest",
    );
    const data = await response.json();
    if (data.tag_name) {
      releaseTag.value = data.tag_name;
    }
  } catch (error) {
    console.error("Failed to fetch release tag:", error);
    releaseTag.value = "v1.0.1";
  }
});
</script>

<template>
  <div class="px-6 pt-16 pb-16 md:pb-24 max-w-[1200px] mx-auto">
    <div class="flex flex-col lg:flex-row gap-12 items-center">
      <div class="flex flex-col gap-8 flex-1">
        <div class="flex flex-col gap-4">
          <h1
            class="text-5xl md:text-7xl font-black leading-[1.1] tracking-[-0.033em] text-gruv-fg"
          >
            <span class="text-gruv-orange">#</span> FM - Terminal File Manager
          </h1>
          <p
            class="text-lg md:text-xl text-gruv-fg-dim font-normal leading-relaxed max-w-[600px]"
          >
            A fast, modular, and feature-rich TUI file manager written in Go.
            Effortless navigation, native remote support, and extreme
            performance.
          </p>
        </div>
        <div class="flex flex-wrap gap-3">
          <div
            class="px-3 py-1 bg-gruv-bg-soft border border-gruv-fg-dim/20 rounded flex items-center gap-2"
          >
            <span class="text-[10px] font-bold text-gruv-yellow uppercase"
              >Release</span
            >
            <span class="text-xs font-mono font-bold text-gruv-fg">{{
              releaseTag
            }}</span>
          </div>
          <div
            class="px-3 py-1 bg-gruv-bg-soft border border-gruv-fg-dim/20 rounded flex items-center gap-2"
          >
            <span class="text-[10px] font-bold text-gruv-aqua uppercase"
              >Go Version</span
            >
            <span class="text-xs font-mono font-bold text-gruv-fg">1.25+</span>
          </div>
          <div
            class="px-3 py-1 bg-gruv-bg-soft border border-gruv-fg-dim/20 rounded flex items-center gap-2"
          >
            <span class="text-[10px] font-bold text-gruv-green uppercase"
              >License</span
            >
            <span class="text-xs font-mono font-bold text-gruv-fg">MIT</span>
          </div>
        </div>
        <div class="flex flex-wrap gap-4">
          <a
            href="https://github.com/zulfikawr/fm/releases/latest"
            target="_blank"
            rel="noopener noreferrer"
            class="flex min-w-[160px] cursor-pointer items-center justify-center gap-2 rounded h-12 px-6 bg-gruv-orange text-gruv-bg text-base font-bold tracking-wide hover:brightness-110 shadow-lg shadow-gruv-orange/20"
          >
            <Icon icon="mdi:download" class="text-xl" />
            Download Now
          </a>
          <a
            href="/docs"
            class="flex min-w-[160px] cursor-pointer items-center justify-center gap-2 rounded h-12 px-6 bg-gruv-bg-soft border border-gruv-fg-dim/30 text-gruv-fg text-base font-bold tracking-wide hover:bg-gruv-fg-dim/10 transition-colors"
          >
            <Icon icon="mdi:book-open-variant" class="text-xl" />
            Documentation
          </a>
        </div>
      </div>
      <Preview />
    </div>
  </div>
</template>
