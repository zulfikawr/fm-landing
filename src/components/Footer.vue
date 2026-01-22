<template>
  <footer class="bg-gruv-bg border-t border-gruv-fg-dim/10 py-16 px-6">
    <div class="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
      <div class="col-span-1 md:col-span-2">
        <div class="flex items-center gap-3 mb-6">
          <span class="text-2xl font-bold text-gruv-orange">#</span>
          <h2 class="text-lg font-bold text-gruv-fg">FM</h2>
        </div>
        <p class="text-gruv-fg-dim max-w-sm mb-6">
          The terminal-based file manager that doesn't compromise. Fast,
          extensible, and built for the modern developer.
        </p>
      </div>
      <div>
        <h4 class="font-bold mb-6 text-gruv-fg">Project</h4>
        <ul class="space-y-4 text-sm text-gruv-fg-dim">
          <li>
            <a
              class="hover:text-gruv-orange"
              href="https://github.com/zulfikawr/fm"
              target="_blank"
              >GitHub Repo</a
            >
          </li>
          <li>
            <a class="hover:text-gruv-orange" href="/docs#changelog"
              >Changelog</a
            >
          </li>
          <li>
            <a
              class="hover:text-gruv-orange"
              href="https://github.com/zulfikawr/fm/blob/main/LICENSE"
              target="_blank"
              >License (MIT)</a
            >
          </li>
        </ul>
      </div>
      <div>
        <h4 class="font-bold mb-6 text-gruv-fg">Community</h4>
        <ul class="space-y-4 text-sm text-gruv-fg-dim">
          <li>
            <router-link class="hover:text-gruv-orange" to="/docs"
              >Documentation</router-link
            >
          </li>
          <li>
            <a
              class="hover:text-gruv-orange"
              href="https://github.com/zulfikawr/fm/discussions"
              target="_blank"
              >Discussions</a
            >
          </li>
          <li>
            <a
              class="hover:text-gruv-orange"
              href="https://pkg.go.dev/github.com/zulfikawr/fm"
              target="_blank"
              >Go Packages</a
            >
          </li>
        </ul>
      </div>
    </div>
    <div
      class="max-w-[1200px] mx-auto mt-16 pt-8 border-t border-gruv-fg-dim/10 flex flex-col md:flex-row justify-between gap-4 text-sm text-gruv-fg-dim"
    >
      <p>© {{ new Date().getFullYear() }} FM. All rights reserved.</p>
      <p>
        Designed with <span class="text-gruv-red">❤</span> for the Go ecosystem.
      </p>
    </div>
  </footer>
</template>
