import AdopetImg from "../../assets/Adopet-cinza.png";
import DoItImg from "../../assets/DoIt.png";
import KenzieHubImg from "../../assets/kenzieHub.png";
import MarvelHouseImg from "../../assets/marvelHouse.png";
import Nukenzie from "../../assets/Nukenzie.png";
import Jokempo from "../../assets/jokenpô.png";
import ReaderStore from "../../assets/readerStore.png";
import TorreHaroi from "../../assets/torre-de-hanoi.png";

import { createContext, useState } from "react";

export const ListProjectsContext = createContext([]);

export const ListProjectsProvider = ({ children }) => {
  const [listProjects] = useState([
    {
      id: 1,
      name: "Adopet",
      description:
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
      description:
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
      description:
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
      description:
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
    {
      id: 5,
      name: "NuKenzie",
      description:
        "Uma maneira facil e rápida para organizar suas finanças do mês",
      img: `${Nukenzie}`,
      techs: ["ReactJS", "Css", "React Router Dom"],
      link: "https://react-entrega-s1-nu-kenzie-emillyalmeida.vercel.app/",
      github:
        "https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s1-nu-kenzie-emillyalmeida",
    },
    {
      id: 6,
      name: "ReaderStore",
      description:
        "Um E-commerce simples de Livros, com darkMode, que teve objetivo de aplicar os conhecimentos de gerenciamneto de estado no React",
      img: `${ReaderStore}`,
      techs: ["ReactJS", "Styled Components", "ContextApi", "React Router Dom"],
      link: "https://react-entrega-s3-kenzishop-com-context-api-emillyalmeida.vercel.app/",
      github:
        "https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s3-kenzishop-com-context-api-emillyalmeida",
    },
    {
      id: 7,
      name: "Torre de Hanoi",
      description:
        "A Torre de Hanoi é um quebra-cabeças que consiste de três varetas e um número de discos de diferentes tamanhos que podem ser encaixados em qualquer vareta. O jogo começa com todos os discos empilhados em uma vareta, do maior (embaixo) para o menor (no topo).",
      img: `${TorreHaroi}`,
      techs: ["JavaScript", "Css", "Html"],
      link: "https://kenzie-academy-brasil-developers.github.io/m2-entrega-torre-de-hanoi-sprint-1a-Emillyalmeida/",
      github:
        "https://github.com/Kenzie-Academy-Brasil-Developers/m2-entrega-torre-de-hanoi-sprint-1a-Emillyalmeida",
    },
    {
      id: 8,
      name: "Jokenpô",
      description:
        "Criação de um jogo classico usando os conceitos de POO aprendidos, consiste em que duas pessoas escolhem entre pedra, papel ou tesoura, e mostram suas escolhas com as mãos",
      img: `${Jokempo}`,
      techs: ["JavaScript", "Css", "Html", "POO"],
      link: "https://kenzie-academy-brasil-developers.github.io/m2-entrega-jogo-de-azar-poo-sprint2b-Emillyalmeida/",
      github:
        "https://github.com/Kenzie-Academy-Brasil-Developers/m2-entrega-jogo-de-azar-poo-sprint2b-Emillyalmeida/",
    },
  ]);

  return (
    <ListProjectsContext.Provider value={{ listProjects }}>
      {children}
    </ListProjectsContext.Provider>
  );
};
