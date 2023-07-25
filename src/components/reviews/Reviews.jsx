import React from 'react'
import {
    Box,
} from '@mui/material'

import ReviewCard from "./ReviewCard";

import man from '../../assets/man.png';
import man1 from '../../assets/man1.png';
import Title from "../Title";

const reviewsItem = [
    {
        text: "Excellent product with amazing support",
        url: man1,
        name: 'Marc'
    },
    {
        text: "Hands-down the best solution",
        url: man,
        name: 'Naël'
    },
    {
        text: "Our YoY growth increased by 127%",
        url: man1,
        name: 'Esther'
    },
    {
        text: "Hands-down the best solution",
        url: man,
        name: 'Esther'
    },
    {
        text: "Our YoY growth increased by 127%",
        url: man1,
        name: 'Esther'
    }
];

const Reviews = () => {

    return (
        <Box component="section" className="section-black" bgcolor="var(--secondary)">
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