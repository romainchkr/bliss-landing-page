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
    return (
        <ThemeProvider theme={theme}>
            <Header />
            <HowItWorks />
            <Reviews />
            <Benefits />
            <Download />
        </ThemeProvider>
    )
}

export default Home