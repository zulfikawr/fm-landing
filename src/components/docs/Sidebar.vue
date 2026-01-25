<script setup lang="ts">
import { ref, computed } from "vue";
import { Icon } from "@iconify/vue";

const props = defineProps<{
  sections: Array<{ id: string; title: string; versions?: string[] }>;
  activeSection: string;
}>();

const searchQuery = ref("");

const filteredSections = computed(() => {
  if (!searchQuery.value) return props.sections;
  return props.sections.filter((s) =>
    s.title.toLowerCase().includes(searchQuery.value.toLowerCase()),
  );
});
</script>

<template>
  <aside class="md:w-64 shrink-0 h-fit sticky top-12 hidden md:block">
    <div class="mb-8 relative group">
      <Icon
        icon="mdi:magnify"
        class="absolute left-3 top-1/2 -translate-y-1/2 text-gruv-fg-dim/40 group-focus-within:text-gruv-orange transition-colors"
      />
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Search docs..."
        class="w-full bg-gruv-bg-soft/50 border border-gruv-fg-dim/10 rounded py-2 pl-10 pr-4 text-sm text-gruv-fg focus:outline-none focus:border-gruv-orange/50 transition-all placeholder:text-gruv-fg-dim/30"
      />
    </div>

    <h4
      class="text-gruv-orange font-bold text-[10px] tracking-[0.2em] mb-6 uppercase opacity-80"
    >
      Documentation
    </h4>
    <nav class="flex flex-col gap-1 border-l border-gruv-fg-dim/10">
      <div v-for="section in filteredSections" :key="section.id">
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
