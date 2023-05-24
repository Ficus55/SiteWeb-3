//menu fixed and backtotop
window.addEventListener("scroll", () => {
    if (window.pageYOffset > 50) {
        document.querySelector(".menu").classList.add('menu_fixed');
        document.querySelector(".backtotop").classList.add('backtotop_active');
    } else {
        document.querySelector(".menu").classList.remove('menu_fixed');
        document.querySelector(".backtotop").classList.remove('backtotop_active');
    }
});


//menu

document.querySelector(".burger").addEventListener("click", () => {
    document.querySelector(".menu").classList.add('show');
});

document.querySelector(".close_menu").parentElement.addEventListener("click", () => {
    document.querySelector(".menu").classList.remove('show');
});

document.querySelector('.menu_list').addEventListener("click", (event) => {
    if (event.target.closest('.menu_link')) {
        document.querySelector(".menu").classList.remove('show');
    }
});



//smooth scroll
let menuLinks = document.querySelectorAll(".menu_link, .logo_link, .backtotop");
if (menuLinks.length > 0) {
    menuLinks.forEach((event) => {
        event.addEventListener("click", (elem) => {
            let link = elem.target.getAttribute('href');
            elem.preventDefault();
            if (link === '#home' || elem.target.closest('.logo_link') || elem.target.closest('.backtotop')) {
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                });
            } else if (link !== '' && document.querySelector(link)) {
                let scrollToObject = document.querySelector(link).getBoundingClientRect().top + window.pageYOffset - document.querySelector(".header").offsetHeight;
                window.scrollTo({
                    top: scrollToObject,
                    left: 0,
                    behavior: 'smooth'
                });
            }
        });
    });
}







// slider

const configHome = {
    type: 'carousel',
    startAt: 0,
    perView: 1,
    gap: 0,
    autoplay: 8000
};

new Glide('.glide_home', configHome).mount()


const configBlog = {
    type: 'carousel',
    startAt: 0,
    perView: 1,
    gap: 30,
    // autoplay: 8000,
    perView: 3,
    breakpoints: {
        1090: {
            perView: 2
        },
        527: {
            perView: 1
        }
    }
};

new Glide('.glide_blog', configBlog).mount()


//copyright
window.addEventListener("load", () => {
    document.querySelector(".copyright p span").innerHTML = new Date().getFullYear();
});


//Form validation

function checkEmail(input) {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}

//Remove warning message
document.addEventListener("input", function (event) {
    if (event.target.nextElementSibling.closest(".error")) {
        event.target.nextElementSibling.closest(".error").remove();
    }
});

//Contact form
let newsletterForm = document.forms.newsletter_form;
let newsletterFormEmail = newsletterForm.email;

newsletterForm.addEventListener("submit", function (event) {
    if (checkEmail(newsletterFormEmail)) {
        if (!newsletterFormEmail.nextElementSibling.closest(".error")) {
            newsletterFormEmail.insertAdjacentHTML('afterend', `<div class="error">Enter valid email please! <div>Example: email-name@domain.name</div></div>`);
        }
        event.preventDefault();
    }
});



































































