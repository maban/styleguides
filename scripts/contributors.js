window.onload = function() {
  var request = new XMLHttpRequest();
  request.onload = outputContributors;
  request.open('get', 'https://api.github.com/repos/maban/styleguides/contributors?&per_page=200', true)
  request.send()
  function outputContributors() {
    var contributors = JSON.parse(this.responseText),
        injectContributors = document.getElementById('people'),
        html = '';
    for (i in contributors) {
      var username = contributors[i].login,
          avatar = contributors[i].avatar_url,
          url = contributors[i].html_url,
          contributions = contributors[i].contributions;
      html += '<li class="c-avatar-list__item"><a class="c-avatar" href="'+ url +'"><img data-src="' + avatar + '" alt="" width="50" class="lazy-load c-avatar__image" title="' + username + '"/></a></li>';
    }
    injectContributors.innerHTML = html;
    // Update lazyLoad after inserting the elements
    oLazyLoad.update();
  }
}
