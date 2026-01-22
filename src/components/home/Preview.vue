<script setup lang="ts">
import { ref, onMounted, watch } from "vue";

interface FileItem {
  name: string;
  size: string;
  type: string;
  path?: string;
  status: string;
  statusColor: string;
  isParent?: boolean;
}

const selectedIndex = ref(0);
const currentPath = ref("");
const files = ref<FileItem[]>([]);
const isLoading = ref(true);

const fetchFiles = async (path: string) => {
  isLoading.value = true;
  try {
    const response = await fetch(
      `https://api.github.com/repos/zulfikawr/fm/contents/${path}`,
    );
    const data = await response.json();

    if (Array.isArray(data)) {
      // Sort: Directories first, then alphabetically
      const sortedData = data.sort((a, b) => {
        if (a.type === b.type) {
          return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
        }
        return a.type === "dir" ? -1 : 1;
      });

      const mappedFiles: FileItem[] = sortedData.map((f: any) => ({
        name: f.type === "dir" ? f.name + "/" : f.name,
        size: f.type === "dir" ? "" : formatSize(f.size),
        type: f.type,
        path: f.path,
        // Add random status for visual TUI flair
        status: Math.random() > 0.8 ? "M" : "",
        statusColor: "text-gruv-orange",
      }));

      // Always show .. for TUI feel
      mappedFiles.unshift({
        name: "..",
        size: "",
        type: "dir",
        status: "↑",
        statusColor: "text-gruv-fg-dim/40",
        isParent: true,
      });

      files.value = mappedFiles;
      selectedIndex.value = 0;
    }
  } catch (error) {
    console.error("Failed to fetch repo contents:", error);
  } finally {
    isLoading.value = false;
  }
};

const formatSize = (bytes: number) => {
  if (bytes === 0) return "0 B";
  const k = 1024;
  const sizes = ["B", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + " " + sizes[i];
};

const handleAction = (file: FileItem, index: number) => {
  selectedIndex.value = index;
  if (file.type === "dir") {
    if (file.isParent) {
      const parts = currentPath.value.split("/").filter(Boolean);
      parts.pop();
      currentPath.value = parts.join("/");
    } else {
      currentPath.value = file.path || "";
    }
  }
};

watch(currentPath, (newPath) => {
  fetchFiles(newPath);
});

onMounted(() => {
  fetchFiles("");
});
</script>

<template>
  <div
    class="flex-1 w-full max-w-[640px] relative terminal-container p-1 rounded-xl"
  >
    <div
      class="bg-gruv-terminal rounded-lg overflow-hidden gruv-shadow border border-gruv-fg-dim/20"
    >
      <div
        class="bg-[#1a1a1a] px-4 py-2 flex items-center gap-2 border-b border-white/5"
      >
        <div class="size-2.5 rounded-full bg-gruv-red"></div>
        <div class="size-2.5 rounded-full bg-gruv-yellow"></div>
        <div class="size-2.5 rounded-full bg-gruv-green"></div>
        <div
          class="text-[10px] text-gruv-fg-dim/60 ml-2 font-mono uppercase tracking-widest truncate flex-1"
        >
          zulfikar@arch: ~/fm/{{ currentPath }}
        </div>
        <div
          class="text-[9px] font-bold text-gruv-orange bg-gruv-orange/10 px-1.5 py-0.5 rounded border border-gruv-orange/20 animate-pulse"
        >
          LIVE PREVIEW
        </div>
      </div>
      <div
        class="p-0 font-mono text-[13px] leading-none select-none h-[320px] flex flex-col"
      >
        <div
          class="bg-[#121212] px-3 py-2 text-gruv-fg-dim flex items-center gap-1 overflow-hidden"
        >
          <span class="text-gruv-orange font-bold">~</span>
          <span class="text-gruv-fg-dim/40">/</span>
          <span class="text-gruv-orange font-bold">fm</span>
          <template v-if="currentPath">
            <span
              v-for="part in currentPath.split('/')"
              :key="part"
              class="flex items-center gap-1"
            >
              <span class="text-gruv-fg-dim/40">/</span>
              <span class="text-gruv-orange font-bold">{{ part }}</span>
            </span>
          </template>
          <span class="ml-1 text-gruv-fg-dim/40">(main)</span>
        </div>

        <div class="py-1 flex-1 overflow-y-auto scrollbar-hide">
          <div v-if="isLoading" class="p-4 text-gruv-fg-dim italic">
            Loading...
          </div>
          <div
            v-else
            v-for="(file, index) in files"
            :key="file.path || index"
            @click="handleAction(file, index)"
            class="px-3 py-0.5 flex justify-between items-center cursor-pointer transition-colors"
            :class="
              selectedIndex === index
                ? 'bg-gruv-bg-soft/50'
                : 'hover:bg-gruv-bg-soft/10'
            "
          >
            <div class="flex items-center gap-2 truncate pr-4">
              <span
                class="w-3 font-bold flex-shrink-0"
                :class="file.statusColor"
                >{{ file.status }}</span
              >
              <span
                :class="[
                  file.name === '..'
                    ? 'text-gruv-fg-dim/40 font-bold'
                    : file.type === 'dir'
                      ? 'text-gruv-orange font-bold'
                      : 'text-gruv-fg',
                ]"
                class="truncate"
                >{{ file.name }}</span
              >
            </div>
            <span class="text-gruv-fg-dim flex-shrink-0">{{ file.size }}</span>
          </div>
        </div>

        <div
          class="bg-[#121212] px-3 py-1.5 flex justify-between items-center text-[11px] font-bold border-t border-white/5"
        >
          <div class="flex items-center gap-3">
            <span class="text-gruv-fg-dim/60">
              {{ selectedIndex === 0 ? "-" : selectedIndex }}/{{
                files.length - 1
              }}
            </span>
            <div class="hidden md:flex items-center gap-1">
              <span class="text-gruv-orange">[↑↓]</span
              ><span class="text-gruv-fg-dim/60">Nav</span>
            </div>
            <div class="hidden md:flex items-center gap-1">
              <span class="text-gruv-orange">[Space]</span
              ><span class="text-gruv-fg-dim/60">Sel</span>
            </div>
            <div class="hidden md:flex items-center gap-1">
              <span class="text-gruv-orange">[s]</span
              ><span class="text-gruv-fg-dim/60">Sort</span>
            </div>
            <div class="hidden md:flex items-center gap-1">
              <span class="text-gruv-orange">[/]</span
              ><span class="text-gruv-fg-dim/60">Search</span>
            </div>
            <div class="hidden md:flex items-center gap-1">
              <span class="text-gruv-orange">[.]</span
              ><span class="text-gruv-fg-dim/60">Settings</span>
            </div>
          </div>
          <div class="flex items-center gap-1">
            <span class="text-gruv-fg-dim/60">[↑↓]</span>
            <span class="text-gruv-fg-dim/60 ml-1">Default</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
