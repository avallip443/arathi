import { Link } from "@mui/material";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      sx={{
        display: "block",
        mx: 1,
        color: "white",
        fontSize: { xs: "1rem", md: "1.1rem" },
        textDecoration: "none",
        "&:hover": {
          color: "#C5B6F1",
        },
        "&:focus": {
          color: "#C5B6F1",
        },
      }}
    >
      {title}
    </Link>
  );
};

export default NavLink;
