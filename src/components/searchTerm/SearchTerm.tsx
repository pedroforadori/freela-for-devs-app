import { Box, Input, InputGroup, InputLeftElement, Stack } from "@chakra-ui/react";
import "./styles.scss";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { UserContext } from "../../context/user";
import { useContext } from "react";
import { ThemeContext } from "../../context/theme";

const SearchTerm = () => {
  const { user } = useContext(UserContext);
  const { theme } = useContext(ThemeContext)
  
  return (
    <Box 
      justifyContent="center" 
      width={"80%"}
    >
      <Stack spacing={4} className="input-search">
        <InputGroup>
          <InputLeftElement pointerEvents="none">
          <MagnifyingGlass size={24} color={theme === "light" ? "#000" : "#fff"}/>
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
