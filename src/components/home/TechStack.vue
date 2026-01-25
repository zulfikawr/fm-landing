<script setup lang="ts">
import { Icon } from "@iconify/vue";

const techs = [
  {
    name: "Go 1.25+",
    desc: "Compiled to a single static binary with zero runtime dependencies.",
    icon: "mdi:language-go",
    color: "text-gruv-aqua",
    bg: "bg-gruv-aqua/10",
  },
  {
    name: "Bubble Tea",
    desc: "The Elm-inspired TUI framework for building responsive terminal apps.",
    icon: "mdi:tea",
    color: "text-gruv-orange",
    bg: "bg-gruv-orange/10",
  },
  {
    name: "Lip Gloss",
    desc: "Declarative terminal styling for consistent and beautiful interfaces.",
    icon: "mdi:palette",
    color: "text-gruv-pink",
    bg: "bg-gruv-pink/10",
  },
  {
    name: "SFTP & SSH",
    desc: "Native remote filesystem support via golang.org/x/crypto.",
    icon: "mdi:server-network",
    color: "text-gruv-blue",
    bg: "bg-gruv-blue/10",
  },
];
</script>

<template>
  <div class="py-24 px-6 bg-gruv-bg-soft/30 border-t border-gruv-fg-dim/5">
    <div class="max-w-[1200px] mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-gruv-fg mb-4">
          Built for Efficiency
        </h2>
        <p class="text-gruv-fg-dim max-w-2xl mx-auto">
          FM leverages the best-in-class Go ecosystem to deliver a seamless and
          powerful file management experience without the bloat.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div v-for="tech in techs" :key="tech.name" class="flex flex-col gap-4">
          <div
            :class="[
              tech.bg,
              tech.color,
              'size-12 rounded-lg flex items-center justify-center',
            ]"
          >
            <Icon :icon="tech.icon" class="text-2xl" />
          </div>
          <h3 class="text-xl font-bold text-gruv-fg">{{ tech.name }}</h3>
          <p class="text-sm text-gruv-fg-dim leading-relaxed">
            {{ tech.desc }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
