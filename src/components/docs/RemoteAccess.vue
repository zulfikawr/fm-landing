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
  <section id="remote-access" class="mb-24 scroll-mt-24">
    <h2 class="text-3xl font-bold text-gruv-fg mb-8 flex items-center gap-3">
      <span class="text-gruv-orange">#</span> Remote Access (SSH/SFTP)
    </h2>
    <p class="text-gruv-fg-dim mb-8 text-lg">
      Manage remote servers as easily as local filesystems.
    </p>

    <h3 class="text-xl font-bold text-gruv-fg mb-4">Methods to Connect</h3>
    <div class="space-y-6">
      <div
        class="bg-[#1a1a1a] rounded-lg border border-white/5 overflow-hidden"
      >
        <div
          class="bg-[#2a2a2a] px-4 py-1.5 text-[10px] text-gruv-fg-dim uppercase font-mono"
        >
          CLI Flags
        </div>
        <pre
          class="p-4 text-sm font-mono text-gruv-fg leading-relaxed overflow-x-auto"
        ><code class="language-bash"># Start directly in remote session
fm -r user@hostname

# Using specific SSH config alias
fm --remote my-server-alias</code></pre>
      </div>
      <p class="text-gruv-fg-dim text-sm">
        Alternatively, press <kbd class="kbd-key">g</kbd> inside the app and
        enter a remote address. <span class="text-gruv-fg italic">fm</span> will
        automatically detect the protocol and connect.
      </p>
    </div>

    <div
      class="mt-8 bg-gruv-orange/5 border-l-4 border-gruv-orange p-5 rounded-r-lg"
    >
      <h4 class="text-gruv-fg font-bold mb-2">Authentication</h4>
      <p class="text-gruv-fg-dim text-sm leading-relaxed">
        Supports <strong class="text-gruv-fg">SSH Agent</strong>, standard
        identity files (<span class="text-gruv-fg font-mono italic">id_rsa</span
        >, etc.), and interactive password fallback. Transfers are encrypted via
        standard SSH protocols.
      </p>
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
