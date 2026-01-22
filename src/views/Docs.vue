<script setup lang="ts">
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import Sidebar from "../components/docs/Sidebar.vue";
import Introduction from "../components/docs/Introduction.vue";
import GettingStarted from "../components/docs/GettingStarted.vue";
import Keybindings from "../components/docs/Keybindings.vue";
import Features from "../components/docs/Features.vue";
import RemoteAccess from "../components/docs/RemoteAccess.vue";
import Configuration from "../components/docs/Configuration.vue";
import Changelog from "../components/docs/Changelog.vue";
import { ref, onMounted, nextTick } from "vue";

const sections = ref([
  { id: "introduction", title: "Introduction" },
  { id: "getting-started", title: "Getting Started" },
  { id: "keybindings", title: "Keybindings" },
  { id: "features", title: "Features" },
  { id: "remote-access", title: "Remote Access" },
  { id: "configuration", title: "Configuration" },
  { id: "changelog", title: "Changelog", versions: [] as string[] },
]);

const activeSection = ref("introduction");

const fetchVersions = async () => {
  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/zulfikawr/fm/main/CHANGELOG.md",
    );
    const text = await response.text();
    const versionMatch = text.match(/##\s+\[?(\d+\.\d+\.\d+)\]?/g);
    if (versionMatch) {
      const versions = versionMatch.map((v) =>
        v.replace(/##\s+\[?/, "").replace(/\]?/, ""),
      );
      const changelogSection = sections.value.find((s) => s.id === "changelog");
      if (changelogSection) {
        changelogSection.versions = versions.slice(0, 5); // Just show last 5 versions in sidebar
      }
    }
  } catch (error) {
    console.error("Failed to parse versions:", error);
  }
};

onMounted(async () => {
  await fetchVersions();
  await nextTick();

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        // If we are scrolling down, the last intersecting section is the most "active"
        if (entry.isIntersecting) {
          activeSection.value = entry.target.id;
        }
      });
    },
    {
      rootMargin: "-100px 0px -60% 0px",
      threshold: 0,
    },
  );

  sections.value.forEach((section) => {
    const el = document.getElementById(section.id);
    if (el) observer.observe(el);
  });
});
</script>

<template>
  <div class="relative flex h-auto min-h-screen w-full flex-col bg-gruv-bg">
    <Navbar />

    <div
      class="max-w-[1200px] mx-auto px-6 py-12 flex flex-col md:flex-row gap-12 grow w-full pb-32"
    >
      <Sidebar :sections="sections" :activeSection="activeSection" />

      <!-- Main Content -->
      <main class="flex-1 max-w-3xl prose prose-invert prose-gruvbox">
        <Introduction />
        <GettingStarted />
        <Keybindings />
        <Features />
        <RemoteAccess />
        <Configuration />
        <Changelog />
      </main>
    </div>

    <Footer />
  </div>
</template>

<style scoped>
.prose {
  max-width: none;
}
/* Smooth scroll behavior */
html {
  scroll-behavior: smooth;
}
</style>
