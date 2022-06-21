import { Ancor } from "./style";

const LinkSites = ({ children, link, isRow = false }) => {
  return (
    <Ancor isRow={isRow} href={link} target={"_blank"} rel="noreferrer">
      {children}
    </Ancor>
  );
};

export default LinkSites;
