$(document).ready(function() {
    $('#pagepiling').pagepiling({
      menu: '#menu',
      anchors: ['home', 'about', 'contact'],
      sectionsColor: ['#000', '#000', '#000'],
      navigation: {
        'position': 'right',
        'tooltips': ['Home', 'About me', 'Contact']
      }
  });
  });
