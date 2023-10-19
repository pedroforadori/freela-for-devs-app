import { Input, InputGroup, InputLeftElement, Stack } from "@chakra-ui/react";
import "./Styles.scss";
import { MagnifyingGlass } from "@phosphor-icons/react";

const SearchTerm = () => {
  return (
    <Stack spacing={4} className="input-search">
      <InputGroup>
        <InputLeftElement pointerEvents="none">
        <MagnifyingGlass size={24} />
        </InputLeftElement>
        <Input type="tel" placeholder="Pesquisar job" size="lg" />
      </InputGroup>
    </Stack>
  );
};

export default SearchTerm;
