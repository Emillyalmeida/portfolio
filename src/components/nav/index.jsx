import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { useHistory } from "react-router-dom";
import { MenuClose, MenuOpen } from "./styles";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const history = useHistory();

  return (
    <>
      <MenuClose onClick={() => setOpen(true)}>
        <HiMenu />
      </MenuClose>

      <MenuOpen isOpen={open}>
        <IoMdClose onClick={() => setOpen(false)} />
        <ul>
          <li onClick={() => history.push("/")}>Home</li>
          <li onClick={() => history.push("/portifolio")}>Portifolio</li>
          <li onClick={() => history.push("/sobre-mim")}>Sobre mim</li>
          <li onClick={() => history.push("/contato")}>Contato</li>
        </ul>
      </MenuOpen>
    </>
  );
};

export default Nav;
