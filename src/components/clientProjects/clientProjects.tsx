import "./styles.scss";
import { Box, Center, Flex, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ProjectType } from "../../types/projectType";

const ClientProjects = ({ project }: ProjectType) => {
  return (
    <Link to={""}>
      <Box
        marginTop={10}
        display="flex"
        alignItems="center"
        flexDirection="column"
        backgroundColor="#242137"
      >
        <Center>
          <Heading as="h1">Meus Projetos</Heading>
        </Center>
        {project?.map((item) => (
          <Box className="content-project" marginBottom={8} key={item.id}>
            <Flex justifyContent="space-between">
              <Heading as="h2" size="lg" flex={1}>
                {item.title} Project name Project name Project name
              </Heading>
              <Text color="#fff" fontWeight="bold">
                R$ {item.budget}
              </Text>
            </Flex>

            <Text fontSize="sm" color="#fff" marginTop={3} textAlign="justify">
              {item.description}
              Boa tarde Preciso de um freelancer que saiba configurar bling com
              marketplaces e olist (integração já está pronta, precisamos
              somente configurar).É Necessário que a pessoa tenha conhecimento,
              que já tenha feito isso anteriormente. Muitíssimo obrigada desde
              já. Roberta
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
    </Link>
  );
};

export default ClientProjects;
