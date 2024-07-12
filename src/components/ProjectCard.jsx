import { Box, IconButton, Link, Typography } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import VisibilityIcon from "@mui/icons-material/Visibility";
import StorageIcon from "@mui/icons-material/Storage";

const ProjectCard = ({ project }) => {
  return (
    <Box
      sx={{
        transition: "all 0.5s",
        backgroundColor: "#dfaea1",
        boxShadow: "#374375 4px 4px",
        border: "#374375 3px solid",
        borderRadius: "16px",
        overflow: "hidden",
        color: "black",
        height: { xs: 320, sm: 300, md: 260 },
        "&:hover": {
          backgroundColor: "#374375",
          color: "white",
          border: "#babde2 3px solid",
          boxShadow: "#babde2 4px 4px",
          "& .MuiSvgIcon-root": {
            color: "white",
          },
          "& .tool-typography": {
            borderColor: "#babde2",
          },
        },
      }}
    >
      <Box sx={{ p: { xs: 3, md: 4 } }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
            color: "inherit",
          }}
        >
          <StorageIcon />
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Link href={project.githubURL} target="_blank">
              <IconButton sx={{ p: 0, color: "black" }}>
                <CodeIcon />
              </IconButton>
            </Link>
            {project.previewURL !== "" && (
              <Link href={project.previewURL} target="_blank">
                <IconButton sx={{ p: 0, ml: 2, color: "black" }}>
                  <VisibilityIcon />
                </IconButton>
              </Link>
            )}
          </Box>
        </Box>
        <Typography fontWeight={600}>{project.title}</Typography>
        <Box display="flex" flexWrap="wrap" gap={0.8} mt={1.5}>
          {project.tools.split(",").map((tool, index) => (
            <Typography
              key={index}
              variant="body2"
              className="tool-typography"
              sx={{
                border: "#374375 1.5px solid",
                borderRadius: 1,
                py: 0.3,
                px: 1,
              }}
            >
              {tool.trim()}
            </Typography>
          ))}
        </Box>
        <Typography mt={2}>
          {project.description}
        </Typography>
      </Box>
    </Box>
  );
};

export default ProjectCard;
