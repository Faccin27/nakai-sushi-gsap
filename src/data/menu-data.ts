
export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: 'sushi' | 'sashimi' | 'rolls' | 'hot' | 'dessert';
  featured?: boolean;
}

export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: 'Roll Especial Nakai',
    description: 'Combinação exclusiva de atum bluefin, salmão premium e abacate envolvidos em lâminas de pepino com molho especial da casa e ovas de tobiko vermelho',
    price: '75',
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=2970&auto=format',
    category: 'rolls',
    featured: true
  },
  {
    id: 2,
    name: 'Sashimi Omakase',
    description: 'Seleção sazonal dos melhores cortes de peixes importados do Japão, fatiados ao estilo tradicional Tokyo e apresentados em gelo esculpido à mão',
    price: '120',
    image: 'https://images.unsplash.com/photo-1534256958597-7fe685cbd745?q=80&w=2831&auto=format',
    category: 'sashimi',
    featured: true
  },
  {
    id: 3,
    name: 'Nigiris Especiais',
    description: 'Conjunto de nigiris artesanais com peixe premium sobre arroz temperado no ponto ideal com vinagre de arroz caseiro, wasabi fresco e molho ponzu, 8 peças',
    price: '98',
    image: 'https://images.unsplash.com/photo-1617196034183-421b4917c92d?q=80&w=2970&auto=format',
    category: 'sushi',
    featured: true
  },
  {
    id: 4,
    name: 'Black Cod Missô',
    description: 'Bacalhau negro marinado por 72 horas em missô envelhecido, caramelizado na perfeição e servido com purê de batata japonesa roxa e legumes da estação',
    price: '110',
    image: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?q=80&w=2832&auto=format',
    category: 'hot',
    featured: true
  },
  {
    id: 5,
    name: 'Dragon Roll Flamejado',
    description: 'Enguia grelhada e pepino envoltos em fatias finas de abacate fresco e finalizados com maçarico, tobiko e molho unagi caramelizado',
    price: '85',
    image: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?q=80&w=2832&auto=format',
    category: 'rolls'
  },
  {
    id: 6,
    name: 'Cheesecake de Matchá',
    description: 'Cremoso cheesecake japonês com matcha de primeira colheita, servido com geleia artesanal de frutas vermelhas e folha de ouro comestível',
    price: '45',
    image: 'https://images.unsplash.com/photo-1622973536968-3ead9e780960?q=80&w=2970&auto=format',
    category: 'dessert',
    featured: true
  },
  {
    id: 7,
    name: 'Temaki Spicy Tuna',
    description: 'Cone de alga nori crocante recheado com arroz, atum picado temperado com molho picante especial da casa, cebolinha e pepino',
    price: '38',
    image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?q=80&w=2069&auto=format',
    category: 'rolls'
  },
  {
    id: 8,
    name: 'Wagyu Teppanyaki',
    description: 'Cubos de wagyu A5 grelhados na chapa de ferro com manteiga de missô, alho negro e cogumelos shiitake selvagens',
    price: '185',
    image: 'https://images.unsplash.com/photo-1534256958597-7fe685cbd745?q=80&w=2831&auto=format',
    category: 'hot'
  }
];

export const featuredItems = menuItems.filter(item => item.featured);
