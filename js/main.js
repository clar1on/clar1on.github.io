$(document).ready(function () {
    $('#pagepiling').pagepiling({
        menu: '#menu',
        anchors: ['head', 'about', 'krasnarodyna', 'clarionio', 'contact'],
        navigation: {
            tooltips: ['Головний слайд', 'Про мене', 'ФГ КраснаРодина', 'CLARIONIO', 'Контактна інформація'],
        },
        // loopTop: true,
        // loopBottom: true
    });
});
