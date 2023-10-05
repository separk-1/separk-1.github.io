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

document.getElementById('profileImage').addEventListener('click', function() {
    this.style.transform = this.style.transform === 'rotate(180deg)' ? 'rotate(0deg)' : 'rotate(180deg)';
});
