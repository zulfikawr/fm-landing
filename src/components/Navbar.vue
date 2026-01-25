<script setup lang="ts">
import { Icon } from "@iconify/vue";
</script>

<template>
  <div
    class="w-full border-b border-solid border-gruv-fg-dim/10 bg-gruv-bg/90 backdrop-blur-md"
  >
    <div
      class="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between"
    >
      <div class="flex items-center gap-3">
        <router-link
          to="/"
          class="text-xl font-bold tracking-tight text-gruv-fg"
        >
          <span class="text-gruv-orange">#</span> FM
        </router-link>
      </div>

      <div class="flex items-center gap-4">
        <router-link
          to="/docs"
          class="text-sm font-bold text-gruv-fg-dim hover:text-gruv-orange px-4 py-2 rounded border border-gruv-fg-dim/20 hover:border-gruv-orange/50 transition-all"
        >
          Documentation
        </router-link>
        <a
          href="https://github.com/zulfikawr/fm"
          target="_blank"
          rel="noopener noreferrer"
          class="flex min-w-[100px] items-center justify-center gap-2 rounded border border-gruv-orange/50 h-10 px-4 bg-gruv-orange/10 text-gruv-orange text-sm font-bold leading-normal hover:bg-gruv-orange hover:text-gruv-bg transition-all"
        >
          <Icon icon="mdi:github" class="text-xl" />
          <span>GitHub</span>
        </a>
      </div>
    </div>
  </div>
</template>
