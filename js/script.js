// Animation au défilement pour les éléments
const observerOptions = { threshold: 0.1 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

document.querySelectorAll('.service-card, .photo-item').forEach(el => {
    el.style.opacity = "0";
    el.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";
    observer.observe(el);
});

// Animation simple CSS via JS
const style = document.createElement('style');
style.innerHTML = `.fade-in { opacity: 1 !important; transform: translateY(0) !important; }`;
document.head.appendChild(style);

// Gestion du formulaire
document.getElementById('contact-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Merci pour votre message ! 13 Peintures reviendra vers vous sous 24h.");
    this.reset();
});