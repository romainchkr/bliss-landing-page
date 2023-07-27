import React from 'react'
import {
    Avatar,
    Box, Card, CardContent,
    Typography,
} from '@mui/material'

const ReviewCard = ({url, text, name}) => {
    return (
        <Card sx={{p: '24px', width: "250px"}} >
            <CardContent>
                <Box display="flex" alignItems="center" gap="10px" mb="10px">
                    <Avatar alt="visage utilisateur" src={url} sx={{width: '50px', height: '50px'}}/>
                    <Typography variant="h6">{name}</Typography>
                </Box>
                <Typography variant="body1">{text}</Typography>
            </CardContent>
        </Card>
    );
}

export default ReviewCard;