import { useContext } from "react";
import MenuTop from "../../components/menu/Menu";
import { ThemeContext } from "../../context/Theme";
import './Styles.scss';

const Home = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={theme === 'light' ? 'home-light' : 'home-dark'}>
        <MenuTop />
    </div>
    
  );
};

export default Home;
