import { Container, Stack, Typography } from '@mui/material'

const Contact = () => {
  return (
    <Container sx={{ mt: 3 }}>
        <Typography variant="h5" color={"#34a181"}>Let's get in touch</Typography>
        <Stack spacing={3}>
            <Typography>Email</Typography>
            <Typography>LinkdIn</Typography>
            <Typography>GitHub</Typography>
        </Stack>
    </Container>
  )
}

export default Contact