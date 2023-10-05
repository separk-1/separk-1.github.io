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
    // 모든 .toggle-icon 요소를 선택합니다.
    const toggleIcons = document.querySelectorAll('.toggle-icon');

    // 각 .toggle-icon 요소에 클릭 이벤트 리스너를 추가합니다.
    toggleIcons.forEach(icon => {
        icon.addEventListener('click', function () {
            // 클릭된 .toggle-icon의 형제 요소인 .project-detail를 선택하고 토글합니다.
            const detail = this.nextElementSibling.nextElementSibling;
            detail.style.display = detail.style.display === 'none' ? 'block' : 'none';

            // 클릭된 .toggle-icon의 클래스를 토글합니다.
            this.classList.toggle('fa-chevron-down');
            this.classList.toggle('fa-chevron-up');
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // 이미지를 클릭하면 모달을 엽니다.
    const images = document.querySelectorAll('.preview-image');
    const modal = document.getElementById("myModal");
    const modalImg = document.getElementById("img01");
    const captionText = document.getElementById("caption");

    images.forEach(img => {
        img.onclick = function(){
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        }
    });

    // (X)를 클릭하면 모달을 닫습니다.
    const span = document.getElementsByClassName("close")[0];
    span.onclick = function() { 
        modal.style.display = "none";
    }
});
