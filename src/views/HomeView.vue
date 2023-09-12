<template>
  <div class="home">
    <img class="mx-auto" alt="Vue logo" src="../assets/logo.png" />
    <Counter />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Counter from "@/components/Counter.vue"; // @ is an alias to /src

export default defineComponent({
  name: "HomeView",
  components: {
    Counter,
  },
});
</script>
