
import { Box, Typography, Button, styled } from '@mui/material'


interface IHeader {
    nome: string
    caminho: string
}

const ButtonMUI = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  backgroundColor: theme.palette.primary.light
}));

const BoxMUI = styled(Box)((props) => ({
  backgroundColor: props.theme.palette.primary.main
}));

export const Header:React.FC<IHeader> = ({ nome, caminho }) => {

    return (
        <BoxMUI sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Typography
            variant='h4'
            align='center'
          >
            { nome }
          </Typography>
          <ButtonMUI sx={{
            marginLeft: '30px'
          }}
          color='primary'
          variant='contained'
          >
            { caminho }
          </ButtonMUI>
        </BoxMUI>
    )
}
