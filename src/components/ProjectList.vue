<script setup lang="ts">
import { usePeopleStore } from "@/store/people";
import { useProjectStore } from "@/store/project";
import { IRole } from "@/types";

const peopleStore = usePeopleStore();
const projectStore = useProjectStore();
const people = peopleStore.$state.people;
const projects = projectStore.$state.projects;

const filterByRole = (role: IRole) => {
  return people.filter((p) => p.roles.includes(role));
};
</script>

<template>
  <div v-for="(project, index) in projects" class="project">
    <h1 class="projectTitle">{{ project.name }}</h1>
    <p>{{ project.description }}</p>
    <br />
    <div class="section">
      <div class="title">Manager</div>
      <div class="">
        <v-menu location="bottom center">
          <template v-slot:activator="{ props }">
            <v-btn color="primary" dark v-bind="props"> Assign </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="(item, index) in filterByRole('senior')"
              :key="index"
            >
              <v-list-item-title
                >{{ item.avatar }}{{ item.name }}</v-list-item-title
              >
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </div>
    <div class="section">
      <div class="title">Devs</div>
      <div class="">
        <v-menu location="bottom center">
          <template v-slot:activator="{ props }">
            <v-btn color="primary" dark v-bind="props"> Assign </v-btn>
          </template>
          <v-list>
            <v-list-item v-for="(item, index) in people" :key="index">
              <v-list-item-title
                >{{ item.avatar }}{{ item.name }}</v-list-item-title
              >
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.project {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
}
</style>
