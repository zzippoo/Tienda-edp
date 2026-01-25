const productos = [
    { nombre: "Salsa Tamarindo Agridulce", presentacion: "150 ml", precioUSD: 2.70, foto: "salsa-tamarindo-agridukce-150-ml.jpg" },
    { nombre: "Salsa Tamarindo Agridulce Picante", presentacion: "150 ml", precioUSD: 2.70, foto: "salsa-tamarindo-agridulce-picante-150-ml.jpg" },
    { nombre: "Salsa Papaya Aderezo", presentacion: "150 ml", precioUSD: 2.70, foto: "salsa-papaya-aderezo-150-ml.jpg" },
    { nombre: "Salsa Maracuyá Picante", presentacion: "150 ml", precioUSD: 2.70, foto: "salsa-maracuya-picante-con-jengibre-150-ml.jpg" },
    { nombre: "Salsa Mango con Jalapeño", presentacion: "150 ml", precioUSD: 2.70, foto: "salsa-mango-agridulce-con-Jalapeño-150-ml.jpg" },
    { nombre: "Salsa Cebolla Caramelizada", presentacion: "150 ml", precioUSD: 2.70, foto: "salsa-cebolla-150-ml.jpg" },
    { nombre: "Aceite de Onoto", presentacion: "150 ml", precioUSD: 3.10, foto: "aceite-de-onoto-150-ml.jpg" },
    { nombre: "Pasta de Onoto", presentacion: "200 gr", precioUSD: 2.92, foto: "pasta-de-onoto-200-gr.jpg" }
];

function cargarProductos() {
    const catalogo = document.getElementById('catalog'); 
    if (!catalogo) return;

    catalogo.innerHTML = ""; // Limpia el espacio blanco

    productos.forEach(p => {
        const tarjeta = document.createElement('div');
        // Estilo rápido para que se vea ordenado
        tarjeta.style = "border: 1px solid #ddd; margin: 10px; padding: 15px; border-radius: 10px; text-align: center; background: white; width: 200px; display: inline-block; vertical-align: top;";
        tarjeta.innerHTML = `
            <img src="img/${p.foto}" style="width: 100%; height: 150px; object-fit: cover; border-radius: 5px;" onerror="this.src='https://via.placeholder.com/150?text=EDP+Gourmet'">
            <h3 style="font-size: 16px; color: #630E16; margin: 10px 0;">${p.nombre}</h3>
            <p style="color: #666;">${p.presentacion}</p>
            <p style="font-weight: bold; color: #333;">$${p.precioUSD.toFixed(2)}</p>
            <button style="background: #630E16; color: white; border: none; padding: 8px 15px; border-radius: 5px; cursor: pointer; width: 100%;">Agregar</button>
        `;
        catalogo.appendChild(tarjeta);
    });
}

// Llama a la función cuando la página cargue
window.addEventListener('DOMContentLoaded', cargarProductos);
