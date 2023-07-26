import React from 'react'
import {
    Box,
} from '@mui/material'

import ReviewCard from "./ReviewCard";

import girl from '../../assets/girl.png';
import man from '../../assets/man.png';
import man1 from '../../assets/man1.png';
import Title from "../Title";

const reviewsItem = [
    {
        text: "Outre l'aspect rencontre c'est un super jeu même entre potes !",
        url: girl,
        name: 'Barbara'
    },
    {
        text: "Le concept est top ! J'adore les différents mini-jeux et le principe d'élimination qui se fait petit à petit. ",
        url: man,
        name: 'Naël'
    },
    {
        text: "C'est trop bien pour faire des rencontres de tout genre. Ca change des app de rencontres traditionnelles",
        url: man1,
        name: 'Esther'
    }
];

const Reviews = () => {

    return (
        <Box component="section" className="bloc section-black" bgcolor="var(--secondary)">
            <Title
                text={
                    'Ils ont testés'
                }
                textAlign={'center'}
                color="primary"
            />
            <Box component="div" width="90%" m='auto' p="20px"
                display= "flex" sx={{overflowY: 'hidden', overflowX: 'scroll'}}>
                <Box display="flex" gap="40px">
                    {reviewsItem.map((item, index) => {
                        return (
                            <Box key={index}>
                                <ReviewCard text={item.text} url={item.url} name={item.name}/>
                            </Box>
                        )
                    })}
                </Box>
            </Box>
        </Box>
    )
}

export default Reviews;