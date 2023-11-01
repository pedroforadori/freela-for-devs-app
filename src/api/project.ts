import axios from "axios";
import { ProjectType } from "../types/projectType";

const baseUrl = import.meta.env.VITE_REACT_API_URL

export const getProjectById = async (id: string) => {
  const response = await axios.get(`${baseUrl}/project/user/${id}`)

  if (response.status !== 200) {
    throw new Error("Something went wrong");
  }

  const data: ProjectType = await response.data;

  return data;
};