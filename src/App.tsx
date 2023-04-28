import AppRoutes from "./config/Routes/AppRoutes"
import { ThemeProvider } from '@mui/material'
import { Light } from './config/Themes/Light'
import { Dark } from "./config/Themes/Dark"

function App() {

  return (
    <ThemeProvider theme={Dark}>
      <AppRoutes />
    </ThemeProvider>
  )
}

export default App;
