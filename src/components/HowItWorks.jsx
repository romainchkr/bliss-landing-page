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
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";


const HowItWorks = () => {

    const sections = useRef(null);
    const section1 = useRef(null);
    const section2 = useRef(null);
    const section3 = useRef(null);
    const img1 = useRef(null);

    const CustomTypography = styled(Typography)({
        fontSize: '1.1rem',
        textAlign: 'start',
        lineHeight: '1.5',
        color: 'var(--secondary)',
        marginTop: '1.5rem',
    })


    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // gsap.to(section1.current, {
        //     opacity: 1,
        //     scrollTrigger: {
        //         trigger: section1.current,
        //         toggleActions: 'start pause reverse pause',
        //         markers: true, //to remove
        //         start: 'top center',
        //         end: () => '+=' + section1.current.offsetHeight,
        //         scrub: true,
        //     }
        // })

        let ctx = gsap.context(() => {

            // Animate section 1
            // const tl = gsap.timeline();
            // tl.to('#imgApp1', {transform: 'scale(1.2,1.2)'});
            // tl.to('#imgApp1', {transform: 'scale(1,1)'});
            // tl.to('.textopacityanimation1', {opacity: '1'});
            // tl.to('.textslideanimation1', {opacity: '1', transform: 'translate(0px, 0px)'});
            //
            // ScrollTrigger.create({
            //     animation: tl,
            //     trigger: section1.current,
            //     toggleActions: 'start pause reverse pause',
            //     // markers: true, //to remove
            //     start: 'top center',
            //     end: () => '+=' + 400,
            //     scrub: true,
            // });

            // gsap.to(section1.current, {
            //     opacity: '0',
            //     scrollTrigger: {
            //         trigger: section1.current,
            //         toggleActions: 'start pause reverse pause',
            //         // markers: true, //to remove
            //         start: '400px center',
            //         end: () => '550px center',
            //         scrub: true,
            //         pin: true
            //     }
            // });

            const tl3 = gsap.timeline();
            tl3.to('#imgApp1', {transform: 'scale(1.2,1.2)'});
            tl3.to('#imgApp1', {transform: 'scale(1,1)'});
            tl3.to('.textopacityanimation1', {opacity: '1'});
            tl3.to('.textslideanimation1', {opacity: '1', transform: 'translate(0px, 0px)'});
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
                scrub: true,
                pin: true
            });

            // Animate section 2

            // const tl2 = gsap.timeline();
            // tl2.to('#imgApp2', {transform: 'scale(1.2,1.2)'});
            // tl2.to('#imgApp2', {transform: 'scale(1,1)'});
            // tl2.to('.textopacityanimation2', {opacity: '1'});
            // tl2.to('.textslideanimation2', {opacity: '1', transform: 'translate(0px, 0px)'});
            //
            // ScrollTrigger.create({
            //     animation: tl2,
            //     trigger: section2.current,
            //     toggleActions: 'start pause reverse pause',
            //     markers: true, //to remove
            //     start: '550px center',
            //     end: () => '+=' + 200,
            //     scrub: true,
            //     pin: true
            // });

        }, sections);

        return () => ctx.revert();

        // const tl = gsap.timeline();
        // tl.to(img1.current, {transform: 'scale(1.2,1.2)'});
        // tl.to(img1.current, {transform: 'scale(1,1)'});
        //
        // ScrollTrigger.create({
        //     animation: tl,
        //     trigger: section1.current,
        //     toggleActions: 'start pause reverse pause',
        //     markers: true, //to remove
        //     start: 'top center',
        //     end: () => '+=' + section1.current.offsetHeight,
        //     scrub: true,
        //     pin: true
        // })

        // gsap.to(img1.current, {
        //     transform: 'scale(1, 1)',
        //     scrollTrigger: {
        //         trigger: section1.current,
        //         toggleActions: 'start pause reverse pause',
        //         markers: true, //to remove
        //         start: 'top center',
        //         end: () => '+=' + section1.current.offsetHeight,
        //         scrub: true,
        //     }
        // })
    }, [])

    return (
        <Box ref={sections} position="relative" height="100vh">
            <Box position="absolute" top="0" left="0" width="100%" height="100%" zIndex="10">
                <Box ref={section1} component="section" className="section-white" bgcolor="white" width="90%" margin="auto"
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
                                // height={{xs: "400px", md: "auto"}}
                                 alt="application"
                                 src={App2}
                            />
                        </Box>
                        <Box flex="1 1 45%" display="flex" flexDirection="column" justifyContent="start" alignItems="start">
                            <Box className="textopacityanimation1" sx={{opacity: '0'}}>
                                <Title
                                    text={
                                        "Le système de match <span class='gradientText'>le plus amusant</span> n'attend que toi"
                                    }
                                    color="secondary"
                                />
                            </Box>

                            <Box className="textslideanimation1" sx={{opacity: '0', transform: 'translate(0px, 50%)'}}>
                                <CustomTypography>Bliss n'est pas une application de rencontre ordinaire, Vie une expérience
                                    unique dans laquels cinqs prétendants jouents pour matcher avec toi ! Séléctionne ceux
                                    que tu préfèrent ! Tout les profils sont connectés et intéragissent en même
                                    temps.</CustomTypography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>

            <Box position="absolute" top="0" left="0" width="100%" height="100%">
                <Box ref={section2} component="section" className="section-white" bgcolor="white" width="90%" margin="auto"
                     maxWidth="var(--maxWidth)">
                    <Box display="flex" alignItems="center" justifyContent="space-between"
                         flexDirection={{xs: 'column', md: 'row'}} height="100vh">
                        <Box flex="1 1 45%" display="flex" alignItems="stretch" justifyContent="center">
                            <Box id="imgApp2" component="img"
                                 sx={{
                                     flex: "1 1 auto", minWidth: "100%",
                                     transform: 'scale(0,0)'
                                 }}
                                 width="100%"
                                 height={{xs: "400px", md: "auto"}}
                                 alt="application"
                                 src={App1}
                            />
                        </Box>
                        <Box flex="1 1 45%" display="flex" flexDirection="column" justifyContent="start" alignItems="start">
                            <Box className="textopacityanimation2" sx={{opacity: '0'}}>
                                <Title
                                    text={
                                        "Echange avec les autres profils avant de séléctionner celui qui te <span class='gradientText'>correspond le plus</span> !"
                                    }
                                    color="secondary"
                                />
                            </Box>

                            <Box className="textslideanimation2" sx={{opacity: '0', transform: 'translate(0px, 50%)'}}>
                                <CustomTypography>Bliss te propose de découvrir ton futur crush et vois si le feeling passe
                                    à travers une multitude de jeu de question, spécialement crée pour savoir qui te
                                    correspond vraiment. Ne base plus t'es choix sur une simple photo de profils, que tu
                                    sois aventurier.es Acro au sport, mordu de série, passionées, trouve la relation idéal
                                    sur Bliss.</CustomTypography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>

            <Box ref={section3} component="section" className="section-white" bgcolor="white" width="90%" margin="auto"
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
                            // height={{xs: "400px", md: "auto"}}
                             alt="application"
                             src={App1}
                        />
                    </Box>
                    <Box flex="1 1 45%" display="flex" flexDirection="column" justifyContent="start" alignItems="start">
                        <Box className="textopacityanimation3" sx={{opacity: '0'}}>
                            <Title
                                text={
                                    "<span class='gradientText'>Un événement toutes</span> les semaines !"
                                }
                                color="secondary"
                            />
                        </Box>

                        <Box className="textslideanimation3" sx={{opacity: '0', transform: 'translate(0px, 50%)'}}>
                            <CustomTypography>T'en as marre des appli qui te rendent acro ? Nous aussi ! La séssion de
                                match est ouverte 30 minute par semaine de 19h à 19h30. Comme ca t'auras le reste du
                                temps de parler à ton futur crush ! Alors ne loupe pas la rencontre parfaite et
                                télécharge l'app.</CustomTypography>
                        </Box>
                    </Box>
                </Box>
            </Box>

            {/*<Box ref={section1} component="section" className="section-white" bgcolor="white" width="90%" margin="auto"*/}
            {/*     maxWidth="var(--maxWidth)">*/}
            {/*    <Box display="flex" alignItems="center" justifyContent="space-between"*/}
            {/*         flexDirection={{xs: 'column', md: 'row'}}>*/}
            {/*        <Box flex="1 1 45%" display="flex" alignItems="stretch" justifyContent="center">*/}
            {/*            <Box id="imgApp1" component="img"*/}
            {/*                 sx={{*/}
            {/*                     flex: "1 1 auto", minWidth: "100%",*/}
            {/*                     transform: 'scale(0,0)'*/}
            {/*                 }}*/}
            {/*                 width="100%"*/}
            {/*                // height={{xs: "400px", md: "auto"}}*/}
            {/*                 alt="application"*/}
            {/*                 src={App2}*/}
            {/*            />*/}
            {/*        </Box>*/}
            {/*        <Box flex="1 1 45%" display="flex" flexDirection="column" justifyContent="start" alignItems="start">*/}
            {/*            <Box className="textopacityanimation1" sx={{opacity: '0'}}>*/}
            {/*                <Title*/}
            {/*                    text={*/}
            {/*                        "Le système de match <span class='gradientText'>le plus amusant</span> n'attend que toi"*/}
            {/*                    }*/}
            {/*                    color="secondary"*/}
            {/*                />*/}
            {/*            </Box>*/}

            {/*            <Box className="textslideanimation1" sx={{opacity: '0', transform: 'translate(0px, 50%)'}}>*/}
            {/*                <CustomTypography>Bliss n'est pas une application de rencontre ordinaire, Vie une expérience*/}
            {/*                    unique dans laquels cinqs prétendants jouents pour matcher avec toi ! Séléctionne ceux*/}
            {/*                    que tu préfèrent ! Tout les profils sont connectés et intéragissent en même*/}
            {/*                    temps.</CustomTypography>*/}
            {/*            </Box>*/}
            {/*        </Box>*/}
            {/*    </Box>*/}
            {/*</Box>*/}

            {/*<Box ref={section2} component="section" className="section-white" bgcolor="white" width="90%" margin="auto"*/}
            {/*     maxWidth="var(--maxWidth)">*/}
            {/*    <Box display="flex" alignItems="center" justifyContent="space-between"*/}
            {/*         flexDirection={{xs: 'column', md: 'row'}}>*/}
            {/*        <Box flex="1 1 45%" display="flex" alignItems="stretch" justifyContent="center">*/}
            {/*            <Box id="imgApp2" component="img"*/}
            {/*                 sx={{*/}
            {/*                     flex: "1 1 auto", minWidth: "100%",*/}
            {/*                     transform: 'scale(1,1)'*/}
            {/*                 }}*/}
            {/*                 width="100%"*/}
            {/*                // height={{xs: "400px", md: "auto"}}*/}
            {/*                 alt="application"*/}
            {/*                 src={App1}*/}
            {/*            />*/}
            {/*        </Box>*/}
            {/*        <Box flex="1 1 45%" display="flex" flexDirection="column" justifyContent="start" alignItems="start">*/}
            {/*            <Box className="textopacityanimation2" sx={{opacity: '0'}}>*/}
            {/*                <Title*/}
            {/*                    text={*/}
            {/*                        "Echange avec les autres profils avant de séléctionner celui qui te <span class='gradientText'>correspond le plus</span> !"*/}
            {/*                    }*/}
            {/*                    color="secondary"*/}
            {/*                />*/}
            {/*            </Box>*/}

            {/*            <Box className="textslideanimation2" sx={{opacity: '0', transform: 'translate(0px, 50%)'}}>*/}
            {/*                <CustomTypography>Bliss te propose de découvrir ton futur crush et vois si le feeling passe*/}
            {/*                    à travers une multitude de jeu de question, spécialement crée pour savoir qui te*/}
            {/*                    correspond vraiment. Ne base plus t'es choix sur une simple photo de profils, que tu*/}
            {/*                    sois aventurier.es Acro au sport, mordu de série, passionées, trouve la relation idéal*/}
            {/*                    sur Bliss.</CustomTypography>*/}
            {/*            </Box>*/}
            {/*        </Box>*/}
            {/*    </Box>*/}
            {/*</Box>*/}

            {/*<Box ref={section3} component="section" className="section-white" bgcolor="white" width="90%" margin="auto"*/}
            {/*     maxWidth="var(--maxWidth)">*/}
            {/*    <Box display="flex" alignItems="center" justifyContent="space-between"*/}
            {/*         flexDirection={{xs: 'column', md: 'row'}}>*/}
            {/*        <Box flex="1 1 45%" display="flex" alignItems="stretch" justifyContent="center">*/}
            {/*            <Box id="imgApp3" component="img"*/}
            {/*                 sx={{*/}
            {/*                     flex: "1 1 auto", minWidth: "100%",*/}
            {/*                     transform: 'scale(1,1)'*/}
            {/*                 }}*/}
            {/*                 width="100%"*/}
            {/*                // height={{xs: "400px", md: "auto"}}*/}
            {/*                 alt="application"*/}
            {/*                 src={App1}*/}
            {/*            />*/}
            {/*        </Box>*/}
            {/*        <Box flex="1 1 45%" display="flex" flexDirection="column" justifyContent="start" alignItems="start">*/}
            {/*            <Box className="textopacityanimation3" sx={{opacity: '0'}}>*/}
            {/*                <Title*/}
            {/*                    text={*/}
            {/*                        "<span class='gradientText'>Un événement toutes</span> les semaines !"*/}
            {/*                    }*/}
            {/*                    color="secondary"*/}
            {/*                />*/}
            {/*            </Box>*/}

            {/*            <Box className="textslideanimation3" sx={{opacity: '0', transform: 'translate(0px, 50%)'}}>*/}
            {/*                <CustomTypography>T'en as marre des appli qui te rendent acro ? Nous aussi ! La séssion de*/}
            {/*                    match est ouverte 30 minute par semaine de 19h à 19h30. Comme ca t'auras le reste du*/}
            {/*                    temps de parler à ton futur crush ! Alors ne loupe pas la rencontre parfaite et*/}
            {/*                    télécharge l'app.</CustomTypography>*/}
            {/*            </Box>*/}
            {/*        </Box>*/}
            {/*    </Box>*/}
            {/*</Box>*/}
        </Box>
    )
}

export default HowItWorks;