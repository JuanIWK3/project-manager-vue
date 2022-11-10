import { defineStore } from "pinia";
import { IPerson, IPersonState } from "../types";

export const usePeopleStore = defineStore("people", {
  state: () => {
    return {
      people: [
        {
          id: 1,
          name: `Juan BugCreator`,
          roles: ["pleno"],
          active: true,
          avatar: "🤔",
        },
        {
          id: 2,
          name: `Carlin Procrastinas`,
          roles: ["junior"],
          active: false,
          avatar: "😪",
        },
        {
          id: 3,
          name: `Paulo {{frost}}`,
          roles: ["senior"],
          active: true,
          avatar: "❄️",
        },
        {
          id: 3,
          name: "Matheus 7hezus",
          roles: ["senior"],
          active: true,
          avatar: "🍁",
        },
      ],
    } as IPersonState;
  },

  actions: {
    addPerson(person: IPerson) {
      this.people.push({
        id: this.people.length,
        name: `Person ${this.people.length}`,
        roles: ["junior"],
        active: false,
        avatar: "🙍",
      });
    },
  },
});
