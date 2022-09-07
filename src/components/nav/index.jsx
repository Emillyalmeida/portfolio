import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { FaHome, FaUser } from "react-icons/fa";
import { MdEmail, MdOutlineWork } from "react-icons/md";
import { useHistory } from "react-router-dom";
import { MenuClose, MenuOpen } from "./styles";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const history = useHistory();

  const navgation = (path) => {
    setOpen(false);
    history.push(path);
  };

  return (
    <>
      <MenuClose onClick={() => setOpen(true)}>
        <HiMenu />
      </MenuClose>

      <MenuOpen isOpen={open}>
        <IoMdClose onClick={() => setOpen(false)} />
        <ul>
          <li onClick={() => navgation("/")}>
            <FaHome /> Home
          </li>
          <li onClick={() => navgation("/portfolio")}>
            <MdOutlineWork /> Portfólio
          </li>
          <li onClick={() => navgation("/sobre-mim")}>
            <FaUser /> Sobre mim
          </li>
          <li onClick={() => navgation("/contato")}>
            <MdEmail /> Contato
          </li>
        </ul>
      </MenuOpen>
    </>
  );
};

export default Nav;
