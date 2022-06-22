import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
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
          <li onClick={() => navgation("/")}>Home</li>
          <li onClick={() => navgation("/portfolio")}>Portfólio</li>
          <li onClick={() => navgation("/sobre-mim")}>Sobre mim</li>
          <li onClick={() => navgation("/contato")}>Contato</li>
        </ul>
      </MenuOpen>
    </>
  );
};

export default Nav;
