var places = {
    "Taj Mahal": { 
      lat: 27.1751, 
      lng: 78.0421, 
      visited: false, 
      image: "https://upload.wikimedia.org/wikipedia/commons/d/da/Taj-Mahal.jpg" 
    },
    "Roman Colosseum": { 
      lat: 41.8902, 
      lng: 12.4922, 
      visited: false, 
      image: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Colosseum_in_Rome%2C_Italy_-_April_2007.jpg" 
    },
    "Petra": { 
      lat: 30.3285, 
      lng: 35.4444, 
      visited: false, 
      image: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Petra_Jordan_BW_21.JPG" 
    },
    "Christ the Redeemer": { 
      lat: -22.9519, 
      lng: -43.2105, 
      visited: false, 
      image: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Christ_the_Redeemer_-_Cristo_Redentor.jpg" 
    },
    "Great Wall of China": { 
      lat: 40.4319, 
      lng: 116.5704, 
      visited: false, 
      image: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Mutianyu_Great_Wall_in_2019.jpg" 
    },
    "Chichen Itza": { 
      lat: 20.6843, 
      lng: -88.5678, 
      visited: false, 
      image: "https://upload.wikimedia.org/wikipedia/commons/e/ee/El_Castillo%2C_Chichen_Itza.jpg" 
    },
    "Machu Picchu": { 
      lat: -13.1632, 
      lng: -72.5453, 
      visited: false, 
      image: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Before_Machu_Picchu.JPG" 
    },
    "Fatehpur Sikri": { 
      lat: 27.0945, 
      lng: 77.6679, 
      visited: false, 
      image: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Panch_Mahal%2C_Fatehpur_Sikri.jpg" 
    },
    "Agra Fort": { 
      lat: 27.1795, 
      lng: 78.0211, 
      visited: false, 
      image: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Agra_Fort.JPG" 
    },
    "Itmad ud Daulah Tomb": { 
      lat: 27.1929, 
      lng: 78.0310, 
      visited: false, 
      image: "https://upload.wikimedia.org/wikipedia/commons/6/67/Itmad-ud-Daula_02.JPG" 
    },
    "Mount Fuji": { 
      lat: 35.3606, 
      lng: 138.7274, 
      visited: false, 
      image: "https://upload.wikimedia.org/wikipedia/commons/1/12/Sw_Fuji_FujiCity.jpg" 
    },
    "Hakone Shrine": { 
      lat: 35.2338, 
      lng: 139.1088, 
      visited: false, 
      image: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Hakone_Shrine.jpg" 
    },
    "Lake Kawaguchi": { 
      lat: 35.5171, 
      lng: 138.7518, 
      visited: false, 
      image: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Lake_Kawaguchi_2010.JPG" 
    },
    "Parque Estadual da Pedra Branca": { 
      lat: -22.9424, 
      lng: -43.4934, 
      visited: false, 
      image: "https://upload.wikimedia.org/wikipedia/commons/8/8b/Parque_Estadual_da_Pedra_Branca_-_Serra_do_Orat%C3%B3rio.jpg" 
    },
    "Parque Nacional de Tijuca": { 
      lat: -22.9414, 
      lng: -43.2928, 
      visited: false, 
      image: "https://upload.wikimedia.org/wikipedia/commons/7/7f/Parque_Nacional_da_Tijuca.jpg" 
    },
    "Iguazu Falls": { 
      lat: -25.6953, 
      lng: -54.4367, 
      visited: false, 
      image: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Cataratas_do_Igua%C3%A7u_-_Iguazu_Falls.jpg" 
    },
    "Eiffel Tower": { 
      lat: 48.8584, 
      lng: 2.2945, 
      visited: false, 
      image: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Tour_Eiffel_Wikimedia_Commons.jpg" 
    },
    "Statue of Liberty": { 
      lat: 40.6892, 
      lng: -74.0445, 
      visited: false, 
      image: "https://upload.wikimedia.org/wikipedia/commons/2/24/Statue_of_Liberty%2C_NYC.jpg" 
    },
    "Sydney Opera House": { 
      lat: -33.8568, 
      lng: 151.2153, 
      visited: false, 
      image: "https://upload.wikimedia.org/wikipedia/commons/f/f0/Sydney_Opera_House_Sydney_Australia.jpg" 
    },
    "Big Ben": { 
      lat: 51.5007, 
      lng: -0.1246, 
      visited: false, 
      image: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Big_Ben_Clock_Tower_London.jpg" 
    },
    "Santorini": { 
      lat: 36.3932, 
      lng: 25.4615, 
      visited: false, 
      image: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Santorini_Sunset.jpg" 
    },
    "Acropolis of Athens": { 
      lat: 37.9715, 
      lng: 23.7267, 
      visited: false, 
      image: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Acropolis_of_Athens_%28April_2015%29.jpg" 
    },
    "Stonehenge": { 
      lat: 51.1789, 
      lng: -1.8262, 
      visited: false, 
      image: "https://upload.wikimedia.org/wikipedia/commons/0/02/Stonehenge_2007_01.jpg" 
    },
    "Niagara Falls": { 
      lat: 43.0962, 
      lng: -79.0377, 
      visited: false, 
      image: "https://upload.wikimedia.org/wikipedia/commons/1/1f/Niagara_Falls_%28cropped%29.jpg" 
    },
    "Burj Khalifa": { 
      lat: 25.1972, 
      lng: 55.2744, 
      visited: false, 
      image: "https://upload.wikimedia.org/wikipedia/commons/4/44/Burj_Khalifa_Tower.jpg" 
    },
    "Grand Canyon": { 
      lat: 36.1069, 
      lng: -112.1129, 
      visited: false, 
      image: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Grand_Canyon_from_Desert_View_Point.jpg" 
    },
    "Milan Cathedral": { 
      lat: 45.4642, 
      lng: 9.1909, 
      visited: false, 
      image: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Milan_Duomo_-_5.jpg" 
    },
    "Sagrada Familia": { 
      lat: 41.4036, 
      lng: 2.1744, 
      visited: false, 
      image: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Sagrada_Familia%2C_Barcelona.jpg" 
    },
    "Table Mountain": { 
      lat: -33.9625, 
      lng: 18.4092, 
      visited: false, 
      image: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Table_Mountain_Aerial_Cableway.jpg" 
    },
    "The Louvre": { 
      lat: 48.8606, 
      lng: 2.3376, 
      visited: false, 
      image: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Louvre_Museum_%28crop%29.jpg" 
    },
    "Versailles Palace": { 
      lat: 48.8049, 
      lng: 2.1204, 
      visited: false, 
      image: "https://upload.wikimedia.org/wikipedia/commons/e/e1/Palace_of_Versailles_%28interior_view%29.jpg" 
    },
    "Alhambra": { 
      lat: 37.7693, 
      lng: -3.5881, 
      visited: false, 
      image: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Alhambra_Granada_Spain_2007.jpg" 
    }
  };