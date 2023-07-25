import React from 'react'
import { Box, Button, styled, Typography } from "@mui/material";
import { Link } from 'react-router-dom'
//img
import headerImg from '../assets/app_overview2.png'

const Header = () => {
    const CustomBox = styled(Box) (({ theme }) => ({
        // minHeight: '80vh',
        height: '100svh',
        display: 'flex',
        justifyContent: 'center',
        // tamanhos
        gap: theme.spacing(2),
        paddingTop: theme.spacing(10),
        // cor de fundo
        backgroundColor: 'var(--tertiary)',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            paddingTop: theme.spacing(0),
        }
    }));

    const BoxText = styled(Box) (({ theme }) => ({
        flex: '1',
        paddingLeft: theme.spacing(8),
        [theme.breakpoints.down('md')]: {
            flex: '2',
            textAlign: 'center',
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
        },
    }));


  return  (
        <CustomBox component='header'>
            {/*  Box text  */}
            <BoxText
            component='section'>
                <Box height="85px"></Box>
                <Typography sx={{
                    typography: { xs: 'h3', md: 'h2' },
                    fontWeight: 700,
                    color: '#fff' }}
                component= 'h1' >
                    Le premier jeu de rencontre
                </Typography>

                <Typography
                variant='p'
                component='p'
                sx={{
                    py: 3,
                    lineHeight: 1.6,
                    color: '#fff',
                }}
                >
                    L'app qui va remplacer Tinder
                </Typography>

                <Box display="flex" gap="5px" justifyContent={{xs: "center", md: 'start'}}>
                    <Button 
                        variant='contained'
                        color='secondary'
                        sx={{
                            "&&:hover": {
                                backgroundColor: "white",
                                color: 'var(--secondary)'
                            }
                        }}>
                        <Typography variant="body1" textAlign="center">
                        Jouer maintenant
                        </Typography>
                    </Button>
                    <Button 
                        component={Link}
                        to={'/about'}
                        variant='contained'
                        color='primary'
                        sx={{
                            "&&:hover": {
                                backgroundColor: "white",
                                color: 'var(--secondary)'
                            }
                        }}
                    >
                        <Typography variant="body1" textAlign="center">
                        Télécharger l'app
                        </Typography>
                    </Button>
                </Box>
            </BoxText>

            <Box sx={theme => ({
                [theme.breakpoints.down('md')]:{
                    flex: '1',
                    paddingTop: '0px',
                    alignSelf: 'center',
                },
                [theme.breakpoints.up('md')]:{
                    flex: '2',
                    alignSelf: 'center',
                },
            })}>
                <Box height={{xs: "40vh", md:"80vh"}}>
                    <img
                        src={headerImg}
                        alt="headerImg"
                        style={{
                            width: "auto",
                            height: '100%',
                            marginBottom: -15,
                        }}
                />
                </Box>
            </Box>

        </CustomBox>
    )
}

export default Header