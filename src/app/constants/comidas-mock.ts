import { IComida } from '../models/comida.model';

export const LISTA_COMIDAS_MOCK: IComida[] = [
  {
    id: 1,
    titulo: 'X-Salada',
    enderecoImagem:
    'assets/xsalada.jpg',
    descricao:
    "Molho especial, o melhor hamburguer de carne feito na casa todos os dias, queijo, alface, rucula, tomate, cebola e pepino em conserva.",
    valor: 15.0,
  },
  {
    id: 2,
    titulo: 'X-Bacon',
    enderecoImagem:
    'assets/xbacon.jpg',
    descricao:
    "Molho especial, bacon especial com o melhor hamburguer de carne feito na casa todos os dias, ovo, queijo, alface, rúcula, tomate, cebola e pepino em conserva.",
    valor: 20.0,
  },
  {
    id: 3,
    titulo: 'X-Frango',
    enderecoImagem:
    'assets/xfrango.PNG',
    descricao:
    "Molho especial, frango marinado, queijo, alface, tomate, rúcula, cebola roxa grelhada e pepino em conserva.",
     valor: 15.0
  },
  {
    id: 4,
    titulo: 'Vegetariano',
    enderecoImagem:
    'assets/vegano.PNG',
    descricao:
    "Molho especial à base de queijo cheddar, queijo prato, hambúrguer: escolha entre grão de bico (tempero suave) ou de feijão fradinho (tempero mais picante). E ainda: alface, rúcula, tomate, cebola roxa grelhada e pepino em conserva.",
    valor: 20.0
  
  },
]


