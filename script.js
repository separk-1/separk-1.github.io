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

document.addEventListener("DOMContentLoaded", function () {
    // 모든 .project-title 요소를 선택합니다.
    const projectTitles = document.querySelectorAll('.project-title');

    // 각 .project-title 요소에 클릭 이벤트 리스너를 추가합니다.
    projectTitles.forEach(title => {
        title.addEventListener('click', function () {
            // 클릭된 .project-title의 형제 요소인 .project-detail를 선택하고 토글합니다.
            const detail = this.nextElementSibling;
            detail.style.display = detail.style.display === 'none' ? 'block' : 'none';
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const projectTitles = document.querySelectorAll('.project-title');

    projectTitles.forEach(title => {
        title.addEventListener('click', function () {
            const detail = this.nextElementSibling;
            const toggleIcon = this.querySelector('.toggle-icon');

            if(detail.style.display === 'none' || !detail.style.display) {
                detail.style.display = 'block';
                toggleIcon.style.transform = 'rotate(180deg)';
            } else {
                detail.style.display = 'none';
                toggleIcon.style.transform = 'rotate(0deg)';
            }
        });
    });
});
