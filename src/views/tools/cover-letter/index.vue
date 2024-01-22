<template>
  <div class="text-left">
    <JobDescriptionComponent />
    <!-- <ExtractTextFromJobDescriptionURLComponent /> -->
  </div>
</template>

<script>
import JobDescriptionComponent from "@/components/cover-letter/JobDescriptionComponent.vue";
export default {
  name: "cover-index",
  components: {
    JobDescriptionComponent,
  },
};
</script>

<style></style>
