const filters = {
    all: 'all',
    frontend: 'front-end',
    backend: 'back-end'
  };
  
  $(document).ready(function() {
    const $projectsContainer = $('#projects-container');
    const $buttons = $('.btn');
    const $projects = $('#projects .col-lg-6');
  
    $buttons.on('click', function() {
      const filter = $(this).attr('id');
  
      $projectsContainer.fadeOut(500, function() {
        if (filter === '') {
          $projects.show();
        } else if (filter === 'all') {
          $projects.show();
        } else {
          $projects.hide().filter('.' + filters[filter]).show();
        }    
        $projectsContainer.fadeIn(500);
      });
    });
  });