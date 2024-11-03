var places = {
  "Taj Mahal": { 
    lat: 27.1751, 
    lng: 78.0421, 
    visited: false, 
    image: "https://upload.wikimedia.org/wikipedia/commons/d/da/Taj-Mahal.jpg",
    country: "India",
    summary: "An exquisite symbol of love, the Taj Mahal is a stunning white marble mausoleum in Agra, India, built by Emperor Shah Jahan in memory of his wife Mumtaz Mahal. Its intricate architectural details and serene gardens attract millions of visitors each year."
  },
  "Roman Colosseum": { 
    lat: 41.8902, 
    lng: 12.4922, 
    visited: false, 
    image: "../resources/Places/Colosseum.jpg",
    country: "Italy",
    summary: "An iconic symbol of ancient Rome, the Colosseum is an enormous amphitheater that once hosted gladiatorial contests and public spectacles. Its enduring architecture and historical significance draw millions of visitors seeking to experience the grandeur of the Roman Empire."
  },
  "Petra": { 
    lat: 30.3285, 
    lng: 35.4444, 
    visited: false, 
    image: "../resources/Places/Petra.jpg",
    country: "Brazil",
    summary: "Nestled in Jordan, Petra is an ancient city renowned for its rock-cut architecture and water conduit system. Its iconic structure, the Treasury, carved into rose-red cliffs, makes it a breathtaking testament to the ingenuity of the Nabateans."
  },
  "Christ the Redeemer": { 
    lat: -22.9519, 
    lng: -43.2105, 
    visited: false, 
    image: "../resources/Places/Christ.jpg",
    country: "Brazil",
    summary: "Overlooking Rio de Janeiro, Brazil, the Christ the Redeemer statue is a towering symbol of Christianity, known for its outstretched arms that welcome visitors. This iconic landmark offers panoramic views of the vibrant city below."
  },
  "Great Wall of China": { 
    lat: 40.4319, 
    lng: 116.5704, 
    visited: false,
    image: "../resources/Places/The_Great_Wall_of_China.jpg",
    country: "China",
    summary: "Stretching over 13,000 miles, the Great Wall of China is an awe-inspiring feat of engineering designed to protect Chinese states from invasions. Its winding paths and watchtowers offer stunning views of the surrounding landscapes and a glimpse into China's rich history."
  },
  "Chichen Itza": { 
    lat: 20.6843, 
    lng: -88.5678, 
    visited: false, 
    image: "../resources/Places/Chichen_Itza.jpg",
    country: "Mexico",
    summary: "A UNESCO World Heritage site in Mexico, Chichén Itzá is a sprawling ancient Mayan city famous for its impressive pyramid, El Castillo, which demonstrates remarkable astronomical alignments. The site reflects the cultural and architectural sophistication of the Mayan civilization."
  },
  "Machu Picchu": { 
    lat: -13.1632, 
    lng: -72.5453, 
    visited: false, 
    image: "../resources/Places/Machu_Picchu.jpg",
    country: "Peru",
    summary: "Perched high in the Andes Mountains of Peru, Machu Picchu is a 15th-century Incan citadel renowned for its breathtaking terraces and intricate dry-stone construction. It remains a captivating glimpse into the ingenuity and spirituality of the Inca Empire."
  },
  "Fatehpur Sikri": { 
    lat: 27.0945, 
    lng: 77.6679, 
    visited: false, 
    image: "../resources/Places/Fatehpur_Sikri.jpg",
    country: "India",
    summary: "A UNESCO World Heritage site in India, Fatehpur Sikri is a stunning Mughal city built by Emperor Akbar in the 16th century. Its impressive palaces, mosques, and gardens reflect the architectural brilliance of the Mughal era."
  },
  "Agra Fort": { 
    lat: 27.1795, 
    lng: 78.0211, 
    visited: false, 
    image: "../resources/Places/Agra_Fort.jpg",
    country: "India",
    summary: "Located in Agra, India, Agra Fort is a massive red sandstone fortress that served as a royal residence. Its impressive architecture and intricate carvings provide insight into the grandeur of the Mughal Empire."
  },
  "Itmad ud Daulah Tomb": { 
    lat: 27.1929, 
    lng: 78.0310, 
    visited: false, 
    image: "../resources/Places/Itmad_ud_Dauluh_Tomb.jpg",
    country: "India",
    summary: "Often referred to as the \"Baby Taj,\" this exquisite tomb in Agra is known for its delicate marble inlay work and beautiful gardens. Built for Mirza Ghiyas Beg, it represents a significant transition in Mughal architecture."
  },
  "Mount Fuji": { 
    lat: 35.3606, 
    lng: 138.7274, 
    visited: false, 
    image: "../resources/Places/Mount_Fuji.jpg",
    country: "Japan",
    summary: "An iconic symbol of Japan, Mount Fuji is an active stratovolcano famous for its symmetrical cone and stunning views. It attracts hikers, photographers, and cultural enthusiasts, embodying Japan's natural beauty and spiritual significance."
  },
  "Hakone Shrine": { 
    lat: 35.2338, 
    lng: 139.1088, 
    visited: false, 
    image: "../resources/Places/Hakone_Shrine.jpg",
    country: "Japan",
    summary: "Hakone Shrine, founded in 757 AD, is a beautiful Shinto shrine on Lake Ashi in Hakone, Japan. Known for its iconic torii gate in the lake and views of Mount Fuji, it is dedicated to the deity of Hakone, offering protection to travelers. Surrounded by lush forests, it’s a peaceful retreat and a popular spot for visitors." 
  },
  "Lake Kawaguchi": { 
    lat: 35.5171, 
    lng: 138.7518, 
    visited: false,
    image: "../resources/Places/Kawaguchi.jpg",
    country: "Japan",
    summary: "One of the Fuji Five Lakes, Lake Kawaguchi offers breathtaking views of Mount Fuji and is a popular destination for outdoor activities and relaxation. Its serene waters and surrounding landscapes make it a perfect spot for photography and nature appreciation."
  },
  "Parque Estadual da Pedra Branca": { 
    lat: -22.9424, 
    lng: -43.4934, 
    visited: false, 
    image: "../resources/Places/Parque_Pedra_Branca.jpg",
    country: "Brazil",
    summary: "This expansive park in Rio de Janeiro is known for its lush rainforest and diverse wildlife, providing a natural escape within the bustling city. Its hiking trails lead to stunning vistas and the impressive Pedra Branca mountain."
  },
  "Parque Nacional de Tijuca": { 
    lat: -22.9414, 
    lng: -43.2928, 
    visited: false, 
    image: "../resources/Places/Parque_Tijuca.jpg",
    country: "Brazil",
    summary: "A sprawling urban rainforest in Rio de Janeiro, Tijuca National Park is renowned for its hiking trails, waterfalls, and rich biodiversity. It offers a peaceful retreat and a chance to explore one of the largest urban forests in the world."
  },
  "Iguazu Falls": { 
    lat: -25.6953, 
    lng: -54.4367, 
    visited: false, 
    image: "../resources/Places/Iguazu_Falls.jpg",
    country: "Brazil",
    summary: "Straddling the border of Brazil and Argentina, Iguazu Falls is a breathtaking natural wonder composed of over 275 individual waterfalls. The sheer power and beauty of the cascading water create an unforgettable spectacle amid lush tropical surroundings."
  },
  "Eiffel Tower": { 
    lat: 48.8584, 
    lng: 2.2945, 
    visited: false, 
    image: "../resources/Places/Eiffel_Tower.jpg",
    country: "Frane",
    summary: "" 
  },
  "Statue of Liberty": { 
    lat: 40.6892, 
    lng: -74.0445, 
    visited: false, 
    image: "../resources/Places/Statue_of_Liberty.jpg",
    country: "USA",
    summary: "" 
  },
  "Sydney Opera House": { 
    lat: -33.8568, 
    lng: 151.2153, 
    visited: false, 
    image: "../resources/Places/Sydney_Opera_House.jpg",
    country: "Australia",
    summary: "" 
  },
  "Big Ben": { 
    lat: 51.5007, 
    lng: -0.1246, 
    visited: false, 
    image: "../resources/Places/Big_Ben.jpg",
    country: "United Kingdom",
    summary: ""
  },
  "Santorini": { 
    lat: 36.3932, 
    lng: 25.4615, 
    visited: false, 
    image: "../resources/Places/Santorini.jpg",
    country: "Greece",
    summary: ""
  },
  "Acropolis of Athens": { 
    lat: 37.9715, 
    lng: 23.7267, 
    visited: false, 
    image: "../resources/Places/Acropolis_of_Athens.jpg",
    country: "Greece",
    summary: "" 
  },
  "Stonehenge": { 
    lat: 51.1789, 
    lng: -1.8262, 
    visited: false, 
    image: "../resources/Places/Stonehenge.jpg",
    country: "United Kingdom",
    summary: "" 
  },
  "Niagara Falls": { 
    lat: 43.0962, 
    lng: -79.0377, 
    visited: false, 
    image: "../resources/Places/Niagara_Falls.jpg",
    country: "USA",
    summary: ""
  },
  "Burj Khalifa": { 
    lat: 25.1972, 
    lng: 55.2744, 
    visited: false, 
    image: "../resources/Places/Burj_Khalifa.jpg",
    country: "UAE",
    summary: ""
  },
  "Grand Canyon": { 
    lat: 36.1069, 
    lng: -112.1129, 
    visited: false, 
    image: "../resources/Places/Grand_Canyon.jpg",
    country: "USA",
    summary: "" 
  },
  "Milan Cathedral": { 
    lat: 45.4642, 
    lng: 9.1909, 
    visited: false, 
    image: "../resources/Places/Milan_Cathedral.jpg",
    country: "Italy",
    summary: ""
  },
  "Sagrada Familia": { 
    lat: 41.4036, 
    lng: 2.1744, 
    visited: false, 
    image: "../resources/Places/Sagrada_Familia.jpg",
    country: "Italy",
    summary: "" 
  },
  "Table Mountain": { 
    lat: -33.9625, 
    lng: 18.4092, 
    visited: false, 
    image: "../resources/Places/Table_Mountain.jpg",
    country: "South Africa",
    summary: "" 
  },
  "The Louvre": { 
    lat: 48.8606, 
    lng: 2.3376, 
    visited: false, 
    image: "../resources/Places/Louvre.jpg",
    country: "France",
    summary: "" 
  },
  "Versailles Palace": { 
    lat: 48.8049, 
    lng: 2.1204, 
    visited: false, 
    image: "../resources/Places/Versailles_Palace.jpg",
    summary: ""
  },
  "Alhambra": { 
    lat: 37.7693, 
    lng: -3.5881, 
    visited: false, 
    image: "../resources/Places/Alhambra.jpeg",
    country: "Spain",
    summary: "" 
  }
};