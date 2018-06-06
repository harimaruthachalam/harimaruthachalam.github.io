$(function () {
  $("#hari-copy-year").text(new Date().getFullYear());
  $.get('lastUpdated.txt', function(data) {
    $("#hari-update-date").text(data);
  }, 'text');
});
