import { IBebida } from '../models/bebida.model';

export const LISTA_BEBIDAS_MOCK: IBebida[] = [
  {
    id: 1,
    titulo: 'Coca Cola',
    enderecoImagem:
    'assets/coca-lata.jpg',
    descricao: 'Lata',
    valor: 3.00
  },
  {
    id: 2,
    titulo: 'Pepsi',
    enderecoImagem:
    'assets/pepsi.jpg',
    descricao: 'Lata.',
    valor: 3.00
  },
  {
    id: 3,
    titulo: 'Pureza',
    enderecoImagem:
    'assets/pureza-lata.PNG',
    descricao: 'Lata',
    valor: 4.00
  },
  {
    id: 4,
    titulo: 'Suco de limão',
    enderecoImagem:
    'assets/suco-limao.jpg',
    descricao: 'Natural, 500ml',
    valor: 7.00
  },
  {
    id: 5,
    titulo: 'Suco de laranja',
    enderecoImagem:
    'assets/bebida.jpg',
    descricao: 'Natural, 500ml',
    valor: 7.00
  },
];
