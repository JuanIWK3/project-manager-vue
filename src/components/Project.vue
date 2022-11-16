<script setup lang="ts">
import { usePeopleStore } from "@/store/people";
import { useProjectStore } from "@/store/project";
import { computed, onMounted, ref, watch } from "vue";
import ProjectList from "@/components/ProjectList.vue";
import { IProject } from "@/types";

const projectStore = useProjectStore();
projectStore.getAllProjects();
const projects = computed(() => projectStore.projects);
const selected = computed(() => projectStore.selected);
const tab = ref(null);
const projectNames = computed(() => projects.value.map((p) => p.name));
const projectInputSel = ref<IProject | null>(null);

watch(projectInputSel, async (newValue, oldValue) => {
  console.log(newValue, oldValue);
  projectStore.selectProject(newValue!);
});
</script>

<template>
  <v-container>
    <div class="header">
      <div class="teams">
        <v-select
          v-model="projectInputSel"
          variant="plain"
          :items="projects"
          item-title="name"
          return-object
        ></v-select>
      </div>
      <div class="filters">
        <v-select label="Team" :items="['Todos', 'Dev Team', 'Design Team']" />
        <v-select label="Status" :items="['Todos', 'Online', 'Offline']" />
      </div>
    </div>

    <div class="personList">
      <v-card v-for="dev in selected?.devs">
        <figure>
          <v-img :src="dev.avatar" width="100" aspect-ratio="1" cover></v-img>
        </figure>
        <v-card-title> {{ dev.name }}</v-card-title>
        <v-card-subtitle>{{ dev.email }}</v-card-subtitle>
        <div class="footer">{{ dev.role }}</div>
      </v-card>
    </div>
  </v-container>

  <!-- <ProjectList></ProjectList> -->
</template>

<style scoped lang="scss">
.container {
  width: 100%;
}

.header {
  padding: 32px;
  padding-bottom: 0;

  .teams {
    border-bottom: 1px solid #ccc;

    .v-select {
      font-size: 36px;
    }

    .v-select__selection-text {
      font-size: 36px;
    }
  }
  .filters {
    padding: 16px 0;
    padding-bottom: 0;
    display: flex;
    align-items: center;
    gap: 16px;
  }
}
.personList {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  padding: 32px;

  @media (min-width: 700px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 900px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  .v-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 300px;
    padding-top: 32px;
    width: 100%;
    height: 300px;
    position: relative;
    box-shadow: 0px 5px 15px 2px #ddd;
    transition: scale 0.2s ease;

    &:hover {
      scale: 1.1;
      z-index: 2;
    }

    .footer {
      text-transform: uppercase;
      position: absolute;
      bottom: 0;
      padding: 16px;
      background: #f8f8f8;
      width: 100%;
      display: flex;
      justify-content: center;
      border-top: 2px solid #eee;
    }

    .v-img {
      border-radius: 50%;
    }
  }
}
</style>
