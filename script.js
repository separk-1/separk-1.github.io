document.querySelectorAll('#navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.querySelector('.menu-icon').addEventListener('click', function() {
    var navItems = document.querySelectorAll('nav li');
    for (var i = 1; i < navItems.length; i++) {  // 첫 번째 항목(햄버거 메뉴)을 제외하고 순회
        if (navItems[i].style.display === 'block') {
            navItems[i].style.display = 'none';
        } else {
            navItems[i].style.display = 'block';
        }
    }
});


document.addEventListener('DOMContentLoaded', function() {
    let isDragging = false;
    let rotationSpeed = 0;
    let rotation = 0;
    const image = document.getElementById('profileImage');
    const friction = 0.95; // Friction for deceleration

    image.addEventListener('mousedown', function(e) {
        if(e.target === image) {
            isDragging = true;
        }
    });

    document.addEventListener('mousemove', function(e) {
        if (isDragging) {
            const mouseMove = e.movementX;
            rotationSpeed = mouseMove * 0.5; // Adjust the multiplier for sensitivity
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
});

