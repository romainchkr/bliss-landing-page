import {createTheme} from "@mui/material";
import { deepmerge } from '@mui/utils'

export const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 400,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },

    typography: {
        fontFamily: "'Cabinet Grotesk', Lexend, Raleway",
    },
    
    components: {
        // Name of the component
        MuiButton: {
            styleOverrides: {
                // Name of the slot
                root: {
                    fontFamily: "'Cabinet Grotesk', Lexend, Raleway",
                    borderRadius: "25px",
                    textTransform: 'unset !important',
                },
                activated: ({ theme }) => ({
                    background: "var(--gradient)",
                    color: theme.palette.primary.main,
                    "&:disabled": {
                        background: "var(--gradient-disabled)",
                        color: theme.palette.primary.light,
                    },
                }),
                triggered: ({ theme }) => ({
                    background: "var(--gradient)",
                    color: theme.palette.primary.main,
                    boxShadow: "inset -5px -5px 10px rgba(0, 0, 0, 0.5), inset 5px 5px 10px rgba(0, 0, 0, 0.12)"
                }),
                sliderActionable: ({ theme }) => (
                    deepmerge({
                        // Inherit styles from outlined button
                        ...theme.components?.MuiButton?.styleOverrides?.outlined,
                    }, {
                        background: "transparent",
                        color: 'var(--secondary)',
                    })),
            },
        },
        MuiTextField: {
            styleOverrides: {
                // Name of the slot
                root: {
                    fontFamily: "'Cabinet Grotesk', Lexend, Raleway",
                    fontSize: '16px',
                    borderRadius: 'var(--stdBorderRadius)',
                    // backgroundColor: "#FFFFFF",
                },
                outlined: {
                    background: 'transparent'
                },
                // customRadius: {
                //
                // },
                customRadius: {
                    borderRadius: '5px'
                }
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    fontFamily: "'Cabinet Grotesk', Lexend, Raleway",
                    // color: "#000000",
                    borderRadius: 'var(--stdBorderRadius)',
                },
            },
        },
        MuiTypography: {
            styleOverrides: {
                root: {
                    fontFamily: "'Cabinet Grotesk', Lexend, Raleway",
                    fontWeight: '500'
                },
                // caption: {
                //     fontSize: "0.75 rem",
                //     fontstyle: 'normal',
                //     color: '#A1A1A1',
                // },
                button: ({ theme }) => ({
                    fontSize: '1.1rem',
                    textTransform: 'unset !important',
                }),
                subtitle1: {
                    fontSize: "0.8 rem",
                    fontstyle: 'normal',
                    color: '#5b5b5b',
                },
            },
        },
    },
    palette: {
        primary: {
            main: '#F8F7FF',
        },
        secondary: {
            main: '#333333',
        },
        tertiary: {
            main: '#C98BF2',
            contrastText: "#FFFFFF"
        },
        inactive: {
            main:'#BBBBBB'
        },
    },
});