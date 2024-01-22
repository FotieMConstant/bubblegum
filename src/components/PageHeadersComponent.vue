<template>
  <!-- Page Heading -->
  <header>
    <p class="mb-2 text-sm font-semibold text-blue-600">
      {{ description }}
    </p>
    <h1
      class="block text-xl font-bold text-gray-800 sm:text-2xl dark:text-white"
    >
      {{ title }}
    </h1>
    <!-- <p class="mt-2 text-lg text-gray-800 dark:text-gray-400">
        This is a simple application layout with sidebar and header examples
        using Tailwind CSS.
      </p> -->
  </header>
  <!-- End Page Heading -->
</template>

<script>
export default {
  name: "PageHeadersComponent",
  props: {
    title: {
      type: String,
      required: true,
      default: "A title",
    },
    description: {
      type: String,
      required: true,
      default: "A description",
    },
  },
};
</script>

<style></style>
