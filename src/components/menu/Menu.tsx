import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  IconButton,
  Center,
} from "@chakra-ui/react";
import "./Styles.scss";
import { ArrowBendRightDown, Moon, Sun } from "@phosphor-icons/react";
import { useContext } from "react";
import { ThemeContext } from "../../context/Theme";
import { AuthContext } from "../../context/user";
import { useNavigate } from "react-router-dom";


const MenuTop = () => {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { logout, user } = useContext(AuthContext);

  const handleSwitch = () => {
    toggleTheme();
  }

  const handleLogout = () => {
    logout()
    navigate("/")
  }

  return (
    <nav className="menu">
      <h2>Freela For Devs</h2> 
      <Center gap="4px">
        <IconButton 
          variant='outline'
          icon={theme === "dark" ? <Sun size={24} /> : <Moon size={24} />}
          onClick={handleSwitch} 
          aria-label={""}        
        />
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
            {  user?.fullname?.split(' ').slice(0, 1).join(' ') } <ArrowBendRightDown size={16} />
            </span>
          </MenuButton>
          
          <MenuList>
            <MenuItem>Meu Perfil</MenuItem>
            <MenuDivider />
            <MenuItem onClick={handleLogout}>Sair</MenuItem>
          </MenuList>
        </Menu>
      </Center> 
      
    </nav>
  );
};

export default MenuTop;
