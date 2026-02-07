<script setup lang="ts">
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import Sidebar from "../components/docs/Sidebar.vue";
import DocSection from "../components/docs/DocSection.vue";
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
  { id: "icons", title: "Icons & Fonts", fileName: "icons.md" },
  { id: "mouse-support", title: "Mouse Support", fileName: "mouse-support.md" },
  { id: "cli-reference", title: "CLI Reference", fileName: "cli-reference.md" },
]);

const activeSection = ref("introduction");

onMounted(async () => {
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
        <DocSection
          v-for="section in sections"
          :key="section.id"
          :id="section.id"
          :title="section.title"
          :fileName="section.fileName"
        />
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
