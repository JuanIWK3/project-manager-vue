import { IPerson } from "@/types/index";
import { defineStore } from "pinia";
import { IProject, IProjectState } from "@/types";
import { ProjectService } from "@/services/projects";

export const useProjectStore = defineStore("project", {
  state: () => {
    return {
      projects: [],
      selected: null,
    } as IProjectState;
  },

  actions: {
    async getAllProjects() {
      const res = await ProjectService.getProjects();
      this.projects = res.data;
    },
    async selectProject(project: IProject | null) {
      this.selected = project;
    },
    addProject(project: IProject) {
      this.projects.push(project);
    },
    async addManager(projectId: number, manager: IPerson) {
      let updateProject = this.projects.find(
        (project) => project.id === projectId
      );
      updateProject!.manager = manager;
      const res = await ProjectService.updateProject(projectId, updateProject!);
      console.log(res);
      return res;
    },
    async addDev(projectId: number, dev: IPerson) {
      let updatedProject = this.projects.find(
        (project) => project.id === projectId
      );
      const index = updatedProject!.devs.findIndex((d) => d.id === dev.id);
      if (index === -1) {
        updatedProject!.devs.push(dev);
      }
      const res = await ProjectService.updateProject(
        projectId,
        updatedProject!
      );
      console.log(res);
      return res;
    },
    async removeDev(projectId: number, dev: IPerson) {
      let updatedProject = this.projects.find(
        (project) => project.id === projectId
      );
      const index = updatedProject!.devs.findIndex((d) => d.id === dev.id);
      console.log(index);
      updatedProject?.devs.splice(index, 1);
      console.log("Updated", updatedProject);
      const res = await ProjectService.updateProject(
        projectId,
        updatedProject!
      );
      console.log(res);
      return res;
    },
  },
});
