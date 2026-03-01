import { ref, onMounted } from "vue";

export type Theme =
  | "gruvbox"
  | "nord"
  | "dracula"
  | "monokai"
  | "solarized-dark"
  | "tokyo-night"
  | "rose-pine"
  | "catppuccin-mocha"
  | "red";

const currentTheme = ref<Theme>((localStorage.getItem("fm-theme") as Theme) || "gruvbox");

export function useTheme() {
  const setTheme = (theme: Theme) => {
    currentTheme.value = theme;
    localStorage.setItem("fm-theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  };

  onMounted(() => {
    document.documentElement.setAttribute("data-theme", currentTheme.value);
  });

  return {
    currentTheme,
    setTheme,
  };
}
