import { usePeopleStore } from "./people";
import { defineStore } from "pinia";
import { IProject, IProjectState } from "../types";

const store = usePeopleStore();
const people = store.$state.people;

export const useProjectStore = defineStore("project", {
  state: () => {
    return {
      projects: [
        {
          id: 1,
          name: "TI Manager",
          manager: people[2],
          devs: [people[0]],
          description: "A web site to learn vue",
        },
      ],
    } as IProjectState;
  },

  actions: {
    addProject(project: IProject) {
      this.projects.push(project);
    },
  },
});
