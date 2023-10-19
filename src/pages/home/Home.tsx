import { useContext } from "react";
import MenuTop from "../../components/menu/Menu";
import { ThemeContext } from "../../context/Theme";
import './Styles.scss';
import SearchTerm from "../../components/searchTerm/SearchTerm";

const Home = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={theme === 'light' ? 'home-light' : 'home-dark'}>
        <MenuTop />
        <div className='searchTerm'>
          <SearchTerm />
        </div>
    </div>
    
  );
};

export default Home;
