$(document).ready(function() {
  // If selections in url show them in tags and resources
  var hash = location.hash;
  if (hash.length) {
    var selected_tags = hash.substr(1).split(',');
    $('.c-card-list__item').hide();
    $('.c-toggle :checkbox').prop('checked', false);

    selected_tags.forEach(function(value) {
      $('.c-toggle :checkbox[value="' + value + '"]').prop('checked', true);
      $('.' + value).show();
    });
  }

  // Toggle tag state & url history
  $('.c-toggle :checkbox').click(function() {
    var selected_tags = [];
    $('.c-card-list__item').hide();

    if ($('.c-toggle :checkbox:checked').length) {
      $('.c-toggle .show-all:checkbox').prop('checked', false);
      $('.c-toggle :checkbox:checked').each(function() {
        selected_tags.push($(this).val());
        $('.' + $(this).val()).show();
      });
      history.pushState(undefined, '', '#' + selected_tags.join(','));
    } else {
      $('.c-toggle .show-all:checkbox').trigger('click');
    }
  });

  // Show all resources and uncheck tags
  $('.c-toggle .show-all:checkbox').click(function() {
    $('.c-card-list__item').show();
    $('.c-toggle :checkbox').prop('checked', false);
    $('.c-toggle .show-all:checkbox').prop('checked', true);
    history.pushState(undefined, '', window.location.pathname);
  });
});
