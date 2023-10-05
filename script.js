document.addEventListener('DOMContentLoaded', function() {
    // Variables
    let isDragging = false;
    let rotationSpeed = 0;
    let rotation = 0;
    const image = document.getElementById('profileImage');
    const friction = 0.97;

    // Navbar smooth scrolling
    document.querySelectorAll('#navbar a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Mobile menu toggle
    document.querySelector('.menu-icon').addEventListener('click', function() {
        var navItems = document.querySelectorAll('nav li');
        for (var i = 1; i < navItems.length; i++) {  
            if (navItems[i].style.display === 'block') {
                navItems[i].style.display = 'none';
            } else {
                navItems[i].style.display = 'block';
            }
        }
    });

    // Image rotation
    image.addEventListener('mousedown', function(e) {
        if(e.target === image) {
            isDragging = true;
        }
    });

    document.addEventListener('mousemove', function(e) {
        if (isDragging) {
            const mouseMove = e.movementX;
            rotationSpeed += mouseMove * 0.5;
        }
    });

    document.addEventListener('mouseup', function() {
        isDragging = false;
    });

    image.addEventListener('click', function() {
        rotationSpeed = 0;
        rotation = 0;
        image.style.transform = 'rotate(' + rotation + 'deg)';
    });

    function animate() {
        rotation += rotationSpeed;
        rotationSpeed *= friction;
        image.style.transform = 'rotate(' + rotation + 'deg)';
        requestAnimationFrame(animate);
    }
    animate();

    // Project details toggle
    const toggleIcons = document.querySelectorAll('.toggle-icon');
    toggleIcons.forEach(icon => {
        icon.addEventListener('click', function () {
            const detail = this.nextElementSibling.nextElementSibling;
            detail.classList.toggle('open');
            this.classList.toggle('fa-chevron-down');
            this.classList.toggle('fa-chevron-up');
        });
    });

    // Image link popup
    const imageLinks = document.querySelectorAll('.image-link');
    imageLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            window.open(link.href, 'ImagePopup', 'width=600,height=600');
        });
    });

    // Command input
    document.getElementById('command-input').addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            const command = e.target.value.trim();
            const [action, value] = command.split(' ');

            switch(action) {
                case 'rotate':
                    rotationSpeed = parseFloat(value);
                    break;
                case 'stop':
                    rotationSpeed = 0;
                    break;
                case 'disappear':
                    disappearImage();
                    break;
                default:
                    console.log('Unknown command');
            }

            e.target.value = '';  // Clear the command input
        }
    });
});
