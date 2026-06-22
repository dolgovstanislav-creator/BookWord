
document.addEventListener("DOMContentLoaded", () => {
    const wishlistButtons = document.querySelectorAll(".btn-wishlist");

    
    let savedWishlist = JSON.parse(localStorage.getItem("bookworld_wishlist")) || [];

    
    function updateButtonUI(button, bookId) {
        if (savedWishlist.includes(bookId)) {
            button.style.backgroundColor = "#FF9800"; 
            button.innerHTML = '<i class="fa-solid fa-heart me-1"></i> În Wishlist';
        } else {
            button.style.backgroundColor = "#5D4037"; 
            button.innerHTML = '<i class="fa-regular fa-heart me-1"></i> Adaugă în Wishlist';
        }
    }

   
    wishlistButtons.forEach(btn => {
        const bookId = btn.getAttribute("data-id");
        updateButtonUI(btn, bookId);

        btn.addEventListener("click", () => {
            const currentId = btn.getAttribute("data-id");
            const bookTitle = btn.getAttribute("data-title");

            if (savedWishlist.includes(currentId)) {
               
                savedWishlist = savedWishlist.filter(id => id !== currentId);
                alert(`„${bookTitle}” a fost eliminat din lista ta de preferințe.`);
            } else {
               
                savedWishlist.push(currentId);
                alert(`„${bookTitle}” a fost salvat cu succes în Wishlist!`);
            }

         
            localStorage.setItem("bookworld_wishlist", JSON.stringify(savedWishlist));
            updateButtonUI(btn, currentId);
        });
    });
});