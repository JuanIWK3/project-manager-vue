<script setup lang="ts">
import Navbar from "@/components/Navbar.vue";
import Sidebar from "@/components/Sidebar.vue";
import Project from "@/components/Project.vue";
</script>

<template>
  <v-app id="App">
    <v-layout>
      <Sidebar />
      <Project />
    </v-layout>
  </v-app>
</template>

<style lang="scss" scoped>
#App {
  background: #f7f7fc;
}
</style>
