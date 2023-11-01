import axios from "axios";
import { ProjectType } from "../types/projectType";

const baseUrl = import.meta.env.VITE_REACT_API_URL

export const auth = async (id: string) => {
  const response = await axios.get(`${baseUrl}/project/${id}`)


  if (response.status !== 200) {
    throw new Error("Something went wrong");
  }

  const data: ProjectType = await response.data;

  return data;
};