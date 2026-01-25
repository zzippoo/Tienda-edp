// 1. CONFIGURACIÓN DE TASA
const tasaBCV = 54.50; 

// 2. BASE DE DATOS OFICIAL (35 PRODUCTOS - TEXTOS DE EXCEL)
const productos = [
    { id: 1, nombre: "Salsa Tamarindo Agridulce", presentacion: "150 ml", precioUSD: 2.70, foto: "salsa-tamarindo-agridukce-150-ml.jpg", chef: "Ideal para costillitas de cerdo y langostinos.", desc: "Pulpa pura de tamarindo con el equilibrio perfecto entre dulce y ácido." },
    { id: 2, nombre: "Salsa Tamarindo Agridulce", presentacion: "255 ml", precioUSD: 3.72, foto: "salsa-tamarindo-agridulce-255-ml.jpg", chef: "El tamaño ideal para tus reuniones familiares.", desc: "Nuestra receta estrella en presentación familiar de vidrio." },
    { id: 3, nombre: "Salsa Tamarindo Picante", presentacion: "150 ml", precioUSD: 2.70, foto: "salsa-tamarindo-agridulce-picante-150-ml.jpg", chef: "Excelente para alitas de pollo y comida asiática.", desc: "Fusión tropical con un picor equilibrado y persistente." },
    { id: 4, nombre: "Salsa Tamarindo Picante", presentacion: "255 ml", precioUSD: 3.72, foto: "salsa-tamarindo-agridulce-picante-255-ml.jpg", chef: "Potencia el sabor de tus carnes rojas a la brasa.", desc: "Presentación grande de nuestra explosiva mezcla agripicante." },
    { id: 5, nombre: "Salsa Papaya Aderezo", presentacion: "150 ml", precioUSD: 2.70, foto: "salsa-papaya-aderezo-150-ml.jpg", chef: "Perfecta para ensaladas tropicales y carpaccios.", desc: "Aderezo suave y digestivo con notas frutales exóticas." },
    { id: 6, nombre: "Maracuyá con Jengibre", presentacion: "150 ml", precioUSD: 2.70, foto: "salsa-maracuya-picante-con-jengibre-150-ml.jpg", chef: "Acompañante de lujo para salmón o pescados.", desc: "Notas cítricas de la pasión con el frescor picante del jengibre." },
    { id: 7, nombre: "Maracuyá con Jengibre", presentacion: "255 ml", precioUSD: 3.72, foto: "salsa-maracuya-picante-con-jengibre-255-ml.jpg", chef: "Atrévete a usarla como base para vinagretas.", desc: "Versión familiar de nuestra salsa más refrescante." },
    { id: 8, nombre: "Mango con Jalapeño", presentacion: "150 ml", precioUSD: 2.70, foto: "salsa-mango-agridulce-con-Jalapeño-150-ml.jpg", chef: "El toque ideal para tus tacos y wraps.", desc: "Mango maduro seleccionado con trocitos de jalapeño genuino." },
    { id: 9, nombre: "Mango con Jalapeño", presentacion: "255 ml", precioUSD: 3.72, foto: "salsa-mango-agridulce-con-Jalapeño-255-ml.jpg", chef: "Úsala para glasear jamón o pollo al horno.", desc: "Sabor vibrante que combina dulzor y picante medio." },
    { id: 10, nombre: "Tomate de Árbol Picante", presentacion: "150 ml", precioUSD: 2.70, foto: "salsa-tomate-de-arbol-agridulce-picante-150-ml.jpg", chef: "Sabor ancestral para empanadas y pasapalos.", desc: "Rescatando sabores tradicionales con un toque de ají." },
    { id: 11, nombre: "Tomate de Árbol Picante", presentacion: "255 ml", precioUSD: 3.72, foto: "nodisponible-1.jpg", chef: "La pareja ideal para quesos madurados.", desc: "Presentación gourmet para amantes de lo tradicional." },
    { id: 12, nombre: "Guayaba con Jengibre", presentacion: "150 ml", precioUSD: 2.70, foto: "salsa-guayaba-picante-con-jengibre-150-ml.jpg", chef: "Sorprendente sobre quesos crema o carnes blancas.", desc: "Dulzor de guayaba roja con el toque aromático del jengibre." },
    { id: 13, nombre: "Guayaba con Jengibre", presentacion: "255 ml", precioUSD: 3.72, foto: "Salsa-Guayaba-Picante-con-Jengibre-255-ml.jpg", chef: "Ideal para rellenos de hojaldres salados.", desc: "Fusión única que deleita el paladar en cada bocado." },
    { id: 14, nombre: "Cebolla Caramelizada", presentacion: "150 ml", precioUSD: 2.70, foto: "salsa-cebolla-150-ml.jpg", chef: "Eleva tu hamburguesa a un nivel gourmet.", desc: "Cebollas cocinadas lentamente hasta alcanzar su dulzor natural." },
    { id: 15, nombre: "Cebolla Caramelizada", presentacion: "255 ml", precioUSD: 3.72, foto: "salsa-cebolla-caramelizada-255-ml.jpg", chef: "Úsala como base para una pizza diferente.", desc: "El acompañante clásico para carnes y quesos potentes." },
    { id: 16, nombre: "Alioli de Ajo Española", presentacion: "150 ml", precioUSD: 3.00, foto: "salsa-aioli-de-ajo-Española-natural-150-ml.jpg", chef: "Tradición pura para papas bravas.", desc: "Emulsión cremosa con ajo morado de aroma intenso." },
    { id: 17, nombre: "Alioli de Ajo Picante", presentacion: "150 ml", precioUSD: 3.10, foto: "salsa-aioli-de-ajo-Española-picante-150-ml.jpg", chef: "Para quienes buscan carácter en sus comidas.", desc: "Nuestro alioli tradicional con un golpe de calor." },
    { id: 18, nombre: "Mojo Cilantro y Perejil", presentacion: "150 ml", precioUSD: 3.10, foto: "salsa-mojo-cilantro-y-perejil-150-ml.jpg", chef: "El alma de las parrilladas y yuca hervida.", desc: "Hierbas frescas procesadas con aceite y especias." },
    { id: 19, nombre: "Salsa Ají Dulce & Mayo", presentacion: "150 ml", precioUSD: 3.00, foto: "salsa-aji-dulce-&-mayonesa-150-ml.jpg", chef: "Sabor venezolano ideal para dipping.", desc: "Cremosa con el aroma inconfundible del ají dulce nacional." },
    { id: 20, nombre: "Salsa Ají Dulce & Mayo", presentacion: "260 ml", precioUSD: 4.72, foto: "salsa-aji-dulce-&-mayonesa-260-ml.jpg", chef: "Perfecta para ensaladas de gallina.", desc: "Versión XL de nuestra salsa más querida." },
    { id: 21, nombre: "Aceite de Onoto", presentacion: "150 ml", precioUSD: 3.10, foto: "aceite-de-onoto-150-ml.jpg", chef: "Color y sabor natural para tus sofritos.", desc: "Extracción pura de semillas de onoto en aceite premium." },
    { id: 22, nombre: "Salsa de Onoto", presentacion: "150 ml", precioUSD: 3.50, foto: "salsa-de-onoto-150-ml.jpg", chef: "Indispensable en arroces y guisos.", desc: "Base de color natural sin aditivos químicos." },
    { id: 23, nombre: "Salsa de Onoto", presentacion: "500 ml", precioUSD: 6.50, foto: "salsa-onoto-500-ml.jpg", chef: "Presentación ahorro para cocinas activas.", desc: "Medio litro de tradición para tu hogar." },
    { id: 24, nombre: "Pasta De Onoto", presentacion: "330 ml", precioUSD: 5.50, foto: "pasta-onoto-330-ml.jpg", chef: "Máxima concentración de color para tus hallacas.", desc: "Pasta densa y potente para grandes preparaciones." },
    { id: 25, nombre: "Pasta de Onoto", presentacion: "200 gr", precioUSD: 2.92, foto: "pasta-de-onoto-200-gr.jpg", chef: "Fácil de diluir en aceites calientes.", desc: "Color concentrado en formato práctico." },
    { id: 26, nombre: "Pasta de Onoto", presentacion: "300 gr", precioUSD: 3.80, foto: "pasta-de-onoto-300-gr.jpg", chef: "Ideal para marinar carnes blancas.", desc: "Consistencia perfecta para aplicaciones directas." },
    { id: 27, nombre: "Pasta de Onoto", presentacion: "480 gr", precioUSD: 5.10, foto: "pasta-de-onoto-480-gr.jpg", chef: "El secreto de un guiso profesional.", desc: "El aliado número uno de la cocina criolla." },
    { id: 28, nombre: "Vinagre de Tamarindo", presentacion: "150 ml", precioUSD: 2.00, foto: "vinagre-de-tamarindo-150-ml.jpg", chef: "Aporta acidez frutal a tus ensaladas.", desc: "Fermentación natural con el toque cítrico del tamarindo." },
    { id: 29, nombre: "Vinagre de Tamarindo", presentacion: "500 ml", precioUSD: 5.20, foto: "vinagre-de-tamarindo-500-ml.jpg", chef: "Úsalo para encurtir vegetales.", desc: "Presentación grande para los amantes de las vinagretas." },
    { id: 30, nombre: "Untable Tamarindo", presentacion: "200 gr", precioUSD: 2.92, foto: "crema-untable-tamarindo-200-gr.jpg", chef: "Deliciosa con galletas de soda.", desc: "Textura sedosa con sabor intenso a fruta real." },
    { id: 31, nombre: "Untable Tamarindo", presentacion: "400 gr", precioUSD: 5.90, foto: "crema-untable-tamarindo-400-gr.jpg", chef: "Para rellenos de postres creativos.", desc: "Doble placer para tus meriendas." },
    { id: 32, nombre: "Untable Parchita", presentacion: "200 gr", precioUSD: 2.92, foto: "crema-untable.parchita-200-gr.jpg", chef: "Explosión cítrica para tus panes.", desc: "Crema dulce y ácida con semillas trituradas." },
    { id: 33, nombre: "Untable Parchita", presentacion: "400 gr", precioUSD: 5.90, foto: "crema-untable.parchita-400-gr.jpg", chef: "Cubre tus panquecas con esta delicia.", desc: "El postre hecho crema en formato familiar." },
    { id: 34, nombre: "Untable Mango", presentacion: "200 gr", precioUSD: 2.92, foto: "crema.untable-mango-200-gr.jpg", chef: "Sabor a mango maduro para untar.", desc: "Hecha con los mangos más dulces de la temporada." },
    { id: 35, nombre: "Untable Mango", presentacion: "400 gr", precioUSD: 5.90, foto: "crema.untable-mango-400-gr.jpg", chef: "Combínala con yogur natural.", desc: "Fruta concentrada para untar sin límites." }
];

let carrito = [];

// 3. INICIALIZACIÓN
window.addEventListener('load', () => {
    document.getElementById('tasa-val').innerText = tasaBCV.toFixed(2);
    renderizarCatalog();
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
    document.getElementById('total-info').innerText = `$${total.toFixed(2)} / Bs ${(total * tasaBCV).toFixed(2)}`;
    
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

// 6. FORMULARIOS
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
    const ship = document.getElementById('shipping-method').value;
    const pay = document.getElementById('payment-method').value;
    const addr = document.getElementById('shipping-address').value;
    
    const totalUSD = carrito.reduce((s, p) => s + p.precioUSD, 0).toFixed(2);
    const totalBS = (totalUSD * tasaBCV).toFixed(2);

    let msg = `*NUEVO PEDIDO EDP GOURMET*\n`;
    msg += `--------------------------\n`;
    msg += `*Cliente:* ${user}\n`;
    msg += `*Envío:* ${ship}\n`;
    msg += `*Pago:* ${pay}\n`;
    msg += `*Dirección:* ${addr}\n\n`;
    msg += `*PRODUCTOS:*\n`;
    
    const resumen = {};
    carrito.forEach(p => {
        const key = `${p.nombre} (${p.presentacion})`;
        resumen[key] = (resumen[key] || 0) + 1;
    });
    
    for (const [prod, cant] of Object.entries(resumen)) {
        msg += `• ${cant}x ${prod}\n`;
    }
    
    msg += `\n*TOTAL:* $${totalUSD} / Bs ${totalBS}\n`;
    
    window.open(`https://wa.me/584124110300?text=${encodeURIComponent(msg)}`);
};
