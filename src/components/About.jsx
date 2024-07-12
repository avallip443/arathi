import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import { SocialsInfo } from "../utils/info";

const About = () => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#ffffff",
      }}
    >
      <Container
        maxWidth={"md"}
        sx={{ py: { xs: 7, md: 10 }, width: { xs: "90%", sm: "100%" } }}
      >
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            height: "100%",
          }}
        >
          <Grid
            item
            xs={12}
            sm={4}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              pr: { xs: 0, sm: 2, md: 5 },
              pb: { xs: 4, sm: 0 },
              borderRight: { xs: "none", sm: "5px #374375 solid" },
              borderBottom: { xs: "5px #374375 solid", sm: "none" },
            }}
          >
            <Box
              component="img"
              src="/images/profile-picture.png"
              alt="Description of image"
              sx={{
                width: { xs: "85%", md: "100%" },
                height: "auto",
                mx: "auto",
                borderRadius: 3,
                border: "4px #374375 solid",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={7.5} mt={{ xs: 4, sm: 0 }}>
            <Stack spacing={{ xs: 1.5, sm: 2 }}>
              <Typography variant="h5" fontWeight={600} color={"#374375"}>
                About Me
              </Typography>
              <Typography>
                👋 Hey! I'm Arathi Vallipuranathan, a third-year Computer
                Science Co-Op student at Toronto Metropolitan University. I'm
                seeking internship opportunities for Winter 2024 and Summer
                2025. <br />
              </Typography>
              <Typography>
                I have a passion for front-end development, but I'm also
                actively expanding my skills and finding new challenges through
                my professional experiences and personal projects. <br />
              </Typography>
              <Typography>
                When I'm not coding, you'll probably find me reading, binge
                watching, or spending time with friends and family. <br />
              </Typography>
              <Box
                sx={{
                  display: { xs: "flex", sm: "block" },
                  justifyContent: "center",
                }}
              >
                <Button
                  variant="outlined"
                  href={
                    SocialsInfo.find((social) => social.title === "Email").url
                  }
                  sx={{
                    borderRadius: 10,
                    border: "#374375 2px solid",
                    width: "110px",
                    px: 2,
                    py: 1,
                    color: "#374375",
                    fontWeight: 600,
                    "&:hover": {
                      backgroundColor: "#dfaea1",
                      border: "#374375 2px solid",
                      color: "white",
                    },
                  }}
                >
                  Say Hi!
                </Button>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
