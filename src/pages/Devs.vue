<script setup lang="ts">
import { usePeopleStore } from "@/store/people";
import { computed } from "@vue/reactivity";

const peopleStore = usePeopleStore();
peopleStore.getAllPeople();
const people = computed(() => peopleStore.people);
</script>

<template>
  <v-btn v-for="person in people">{{ person.avatar }}{{ person.name }}</v-btn>
</template>

<style></style>
