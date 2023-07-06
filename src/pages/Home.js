import React from 'react'
import Download from '../components/Download';
import HowItWorks from '../components/HowItWorks';
import Header from '../components/Header';
import Benefits from "../components/Benefits/Benefits";

const Home = () => {
    return (
        <>
            <Header />
            <HowItWorks />
            <Benefits />
            <Download />
        </>

    )
}

export default Home