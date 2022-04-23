$(document).ready(function () {
    $('#pagepiling').pagepiling({
        menu: '#menu',
        anchors: ['head', 'soft-skills', 'hard-skills', 'krasnarodyna', 'clarionio', 'berizka', 'contact'],
        navigation: {
            tooltips: ['Home', 'Soft skills', 'Hard skils', 'KRASNARODYNA', 'CLARIONIO', 'BERIZKA', 'Contacts']
        }
    });
});

function closeMenuToggle() {
    document.getElementById("menu__toggle").click();
}