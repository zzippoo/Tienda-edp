const productos = [
    { nombre: "Salsa Tamarindo Agridulce", presentacion: "150 ml", precioUSD: 2.70, foto: "salsa-tamarindo-agridukce-150-ml.jpg" },
    { nombre: "Salsa Tamarindo Agridulce", presentacion: "255 ml", precioUSD: 3.72, foto: "salsa-tamarindo-agridulce-255-ml.jpg" },
    { nombre: "Salsa Tamarindo Picante", presentacion: "150 ml", precioUSD: 2.70, foto: "salsa-tamarindo-agridulce-picante-150-ml.jpg" },
    { nombre: "Salsa Tamarindo Picante", presentacion: "255 ml", precioUSD: 3.72, foto: "salsa-tamarindo-agridulce-picante-255-ml.jpg" },
    { nombre: "Salsa Papaya Aderezo", presentacion: "150 ml", precioUSD: 2.70, foto: "salsa-papaya-aderezo-150-ml.jpg" },
    { nombre: "Salsa Maracuyá con Jengibre", presentacion: "150 ml", precioUSD: 2.70, foto: "salsa-maracuya-picante-con-jengibre-150-ml.jpg" },
    { nombre: "Salsa Maracuyá con Jengibre", presentacion: "255 ml", precioUSD: 3.72, foto: "salsa-maracuya-picante-con-jengibre-255-ml.jpg" },
    { nombre: "Salsa Mango con Jalapeño", presentacion: "150 ml", precioUSD: 2.70, foto: "salsa-mango-agridulce-con-Jalapeño-150-ml.jpg" },
    { nombre: "Salsa Mango con Jalapeño", presentacion: "255 ml", precioUSD: 3.72, foto: "salsa-mango-agridulce-con-Jalapeño-255-ml.jpg" },
    { nombre: "Salsa Tomate de Árbol Picante", presentacion: "150 ml", precioUSD: 2.70, foto: "salsa-tomate-de-arbol-agridulce-picante-150-ml.jpg" },
    { nombre: "Salsa Tomate de Árbol Picante", presentacion: "255 ml", precioUSD: 3.72, foto: "nodisponible-1.jpg" },
    { nombre: "Salsa Guayaba con Jengibre", presentacion: "150 ml", precioUSD: 2.70, foto: "salsa-guayaba-picante-con-jengibre-150-ml.jpg" },
    { nombre: "Salsa Guayaba con Jengibre", presentacion: "255 ml", precioUSD: 3.72, foto: "Salsa-Guayaba-Picante-con-Jengibre-255-ml.jpg" },
    { nombre: "Salsa Cebolla Caramelizada", presentacion: "150 ml", precioUSD: 2.70, foto: "salsa-cebolla-150-ml.jpg" },
    { nombre: "Salsa Cebolla Caramelizada", presentacion: "255 ml", precioUSD: 3.72, foto: "salsa-cebolla-caramelizada-255-ml.jpg" },
    { nombre: "Alioli de Ajo Natural", presentacion: "150 ml", precioUSD: 3.00, foto: "salsa-aioli-de-ajo-Española-natural-150-ml.jpg" },
    { nombre: "Alioli de Ajo Picante", presentacion: "150 ml", precioUSD: 3.10, foto: "salsa-aioli-de-ajo-Española-picante-150-ml.jpg" },
    { nombre: "Mojo Cilantro y Perejil", presentacion: "150 ml", precioUSD: 3.10, foto: "salsa-mojo-cilantro-y-perejil-150-ml.jpg" },
    { nombre: "Salsa Ají Dulce & Mayonesa", presentacion: "150 ml", precioUSD: 3.00, foto: "salsa-aji-dulce-&-mayonesa-150-ml.jpg" },
    { nombre: "Salsa Ají Dulce & Mayonesa", presentacion: "260 ml", precioUSD: 4.72, foto: "salsa-aji-dulce-&-mayonesa-260-ml.jpg" },
    { nombre: "Aceite de Onoto", presentacion: "150 ml", precioUSD: 3.10, foto: "aceite-de-onoto-150-ml.jpg" },
    { nombre: "Salsa de Onoto", presentacion: "150 ml", precioUSD: 3.50, foto: "salsa-de-onoto-150-ml.jpg" },
    { nombre: "Salsa de Onoto", presentacion: "500 ml", precioUSD: 6.50, foto: "salsa-onoto-500-ml.jpg" },
    { nombre: "Pasta De Onoto", presentacion: "330 ml", precioUSD: 5.50, foto: "pasta-onoto-330-ml.jpg" },
    { nombre: "Pasta de Onoto", presentacion: "200 gr", precioUSD: 2.92, foto: "pasta-de-onoto-200-gr.jpg" },
    { nombre: "Pasta de Onoto", presentacion: "300 gr", precioUSD: 3.80, foto: "pasta-de-onoto-300-gr.jpg" },
    { nombre: "Pasta de Onoto", presentacion: "480 gr", precioUSD: 5.10, foto: "pasta-de-onoto-480-gr.jpg" },
    { nombre: "Vinagre de Tamarindo", presentacion: "150 ml", precioUSD: 2.00, foto: "vinagre-de-tamarindo-150-ml.jpg" },
    { nombre: "Vinagre de Tamarindo", presentacion: "500 ml", precioUSD: 5.20, foto: "vinagre-de-tamarindo-500-ml.jpg" },
    { nombre: "Crema Untable Tamarindo", presentacion: "200 gr", precioUSD: 2.92, foto: "crema-untable-tamarindo-200-gr.jpg" },
    { nombre: "Crema Untable Tamarindo", presentacion: "400 gr", precioUSD: 5.90, foto: "crema-untable-tamarindo-400-gr.jpg" },
    { nombre: "Crema Untable Parchita", presentacion: "200 gr", precioUSD: 2.92, foto: "crema-untable.parchita-200-gr.jpg" },
    { nombre: "Crema Untable Parchita", presentacion: "400 gr", precioUSD: 5.90, foto: "crema-untable.parchita-400-gr.jpg" },
    { nombre: "Crema Untable Mango", presentacion: "200 gr", precioUSD: 2.92, foto: "crema.untable-mango-200-gr.jpg" },
    { nombre: "Crema Untable Mango", presentacion: "400 gr", precioUSD: 5.90, foto: "crema.untable-mango-400-gr.jpg" }
];

function cargarProductos() {
    const catalogo = document.getElementById('catalog');
    if (!catalogo) return;

    catalogo.innerHTML = ""; 
    catalogo.style = "display: flex; flex-wrap: wrap; justify-content: center; gap: 15px; padding: 15px; background: #f4f4f4;";

    productos.forEach(p => {
        const tarjeta = document.createElement('div');
        tarjeta.style = "background: white; border-radius: 10px; box-shadow: 0 2px 5px rgba(0,0,0,0.1); width: 160px; padding: 10px; text-align: center; border: 1px solid #ddd; display: flex; flex-direction: column; justify-content: space-between;";
        tarjeta.innerHTML = `
            <div style="height: 110px; overflow: hidden; border-radius: 5px;">
                <img src="img/${p.foto}" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.src='https://via.placeholder.com/150?text=EDP'">
            </div>
            <div>
                <h3 style="font-size: 13px; color: #630E16; margin: 8px 0; line-height: 1.2; height: 32px; overflow: hidden;">${p.nombre}</h3>
                <p style="font-size: 11px; color: #666; margin-bottom: 5px;">${p.presentacion}</p>
                <p style="font-weight: bold; color: #333; font-size: 15px; margin-bottom: 8px;">$${p.precioUSD.toFixed(2)}</p>
            </div>
            <button onclick="alert('Agregado')" style="background: #630E16; color: white; border: none; padding: 8px; width: 100%; border-radius: 5px; cursor: pointer; font-size: 11px; font-weight: bold;">AGREGAR</button>
        `;
        catalogo.appendChild(tarjeta);
    });
}

window.cerrarMuro = function() {
    const nombre = document.getElementById('user-name').value.trim();
    const email = document.getElementById('user-email').value.trim();
    const phone = document.getElementById('user-phone').value.trim();
    
    if(!nombre || !email || !phone) {
        alert("Por favor, completa todos los campos para entrar al catálogo.");
        return;
    }

    const wall = document.getElementById('auth-wall');
    if (wall) {
        wall.style.display = 'none';
        localStorage.setItem('usuario_registrado', 'true');
        localStorage.setItem('cliente_nombre', nombre);
    }
}

window.addEventListener('load', () => {
    cargarProductos();
    if (localStorage.getItem('usuario_registrado') === 'true') {
        const wall = document.getElementById('auth-wall');
        if (wall) wall.style.display = 'none';
    }
});
