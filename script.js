
jQuery(function(){

  let cat1 = $('#cat1');
  let cat2 = $('#cat2');
  let cat3 = $('#cat3');
  let targetImage = $('#target_img');
  let target = $('#target');
  let startBtn = $('#start_btn');
  let slowDownBtn = $('#slow_btn');
  let catImage = $('#cat_img1');


  // let differentCats = [
  //   ['crazyBabyCat','images/crazyBabyCat.png'],
  //   ['orangeCat','images/orangeCat.png'],
  //   ['whatCat','images/whatCat.png']
  // ];

 // function newCatPhoto(){
 //    catImage.attr('src', differentCats[Math.floor(Math.random() * differentCats.length)][1]);
 //  }

 //  newCatPhoto();

  let otherCats = [cat2, cat3]
  let score = 0

function startGame() {

   startBtn.click(function(){

// console.log('start');
//http://stackoverflow.com/questions/16699330/make-a-div-move-across-the-screen
       cat1.animate({left: "+=1240"}, 1500);
       slowDownBtn.click(function() {
            console.log('slowdown');
          cat1.stop();

          let collision = checkCollision(catImage, targetImage);
            console.log(collision);

          if(collision){
            $('#HIT').text('HIT!')
            setTimeout(function(){
              $('#HIT').remove();
            }, 2400)
              score++
              $('#score_board').text("SCORE: " + score)
          }else if (!collision) {
                $('#MISS').text('MISS')
                 setTimeout(function(){
                  $('#MISS').remove();
            }, 2400)
          }});

   });
}

startGame();

catArray = [cat1, cat2, cat3]
  let nextCat = function(){
  $('#next_cat_btn').click(function(){

   startGame();
  })
  }

//shows invisible cats
$('#next_cat_btn').on('click', function(event) {
  /* Act on the event */
  otherCats[0].css("visibility", "visible");
  otherCats.shift()
});







//COLLISION DETECTION
 let checkCollision = function(cat, target){
    // Determine the x coordinate of obj1
    cat_position = cat.offset();
    cat_x = cat_position.left;

    // Determine the x coordinate of obj2
    target_position = target.offset();
    target_x = target_position.left;

    // Determine the widths
    cat_width = cat.width();
    target_width = target.width();

    if(cat_x + cat_width > target_x &&
      target_x + target_width > cat_x){
      return true
    } else {
      return false;
    }
  }



});






