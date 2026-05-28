document.addEventListener("DOMContentLoaded", function() {
    const navbarPlaceholder = document.getElementById("navbar");
    if (navbarPlaceholder) {
        if (!document.getElementById('bootstrap-css')) {
            const link = document.createElement('link');
            link.id = 'bootstrap-css';
            link.rel = 'stylesheet';
            link.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css';
            document.head.appendChild(link);
        }
  
        if (!document.getElementById('navbar-css')) {
            const link = document.createElement('link');
            link.id = 'navbar-css';
            link.rel = 'stylesheet';
            link.href = 'components/navbar.css';
            document.head.appendChild(link);
        }
    
        if (!document.getElementById('bootstrap-js')) {
            const script = document.createElement('script');
            script.id = 'bootstrap-js';
            script.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js';
            document.body.appendChild(script);
        }

        // Replace default toggler with custom icon markup (nav-icon1)
        navbarPlaceholder.innerHTML = `
        <nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top">
            <div class="container-fluid">
                <a class="navbar-brand" href="index.html">
                    <i class="fas fa-cross"></i>
                    <span>The Three Are One God Church</span>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <div id="nav-icon1" aria-hidden="true">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <div class="navbar-nav ms-auto">
                        <a class="nav-link" href="index.html">Home</a>
                        <a class="nav-link" href="aboutus.html">About Us</a>
                        <a class="nav-link" href="leadership.html">Leadership</a>
                        <a class="nav-link" href="branches.html">Branches</a>
                        <a class="nav-link" href="ministries.html">Ministries</a>
                        <a class="nav-link" href="events.html">Events</a>
                        <a class="nav-link" href="get-involved.html">Get Involved</a>
                        <a class="nav-link" href="prayer.html">Prayer</a>
                        <a class="nav-link" href="contact.html">Contact</a>
                    </div>
                </div>
            </div>
        </nav>
        `;

        // Highlight current page
        const currentPath = window.location.pathname.split("/").pop() || "index.html";
        const navLinks = navbarPlaceholder.querySelectorAll('.nav-link');
        
        navLinks.forEach(link => {
            // Check if the href matches the current page
            if (link.getAttribute('href') === currentPath) {
                link.classList.add('active');
                link.classList.add('current');
            } else {
                link.classList.remove('active');
                link.classList.remove('current');
            }
        });

        // Add toggler icon behavior (vanilla JS) and sync with Bootstrap collapse events
        const togglerIcon = navbarPlaceholder.querySelector('#nav-icon1');
        const collapseEl = document.getElementById('navbarNav');
        const togglerButton = navbarPlaceholder.querySelector('.navbar-toggler');

        if (togglerIcon && togglerButton && collapseEl) {
            // Toggle icon class on button click
            togglerButton.addEventListener('click', () => {
                togglerIcon.classList.toggle('open');
            });

            // Sync icon with Bootstrap collapse events
            collapseEl.addEventListener('shown.bs.collapse', () => togglerIcon.classList.add('open'));
            collapseEl.addEventListener('hidden.bs.collapse', () => togglerIcon.classList.remove('open'));
        }
    }
});