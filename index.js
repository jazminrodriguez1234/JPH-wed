function mostrar(id) {
    const cards = document.querySelectorAll(".card");
    cards.forEach(card => card.style.display = "none");

    document.getElementById(id).style.display = "block";
}