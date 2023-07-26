import React, {useEffect, useState} from 'react'
import {
    AppBar,
    Toolbar,
    styled,
    Button,
    ThemeProvider,
} from '@mui/material';

import BlissPurpleIcon from '../assets/logo_violet.png';
import BlissWhiteIcon from '../assets/logo_blanc.png';
import BlissBlackIcon from '../assets/logo_noir.png';

import {theme} from "../theme";

const StyledToolbar = styled(Toolbar) ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
});

const Navbar = () => {
    // const [navColor, setNavColor] = useState('white');
    const [navColor, setNavColor] = useState('var(--tertiary)');

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('.bloc');
            const navbarHeight = document.querySelector('nav').offsetHeight;

            sections.forEach((section) => {
                const sectionTop = section.offsetTop - navbarHeight;
                const sectionBottom = sectionTop + section.offsetHeight;
                const scrollPosition = window.scrollY;

                if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                    if(section.classList.contains('section-black')) {
                        setNavColor('var(--secondary)');
                    } else if(section.classList.contains('section-purple')) {
                        setNavColor('var(--tertiary)');
                    } else if(section.classList.contains('section-white')) {
                        setNavColor('white');
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    return (
        <ThemeProvider theme={theme}>
            <AppBar
            component="nav"
            position="fixed"
            sx={{
                backgroundColor: `${navColor} !important`,
                p: '16px 2%'
            }}
            elevation={0}>
                <StyledToolbar>
                    <Button variant="contained" color="secondary" sx={{ml: {xs: 'none', md: 'auto'}, display: {xs: 'none', md: 'block'}, visibility: "hidden"}}>Télécharger</Button>
                    <img src={navColor === 'white' ? BlissBlackIcon : BlissWhiteIcon } alt="icon bliss" width="150px" height="auto" />
                    <Button variant="contained" color={navColor === 'white' ? "secondary" : "primary"} sx={{ml: 'auto'}}>Télécharger</Button>
                </StyledToolbar>
            </AppBar>
        </ThemeProvider>
    )
}

export default Navbar;
