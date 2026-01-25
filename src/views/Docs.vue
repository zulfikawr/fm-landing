<script setup lang="ts">
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import Sidebar from "../components/docs/Sidebar.vue";
import DocSection from "../components/docs/DocSection.vue";
import Changelog from "../components/docs/Changelog.vue";
import { ref, onMounted, nextTick } from "vue";

const sections = ref([
  { id: "introduction", title: "Introduction", fileName: "index.md" },
  {
    id: "getting-started",
    title: "Getting Started",
    fileName: "getting-started.md",
  },
  { id: "keybindings", title: "Keybindings", fileName: "keybindings.md" },
  { id: "features", title: "Features", fileName: "features.md" },
  { id: "remote-access", title: "Remote Access", fileName: "remote-access.md" },
  { id: "configuration", title: "Configuration", fileName: "configuration.md" },
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
      <main class="flex-1 max-w-3xl">
        <template v-for="section in sections" :key="section.id">
          <DocSection
            v-if="section.fileName"
            :id="section.id"
            :title="section.title"
            :fileName="section.fileName"
          />
          <Changelog v-else-if="section.id === 'changelog'" />
        </template>
      </main>
    </div>

    <Footer />
  </div>
</template>

<style scoped>
.prose {
  max-width: none;
}
html {
  scroll-behavior: smooth;
}
</style>
