import { IPerson } from "@/types/index";
import { IProject } from "@/types";
import axios from "axios";

export const ProjectService = {
  async getProjects() {
    const res = await axios.get<IProject[]>("http://localhost:4000/projects");
    return res;
  },
  async updateProject(projectId: number, updateProject: IProject) {
    const res = await axios.put<IProject>(
      "http://localhost:4000/projects/" + projectId,
      updateProject
    );

    return res;
  },
};
