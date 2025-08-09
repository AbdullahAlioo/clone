let isMobileMenuOpen = false;

function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const hamburger = document.getElementById('hamburger');
    const mobileSignIn = document.getElementById('mobileSignIn');

    isMobileMenuOpen = !isMobileMenuOpen;

    if (isMobileMenuOpen) {
        mobileMenu.classList.add('active');
        hamburger.classList.add('active');
        document.body.style.overflow = 'hidden';
        if (window.innerWidth <= 768) {
            mobileSignIn.style.display = 'none';
        }
    } else {
        closeMobileMenu();
    }
}

function closeMobileMenu(event) {
    if (event && event.target !== event.currentTarget) return;

    const mobileMenu = document.getElementById('mobileMenu');
    const hamburger = document.getElementById('hamburger');
    const mobileSignIn = document.getElementById('mobileSignIn');

    mobileMenu.classList.remove('active');
    hamburger.classList.remove('active');
    document.body.style.overflow = 'auto';
    isMobileMenuOpen = false;

    if (window.innerWidth <= 768) {
        mobileSignIn.style.display = 'block';
    }
}

// Handle window resize
window.addEventListener('resize', () => {
    const mobileSignIn = document.getElementById('mobileSignIn');

    if (window.innerWidth > 768) {
        if (isMobileMenuOpen) {
            closeMobileMenu();
        }
        mobileSignIn.style.display = 'none';
    } else {
        if (!isMobileMenuOpen) {
            mobileSignIn.style.display = 'block';
        }
    }
});

// Handle escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isMobileMenuOpen) {
        closeMobileMenu();
    }
});

// Initialize mobile sign in button visibility
window.addEventListener('load', () => {
    const mobileSignIn = document.getElementById('mobileSignIn');
    if (window.innerWidth <= 768) {
        mobileSignIn.style.display = 'block';
    }
});

// Image Slideshow Functionality
function startSlideshow() {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    // Show the first slide
    slides[currentSlide].classList.add('active');

    // Change slide every 1.5 seconds
    setInterval(() => {
        // Hide current slide
        slides[currentSlide].classList.remove('active');

        // Move to next slide
        currentSlide = (currentSlide + 1) % slides.length;

        // Show next slide
        slides[currentSlide].classList.add('active');
    }, 1500); // 1.5 seconds
}

// Initialize card3 slideshow
function initCard3Slideshow() {
    const slideshow = document.querySelector('.card3 .slideshow');
    const dotsContainer = document.querySelector('.card3 .slideshow-dots');

    // Clear any existing content
    slideshow.innerHTML = '';
    dotsContainer.innerHTML = '';

    // Create slides and dots
    for (let i = 1; i <= 11; i++) {
        // Create slide
        const img = document.createElement('img');
        img.src = `image${i}.jpg`;
        img.alt = `Event Image ${i}`;
        slideshow.appendChild(img);

        // Create dot
        const dot = document.createElement('div');
        dot.className = 'dot';
        dot.dataset.index = i - 1;
        dotsContainer.appendChild(dot);
    }

    const dots = document.querySelectorAll('.card3 .dot');
    const images = document.querySelectorAll('.card3 .slideshow img');
    let currentIndex = 0;
    const totalImages = images.length;

    // Set first dot as active
    if (dots.length > 0) dots[0].classList.add('active');

    // Function to show slide
    function showSlide(index) {
        if (index >= totalImages) index = 0;
        if (index < 0) index = totalImages - 1;

        slideshow.style.transform = `translateX(-${index * 100}%)`;

        // Update active dot
        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');

        currentIndex = index;
    }

    // Add click event to dots
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            showSlide(parseInt(dot.dataset.index));
        });
    });

    // Auto slide change
    let slideInterval = setInterval(() => {
        showSlide(currentIndex + 1);
    }, 3000); // Change slide every 3 seconds

    // Pause on hover
    slideshow.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });

    slideshow.addEventListener('mouseleave', () => {
        slideInterval = setInterval(() => {
            showSlide(currentIndex + 1);
        }, 3000);
    });

    // Initialize first slide
    showSlide(0);
}

// Clone buttons for seamless looping
document.addEventListener('DOMContentLoaded', function () {
    const marquee = document.querySelector('.people-name1');
    const buttons = marquee.querySelectorAll('button');

    // Clone all buttons and append them
    buttons.forEach(button => {
        const clone = button.cloneNode(true);
        marquee.appendChild(clone);
    });

    // Adjust animation duration based on number of buttons
    const totalButtons = buttons.length * 2; // Original + clones
    marquee.style.animationDuration = `${totalButtons * 3}s`; // 3s per button
});

// Start the slideshows when the page loads
window.addEventListener('DOMContentLoaded', () => {
    startSlideshow();
    initCard3Slideshow();
});

const images = document.querySelectorAll(".past-image");
let index = 0;

setInterval(() => {
    images[index].classList.remove("active");
    index = (index + 1) % images.length;
    images[index].classList.add("active");
}, 3000); // change every 3s

function showToast() {
    const toast = document.getElementById('toast');
    if (toast && toast.classList.contains('hidden')) {
        toast.classList.remove('hidden');

        // Auto-hide after 20 seconds
        setTimeout(() => {
            if (!toast.classList.contains('hidden')) {
                toast.classList.add('hidden');
            }
        }, 20000); // 20 seconds

        // Close on cross button click
        const closeButton = document.querySelector('.toast-close');
        if (closeButton) {
            closeButton.addEventListener('click', () => {
                toast.classList.add('hidden');
            });
        }
    }
}

// Show toast every 15 seconds
let toastInterval = setInterval(() => {
    showToast();
}, 15000); // 15 seconds

document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Show loading state
            const submitBtn = document.getElementById('submitBtn');
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> Sending...';
            submitBtn.disabled = true;
            
            // Simulate form submission
            setTimeout(() => {
                document.getElementById('successModal').classList.remove('hidden');
                submitBtn.innerHTML = '<i class="fas fa-paper-plane mr-2"></i> Send Message';
                submitBtn.disabled = false;
                this.reset();
            }, 1500);
        });
        
        function closeModal() {
            document.getElementById('successModal').classList.add('hidden');
        }


