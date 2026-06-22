
document.addEventListener("DOMContentLoaded", () => {
    
   
    const navbar = document.querySelector(".navbar");
    
    if (navbar) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                navbar.classList.add("shadow", "bg-opacity-95");
                navbar.style.transition = "all 0.3s ease";
            } else {
                navbar.classList.remove("shadow", "bg-opacity-95");
            }
        });
    }

    const bookCards = document.querySelectorAll(".card");
    
    bookCards.forEach(card => {
        card.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";
        
        card.addEventListener("mouseenter", () => {
            card.style.transform = "translateY(-5px)";
            card.style.boxShadow = "0 10px 20px rgba(0,0,0,0.15)";
        });
        
        card.addEventListener("mouseleave", () => {
            card.style.transform = "translateY(0)";
            card.style.boxShadow = "none";
        });
    });

    
    function updateNavbarWishlistBadge() {
        const savedWishlist = JSON.parse(localStorage.getItem("bookworld_wishlist")) || [];
   
        const badge = document.querySelector(".badge-wishlist");
        if (badge) {
            badge.textContent = savedWishlist.length;
        }
    }
    
 
    updateNavbarWishlistBadge();
    
   
    window.addEventListener("storage", updateNavbarWishlistBadge);
});