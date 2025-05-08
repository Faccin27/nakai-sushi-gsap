
export interface Review {
  id: number;
  author: string;
  date: string;
  rating: number;
  text: string;
  profileImage?: string;
}

export const reviews: Review[] = [
  {
    id: 1,
    author: 'Sofia Carvalho',
    date: '2 meses atrás',
    rating: 5,
    text: 'Experiência absolutamente incrível no Nakai. O omakase foi uma jornada por sabores que eu nem sabia que existiam. Chef Tanaka é um verdadeiro artista.',
    profileImage: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
  {
    id: 2,
    author: 'João Oliveira',
    date: '1 mês atrás',
    rating: 5,
    text: 'Melhor sushi que já comi fora do Japão. O Roll Especial Nakai vale cada centavo. O ambiente é perfeito para uma noite especial.',
    profileImage: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  {
    id: 3,
    author: 'Gabriela Rodriguez',
    date: '3 semanas atrás',
    rating: 4,
    text: 'Restaurante lindo com atendimento atencioso. O sashimi estava fresco e derretia na boca. Certamente voltarei em breve!',
    profileImage: 'https://randomuser.me/api/portraits/women/63.jpg'
  },
  {
    id: 4,
    author: 'Diego Kimura',
    date: '1 semana atrás',
    rating: 5,
    text: 'A atenção aos detalhes é impressionante. Desde o momento em que você entra, se sente transportado para o Japão. O bacalhau negro com missô é transformador.',
    profileImage: 'https://randomuser.me/api/portraits/men/4.jpg'
  }
];
