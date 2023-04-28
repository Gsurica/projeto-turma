import { createTheme } from '@mui/material'
import { cyan, purple } from '@mui/material/colors'

export const Dark = createTheme({
  palette: {
    primary: {
      main: purple[700],
      light: purple['A400'],
      contrastText: '#FFF',
      dark: cyan['100']
    }
  },
})