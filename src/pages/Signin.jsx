import React, { useEffect } from 'react';
import Page, { PageSection } from '@components/Page'
import { Container, Box } from '@mui/material'
import Logo from '@assets/images/FinLearn_Logo_Transparent.png'
import { SigninButton } from '@components/Auth'
import { useAppContext } from '@src/Context'

function Signin() {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center'
  }
  const {user, authLoading } = useAppContext()
  useEffect(() => {
    if (!authLoading && user) {
      window.location.href="/explore"
    }
  }, [ user ])

  return (
    <Page >
      <PageSection>
      <Container sx={containerStyle}>
        <Box
          sx={{
            maxWidth: '80%'
          }}
        >
          <img src={Logo} alt="FinLearn logo" width="100%"/>
        </Box>
      </Container>
      <Container sx={containerStyle}>
        <SigninButton />
      </Container>
    </PageSection>
    </Page>
  )
}

export default Signin