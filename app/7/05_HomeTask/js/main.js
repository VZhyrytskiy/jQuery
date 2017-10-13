$(function(){

    // увеличение маленьких фото
    $(".small_photo").on("click", function(){
        // снять со всех класс выделение
        $(".small_photo").removeClass("small_photo_selected");
        var photo_url = $(this).addClass("small_photo_selected").attr("src");
        var new_photo_url = photo_url.replace("/s/", "/m/");
        var new_a_url = photo_url.replace("/s/", "/l/");
        $(".photo").attr("src", new_photo_url)
                   .parent().attr("href", new_a_url);
    });

    // делаем ссылку на корзину, когда она не пуста
    if ($("#basket").has("#basket_empty.hidden").length) {
        $("#basket").css("cursor", "pointer")
                    .attr("title", "Посмотреть содержимое корзины")
                    .on("click", function(){
                        window.location.href="#";
                    });
    }
    // убираем ссылку, когда корзина пуста
    else {
        $("#basket").css("cursor", "default")
                    .removeAttr("title")
                    .off("click");
    }

});