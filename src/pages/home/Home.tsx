import "./styles.scss";
import { useContext } from "react";
import MenuTop from "../../components/menu/menu";
import ClientProjects from "../../components/clientProjects/clientProjects";
import SearchTerm from "../../components/searchTerm/SearchTerm";
import { ThemeContext } from "../../context/theme";
import { UserContext } from "../../context/user";

const Home = () => {
  const { theme } = useContext(ThemeContext);
  const { user } = useContext(UserContext);
  
  return (
    <div className={theme === "light" ? "home-light" : "home-dark"}>
      <div className="menu-fixed">
        <MenuTop />
        <div className="searchTerm">
            <SearchTerm />
        </div>
      </div>
      {user?.type === 1 
        ? <ClientProjects /> 
        : undefined}
    </div>
  );
};

export default Home;
