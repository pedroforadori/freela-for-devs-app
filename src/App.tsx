import { ThemeProvider } from "./context/Theme";
import Routes from "./routes";

function App() {
  return (
    <ThemeProvider>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
