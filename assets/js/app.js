var url = "https://simple.ripley.cl/jugueteria-y-ninos/juguetes-por-edad/";
var newUrl = "";
var alertText = $("#section2 p.alert-text");
var checkBoxTop = $('#toprow .item input[type="checkbox"]');
var checkBoxBot = $('#botrow .item input[type="checkbox"]');
var ageItem = $("#section2 #toprow .item");
var priceItem = $("#section2 #botrow .item");

$(checkBoxTop).on("change", function () {
  $(checkBoxTop).not(this).prop("checked", false);
});

$(checkBoxBot).on("change", function () {
  $(checkBoxBot).not(this).prop("checked", false);
});

$(ageItem).click(function () {
  $(ageItem).removeClass("active");
  $(this).addClass("active");
  var checks = $(checkBoxTop);
  checks.not(this).prop("checked", false);
  $(this)
    .find("input[type=checkbox]")
    .prop("checked", !$(this).find("input[type=checkbox]").prop("checked"));
});

$(priceItem).click(function () {
  $(priceItem).removeClass("active");
  $(this).addClass("active");
  var checks = $(checkBoxBot);
  checks.not(this).prop("checked", false);
  $(this)
    .find("input[type=checkbox]")
    .prop("checked", !$(this).find("input[type=checkbox]").prop("checked"));
});

$(".buttonselector").click(function () {
  if (
    $("#toprow .item input[name=edad]:checked")[0] === undefined ||
    $("#botrow input[name=precio]:checked")[0] === undefined
  ) {
    alertText.addClass("active");
  } else {
    alertText.removeClass("active");
  }

  var checkEdad = $("#toprow .item input[name=edad]:checked")[0].value;
  var checkPrecio = $("#botrow input[name=precio]:checked")[0].value;

  //Use Array.join() method to join the array elements by " OR "
  newUrl = url + checkEdad + "?facet=" + checkPrecio;
  window.open(newUrl, "_blank");
});

$('#carousel1.owl-carousel').owlCarousel({
  loop: true,
  margin:10,
  nav:true,
  autoplay: true,
  autoplayTimeout: 4500,
  autoplayHoverPause: true,
  navText: ["<div class='nav-btn prev-slide'><img src='assets/img/prev.png'></div>", "<div class='nav-btn next-slide'><img src='assets/img/next.png'></div>"],
    responsive:{
        0:{
            items:2
        },
        600:{
            items:4
        },
        1000:{
            items:5
        }
    }
})

$('#carousel2.owl-carousel').owlCarousel({
  loop: true,
  margin:10,
  nav:true,
  autoplay: true,
  autoplayTimeout: 4500,
  autoplayHoverPause: true,
  navText: ["<div class='nav-btn prev-slide'><img src='assets/img/prev.png'></div>", "<div class='nav-btn next-slide'><img src='assets/img/next.png'></div>"],
    responsive:{
        0:{
            items:2
        },
        600:{
            items:4
        },
        1000:{
            items:5
        }
    }
})