document.getElementById('menu-icon').addEventListener('click', function() {
    var navbar = document.getElementById('navbar');
    if (navbar.style.maxHeight === '200px') {  /* 열려있는 상태 */
        navbar.style.maxHeight = '0';
    } else {
        navbar.style.maxHeight = '200px';  /* 닫혀있는 상태 */
    }
});
