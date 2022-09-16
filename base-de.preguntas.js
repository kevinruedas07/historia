function LaTeX(code) {
    return `https://latex.codecogs.com/svg.image?\\large&space;${code}`;
  }
  
  function opnLaTeX(code) {
    return `<img src="${LaTeX(code)}" style="height:40px">`;
  }
  
  let baseDePreguntas = [
        {
        pregunta: "1 ¿Cuándo termino la II Guerra Mundial?",
        respuesta: "1945",
        distractores: ["1947", "1943"],
        },
        {
        pregunta: "2 ¿En qué año llego Cristóbal Colon a América?",
        respuesta: "1492",
        distractores: ["1429", "1592"],
        },
        {
        pregunta: "3 ¿Quién es el padre del psicoanálisis?",
        respuesta: "Sigmund Freud",
        distractores: ["Carl Gustav Jung", "Skinner"],
        },
        {
        pregunta: "4 ¿Quién era el general de los Nazis en la Segunda Guerra Mundial?",
        respuesta: "Adolf Hitler",
        distractores: ["Benito Mussolini", "Heinrich Himmler"],
        },
        {
        pregunta: "5 ¿Cuál es el libro sagrado de los musulmanes?",
        respuesta: "El Corín",
        distractores: ["La Biblia", "El Talmud"],
        },
        {
        pregunta: "6 ¿En qué país se usa la primera bomba atómica?",
        respuesta: "Japón",
        distractores: ["Rusia", "Estados Unidos"],
        },
        {
        pregunta: "7 ¿Cuál es el idioma más antiguo que pervive en Europa?",
        respuesta: "Vasco",
        distractores: ["Inglés", "Italiano"],
        },
        {
        pregunta: "8 ¿Cómo se llama la primera mujer que viaje al espacio?",
        respuesta: "Valentina Tereshkova",
        distractores: ["Alexandra Tereshkova", "Amanda Tereshkova"],
        },
        {
        pregunta: "9 ¿Cuál fue el primer hombre en ir a la luna?",
        respuesta: "Neil Armstrong",
        distractores: ["Louis Armstrong", "Alfred Armstrong"],
        },
        {
        pregunta: "10 ¿En qué guerra participo Juana de Arco?",
        respuesta: "Guerra de los 100 años",
        distractores: [" Guerra de la independencia francesa", "Guerra Civil Española"],
        },
        {
        pregunta: "11 ¿De qué año es la primera constitución española conocida como La Pepa?",
        respuesta: "1812",
        distractores: ["1835", "1978"],
        },
        {
        pregunta: "12 ¿Quién fue el primer emperador romano?",
        respuesta: "Cesar Augusto",
        distractores: ["Julio Cesar", "Marco Aurelia"],
        },
        {
        pregunta: "13 ¿En qué isla murió Napoleón?",
        respuesta: "Santa Elena",
        distractores: ["Sicilia", "Creta"],
        },
        {
         pregunta: "14 ¿Qué año solo tuvo 355 días?",
         respuesta: "1582",
         distractores: ["1615", "1823"],
        },
        {
        pregunta: "15 ¿Qué Libro es el más leído?",
        respuesta: "La biblia",
        distractores: ["La Enciclopedia", "El Diccionario"],
        },
  ];
