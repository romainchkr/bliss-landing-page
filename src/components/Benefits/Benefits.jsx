import React from 'react'
import {
    Box,
} from '@mui/material'

import BenefitBlock from "./BenefitBlock";

import emojiFun from '../../assets/emoji_fun.png';
import emojiFriends from '../../assets/emoji_celebration.png';
import emojiSnowFlake from '../../assets/emoji_snowflake.png';
import emojiStar from '../../assets/emoji_star.png';

const Benefits = () => {

    return (
        <Box component="section" className="section-black" bgcolor="var(--secondary)">
            <Box component="div" width={{xs: '90%'}} margin='auto'>
                <Box className="atoutwrap" flexDirection={{xs: 'column', md: 'row'}} gap={{xs: "30px", md: "60px"}}>
                    <BenefitBlock img={emojiFun} title="Amuse toi !" content="Bliss est conçu pour te divertir et t'amuser. Alors pas de pression ! Laisse-toi guider par le feeling et fait des rencontres naturellement." />
                    <BenefitBlock img={emojiFriends} title="Joue avec tes amis" content="Invite jusqu'à 5 de tes potes et lancez une partie ensemble ! Qui parmi vous ira jusqu'en finale ?" />
                </Box>

                <Box className="atoutwrap" flexDirection={{xs: 'column', md: 'row'}} gap={{xs: "30px", md: "60px"}}>
                    <BenefitBlock img={emojiSnowFlake} title="Brise la glace" content="Fini les “Salu sa va ?” Grâce aux jeux de questions engage des conversations intéressantes et spontanées" />
                    <BenefitBlock img={emojiStar} title="Sois toi même" content="Ici, pas besoin de jouer un rôle. Que tu sois extraverti, introverti, créatif ou aventurier, Bliss valorise ta singularité" />
                </Box>
            </Box>
        </Box>
    )
}

export default Benefits;