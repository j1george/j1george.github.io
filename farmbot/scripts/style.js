$(document).ready(function(){
  $('#accordion h1').click(function() {
      $(this).next().toggle('slow');
      return true;
  }).next().show();
});
