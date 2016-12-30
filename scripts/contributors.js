window.onload = function() {
  var request = new XMLHttpRequest();
  request.onload = outputContributors;
  request.open('get', 'https://api.github.com/repos/maban/styleguides/contributors?&per_page=200', true)
  request.send()
  function outputContributors() {
    var contributors = JSON.parse(this.responseText);
    var injectContributors = document.getElementById("people");
    for (i in contributors) {
      var username = contributors[i].login
      var avatar = contributors[i].avatar_url
      var url = contributors[i].html_url
      var contributions = contributors[i].contributions
      var html = '<li class="person"><a class="person__url" href="'+ url +'"><img src="' + avatar + '" alt="" width="50" class="person__avatar" title="' + username + '"/></a></li>';
      injectContributors.innerHTML += (html);
    }
  }
}
