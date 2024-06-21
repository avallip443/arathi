import { Box, Container, Grid, Stack, Typography } from "@mui/material";

const About = () => {
  return (
    <Container sx={{ mt: 6 }}>
      <Grid container display={'flex'} justifyContent={'space-between'}>
        <Grid item xs={12} sm={4} md={3.3} display={'flex'} alignItems={'center'}>
          <Box
            component="img"
            src="/profile-picture.png"
            alt="Description of image"
            sx={{
              width: "100%",
              height: "auto",
              mx: "auto",
            }}
          />
        </Grid>
        <Grid item xs={12} sm={7.5} md={8} mt={{xs: 2, sm: 0}}>
          <Stack>
            <Typography variant="h5" color={"#34a181"}>
              About Me
            </Typography>
            <Typography>
              👋 Hey! I'm Arathi, a third-year Computer Science Co-Op student at
              Toronto Metropolitan University. I'm seeking internship
              opportunities for 2024 and 2025. <br/><br/>
            </Typography>
            <Typography>
              I have a passion for front-end development, but I'm also actively
              expanding my skills and finding new challenges through my
              professional experiences and personal projects. <br/><br/>
            </Typography>
            <Typography>
              Outside of coding, you'll probably find me reading, binge
              watching, or spending time with friends and family.
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
