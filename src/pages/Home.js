import React, {useEffect, useState} from 'react'
import Download from '../components/Download';
import HowItWorks from '../components/HowItWorks';
import Header from '../components/Header';
import Benefits from "../components/Benefits/Benefits";
import {ThemeProvider} from "@mui/material";
import {theme} from "../theme";
import Reviews from "../components/reviews/Reviews";
import Navbar from "../components/Navbar";

const Home = () => {
    const [isNavbarBlack, setIsNavbarBlack] = useState(false);

    useEffect(() => {
        // TODO : FINISH SCROLLING NAVBAR COLOR
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            const navbarHeight = document.querySelector('nav').offsetHeight;

            // console.log("sections", sections);

            sections.forEach((section) => {
                const sectionTop = section.offsetTop - navbarHeight;
                const sectionBottom = sectionTop + section.offsetHeight;
                const scrollPosition = window.scrollY;

                if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                    if(section.classList.contains('section-black')) {
                        console.log("got you")
                    }
                    setIsNavbarBlack(section.classList.contains('section-black'));
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <Navbar isNavbarBlack={isNavbarBlack} />
            <Header />
            <HowItWorks />
            <Reviews />
            <Benefits />
            <Download />
        </ThemeProvider>
    )
}

export default Home