<script setup lang="ts">
import { ref } from "vue";
import { Icon } from "@iconify/vue";

const copyStatus = ref("Copy");

const copyToClipboard = () => {
  const command = "go install github.com/zulfikawr/fm@latest";
  navigator.clipboard.writeText(command);
  copyStatus.value = "Copied!";
  setTimeout(() => {
    copyStatus.value = "Copy";
  }, 2000);
};
</script>

<template>
  <div class="bg-gruv-bg py-24 px-6 border-t border-gruv-fg-dim/5">
    <div class="max-w-[1200px] mx-auto">
      <div class="flex flex-col lg:flex-row gap-16 items-center">
        <div class="flex-1 flex flex-col gap-6">
          <h2 class="text-4xl font-bold text-gruv-fg">
            Get started in seconds
          </h2>
          <p class="text-lg text-gruv-fg-dim leading-relaxed">
            FM is distributed as a single static binary. You can install it
            using Go, or download the pre-built binaries from our releases page.
          </p>
          <div class="flex flex-col gap-4 mt-4">
            <div class="flex items-start gap-4">
              <div
                class="size-8 rounded-full bg-gruv-orange/20 text-gruv-orange flex items-center justify-center shrink-0 font-bold text-sm"
              >
                1
              </div>
              <p class="text-gruv-fg leading-relaxed">
                Ensure you have
                <span class="text-gruv-aqua">Go 1.25+</span> installed on your
                system.
              </p>
            </div>
            <div class="flex items-start gap-4">
              <div
                class="size-8 rounded-full bg-gruv-orange/20 text-gruv-orange flex items-center justify-center shrink-0 font-bold text-sm"
              >
                2
              </div>
              <p class="text-gruv-fg leading-relaxed">
                Run the install command to build FM from source.
              </p>
            </div>
            <div class="flex items-start gap-4">
              <div
                class="size-8 rounded-full bg-gruv-orange/20 text-gruv-orange flex items-center justify-center shrink-0 font-bold text-sm"
              >
                3
              </div>
              <p class="text-gruv-fg leading-relaxed">
                Access it anywhere by typing
                <code
                  class="bg-gruv-bg-soft px-1.5 py-0.5 rounded text-gruv-yellow"
                  >fm</code
                >
                in your terminal.
              </p>
            </div>
          </div>
        </div>

        <div class="flex-1 w-full max-w-xl">
          <div
            class="bg-gruv-bg-soft rounded-lg border border-gruv-fg-dim/20 overflow-hidden shadow-2xl"
          >
            <div
              class="flex items-center justify-between px-4 py-2 border-b border-gruv-fg-dim/10 bg-gruv-bg"
            >
              <div class="flex gap-1.5">
                <div class="size-3 rounded-full bg-gruv-red/50"></div>
                <div class="size-3 rounded-full bg-gruv-yellow/50"></div>
                <div class="size-3 rounded-full bg-gruv-green/50"></div>
              </div>
              <span
                class="text-[10px] text-gruv-fg-dim font-mono uppercase tracking-widest"
                >Terminal</span
              >
            </div>
            <div class="p-6 font-mono text-sm relative group">
              <div class="flex gap-3 text-gruv-fg">
                <span class="text-gruv-green opacity-50">$</span>
                <span class="break-all"
                  >go install github.com/zulfikawr/fm@latest</span
                >
              </div>
              <button
                @click="copyToClipboard"
                class="absolute right-4 top-4 px-3 py-1.5 rounded bg-gruv-bg border border-gruv-fg-dim/20 text-gruv-fg-dim text-[10px] hover:text-gruv-orange hover:border-gruv-orange/50 transition-all flex items-center gap-2"
              >
                <Icon
                  :icon="
                    copyStatus === 'Copied!' ? 'mdi:check' : 'mdi:content-copy'
                  "
                />
                {{ copyStatus }}
              </button>
            </div>
          </div>
          <p class="mt-4 text-center text-xs text-gruv-fg-dim">
            Or download for
            <a
              href="https://github.com/zulfikawr/fm/releases"
              class="text-gruv-orange hover:underline"
              >Linux</a
            >,
            <a
              href="https://github.com/zulfikawr/fm/releases"
              class="text-gruv-orange hover:underline"
              >macOS</a
            >, or
            <a
              href="https://github.com/zulfikawr/fm/releases"
              class="text-gruv-orange hover:underline"
              >Windows</a
            >.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
