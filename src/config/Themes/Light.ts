import { createTheme } from '@mui/material'
import { brown } from '@mui/material/colors'

export const Light = createTheme({
  palette: {
    primary: {
      main: brown[700],
      light: brown['A400'],
      contrastText: '#FFF',
    }
  },
})