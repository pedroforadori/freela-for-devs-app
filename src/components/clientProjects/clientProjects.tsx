import "./styles.scss";
import { Box, Center, Flex, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ProjectType } from "../../types/projectType";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../context/theme";
import { getProjectById } from "../../api/project";
import { UserContext } from "../../context/user";
import SearchTerm from "../searchTerm/searchTerm";

const ClientProjects = () => {
  const { theme } = useContext(ThemeContext);
  const { user } = useContext(UserContext);
  const [project, setProject] = useState<ProjectType>();

  useEffect(() => {
    const getProject = async (id?: string) => {
      const responseProject: ProjectType = await getProjectById(id);
      setProject(responseProject);
    };

    getProject(user?.id);
  }, [user?.id, project]);

  return (
    <Link to={""}>
      <div className={theme === "light" ? "light-theme" : "dark-theme"}>
        <Box
          marginTop={10}
          display="flex"
          alignItems="center"
          flexDirection="column"
        >
          <SearchTerm />
          <Center>
            <Heading as="h1">Meus Projetos</Heading>
          </Center>

          {project?.map((item) => (
            <Box className="content-project" marginBottom={8} key={item.id}>
              <Flex justifyContent="space-between">
                <Heading as="h2" size="lg" flex={1}>
                  {item.title}
                </Heading>
                <Text color="#fff" fontWeight="bold">
                  R$ {item.budget}
                </Text>
              </Flex>

              <Text fontSize="sm" marginTop={3} textAlign="justify">
                {item.descriptionProject}
              </Text>
              <Flex justifyContent="space-between" fontSize={10} marginTop={2}>
                <Text color="#fff" marginTop={3}>
                  {item.specialty} Front-End
                </Text>
                <Text color="#fff" marginTop={3}>
                  Propostas: 4
                </Text>
                <Text color="#fff" marginTop={3}>
                  Fase: Analisando propostas
                </Text>
              </Flex>
            </Box>
          ))}
        </Box>
      </div>
    </Link>
  );
};

export default ClientProjects;
