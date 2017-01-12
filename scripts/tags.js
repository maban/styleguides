$(document).ready(function() {
  // If selections in url show them in tags and resources
  var hash = location.hash;
  if (hash.length) {
    var selected_tags = hash.substr(1).split(',');
    $('.resource').hide();
    $('.tags :checkbox').prop('checked', false);

    selected_tags.forEach(function(value) {
      $('.tags :checkbox[value="' + value + '"]').prop('checked', true);
      $('.' + value).show();
    });
  }

  // Toggle tag state & url history
  $('.tags :checkbox').click(function() {
    var selected_tags = [];
    $('.resource').hide();

    if ($('.tags :checkbox:checked').length) {
      $('.tags .show-all:checkbox').prop('checked', false);
      $('.tags :checkbox:checked').each(function() {
        selected_tags.push($(this).val());
        $('.' + $(this).val()).show();
      });
      history.pushState(undefined, '', '#' + selected_tags.join(','));
    } else {
      $('.tags .show-all:checkbox').trigger('click');
    }
  });

  // Show all resources and uncheck tags
  $('.tags .show-all:checkbox').click(function() {
    $('.resource').show();
    $('.tags :checkbox').prop('checked', false);
    $('.tags .show-all:checkbox').prop('checked', true);
    history.pushState(undefined, '', window.location.pathname);
  });
});
