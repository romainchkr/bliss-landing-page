import React from 'react'
import {
  Box, Divider,
  Stack,
  styled,
  Typography,
} from '@mui/material'
import Link from '@mui/material/Link';
import FooterTitle from './FooterTitle'
import FooterLink from './FooterLink'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {

  const StackColumn = styled(Stack) (() => ({
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
    gap: 8,
    textAlign: 'center',
  }));

  const BoxRow = styled(Box) (({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'white',
    flex: 1,
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      gap: 30,
    }
  }));

  return (
    <Box component='footer' sx={{ py: 4, px: 2 }}>
      <BoxRow>
        <StackColumn>
          <FooterTitle text={'bliss'} />
          <Stack
              direction='row'
              width= '70px'
              maxWidth='100%'
              justifyContent='space-between'
              alignItems="center"
          >
            <FooterLink href="https://www.instagram.com/blissdatinggame/" target="true" text={'Contact'} />
            <Link href="https://www.instagram.com/blissdatinggame/" target="_blank" variant="body2"
                  sx={{
                    ml: 1,
                    color: '#414141',
                    "&:hover": {
                      color: '#1c2859',
                    }
                  }}
            >
              <InstagramIcon />
            </Link>
          </Stack>

        </StackColumn>

        {/*<StackColumn>*/}
        {/*  <FooterTitle text={'ENTREPRISE'} />*/}
        {/*  <FooterLink text={'A propos'} />*/}
        {/*  <FooterLink text={'Presse'} />*/}
        {/*  <FooterLink text={'Contact'} />*/}
        {/*</StackColumn>*/}
        <StackColumn>
          <FooterTitle text={'Legal'} />
          <FooterLink href="https://magnetic-queen-4a8.notion.site/Politique-de-confidentialit-5ee5b9e2c8254ddc9609243e3a225655?pvs=4" target={true} text={'Confidentialité'} />
          <FooterLink href="https://magnetic-queen-4a8.notion.site/Conditions-g-n-rales-d-utilisation-90ff1e5e82e34766a928ee434737b8a5?pvs=4" target={true} text={"Condition d'utilisation"} />
          {/*<FooterLink text={'Cookies'} />*/}
        </StackColumn>
      </BoxRow>
      <Box>
        <Divider sx={{m: 2}}/>
        <Typography variant='caption' component='p' textAlign="center">
          &copy; 2023 Bliss Dating Game Inc.
        </Typography>
      </Box>
    </Box>
  )
}

export default Footer