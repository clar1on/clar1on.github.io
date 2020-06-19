$(document).ready(function () {
    $('#pagepiling').pagepiling({
        menu: '#menu',
        anchors: ['head', 'about', 'soft-skills', 'krasnarodyna', 'clarionio', 'berizka' , 'contact'],
        navigation: {
            tooltips: ['Головний слайд', 'Про мене', 'Особисті якості', 'ФГ КраснаРодина', 'CLARIONIO', 'BERIZKA', 'Контактна інформація'],
        }
    });


});

function closeMenuToggle() {
   document.getElementById("menu__toggle").click();
}


