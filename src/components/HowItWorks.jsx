import React from 'react'
import { 
    Box,
    styled,
    Typography,
} from '@mui/material'
import Title from './Title'
// img
import App1 from '../assets/app1_2.png';


const HowItWorks = () => {
    
    const CustomTypography = styled(Typography) ({
        fontSize: '1.1rem',
        textAlign: 'start',
        lineHeight: '1.5',
        color: 'var(--secondary)',
        marginTop: '1.5rem',
    })

    return (
        <>
            <Box component="section" className="section-white" bgcolor="white" width="90%" margin="auto" maxWidth="var(--maxWidth)">
                <Box display="flex" alignItems="center" justifyContent="space-between" flexDirection={{xs: 'column', md: 'row'}}>
                    <Box flex="1 1 45%" display="flex" alignItems="stretch" justifyContent="center">
                        <Box component="img"
                            sx={{
                                flex:"1 1 auto", minWidth: "100%",
                            }}
                            width="100%"
                            // height={{xs: "400px", md: "auto"}}
                            alt="application"
                            src={App1}
                        />
                    </Box>
                    <Box flex="1 1 45%" display="flex" flexDirection="column" justifyContent="start" alignItems="start">
                        <Title
                            text={
                                "Le système de match <span class='gradientText'>le plus amusant</span> n'attend que toi"
                            }
                            color="secondary"
                        />
                        <CustomTypography>Bliss n'est pas une application de rencontre ordinaire, Vie une expérience unique dans laquels cinqs prétendants jouents pour matcher avec toi ! Séléctionne ceux que tu préfèrent ! Tout les profils sont connectés et intéragissent en même temps.</CustomTypography>
                    </Box>
                </Box>
            </Box>

            <Box component="section" className="section-white" bgcolor="white" width="90%" margin="auto" py="100px" maxWidth="var(--maxWidth)">
                <Box display="flex" alignItems="center" justifyContent="space-between" flexDirection={{xs: 'column', md: 'row'}}>
                    <Box flex="0 0 45%">
                        <img src={App1} alt="application" width="100%"/>
                    </Box>
                    <Box display="flex" flexDirection="column" justifyContent="start" alignItems="start" flex="0 0 45%">
                        <Title
                            text={
                                "Echange avec les autres profils avant de séléctionner celui qui te <span class='gradientText'>correspond le plus</span> !"
                            }
                            color="secondary"
                        />
                        <CustomTypography>Bliss te propose de découvrir ton futur crush et vois si le feeling passe à travers une multitude de jeu de question, spécialement crée pour savoir qui te correspond vraiment. Ne base plus t'es choix sur une simple photo de profils, que tu sois aventurier.es Acro au sport, mordu de série, passionées, trouve la relation idéal sur Bliss.</CustomTypography>
                    </Box>
                </Box>
            </Box>

            <Box component="section" className="section-white" bgcolor="white" width="90%" margin="auto" py="100px" maxWidth="var(--maxWidth)">
                <Box display="flex" alignItems="center" justifyContent="space-between" flexDirection={{xs: 'column', md: 'row'}}>
                    <Box flex="0 0 45%">
                        <img src={App1} alt="application" width="100%"/>
                    </Box>
                    <Box display="flex" flexDirection="column" justifyContent="start" alignItems="start" flex="0 0 45%">
                        <Title
                            text={
                                "<span class='gradientText'>Un événement toutes</span> les semaines !"
                            }
                            color="secondary"
                        />
                        <CustomTypography>T'en as marre des appli qui te rendent acro ? Nous aussi ! La séssion de match est ouverte 30 minute par semaine de 19h à 19h30. Comme ca t'auras le reste du temps de parler à ton futur crush ! Alors ne loupe pas la rencontre parfaite et télécharge l'app.</CustomTypography>
                    </Box>
                </Box>
            </Box>
        </>

            
        // <Grid container spacing={{ xs: 4, sm: 4, md: 0 }}
        // sx={{
        //     py: 10,
        //     px: 2,
        //
        // }}>
        //     <CustomGridItem item xs={12} sm={8} md={6}
        //     component = 'section'
        //
        //     >
        //         <Box component='article'
        //         sx={{
        //             px: 4,
        //         }}
        //         >
        //             <Title
        //             text={
        //                 'We make it easy for tenants and landlords'
        //             }
        //             textAlign={'start'}
        //             />
        //             <CustomTypography>
        //                 Listing are updated continuously so you<br />
        //                 won't miss out on homes that just hit<br />
        //                 market until you find your perfect home.
        //             </CustomTypography>
        //         </Box>
        //
        //     </CustomGridItem>
        //
        //     <Grid item xs={12} sm={4} md={6}>
        //         <img src={imgDetail} alt=""
        //         style={{
        //             width: '100%',
        //         }}
        //         />
        //     </Grid>
        //
        //     <Grid item xs={12} sm={4} md={6}
        //     sx={{
        //         order: {xs: 4, sm: 4, md: 3}
        //     }}
        //     >
        //         <img src={imgDetail2} alt=""
        //         style={{
        //             width: "100%",
        //         }}
        //         />
        //     </Grid>
        //
        //     <CustomGridItem item xs={12} sm={8} md={6}
        //     sx={{
        //         order: {xs: 3, sm: 3, md: 4}
        //     }}
        //     >
        //         <Box component='article'
        //         sx={{
        //             px: 4,
        //         }}
        //         >
        //             <Title
        //             text={
        //                 'Match with the best agent'
        //
        //             }
        //             textAlign={'start'}
        //             />
        //             <CustomTypography>
        //                 Our verified partner Agents are local experts who<br />
        //                 earn an average of 4.8/5 stars from buyers and sellers.
        //             </CustomTypography>
        //         </Box>
        //     </CustomGridItem>
        // </Grid>
    )
}

export default HowItWorks;