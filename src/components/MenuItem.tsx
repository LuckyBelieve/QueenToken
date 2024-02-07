import React from "react";
import { Link } from "react-router-dom";

interface Props {
  menu: {
    title: string;
    link: string;
  };
  handleClose?: () => void;
}

function MenuItem({ menu, handleClose }: Props) {
  return (
    <li className="z-30 uppercase text-lg font-extrabold bg-gradient-to-b from-primary to-secondary text-transparent bg-clip-text">
      <Link onClick={handleClose} className="hover:text-primary" to={menu.link}>
        {menu.title}
      </Link>
    </li>
  );
}

export default MenuItem;
