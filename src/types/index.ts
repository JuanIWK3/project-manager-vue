export interface IPerson {
  id: number;
  name: string;
  active: boolean;
  roles: IRole[];
  avatar: string;
}

export type IRole = "junior" | "pleno" | "senior";

export interface IPersonState {
  people: IPerson[];
}

export interface IProjectState {
  projects: IProject[];
}

export interface IProject {
  id: number;
  name: string;
  description: string;
  manager: IPerson | null;
  devs: IPerson[];
}
