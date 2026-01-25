// 1. CONFIGURACIÓN DE TASA (Cámbiala aquí cuando varíe el BCV)
const tasaBCV = 54.50; 

// 2. BASE DE DATOS DE LOS 35 PRODUCTOS
const productos = [
    { id: 1, nombre: "Salsa Tamarindo Agridulce", presentacion: "150 ml", precioUSD: 2.70, foto: "salsa-tamarindo-agridukce-150-ml.jpg", chef: "Ideal para costillitas de cerdo, langostinos y carnes blancas al horno.", desc: "Elaborada con pulpa natural de tamarindos seleccionados. El equilibrio perfecto entre dulce y cítrico." },
    { id: 2, nombre: "Salsa Tamarindo Agridulce", presentacion: "255 ml", precioUSD: 3.72, foto: "salsa-tamarindo-agridulce-255-ml.jpg", chef: "Nuestra presentación familiar, perfecta para eventos y parrilladas.", desc: "Misma receta artesanal en envase de vidrio de mayor capacidad. Calidad premium garantizada." },
    { id: 3, nombre: "Salsa Tamarindo Picante", presentacion: "150 ml", precioUSD: 2.70, foto: "salsa-tamarindo-agridulce-picante-150-ml.jpg", chef: "Excelente para alitas de pollo, comida asiática y tacos.", desc: "Base de tamarindo con un toque equilibrado de ají picante que resalta sin opacar el fruto." },
    { id: 4, nombre: "Salsa Tamarindo Picante", presentacion: "255 ml", precioUSD: 3.72, foto: "salsa-tamarindo-agridulce-picante-255-ml.jpg", chef: "Potencia el sabor de tus carnes rojas a la brasa o marinados.", desc: "Fusión tropical explosiva en presentación familiar para los amantes del picante." },
    { id: 5, nombre: "Salsa Papaya Aderezo", presentacion: "150 ml", precioUSD: 2.70, foto: "salsa-papaya-aderezo-150-ml.jpg", chef: "Perfecta para ensaladas verdes, carpaccios y pescados blancos.", desc: "Aderezo suave, digestivo y exótico que aporta un aroma único a tus platos saludables." },
    { id: 6, nombre: "Maracuyá con Jengibre", presentacion: "150 ml", precioUSD: 2.70, foto: "salsa-maracuya-picante-con-jengibre-150-ml.jpg", chef: "Acompañante de lujo para salmón, atún o quesos madurados.", desc: "Notas intensas de la fruta de la pasión con el frescor aromático del jengibre natural." },
    { id: 7, nombre: "Maracuyá con Jengibre", presentacion: "255 ml", precioUSD: 3.72, foto: "salsa-maracuya-picante-con-jengibre-255-ml.jpg", chef: "Úsala como base para crear vinagretas gourmet en casa.", desc: "Versión familiar de nuestra salsa más refrescante y sofisticada." },
    { id: 8, nombre: "Mango con Jalapeño", presentacion: "150 ml", precioUSD: 2.70, foto: "salsa-mango-agridulce-con-Jalapeño-150-ml.jpg", chef: "El toque ideal para tus wraps, comida mexicana y snacks.", desc: "Mango maduro seleccionado combinado con trocitos de jalapeño para un sabor vibrante." },
    { id: 9, nombre: "Mango con Jalapeño", presentacion: "255 ml", precioUSD: 3.72, foto: "salsa-mango-agridulce-con-Jalapeño-255-ml.jpg", chef: "Úsala para glasear jamón o pollo durante el horneado.", desc: "Combinación dulce-picante en envase grande para preparaciones especiales." },
    { id: 10, nombre: "Tomate de Árbol Picante", presentacion: "150 ml", precioUSD: 2.70, foto: "salsa-tomate-de-arbol-agridulce-picante-150-ml.jpg", chef: "Sabor tradicional ideal para empanadas y pasapalos fritos.", desc: "Rescatamos el sabor ancestral del tomate de árbol con un toque picante criollo." },
    { id: 11, nombre: "Tomate de Árbol Picante", presentacion: "255 ml", precioUSD: 3.72, foto: "nodisponible-1.jpg", chef: "La pareja perfecta para tablas de quesos y embutidos.", desc: "Receta gourmet concentrada para paladares que buscan lo auténtico." },
    { id: 12, nombre: "Guayaba con Jengibre", presentacion: "150 ml", precioUSD: 2.70, foto: "salsa-guayaba-picante-con-jengibre-150-ml.jpg", chef: "Sorprendente sobre queso crema o para marinar carnes de cerdo.", desc: "Dulzor natural de la guayaba roja infusionada con jengibre fresco." },
    { id: 13, nombre: "Guayaba con Jengibre", presentacion: "255 ml", precioUSD: 3.72, foto: "Salsa-Guayaba-Picante-con-Jengibre-255-ml.jpg", chef: "Ideal para rellenos de hojaldres y postres agridulces.", desc: "Fusión frutal única que deleita por su aroma y textura sedosa." },
    { id: 14, nombre: "Cebolla Caramelizada", presentacion: "150 ml", precioUSD: 2.70, foto: "salsa-cebolla-150-ml.jpg", chef: "Eleva tus hamburguesas y sándwiches a un nivel gourmet.", desc: "Cebollas procesadas lentamente hasta lograr su punto exacto de dulzor natural." },
    { id: 15, nombre: "Cebolla Caramelizada", presentacion: "255 ml", precioUSD: 3.72, foto: "salsa-cebolla-caramelizada-255-ml.jpg", chef: "Úsala como base para pizzas gourmet o carnes al vino.", desc: "Un básico de la cocina elegante ahora en presentación familiar." },
    { id: 16, nombre: "Alioli de Ajo Española", presentacion: "150 ml", precioUSD: 3.00, foto: "salsa-aioli-de-ajo-Española-natural-150-ml.jpg", chef: "Tradición pura para papas bravas, pescados y mariscos.", desc: "Emulsión cremosa de ajo morado siguiendo la receta original mediterránea." },
    { id: 17, nombre: "Alioli de Ajo Picante", presentacion: "150 ml", precioUSD: 3.10, foto: "salsa-aioli-de-ajo-Española-picante-150-ml.jpg", chef: "Perfecto para choripanes y carnes blancas con carácter.", desc: "Nuestro alioli tradicional reforzado con un toque de ají para los valientes." },
    { id: 18, nombre: "Mojo Cilantro y Perejil", presentacion: "150 ml", precioUSD: 3.10, foto: "salsa-mojo-cilantro-y-perejil-150-ml.jpg", chef: "El alma de las parrilladas, yuca hervida y arepas.", desc: "Hierbas frescas procesadas con aceites y especias para un sabor casero real." },
    { id: 19, nombre: "Salsa Ají Dulce & Mayo", presentacion: "150 ml", precioUSD: 3.00, foto: "salsa-aji-dulce-&-mayonesa-150-ml.jpg", chef: "Sabor 100% venezolano para dipping de snacks y galletas.", desc: "Cremosa base de mayonesa infusionada con el aroma del ají dulce nacional." },
    { id: 20, nombre: "Salsa Ají Dulce & Mayo", presentacion: "260 ml", precioUSD: 4.72, foto: "salsa-aji-dulce-&-mayonesa-260-ml.jpg", chef: "Ideal para aderezar ensaladas de gallina o wraps de pollo.", desc: "Presentación XL de nuestra salsa más emblemática y pedida." },
    { id: 21, nombre: "Aceite de Onoto", presentacion: "150 ml", precioUSD: 3.10, foto: "aceite-de-onoto-150-ml.jpg", chef: "El secreto para sofritos con color vibrante y sabor tradicional.", desc: "Aceite vegetal premium extraído en frío con semillas de onoto de primera." },
    { id: 22, nombre: "Salsa de Onoto", presentacion: "150 ml", precioUSD: 3.50, foto: "salsa-de-onoto-150-ml.jpg", chef: "Indispensable en arroces, guisos y platos típicos navideños.", desc: "Base de color natural concentrada, sin aditivos químicos ni conservantes." },
    { id: 23, nombre: "Salsa de Onoto", presentacion: "500 ml", precioUSD: 6.50, foto: "salsa-onoto-500-ml.jpg", chef: "Presentación ahorro para cocinas activas y grandes familias.", desc: "Medio litro de tradición para dar color y sabor a todas tus comidas." },
    { id: 24, nombre: "Pasta De Onoto", presentacion: "330 ml", precioUSD: 5.50, foto: "pasta-onoto-330-ml.jpg", chef: "Máxima concentración de color para la masa de tus hallacas.", desc: "Pasta densa y potente. Rinde mucho más por su alta pureza de onoto." },
    { id: 25, nombre: "Pasta de Onoto", presentacion: "200 gr", precioUSD: 2.92, foto: "pasta-de-onoto-200-gr.jpg", chef: "Fácil de diluir en aceites o caldos calientes para guisos.", desc: "El aliado número uno de la cocina criolla en formato práctico." },
    { id: 26, nombre: "Pasta de Onoto", presentacion: "300 gr", precioUSD: 3.80, foto: "pasta-de-onoto-300-gr.jpg", chef: "Ideal para marinar carnes dándoles un tono dorado apetitoso.", desc: "Consistencia perfecta para aplicaciones directas o diluidas." },
    { id: 27, nombre: "Pasta de Onoto", presentacion: "480 gr", precioUSD: 5.10, foto: "pasta-de-onoto-480-gr.jpg", chef: "El secreto de los mejores cocineros para un guiso profesional.", desc: "Gran formato para temporadas de alta cocina tradicional." },
    { id: 28, nombre: "Vinagre de Tamarindo", presentacion: "150 ml", precioUSD: 2.00, foto: "vinagre-de-tamarindo-150-ml.jpg", chef: "Aporta una acidez frutal única a tus ensaladas y encurtidos.", desc: "Fermentación natural de tamarindo que realza los sabores vegetales." },
    { id: 29, nombre: "Vinagre de Tamarindo", presentacion: "500 ml", precioUSD: 5.20, foto: "vinagre-de-tamarindo-500-ml.jpg", chef: "Úsalo para crear tus propios aderezos caseros de larga duración.", desc: "Botella grande de vinagre artesanal con esencia de fruta real." },
    { id: 30, nombre: "Untable Tamarindo", presentacion: "200 gr", precioUSD: 2.92, foto: "crema-untable-tamarindo-200-gr.jpg", chef: "Deliciosa con pan tostado, galletas de soda o quesos frescos.", desc: "Crema sedosa con el sabor intenso y agridulce del tamarindo maduro." },
    { id: 31, nombre: "Untable Tamarindo", presentacion: "400 gr", precioUSD: 5.90, foto: "crema-untable-tamarindo-400-gr.jpg", chef: "Excelente para rellenos de repostería creativa y meriendas.", desc: "El doble de sabor para compartir en desayunos o postres." },
    { id: 32, nombre: "Untable Parchita", presentacion: "200 gr", precioUSD: 2.92, foto: "crema-untable.parchita-200-gr.jpg", chef: "Explosión cítrica ideal para panquecas y meriendas infantiles.", desc: "Elaborada con pulpa de parchita fresca. Dulce con la acidez justa." },
    { id: 33, nombre: "Untable Parchita", presentacion: "400 gr", precioUSD: 5.90, foto: "crema-untable.parchita-400-gr.jpg", chef: "Cubre tus tartas o combínala con yogur natural.", desc: "Presentación familiar de nuestra crema cítrica más vendida." },
    { id: 34, nombre: "Untable Mango", presentacion: "200 gr", precioUSD: 2.92, foto: "crema.untable-mango-200-gr.jpg", chef: "Sabor a mango maduro para untar en cualquier tipo de pan.", desc: "Capturamos el dulzor del sol en esta crema de mango artesanal." },
    { id: 35, nombre: "Untable Mango", presentacion: "400 gr", precioUSD: 5.90, foto: "crema.untable-mango-400-gr.jpg", chef: "Úsala como topping en helados de vainilla o postres lácteos.", desc: "Máximo formato para los amantes de la fruta tropical." }
];

let carrito = [];

// 3. INICIALIZACIÓN
window.addEventListener('load', () => {
    document.getElementById('tasa-val').innerText = tasaBCV.toFixed(2);
    renderizarCatalog();
    
    // Si ya existe el correo, ocultamos el muro
    if(localStorage.getItem('edp_user_email')) {
        document.getElementById('auth-wall').style.display = 'none';
    } else {
        document.getElementById('auth-wall').style.display = 'flex';
    }
});

// 4. RENDERIZADO DEL CATÁLOGO
function renderizarCatalog() {
    const catalog = document.getElementById('catalog');
    if(!catalog) return;
    
    catalog.innerHTML = productos.map(p => `
        <div class="card">
            <div class="img-container">
                <img src="img/${p.foto}" onerror="this.src='https://via.placeholder.com/300x300?text=EDP+GOURMET'">
            </div>
            <div class="info">
                <h3 class="titulo">${p.nombre}</h3>
                <div class="presentacion">${p.presentacion}</div>
                <div class="descripcion">${p.desc}</div>
                <div class="chef-box">
                    <strong>👨‍🍳 Sugerencia del Chef:</strong><br>${p.chef}
                </div>
                <div class="precios">
                    <span class="precio-usd">$${p.precioUSD.toFixed(2)}</span>
                    <span class="precio-bs">Bs ${(p.precioUSD * tasaBCV).toFixed(2)}</span>
                </div>
                <button class="btn-agregar" onclick="addToCart(${p.id})">AÑADIR AL PEDIDO</button>
            </div>
        </div>
    `).join('');
}

// 5. LÓGICA DEL CARRITO
window.addToCart = function(id) {
    const prod = productos.find(x => x.id === id);
    carrito.push(prod);
    updateUI();
    
    // Feedback visual en el botón
    const btn = event.target;
    btn.innerText = "¡AÑADIDO!";
    btn.style.background = "#28a745";
    setTimeout(() => {
        btn.innerText = "AÑADIR AL PEDIDO";
        btn.style.background = "#630E16";
    }, 1000);
};

function updateUI() {
    document.getElementById('cart-count').innerText = carrito.length;
    const total = carrito.reduce((s, p) => s + p.precioUSD, 0);
    
    const totalUSD = total.toFixed(2);
    const totalBS = (total * tasaBCV).toFixed(2);
    document.getElementById('total-info').innerText = `$${totalUSD} / Bs ${totalBS}`;
    
    const container = document.getElementById('cart-items');
    if(container) {
        container.innerHTML = carrito.map((p, i) => `
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px; border-bottom:1px solid #eee; padding-bottom:5px;">
                <div style="text-align:left;">
                    <b style="font-size:14px;">${p.nombre}</b><br>
                    <small>${p.presentacion} - $${p.precioUSD.toFixed(2)}</small>
                </div>
                <button onclick="remove(${i})" style="color:red; border:none; background:none; cursor:pointer; font-size:18px;">✕</button>
            </div>
        `).join('');
    }
}

window.remove = function(i) {
    carrito.splice(i, 1);
    updateUI();
};

window.toggleCart = function() {
    const m = document.getElementById('cart-modal');
    m.style.display = (m.style.display === 'flex') ? 'none' : 'flex';
};

// 6. FORMULARIOS (REGISTRO Y WHATSAPP)
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
    const telf = localStorage.getItem('edp_user_phone');
    const ship = document.getElementById('shipping-method').value;
    const pay = document.getElementById('payment-method').value;
    const addr = document.getElementById('shipping-address').value;
    
    const totalUSD = carrito.reduce((s, p) => s + p.precioUSD, 0).toFixed(2);
    const totalBS = (totalUSD * tasaBCV).toFixed(2);

    let msg = `*NUEVO PEDIDO EDP GOURMET*\n`;
    msg += `--------------------------\n`;
    msg += `*Cliente:* ${user}\n`;
    msg += `*WhatsApp:* ${telf}\n`;
    msg += `*Envío:* ${ship}\n`;
    msg += `*Pago:* ${pay}\n`;
    msg += `*Dirección:* ${addr}\n\n`;
    msg += `*PRODUCTOS:*\n`;
    
    // Agrupar duplicados para que el mensaje sea más limpio
    const resumen = {};
    carrito.forEach(p => {
        const key = `${p.nombre} (${p.presentacion})`;
        resumen[key] = (resumen[key] || 0) + 1;
    });
    
    for (const [prod, cant] of Object.entries(resumen)) {
        msg += `• ${cant}x ${prod}\n`;
    }
    
    msg += `\n*TOTAL A PAGAR:*\n`;
    msg += `*USD:* $${totalUSD}\n`;
    msg += `*BS:* Bs ${totalBS}\n`;
    msg += `--------------------------\n`;
    msg += `_Por favor, confírmenme los datos de pago para procesar mi envío._`;
    
    window.open(`https://wa.me/584124110300?text=${encodeURIComponent(msg)}`);
};
