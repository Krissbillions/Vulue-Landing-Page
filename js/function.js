window.addEventListener('scroll', function(){
    var navbar = document.getElementById('navbar');
    var scrollPosition = window.scrollY;
    // var icon = document.getElementById('bar-slash')

    var threshold = 50;

    if (scrollPosition > threshold){
        // navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
        navbar.style.backgroundColor = ' transparent';

        // icon.style.display = 'none';
    }
    else{
        // navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        // icon.style.display = 'block';
    }
    
});
document.addEventListener("DOMContentLoaded",function(){
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(link => {
        link.addEventListener("mouseover", function(){
            this.style.color = "blue";
        });
        link.addEventListener("mouseout", function(){
            this.style.color = "white";
        });
    });
});