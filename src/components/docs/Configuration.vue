<template>
  <section id="configuration" class="mb-24 scroll-mt-24">
    <h2 class="text-3xl font-bold text-gruv-fg mb-8 flex items-center gap-3">
      <span class="text-gruv-orange">#</span> Configuration
    </h2>
    <p class="text-gruv-fg-dim mb-8">
      Settings are stored in
      <span class="text-gruv-fg font-mono">~/.config/fm/config.json</span>.
    </p>

    <div
      class="bg-gruv-bg-soft rounded-xl border border-gruv-fg-dim/10 overflow-hidden shadow-2xl"
    >
      <div class="overflow-x-auto">
        <table class="w-full text-left border-collapse">
          <thead>
            <tr class="bg-gruv-bg/50 border-b border-gruv-fg-dim/10">
              <th
                class="py-4 px-6 text-gruv-orange font-bold uppercase text-xs"
              >
                Field
              </th>
              <th
                class="py-4 px-6 text-gruv-orange font-bold uppercase text-xs"
              >
                Default
              </th>
              <th
                class="py-4 px-6 text-gruv-orange font-bold uppercase text-xs"
              >
                Description
              </th>
            </tr>
          </thead>
          <tbody class="text-sm">
            <tr class="border-b border-gruv-fg-dim/5 hover:bg-white/2">
              <td class="py-4 px-6 font-mono text-gruv-aqua">show_hidden</td>
              <td class="py-4 px-6 text-gruv-fg">true</td>
              <td class="py-4 px-6 text-gruv-fg-dim">
                Whether to show hidden files (starting with .)
              </td>
            </tr>
            <tr class="border-b border-gruv-fg-dim/5 hover:bg-white/2">
              <td class="py-4 px-6 font-mono text-gruv-aqua">case_sensitive</td>
              <td class="py-4 px-6 text-gruv-fg">false</td>
              <td class="py-4 px-6 text-gruv-fg-dim">
                Use case-sensitive sorting and filtering
              </td>
            </tr>
            <tr class="border-b border-gruv-fg-dim/5 hover:bg-white/2">
              <td class="py-4 px-6 font-mono text-gruv-aqua">
                wrap_navigation
              </td>
              <td class="py-4 px-6 text-gruv-fg">true</td>
              <td class="py-4 px-6 text-gruv-fg-dim">
                Wrap navigation at top/bottom of lists
              </td>
            </tr>
            <tr class="border-b border-gruv-fg-dim/5 hover:bg-white/2">
              <td class="py-4 px-6 font-mono text-gruv-aqua">show_size</td>
              <td class="py-4 px-6 text-gruv-fg">true</td>
              <td class="py-4 px-6 text-gruv-fg-dim">
                Display file sizes in listing
              </td>
            </tr>
            <tr class="border-b border-gruv-fg-dim/5 hover:bg-white/2">
              <td class="py-4 px-6 font-mono text-gruv-aqua">
                show_date_modified
              </td>
              <td class="py-4 px-6 text-gruv-fg">true</td>
              <td class="py-4 px-6 text-gruv-fg-dim">
                Display the last modified date
              </td>
            </tr>
            <tr class="border-b border-gruv-fg-dim/5 hover:bg-white/2">
              <td class="py-4 px-6 font-mono text-gruv-aqua">show_header</td>
              <td class="py-4 px-6 text-gruv-fg">true</td>
              <td class="py-4 px-6 text-gruv-fg-dim">
                Show top header with path and tab info
              </td>
            </tr>
            <tr class="border-b border-gruv-fg-dim/5 hover:bg-white/2">
              <td class="py-4 px-6 font-mono text-gruv-aqua">
                confirm_operations
              </td>
              <td class="py-4 px-6 text-gruv-fg">true</td>
              <td class="py-4 px-6 text-gruv-fg-dim">
                Ask for confirmation before destructive actions
              </td>
            </tr>
            <tr class="border-b border-gruv-fg-dim/5 hover:bg-white/2">
              <td class="py-4 px-6 font-mono text-gruv-aqua">enable_git</td>
              <td class="py-4 px-6 text-gruv-fg">true</td>
              <td class="py-4 px-6 text-gruv-fg-dim">
                Enable/disable real-time Git status markers
              </td>
            </tr>
            <tr class="border-b border-gruv-fg-dim/5 hover:bg-white/2">
              <td class="py-4 px-6 font-mono text-gruv-aqua">use_trash</td>
              <td class="py-4 px-6 text-gruv-fg">true</td>
              <td class="py-4 px-6 text-gruv-fg-dim">
                Use system trash for deletions (experimental)
              </td>
            </tr>
            <tr class="border-b border-gruv-fg-dim/5 hover:bg-white/2">
              <td class="py-4 px-6 font-mono text-gruv-aqua">theme_index</td>
              <td class="py-4 px-6 text-gruv-fg">0</td>
              <td class="py-4 px-6 text-gruv-fg-dim">
                The index of the active UI theme
              </td>
            </tr>
            <tr class="border-b border-gruv-fg-dim/5 hover:bg-white/2">
              <td class="py-4 px-6 font-mono text-gruv-aqua">editor_index</td>
              <td class="py-4 px-6 text-gruv-fg">0</td>
              <td class="py-4 px-6 text-gruv-fg-dim">
                Index of preferred editor (vim, nano, code, etc.)
              </td>
            </tr>
            <tr class="border-b border-gruv-fg-dim/5 hover:bg-white/2">
              <td class="py-4 px-6 font-mono text-gruv-aqua">
                date_format_index
              </td>
              <td class="py-4 px-6 text-gruv-fg">0</td>
              <td class="py-4 px-6 text-gruv-fg-dim">
                Index for preferred date display format
              </td>
            </tr>
            <tr class="hover:bg-white/2">
              <td class="py-4 px-6 font-mono text-gruv-aqua">
                size_format_index
              </td>
              <td class="py-4 px-6 text-gruv-fg">0</td>
              <td class="py-4 px-6 text-gruv-fg-dim">
                Index for preferred size display format
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="mt-8 flex flex-col sm:flex-row gap-6">
      <div
        class="flex-1 p-5 bg-gruv-bg-soft rounded border border-gruv-fg-dim/5"
      >
        <h4 class="text-gruv-fg font-bold mb-2 flex items-center gap-2">
          <span class="material-symbols-outlined text-sm">settings</span> In-App
          Settings
        </h4>
        <p class="text-xs text-gruv-fg-dim leading-relaxed">
          Press <kbd class="kbd-key">.</kbd> to open the menu. Use arrows to
          navigate and <kbd class="kbd-key">Enter</kbd> to toggle. Press
          <kbd class="kbd-key">r</kbd> to reset all defaults.
        </p>
      </div>
      <div
        class="flex-1 p-5 bg-gruv-bg-soft rounded border border-gruv-fg-dim/5"
      >
        <h4 class="text-gruv-fg font-bold mb-2 flex items-center gap-2">
          <span class="material-symbols-outlined text-sm">edit</span> Manual
          Editing
        </h4>
        <p class="text-xs text-gruv-fg-dim leading-relaxed">
          Ensure you use a flat JSON structure. Changes are loaded instantly
          when the application starts.
        </p>
      </div>
    </div>
  </section>
</template>
