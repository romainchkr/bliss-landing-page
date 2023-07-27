import React from 'react'
import { Box, Button, styled, Typography } from "@mui/material";
import Link from '@mui/material/Link'
//img
import headerImg from '../assets/app_overviewx2.png'

const Header = () => {
    const CustomBox = styled(Box) (({ theme }) => ({
        // minHeight: '80vh',
        height: '100svh',
        display: 'flex',
        justifyContent: 'center',
        gap: theme.spacing(2),
        paddingTop: theme.spacing(10),
        backgroundColor: 'var(--tertiary)',
        overflowY: 'visible',
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
        paddingTop: '5vh',
        paddingBottom: '5vh',
        [theme.breakpoints.down('md')]: {
            flex: '0',
            textAlign: 'center',
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
        },
    }));


  return  (
        <CustomBox component='header' className="bloc section-purple">
            {/*  Box text  */}
            <BoxText
            component='section'>
                <Box height="90px"></Box>
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
                    Tous les mardis à 19h
                </Typography>

                <Box display="flex" gap="10px" justifyContent={{xs: "center", md: 'start'}}
                flexDirection={{xs: "column", sm: 'row'}} width={{xs: '80%', sm: "auto"}} m={{xs: "auto"}}>
                    <Link href="https://www.app.blissdatinggame.com" sx={{textDecoration: 'none'}}>
                    <Button
                        variant='contained'
                        color='secondary'
                        sx={{
                            px: 3,
                            "&&:hover": {
                                backgroundColor: "white",
                                color: 'var(--secondary)'
                            }
                        }}>
                        <Typography variant="body1" textAlign="center">
                                Jouer maintenant
                        </Typography>
                    </Button>
                    </Link>
                    <Link href="https://www.app.blissdatinggame.com" sx={{textDecoration: 'none'}}>
                        <Button
                            variant='contained'
                            color='primary'
                            sx={{
                                px: 3,
                                "&&:hover": {
                                    backgroundColor: "var(--secondary)",
                                    color: 'white'
                                }
                            }}
                        >
                            <Typography variant="body1" textAlign="center">
                            Télécharger l'app
                            </Typography>
                        </Button>
                    </Link>
                </Box>
            </BoxText>

            <Box component='section' p={0} sx={theme => ({
                [theme.breakpoints.down('md')]:{
                    flex: '1',
                    paddingTop: '0px',
                    alignSelf: 'center',
                },
                [theme.breakpoints.up('md')]:{
                    flex: '2',
                    alignSelf: 'center',
                },
                zIndex: '20'
            })}>
                {/*<Box height={{xs: "40vh", md:"80vh"}} sx={{overflowX: 'hidden'}}>*/}
                {/*    <img*/}
                {/*        src={headerImg}*/}
                {/*        alt="headerImg"*/}
                {/*        style={{*/}
                {/*            width: "auto",*/}
                {/*            height: '100%',*/}
                {/*            marginBottom: -15,*/}
                {/*        }}*/}
                {/*/>*/}
                {/*</Box>*/}

                <Box height={{xs: "40vh", md:"80vh"}} width={{xs: '80vw', md: '50vw'}}
                     sx={{
                         backgroundImage: `url(${headerImg})`,
                         backgroundSize: 'contain',
                         backgroundPosition: 'center',
                         backgroundRepeat: 'no-repeat'}}>
                </Box>
            </Box>

        </CustomBox>
    )
}

export default Header