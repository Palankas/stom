// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Validation
function validateForm() {
    const phone = document.getElementById('phone').value;
    if (phone.length < 9) {
        alert("Iltimos, to‘g‘ri telefon raqamini kiriting.");
        return false;
    }
    alert("So‘rovingiz muvaffaqiyatli yuborildi. Tez orada siz bilan bog‘lanamiz.");
    return true;
}

// Scroll Animation Trigger
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.padding = '10px 5%';
    } else {
        navbar.style.padding = '20px 5%';
    }
});