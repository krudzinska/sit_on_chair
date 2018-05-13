$(() => {

//menu:
    const subMenu = $('.sub_menu');
    const nav = $('.main_menu li');

    nav.first().on("mouseenter", () => subMenu.slideDown());
    nav.first().on("mouseleave", () => subMenu.slideUp());

//galeria:
    const box1 = $('.small_box1');
    const line1 = box1.find('.box_line');
    const box2 = $('.small_box2');
    const line2 = box2.find('.box_line');

    box1.on("mouseenter", () => line1.fadeOut());
    box1.on("mouseleave", () => line1.fadeIn());
    box2.on("mouseenter", () => line2.fadeOut());
    box2.on("mouseleave", () => line2.fadeIn());

//slider:
    const slider = $('.slider_picture li');
    const arrowLeft = $('.arrow_left');
    const arrowRight = $('.arrow_right');

    let counter = 0;

    slider.eq(counter).css("display", "block");

    arrowLeft.on('click', function(){
        slider.eq(counter).hide();
        counter = (counter == 0) ? slider.length - 1 : counter - 1;
        slider.eq(counter).slideDown(600);
    });

    arrowRight.on('click', function(){
        slider.eq(counter).hide();
        counter = (counter >= slider.length - 1) ? 0 : counter + 1;
        slider.eq(counter).slideDown(600);
    });

//calculator:
    const arrows = $('.list_arrow');
    const listPanel = $('.list_panel');
    const colorOpt = listPanel.eq(1).find('li');
    const patternOpt = listPanel.eq(2).find('li');
    const chairName = listPanel.eq(0).find('li');
    const name = $('.title');
    const color = $('.color');
    const pattern = $('.pattern');
    const transport = $('.transport');
    const transportVal = $('.transport_value');
    const chairVal = $('.title_value');
    const colorVal = $('.color_value');
    const patternVal = $('.pattern_value');
    const checkbox = $('#transport');
    const form = $('.application');
    const sum = $('.sum strong');

    arrows.on('click', (e) => {
        $(e.target).siblings('.list_panel').slideToggle();
    });

    let a = 0;
    let b = 0;
    let c = 0;
    let d = 0;

    let suma = () => a + b + c + d;
    sum.text(suma);

    chairName.on('click', (e) => {
        const text = $(e.target).text();
        name.text("Chair " + text);
        listPanel.slideUp();

        if (text === "Clair") {
            a = 200;
            chairVal.text(a);

        }
        if (text === "Margarita") {
            a = 220;
            chairVal.text(a);
        }
        if (text === "Selena") {
            a = 230;
            chairVal.text(a);
        }

        sum.text(suma);
    });

    colorOpt.on('click', (e) => {
        const text = $(e.target).text();
        color.text(text);
        listPanel.slideUp();

        if (text === "Czerwony") {
            b = 30;
            colorVal.text(b);
        }
        if (text === "Czarny") {
            b = 10;
            colorVal.text(b);
        }
        if (text === "Pomarańczowy") {
            b = 20;
            colorVal.text(b);
        }
        sum.text(suma);
    });

    patternOpt.on('click', (e) => {
        const text = $(e.target).text();
        pattern.text(text);
        listPanel.slideUp();

        if (text === "Skóra") {
            c = 100;
            patternVal.text(c);
        }
        if (text === "Tkanina") {
            c = 0;
            patternVal.text(c);
        }
        sum.text(suma);
    });

    checkbox.on('click', (e) => {
        checkbox.toggleClass('active');

        if (checkbox.hasClass('active')) {
            d = 80;
            transportVal.text(d);
            transport.text("Transport");
        } else {
            d = 0;
            transportVal.text("");
            transport.text("");
        }
        sum.text(suma);
    });


});
