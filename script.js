// 1. CONFIGURACIÓN DE TASA
const tasaBCV = 54.50; 

// 2. BASE DE DATOS DE PRODUCTOS (35 ÍTEMS)
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
    { id: 20, nombre: "Salsa Ají Dulce & Mayo", presentacion: "150 ml", precioUSD: 3.00, foto: "salsa-aji-dulce-&-mayonesa-150-ml.jpg", chef: "Sabor venezolano ideal para dipping.", desc: "Cremosa con el aroma inconfundible del ají dulce nacional." },
    { id: 21, nombre: "Salsa Ají Dulce & Mayo", presentacion: "260 ml", precioUSD: 4.72, foto: "salsa-aji-dulce-&-mayonesa-260-ml.jpg", chef: "Perfecta para ensaladas de gallina.", desc: "Versión XL de nuestra salsa más querida." },
    { id: 22, nombre: "Aceite de Onoto", presentacion: "150 ml", precioUSD: 3.10, foto: "aceite-de-onoto-150-ml.jpg", chef: "Color y sabor natural para tus sofritos.", desc: "Extracción pura de semillas de onoto en aceite premium." },
    { id: 23, nombre: "Salsa de Onoto", presentacion: "150 ml", precioUSD: 3.50, foto: "salsa-de-onoto-150-ml.jpg", chef: "Indispensable en arroces y guisos.", desc: "Base de color natural sin aditivos químicos." },
    { id: 24, nombre: "Salsa de Onoto", presentacion: "500 ml", precioUSD: 6.50, foto: "salsa-onoto-500-ml.jpg", chef: "Presentación ahorro para cocinas activas.", desc: "Medio litro de tradición para tu hogar." },
    { id: 25, nombre: "Pasta De Onoto", presentacion: "330 ml", precioUSD: 5.50, foto: "pasta-onoto-330-ml.jpg", chef: "Máxima concentración de color para tus hallacas.", desc: "Pasta densa y potente para grandes preparaciones." },
    { id: 26, nombre: "Pasta de Onoto", presentacion: "200 gr", precioUSD: 2.92, foto: "pasta-de-onoto-200-gr.jpg", chef: "Fácil de diluir en aceites calientes.", desc: "Color concentrado en formato práctico." },
    { id: 27, nombre: "Pasta de Onoto", presentacion: "300 gr", precioUSD: 3.80, foto: "pasta-de-onoto-300-gr.jpg", chef: "Ideal para marinar carnes blancas.", desc: "Consistencia perfecta para aplicaciones directas." },
    { id: 28, nombre: "Pasta de Onoto", presentacion: "480 gr", precioUSD: 5.10, foto: "pasta-de-onoto-480-gr.jpg", chef: "El secreto de un guiso profesional.", desc: "El aliado número uno de la cocina criolla." },
    { id: 29, nombre: "Vinagre de Tamarindo", presentacion: "150 ml", precioUSD: 2.00, foto: "vinagre-de-tamarindo-150-ml.jpg", chef: "Aporta acidez frutal a tus ensaladas.", desc: "Fermentación natural con el toque cítrico del tamarindo." },
    { id: 30, nombre: "Vinagre de Tamarindo", presentacion: "500 ml", precioUSD: 5.20, foto: "vinagre-de-tamarindo-500-ml.jpg", chef: "Úsalo para encurtir vegetales.", desc: "Presentación grande para los amantes de las vinagretas." },
    { id: 31, nombre: "Untable Tamarindo", presentacion: "200 gr", precioUSD: 2.92, foto: "crema-untable-tamarindo-200-gr.jpg", chef: "Deliciosa con galletas de soda.", desc: "Textura sedosa con sabor intenso a fruta real." },
    { id: 32, nombre: "Untable Tamarindo", presentacion: "400 gr", precioUSD: 5.90, foto: "crema-untable-tamarindo-400-gr.jpg", chef: "Para rellenos de postres creativos.", desc: "Doble placer para tus meriendas." },
    { id: 33, nombre: "Untable Parchita", presentacion: "200 gr", precioUSD: 2.92, foto: "crema-untable.parchita-200-gr.jpg", chef: "Explosión cítrica para tus panes.", desc: "Crema dulce y ácida con semillas trituradas." },
    { id: 34, nombre: "Untable Parchita", presentacion: "400 gr", precioUSD: 5.90, foto: "crema-untable.parchita-400-gr.jpg", chef: "Cubre tus panquecas con esta delicia.", desc: "El postre hecho crema en formato familiar." },
    { id: 35, nombre: "Untable Mango", presentacion: "200 gr", precioUSD: 2.92, foto: "crema.untable-mango-200-gr.jpg", chef: "Sabor a mango maduro para untar.", desc: "Hecha con los mangos más dulces de la temporada." },
    { id: 36, nombre: "Untable Mango", presentacion: "400 gr", precioUSD: 5.90, foto: "crema.untable-mango-400-gr.jpg", chef: "Combínala con yogur natural.", desc: "Fruta concentrada para untar sin límites." }
];

let carrito = [];

// 3. INICIALIZACIÓN
window.addEventListener('load', () => {
    const tasaLabel = document.getElementById('tasa-val');
    if(tasaLabel) tasaLabel.innerText = tasaBCV.toFixed(2);
    
    renderizarProductos();
    actualizarCarritoUI();

    if (!localStorage.getItem('user_name')) {
        document.getElementById('auth-wall').style.display = 'flex';
    } else {
        document.getElementById('auth-wall').style.display = 'none';
    }
});

// 4. LÓGICA DE REGISTRO
document.getElementById('auth-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const nombre = document.getElementById('user-name').value;
    const email = document.getElementById('user-email').value;
    const phone = document.getElementById('user-phone').value;
    
    if(nombre && email && phone) {
        localStorage.setItem('user_name', nombre);
        localStorage.setItem('user_email', email);
        localStorage.setItem('user_phone', phone);
        document.getElementById('auth-wall').style.display = 'none';
    }
});

// 5. RENDERIZADO CON DESCRIPCIONES
function renderizarProductos() {
    const catalog = document.getElementById('catalog');
    if(!catalog) return;
    
    catalog.innerHTML = productos.map(p => `
        <div class="product-card" style="border: 1px solid #ddd; margin: 10px; padding: 15px; border-radius: 12px; background: white; text-align: center; width: 240px; display: inline-block; vertical-align: top; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
            <div style="height: 160px; overflow: hidden; border-radius: 8px;">
                <img src="img/${p.foto}" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.src='https://via.placeholder.com/200?text=EDP+Gourmet'">
            </div>
            <h3 style="color: #630E16; margin: 12px 0 5px 0; font-size: 16px;">${p.nombre}</h3>
            <p style="font-size: 11px; color: #888; margin-bottom: 5px;">${p.presentacion}</p>
            
            <p style="font-size: 10px; color: #555; height: 32px; overflow: hidden; line-height: 1.2; margin-bottom: 10px; border-top: 1px solid #eee; padding-top: 5px;">
                ${p.desc}
            </p>

            <div style="background: #f9f9f9; padding: 8px; border-radius: 8px; margin-bottom: 10px;">
                <p style="font-weight: bold; font-size: 18px; margin: 0; color: #333;">$${p.precioUSD.toFixed(2)}</p>
                <p style="font-size: 13px; color: #630E16; margin: 0; font-weight: bold;">Bs ${(p.precioUSD * tasaBCV).toFixed(2)}</p>
            </div>
            
            <p style="font-size: 10px; font-style: italic; color: #444; margin-bottom: 12px; text-align: left; background: #fff5f5; padding: 5px; border-radius: 4px;">
                👨‍🍳 <b>Sugerencia:</b> ${p.chef}
            </p>
            
            <button onclick="agregarAlCarrito(${p.id})" style="background: #630E16; color: white; border: none; padding: 10px; border-radius: 6px; cursor: pointer; width: 100%; font-weight: bold;">AÑADIR AL PEDIDO</button>
        </div>
    `).join('');
}

// 6. LÓGICA DEL CARRITO
window.agregarAlCarrito = function(id) {
    const producto = productos.find(p => p.id === id);
    carrito.push(producto);
    actualizarCarritoUI();
    const btn = event.target;
    btn.innerText = "¡AÑADIDO!";
    btn.style.background = "#28a745";
    setTimeout(() => {
        btn.innerText = "AÑADIR AL PEDIDO";
        btn.style.background = "#630E16";
    }, 1000);
}

function actualizarCarritoUI() {
    document.getElementById('cart-count').innerText = carrito.length;
    const totalUSD = carrito.reduce((sum, p) => sum + p.precioUSD, 0);
    document.getElementById('total-usd').innerText = `$${totalUSD.toFixed(2)}`;
    document.getElementById('total-bs').innerText = `Bs ${(totalUSD * tasaBCV).toFixed(2)}`;
    
    const cartItems = document.getElementById('cart-items');
    if(cartItems) {
        cartItems.innerHTML = carrito.map((p, index) => `
            <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #eee; padding: 5px 0;">
                <div style="text-align: left;">
                    <p style="margin:0; font-weight:bold; font-size: 12px;">${p.nombre}</p>
                    <small style="color: #666;">${p.presentacion}</small>
                </div>
                <div>
                    <span style="font-size: 12px;">$${p.precioUSD.toFixed(2)}</span>
                    <button onclick="quitarDelCarrito(${index})" style="background:none; border:none; color:red; cursor:pointer;">✕</button>
                </div>
            </div>
        `).join('');
    }
}

window.quitarDelCarrito = function(index) {
    carrito.splice(index, 1);
    actualizarCarritoUI();
}

window.toggleCart = function() {
    document.getElementById('cart-modal').classList.toggle('hidden');
}

// 7. FINALIZAR WHATSAPP
document.getElementById('checkout-form').addEventListener('submit', function(e) {
    e.preventDefault();
    if(carrito.length === 0) return alert("Carrito vacío");

    const nombre = localStorage.getItem('user_name');
    const metodo = document.getElementById('payment-method').value;
    const direccion = document.getElementById('shipping-address').value;
    
    let msg = `*NUEVO PEDIDO E.D.P. GOURMET*\n`;
    msg += `--------------------------\n`;
    msg += `*Cliente:* ${nombre}\n\n`;
    carrito.forEach(p => msg += `• ${p.nombre} (${p.presentacion}) - $${p.precioUSD.toFixed(2)}\n`);
    msg += `\n*TOTAL:* ${document.getElementById('total-usd').innerText} / ${document.getElementById('total-bs').innerText}\n`;
    msg += `*PAGO:* ${metodo}\n`;
    msg += `*DIRECCIÓN:* ${direccion}\n`;
    
    window.open(`https://wa.me/584124110300?text=${encodeURIComponent(msg)}`, '_blank');
});
