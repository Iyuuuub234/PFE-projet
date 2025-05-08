export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  venue: string;
  category: string;
  image: string;
  price: number;
  description: string;
  featured: boolean;
}

export const categories = [
  "Concerts",
  "Festivals",
  "Sports",
  "Théâtre",
  "Expositions",
  "Conférences"
];

export const events: Event[] = [
  {
    id: "1",
    title: "Festival Électro Summer",
    date: "2025-07-15",
    time: "18:00",
    location: "Casablanca",
    venue: "Le Jazzablanca",
    category: "Festivals",
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    price: 110.50,
    description: "Le plus grand festival électro de l'été avec des artistes internationaux de renom. Profitez d'une soirée inoubliable sous les étoiles avec des jeux de lumières spectaculaires et une ambiance électrisante.",
    featured: true
  },
  {
    id: "2",
    title: "Concert Rock Legends",
    date: "2025-08-05",
    time: "20:30",
    location: "Marrakech",
    venue: "Meydene Marrakech",
    category: "Concerts",
    image: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    price: 150.00,
    description: "Les plus grandes légendes du rock réunies sur scène pour un concert exceptionnel. Revivez les plus grands tubes qui ont marqué l'histoire de la musique rock.",
    featured: true
  },
  {
    id: "3",
    title: "Match de Football - Finale",
    date: "2025-06-28",
    time: "21:00",
    location: "Rabat",
    venue: "prince Moulay Abdellah",
    category: "Sports",
    image: "https://images.unsplash.com/photo-1570498839593-e565b39455fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    price: 220.00,
    description: "La grande finale de la coupe nationale, un match décisif entre les deux meilleures équipes du championnat. Une ambiance de folie garantie dans un stade mythique.",
    featured: true
  },
  {
    id: "4",
    title: "Salon d'Art Contemporain",
    date: "2025-09-10",
    time: "10:00",
    location: "Agadir",
    venue: "Hangar 14",
    category: "Expositions",
    image: "https://images.unsplash.com/photo-1531058020387-3be344556be6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    price: 300.00,
    description: "Découvrez les œuvres des artistes contemporains les plus prometteurs. Une exposition qui bouscule les codes et vous invite à repenser l'art moderne.",
    featured: false
  },
  {
    id: "5",
    title: "Pièce de Théâtre 'Rêves'",
    date: "2025-07-21",
    time: "19:30",
    location: "",
    venue: "Théâtre du Capitole",
    category: "Théâtre",
    image: "https://images.unsplash.com/photo-1503095396549-807759245b35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80",
    price: 180.00,
    description: "Une pièce captivante qui explore les frontières entre réalité et imagination. Mise en scène innovante et performances d'acteurs remarquables.",
    featured: false
  },
  {
    id: "6",
    title: "Conférence Tech Future",
    date: "2025-10-05",
    time: "09:00",
    location: "Casablanca",
    venue: "Institut français",
    category: "Conférences",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    price: 160.00,
    description: "Les dernières innovations technologiques présentées par des experts internationaux. Ateliers, tables rondes et demonstrations des technologies de demain.",
    featured: true
  },
  {
    id: "7",
    title: "Festival de Jazz",
    date: "2025-08-15",
    time: "17:00",
    location: "laayoune",
    venue: "Place Masséna",
    category: "Festivals",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    price: 120.00,
    description: "Un festival qui célèbre le jazz sous toutes ses formes avec des artistes de renommée mondiale et des talents émergents. Ambiance décontractée et conviviale au cœur de la ville.",
    featured: true
  },
  {
    id: "8",
    title: "Exposition Photo Nature",
    date: "2025-11-01",
    time: "10:00",
    location: "Tanger",
    venue: "Studio des Arts vivants",
    category: "Expositions",
    image: "https://images.unsplash.com/photo-1500051638674-ff996a0ec29e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=918&q=80",
    price: 89.99,
    description: "Les plus beaux clichés de nature sauvage réunis dans une exposition époustouflante. Découvrez la beauté de notre planète à travers l'objectif des plus grands photographes.",
    featured: true
  },
  {
    id: "9",//1
    title: "Le Fameux Duo SAID & WADIE à Casablanca",
    date: "2025-11-01",
    time: "10:00",
    location: "Casablanca",
    venue: "Megarama",
    category: "Théâtre",
    image: "https://i.pinimg.com/736x/4a/f2/c8/4af2c8fa8d0ae9596e300023dafbb85b.jpg",
    price: 89.99,
    description: "Armés d’un style qu’on ne peut comparer, le fameux duo Said & Wadii embarquent le public dans un spectacle enrichi de situations absurdes et de personnages inattendus.",
    featured: true
  },
  {
    id: "10",//2
    title: "Soirée Eliades Ochoas, star of Buena Vista Social Club",
    date: "2025-10-02",
    time: "10:00",
    location: "Fès",
    venue: "Delafosse",
    category: "Festivals",
    image: "https://i.pinimg.com/736x/1e/0c/a2/1e0ca2385c21009ec5f9b5c4ebb71713.jpg",
    price: 89.99,
    description: "Rendez-vous au Club Wifaq à Rabat du 29 au 31 mai 2025 pour trois jours de musique, de fête et de découvertes dans une ambiance estivale unique.",
    featured: true
  },
  {
    id: "11",//3
    title: "La Grande Soirée de Issawa à El Jadida",
    date: "2025-11-01",
    time: "10:00",
    location: "el jadida",
    venue: "Complexe El Hassani Route",
    category: "Concerts",
    image: "https://i.pinimg.com/736x/11/f6/43/11f643a04cb65ea516e04007197e3634.jpg",
    price: 89.99,
    description: " .ليلة عيساوة كبرى هي احتفالية فنية مميزة تهدف إلى إبراز جمال الموسيقى المغربية التقليدية، حيث يُقدّم فيها عرض موسيقي أصيل من فن العيساوة، وهو نوع من الموسيقى التي تتميز بالروحانية والتقاليد العريقة",
    featured: true
  },
  {
    id: "12",//4
    title: "KALAHARI CONFERENCE - Package 6 Games",
    date: "5 - 13 April 2025",
    time: "11:26",
    location: "Rabat",
    venue: "Prince Moulay Abdellah",
    category: "Sports",
    image: "https://i.pinimg.com/736x/da/6f/5a/da6f5aacb5608e1ec15dbd1e296078a8.jpg",
    price: 89.99,
    description: ", Morocco and culminate with the 2025 BAL Finals on Saturday, June 14 at the SunBet Arena in Pretoria, South Africa, marking the first BAL games in Morocco and the first time the BAL Finals will be held in South Africa.  The 2025 BAL season will feature the top 12 club teams from 12 African countries playing 48 games in Rabat; Dakar, Senegal; Kigali, Rwanda; and Pretoria.",
    featured: true
  },
  {
    id: "13",//5
    title: "Stage de Printemps à Studio des arts vivants",
    date: "2025-04-28",
    time: "de 10H à 16H30",
    location: "Tanger",
    venue: "Studio des Arts vivants",
    category: "Conférences",
    image: "https://i.pinimg.com/736x/5f/1d/dd/5f1ddd32f4013f55e7aebbab1fa782cd.jpg",
    price: 350.00,
    description: "Le Studio des Arts Vivants a hâte de retrouver vos enfants du Lundi 28 Avril au Vendredi 02 Mai 2025 pour la semaine artistique de Camp de Printemps ! ",
    featured: true
  },
  {
    id: "14",//6
    title: "Summer Sound 2025",
    date: "2025-08-16",
    time: "10:00",
    location: "Rabat",
    venue: "Club Wifaq",
    category: "Festivals",
    image: "https://i.pinimg.com/736x/d5/ec/83/d5ec839af3fdfcc311ba714e4f922c02.jpg",
    price: 89.99,
    description: "Rejoignez-nous pour trois jours de fête inoubliable au Club Wifaq – Rabat, du 29 au 31 mai 2025, à l’occasion du festival Summer Sound.",
    featured: true
  },
  {
    id: "15",//7
    title: "Soirée Inoubliable à Agadir",
    date: "2025-08-26",
    time: "10:00",
    location: "Agadir",
    venue: "Théâtre de Verdure",
    category: "Concerts",
    image: "https://i.pinimg.com/736x/fc/b8/cd/fcb8cdfcc82f24c0e39d19fb9284fdbc.jpg",
    price: 89.99,
    description: "Le Théâtre de Verdure d’Agadir vous ouvre ses portes pour une soirée mémorable le 26 août 2025, réunissant trois grandes figures du monde artistique. Cet événement d’exception mêlera musique et émotions avec des artistes de renom qui ont conquis le cœur du public marocain.",
    featured: true
  },
  {
    id: "16",//8
    title: "Morocco Trail",
    date: "29 déc. 2024 ",
    time: "10:00",
    location: "AIT BEN HADDOU",
    venue: "Trail Imlilen ",
    category: "Sports",
    image: "https://i.pinimg.com/736x/53/07/7d/53077d8deadd46138189b9d5319e9b4e.jpg",
    price: 89.99,
    description: "Découvrez le Morocco Trail à Ait Ben Haddou, une expérience unique de course en sentier au cœur de la magnifique vallée de l'Ounila. Choisissez parmi différentes distances, Trail Mradi de 10 km et Trail Imlilen de 30 km, et défiez-vous dans ce cadre inspirant.",
    featured: true
  },
  {
    id: "17",//9
    title: "Rachid Rafik de Retour'KHIBRATOUR'",
    date: "2025-11-01",
    time: "10:00",
    location: "Marrakech",
    venue: "Meydene",
    category: "Théâtre",
    image: "https://i.pinimg.com/736x/91/2c/09/912c09e4387e5afc1c5d2547764779a1.jpg",
    price: 89.99,
    description: "L’humour à l’état pur revient avec Rachid Rafik dans son spectacle inédit Khibra Tour ! 🌟 Une soirée où rires, anecdotes et réflexions se mêlent pour le plaisir de tous",
    featured: true
  },
  {
    id: "18",//10
    title: "NOSTALGIA LOVERS FESTIVAL 2025",
    date: "2025-11-01",
    time: "10:00",
    location: "Casablanca",
    venue: "Parc du Velodrome",
    category: "Festivals",
    image: "https://cdnv2.guichet.com/public/events/covers/6ZsOHLajiC6vGYFzBgbLWErxk4n6oBVl2A2YyqBo.jpg?v=1744131504",
    price: 89.99,
    description: "Préparez-vous à une soirée culte avec une programmation exceptionnelle 100 % hits planétaires ! 🎶✨",
    featured: true
  },
  {
    id: "19",//11
    title: "La 17ème édition du Salon International de l’Agriculture au Maroc (SIAM)",
    date: "Du 21 au 27 october 2025",
    time: "10:00",
    location: "Meknès",
    venue: "Salon International de l’Agriculture ",
    category: "Conférences",
    image: "https://i.pinimg.com/736x/20/e5/df/20e5df6365ca4f44602c790198b7d8ad.jpg",
    price: 89.99,
    description: "Sous le Haut Patronage de Sa Majesté Le Roi Mohammed VI, Que Dieu L’Assiste, la ville de Meknès accueillera la 17ᵉ édition du Salon International de l’Agriculture au Maroc.",
    featured: true
  },
  {
    id: "20",//12
    title: "Djadja & Dinaz à Casablanca",
    date: "2025-11-01",
    time: "10:00",
    location: "casablanca",
    venue: "Morocco Mall",
    category: "Concerts",
    image: "https://i.pinimg.com/736x/8f/4b/0c/8f4b0cdfa944bb72c0ed0dded1ef6ec8.jpg",
    price: 89.99,
    description: "De On s’promet à Drôle de mentalité, en passant par Dans l’arène… le duo légendaire débarque enfin au bled pour un show historique ! 🚀🎤💥",
    featured: true
  },
  {
    id: "21",//13
    title: "Les Trois Brigands à Rabat",
    date: "2025-11-01",
    time: "10:00",
    location: "Rabat",
    venue: "Théâtre Bahnini ",
    category: "Expositions",
    image: "https://i.pinimg.com/736x/3b/66/08/3b66085a086b176c41352abd6b4d37fc.jpg",
    price: 89.99,
    description: "Entre tradition populaire, tango et théâtre d'objet, Les Trois Brigands est un conte musical où l'univers de Tomi Ungerer est sublimé par une composition originale de Gustavo Beytelmann pour deux voix et bandonéon.",
    featured: true
  },
  {
    id: "22",//14
    title: "Stage d'Été de Football - Académie de Football DBU",
    date: "Saison 2024 / 2025",
    time: "13:25",
    location: "Casablanca",
    venue: "Dar Bouazza",
    category: "Sports",
    image: "https://i.pinimg.com/736x/fa/62/26/fa6226d4cc943ce28c7c4f34e9bdfb7f.jpg",
    price: 89.99,
    description: "L'Académie de Football DBU est ravie de vous annoncer l'ouverture des inscriptions pour notre stage d'été de football, dédié aux jeunes passionnés âgés de 4 à 18 ans. Ce stage est une occasion unique de perfectionner vos compétences footballistiques tout en participant à des activités multidisciplinaires passionnantes.",
    featured: true
  },
  {
    id: "23",//15
    title: "La caravane du commerce électronique à Casablanca",
    date: "17 Février 2026",
    time: "10:00",
    location: "Casablanca",
    venue: "Hyatt Regency",
    category: "Conférences",
    image: "https://images.unsplash.com/photo-1500051638674-ff996a0ec29e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=918&q=80",
    price: 89.99,
    description: "Bienvenue au plus grand convoi d’éducation au commerce électronique dans le monde arabe, où nous partagerons avec vous les meilleures stratégies et tactiques dans le domaine du commerce électronique. ",
    featured: true
  },
  {
    id: "24",//16
    title: "Festival Tanger Chante le Monde : Jahida Wehbé",
    date: "29 mai 2025 ",
    time: "21:00",
    location: "Tanger",
    venue: "Théâtre palais des arts",
    category: "Festivals",
    image: "https://i.pinimg.com/736x/b8/87/f6/b887f65a03ac6e9133a237017ad7d779.jpg",
    price: 89.99,
    description: "Héritiers des chants des esclaves africains déportés en Amérique du Nord entre le XVIIe et le XIXe siècle. Il a été fondé en 1982 par le chef de chœur et compositeur Bazil Meade.",
    featured: true
  },
  {
    id: "25",//17
    title: "Moroccan Pink Floyd Tribute by Africa Band",
    date: "2025-11-01",
    time: "10:00",
    location: "Casablanca",
    venue: "BOULTEK",
    category: "Concerts",
    image: "https://i.pinimg.com/736x/ce/22/3c/ce223c42814afefa70e0e44ab52d62d8.jpg",
    price: 89.99,
    description: "Depuis sa création, Moroccan Pink Floyd Tribute by Africa Band enchaîne les performances sur les plus grandes scènes marocaines : Jazzablanca, L’Boulevard, Mégarama, Studio des Arts Vivants et le Palais des Festivals et des Congrès de Marrakech, décrochant à chaque fois un succès retentissant.",
    featured: true
  },
  {
    id: "26",//18
    title: "Gretel et Hansel à Casablanca",
    date: "2025-11-01",
    time: "10:00",
    location: "Casablanca",
    venue: "Complexe Al Hassani",
    category: "Expositions",
    image: "https://i.pinimg.com/736x/ab/c7/08/abc708e645d83254c91f48f1257d7abe.jpg",
    price: 89.99,
    description: "Dans une relecture d'Hansel et Gretel, le célèbre conte des frères Grimm, Suzanne Lebeau dialogue avec sa propre enfance et avec les enfants qu'elle voit grandir autour d'elle.",
    featured: true
  },
  {
    id: "27",//19
    title: "15 KM DE MOULAY ABDELLAH",
    date: "2025-6-08",
    time: "9:00",
    location: "El Jadida",
    venue: "MOULAY ABDELLAH",
    category: "Sports",
    image: "https://i.pinimg.com/736x/5c/83/de/5c83def3df77ead9930b5385fc2c7584.jpg",
    price: 89.99,
    description: "Cette année le 08 Juin 2025 à 10:00 donnera le coup d’envoi de la première édition du 15 KM DE MOULAY ABDELLAH.",
    featured: true
  },
  {
    id: "28",//20
    title: "GALA ARABOPHONE 30 MAI",
    date: "2025-05-30",
    time: "20:00",
    location: "Casablanca",
    venue: "Théâtre Mohammed 5",
    category: "Théâtre",
    image: "https://i.pinimg.com/736x/f5/c2/54/f5c254a235a4155ad3d063fa74c6cca5.jpg",
    price: 89.99,
    description: "Comediablanca, le festival du rire de Casablanca, revient pour une 2ᵉ édition exceptionnelle au Complexe Mohamed V de Rabat !",
    featured: true
  },
  {
    id: "29",//21
    title: "Les Fourberies de Scapin",
    date: "2025-11-01",
    time: "10:00",
    location: "El Jadida",
    venue: "Complexe El Hassani",
    category: "Expositions",
    image: "https://i.pinimg.com/736x/6c/22/27/6c22278aad231f3e82067b378cacc052.jpg",
    price: 89.99,
    description: "Les plus beaux clichés de nature sauvage réunis dans une exposition époustouflante. Découvrez la beauté de notre planète à travers l'objectif des plus grands photographes.",
    featured: true
  },
  {
    id: "30",//22
    title: "Ftour Network & Learn",
    date: "28 novembre 2025",
    time: "10:00",
    location: "Casablanca",
    venue: "Idou Anfa",
    category: "Conférences",
    image: "https://cdnv2.guichet.com/public/events/covers/ftour-network-learn-1.jpeg?v=1742407784",
    price: 89.99,
    description: "Rejoignez-nous pour une expérience unique alliant apprentissage, networking et partage dans une ambiance conviviale et inspirante.",
    featured: true
  },
];

export const getEventById = (id: string): Event | undefined => {
  return events.find(event => event.id === id);
};

export const getEventsByCategory = (category: string): Event[] => {
  if (category === "Tous") return events;
  return events.filter(event => event.category === category);
};

export const getFeaturedEvents = (): Event[] => {
  return events.filter(event => event.featured);
};

export const searchEvents = (query: string): Event[] => {
  const lowercaseQuery = query.toLowerCase();
  return events.filter(
    event =>
      event.title.toLowerCase().includes(lowercaseQuery) ||
      event.location.toLowerCase().includes(lowercaseQuery) ||
      event.category.toLowerCase().includes(lowercaseQuery) ||
      event.venue.toLowerCase().includes(lowercaseQuery)
  );
};
