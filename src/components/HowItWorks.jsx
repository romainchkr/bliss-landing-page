import React, {useEffect, useRef} from 'react'
import {
    Box,
    styled,
    Typography,
} from '@mui/material'
import Title from './Title'
// img
import App1 from '../assets/app1.png';
import App2 from '../assets/app2.png';
import App3 from '../assets/app3.png';
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";


const HowItWorks = () => {
    const sections = useRef(null);
    const section1 = useRef(null);
    const section2 = useRef(null);
    const section3 = useRef(null);

    const CustomTypography = styled(Typography) (({ theme }) => ({
        fontSize: '1.1rem',
        textAlign: 'start',
        lineHeight: '1.5',
        color: 'var(--secondary)',
        marginTop: '1.5rem',
        [theme.breakpoints.down('md')]: {
            fontSize: '1em'
        }
    }));

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        let ctx = gsap.context(() => {

            // Animate section 1
            const tl = gsap.timeline();
            tl.to('#imgApp1', {transform: 'scale(1.2,1.2)'});
            tl.to('#imgApp1', {transform: 'scale(1,1)'});
            tl.to('.textopacityanimation1', {opacity: '1'});
            tl.to('.textslideanimation1', {opacity: '1', transform: 'translate(0px, 0px)'});

            ScrollTrigger.create({
                animation: tl,
                trigger: section1.current,
                toggleActions: 'start pause reverse pause',
                // markers: true, //to remove
                start: 'top center',
                end: () => '+=' + 400,
                scrub: 1,
            });

            const tl3 = gsap.timeline();
            tl3.to(section1.current, {opacity: '0'});
            tl3.to('#imgApp2', {transform: 'scale(1,1)'});
            tl3.to('.textopacityanimation2', {opacity: '1'});
            tl3.to('.textslideanimation2', {opacity: '1', transform: 'translate(0px, 0px)'});
            tl3.to(section2.current, {opacity: '0'});
            tl3.to('#imgApp3', {transform: 'scale(1,1)'});
            tl3.to('.textopacityanimation3', {opacity: '1'});
            tl3.to('.textslideanimation3', {opacity: '1', transform: 'translate(0px, 0px)'});

            ScrollTrigger.create({
                animation: tl3,
                trigger: sections.current,
                toggleActions: 'start pause reverse pause',
                // markers: true, //to remove
                start: '400px center',
                end: () => '1800px center',
                scrub: 1,
                pin: true
            });

        }, sections);

        return () => ctx.revert();
    }, [])

    return (
        <Box className="bloc section-white" bgcolor="white">
            <Box ref={sections} position="relative">
                <Box position="absolute" top="0" left="0" width="100%" height="100%" zIndex="10">
                    <Box ref={section1} component="section" bgcolor="white" width="90%" margin="auto"
                         maxWidth="var(--maxWidth)" >
                        <Box display="flex" alignItems="center" justifyContent="space-between"
                             flexDirection={{xs: 'column', md: 'row'}}>
                            <Box flex="1 1 45%" display="flex" alignItems="stretch" justifyContent="center">
                                <Box id="imgApp1" component="img"
                                     sx={{
                                         flex: "1 1 auto", minWidth: "100%",
                                         transform: 'scale(0,0)'
                                     }}
                                     width="100%"
                                     maxWidth="650px"
                                    // height={{xs: "400px", md: "auto"}}
                                     alt="application"
                                     src={App1}
                                />
                            </Box>
                            <Box flex="1 1 45%" display="flex" flexDirection="column" justifyContent="start" alignItems="start">
                                <Box className="textopacityanimation1" sx={{opacity: '0'}}>
                                    <Title
                                        text={
                                            "Le système de match <span class='gradientText'>le plus amusant</span> n'attend que toi"
                                        }
                                        color="secondary"
                                        fontSize="1.5em"
                                    />
                                </Box>

                                <Box className="textslideanimation1" sx={{opacity: '0', transform: 'translate(0px, 50%)'}}>
                                    <CustomTypography>Bliss n'est pas une application de rencontre ordinaire. Vie une expérience
                                        unique dans laquelle cinq prétendants jouent pour matcher avec toi ! Séléctionne ceux
                                        que tu préfères ! Tous les profils sont connectés et intéragissent en même
                                        temps.</CustomTypography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>

                <Box position="absolute" top="0" left="0" width="100%" height="100%">
                    <Box ref={section2} component="section" bgcolor="white" width="90%" margin="auto"
                         maxWidth="var(--maxWidth)">
                        <Box display="flex" alignItems="center" justifyContent="space-between"
                             flexDirection={{xs: 'column', md: 'row'}}>
                            <Box flex="1 1 45%" display="flex" alignItems="stretch" justifyContent="center">
                                    <Box id="imgApp2" component="img"
                                         sx={{
                                             flex: "1 1 auto", minWidth: "100%",
                                             transform: 'scale(0,0)'
                                         }}
                                         width="100%"
                                         maxWidth="650px"
                                         alt="application"
                                         src={App2}
                                    />
                            </Box>
                            <Box flex="1 1 45%" display="flex" flexDirection="column" justifyContent="start" alignItems="start">
                                <Box className="textopacityanimation2" sx={{opacity: '0'}}>
                                    <Title
                                        text={
                                            "Échange avec les autres profils avant de séléctionner celui qui te <span class='gradientText'>correspond le plus</span> !"
                                        }
                                        color="secondary"
                                        fontSize="1.5em"
                                    />
                                </Box>

                                <Box className="textslideanimation2" sx={{opacity: '0', transform: 'translate(0px, 50%)'}}>
                                    <CustomTypography>Bliss te propose de découvrir ton futur crush
                                        à travers une multitude de jeux de questions, spécialement crées pour savoir qui te
                                        correspond vraiment. Ne base plus tes choix sur une simple photo de profil. Que tu
                                        sois aventurier, accro au sport, mordu de séries, passionné, trouve la relation idéal
                                        sur Bliss.</CustomTypography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>

                <Box ref={section3} component="section" bgcolor="white" width="90%" margin="auto"
                     maxWidth="var(--maxWidth)">
                    <Box display="flex" alignItems="center" justifyContent="space-between"
                         flexDirection={{xs: 'column', md: 'row'}}>
                        <Box flex="1 1 45%" display="flex" alignItems="stretch" justifyContent="center">
                            <Box id="imgApp3" component="img"
                                 sx={{
                                     flex: "1 1 auto", minWidth: "100%",
                                     transform: 'scale(0,0)'
                                 }}
                                 width="100%"
                                 maxWidth="650px"
                                 alt="application"
                                 src={App3}
                            />
                        </Box>
                        <Box flex="1 1 45%" display="flex" flexDirection="column" justifyContent="start" alignItems="start">
                            <Box className="textopacityanimation3" sx={{opacity: '0'}}>
                                <Title
                                    text={
                                        "<span class='gradientText'>Un événement toutes</span> les semaines !"
                                    }
                                    color="secondary"
                                    fontSize="1.5em"
                                />
                            </Box>

                            <Box className="textslideanimation3" sx={{opacity: '0', transform: 'translate(0px, 50%)'}}>
                                <CustomTypography>T'en as marre des applis qui te rendent accro ? Nous aussi ! La session de
                                    jeu est ouverte 30 minutes par semaine de 19h à 19h30. Comme ça t'auras le reste du
                                    temps pour parler à ton futur crush ! Alors ne loupe pas la rencontre parfaite et
                                    télécharge l'app.</CustomTypography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default HowItWorks;