import { IPerson } from "@/types/index";
import axios from "axios";

export const PeopleService = {
  getPeople: async () => {
    const res = await axios.get<IPerson[]>("http://localhost:4000/people");
    return res;
  },
};
