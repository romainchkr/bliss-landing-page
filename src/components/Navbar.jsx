import React from 'react'
import {
    AppBar,
    Toolbar,
    Box,
    List,
    ListItem,
    Typography,
    styled,
    ListItemButton,
    ListItemText, Button, ThemeProvider,
} from '@mui/material';
// menu
import DrawerItem from './DrawerItem';
// rotas
import { Link } from 'react-router-dom';
// img
import BlissIcon from '../assets/logo_violet.png';

import {theme} from "../theme";


// personalizacao
const StyledToolbar = styled(Toolbar) ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
});

const ListMenu = styled(List)(({ theme }) => ({
    display: 'none',
    [theme.breakpoints.up("sm")] : {
        display: "flex",
    },
}));

//rotas
const itemList = [
    {
      text: "Home",
      to: "/" 
    },
    {
      text: "About",
      to: "/about"
    },
    {
        text: "Contact",
        to: "/contact"
    }
];


const Navbar = () => {
    
    return (
        <ThemeProvider theme={theme}>
            <AppBar
            component="nav"
            position="fixed"
            sx={{
                backgroundColor: 'white',
                p: '16px 2%'
            }}
            elevation={0}>
                <StyledToolbar>
                    <Button variant="contained" color="secondary" sx={{ml: {xs: 'none', md: 'auto'}, display: {xs: 'none', md: 'block'}, visibility: "hidden"}}>Télécharger</Button>
                    <img src={BlissIcon} alt="icon bliss" width="150px" height="auto" />
                    <Button variant="contained" color="secondary" sx={{ml: 'auto'}}>Télécharger</Button>

                    {/*<Box sx={{display: { xs: 'block', sm: 'none' } }}>*/}
                    {/*    <DrawerItem /> */}
                    {/*</Box>*/}
                    {/*<ListMenu>*/}
                    {/*    {itemList.map( ( item ) => {*/}
                    {/*        const { text } = item;*/}
                    {/*        return(*/}
                    {/*            <ListItem key={text}>*/}
                    {/*                <ListItemButton component={Link} to={item.to}*/}
                    {/*                sx={{*/}
                    {/*                    color: '#fff',*/}
                    {/*                    "&:hover": {*/}
                    {/*                        backgroundColor: 'transparent',*/}
                    {/*                        color: '#1e2a5a',*/}
                    {/*                    }*/}
                    {/*                }}*/}
                    {/*                >*/}
                    {/*                    <ListItemText primary={text} />*/}
                    {/*                </ListItemButton>*/}
                    {/*            </ListItem>*/}
                    {/*        )*/}
                    {/*    })}*/}
                    {/*</ListMenu>*/}
                </StyledToolbar>
            </AppBar>
        </ThemeProvider>
    )
}

export default Navbar;
