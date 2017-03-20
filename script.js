
jQuery(function(){

  let cat1 = $('#cat1');
  let cat2 = $('#cat2');
  let cat3 = $('#cat3');
  let targetImage = $('#target_img');
  let target = $('#target');
  let startBtn = $('#start_btn');
  let slowDownBtn = $('#slow_btn');
  let catImage = $('#cat_img1');
  let catImage2 = $('#cat_img2');
  let catImage3= $('#cat_img3');

//http://stackoverflow.com/questions/29884654/button-that-refresh-page-on-click
//refresh button

  let otherCat = [cat2, cat3]
  let score = 0

$('#next_cat_btn').click(function() {
  startBtn.show();
  slowDownBtn.show();
  otherCat[0].css("visibility", "visible");
  otherCat.shift()
})

let catCount = 0



startBtn.click(function(){
//stacey's help
  catCount ++;
// console.log('start');
//http://stackoverflow.com/questions/16699330/make-a-div-move-across-the-screen
  if (catCount === 1) {
       cat1.animate({left: "+=1240"}, 1500);
       slowDownBtn.click(function() {
        //this event listener was still calling... Adding another if statement makes it work
  if(catCount===1){
          console.log('slowdown');
          cat1.stop();
//collision check
          let collision = checkCollision(catImage, targetImage);
            console.log(collision);
          if(collision){
            $('#HIT').text('HIT!')
            setTimeout(function(){
              $('#HIT').hide();
            }, 2400)
            console.log(score)
              score += 1
              console.log(score)
              $('#score_board').text("SCORE: " + score)
          }else if (!collision) {
                $('#MISS').text('MISS')
                 setTimeout(function(){
                  $('#MISS').hide();
            }, 2400)
          }
        }
          startBtn.hide();
          slowDownBtn.hide();
            });



   }
   else if(catCount === 2) {

       cat2.animate({left: "+=1240"}, 1500);
       slowDownBtn.click(function() {
   if(catCount === 2){
            console.log('slowdown');
          cat2.stop();

          let collision2 = checkCollision(catImage2, targetImage);
            console.log(collision2);

          if(collision2){
            $('#HIT').show()
            $('#HIT').text('HIT!')
            setTimeout(function(){
              $('#HIT').hide();
            }, 2400)
              console.log(score)
              score +=1
              console.log(score)
            $('#score_board').text("SCORE: " + score)
          }else if (!collision2) {
            $('#MISS').show()
            $('#MISS').text('MISS')
            setTimeout(function(){
            $('#MISS').hide();
            }, 2400)
          }}});




  } else if(catCount ===3){

         cat3.animate({left: "+=1240"}, 1500);
         slowDownBtn.click(function() {
    if(catCount === 3){
            console.log('slowdown');
          cat3.stop();

          let collision3 = checkCollision(catImage3, targetImage);
            console.log(collision3);

          if(collision3){
            $('#HIT').show()
            $('#HIT').text('HIT!')
            setTimeout(function(){
              $('#HIT').hide();
            }, 2400)
              console.log(score)
              score +=1
              console.log(score)
            $('#score_board').text("SCORE: " + score)

          }else if (!collision3) {
            $('#MISS').show()
            $('#MISS').text('MISS')
            setTimeout(function(){
            $('#MISS').hide();
            }, 2400)
          }}});

       endOfGamePause();

    }

 }); //end of function

let endOfGame = function() {
  if (score === 3){
    alert('YOU WON!!!!!!')
         }else if(score !== 3){
    alert("YOU LOOOOOSEEEEE")
     }
}

let endOfGamePause = function() {
  setTimeout(endOfGame, 1000)
}

//COLLISION DETECTION WITH BRYAN
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






