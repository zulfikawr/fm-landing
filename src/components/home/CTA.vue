<script setup lang="ts">
import { Icon } from "@iconify/vue";
</script>

<template>
  <div
    class="py-24 px-6 bg-gruv-bg border-t border-gruv-fg-dim/5 overflow-hidden relative"
  >
    <!-- Decorative background elements -->
    <div
      class="absolute -top-24 -right-24 size-64 bg-gruv-orange/5 rounded-full blur-3xl"
    ></div>
    <div
      class="absolute -bottom-24 -left-24 size-64 bg-gruv-aqua/5 rounded-full blur-3xl"
    ></div>

    <div class="max-w-[1200px] mx-auto text-center relative z-10">
      <div class="mb-12">
        <h2
          class="text-4xl md:text-5xl font-black text-gruv-fg mb-6 tracking-tight"
        >
          Ready to supercharge your
          <span class="text-gruv-orange">workflow?</span>
        </h2>
        <p class="text-xl text-gruv-fg-dim max-w-2xl mx-auto leading-relaxed">
          Join the community of developers who prefer speed, modularity, and the
          power of the terminal.
        </p>
      </div>

      <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <a
          href="https://github.com/zulfikawr/fm"
          target="_blank"
          rel="noopener noreferrer"
          class="flex min-w-[200px] items-center justify-center gap-3 rounded h-14 px-8 bg-gruv-orange text-gruv-bg text-lg font-bold hover:brightness-110 transition-all shadow-xl shadow-gruv-orange/20"
        >
          <Icon icon="mdi:star" class="text-2xl" />
          Star on GitHub
        </a>
        <a
          href="https://github.com/zulfikawr/fm/discussions"
          target="_blank"
          rel="noopener noreferrer"
          class="flex min-w-[200px] items-center justify-center gap-3 rounded h-14 px-8 bg-gruv-bg border border-gruv-fg-dim/30 text-gruv-fg text-lg font-bold hover:bg-gruv-fg-dim/10 transition-all"
        >
          <Icon icon="mdi:forum" class="text-2xl" />
          Join Discussion
        </a>
      </div>

      <p class="mt-12 text-gruv-fg-dim/50 text-sm">
        Free and Open Source under the
        <span class="text-gruv-fg-dim">MIT License</span>.
      </p>
    </div>
  </div>
</template>
