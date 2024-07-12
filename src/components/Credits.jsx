import { Box, Typography } from "@mui/material";

const Credits = () => {
  return (
    <Box
      sx={{
        py: 2,
        width: "100%",
        backgroundColor: "#babde2",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          color: "white",
          fontWeight: 600,
        }}
      >
        <Typography variant="body">Built by Arathi Vallipuranathan</Typography>
      </Box>
    </Box>
  );
};

export default Credits;
