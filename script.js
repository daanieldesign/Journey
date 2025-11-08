$(document).ready(function() {
    // Scroll dolů po kliknutí
    $("#explore-btn").click(function() {
        $("html, body").animate({ scrollTop: $("#intro").offset().top - 60 }, 800);
    });

    // Toggle text
    $("#toggle-info").click(function() {
        $("#extra-info").slideToggle(600);
        $(this).text($(this).text() === "Více o mně" ? "Skrýt text" : "Více o mně");
    });

    // Fade-in při scrollování
    $(window).on("scroll", function() {
        $(".fade-in").each(function() {
            const pos = $(this).offset().top;
            const winTop = $(window).scrollTop();
            if (pos < winTop + $(window).height() - 100) {
                $(this).addClass("visible");
            }
        });
    });

    // Tlačítko nahoru
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $("#scrollTop").fadeIn();
        } else {
            $("#scrollTop").fadeOut();
        }
    });

    $("#scrollTop").click(function() {
        $("html, body").animate({ scrollTop: 0 }, 800);
    });
});
// Navbar color change on scroll
$(window).on("scroll", function() {
    const navbar = $(".navbar");
    if ($(this).scrollTop() > $(".hero").height() - 80) {
        navbar.addClass("scrolled").removeClass("transparent");
    } else {
        navbar.addClass("transparent").removeClass("scrolled");
    }
});
// Navbar barva při scrollu
$(window).on("scroll", function() {
    const navbar = $(".navbar");
    if ($(this).scrollTop() > $(".hero").height() - 80) {
        navbar.addClass("scrolled").removeClass("transparent");
    } else {
        navbar.addClass("transparent").removeClass("scrolled");
    }
});

// Fade-in efekt pro destinace
$(window).on("scroll", function() {
    $(".showcase-item").each(function() {
        const elementTop = $(this).offset().top;
        const windowBottom = $(window).scrollTop() + $(window).height();
        if (windowBottom > elementTop + 100) {
            $(this).addClass("visible");
        }
    });
});

// Odeslání formuláře (kontakt.html)
$(document).on("submit", ".contact-form", function(e) {
    e.preventDefault();
    alert("Zpráva byla úspěšně odeslána. Děkujeme!");
    window.location.href = "index.html";
});
