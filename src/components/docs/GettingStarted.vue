<script setup lang="ts">
import { onMounted } from "vue";
import hljs from "highlight.js/lib/core";
import bash from "highlight.js/lib/languages/bash";

hljs.registerLanguage("bash", bash);

onMounted(() => {
  document.querySelectorAll("pre code").forEach((el) => {
    hljs.highlightElement(el as HTMLElement);
  });
});
</script>

<template>
  <section id="getting-started" class="mb-24 scroll-mt-24">
    <h2 class="text-3xl font-bold text-gruv-fg mb-8 flex items-center gap-3">
      <span class="text-gruv-orange">#</span> Getting Started
    </h2>

    <h3 class="text-xl font-bold text-gruv-fg mb-4">Prerequisites</h3>
    <p class="text-gruv-fg-dim mb-6">
      - <strong class="text-gruv-fg">Go:</strong> 1.25.5 or later (for building
      from source)<br />
      - <strong class="text-gruv-fg">Terminal:</strong> A modern terminal with
      ANSI support.
    </p>

    <h3 class="text-xl font-bold text-gruv-fg mb-4">
      Installation from Source
    </h3>
    <div
      class="bg-[#1a1a1a] rounded-lg overflow-hidden mb-8 border border-white/5 shadow-xl"
    >
      <div
        class="bg-[#2a2a2a] px-4 py-1.5 text-[10px] text-gruv-fg-dim uppercase font-mono tracking-widest flex justify-between"
      >
        <span>Terminal</span>
        <span class="text-gruv-orange">bash</span>
      </div>
      <pre
        class="p-5 text-sm font-mono text-gruv-fg leading-relaxed overflow-x-auto"
      ><code class="language-bash"># Clone the repository
git clone https://github.com/zulfikawr/fm.git
cd fm

# Build the binary
go build -o fm ./cmd/fm

# Move it to your PATH (optional)
sudo mv fm /usr/local/bin/</code></pre>
    </div>

    <h3 class="text-xl font-bold text-gruv-fg mb-4">Launching fm</h3>
    <p class="text-gruv-fg-dim mb-4">
      Run the command in your terminal to start:
    </p>
    <div
      class="bg-[#1a1a1a] p-4 rounded font-mono text-sm text-gruv-green border border-white/5 mb-8"
    >
      $ fm [directory]
    </div>
  </section>
</template>

<style>
/* Gruvbox Syntax Highlighting */
.hljs-comment {
  color: var(--color-gruv-fg-dim);
  font-style: italic;
}
.hljs-keyword,
.hljs-selector-tag {
  color: var(--color-gruv-red);
  font-weight: bold;
}
.hljs-string {
  color: var(--color-gruv-green);
}
.hljs-title,
.hljs-section {
  color: var(--color-gruv-yellow);
  font-weight: bold;
}
.hljs-variable,
.hljs-template-variable {
  color: var(--color-gruv-blue);
}
.hljs-type,
.hljs-built_in,
.hljs-bullet,
.hljs-number,
.hljs-addition {
  color: var(--color-gruv-orange);
}
.hljs-symbol,
.hljs-attr,
.hljs-selector-attr,
.hljs-selector-pseudo,
.hljs-link {
  color: var(--color-gruv-aqua);
}
</style>
