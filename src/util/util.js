(function() {

  var searchBarContainer = document.getElementById('search-container');
  var searchBarInput = document.getElementById('search-input')

  searchBarInput.addEventListener('click', function() {
    searchBarContainer.style.boxShadow = 'rgb(183, 209, 249) 0px 0px 5px 2px';
  }, false);

  document.onclick = function(e) {
    var from = e.target || e.srcElement;
    if (from.id === 'search-input') {
      return;
    }
    searchBarContainer.style.boxShadow = 'none';
  }

  $('.list-group-item').click(function(e) {
  e.preventDefault();
  $(this).siblings().removeAttr('id');
  $(this).attr('id', 'selected');

});




}());
