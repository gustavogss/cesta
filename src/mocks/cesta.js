import logo from "../../assets/logo.png";

import tomate from '../../assets/frutas/tomate.png';
import brocolis from '../../assets/frutas/brocolis.png';
import batata from '../../assets/frutas/batata.png';
import pepino from '../../assets/frutas/pepino.png';
import abobora from '../../assets/frutas/abobora.png';

const cesta = {
    header: {
        titulo: "Detalhes da Cesta",
    },
    details:{
        name: "Cesta de Verduras",
        logoFarm: logo,
        nameFarm: "Hort Fruit Farm",
        description: "Uma cesta de produtos orgânicos selecionados diretamente da fazenda para sua cozinha",
        price: "R$ 40,00",        
    },
    itens: {
        titulo: "Itens da Cesta",
        lista: [
          {
            nome: "Tomate",
            imagem: tomate,
          },
          {
            nome: "Brócolis",
            imagem: brocolis,
          },
          {
            nome: "Batata",
            imagem: batata,
          },
          {
            nome: "Pepino",
            imagem: pepino,
          },
          {
            nome: "Abóbora",
            imagem: abobora,
          }
        ]
      }
}

export default cesta;