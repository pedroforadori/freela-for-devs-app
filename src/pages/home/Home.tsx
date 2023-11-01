import { useContext } from "react";
import MenuTop from "../../components/menu/menu";
import { ThemeContext } from "../../context/theme";
import "./styles.scss";
import SearchTerm from "../../components/searchTerm/SearchTerm";
import { UserContext } from "../../context/user";
import ClientProjects from "../../components/clientProjects/clientProjects";

const Home = () => {
  const { theme } = useContext(ThemeContext);
  const { user } = useContext(UserContext);

  return (
    <div className={theme === "light" ? "home-light" : "home-dark"}>
      <MenuTop />
      <div className="searchTerm">
          <SearchTerm />
      </div>
      {user?.type === 1 ? <ClientProjects /> : undefined}
    </div>
  );
};

export default Home;
