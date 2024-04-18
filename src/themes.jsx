import { createTheme } from "@mui/material/styles";
import { red, blue } from '@mui/material/colors';

const theme = createTheme({
    palette:{
        primary: {
            main: red[500],
        },
        secondary: {
            main: blue[500],
        },
    }
})

export {theme}