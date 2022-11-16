export interface IPerson {
  id: number;
  name: string;
  active: boolean;
  role: string;
  avatar: string;
  email: string;
};

export interface IPersonState {
  people: IPerson[];
}

export interface IProjectState {
  projects: IProject[];
  selected: IProject | null;
}

export type IRole = "senior dev" | "junior dev" | "pleno dev";

export interface IProject {
  id: number;
  name: string;
  description: string;
  manager: IPerson | null;
  devs: IPerson[];
};
