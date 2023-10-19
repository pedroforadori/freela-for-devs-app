import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  FormControl,
  FormLabel,
  Switch,
} from "@chakra-ui/react";
import "./Styles.scss";
import { ArrowBendRightDown, Moon, SunDim } from "@phosphor-icons/react";
import { useContext } from "react";
import { ThemeContext } from "../../context/Theme";

const MenuTop = () => {
  function handleSwitch() {
    toggleTheme();
  }

  const { toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="menu">
      <h2>Freela For Devs</h2>  
      <Menu>
        <MenuButton
          px='2'
          py={2}
          transition="all 0.2s"
          borderRadius="md"
          borderWidth="1px"
          _focus={{ boxShadow: "outline" }}
        >
          <span className="icon-text">
            User <ArrowBendRightDown size={16} />
          </span>
        </MenuButton>
        <MenuList>
          <MenuItem>Meu Perfil</MenuItem>
          <MenuDivider />
          <MenuItem closeOnSelect={false}>
            <FormControl display="flex" alignItems="center">
              <FormLabel htmlFor="theme" mb="0">
                <SunDim size={24} />
              </FormLabel>
              <Switch id="theme" onChange={handleSwitch} />
              <Moon size={24} style={{ marginLeft: "8px" }} />
            </FormControl>
          </MenuItem>
        </MenuList>
      </Menu>
    </nav>
  );
};

export default MenuTop;
