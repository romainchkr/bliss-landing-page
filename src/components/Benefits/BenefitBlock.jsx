import React from 'react'
import {
    Box, styled,
    Typography,
} from '@mui/material'

const BenefitBlock = ({img, title, content}) => {
    const CustomTypographyTitle = styled(Typography) ({
        fontSize: '30px',
        lineHeight: '1.5',
        color: 'black',
        fontWeight: '700',
        fontFamily: 'Montserrat'
    })

    const CustomTypography = styled(Typography) ({
        fontSize: '1em',
        lineHeight: '1.5',
        color: '#6b6b6b',
    })

    return (
        <Box display="flex" m="10" maxWidth="500px" flexDirection="column" gap="20px" alignItems={{xs: 'center', md: 'start'}} textAlign={{xs: 'center', md: 'left'}}>
            <img src={img} alt="icon" width="100px"/>
            <Box display="flex" flexDirection="column" maxWidth="400px">
                <CustomTypographyTitle variant="h2">{title}</CustomTypographyTitle>
                <CustomTypography variant="body1">{content}</CustomTypography>
            </Box>
        </Box>
    );
}

export default BenefitBlock;