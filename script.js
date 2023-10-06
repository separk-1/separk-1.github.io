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
    const imageContainer = document.querySelector('.profile-container'); 
    imageContainer.addEventListener('mousedown', function(e) {
        isDragging = true;
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

    function disappearImage() {
        const image = document.getElementById('profileImage');
        let opacity = 1; // 시작할 때의 투명도
    
        // 페이드 아웃 애니메이션 함수
        function fadeOut() {
            opacity -= 0.01; // 투명도를 점차 감소시킵니다.
            image.style.opacity = opacity;
    
            // 투명도가 0보다 크면 계속 페이드 아웃을 진행합니다.
            if (opacity > 0) {
                setTimeout(() => {
                    requestAnimationFrame(fadeOut);
                }, 50); // 50ms 간격으로 애니메이션을 진행합니다.
            } else {
                image.style.display = 'none'; // 이미지를 완전히 숨깁니다.
            }
        }
    
        fadeOut(); // 페이드 아웃 함수를 호출합니다.
    }
    
    function changeImageWithFade(newImagePath) {
        const currentImage = document.getElementById('profileImage');
        const nextImage = document.getElementById('nextImage');
        
        nextImage.src = newImagePath;
        
        currentImage.classList.add('hidden');
        nextImage.classList.remove('hidden');
        
        setTimeout(() => {
            currentImage.src = newImagePath;
            currentImage.classList.remove('hidden');
            nextImage.classList.add('hidden');
        }, 1000);
    } 

    let lastCommand = ""; // 이전에 입력한 명령어를 저장하는 변수
    
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
                case 'gogo':
                    changeImageWithFade('images/cat.jpg');
                    break;
                case 'yellow':
                    changeImageWithFade('images/profile_yellow.jpg');
                    break;
                case 'gray':
                    changeImageWithFade('images/profile_gray.jpg');
                    break;
                case 'pink':
                    changeImageWithFade('images/profile_pink.jpg');
                    break;
                case 'smile':
                    changeImageWithFade('images/profile_smile.jpg');
                    break;
                case 'selfie':
                    changeImageWithFade('images/profile_selfie.jpg');
                    break;
                default:
                    console.log('Unknown command');
            }

            e.target.value = '';  // 커맨드 입력창 초기화
        } else if (e.key === 'ArrowUp') {
            e.target.value = lastCommand; // 이전 명령어를 입력창에 불러옵니다.
        }
    });
});
