<template>
  <!-- <button
    v-if=""
    type="button"
    class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
  >
    Cancel
  </button> -->
  <button
    v-if="type === 'primary'"
    type="button"
    class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Button",
  props: {
    type: {
      type: String,
      required: true,
      default: "primary",
    },
    state: {
      type: String,
      required: false,
      default: "enabled",
    },
  },
};
</script>

<style></style>
