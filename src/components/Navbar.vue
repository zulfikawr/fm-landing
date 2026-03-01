<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { Icon } from "@iconify/vue";
import { useTheme, type Theme } from "../composables/useTheme";

const { currentTheme, setTheme } = useTheme();
const isDropdownOpen = ref(false);
const dropdownRef = ref<HTMLElement | null>(null);

const themes: { id: Theme; name: string; color: string }[] = [
  { id: "gruvbox", name: "Gruvbox", color: "#fe8019" },
  { id: "nord", name: "Nord", color: "#88c0d0" },
  { id: "dracula", name: "Dracula", color: "#bd93f9" },
  { id: "monokai", name: "Monokai", color: "#f92672" },
  { id: "solarized-dark", name: "Solarized", color: "#268bd2" },
  { id: "tokyo-night", name: "Tokyo Night", color: "#7aa2f7" },
  { id: "rose-pine", name: "Rose Pine", color: "#ebbcba" },
  { id: "catppuccin-mocha", name: "Catppuccin", color: "#b4befe" },
  { id: "red", name: "Red", color: "#ff0000" },
];

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

const selectTheme = (theme: Theme) => {
  setTheme(theme);
  isDropdownOpen.value = false;
};

const handleClickOutside = (event: MouseEvent) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target as Node)) {
    isDropdownOpen.value = false;
  }
};

onMounted(() => {
  window.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  window.removeEventListener("click", handleClickOutside);
});
</script>

<template>
  <div
    class="w-full border-b border-solid border-gruv-fg-dim/10 bg-gruv-bg/90 backdrop-blur-md sticky top-0 z-50"
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
          to="/changelog"
          class="text-sm font-bold text-gruv-fg-dim hover:text-gruv-orange px-4 py-2 transition-all hidden md:block"
        >
          Changelog
        </router-link>

        <div class="relative" ref="dropdownRef">
          <button
            @click="toggleDropdown"
            class="flex items-center gap-2 text-sm font-bold text-gruv-fg-dim hover:text-gruv-orange px-4 py-2 transition-all rounded border border-gruv-fg-dim/10 hover:border-gruv-orange/30"
          >
            <Icon icon="mdi:palette" class="text-lg" />
            <span class="capitalize">{{ currentTheme.replace('-', ' ') }}</span>
            <Icon icon="mdi:chevron-down" class="text-xs transition-transform" :class="{ 'rotate-180': isDropdownOpen }" />
          </button>

          <div
            v-if="isDropdownOpen"
            class="absolute right-0 mt-2 w-48 bg-gruv-bg-soft border border-gruv-fg-dim/20 rounded-lg shadow-xl py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200"
          >
            <button
              v-for="theme in themes"
              :key="theme.id"
              @click="selectTheme(theme.id)"
              class="w-full flex items-center gap-3 px-4 py-2 text-sm text-left hover:bg-gruv-orange/10 transition-colors group"
              :class="currentTheme === theme.id ? 'text-gruv-orange' : 'text-gruv-fg-dim hover:text-gruv-fg'"
            >
              <div
                class="size-3 rounded-full border border-white/10"
                :style="{ backgroundColor: theme.color }"
              ></div>
              <span class="font-medium">{{ theme.name }}</span>
              <Icon
                v-if="currentTheme === theme.id"
                icon="mdi:check"
                class="ml-auto text-gruv-orange"
              />
            </button>
          </div>
        </div>
        <router-link
          to="/docs"
          class="text-sm font-bold text-gruv-fg-dim hover:text-gruv-orange px-4 py-2 rounded border border-gruv-fg-dim/20 hover:border-gruv-orange/50 transition-all hidden md:block"
        >
          Documentation
        </router-link>
        <a
          href="https://github.com/zulfikawr/fm"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center justify-center gap-2 rounded border border-gruv-orange/50 h-10 px-4 bg-gruv-orange/10 text-gruv-orange text-sm font-bold leading-normal hover:bg-gruv-orange hover:text-gruv-bg transition-all"
        >
          <Icon icon="mdi:github" class="text-xl" />
          <span class="hidden sm:inline">GitHub</span>
        </a>
      </div>
    </div>
  </div>
</template>
