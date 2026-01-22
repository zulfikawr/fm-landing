<script setup lang="ts">
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import Hero from "../components/home/Hero.vue";
import Features from "../components/home/Features.vue";
</script>

<template>
  <div
    class="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden"
  >
    <div class="layout-container flex h-full grow flex-col">
      <Navbar />
      <main class="flex-1">
        <Hero />
        <Features />
      </main>
      <Footer />
    </div>
  </div>
</template>
