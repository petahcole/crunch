$(document).ready(function() {
  var foodURL = 'http://localhost:3000/foods';
  $('#get-food').click(function() {
    $.get(foodURL, function(data) {
      console.log(data);
      var randomNum =  Math.floor(Math.random() * data.foods.length);
      var randomFood1 = data.foods[randomNum];
      var randomFood2 = data.foods[randomNum + 1];
      $('#food1').text(randomFood1.food);
      $('#food2').text(randomFood2.food);
    });
  });
});
