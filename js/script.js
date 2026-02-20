// ================= MOBILE NAVIGATION TOGGLE =================
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// ================= SMOOTH SCROLLING =================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (!target) return;

        target.scrollIntoView({
            behavior: 'smooth'
        });

        // Close mobile menu after click
        navLinks.classList.remove('active');
    });
});

// ================= SCROLL ANIMATIONS =================
// Elements to animate
const animatedElements = document.querySelectorAll(
    '.mission-card, .objectives-list li, .background-content p, .pledge-box'
);

// Intersection Observer for fade-in
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target); // Animate only once
        }
    });
}, observerOptions);

// Apply observer to each element
animatedElements.forEach(el => {
    el.classList.add('fade-hidden'); // initially hidden
    observer.observe(el);
});

// ================= STAGGERED FADE-IN =================
const staggerElements = document.querySelectorAll('.mission-card, .objectives-list li');

staggerElements.forEach((el, index) => {
    el.classList.add('fade-hidden'); // initial hidden
    const delay = index * 150; // 150ms delay between elements
    setTimeout(() => {
        el.classList.add('fade-in');
        el.classList.remove('fade-hidden');
    }, delay + 300); // start after 300ms
});

// Inject shared navigation into all subpages

const navHTML = `
<nav>
<ul class="nav-links">
<li><a href="index.html">Home</a></li>
<ul>
<li><a href="realmen.html">Real Men’s Club</a></li>
<li><a href="health.html">Health & Wellness</a></li>
<li><a href="fatherhood.html">Fatherhood</a></li>
<li><a href="community.html">Community Footprint</a></li>
<li><a href="skills.html">Skills Development</a></li>
<li><a href="fundraising.html">Fundraising</a></li>
<li><a href="admin.html">Secretary General Office</a></li>
</ul>
</li>
</ul>
</nav>
`;

const navContainer = document.querySelector('.include-nav');
if(navContainer){
    navContainer.outerHTML = navHTML;
}

/* =========================
   IMAGE SLIDER FUNCTIONALITY
========================= */

function initSlider() {
    const sliders = document.querySelectorAll('.slider');

    sliders.forEach(slider => {
        const slides = slider.querySelectorAll('.slide');
        let index = 0;

        function showSlide(i) {
            slides.forEach((slide, idx) => {
                slide.style.display = idx === i ? 'block' : 'none';
            });
        }

        function nextSlide() {
            index = (index + 1) % slides.length;
            showSlide(index);
        }

        showSlide(index);
        setInterval(nextSlide, 4000);
    });
}

// Run slider after DOM loads
window.addEventListener('DOMContentLoaded', initSlider);
