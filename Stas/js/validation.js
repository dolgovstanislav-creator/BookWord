
document.addEventListener("DOMContentLoaded", () => {
    
  
    const reviewForm = document.getElementById("addReviewForm");
    const accordion = document.getElementById("reviewsAccordion");

    if (reviewForm && accordion) {
        reviewForm.addEventListener("submit", (e) => {
           
            e.preventDefault();

           
            const revName = document.getElementById("revName").value.trim();
            const revBook = document.getElementById("revBook").value.trim();
            const revStars = document.getElementById("revStars").value;
            const revText = document.getElementById("revText").value.trim();

           
            const uniqueId = "collapse_" + Date.now();

         
            let starsHtml = "";
            for (let i = 0; i < Number(revStars); i++) {
                starsHtml += '<i class="fa-solid fa-star"></i> ';
            }

           
            const newReviewHtml = `
                <div class="accordion-item mt-3">
                    <h3 class="accordion-header" id="heading_${uniqueId}">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#${uniqueId}">
                            Recenzie: „${revBook}” de către ${revName}
                        </button>
                    </h3>
                    <div id="${uniqueId}" class="accordion-collapse collapse" data-bs-parent="#reviewsAccordion">
                        <div class="accordion-body">
                            <div class="text-warning mb-2">${starsHtml}</div>
                            <p class="mb-0 text-muted small">${revText}</p>
                        </div>
                    </div>
                </div>
            `;

          
            accordion.insertAdjacentHTML('beforeend', newReviewHtml);

           
            reviewForm.reset();
        });
    }

  
    const contactForm = document.getElementById("contactForm");
    const feedback = document.getElementById("formFeedback");

    if (contactForm && feedback) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const name = document.getElementById("clientName").value.trim();
            const email = document.getElementById("clientEmail").value.trim();
            const msg = document.getElementById("clientMessage").value.trim();

            const nameRegex = /^[a-zA-ZĂÂÎȘȚăâîșț\s]{3,50}$/;
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            feedback.classList.remove("d-none", "alert-danger", "alert-success");

            if (!nameRegex.test(name)) {
                feedback.className = "mt-3 alert alert-danger";
                feedback.textContent = "Nume invalid!";
                return;
            }
            if (!emailRegex.test(email)) {
                feedback.className = "mt-3 alert alert-danger";
                feedback.textContent = "Email invalid!";
                return;
            }
            if (msg.length < 10) {
                feedback.className = "mt-3 alert alert-danger";
                feedback.textContent = "Mesajul este prea scurt!";
                return;
            }

            feedback.className = "mt-3 alert alert-success";
            feedback.textContent = "Mesaj trimis cu succes!";
            contactForm.reset();
        });
    }
});v