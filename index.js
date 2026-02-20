function mostrarSeccion(id) {
    const secciones = document.querySelectorAll('.info-box');
    secciones.forEach(sec => sec.style.display = "none");

    document.getElementById(id).style.display = "block";
}