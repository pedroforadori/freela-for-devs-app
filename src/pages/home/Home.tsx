import "./styles.scss";
import { useContext } from "react";
import MenuTop from "../../components/menuTop/menuTop";
import { ThemeContext } from "../../context/theme";
import { Outlet } from "react-router-dom";

const Home = () => {
  const { theme } = useContext(ThemeContext);

  
  return (
    <div className={theme === "light" ? "home-light" : "home-dark"}>
      <div className="menu-fixed">
        <MenuTop />
      </div>
      <Outlet />
    </div>
  );
};

export default Home;
