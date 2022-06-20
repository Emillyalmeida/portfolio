import AdopetImg from "../../assets/Adopet-cinza.png";
import DoItImg from "../../assets/DoIt.png";
import KenzieHubImg from "../../assets/kenzieHub.png";
import MarvelHouseImg from "../../assets/marvelHouse.png";

import { createContext, useState } from "react";

export const ListProjectsContext = createContext([]);

export const ListProjectsProvider = ({ children }) => {
  const [listProjects] = useState([
    {
      id: 1,
      name: "Adopet",
      decription:
        "A AdoPet foi desenvolvida com o intuito de conectar as pessoas que desejam adotar um pet com aqueles que necessitam encontrar um novo lar para os bichinhos.",
      img: `${AdopetImg}`,
      techs: [
        "ReactJS",
        "Styled Components",
        "Chakra UI",
        "Axios",
        "React Hook Form",
        "React Router Dom",
      ],
      link: "https://adopet-m3.vercel.app/",
      github: "https://github.com/werikscs/capstone-m3",
    },
    {
      id: 2,
      name: "Marvel's House",
      decription:
        "Consiste de uma tela de lista de quadrinhos, consumindo a Api da Marvel. Tem um sistema de paginação onde pode navegar para ver mais quadrinhos ou voltar para as paginas anteriores. Além disso, 10% dos quadinho são marcados com o selo de raro aleatoriamente.",
      img: `${MarvelHouseImg}`,
      techs: [
        "ReactJS",
        "Styled Components",
        "Chakra UI",
        "Axios",
        "React Hook Form",
        "React Router Dom",
      ],
      link: "https://marvels-house.vercel.app/",
      github:
        "https://github.com/Emillyalmeida/challenge-developer-frontend-contabilizei",
    },
    {
      id: 3,
      name: "DO-it",
      decription:
        "A AdoPet foi desenvolvida com o intuito de conectar as pessoas que desejam adotar um pet com aqueles que necessitam encontrar um novo lar para os bichinhos.",
      img: `${DoItImg}`,
      techs: [
        "React",
        "TypeScript",
        "Chakra UI",
        "Axios",
        "React Hook Form",
        "React Router Dom",
      ],
      link: "https://do-it-dusky-theta.vercel.app/",
      github: "https://github.com/Emillyalmeida/do-it",
    },
    {
      id: 4,
      name: "KenzieHub ",
      decription:
        "É uma plataforma que tem o objetivo de organizar as suas tecnologias estudadas e ver o seu avanço de nível nelas.",
      img: `${KenzieHubImg}`,
      techs: [
        "ReactJS",
        "Styled Components",
        "Chakra UI",
        "Axios",
        "React Hook Form",
        "React Router Dom",
      ],
      link: "https://kenziehub-redux.vercel.app/",
      github: "https://github.com/Emillyalmeida/kenziehub-redux",
    },
  ]);

  return (
    <ListProjectsContext.Provider value={{ listProjects }}>
      {children}
    </ListProjectsContext.Provider>
  );
};
