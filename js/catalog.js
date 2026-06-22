
document.addEventListener("DOMContentLoaded", () => {
    const filterGenre = document.getElementById("filterGenre");
    const sortPrice = document.getElementById("sortPrice");
    const catalogGrid = document.getElementById("catalogGrid");

    if (!catalogGrid) return; 

    function updateCatalog() {
        let items = Array.from(catalogGrid.querySelectorAll(".book-item"));
        const selectedGenre = filterGenre.value;
        const selectedSort = sortPrice.value;

        
        items.forEach(item => {
            const itemGenre = item.getAttribute("data-genre");
            if (selectedGenre === "all" || itemGenre === selectedGenre) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });

   
        if (selectedSort !== "default") {
            items.sort((a, b) => {
                const priceA = parseFloat(a.getAttribute("data-price"));
                const priceB = parseFloat(b.getAttribute("data-price"));
                return selectedSort === "asc" ? priceA - priceB : priceB - priceA;
            });

    
            items.forEach(item => catalogGrid.appendChild(item));
        }
    }

    filterGenre.addEventListener("change", updateCatalog);
    sortPrice.addEventListener("change", updateCatalog);
});