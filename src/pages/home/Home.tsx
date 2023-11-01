import "./styles.scss";
import { useContext, useEffect, useState } from "react";
import MenuTop from "../../components/menu/menu";
import ClientProjects from "../../components/clientProjects/clientProjects";
import SearchTerm from "../../components/searchTerm/SearchTerm";
import { ThemeContext } from "../../context/theme";
import { UserContext } from "../../context/user";
import { getProjectById } from "../../api/project";
import { ProjectType } from "../../types/projectType";


const Home = () => {
  const { theme } = useContext(ThemeContext);
  const { user } = useContext(UserContext);
  const [ projects, setProjects ] = useState<ProjectType>();

  useEffect(() => {
    const getProject = async (id: string) => {
      const project: ProjectType = await getProjectById(id)
      setProjects(project)
    }

    getProject(user?.id)
  }, [user?.id])

  return (
    <div className={theme === "light" ? "home-light" : "home-dark"}>
      <MenuTop />
      <div className="searchTerm">
          <SearchTerm />
      </div>
      {user?.type === 1 
        ? <ClientProjects
            project={projects}
          /> 
        : undefined}
    </div>
  );
};

export default Home;
