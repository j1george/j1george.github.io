$(document).ready(function(){
  $('#accordion h1.hide').click(function() {
      $(this).next().toggle('slow');
      return true;
  }).next().hide();
});

$(document).ready(function(){
  $('#accordion h1.show').click(function() {
      $(this).next().toggle('slow');
      return true;
  }).next().show();
});
