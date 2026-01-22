<script setup lang="ts">
defineProps<{
  sections: Array<{ id: string; title: string; versions?: string[] }>;
  activeSection: string;
}>();
</script>

<template>
  <aside class="md:w-64 shrink-0 h-fit sticky top-12 hidden md:block">
    <h4
      class="text-gruv-orange font-bold text-xs tracking-widest mb-6 uppercase"
    >
      Documentation
    </h4>
    <nav class="flex flex-col gap-1 border-l border-gruv-fg-dim/10">
      <div v-for="section in sections" :key="section.id">
        <a
          :href="'#' + section.id"
          class="text-sm transition-all py-1.5 pl-4 border-l-2 -ml-[2px] block"
          :class="
            activeSection === section.id
              ? 'text-gruv-fg border-gruv-orange font-bold bg-gruv-orange/5'
              : 'text-gruv-fg-dim border-transparent hover:text-gruv-fg hover:border-gruv-fg-dim/30'
          "
        >
          {{ section.title }}
        </a>

        <!-- Nested versions for changelog -->
        <div
          v-if="section.versions && section.versions.length"
          class="flex flex-col mt-1 mb-2"
        >
          <span
            v-for="version in section.versions"
            :key="version"
            class="text-[11px] text-gruv-fg-dim/60 pl-10 py-0.5 hover:text-gruv-orange transition-colors cursor-default"
          >
            v{{ version }}
          </span>
        </div>
      </div>
    </nav>
  </aside>
</template>
