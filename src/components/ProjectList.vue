<script setup lang="ts">
import { usePeopleStore } from "@/store/people";
import { useProjectStore } from "@/store/project";
import { IRole } from "@/types";
import { computed } from "@vue/reactivity";

const peopleStore = usePeopleStore();
const projectStore = useProjectStore();
peopleStore.getAllPeople();
projectStore.getAllProjects();
const people = computed(() => peopleStore.people);
const projects = computed(() => projectStore.projects);

const filterByRole = (role: IRole) => {
  return people.value.filter((p) => p.roles.includes(role));
};
</script>

<template>
  <div v-for="(project, projIdx) in projects" class="project">
    <h1 class="projectTitle">{{ project.name }}</h1>
    <p>{{ project.description }}</p>
    <br />
    <div class="section">
      <div class="title">Manager</div>
      <div>{{ project.manager?.avatar }}{{ project.manager?.name }}</div>
      <div class="">
        <v-menu location="bottom center">
          <template v-slot:activator="{ props }">
            <v-btn color="primary" dark v-bind="props"> Assign </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="(person, index) in filterByRole('senior')"
              :key="index"
              @click="projectStore.addManager(project.id, person)"
            >
              <v-list-item-title
                >{{ person.avatar }}{{ person.name }}</v-list-item-title
              >
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </div>
    <div class="section">
      <div class="title">Devs</div>
      <div class="div">
        <div v-for="dev in project.devs">
          {{ dev.avatar }}
          {{ dev.name }}
          <v-icon
            size="15"
            color="red"
            class="remove"
            @click="projectStore.removeDev(projIdx, dev)"
          >
            mdi-close
          </v-icon>
        </div>
      </div>
      <div class="">
        <v-menu location="bottom center">
          <template v-slot:activator="{ props }">
            <v-btn color="primary" dark v-bind="props"> Assign </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="(dev, index) in people"
              :key="index"
              @click="projectStore.addDev(project.id, dev)"
            >
              <v-list-item-title
                >{{ dev.avatar }}{{ dev.name }}</v-list-item-title
              >
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </div>
  </div>
  <br />
</template>

<style lang="scss" scoped>
.project {
  display: flex;
  flex-direction: column;
  width: 200px;
  align-items: center;
  justify-content: center;

  .section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid #ddd;
    width: 100%;
    padding: 16px;
  }
}
.v-list-item {
  cursor: pointer;
}
.remove {
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}
</style>
