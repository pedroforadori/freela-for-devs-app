import { Box, Input, InputGroup, InputLeftElement, Stack } from "@chakra-ui/react";
import "./styles.scss";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { UserContext } from "../../context/user";
import { useContext } from "react";

const SearchTerm = () => {
  const { user } = useContext(UserContext);
  
  return (
    <Box 
      justifyContent="center" 
      width={"100%"}
    >
      <Stack spacing={4} className="input-search">
        <InputGroup>
          <InputLeftElement pointerEvents="none">
          <MagnifyingGlass size={24} />
          </InputLeftElement>
          <Input 
            type="tel" 
            placeholder={user?.type === 1 ? "Pesquisar projeto" : "Pesquisar job"} 
            size="lg" 
          />
        </InputGroup>
      </Stack>
    </Box>
    
  );
};

export default SearchTerm;
