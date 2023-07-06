import React from 'react'
import { 
    Box,
} from '@mui/material'

import BenefitBlock from "./BenefitBlock";

import iconHaveFun from '../../assets/icon_havefun.png';
import iconPlayFriends from '../../assets/icon_playfriends.png';

const Benefits = () => {

    return (
        <Box component="section">
            <Box className="atoutwrap" flexDirection={{xs: 'column', md: 'row'}} >
                <BenefitBlock img={iconHaveFun} title="Amuse toi" content="Bliss est conçu pour te divertir et t'amuser. Alors pas de pression ! Laisse-toi guider par le feeling et fait des rencontres naturellement." />
                <BenefitBlock img={iconPlayFriends} title="Joue avec tes amis" content="Invite jusqu'à 5 de tes potes et lancez une partie ensemble ! Qui parmi vous ira jusqu'en finale ?" />
            </Box>

            <Box className="atoutwrap" flexDirection={{xs: 'column', md: 'row'}}>
                <BenefitBlock img={iconHaveFun} title="Amuse toi" content="Bliss est conçu pour te divertir et t'amuser. Alors pas de pression ! Laisse-toi guider par le feeling et fait des rencontres naturellement." />
                <BenefitBlock img={iconHaveFun} title="Amuse toi" content="Bliss est conçu pour te divertir et t'amuser. Alors pas de pression ! Laisse-toi guider par le feeling et fait des rencontres naturellement." />
            </Box>
        </Box>
    )
}

export default Benefits;