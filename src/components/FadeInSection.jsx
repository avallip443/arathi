import React from "react";
import { Box } from "@mui/material";
import { useInView } from "react-intersection-observer";

const FadeInSection = ({ children, id }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Box
      id={id}
      ref={ref}
      sx={{
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : "translateY(50px)",
        transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
        width: "100%",
      }}
    >
      {children}
    </Box>
  );
};

export default FadeInSection;
