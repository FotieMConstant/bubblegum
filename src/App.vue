<template>
  <div>
    <nav>
      <sidebar />
    </nav>
    <div class="dark:bg-slate-900 bg-gray-50 h-full dark:text-white">
      <router-view />
    </div>
  </div>
</template>
<script>
import sidebar from "@/components/SideBar.vue";
export default {
  name: "App",
  components: {
    sidebar,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

// nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
