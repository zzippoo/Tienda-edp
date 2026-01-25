// 1. CONFIGURACIÓN GLOBAL
const tasaBCV = 54.50; 
const WHATSAPP_DESTINO = "584123418345"; 

// 2. BASE DE DATOS COMPLETA (35 PRODUCTOS CON TEXTOS ORIGINALES)
const productos = [
    { id: 1, nombre: "Salsa Tamarindo Agridulce", presentacion: "150 ml", precioUSD: 2.70, foto: "salsa-tamarindo-agridukce-150-ml.jpg", chef: "Ideal para acompañar carnes blancas, cerdo, langostinos, nuggets de pollo y las costillitas de cerdo a la barbacoa.", desc: "Nuestra Salsa de Tamarindo Agridulce es una explosión de sabores tropicales en cada gota. Elaborada con los tamarindos más frescos y selectos, esta salsa combina a la perfección la acidez natural de la fruta con un toque dulce artesanal." },
    { id: 2, nombre: "Salsa Tamarindo Agridulce", presentacion: "255 ml", precioUSD: 3.72, foto: "salsa-tamarindo-agridulce-255-ml.jpg", chef: "Ideal para acompañar carnes blancas, cerdo, langostinos, nuggets de pollo y las costillitas de cerdo a la barbacoa.", desc: "Nuestra Salsa de Tamarindo Agridulce es una explosión de sabores tropicales en cada gota. Elaborada con los tamarindos más frescos y selectos, esta salsa combina a la perfección la acidez natural de la fruta con un toque dulce artesanal." },
    { id: 3, nombre: "Salsa Tamarindo Picante", presentacion: "150 ml", precioUSD: 2.70, foto: "salsa-tamarindo-agridulce-picante-150-ml.jpg", chef: "Perfecta para alitas de pollo, tacos, costillas asadas y para darle un toque exótico a tus vegetales salteados.", desc: "Nuestra Salsa de Tamarindo Agridulce Picante lleva la experiencia del tamarindo a un nivel superior. Fusionamos la base agridulce clásica con una selección de ajíes que aportan un picor equilibrado y persistente." },
    { id: 4, nombre: "Salsa Tamarindo Picante", presentacion: "255 ml", precioUSD: 3.72, foto: "salsa-tamarindo-agridulce-picante-255-ml.jpg", chef: "Perfecta para alitas de pollo, tacos, costillas asadas y para darle un toque exótico a tus vegetales salteados.", desc: "Nuestra Salsa de Tamarindo Agridulce Picante lleva la experiencia del tamarindo a un nivel superior. Fusionamos la base agridulce clásica con una selección de ajíes que aportan un picor equilibrado y persistente." },
    { id: 5, nombre: "Salsa Papaya Aderezo", presentacion: "150 ml", precioUSD: 2.70, foto: "salsa-papaya-aderezo-150-ml.jpg", chef: "Úsala como aderezo en ensaladas tropicales, para marinar pechugas de pollo o como dip para pasapalos frescos.", desc: "La Salsa de Papaya Aderezo es una opción ligera, fresca y sorprendente. Aprovechamos la suavidad y el aroma de la papaya madura para crear un aderezo versátil que equilibra lo dulce con notas cítricas sutiles." },
    { id: 6, nombre: "Maracuyá con Jengibre", presentacion: "150 ml", precioUSD: 2.70, foto: "salsa-maracuya-picante-con-jengibre-150-ml.jpg", chef: "Ideal para pescados blancos al vapor, salmón a la plancha, carpaccios y quesos madurados.", desc: "La Salsa de Maracuyá con Jengibre es una oda a la frescura. La intensidad ácida y aromática de la parchita se une al toque picante y refrescante del jengibre natural, creando una combinación elegante y sofisticada." },
    { id: 7, nombre: "Maracuyá con Jengibre", presentacion: "255 ml", precioUSD: 3.72, foto: "salsa-maracuya-picante-con-jengibre-255-ml.jpg", chef: "Ideal para pescados blancos al vapor, salmón a la plancha, carpaccios y quesos madurados.", desc: "La Salsa de Maracuyá con Jengibre es una oda a la frescura. La intensidad ácida y aromática de la parchita se une al toque picante y refrescante del jengibre natural, creando una combinación elegante y sofisticada." },
    { id: 8, nombre: "Mango con Jalapeño", presentacion: "150 ml", precioUSD: 2.70, foto: "salsa-mango-agridulce-con-Jalapeño-150-ml.jpg", chef: "Acompáñala con camarones rebozados, tacos de pescado, carnes de cerdo o simplemente con nachos.", desc: "Nuestra Salsa de Mango Agridulce con Jalapeño es la definición de equilibrio. La pulpa carnosa y dulce del mango se entrelaza con el carácter del jalapeño, ofreciendo un sabor vibrante que recorre todo el paladar." },
    { id: 9, nombre: "Mango con Jalapeño", presentacion: "255 ml", precioUSD: 3.72, foto: "salsa-mango-agridulce-con-Jalapeño-255-ml.jpg", chef: "Acompáñala con camarones rebozados, tacos de pescado, carnes de cerdo o simplemente con nachos.", desc: "Nuestra Salsa de Mango Agridulce con Jalapeño es la definición de equilibrio. La pulpa carnosa y dulce del mango se entrelaza con el carácter del jalapeño, ofreciendo un sabor vibrante que recorre todo el paladar." },
    { id: 10, nombre: "Tomate de Árbol Picante", presentacion: "150 ml", precioUSD: 2.70, foto: "salsa-tomate-de-arbol-agridulce-picante-150-ml.jpg", chef: "Excelente para empanadas, tequeños, carnes a la parrilla y platos típicos andinos.", desc: "La Salsa de Tomate de Árbol Picante rescata los sabores tradicionales con un toque gourmet. El sabor profundo y ligeramente amargo del tomate de árbol se equilibra con dulce y un picor audaz." },
    { id: 11, nombre: "Tomate de Árbol Picante", presentacion: "255 ml", precioUSD: 3.72, foto: "nodisponible-1.jpg", chef: "Excelente para empanadas, tequeños, carnes a la parrilla y platos típicos andinos.", desc: "La Salsa de Tomate de Árbol Picante rescata los sabores tradicionales con un toque gourmet. El sabor profundo y ligeramente amargo del tomate de árbol se equilibra con dulce y un picor audaz." },
    { id: 12, nombre: "Guayaba con Jengibre", presentacion: "150 ml", precioUSD: 2.70, foto: "salsa-guayaba-picante-con-jengibre-150-ml.jpg", chef: "Maravillosa con queso crema, galletas saladas, jamón horneado y carnes blancas.", desc: "Nuestra Salsa de Guayaba Picante con Jengibre es una joya artesanal. El dulzor inconfundible de la guayaba roja se realza con la chispa del jengibre y un sutil toque de ají, creando una experiencia agridulce única." },
    { id: 13, nombre: "Guayaba con Jengibre", presentacion: "255 ml", precioUSD: 3.72, foto: "Salsa-Guayaba-Picante-con-Jengibre-255-ml.jpg", chef: "Maravillosa con queso crema, galletas saladas, jamón horneado y carnes blancas.", desc: "Nuestra Salsa de Guayaba Picante con Jengibre es una joya artesanal. El dulzor inconfundible de la guayaba roja se realza con la chispa del jengibre y un sutil toque de ají, creando una experiencia agridulce única." },
    { id: 14, nombre: "Cebolla Caramelizada", presentacion: "150 ml", precioUSD: 2.70, foto: "salsa-cebolla-150-ml.jpg", chef: "Indispensable en hamburguesas gourmet, sándwiches de pernil, carnes al grill y tablas de quesos.", desc: "Nuestra Salsa de Cebolla Caramelizada es el resultado de una cocción lenta y amorosa. Logramos extraer el azúcar natural de la cebolla para crear una textura sedosa y un sabor profundo que realza cualquier plato." },
    { id: 15, nombre: "Cebolla Caramelizada", presentacion: "255 ml", precioUSD: 3.72, foto: "salsa-cebolla-caramelizada-255-ml.jpg", chef: "Indispensable en hamburguesas gourmet, sándwiches de pernil, carnes al grill y tablas de quesos.", desc: "Nuestra Salsa de Cebolla Caramelizada es el resultado de una cocción lenta y amorosa. Logramos extraer el azúcar natural de la cebolla para crear una textura sedosa y un sabor profundo que realza cualquier plato." },
    { id: 16, nombre: "Alioli de Ajo Española", presentacion: "150 ml", precioUSD: 3.00, foto: "salsa-aioli-de-ajo-Española-natural-150-ml.jpg", chef: "Perfecta para papas bravas, pescados, mariscos, carnes a la plancha y como base para sándwiches.", desc: "El Alioli de Ajo Española es una emulsión clásica, cremosa e intensa. Utilizamos ajos de la mejor calidad para garantizar un aroma y sabor potentes que respetan la receta tradicional mediterránea." },
    { id: 17, nombre: "Alioli de Ajo Picante", presentacion: "150 ml", precioUSD: 3.10, foto: "salsa-aioli-de-ajo-Española-picante-150-ml.jpg", chef: "Ideal para choripanes, carnes rojas, hamburguesas y para quienes buscan un dip con mucha personalidad.", desc: "Para los amantes de las sensaciones fuertes, presentamos el Alioli de Ajo Picante. La cremosidad del ajo se potencia con una mezcla secreta de ajíes picantes, logrando una salsa con cuerpo y mucho carácter." },
    { id: 18, nombre: "Mojo Cilantro y Perejil", presentacion: "150 ml", precioUSD: 3.10, foto: "salsa-mojo-cilantro-y-perejil-150-ml.jpg", chef: "Ideal para carnes a la parrilla, pollos asados, yuca hervida, papas al vapor y como aderezo de ensaladas.", desc: "Nuestro Mojo de Cilantro y Perejil es frescura embotellada. Elaborado con hierbas recién cosechadas y un toque de especias, es el acompañante verde perfecto para resaltar el sabor natural de tus alimentos." },
    { id: 19, nombre: "Salsa Ají Dulce & Mayo", presentacion: "150 ml", precioUSD: 3.00, foto: "salsa-aji-dulce-&-mayonesa-150-ml.jpg", chef: "Ideal para dipping de tequeños, empanaditas, rellenos de sándwiches y como aderezo en ensaladas frescas.", desc: "La Salsa de Ají Dulce & Mayonesa captura el aroma más emblemático de la cocina venezolana. La suavidad de nuestra mayonesa artesanal se combina con la fragancia inconfundible del ají dulce." },
    { id: 20, nombre: "Salsa Ají Dulce & Mayo", presentacion: "260 ml", precioUSD: 4.72, foto: "salsa-aji-dulce-&-mayonesa-260-ml.jpg", chef: "Ideal para dipping de tequeños, empanaditas, rellenos de sándwiches y como aderezo en ensaladas frescas.", desc: "La Salsa de Ají Dulce & Mayonesa captura el aroma más emblemático de la cocina venezolana. La suavidad de nuestra mayonesa artesanal se combina con la fragancia inconfundible del ají dulce." },
    { id: 21, nombre: "Aceite de Onoto", presentacion: "150 ml", precioUSD: 3.10, foto: "aceite-de-onoto-150-ml.jpg", chef: "Base fundamental para sofritos, arroces, guisos de hallacas y para darle un color dorado natural a cualquier preparación.", desc: "Nuestro Aceite de Onoto es pura tradición. Extraemos el color y aroma de las semillas de onoto en un aceite vegetal de alta calidad, garantizando un ingrediente libre de colorantes artificiales." },
    { id: 22, nombre: "Salsa de Onoto", presentacion: "150 ml", precioUSD: 3.50, foto: "salsa-de-onoto-150-ml.jpg", chef: "Indispensable para guisos criollos, sopas, granos y para la masa de preparaciones tradicionales.", desc: "La Salsa de Onoto ofrece una concentración superior de color y sabor. Es un aliado en la cocina para quienes buscan la estética tradicional de los platos venezolanos con la facilidad de una salsa lista para usar." },
    { id: 23, nombre: "Salsa de Onoto", presentacion: "500 ml", precioUSD: 6.50, foto: "salsa-onoto-500-ml.jpg", chef: "Indispensable para guisos criollos, sopas, granos y para la masa de preparaciones tradicionales.", desc: "La Salsa de Onoto ofrece una concentración superior de color y sabor. Es un aliado en la cocina para quienes buscan la estética tradicional de los platos venezolanos con la facilidad de una salsa lista para usar." },
    { id: 24, nombre: "Pasta De Onoto", presentacion: "330 ml", precioUSD: 5.50, foto: "pasta-onoto-330-ml.jpg", chef: "Ideal para grandes producciones de hallacas, guisos industriales o restaurantes que buscan máxima eficiencia y color.", desc: "La Pasta de Onoto es nuestra presentación más concentrada. Solo una pequeña cantidad es suficiente para aportar un color intenso y natural a grandes volúmenes de comida." },
    { id: 25, nombre: "Pasta de Onoto", presentacion: "200 gr", precioUSD: 2.92, foto: "pasta-de-onoto-200-gr.jpg", chef: "Perfecta para el hogar, fácil de almacenar y utilizar en guisos diarios y sofritos.", desc: "Nuestra Pasta de Onoto en formato de 200gr ofrece la misma concentración y pureza para el uso cotidiano en la cocina familiar, facilitando el toque de color tradicional." },
    { id: 26, nombre: "Pasta de Onoto", presentacion: "300 gr", precioUSD: 3.80, foto: "pasta-de-onoto-300-gr.jpg", chef: "Ideal para marinar carnes dándoles un tono dorado apetitoso.", desc: "Consistencia perfecta para aplicaciones directas o diluidas en aceites y caldos." },
    { id: 27, nombre: "Pasta de Onoto", presentacion: "480 gr", precioUSD: 5.10, foto: "pasta-de-onoto-480-gr.jpg", chef: "El secreto de un guiso profesional para grandes celebraciones.", desc: "El aliado número uno de la cocina criolla en formato de alta durabilidad." },
    { id: 28, nombre: "Vinagre de Tamarindo", presentacion: "150 ml", precioUSD: 2.00, foto: "vinagre-de-tamarindo-150-ml.jpg", chef: "Úsalo para crear vinagretas para ensaladas, para desglasar sartenes de carne o para marinar pescados.", desc: "El Vinagre de Tamarindo es una innovación de E.D.P. Gourmet. Aprovechamos la acidez natural del tamarindo para crear un vinagre con personalidad, notas frutales y un perfil de sabor refrescante." },
    { id: 29, nombre: "Vinagre de Tamarindo", presentacion: "500 ml", precioUSD: 5.20, foto: "vinagre-de-tamarindo-500-ml.jpg", chef: "Úsalo para crear vinagretas para ensaladas, para desglasar sartenes de carne o para marinar pescados.", desc: "El Vinagre de Tamarindo es una innovación de E.D.P. Gourmet. Aprovechamos la acidez natural del tamarindo para crear un vinagre con personalidad, notas frutales y un perfil de sabor refrescante." },
    { id: 30, nombre: "Untable Tamarindo", presentacion: "200 gr", precioUSD: 2.92, foto: "crema-untable-tamarindo-200-gr.jpg", chef: "Deliciosa en desayunos con pan tostado, panquecas o galletas. También funciona como relleno para repostería.", desc: "La Crema Untable de Tamarindo es la versión dulce y cremosa de nuestra fruta estrella. Con una textura suave y un sabor equilibrado, es perfecta para darle un toque exótico a tus meriendas." },
    { id: 31, nombre: "Untable Tamarindo", presentacion: "400 gr", precioUSD: 5.90, foto: "crema-untable-tamarindo-400-gr.jpg", chef: "Deliciosa en desayunos con pan tostado, panquecas o galletas. También funciona como relleno para repostería.", desc: "La Crema Untable de Tamarindo es la versión dulce y cremosa de nuestra fruta estrella. Con una textura suave y un sabor equilibrado, es perfecta para darle un toque exótico a tus meriendas." },
    { id: 32, nombre: "Untable Parchita", presentacion: "200 gr", precioUSD: 2.92, foto: "crema-untable.parchita-200-gr.jpg", chef: "Ideal para untar en pan dulce, galletas de mantequilla o como topping para yogur y helados.", desc: "Nuestra Crema Untable de Parchita captura la esencia vibrante de la fruta de la pasión. Es una combinación cremosa y dulce con ese toque ácido característico que refresca el paladar." },
    { id: 33, nombre: "Untable Parchita", presentacion: "400 gr", precioUSD: 5.90, foto: "crema-untable.parchita-400-gr.jpg", chef: "Ideal para untar en pan dulce, galletas de mantequilla o como topping para yogur y helados.", desc: "Nuestra Crema Untable de Parchita captura la esencia vibrante de la fruta de la pasión. Es una combinación cremosa y dulce con ese toque ácido característico que refresca el paladar." },
    { id: 34, nombre: "Untable Mango", presentacion: "200 gr", precioUSD: 2.92, foto: "crema.untable-mango-200-gr.jpg", chef: "Perfecta para acompañar quesos blancos, rellenar crepes o simplemente sola con pan.", desc: "La Crema Untable de Mango es puro sol en un frasco. Hecha con pulpa de mango maduro, esta crema es suave, aromática y profundamente dulce, ideal para los amantes de los sabores tropicales." },
    { id: 35, nombre: "Untable Mango", presentacion: "400 gr", precioUSD: 5.90, foto: "crema.untable-mango-400-gr.jpg", chef: "Perfecta para acompañar quesos blancos, rellenar crepes o simplemente sola con pan.", desc: "La Crema Untable de Mango es puro sol en un frasco. Hecha con pulpa de mango maduro, esta crema es suave, aromática y profundamente dulce, ideal para los amantes de los sabores tropicales." }
];

let carrito = [];

window.addEventListener('load', () => {
    document.getElementById('tasa-val').innerText = tasaBCV.toFixed(2);
    renderizarCatalog();
    if(localStorage.getItem('edp_user_email')) {
        document.getElementById('auth-wall').style.display = 'none';
    }
});

function renderizarCatalog() {
    const catalog = document.getElementById('catalog');
    if(!catalog) return;
    
    catalog.innerHTML = productos.map(p => `
        <div class="card" style="width: 350px; min-height: 750px; background: white; border-radius: 15px; margin: 15px; box-shadow: 0 5px 15px rgba(0,0,0,0.1); overflow: hidden; display: flex; flex-direction: column;">
            <div style="width: 100%; height: 280px; display: flex; align-items: center; justify-content: center; background: white;">
                <img src="img/${p.foto}" style="max-width: 90%; max-height: 90%; object-fit: contain;" onerror="this.src='https://via.placeholder.com/300x300?text=EDP+GOURMET'">
            </div>
            <div style="padding: 25px; flex-grow: 1; display: flex; flex-direction: column;">
                <h3 style="color: #630E16; font-size: 24px; margin: 0; font-weight: 800; text-transform: uppercase;">${p.nombre}</h3>
                <div style="font-size: 18px; color: #666; font-weight: bold; margin: 5px 0 15px;">${p.presentacion}</div>
                <div style="font-size: 15px; color: #333; line-height: 1.6; margin-bottom: 15px; text-align: justify;">${p.desc}</div>
                <div style="background: #fffde7; border-left: 5px solid #FFD700; padding: 15px; font-size: 14px; border-radius: 5px; margin-bottom: 20px;">
                    <strong style="color: #630E16;">👨‍🍳 Sugerencia:</strong><br>${p.chef}
                </div>
                <div style="margin-top: auto;">
                    <div style="background: #f9f9f9; padding: 15px; border-radius: 10px; text-align: center; border: 1px solid #eee; margin-bottom: 15px;">
                        <div style="font-size: 28px; font-weight: 900;">$${p.precioUSD.toFixed(2)}</div>
                        <div style="font-size: 18px; color: #630E16; font-weight: bold;">Bs ${(p.precioUSD * tasaBCV).toFixed(2)}</div>
                    </div>
                    <button onclick="addToCart(${p.id})" style="background: #630E16; color: white; border: none; padding: 18px; border-radius: 10px; font-weight: bold; width: 100%; cursor: pointer;">AÑADIR AL PEDIDO</button>
                </div>
            </div>
        </div>
    `).join('');
}

window.addToCart = function(id) {
    const prod = productos.find(x => x.id === id);
    carrito.push(prod);
    updateUI();
};

function updateUI() {
    document.getElementById('cart-count').innerText = carrito.length;
    const total = carrito.reduce((s, p) => s + p.precioUSD, 0);
    const totalBS = (total * tasaBCV).toFixed(2);
    document.getElementById('total-info').innerText = `$${total.toFixed(2)} / Bs ${totalBS}`;
    
    document.getElementById('cart-items').innerHTML = carrito.map((p, i) => `
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px; border-bottom:1px solid #eee; padding-bottom:5px;">
            <span style="font-size:14px;">${p.nombre} (${p.presentacion})</span>
            <button onclick="remove(${i})" style="color:red; border:none; background:none; cursor:pointer;">✕</button>
        </div>
    `).join('');
}

window.remove = (i) => { carrito.splice(i, 1); updateUI(); };
window.toggleCart = () => { 
    const m = document.getElementById('cart-modal');
    m.style.display = (m.style.display === 'flex') ? 'none' : 'flex';
};

document.getElementById('auth-form').onsubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('edp_user_name', document.getElementById('user-name').value);
    localStorage.setItem('edp_user_email', document.getElementById('user-email').value);
    localStorage.setItem('edp_user_phone', document.getElementById('user-phone').value);
    document.getElementById('auth-wall').style.display = 'none';
};

document.getElementById('checkout-form').onsubmit = (e) => {
    e.preventDefault();
    if(carrito.length === 0) return alert("El carrito está vacío.");

    const user = localStorage.getItem('edp_user_name');
    const pay = document.getElementById('payment-method').value;
    const ship = document.getElementById('shipping-method').value;
    const addr = document.getElementById('shipping-address').value;
    
    const totalUSD = carrito.reduce((s, p) => s + p.precioUSD, 0).toFixed(2);
    const totalBS = (totalUSD * tasaBCV).toFixed(2);

    let msg = `*NUEVO PEDIDO E.D.P. GOURMET*\n`;
    msg += `--------------------------\n`;
    msg += `👤 *Cliente:* ${user}\n`;
    msg += `💰 *Pago:* ${pay}\n`;
    msg += `🚚 *Envío:* ${ship}\n`;
    msg += `📍 *Dirección:* ${addr}\n\n`;
    msg += `*PRODUCTOS:*\n`;
    
    const resumen = {};
    carrito.forEach(p => {
        const key = `${p.nombre} (${p.presentacion})`;
        resumen[key] = (resumen[key] || 0) + 1;
    });
    
    for (const [prod, cant] of Object.entries(resumen)) {
        msg += `• ${cant}x ${prod}\n`;
    }
    
    msg += `\n💵 *TOTAL:* $${totalUSD} / Bs ${totalBS}\n`;
    msg += `--------------------------\n`;
    msg += `_Hola Alfredo, ya realicé mi pago. Adjunto el comprobante._`;
    
    window.open(`https://wa.me/${WHATSAPP_DESTINO}?text=${encodeURIComponent(msg)}`);
};
