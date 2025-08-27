document.addEventListener('DOMContentLoaded', function() {
    const joinBtn = document.querySelector('.join-btn');
    if (joinBtn) {
        joinBtn.addEventListener('click', function() {
            window.location.href = "loading.html";
        });
    }

    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.sidebar-overlay');
    const toggleBtn = document.querySelector('.sidebar-toggle');
    const sidebarLinks = document.querySelectorAll('.sidebar-link');
    
    const currentPage = window.location.pathname.split('/').pop() || 'home.html';
    sidebarLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
    
    toggleBtn.addEventListener('click', function() {
        sidebar.classList.toggle('open');
        overlay.classList.toggle('open');
    });
    
    overlay.addEventListener('click', function() {
        sidebar.classList.remove('open');
        overlay.classList.remove('open');
    });
    
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function() {
            sidebar.classList.remove('open');
            overlay.classList.remove('open');
        });
    });

    const navbarContactButton = document.getElementById('navbar-contact-button');
    const sidebarContactButton = document.getElementById('sidebar-contact-button');
    
    if (navbarContactButton) {
        navbarContactButton.addEventListener('click', function(e) {
            handleContactClick(e, this);
        });
    }
    
    if (sidebarContactButton) {
        sidebarContactButton.addEventListener('click', function(e) {
            handleContactClick(e, this);
        });
    }
    
    function handleContactClick(e, button) {
        const currentPage = window.location.pathname.split('/').pop();
        
        if (currentPage === 'home.html') {
            e.preventDefault();

            if (button.id === 'sidebar-contact-button') {
                sidebar.classList.remove('open');
                overlay.classList.remove('open');

                setTimeout(() => {
                    scrollToContactSection();
                }, 300);
            } else {
                scrollToContactSection();
            }
        }
    }
    
    function scrollToContactSection() {
        const contactSection = document.getElementById('contact-section');
        if (contactSection) {
            contactSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }

    if (window.location.hash === '#contact-section') {
        setTimeout(() => {
            scrollToContactSection();
        }, 100);
    }
});