import { Container, Stack, Typography } from '@mui/material'
import React from 'react'

const Contact = () => {
  return (
    <Container>
        <Typography variant="h5">Let's get in touch</Typography>
        <Stack>
            <Typography>Email</Typography>
            <Typography>LinkdIn</Typography>
            <Typography>GitHub</Typography>
        </Stack>
    </Container>
  )
}

export default Contact