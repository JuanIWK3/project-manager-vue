<script setup lang="ts">
import { usePeopleStore } from "@/store/people";
import { useProjectStore } from "@/store/project";
import { computed, onMounted } from "vue";

const projectStore = useProjectStore();
projectStore.getAllProjects();
const projects = computed(() => projectStore.projects);
const selected = computed(() => projectStore.selected);
</script>

<template>
  <v-navigation-drawer class="deep-purple accent-4 position-relative" permanent>
    <v-list>
      <v-list-item class="selected" prepend-icon="mdi-laptop" link>
        People
      </v-list-item>
      <v-list-item class="" prepend-icon="mdi-laptop" link> Tasks </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<style scoped lang="scss">
.v-list-item {
  transition: all 0.2s ease;

  &.selected {
    background: linear-gradient(to right, rgb(241, 241, 241), white);

    &::before {
      content: "";
      display: block;
      width: 5px;
      height: 100%;
      position: absolute;
      background: rgb(0, 110, 255);
      border-radius: 2px;
    }
  }
}
</style>
