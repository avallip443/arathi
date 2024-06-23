import { Box, IconButton, Link, Typography } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import VisibilityIcon from "@mui/icons-material/Visibility";
import StorageIcon from "@mui/icons-material/Storage";

const ProjectCard = ({ project }) => {
  return (
    <Box
      sx={{
        transition: "all 0.5s",
        "&:hover": { backgroundColor: "#353d60" },
        backgroundColor: "#1d243d",
        borderRadius: "16px",
        overflow: "hidden",
        color: "white",
      }}
    >
      <Box sx={{ py: 3, px: 2 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          <StorageIcon sx={{ color: "#ADB7BE" }} />
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Link href={project.githubURL} target="_blank">
              <IconButton sx={{ p: 0, mr: 2 }}>
                <CodeIcon
                  sx={{
                    color: "#ADB7BE",
                    "&:hover": { color: "white" },
                  }}
                />
              </IconButton>
            </Link>
            {project.previewURL !== "/" && (
              <Link href={project.previewURL} target="_blank">
                <IconButton sx={{ p: 0 }}>
                  <VisibilityIcon
                    sx={{
                      color: "#ADB7BE",
                      "&:hover": { color: "white" },
                    }}
                  />
                </IconButton>
              </Link>
            )}
          </Box>
        </Box>
        <Typography fontWeight="bold">{project.title}</Typography>
        <Typography>{project.tools}</Typography>
        <Typography color="#afafaf">{project.description}</Typography>
        <Typography color="#afafaf" fontStyle="italic">
          {project.skills}
        </Typography>
      </Box>
    </Box>
  );
};

export default ProjectCard;
