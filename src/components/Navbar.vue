<template>
  <div
    class="w-full border-b border-solid border-gruv-fg-dim/10 bg-gruv-bg/90 backdrop-blur-md"
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
          to="/docs"
          class="text-sm font-bold text-gruv-fg-dim hover:text-gruv-orange px-4 py-2 rounded border border-gruv-fg-dim/20 hover:border-gruv-orange/50 transition-all"
        >
          Documentation
        </router-link>
        <a
          href="https://github.com/zulfikawr/fm"
          target="_blank"
          rel="noopener noreferrer"
          class="flex min-w-[100px] items-center justify-center gap-2 rounded border border-gruv-orange/50 h-10 px-4 bg-gruv-orange/10 text-gruv-orange text-sm font-bold leading-normal hover:bg-gruv-orange hover:text-gruv-bg transition-all"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"
            />
          </svg>
          <span>GitHub</span>
        </a>
      </div>
    </div>
  </div>
</template>
