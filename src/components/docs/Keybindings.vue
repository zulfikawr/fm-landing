<script setup lang="ts">
import { Icon } from "@iconify/vue";
</script>

<template>
  <section id="keybindings" class="mb-24 scroll-mt-24">
    <h2 class="text-3xl font-bold text-gruv-fg mb-8 flex items-center gap-3">
      <span class="text-gruv-orange">#</span> Keybindings
    </h2>

    <div class="space-y-12">
      <!-- Navigation -->
      <div>
        <h3
          class="text-lg font-bold text-gruv-orange mb-4 flex items-center gap-2"
        >
          <Icon icon="mdi:navigation" class="text-base" />
          Navigation
        </h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
          <div
            class="flex justify-between items-center p-3 bg-gruv-bg-soft rounded border border-gruv-fg-dim/5"
          >
            <span class="text-gruv-fg">Open Dir/File</span>
            <div class="flex gap-1 items-center">
              <kbd class="kbd-key">Enter</kbd> / <kbd class="kbd-key">l</kbd> /
              <kbd class="kbd-key">→</kbd>
            </div>
          </div>
          <div
            class="flex justify-between items-center p-3 bg-gruv-bg-soft rounded border border-gruv-fg-dim/5"
          >
            <span class="text-gruv-fg">Parent Directory</span>
            <div class="flex gap-1 items-center">
              <kbd class="kbd-key">BS</kbd> / <kbd class="kbd-key">h</kbd> /
              <kbd class="kbd-key">←</kbd>
            </div>
          </div>
          <div
            class="flex justify-between items-center p-3 bg-gruv-bg-soft rounded border border-gruv-fg-dim/5"
          >
            <span class="text-gruv-fg">Move Down</span>
            <div class="flex gap-1 items-center">
              <kbd class="kbd-key">j</kbd> / <kbd class="kbd-key">↓</kbd>
            </div>
          </div>
          <div
            class="flex justify-between items-center p-3 bg-gruv-bg-soft rounded border border-gruv-fg-dim/5"
          >
            <span class="text-gruv-fg">Move Up</span>
            <div class="flex gap-1 items-center">
              <kbd class="kbd-key">k</kbd> / <kbd class="kbd-key">↑</kbd>
            </div>
          </div>
          <div
            class="flex justify-between items-center p-3 bg-gruv-bg-soft rounded border border-gruv-fg-dim/5"
          >
            <span class="text-gruv-fg">Go to path</span>
            <kbd class="kbd-key">g</kbd>
          </div>
          <div
            class="flex justify-between items-center p-3 bg-gruv-bg-soft rounded border border-gruv-fg-dim/5"
          >
            <span class="text-gruv-fg">History Back</span>
            <kbd class="kbd-key">[</kbd>
          </div>
          <div
            class="flex justify-between items-center p-3 bg-gruv-bg-soft rounded border border-gruv-fg-dim/5"
          >
            <span class="text-gruv-fg">History Forward</span>
            <kbd class="kbd-key">]</kbd>
          </div>
        </div>
      </div>

      <!-- Selection -->
      <div>
        <h3
          class="text-lg font-bold text-gruv-orange mb-4 flex items-center gap-2"
        >
          <Icon icon="mdi:checkbox-marked-outline" class="text-base" />
          Selection & Bulk
        </h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
          <div
            class="flex justify-between items-center p-3 bg-gruv-bg-soft rounded border border-gruv-fg-dim/5"
          >
            <span class="text-gruv-fg">Toggle Selection</span>
            <kbd class="kbd-key">Space</kbd>
          </div>
          <div
            class="flex justify-between items-center p-3 bg-gruv-bg-soft rounded border border-gruv-fg-dim/5"
          >
            <span class="text-gruv-fg">Select All</span>
            <div class="flex gap-1 items-center">
              <kbd class="kbd-key">Alt</kbd> + <kbd class="kbd-key">A</kbd>
            </div>
          </div>
          <div
            class="flex justify-between items-center p-3 bg-gruv-bg-soft rounded border border-gruv-fg-dim/5"
          >
            <span class="text-gruv-fg">Clear Selection</span>
            <kbd class="kbd-key">Esc</kbd>
          </div>
        </div>
      </div>

      <!-- Tabs -->
      <div>
        <h3
          class="text-lg font-bold text-gruv-orange mb-4 flex items-center gap-2"
        >
          <Icon icon="mdi:tab" class="text-base" /> Tabs
        </h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
          <div
            class="flex justify-between items-center p-3 bg-gruv-bg-soft rounded border border-gruv-fg-dim/5"
          >
            <span class="text-gruv-fg">New Tab</span>
            <div class="flex gap-1 items-center">
              <kbd class="kbd-key">Alt</kbd> + <kbd class="kbd-key">T</kbd>
            </div>
          </div>
          <div
            class="flex justify-between items-center p-3 bg-gruv-bg-soft rounded border border-gruv-fg-dim/5"
          >
            <span class="text-gruv-fg">Close Tab</span>
            <div class="flex gap-1 items-center">
              <kbd class="kbd-key">Alt</kbd> + <kbd class="kbd-key">W</kbd>
            </div>
          </div>
          <div
            class="flex justify-between items-center p-3 bg-gruv-bg-soft rounded border border-gruv-fg-dim/5"
          >
            <span class="text-gruv-fg">Switch Tab</span>
            <div class="flex gap-1 items-center">
              <kbd class="kbd-key">Alt</kbd> + <kbd class="kbd-key">1-9</kbd>
            </div>
          </div>
        </div>
      </div>

      <!-- Operations -->
      <div>
        <h3
          class="text-lg font-bold text-gruv-orange mb-4 flex items-center gap-2"
        >
          <Icon icon="mdi:content-copy" class="text-base" />
          File Operations
        </h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
          <div
            class="flex justify-between items-center p-3 bg-gruv-bg-soft rounded border border-gruv-fg-dim/5"
          >
            <span class="text-gruv-fg">Copy / Yank</span>
            <div class="flex gap-1 items-center">
              <kbd class="kbd-key">c</kbd> / <kbd class="kbd-key">y</kbd>
            </div>
          </div>
          <div
            class="flex justify-between items-center p-3 bg-gruv-bg-soft rounded border border-gruv-fg-dim/5"
          >
            <span class="text-gruv-fg">Cut</span>
            <kbd class="kbd-key">x</kbd>
          </div>
          <div
            class="flex justify-between items-center p-3 bg-gruv-bg-soft rounded border border-gruv-fg-dim/5"
          >
            <span class="text-gruv-fg">Paste</span>
            <kbd class="kbd-key">v</kbd>
          </div>
          <div
            class="flex justify-between items-center p-3 bg-gruv-bg-soft rounded border border-gruv-fg-dim/5"
          >
            <span class="text-gruv-fg">Rename</span>
            <kbd class="kbd-key">r</kbd>
          </div>
          <div
            class="flex justify-between items-center p-3 bg-gruv-bg-soft rounded border border-gruv-fg-dim/5"
          >
            <span class="text-gruv-fg">Move to Trash</span>
            <kbd class="kbd-key">d</kbd>
          </div>
          <div
            class="flex justify-between items-center p-3 bg-gruv-bg-soft rounded border border-gruv-fg-dim/5"
          >
            <span class="text-gruv-fg">New File/Folder</span>
            <div class="flex gap-1 items-center">
              <kbd class="kbd-key">Alt</kbd> + <kbd class="kbd-key">N</kbd>
            </div>
          </div>
          <div
            class="flex justify-between items-center p-3 bg-gruv-bg-soft rounded border border-gruv-fg-dim/5"
          >
            <span class="text-gruv-fg">Zip Archive</span>
            <kbd class="kbd-key">z</kbd>
          </div>
          <div
            class="flex justify-between items-center p-3 bg-gruv-bg-soft rounded border border-gruv-fg-dim/5"
          >
            <span class="text-gruv-fg">Unzip Archive</span>
            <kbd class="kbd-key">u</kbd>
          </div>
        </div>
      </div>

      <!-- Search -->
      <div>
        <h3
          class="text-lg font-bold text-gruv-orange mb-4 flex items-center gap-2"
        >
          <Icon icon="mdi:magnify" class="text-base" /> Search
          & Filter
        </h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
          <div
            class="flex justify-between items-center p-3 bg-gruv-bg-soft rounded border border-gruv-fg-dim/5"
          >
            <span class="text-gruv-fg">Filter Listing</span>
            <kbd class="kbd-key">/</kbd>
          </div>
          <div
            class="flex justify-between items-center p-3 bg-gruv-bg-soft rounded border border-gruv-fg-dim/5"
          >
            <span class="text-gruv-fg">Deep Content Search</span>
            <div class="flex gap-1 items-center">
              <kbd class="kbd-key">Alt</kbd> + <kbd class="kbd-key">/</kbd>
            </div>
          </div>
          <div
            class="flex justify-between items-center p-3 bg-gruv-bg-soft rounded border border-gruv-fg-dim/5"
          >
            <span class="text-gruv-fg">Jump Results</span>
            <div class="flex gap-1 items-center">
              <kbd class="kbd-key">Alt</kbd> + <kbd class="kbd-key">M</kbd> /
              <kbd class="kbd-key">N</kbd>
            </div>
          </div>
        </div>
      </div>

      <!-- Misc -->
      <div>
        <h3
          class="text-lg font-bold text-gruv-orange mb-4 flex items-center gap-2"
        >
          <Icon icon="mdi:dots-horizontal" class="text-base" />
          Miscellaneous
        </h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
          <div
            class="flex justify-between items-center p-3 bg-gruv-bg-soft rounded border border-gruv-fg-dim/5"
          >
            <span class="text-gruv-fg">View Clipboard</span>
            <div class="flex gap-1 items-center">
              <kbd class="kbd-key">Alt</kbd> + <kbd class="kbd-key">C</kbd>
            </div>
          </div>
          <div
            class="flex justify-between items-center p-3 bg-gruv-bg-soft rounded border border-gruv-fg-dim/5"
          >
            <span class="text-gruv-fg">Operation Logs</span>
            <div class="flex gap-1 items-center">
              <kbd class="kbd-key">Alt</kbd> + <kbd class="kbd-key">L</kbd>
            </div>
          </div>
          <div
            class="flex justify-between items-center p-3 bg-gruv-bg-soft rounded border border-gruv-fg-dim/5"
          >
            <span class="text-gruv-fg">Cycle Sort Mode</span>
            <kbd class="kbd-key">s</kbd>
          </div>
          <div
            class="flex justify-between items-center p-3 bg-gruv-bg-soft rounded border border-gruv-fg-dim/5"
          >
            <span class="text-gruv-fg">Settings Menu</span>
            <kbd class="kbd-key">.</kbd>
          </div>
          <div
            class="flex justify-between items-center p-3 bg-gruv-bg-soft rounded border border-gruv-fg-dim/5"
          >
            <span class="text-gruv-fg">Quit Application</span>
            <div class="flex gap-1 items-center">
              <kbd class="kbd-key">Ctrl</kbd> + <kbd class="kbd-key">C</kbd>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>