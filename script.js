const productos = [
    {
        nombre: "Salsa Tamarindo Agridulce",
        presentacion: "150 ml",
        precioUSD: 2.70,
        foto: "salsa-tamarindo-agridukce-150-ml.jpg",
        categoria: "SALSA SIN PICANTE",
        chef: "Glasear costillas de cerdo, aderezar ensaladas de repollo, bañar brochetas de pollo y dip para deditos de queso.",
        descripcion: "El balance perfecto entre acidez y dulzor, ideal para quienes buscan el sabor original sin el toque de fuego."
    },
    {
        nombre: "Salsa Tamarindo Agridulce",
        presentacion: "255 ml",
        precioUSD: 3.72,
        foto: "salsa-tamarindo-agridulce-255-ml.jpg",
        categoria: "SALSA SIN PICANTE",
        chef: "Glasear costillas, aderezar ensaladas, bañar brochetas de pollo, base para barbacoa y marinar carnes blancas.",
        descripcion: "La versatilidad del fruto más deseado. Esencia pura del fruto con balance perfecto entre acidez y dulzor."
    },
    {
        nombre: "Salsa Tamarindo Agridulce Picante",
        presentacion: "150 ml",
        precioUSD: 2.70,
        foto: "salsa-tamarindo-agridulce-picante-150-ml.jpg",
        categoria: "SALSA CON PICANTE",
        chef: "Acompañar alitas de pollo, dip para camarones tempura, glasear lomo de cerdo y realzar sabores de sushi.",
        descripcion: "Un baile entre el dulzor profundo y un picante juguetón que no deja a nadie indiferente."
    },
    {
        nombre: "Salsa Tamarindo Agridulce Picante",
        presentacion: "255 ml",
        precioUSD: 3.72,
        foto: "salsa-tamarindo-agridulce-picante-255-ml.jpg",
        categoria: "SALSA CON PICANTE",
        chef: "Acompañar alitas de pollo, dip para camarones tempura, bañar rollitos primavera y base para wok de vegetales.",
        descripcion: "El equilibrio que engancha. Dulzor profundo con un toque de fuego juguetón."
    },
    {
        nombre: "Salsa Papaya Aderezo",
        presentacion: "150 ml",
        precioUSD: 2.70,
        foto: "salsa-papaya-aderezo-150-ml.jpg",
        categoria: "SALSA SIN PICANTE",
        chef: "Aderezar ensaladas verdes, acompañar pescados blancos, complementar sándwiches de pavo y dip para vegetales.",
        descripcion: "Propuesta innovadora y suave que captura la esencia dulce y refrescante de la lechosa. Textura sedosa."
    },
    {
        nombre: "Salsa Maracuyá Picante con Jengibre",
        presentacion: "150 ml",
        precioUSD: 2.70,
        foto: "salsa-maracuya-picante-con-jengibre-150-ml.jpg",
        categoria: "SALSA CON PICANTE",
        chef: "Aderezar pescados, postres de chocolate, ensaladas con feta, vinagretas cítricas y panqueques dulces.",
        descripcion: "Acidez vibrante con mezcla eléctrica de fruta de la pasión, toque cítrico de jengibre y picante equilibrado."
    },
    {
        nombre: "Salsa Maracuyá Picante con Jengibre",
        presentacion: "255 ml",
        precioUSD: 3.72,
        foto: "salsa-maracuya-picante-con-jengibre-255-ml.jpg",
        categoria: "SALSA CON PICANTE",
        chef: "Aderezar pescados, pechugas de pollo, mariscos a la parrilla y tartas de fruta.",
        descripcion: "Mezcla sofisticada de acidez y picante. La pareja perfecta para despertar tus sentidos."
    },
    {
        nombre: "Salsa Mango Agridulce con Jalapeño",
        presentacion: "150 ml",
        precioUSD: 2.70,
        foto: "salsa-mango-agridulce-con-Jalapeño-150-ml.jpg",
        categoria: "SALSA CON PICANTE",
        chef: "Glasear costillitas, ensaladas verdes, ceviches de pescado, camarones al coco y tacos de camarón.",
        descripcion: "Explosión tropical que combina la jugosidad del mango con el picante vibrante del jalapeño."
    },
    {
        nombre: "Salsa Mango Agridulce con Jalapeño",
        presentacion: "255 ml",
        precioUSD: 3.72,
        foto: "salsa-mango-agridulce-con-Jalapeño-255-ml.jpg",
        categoria: "SALSA CON PICANTE",
        chef: "Glasear costillitas, ensaladas verdes, brochetas de pollo y acompañar quesos frescos.",
        descripcion: "El sabor del sol con un toque de carácter. El toque atrevido que tus comidas pedían."
    },
    {
        nombre: "Salsa Tomate de Arbol Agridulce Picante",
        presentacion: "150 ml",
        precioUSD: 2.70,
        foto: "salsa-tomate-de-arbol-agridulce-picante-150-ml.jpg",
        categoria: "SALSA CON PICANTE",
        chef: "Glasear cerdo, piezas de sushi, tablas de quesos, pechugas de pavo y sándwiches de roast beef.",
        descripcion: "Equilibrio perfecto entre fuego y miel. Combinación audaz de dulzor profundo con picante vibrante."
    },
    {
        nombre: "Salsa Tomate de Arbol Agridulce Picante",
        presentacion: "255 ml",
        precioUSD: 3.72,
        foto: "nodisponible-1.jpg",
        categoria: "SALSA CON PICANTE",
        chef: "Glasear cerdo, sándwiches de roast beef y piezas de sushi.",
        descripcion: "Toque explosivo para tus comidas. Dulzor profundo y picante que despierta los sentidos."
    },
    {
        nombre: "Salsa Guayaba Picante con Jengibre",
        presentacion: "150 ml",
        precioUSD: 2.70,
        foto: "salsa-guayaba-picante-con-jengibre-150-ml.jpg",
        categoria: "SALSA CON PICANTE",
        chef: "Acompañar quesos fritos, glasear jamón, ensaladas de espinaca y tablas de charcutería.",
        descripcion: "Fusión atrevida de dulzor de guayaba con toque exótico de jengibre y un final picante."
    },
    {
        nombre: "Salsa Guayaba Picante con Jengibre",
        presentacion: "255 ml",
        precioUSD: 3.72,
        foto: "Salsa-Guayaba-Picante-con-Jengibre-255-ml.jpg",
        categoria: "SALSA CON PICANTE",
        chef: "Empanaditas de cabra, alitas asadas, rellenos de repostería y carnes de caza.",
        descripcion: "Trópico, fuego y frescura en un solo lugar. Una mezcla que rompe esquemas."
    },
    {
        nombre: "Salsa Cebolla Caramelizada",
        presentacion: "150 ml",
        precioUSD: 2.70,
        foto: "salsa-cebolla-150-ml.jpg",
        categoria: "SALSA SIN PICANTE",
        chef: "Coronar perros calientes y hamburguesas, rellenar crepes saladas y cortes de carne.",
        descripcion: "El lado dulce de la intensidad. Festín de sabor suave y sofisticado."
    },
    {
        nombre: "Salsa Cebolla Caramelizada",
        presentacion: "255 ml",
        precioUSD: 3.72,
        foto: "salsa-cebolla-caramelizada-255-ml.jpg",
        categoria: "SALSA SIN PICANTE",
        chef: "Base para dips, pizzas de jamón, sándwiches fundidos y lomo de cerdo.",
        descripcion: "Balance perfecto entre lo dulce y lo natural. Un festín sofisticado."
    },
    {
        nombre: "Salsa Alioli de Ajo Española Natural",
        presentacion: "150 ml",
        precioUSD: 3.00,
        foto: "salsa-aioli-de-ajo-Española-natural-150-ml.jpg",
        categoria: "SALSA SIN PICANTE",
        chef: "Untar panes tostados, acompañar papas fritas, pescados a la plancha y vegetales asados.",
        descripcion: "La elegancia del ajo, el alma de tus platos. Sabor tradicional que no podrás dejar de probar."
    },
    {
        nombre: "Salsa Alioli de Ajo Española Picante",
        presentacion: "150 ml",
        precioUSD: 3.10,
        foto: "salsa-aioli-de-ajo-Española-picante-150-ml.jpg",
        categoria: "SALSA CON PICANTE",
        chef: "Aderezar tacos, alitas de pollo, mariscos salteados y sándwiches de pernil.",
        descripcion: "Equilibrio prohibido: sabor tradicional con un toque de fuego especial."
    },
    {
        nombre: "Salsa Mojo Cilantro y Perejil",
        presentacion: "150 ml",
        precioUSD: 3.10,
        foto: "salsa-mojo-cilantro-y-perejil-150-ml.jpg",
        categoria: "SALSA SIN PICANTE",
        chef: "Papas arrugadas, marinar pollos, pescados a la plancha y arepas con queso.",
        descripcion: "Frescor del huerto: explosión de hierbas frescas, ajo y especias. Sabor vibrante y aromático."
    },
    {
        nombre: "Salsa Ají Dulce & Mayonesa",
        presentacion: "150 ml",
        precioUSD: 3.00,
        foto: "salsa-aji-dulce-&-mayonesa-150-ml.jpg",
        categoria: "SALSA SIN PICANTE",
        chef: "Relleno de arepas, bañar empanadas, pescado frito y dip de yuca.",
        descripcion: "Explosión de color y aroma con selección de ajíes criollos y toque de mayonesa."
    },
    {
        nombre: "Salsa Ají Dulce & Mayonesa",
        presentacion: "260 ml",
        precioUSD: 4.72,
        foto: "salsa-aji-dulce-&-mayonesa-260-ml.jpg",
        categoria: "SALSA SIN PICANTE",
        chef: "Base de guisos, carnes a la parrilla, ensaladas y sándwiches de jamón.",
        descripcion: "El alma del ají dulce en tu paladar. Sabor criollo potenciado con suavidad."
    },
    {
        nombre: "Aceite de Onoto",
        presentacion: "150 ml",
        precioUSD: 3.10,
        foto: "aceite-de-onoto-150-ml.jpg",
        categoria: "ACEITE",
        chef: "Color de hallacas, dorar arroz, barnizar empanadas y guisos venezolanos.",
        descripcion: "Color rubí intenso y aroma rústico. El secreto líquido para un guiso perfecto."
    },
    {
        nombre: "Salsa de Onoto",
        presentacion: "150 ml",
        precioUSD: 3.50,
        foto: "salsa-de-onoto-150-ml.jpg",
        categoria: "SALSA SIN PICANTE",
        chef: "Base para sofritos criollos, dar color a arroces y marinar aves al horno.",
        descripcion: "La base sagrada de nuestra cocina. Receta de la abuela potenciada con especias."
    },
    {
        nombre: "Salsa de Onoto",
        presentacion: "500 ml",
        precioUSD: 6.50,
        foto: "salsa-onoto-500-ml.jpg",
        categoria: "SALSA SIN PICANTE",
        chef: "Dar sabor a caldos, untar en bollitos de maíz y base para salsas de carne.",
        descripcion: "Un nivel extra de sazón para un resultado inolvidable en toda la cocina venezolana."
    },
    {
        nombre: "Pasta De Onoto",
        presentacion: "330 ml",
        precioUSD: 5.50,
        foto: "pasta-onoto-330-ml.jpg",
        categoria: "EN PASTA",
        chef: "Base para sofritos, color a arroces, acompañar yuca y dar sabor a caldos.",
        descripcion: "Base sagrada concentrada con una selección de especias para platos criollos."
    },
    {
        nombre: "Pasta de Onoto",
        presentacion: "200 gr",
        precioUSD: 2.92,
        foto: "pasta-de-onoto-200-gr.jpg",
        categoria: "EN PASTA",
        chef: "Concentrar color en guisos, base de caraotas y masas de arepas.",
        descripcion: "Esencia pura del grano en textura concentrada. Integración profunda y color inigualable."
    },
    {
        nombre: "Pasta de Onoto",
        presentacion: "300 gr",
        precioUSD: 3.80,
        foto: "pasta-de-onoto-300-gr.jpg",
        categoria: "EN PASTA",
        chef: "Potenciar estofados, marinados largos y arroces con pollo.",
        descripcion: "Color y sabor de nuestra herencia en pasta. Proceso artesanal concentrado."
    },
    {
        nombre: "Pasta de Onoto",
        presentacion: "480 gr",
        precioUSD: 5.10,
        foto: "pasta-de-onoto-480-gr.jpg",
        categoria: "EN PASTA",
        chef: "Uso industrial/hogareño para guisos, salsas y panadería artesanal.",
        descripcion: "Cuerpo y color inigualable. El alma del onoto en su máxima concentración."
    },
    {
        nombre: "Vinagre de Tamarindo",
        presentacion: "150 ml",
        precioUSD: 2.00,
        foto: "vinagre-de-tamarindo-150-ml.jpg",
        categoria: "VINAGRE",
        chef: "Vinagretas para ensaladas, marinar carnes rojas y desglasear sartenes.",
        descripcion: "Acidez noble del tamarindo macerada con especias para transformar tus platos."
    },
    {
        nombre: "Vinagre de Tamarindo",
        presentacion: "500 ml",
        precioUSD: 5.20,
        foto: "vinagre-de-tamarindo-500-ml.jpg",
        categoria: "VINAGRE",
        chef: "Conservar vegetales, aromatizar salsas agridulces y base para emulsiones gourmet.",
        descripcion: "El toque de autor para tu despensa. Ingrediente de lujo para marinados."
    },
    {
        nombre: "Crema Untable Tamarindo",
        presentacion: "200 gr",
        precioUSD: 2.92,
        foto: "crema-untable-tamarindo-200-gr.jpg",
        categoria: "DULCE UNTABLE",
        chef: "Untar galletas, relleno de tartaletas y acompañar quesos maduros.",
        descripcion: "Caprichos que se derriten en tu boca. Dulzura tropical para tostadas y postres."
    },
    {
        nombre: "Crema Untable Tamarindo",
        presentacion: "400 gr",
        precioUSD: 5.90,
        foto: "crema-untable-tamarindo-400-gr.jpg",
        categoria: "DULCE UNTABLE",
        chef: "Topping de panquecas, batidos de yogurt y consumo directo.",
        descripcion: "Placer irresistible en cada cucharada. Ideal para rellenar postres exóticos."
    },
    {
        nombre: "Crema Untable Parchita",
        presentacion: "200 gr",
        precioUSD: 2.92,
        foto: "crema-untable.parchita-200-gr.jpg",
        categoria: "DULCE UNTABLE",
        chef: "Bañar cheesecakes, relleno de bombones y topping de wafles.",
        descripcion: "Dulzura tropical de parchita para tus tostadas del desayuno o rellenos gourmet."
    },
    {
        nombre: "Crema Untable Parchita",
        presentacion: "400 gr",
        precioUSD: 5.90,
        foto: "crema-untable.parchita-400-gr.jpg",
        categoria: "DULCE UNTABLE",
        chef: "Mezclar con avena, postres fríos y untar croissants.",
        descripcion: "Sabor exótico e intenso. Un capricho que transforma tus meriendas."
    },
    {
        nombre: "Crema Untable Mango",
        presentacion: "200 gr",
        precioUSD: 2.92,
        foto: "crema.untable-mango-200-gr.jpg",
        categoria: "DULCE UNTABLE",
        chef: "Rellenar bizcochos, tostadas francesas y queso crema con galletas.",
        descripcion: "Sumérgete en la dulzura del mango. Perfecta para preparaciones de muffins."
    },
    {
        nombre: "Crema Untable Mango",
        presentacion: "400 gr",
        precioUSD: 5.90,
        foto: "crema.untable-mango-400-gr.jpg",
        categoria: "DULCE UNTABLE",
        chef: "Topping de helados, empanaditas dulces y pan de leche.",
        descripcion: "Sabor tropical concentrado. El acompañante ideal para momentos dulces."
    }
];
