document.getElementById('menu-icon').addEventListener('click', function() {
    var navbar = document.getElementById('navbar');
    if (navbar.style.maxHeight === '200px') {
        navbar.style.maxHeight = '0';
    } else {
        navbar.style.maxHeight = '200px';
    }
});
