import AdopetImg from "../../assets/Adopet-cinza.png";
import DoItImg from "../../assets/DoIt.png";
import KenzieHubImg from "../../assets/kenzieHub.png";
import MarvelHouseImg from "../../assets/marvelHouse.png";
import Nukenzie from "../../assets/Nukenzie.png";
import Jokempo from "../../assets/jokenpô.png";
import ReaderStore from "../../assets/readerStore.png";
import TorreHaroi from "../../assets/torre-de-hanoi.png";
import TmdbMovies from "../../assets/tmdb-movies.png";
import ShopMovies from "../../assets/shop-movie.png";

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
      name: "TMDB - Movies",
      description:
        "Na tela inicial mostrar as têndencias do dia, e os filmes mais populares e mais votados no momento.Contém uma feature de pesquisa que mostra os filmes relacionados. Além disso, é possível também criar listas e adicionar filmes as listas, visualizar os items presentes e remove -los. Contém também uma pagina de favoritos onde pode se ver os item favoritos. Além dark theme onde é possível alternar do claro para o escuro. ",
      img: `${TmdbMovies}`,
      techs: [
        "ReactJS",
        "TypeScript",
        "Chakra UI",
        "Axios",
        "React-Icons",
        "React Hook Form",
        "React Router Dom",
      ],
      link: "https://movies-tmdb-inky.vercel.app/",
      github: "https://github.com/Emillyalmeida/movies-tmdb",
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
      name: "Movie Shop",
      description:
        "Consiste de uma tela inical com uma lista de filmes, consumindo a Api da TMDB, onde pode-se navegar pelas as páginas e ver mais filmes.Nessa aplicação é possível ver os quadinhos disponíveis e adciona-los ao carrinho, além de uma lista de favoritos onde pode-se adcionar e remover os seus filmes preferidos.",
      img: `${ShopMovies}`,
      techs: ["Nuxt", "VueJs", "Chakra UI", "Vuex", "Vue Router", "Axios"],
      link: "https://shop-movies-emilly-almeida.vercel.app/",
      github: "https://github.com/Emillyalmeida/shop-movies-vue",
    },
    {
      id: 5,
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
      id: 6,
      name: "Marvel's House",
      description:
        "Consiste de uma tela de lista de quadrinhos, consumindo a Api da Marvel. Tem um sistema de paginação onde pode navegar para ver mais quadrinhos ou voltar para as paginas anteriores. ",
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
      id: 7,
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
      id: 8,
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
      id: 9,
      name: "Torre de Hanoi",
      description:
        "A Torre de Hanoi é um quebra-cabeças que consiste de três varetas e um número de discos de diferentes tamanhos que podem ser encaixados em qualquer vareta. O jogo começa com todos os discos empilhados em uma vareta.",
      img: `${TorreHaroi}`,
      techs: ["JavaScript", "Css", "Html"],
      link: "https://kenzie-academy-brasil-developers.github.io/m2-entrega-torre-de-hanoi-sprint-1a-Emillyalmeida/",
      github:
        "https://github.com/Kenzie-Academy-Brasil-Developers/m2-entrega-torre-de-hanoi-sprint-1a-Emillyalmeida",
    },
    {
      id: 10,
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

  const getProjectByID = (id) => {
    const find = listProjects.find((project) => project.id === Number(id));
    return find;
  };

  return (
    <ListProjectsContext.Provider value={{ listProjects, getProjectByID }}>
      {children}
    </ListProjectsContext.Provider>
  );
};
