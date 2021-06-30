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
