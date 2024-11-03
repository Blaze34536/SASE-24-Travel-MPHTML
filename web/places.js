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
    country: "Italy"
  },
  "Petra": { 
    lat: 30.3285, 
    lng: 35.4444, 
    visited: false, 
    image: "../resources/Places/Petra.jpg",
    country: "Brazil" 
  },
  "Christ the Redeemer": { 
    lat: -22.9519, 
    lng: -43.2105, 
    visited: false, 
    image: "../resources/Places/Christ.jpg",
    country: "Brazil" 
  },
  "Great Wall of China": { 
    lat: 40.4319, 
    lng: 116.5704, 
    visited: false,
    image: "../resources/Places/The_Great_Wall_of_China.jpg",
    country: "China"
  },
  "Chichen Itza": { 
    lat: 20.6843, 
    lng: -88.5678, 
    visited: false, 
    image: "../resources/Places/Chichen_Itza.jpg",
    country: "Mexico" 
  },
  "Machu Picchu": { 
    lat: -13.1632, 
    lng: -72.5453, 
    visited: false, 
    image: "../resources/Places/Machu_Picchu.jpg",
    country: "Peru"
  },
  "Fatehpur Sikri": { 
    lat: 27.0945, 
    lng: 77.6679, 
    visited: false, 
    image: "../resources/Places/Fatehpur_Sikri.jpg",
    country: "India"
  },
  "Agra Fort": { 
    lat: 27.1795, 
    lng: 78.0211, 
    visited: false, 
    image: "../resources/Places/Agra_Fort.jpg",
    country: "India" 
  },
  "Itmad ud Daulah Tomb": { 
    lat: 27.1929, 
    lng: 78.0310, 
    visited: false, 
    image: "../resources/Places/Itmad_ud_Dauluh_Tomb.jpg",
    country: "India"
  },
  "Mount Fuji": { 
    lat: 35.3606, 
    lng: 138.7274, 
    visited: false, 
    image: "../resources/Places/Mount_Fuji.jpg",
    country: "Japan"
  },
  "Hakone Shrine": { 
    lat: 35.2338, 
    lng: 139.1088, 
    visited: false, 
    image: "../resources/Places/Hakone_Shrine.jpg",
    country: "Japan" 
  },
  "Lake Kawaguchi": { 
    lat: 35.5171, 
    lng: 138.7518, 
    visited: false,
    image: "../resources/Places/Kawaguchi.jpg",
    country: "Japan"
  },
  "Parque Estadual da Pedra Branca": { 
    lat: -22.9424, 
    lng: -43.4934, 
    visited: false, 
    image: "../resources/Places/Parque_Pedra_Branca.jpg",
    country: "Brazil"
  },
  "Parque Nacional de Tijuca": { 
    lat: -22.9414, 
    lng: -43.2928, 
    visited: false, 
    image: "../resources/Places/Parque_Tijuca.jpg",
    country: "Brazil"
  },
  "Iguazu Falls": { 
    lat: -25.6953, 
    lng: -54.4367, 
    visited: false, 
    image: "../resources/Places/Iguazu_Falls.jpg",
    country: "Brazil"
  },
  "Eiffel Tower": { 
    lat: 48.8584, 
    lng: 2.2945, 
    visited: false, 
    image: "../resources/Places/Eiffel_Tower.jpg",
    country: "Frane" 
  },
  "Statue of Liberty": { 
    lat: 40.6892, 
    lng: -74.0445, 
    visited: false, 
    image: "../resources/Places/Statue_of_Liberty.jpg",
    country: "USA" 
  },
  "Sydney Opera House": { 
    lat: -33.8568, 
    lng: 151.2153, 
    visited: false, 
    image: "../resources/Places/Sydney_Opera_House.jpg",
    country: "Australia" 
  },
  "Big Ben": { 
    lat: 51.5007, 
    lng: -0.1246, 
    visited: false, 
    image: "../resources/Places/Big_Ben.jpg",
    country: "United Kingdom"
  },
  "Santorini": { 
    lat: 36.3932, 
    lng: 25.4615, 
    visited: false, 
    image: "../resources/Places/Santorini.jpg",
    country: "Greece"
  },
  "Acropolis of Athens": { 
    lat: 37.9715, 
    lng: 23.7267, 
    visited: false, 
    image: "../resources/Places/Acropolis_of_Athens.jpg",
    country: "Greece" 
  },
  "Stonehenge": { 
    lat: 51.1789, 
    lng: -1.8262, 
    visited: false, 
    image: "../resources/Places/Stonehenge.jpg",
    country: "United Kingdom" 
  },
  "Niagara Falls": { 
    lat: 43.0962, 
    lng: -79.0377, 
    visited: false, 
    image: "../resources/Places/Niagara_Falls.jpg",
    country: "USA"
  },
  "Burj Khalifa": { 
    lat: 25.1972, 
    lng: 55.2744, 
    visited: false, 
    image: "../resources/Places/Burj_Khalifa.jpg",
    country: "UAE"
  },
  "Grand Canyon": { 
    lat: 36.1069, 
    lng: -112.1129, 
    visited: false, 
    image: "../resources/Places/Grand_Canyon.jpg",
    country: "USA" 
  },
  "Milan Cathedral": { 
    lat: 45.4642, 
    lng: 9.1909, 
    visited: false, 
    image: "../resources/Places/Milan_Cathedral.jpg",
    country: "Italy"
  },
  "Sagrada Familia": { 
    lat: 41.4036, 
    lng: 2.1744, 
    visited: false, 
    image: "../resources/Places/Sagrada_Familia.jpg",
    country: "Italy" 
  },
  "Table Mountain": { 
    lat: -33.9625, 
    lng: 18.4092, 
    visited: false, 
    image: "../resources/Places/Table_Mountain.jpg",
    country: "South Africa" 
  },
  "The Louvre": { 
    lat: 48.8606, 
    lng: 2.3376, 
    visited: false, 
    image: "../resources/Places/Louvre.jpg",
    country: "France" 
  },
  "Versailles Palace": { 
    lat: 48.8049, 
    lng: 2.1204, 
    visited: false, 
    image: "../resources/Places/Versailles_Palace.jpg"
  },
  "Alhambra": { 
    lat: 37.7693, 
    lng: -3.5881, 
    visited: false, 
    image: "../resources/Places/Alhambra.jpeg",
    country: "Spain" 
  }
};