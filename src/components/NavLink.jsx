import { Link } from "@mui/material";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      /*className="block py-2 mx-2 text-white text-lg font-bold rounded md:p-0 hover:text-[#C5B6F1]"*/
    >
      {title}
    </Link>
  );
};

export default NavLink;
