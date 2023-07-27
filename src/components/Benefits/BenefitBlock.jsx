import React from 'react'
import {
    Box, styled,
    Typography,
} from '@mui/material'

const BenefitBlock = ({img, title, content}) => {
    const CustomTypographyTitle = styled(Typography)({
        fontSize: '1.8em',
        lineHeight: '1.5',
        color: 'var(--primary)',
        fontWeight: '700',
        textAlign: 'left'
    })

    const CustomTypography = styled(Typography)({
        fontSize: '1em',
        lineHeight: '1.5',
        color: 'var(--primary)',
        textAlign: 'left'
    })

    return (
        <Box display="flex" m="10" maxWidth="500px" flexDirection="row" gap="20px" padding="40px"
              alignItems="start" textAlign={{xs: 'center', md: 'left'}} justifyContent="start"
              border='solid 1px var(--primary)' borderRadius="12px" alignSelf={{xs: 'center', md: 'stretch'}}>
            <Box display="flex" alignItems="end" justifyContent="start" flex="1 1 60%" minWidth="20%">
                <img src={img} alt="icon" width="100%" height="auto"/>
            </Box>
            <Box flex="1 1 auto" display="flex" flexDirection="column" maxWidth="400px" alignItems="stretch" justifyContent="space-between" mb="2">
                <CustomTypographyTitle variant="h2">{title}</CustomTypographyTitle>
                <CustomTypography variant="body1">{content}</CustomTypography>
            </Box>
        </Box>
    );
}

export default BenefitBlock;