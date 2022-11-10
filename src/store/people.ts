import { PeopleService } from "@/services/people";
import { defineStore } from "pinia";
import { IPerson, IPersonState } from "../types";

export const usePeopleStore = defineStore("people", {
  state: () => {
    return {
      people: [],
    } as IPersonState;
  },

  actions: {
    async getAllPeople() {
      const res = await PeopleService.getPeople();
      this.people = res.data;
    },
    addPerson(person: IPerson) {
      this.people.push(person);
    },
  },
});
