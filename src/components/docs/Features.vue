<template>
  <section id="features" class="mb-24 scroll-mt-24">
    <h2 class="text-3xl font-bold text-gruv-fg mb-8 flex items-center gap-3">
      <span class="text-gruv-orange">#</span> Key Features
    </h2>
    <div class="space-y-8">
      <div class="bg-gruv-bg-soft p-6 rounded-lg border border-gruv-fg-dim/10">
        <h3 class="text-xl font-bold text-gruv-fg mb-3 flex items-center gap-2">
          <span class="text-gruv-green">🌿</span> Git Integration
        </h3>
        <p class="text-gruv-fg-dim leading-relaxed mb-4">
          Real-time Git status updates for your files. Markers like
          <span class="text-gruv-orange font-bold">M</span>,
          <span class="text-gruv-green font-bold">A</span>, and
          <span class="text-gruv-red font-bold">D</span> appear directly in the
          file list. Current branch is displayed in the header.
        </p>
        <div class="flex flex-wrap gap-2 text-xs font-mono">
          <span
            class="px-2 py-1 bg-gruv-orange/10 text-gruv-orange rounded border border-gruv-orange/20"
            >M - Modified</span
          >
          <span
            class="px-2 py-1 bg-gruv-green/10 text-gruv-green rounded border border-gruv-green/20"
            >A - Added</span
          >
          <span
            class="px-2 py-1 bg-gruv-red/10 text-gruv-red rounded border border-gruv-red/20"
            >D - Deleted</span
          >
          <span
            class="px-2 py-1 bg-gruv-fg-dim/10 text-gruv-fg-dim rounded border border-gruv-fg-dim/20"
            >! - Ignored</span
          >
        </div>
      </div>

      <div class="bg-gruv-bg-soft p-6 rounded-lg border border-gruv-fg-dim/10">
        <h3 class="text-xl font-bold text-gruv-fg mb-3 flex items-center gap-2">
          <span class="text-gruv-blue">🔎</span> Deep Content Search
        </h3>
        <p class="text-gruv-fg-dim leading-relaxed">
          Uses a worker-pool architecture to search thousands of files quickly.
          Automatically respects
          <span class="text-gruv-fg font-mono">.gitignore</span> and skips
          binary files for maximum speed and relevance. Grouped results allow
          you to jump directly to any line in your editor.
        </p>
      </div>

      <div class="bg-gruv-bg-soft p-6 rounded-lg border border-gruv-fg-dim/10">
        <h3 class="text-xl font-bold text-gruv-fg mb-3 flex items-center gap-2">
          <span class="text-gruv-yellow">📦</span> Archive Management
        </h3>
        <p class="text-gruv-fg-dim leading-relaxed">
          Native support for
          <span class="text-gruv-fg font-mono">.zip</span> and
          <span class="text-gruv-fg font-mono">.tar.gz</span>. Create archives
          with <kbd class="kbd-key">z</kbd> and extract with
          <kbd class="kbd-key">u</kbd>. Built-in ZipSlip protection ensures
          secure extraction.
        </p>
      </div>

      <div class="bg-gruv-bg-soft p-6 rounded-lg border border-gruv-fg-dim/10">
        <h3 class="text-xl font-bold text-gruv-fg mb-3 flex items-center gap-2">
          <span class="text-gruv-red">🛡️</span> Conflict Resolution
        </h3>
        <p class="text-gruv-fg-dim leading-relaxed">
          Graceful handling of name collisions during move/copy operations.
          Choose between <strong class="text-gruv-fg">Overwrite</strong>,
          <strong class="text-gruv-fg">Skip</strong>, or
          <strong class="text-gruv-fg">Auto-rename</strong> (appends a suffix)
          via interactive prompts.
        </p>
      </div>
    </div>
  </section>
</template>
