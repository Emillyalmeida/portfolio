import { Ancor } from "./style";

const LinkSites = ({ children, link, isRow = false, ...rest }) => {
  return (
    <Ancor
      isRow={isRow}
      href={link}
      target={"_blank"}
      rel="noreferrer"
      {...rest}
    >
      {children}
    </Ancor>
  );
};

export default LinkSites;
