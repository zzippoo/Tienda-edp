const productos = [
    { nombre: "Salsa Tamarindo Agridulce", presentacion: "150 ml", precioUSD: 2.70, foto: "salsa-tamarindo-agridukce-150-ml.jpg", categoria: "SALSA SIN PICANTE" },
    { nombre: "Salsa Tamarindo Agridulce", presentacion: "255 ml", precioUSD: 3.72, foto: "salsa-tamarindo-agridulce-255-ml.jpg", categoria: "SALSA SIN PICANTE" },
    { nombre: "Salsa Tamarindo Agridulce Picante", presentacion: "150 ml", precioUSD: 2.70, foto: "salsa-tamarindo-agridulce-picante-150-ml.jpg", categoria: "SALSA CON PICANTE" },
    { nombre: "Salsa Tamarindo Agridulce Picante", presentacion: "255 ml", precioUSD: 3.72, foto: "salsa-tamarindo-agridulce-picante-255-ml.jpg", categoria: "SALSA CON PICANTE" },
    { nombre: "Salsa Papaya Aderezo", presentacion: "150 ml", precioUSD: 2.70, foto: "salsa-papaya-aderezo-150-ml.jpg", categoria: "SALSA SIN PICANTE" },
    { nombre: "Salsa Maracuyá Picante con Jengibre", presentacion: "150 ml", precioUSD: 2.70, foto: "salsa-maracuya-picante-con-jengibre-150-ml.jpg", categoria: "SALSA CON PICANTE" },
    { nombre: "Salsa Maracuyá Picante con Jengibre", presentacion: "255 ml", precioUSD: 3.72, foto: "salsa-maracuya-picante-con-jengibre-255-ml.jpg", categoria: "SALSA CON PICANTE" },
    { nombre: "Salsa Mango Agridulce con Jalapeño", presentacion: "150 ml", precioUSD: 2.70, foto: "salsa-mango-agridulce-con-Jalapeño-150-ml.jpg", categoria: "SALSA CON PICANTE" },
    { nombre: "Salsa Mango Agridulce con Jalapeño", presentacion: "255 ml", precioUSD: 3.72, foto: "salsa-mango-agridulce-con-Jalapeño-255-ml.jpg", categoria: "SALSA CON PICANTE" },
    { nombre: "Salsa Tomate de Arbol Agridulce Picante", presentacion: "150 ml", precioUSD: 2.70, foto: "salsa-tomate-de-arbol-agridulce-picante-150-ml.jpg", categoria: "SALSA CON PICANTE" },
    { nombre: "Salsa Tomate de Arbol Agridulce Picante", presentacion: "255 ml", precioUSD: 3.72, foto: "nodisponible-1.jpg", categoria: "SALSA CON PICANTE" },
    { nombre: "Salsa Guayaba Picante con Jengibre", presentacion: "150 ml", precioUSD: 2.70, foto: "salsa-guayaba-picante-con-jengibre-150-ml.jpg", categoria: "SALSA CON PICANTE" },
    { nombre: "Salsa Guayaba Picante con Jengibre", presentacion: "255 ml", precioUSD: 3.72, foto: "Salsa-Guayaba-Picante-con-Jengibre-255-ml.jpg", categoria: "SALSA CON PICANTE" },
    { nombre: "Salsa Cebolla Caramelizada", presentacion: "150 ml", precioUSD: 2.70, foto: "salsa-cebolla-150-ml.jpg", categoria: "SALSA SIN PICANTE" },
    { nombre: "Salsa Cebolla Caramelizada", presentacion: "255 ml", precioUSD: 3.72, foto: "salsa-cebolla-caramelizada-255-ml.jpg", categoria: "SALSA SIN PICANTE" },
    { nombre: "Salsa Alioli de Ajo Española Natural", presentacion: "150 ml", precioUSD: 3.00, foto: "salsa-aioli-de-ajo-Española-natural-150-ml.jpg", categoria: "SALSA SIN PICANTE" },
    { nombre: "Salsa Alioli de Ajo Española Picante", presentacion: "150 ml", precioUSD: 3.10, foto: "salsa-aioli-de-ajo-Española-picante-150-ml.jpg", categoria: "SALSA CON PICANTE" },
    { nombre: "Salsa Mojo Cilantro y Perejil", presentacion: "150 ml", precioUSD: 3.10, foto: "salsa-mojo-cilantro-y-perejil-150-ml.jpg", categoria: "SALSA SIN PICANTE" },
    { nombre: "Salsa Ají Dulce & Mayonesa", presentacion: "150 ml", precioUSD: 3.00, foto: "salsa-aji-dulce-&-mayonesa-150-ml.jpg", categoria: "SALSA SIN PICANTE" },
    { nombre: "Salsa Ají Dulce & Mayonesa", presentacion: "260 ml", precioUSD: 4.72, foto: "salsa-aji-dulce-&-mayonesa-260-ml.jpg", categoria: "SALSA SIN PICANTE" },
    { nombre: "Aceite de Onoto", presentacion: "150 ml", precioUSD: 3.10, foto: "aceite-de-onoto-150-ml.jpg", categoria: "ACEITE" },
    { nombre: "Salsa de Onoto", presentacion: "150 ml", precioUSD: 3.50, foto: "salsa-de-onoto-150-ml.jpg", categoria: "SALSA SIN PICANTE" },
    { nombre: "Salsa de Onoto", presentacion: "500 ml", precioUSD: 6.50, foto: "salsa-onoto-500-ml.jpg", categoria: "SALSA SIN PICANTE" },
    { nombre: "Pasta De Onoto", presentacion: "330 ml", precioUSD: 5.50, foto: "pasta-onoto-330-ml.jpg", categoria: "EN PASTA" },
    { nombre: "Pasta de Onoto", presentacion: "200 gr", precioUSD: 2.92, foto: "pasta-de-onoto-200-gr.jpg", categoria: "EN PASTA" },
    { nombre: "Pasta de Onoto", presentacion: "300 gr", precioUSD: 3.80, foto: "pasta-de-onoto-300-gr.jpg", categoria: "EN PASTA" },
    { nombre: "Pasta de Onoto", presentacion: "480 gr", precioUSD: 5.10, foto: "pasta-de-onoto-480-gr.jpg", categoria: "EN PASTA" },
    { nombre: "Vinagre de Tamarindo", presentacion: "150 ml", precioUSD: 2.00, foto: "vinagre-de-tamarindo-150-ml.jpg", categoria: "VINAGRE" },
    { nombre: "Vinagre de Tamarindo", presentacion: "500 ml", precioUSD: 5.20, foto: "vinagre-de-tamarindo-500-ml.jpg", categoria: "VINAGRE" },
    { nombre: "Crema Untable Tamarindo", presentacion: "200 gr", precioUSD: 2.92, foto: "crema-untable-tamarindo-200-gr.jpg", categoria: "DULCE UNTABLE" },
    { nombre: "Crema Untable Tamarindo", presentacion: "400 gr", precioUSD: 5.90, foto: "crema-untable-tamarindo-400-gr.jpg", categoria: "DULCE UNTABLE" },
    { nombre: "Crema Untable Parchita", presentacion: "200 gr", precioUSD: 2.92, foto: "crema-untable.parchita-200-gr.jpg", categoria: "DULCE UNTABLE" },
    { nombre: "Crema Untable Parchita", presentacion: "400 gr", precioUSD: 5.90, foto: "crema-untable.parchita-400-gr.jpg", categoria: "DULCE UNTABLE" },
    { nombre: "Crema Untable Mango", presentacion: "200 gr", precioUSD: 2.92, foto: "crema.untable-mango-200-gr.jpg", categoria: "DULCE UNTABLE" },
    { nombre: "Crema Untable Mango", presentacion: "400 gr", precioUSD: 5.90, foto: "crema.untable-mango-400-gr.jpg", categoria: "DULCE UNTABLE" }
];

function renderizarProductos() {
    const contenedor = document.getElementById('catalog');
    if (!contenedor) return;
    
    contenedor.innerHTML = ''; // Limpiar pantalla

    productos.forEach(p => {
        const item = document.createElement('div');
        item.className = 'producto-card';
        item.style = "border: 1px solid #ddd; margin: 10px; padding: 15px; border-radius: 10px; text-align: center; display: inline-block; width: 250px;";
        item.innerHTML = `
            <img src="img/${p.foto}" style="width: 100%; height: 200px; object-fit: cover; border-radius: 5px;" onerror="this.src='img/nodisponible-1.jpg'">
            <h3 style="color: #630E16;">${p.nombre}</h3>
            <p><strong>${p.presentacion}</strong></p>
            <p style="font-size: 1.2em; font-weight: bold;">$${p.precioUSD.toFixed(2)}</p>
            <button style="background: #630E16; color: white; border: none; padding: 10px; width: 100%; border-radius: 5px; cursor: pointer;">Añadir al Carrito</button>
        `;
        contenedor.appendChild(item);
    });
}

// Ejecutar cuando cargue la página
window.onload = renderizarProductos;
