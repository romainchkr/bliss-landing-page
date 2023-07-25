import React from 'react'
import {
    Button,
    Stack, Typography,
} from '@mui/material'
import Title from './Title'
import Paragraph from './Paragraph'
import { Link } from 'react-router-dom'

const Download = () => {
    return (
        <Stack
        component='section'
        direction="column"
        justifyContent= 'center'
        alignItems='center'
        sx={{
            py: '140px',
            background: 'var(--gradient)'
        }}
        >
            <Title
                text={
                    'Trouve ton prochain crush maintenant'
                }
                textAlign={'center'}
                color="primary"
            />
            <Paragraph
            text={
                'Télécharge gratuitement Bliss'
            }
            maxWidth = {'sm'}
            mx={0}
            textAlign={'center'}
            color='var(--primary)'
            />
            {/*TODO*/}
            <Button component={Link} 
            to={'/contact'}
            variant="contained" 
            type="submit"
            size="medium"
            sx={{
                "&&:hover": {
                    backgroundColor: "white",
                    color: 'var(--secondary)'
                }
            }}
            >
                <Typography variant="body1">
                    Télécharger
                </Typography>

            </Button>
 
        </Stack>
    )
}

export default Download;