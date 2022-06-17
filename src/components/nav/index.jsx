import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { MenuClose, MenuOpen } from "./styles";

const Nav = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <MenuClose onClick={() => setOpen(true)}>
        <HiMenu />
      </MenuClose>

      <MenuOpen isOpen={open}>
        <IoMdClose onClick={() => setOpen(false)} />
        <ul>
          <li>Home</li>
          <li>Portifolio</li>
          <li>sobre mim</li>
          <li>Contato</li>
        </ul>
      </MenuOpen>
    </>
  );
};

export default Nav;
