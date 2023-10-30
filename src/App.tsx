import AppRoutes from "./router";
import { ThemeProvider } from "./context/Theme";
import { AuthProvider } from "./context/Auth";

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
