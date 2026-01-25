<script setup lang="ts">
defineProps<{
  versions: string[];
  activeVersion: string;
}>();

const getVersionId = (version: string) => {
  return "v" + version.replace(/\./g, "-");
};
</script>

<template>
  <aside class="md:w-64 shrink-0 h-fit sticky top-12 hidden md:block">
    <h4
      class="text-gruv-orange font-bold text-xs tracking-widest mb-6 uppercase"
    >
      Releases
    </h4>
    <nav
      class="flex flex-col gap-1 border-l border-gruv-fg-dim/10 max-h-[calc(100vh-200px)] overflow-y-auto pr-2 custom-scrollbar"
    >
      <a
        v-for="(version, index) in versions"
        :key="version"
        :href="'#' + getVersionId(version)"
        class="text-sm transition-all py-1.5 pl-4 border-l-2 -ml-[2px] flex items-center justify-between pr-2"
        :class="
          activeVersion === version
            ? 'text-gruv-fg border-gruv-orange font-bold bg-gruv-orange/5'
            : 'text-gruv-fg-dim border-transparent hover:text-gruv-fg hover:border-gruv-fg-dim/30'
        "
      >
        <span>v{{ version }}</span>
        <span
          v-if="index === 0"
          class="text-[10px] bg-gruv-orange/20 text-gruv-orange px-1.5 py-0.5 rounded-full font-bold uppercase tracking-tighter"
        >
          latest
        </span>
      </a>
    </nav>
  </aside>
</template>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  width: 4px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(168, 153, 132, 0.2);
  border-radius: 10px;
}
.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: rgba(168, 153, 132, 0.4);
}
</style>
