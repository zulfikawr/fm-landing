<script setup lang="ts">
import { Icon } from "@iconify/vue";
</script>

<template>
  <div class="bg-gruv-bg-soft/50 py-20 px-6" id="features">
    <div class="max-w-[1200px] mx-auto">
      <div class="flex flex-col gap-4 mb-16 text-center">
        <h2 class="text-4xl font-bold tracking-tight text-gruv-fg">
          Key Features
        </h2>
        <p class="text-gruv-fg-dim max-w-2xl mx-auto">
          Built for speed and extensibility with a focus on developer workflow
          and system efficiency.
        </p>
      </div>
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 select-none"
      >
        <div
          class="flex flex-col gap-4 rounded border border-gruv-fg-dim/10 bg-gruv-bg p-8 hover:border-gruv-orange/50 transition-all group"
        >
          <div
            class="text-gruv-orange size-12 flex items-center justify-center bg-gruv-orange/10 rounded group-hover:scale-110 transition-transform"
          >
            <Icon icon="mdi:bolt" class="text-2xl" />
          </div>
          <div>
            <h3 class="text-xl font-bold mb-2 text-gruv-fg">
              Extreme Performance
            </h3>
            <p class="text-gruv-fg-dim leading-relaxed">
              Built with Go's concurrency model for near-instant response times,
              even in directories with millions of files.
            </p>
          </div>
        </div>
        <div
          class="flex flex-col gap-4 rounded border border-gruv-fg-dim/10 bg-gruv-bg p-8 hover:border-gruv-blue/50 transition-all group"
        >
          <div
            class="text-gruv-blue size-12 flex items-center justify-center bg-gruv-blue/10 rounded group-hover:scale-110 transition-transform"
          >
            <Icon icon="mdi:cloud-sync" class="text-2xl" />
          </div>
          <div>
            <h3 class="text-xl font-bold mb-2 text-gruv-fg">Remote SSH/SFTP</h3>
            <p class="text-gruv-fg-dim leading-relaxed">
              Mount and manage remote file systems as if they were local. Fully
              integrated into the TUI navigation.
            </p>
          </div>
        </div>
        <div
          class="flex flex-col gap-4 rounded border border-gruv-fg-dim/10 bg-gruv-bg p-8 hover:border-gruv-green/50 transition-all group"
        >
          <div
            class="text-gruv-green size-12 flex items-center justify-center bg-gruv-green/10 rounded group-hover:scale-110 transition-transform"
          >
            <Icon icon="mdi:git" class="text-2xl" />
          </div>
          <div>
            <h3 class="text-xl font-bold mb-2 text-gruv-fg">Git Integration</h3>
            <p class="text-gruv-fg-dim leading-relaxed">
              Visual branch indicators and file status (added, modified,
              ignored) baked directly into the directory tree.
            </p>
          </div>
        </div>
        <div
          class="flex flex-col gap-4 rounded border border-gruv-fg-dim/10 bg-gruv-bg p-8 hover:border-gruv-yellow/50 transition-all group"
        >
          <div
            class="text-gruv-yellow size-12 flex items-center justify-center bg-gruv-yellow/10 rounded group-hover:scale-110 transition-transform"
          >
            <Icon icon="mdi:magnify" class="text-2xl" />
          </div>
          <div>
            <h3 class="text-xl font-bold mb-2 text-gruv-fg">Fuzzy Search</h3>
            <p class="text-gruv-fg-dim leading-relaxed">
              Instant file discovery using fzf-like fuzzy matching logic.
              Navigate complex projects in seconds.
            </p>
          </div>
        </div>
        <div
          class="flex flex-col gap-4 rounded border border-gruv-fg-dim/10 bg-gruv-bg p-8 hover:border-gruv-aqua/50 transition-all group"
        >
          <div
            class="text-gruv-aqua size-12 flex items-center justify-center bg-gruv-aqua/10 rounded group-hover:scale-110 transition-transform"
          >
            <Icon icon="mdi:tab" class="text-2xl" />
          </div>
          <div>
            <h3 class="text-xl font-bold mb-2 text-gruv-fg">
              Tabbed Navigation
            </h3>
            <p class="text-gruv-fg-dim leading-relaxed">
              Manage multiple locations across different tabs. Switch contexts
              instantly with easy keybindings.
            </p>
          </div>
        </div>
        <div
          class="flex flex-col gap-4 rounded border border-gruv-fg-dim/10 bg-gruv-bg p-8 hover:border-gruv-orange/50 transition-all group"
        >
          <div
            class="text-gruv-orange size-12 flex items-center justify-center bg-gruv-orange/10 rounded group-hover:scale-110 transition-transform"
          >
            <Icon icon="mdi:archive" class="text-2xl" />
          </div>
          <div>
            <h3 class="text-xl font-bold mb-2 text-gruv-fg">Archive Support</h3>
            <p class="text-gruv-fg-dim leading-relaxed">
              Create and extract Zip/Tar archives directly in the UI.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
