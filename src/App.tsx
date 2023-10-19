import AppRoutes from "./router"
import { ThemeProvider } from "./context/Theme"

function App() {
  return (
    <ThemeProvider>
      <AppRoutes />
    </ThemeProvider>
    
  )
}

export default App
