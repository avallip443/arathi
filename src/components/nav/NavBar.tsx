import React from "react";

const NavBar: React.FC = () => {
  const navlinks = ["home", "projects", "blog", "contact"];

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  //     <header className="sticky top-0 z-50 bg-background/75 py-6 backdrop-blur-sm">

  return (
    <nav className="flex items-center py-7 text-gray-300">
      <ul className="flex gap-4 sm:gap-8">
        {navlinks.map((nav, id) => (
          <li key={id} className="hover:text-[#d2b7e5] cursor-pointer">
            <a
              href={nav}
              onClick={() => handleScroll(nav)}
            >
              {nav}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
