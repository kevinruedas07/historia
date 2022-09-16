function LaTeX(code) {
    return `https://latex.codecogs.com/svg.image?\\large&space;${code}`;
  }
  
  function opnLaTeX(code) {
    return `<img src="${LaTeX(code)}" style="height:40px">`;
  }
  
  let baseDePreguntas = [
        {
        pregunta: "1 ¿Cuando termino la II Guerra Mundial?",
        respuesta: "1945",
        distractores: ["1947", " 1943"],
        },
        {
        pregunta: "2 ¿En que año llego Cristobal Colon a America?",
        respuesta: "1492",
        distractores: ["1429", "1592"],
        },
        {
        pregunta: "3 ¿Quien es el padre del psicoanalisis?",
        respuesta: "Sigmund Freud",
        distractores: ["Carl Gustav Jung", "Skinner"],
        },
        {
        pregunta: "4 ¿Quién era el general de los Nazis en la Segunda Guerra Mundial?",
        respuesta: "Adolf Hitler",
        distractores: ["Benito Mussolini", "Heinrich Himmler"],
        },
        {
        pregunta: "5 ¿Cual es el libro sagrado de los musulmanes?",
        respuesta: "El Corin",
        distractores: ["La Biblia", "El Talmud"],
        },
        {
        pregunta: "6 ¿En que pais se us? la primera bomba atomica?",
        respuesta: "Japon",
        distractores: ["Rusia", "Estados Unidos"],
        },
        {
        pregunta: "7 ¿Cual es el idioma mas antiguo que pervive en Europa?",
        respuesta: "Vasco",
        distractores: ["Ingles", "Italiano"],
        },
        {
        pregunta: "8 ¿Como se llama la primera mujer que viaje al espacio?",
        respuesta: "Valentina Tereshkova",
        distractores: ["Alexandra Tereshkova", "Amanda Tereshkova"],
        },
        {
        pregunta: "9 ¿Cual fue el primer hombre en ir a la luna?",
        respuesta: "Neil Armstrong",
        distractores: ["Louis Armstrong", "Alfred Armstrong"],
        },
        {
        pregunta: "10 ¿En que guerra participo Juana de Arco?",
        respuesta: "Guerra de los 100 años",
        distractores: [" Guerra de la independencia francesa", "Guerra Civil Española"],
        },
        {
        pregunta: "11 ¿De que año es la primera constitucion española conocida como La Pepa",
        respuesta: "1812",
        distractores: ["1835", "1978"],
        },
        {
        pregunta: "12 ¿Quien fue el primer emperador romano?",
        respuesta: "Cesar Augusto",
        distractores: ["Julio Cesar", "Marco Aurelia"],
        },
        {
        pregunta: "13 ¿En que isla murio Napoleon?",
        respuesta: "Santa Elena",
        distractores: ["Sicilia", "Creta"],
        },
        {
         pregunta: "14 ¿Que año solo tuvo 355 dias?",
         respuesta: "1582",
         distractores: ["1615", "1823"],
        },
        {
        pregunta: "15 ¿Que Libro es el mas leido?",
        respuesta: "La biblia",
        distractores: ["La Enciclopedia", "El Diccionario"],
        },
  ];
