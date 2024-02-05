function toggleMenu() {
    var navbar = document.querySelector('.navbar');
    navbar.classList.toggle('responsive');
}

function toggleDarkMode() {
    var body = document.body;
    body.classList.toggle('dark-mode');

    var darkModeSwitch = document.querySelector('.dark-mode-switch');
    darkModeSwitch.classList.toggle('active');

    var navbar = document.querySelector('.navbar');
    navbar.classList.toggle('dark-navbar');

    textSwitcher1();
    
    var blog_left = document.querySelector('.leftbox');
    blog_left.classList.toggle('leftbox-dark');

    var postcontainer = document.querySelectorAll('.postcontainer');
    postcontainer[0].classList.toggle('postcontainer-dark');
    postcontainer[1].classList.toggle('postcontainer-dark');

    var blog_right = document.querySelector('.rightbox');
    blog_right.classList.toggle('rightbox-dark');

    var skillset = document.querySelector('.skillset1text');
    skillset.classList.toggle('skillset1text-dark');

    var skillset = document.querySelector('.achievements1text');
    skillset.classList.toggle('achievements1text-dark');
}

function textSwitcher1() {
    var x = document.getElementById("dynamicText");
    if (x.innerHTML === "<h1>Oh, so you like dark mode I see<br>ME TOO!!!</h1>") {
      x.innerHTML = "<h1>Hi!! Nice to meet you</h1>";
    } else {
      x.innerHTML = "<h1>Oh, so you like dark mode I see<br>ME TOO!!!</h1>";
    }
  }

  function scrollToId(id) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }

  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const targetId = event.target.getAttribute('href');
      scrollToId(targetId);
    });
  });